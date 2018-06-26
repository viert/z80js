const ParityBit = require('./parity')
const { unot8, unsigned8, signed8, hex16, hex8, usum8, unsigned16 } = require('./utils')

const RegisterMap = {
  0b111: 'a',
  0b000: 'b',
  0b001: 'c',
  0b010: 'd',
  0b011: 'e',
  0b100: 'h',
  0b101: 'l'
}

const Register16Map = {
  0b00: 'bc',
  0b01: 'de',
  0b10: 'hl',
  0b11: 'sp'
}

const Register16Map2 = {
  0b00: 'bc',
  0b01: 'de',
  0b10: 'hl',
  0b11: 'af'
}

const Prefixes = {
  ix: 0xdd,
  iy: 0xfd
}

// S Z 5 H 3 PV N C

const f_c = 1
const f_n = 2
const f_pv = 4
const f_3 = 8
const f_h = 16
const f_5 = 32
const f_z = 64
const f_s = 128

const c_nz = 0b000
const c_z = 0b001
const c_nc = 0b010
const c_c = 0b011
const c_po = 0b100
const c_pe = 0b101
const c_p = 0b110
const c_m = 0b111

const hasCarry_adc = true
const hasCarry_sbc = true
const hasCarry_add = false
const hasCarry_sub = false

const isSub_adc = false
const isSub_sbc = true
const isSub_add = false
const isSub_sub = true

const isDec_inc = false
const isDec_dec = true

const ie_ei = true
const ie_di = false

const ArgType = {
  Byte: 1,
  Word: 2,
  Offset: 3
}

const Conditions = {
  nz: c_nz,
  z: c_z,
  nc: c_nc,
  c: c_c,
  po: c_po,
  pe: c_pe,
  p: c_p,
  m: c_m
}

// Z80 constructor

const Z80 = function(memory, io, debug) {
  if (!(this instanceof Z80)) {
    throw 'Z80 is a constructor, use "new" keyword'
  }

  if (!memory) {
    throw 'Constructor should be called with a Memory instance as the first argument'
  }

  if (!memory.read8 || typeof memory.read8 !== 'function') {
    throw 'Memory instance should have read8 method'
  }
  if (!memory.write8 || typeof memory.write8 !== 'function') {
    throw 'Memory instance should have read8 method'
  }
  this.memory = memory
  this.io = io
  this.debugMode = debug

  this.read8 = addr => {
    this.tStates += 3
    let value = memory.read8(addr)
    this.debug(`Reading memory address 0x${hex16(addr)} = 0x${hex8(value)}`)
    return value
  }

  this.write8 = (addr, value) => {
    this.tStates += 3
    this.debug(`Writing to memory address 0x${hex16(addr)} = 0x${hex8(value)}`)
    memory.write8(addr, value)
  }

  this.read16 = addr => {
    return this.read8(addr) | (this.read8(addr + 1) << 8)
  }
  this.write16 = (addr, value) => {
    let high = (value & 0xff00) >> 8
    let low = value & 0xff
    this.write8(addr, low)
    this.write8(addr + 1, high)
  }

  this.ioread = addr => {
    this.tStates += 4
    return this.io.read(addr)
  }
  this.iowrite = (addr, value) => {
    this.tStates += 4
    return this.io.write(addr, value)
  }

  // Creating registers
  this.r1 = {}
  this.r2 = {}

  let bf0 = new ArrayBuffer(16)
  let bf1 = new ArrayBuffer(14)
  let bf2 = new ArrayBuffer(14)
  this.b0 = new Uint8Array(bf0)
  this.w0 = new Uint16Array(bf0)
  this.b1 = new Uint8Array(bf1)
  this.w1 = new Uint16Array(bf1)
  this.b2 = new Uint8Array(bf2)
  this.w2 = new Uint16Array(bf2)
  this._defineByteRegister('f', 0)
  this._defineByteRegister('a', 1)
  this._defineByteRegister('c', 2)
  this._defineByteRegister('b', 3)
  this._defineByteRegister('e', 4)
  this._defineByteRegister('d', 5)
  this._defineByteRegister('l', 6)
  this._defineByteRegister('h', 7)
  this._defineByteRegister('ixl', 8)
  this._defineByteRegister('ixh', 9)
  this._defineByteRegister('iyl', 10)
  this._defineByteRegister('iyh', 11)
  this._defineWordRegister('af', 0)
  this._defineWordRegister('bc', 1)
  this._defineWordRegister('de', 2)
  this._defineWordRegister('hl', 3)
  this._defineWordRegister('ix', 4)
  this._defineWordRegister('iy', 5)

  Object.defineProperty(this, 'sp', {
    get: () => {
      return this.w0[2]
    },
    set: val => {
      this.w0[2] = val
    }
  })
  // Alias
  Object.defineProperty(this.r1, 'sp', {
    get: () => {
      return this.w0[2]
    },
    set: val => {
      this.w0[2] = val
    }
  })
  Object.defineProperty(this, 'pc', {
    get: () => {
      return this.w0[0]
    },
    set: val => {
      this.w0[0] = val
    }
  })
  Object.defineProperty(this, 'r', {
    get: () => {
      return this.b0[2]
    },
    set: val => {
      this.b0[2] = val
    }
  })
  Object.defineProperty(this, 'i', {
    get: () => {
      return this.b0[3]
    },
    set: val => {
      this.b0[3] = val
    }
  })

  this.reset()
}

Z80.prototype.reset = function() {
  this.pc = 0
  this.r1.f = 0
  this.im = 0
  this.iff1 = false
  this.iff2 = false
  this.r = 0
  this.i = 0
  this.halted = false
  this.tStates = 0
  this.nmiRequested = false
  this.intRequested = false
  this.deferInt = false
  this.execIntVector = false
}

Z80.prototype._defineByteRegister = function(name, position) {
  Object.defineProperty(this.r1, name, {
    get: () => {
      return this.b1[position]
    },
    set: value => {
      this.b1[position] = value
    }
  })
  Object.defineProperty(this.r2, name, {
    get: () => {
      return this.b2[position]
    },
    set: value => {
      this.b2[position] = value
    }
  })
}

Z80.prototype._defineWordRegister = function(name, position) {
  Object.defineProperty(this.r1, name, {
    get: () => {
      return this.w1[position]
    },
    set: value => {
      this.w1[position] = value
    }
  })
  Object.defineProperty(this.r2, name, {
    get: () => {
      return this.w2[position]
    },
    set: value => {
      this.w2[position] = value
    }
  })
}

Z80.prototype.dump = function() {
  console.log('=============================')
  console.log(`PC: ${hex16(this.pc)}     tStates: ${this.tStates}`)
  console.log(`SP: ${hex16(this.sp)}`)
  console.log('')
  console.log(`AF: ${hex16(this.r1.af)}         AF': ${hex16(this.r2.af)}`)
  console.log(`BC: ${hex16(this.r1.bc)}         BC': ${hex16(this.r2.bc)}`)
  console.log(`DE: ${hex16(this.r1.de)}         DE': ${hex16(this.r2.de)}`)
  console.log(`HL: ${hex16(this.r1.hl)}         HL': ${hex16(this.r2.hl)}`)
  console.log(`IX: ${hex16(this.r1.ix)}`)
  console.log(`IY: ${hex16(this.r1.iy)}`)
  console.log('')
  console.log(`I: ${hex8(this.i)}`)
  console.log(`R: ${hex8(this.r)}`)
  console.log('')
  let flags = []
  if (this.getFlag(f_c)) {
    flags.push('C')
  }
  if (this.getFlag(f_n)) {
    flags.push('N')
  }
  if (this.getFlag(f_pv)) {
    flags.push('PV')
  }
  if (this.getFlag(f_3)) {
    flags.push('3')
  }
  if (this.getFlag(f_h)) {
    flags.push('H')
  }
  if (this.getFlag(f_5)) {
    flags.push('5')
  }
  if (this.getFlag(f_z)) {
    flags.push('Z')
  }
  if (this.getFlag(f_s)) {
    flags.push('S')
  }
  console.log(`FLAGS: ${flags.join(' ')}`)
  console.log('=============================\n')
}

// Flag operations

Z80.prototype.setFlag = function(flag) {
  this.r1.f = this.r1.f | flag
}

Z80.prototype.resFlag = function(flag) {
  this.r1.f = this.r1.f & unot8(flag)
}

Z80.prototype.valFlag = function(flag, value) {
  value ? this.setFlag(flag) : this.resFlag(flag)
}

Z80.prototype.getFlag = function(flag) {
  return (this.r1.f & flag) !== 0
}

Z80.prototype.adjustFlags = function(value) {
  this.valFlag(f_5, (value & f_5) !== 0)
  this.valFlag(f_3, (value & f_3) !== 0)
}

Z80.prototype.adjustFlagSZP = function(value) {
  this.valFlag(f_s, (value & 0x80) !== 0)
  this.valFlag(f_z, value === 0)
  this.valFlag(f_pv, ParityBit[value])
}

Z80.prototype.adjustLogicFlag = function(flag_h) {
  this.valFlag(f_s, (this.r1.a & 0x80) !== 0)
  this.valFlag(f_z, this.r1.a === 0)
  this.valFlag(f_h, flag_h)
  this.valFlag(f_n, false)
  this.valFlag(f_c, false)
  this.valFlag(f_pv, ParityBit[this.r1.a])
  this.adjustFlags(this.r1.a)
}

Z80.prototype.condition = function(cond) {
  switch (cond) {
    case c_z:
      return this.getFlag(f_z)
    case c_nz:
      return !this.getFlag(f_z)
    case c_c:
      return this.getFlag(f_c)
    case c_nc:
      return !this.getFlag(f_c)
    case c_m:
      return this.getFlag(f_s)
    case c_p:
      return !this.getFlag(f_s)
    case c_pe:
      return this.getFlag(f_pv)
    case c_po:
      return !this.getFlag(f_pv)
    default:
      return true
  }
}

Z80.prototype.doPush = function(value) {
  this.sp -= 2
  this.write16(this.sp, value)
}

Z80.prototype.doPop = function(operandName) {
  let value = this.read16(this.sp)
  this.sp += 2
  return value
}

Z80.prototype.doIncDec = function(value, isDec) {
  this.debug(`doIncDec(${value}, ${isDec})`)
  if (isDec) {
    this.valFlag(f_pv, (value & 0x80) !== 0 && ((value - 1) & 0x80) === 0)
    this.debug(`f_pv set to ${this.getFlag(f_pv)}`)
    value = unsigned8(value - 1)
    this.valFlag(f_h, (value & 0x0f) === 0x0f)
    this.debug(`f_h set to ${this.getFlag(f_h)}`)
  } else {
    this.valFlag(f_pv, (value & 0x80) === 0 && ((value + 1) & 0x80) !== 0)
    this.debug(`f_pv set to ${this.getFlag(f_pv)}`)
    value = unsigned8(value + 1)
    this.valFlag(f_h, (value & 0x0f) === 0)
    this.debug(`f_h set to ${this.getFlag(f_h)}`)
  }
  this.debug(`value was set to ${value}`)
  this.valFlag(f_s, (value & 0x80) !== 0)
  this.valFlag(f_z, value === 0)
  this.valFlag(f_n, isDec)
  this.debug(`flags before adjusting: ${this.r1.f}`)
  this.adjustFlags(value)
  this.debug(`flags after adjusting: ${this.r1.f}`)
  return value
}

// R register
Z80.prototype.incr = function() {
  this.r = (this.r & 0x80) | ((this.r + 1) & 0x7f)
}

Z80.prototype.decr = function() {
  this.r = (this.r & 0x80) | ((this.r - 1) & 0x7f)
}

// Arithmetics
Z80.prototype.doArithmetics = function(value, withCarry, isSub) {
  this.debug(`doArithmetics val=${value}, carry=${withCarry}, isSub=${isSub}`)
  let res
  if (isSub) {
    this.setFlag(f_n)
    this.valFlag(f_h, (((this.r1.a & 0x0f) - (value & 0x0f)) & 0x10) !== 0)
    res = unsigned16(this.r1.a - value)
    if (withCarry && this.getFlag(f_c)) {
      res--
    }
  } else {
    this.resFlag(f_n)
    this.valFlag(f_h, (((this.r1.a & 0x0f) + (value & 0x0f)) & 0x10) !== 0)
    res = unsigned16(this.r1.a + value)
    if (withCarry && this.getFlag(f_c)) {
      res++
    }
  }
  this.valFlag(f_s, (res & 0x80) !== 0)
  this.valFlag(f_c, (res & 0x100) !== 0)
  this.valFlag(f_z, (res & 0xff) === 0)

  let minuedSign = this.r1.a & 0x80
  let subtrahendSign = value & 0x80
  let resultSign = res & 0x80
  let overflow
  if (isSub) {
    overflow = minuedSign !== subtrahendSign && resultSign !== minuedSign
  } else {
    overflow = minuedSign === subtrahendSign && resultSign !== minuedSign
  }
  this.valFlag(f_pv, overflow)
  this.adjustFlags(unsigned8(res & 0xff))
  return res & 0xff
}

Z80.prototype.doAddWord = function(a1, a2, withCarry, isSub) {
  if (withCarry && this.getFlag(f_c)) {
    a2++
  }

  let sum = a1
  if (isSub) {
    sum -= a2
    this.valFlag(f_h, (((a1 & 0x0fff) - (a2 & 0x0fff)) & 0x1000) !== 0)
  } else {
    sum += a2
    this.valFlag(f_h, (((a1 & 0x0fff) + (a2 & 0x0fff)) & 0x1000) !== 0)
  }
  this.valFlag(f_c, (sum & 0x10000) !== 0)
  if (withCarry || isSub) {
    let minuedSign = a1 & 0x8000
    let subtrahendSign = a2 & 0x8000
    let resultSign = sum & 0x8000
    let overflow
    if (isSub) {
      overflow = minuedSign != subtrahendSign && resultSign != minuedSign
    } else {
      overflow = minuedSign == subtrahendSign && resultSign != minuedSign
    }
    this.valFlag(f_pv, overflow)
    this.valFlag(f_s, resultSign !== 0)
    this.valFlag(f_z, sum === 0)
  }
  this.valFlag(f_n, isSub)
  this.adjustFlags(unsigned8(sum >> 8))
  return unsigned16(sum)
}

Z80.prototype.do_and = function(value) {
  this.r1.a &= value
  this.adjustLogicFlag(true)
}

Z80.prototype.do_or = function(value) {
  this.r1.a |= value
  this.adjustLogicFlag(false)
}

Z80.prototype.do_xor = function(value) {
  this.r1.a ^= value
  this.adjustLogicFlag(false)
}

Z80.prototype.doBit = function(b, val) {
  if ((val & (1 << b)) !== 0) {
    this.resFlag(f_z | f_pv)
  } else {
    this.setFlag(f_z | f_pv)
  }
  this.setFlag(f_h)
  this.resFlag(f_n)
  this.resFlag(f_s)
  if (b === 7 && !this.getFlag(f_z)) {
    this.setFlag(f_s)
  }
}

Z80.prototype.doBitR = function(b, val) {
  this.doBit(b, val)
  this.valFlag(f_5, (val & f_5) !== 0)
  this.valFlag(f_3, (val & f_3) !== 0)
}

Z80.prototype.doBitIndexed = function(b, addr) {
  let val = this.read8(addr)
  this.doBit(b, val)
  let high = addr >> 8
  this.valFlag(f_5, (high & f_5) !== 0)
  this.valFlag(f_3, (high & f_3) !== 0)
}

Z80.prototype.doSetRes = function(state, pos, val) {
  if (state) {
    return val | (1 << pos)
  } else {
    return val & ~(1 << pos)
  }
}

Z80.prototype.doDAA = function() {
  let factor = 0
  let carry = false

  if (this.r1.a > 0x99 || this.getFlag(f_c)) {
    factor |= 0x60
    carry = true
  }
  if ((this.r1.a & 0x0f) > 9 || this.getFlag(f_h)) {
    factor |= 0x06
  }

  let a = this.r1.a
  if (this.getFlag(f_n)) {
    this.r1.a -= factor
  } else {
    this.r1.a += factor
  }

  this.valFlag(f_h, ((a ^ this.r1.a) & 0x10) !== 0)
  this.valFlag(f_c, carry)
  this.valFlag(f_s, (this.r1.a & 0x80) !== 0)
  this.valFlag(f_z, this.r1.a === 0)
  this.valFlag(f_pv, ParityBit[this.r1.a])
  this.adjustFlags(this.r1.a)
}

Z80.prototype.doCPHL = function() {
  let val = this.read8(this.r1.hl)
  let result = this.doArithmetics(val, false, true)
  this.adjustFlags(val)
  return result
}

Z80.prototype.do_rlc = function(value, adjust) {
  this.valFlag(f_c, (value & 0x80) !== 0)
  value = unsigned8(value << 1)
  let cy = this.getFlag(f_c) ? 1 : 0
  value |= cy
  this.debug('rlc flags before adjusting ' + hex8(this.r1.f))
  this.adjustFlags(value)
  this.debug('rlc flags after adjusting ' + hex8(this.r1.f))
  this.resFlag(f_h | f_n)
  this.debug('rlc flags after reset ' + hex8(this.r1.f))
  if (adjust) {
    this.adjustFlagSZP(value)
  }
  this.debug('rlc flags after adjust szp ' + hex8(this.r1.f))
  return value
}

Z80.prototype.do_rrc = function(value, adjust) {
  this.valFlag(f_c, (value & 0x01) !== 0)
  value = unsigned8(value >> 1)
  let cy = this.getFlag(f_c) ? 0x80 : 0
  value |= cy
  this.adjustFlags(value)
  this.resFlag(f_h | f_n)
  if (adjust) {
    this.adjustFlagSZP(value)
  }
  return value
}

Z80.prototype.do_rl = function(value, adjust) {
  let cy = this.getFlag(f_c) ? 1 : 0
  this.valFlag(f_c, (value & 0x80) !== 0)
  value = unsigned8(value << 1)
  value |= cy
  this.adjustFlags(value)
  this.resFlag(f_h | f_n)
  if (adjust) {
    this.adjustFlagSZP(value)
  }
  return value
}

Z80.prototype.do_rr = function(value, adjust) {
  let cy = this.getFlag(f_c) ? 0x80 : 0
  this.valFlag(f_c, (value & 0x01) !== 0)
  value = unsigned8(value >> 1)
  value |= cy
  this.adjustFlags(value)
  this.resFlag(f_h | f_n)
  if (adjust) {
    this.adjustFlagSZP(value)
  }
  return value
}

Z80.prototype.do_sl = function(value, isArithmetics) {
  this.valFlag(f_c, (value & 0x80) !== 0)
  value = unsigned8(value << 1)
  if (!isArithmetics) {
    value |= 1
  }
  this.adjustFlags(value)
  this.resFlag(f_h | f_n)
  this.adjustFlagSZP(value)
  return value
}

Z80.prototype.do_sr = function(value, isArithmetics) {
  let bit = value & 0x80
  this.valFlag(f_c, (value & 0x01) !== 0)
  value = unsigned8(value >> 1)
  if (!isArithmetics) {
    value |= b
  }
  this.adjustFlags(value)
  this.resFlag(f_h | f_n)
  this.adjustFlagSZP(value)
  return value
}

// Creating opcode tables
Z80.prototype.opcodeTable = new Array(256)
Z80.prototype.opcodeTableCB = new Array(256)
Z80.prototype.opcodeTableED = new Array(256)
Z80.prototype.opcodeTableFD = new Array(256)
Z80.prototype.opcodeTableDD = new Array(256)
Z80.prototype.opcodeTableDDCB = new Array(256)
Z80.prototype.opcodeTableFDCB = new Array(256)
Z80.prototype.opcodeTableDDCB.opcodeOffset = 1
Z80.prototype.opcodeTableFDCB.opcodeOffset = 1

// Creating cross-table links
Z80.prototype.opcodeTable[0xcb] = { nextTable: Z80.prototype.opcodeTableCB }
Z80.prototype.opcodeTable[0xed] = { nextTable: Z80.prototype.opcodeTableED }
Z80.prototype.opcodeTable[0xdd] = { nextTable: Z80.prototype.opcodeTableDD }
Z80.prototype.opcodeTable[0xfd] = { nextTable: Z80.prototype.opcodeTableFD }
Z80.prototype.opcodeTableDD[0xcb] = {
  nextTable: Z80.prototype.opcodeTableDDCB
}
Z80.prototype.opcodeTableFD[0xcb] = {
  nextTable: Z80.prototype.opcodeTableFDCB
}

Z80.prototype.disassemble = function(addr) {
  let codes = []

  if (typeof addr === 'undefined') {
    addr = this.pc
  }
  // disassemple uses memory own methods which don't affect cpu tStates
  let opCode = this.memory.read8(addr++)
  codes.push(opCode)

  let instr = this.opcodeTable[opCode]
  if (!instr) {
    return {
      dasm: 'Error disassembling ' + codes.map(c => hex8(c)).join(' '),
      nextAddr: addr
    }
  }

  while ('nextTable' in instr) {
    let nextTable = instr.nextTable
    opCode = this.memory.read8(addr++)
    codes.push(opCode)

    instr = nextTable[opCode]
    if (!instr) {
      return {
        dasm: 'Error disassembling ' + codes.map(c => hex8(c)).join(' '),
        nextAddr: addr
      }
    }
  }

  let { dasm, args } = instr
  let argNum = 0
  let arg
  args.forEach(argType => {
    switch (argType) {
      case ArgType.Byte:
        arg = this.memory.read8(addr++)
        dasm = dasm.replace(`{${argNum++}}`, `$${hex8(arg)}`)
        break
      case ArgType.Offset:
        arg = this.memory.read8(addr++)
        arg = signed8(arg)
        if (arg >= 0) {
          arg = '+' + arg
        }
        dasm = dasm.replace(`{${argNum++}}`, `${arg}`)
        break
      case ArgType.Word:
        arg = this.memory.read8(addr) | (this.memory.read8(addr + 1) << 8)
        addr += 2
        dasm = dasm.replace(`{${argNum++}}`, `0x${hex16(arg)}`)
        break
    }
  })
  return { dasm: dasm, nextAddr: addr }
}

Z80.prototype.debug = function() {
  if (this.debugMode) {
    let data = ['CPU debug:'].concat(Array.prototype.map.call(arguments, i => i))
    console.log.apply(console, data)
  }
}

Z80.prototype.execute = function() {
  let current = this.opcodeTable
  let opCode
  let offset = 0
  let operation
  let codes = []

  this.debug('execute() started, t =', this.tStates)
  while (true) {
    opCode = this.read8(this.pc + offset)
    codes.push(opCode)
    this.debug('memory read, t =', this.tStates)
    this.pc++
    this.tStates++
    this.debug('pc incremented, t =', this.tStates)
    this.incr()

    operation = current[opCode]
    if (!operation) {
      throw 'Instruction ' + codes.map(i => hex8(i)).join(' ') + ' not declared'
    }
    if (operation.funcName) {
      if (!(operation.funcName in this)) {
        throw 'Instruction ' + codes.map(i => hex8(i)).join(' ') + ' not implemented'
      }
      this.pc -= offset
      this.debug('Running ' + operation.funcName + '(), t =', this.tStates)
      this[operation.funcName].call(this)
      this.debug(operation.funcName + '() executed, t =', this.tStates)
      break
    } else {
      if (operation.nextTable) {
        current = operation.nextTable
        offset = current.opcodeOffset || 0
        if (offset > 0) {
          this.decr()
        }
      }
    }
  }
}

// Here comes all the CPU operations available
//
// Tables are filled dynamically in class compile time
//
// Implementations are made with a simple template engine and should
// be precompiled with a compile.js script

// LD r, r'
for (let dst in RegisterMap) {
  for (let src in RegisterMap) {
    let opCode = 0b01000000 | (dst << 3) | src
    let dstRegName = RegisterMap[dst]
    let srcRegName = RegisterMap[src]
    let opFuncName = `ld_${dstRegName}_${srcRegName}`
    let disasmString = `ld ${dstRegName}, ${srcRegName}`
    Z80.prototype.opcodeTable[opCode] = {
      funcName: opFuncName,
      dasm: disasmString,
      args: []
    }
    for (let pref in Prefixes) {
      let nsrcRegName = srcRegName === 'l' || srcRegName === 'h' ? pref + srcRegName : srcRegName
      let ndstRegName = dstRegName === 'l' || dstRegName === 'h' ? pref + dstRegName : dstRegName
      opFuncName = `ld_${ndstRegName}_${nsrcRegName}`
      disasmString = `ld ${ndstRegName}, ${nsrcRegName}`
      let table = Z80.prototype.opcodeTable[Prefixes[pref]].nextTable
      table[opCode] = {
        funcName: opFuncName,
        dasm: disasmString,
        args: []
      }
    }
  }
}

Z80.prototype.ld_a_a = function() {
  this.r1.a = this.r1.a
}

Z80.prototype.ld_a_b = function() {
  this.r1.a = this.r1.b
}

Z80.prototype.ld_a_c = function() {
  this.r1.a = this.r1.c
}

Z80.prototype.ld_a_d = function() {
  this.r1.a = this.r1.d
}

Z80.prototype.ld_a_e = function() {
  this.r1.a = this.r1.e
}

Z80.prototype.ld_a_h = function() {
  this.r1.a = this.r1.h
}

Z80.prototype.ld_a_l = function() {
  this.r1.a = this.r1.l
}

Z80.prototype.ld_a_ixh = function() {
  this.r1.a = this.r1.ixh
}

Z80.prototype.ld_a_ixl = function() {
  this.r1.a = this.r1.ixl
}

Z80.prototype.ld_a_iyh = function() {
  this.r1.a = this.r1.iyh
}

Z80.prototype.ld_a_iyl = function() {
  this.r1.a = this.r1.iyl
}

Z80.prototype.ld_b_a = function() {
  this.r1.b = this.r1.a
}

Z80.prototype.ld_b_b = function() {
  this.r1.b = this.r1.b
}

Z80.prototype.ld_b_c = function() {
  this.r1.b = this.r1.c
}

Z80.prototype.ld_b_d = function() {
  this.r1.b = this.r1.d
}

Z80.prototype.ld_b_e = function() {
  this.r1.b = this.r1.e
}

Z80.prototype.ld_b_h = function() {
  this.r1.b = this.r1.h
}

Z80.prototype.ld_b_l = function() {
  this.r1.b = this.r1.l
}

Z80.prototype.ld_b_ixh = function() {
  this.r1.b = this.r1.ixh
}

Z80.prototype.ld_b_ixl = function() {
  this.r1.b = this.r1.ixl
}

Z80.prototype.ld_b_iyh = function() {
  this.r1.b = this.r1.iyh
}

Z80.prototype.ld_b_iyl = function() {
  this.r1.b = this.r1.iyl
}

Z80.prototype.ld_c_a = function() {
  this.r1.c = this.r1.a
}

Z80.prototype.ld_c_b = function() {
  this.r1.c = this.r1.b
}

Z80.prototype.ld_c_c = function() {
  this.r1.c = this.r1.c
}

Z80.prototype.ld_c_d = function() {
  this.r1.c = this.r1.d
}

Z80.prototype.ld_c_e = function() {
  this.r1.c = this.r1.e
}

Z80.prototype.ld_c_h = function() {
  this.r1.c = this.r1.h
}

Z80.prototype.ld_c_l = function() {
  this.r1.c = this.r1.l
}

Z80.prototype.ld_c_ixh = function() {
  this.r1.c = this.r1.ixh
}

Z80.prototype.ld_c_ixl = function() {
  this.r1.c = this.r1.ixl
}

Z80.prototype.ld_c_iyh = function() {
  this.r1.c = this.r1.iyh
}

Z80.prototype.ld_c_iyl = function() {
  this.r1.c = this.r1.iyl
}

Z80.prototype.ld_d_a = function() {
  this.r1.d = this.r1.a
}

Z80.prototype.ld_d_b = function() {
  this.r1.d = this.r1.b
}

Z80.prototype.ld_d_c = function() {
  this.r1.d = this.r1.c
}

Z80.prototype.ld_d_d = function() {
  this.r1.d = this.r1.d
}

Z80.prototype.ld_d_e = function() {
  this.r1.d = this.r1.e
}

Z80.prototype.ld_d_h = function() {
  this.r1.d = this.r1.h
}

Z80.prototype.ld_d_l = function() {
  this.r1.d = this.r1.l
}

Z80.prototype.ld_d_ixh = function() {
  this.r1.d = this.r1.ixh
}

Z80.prototype.ld_d_ixl = function() {
  this.r1.d = this.r1.ixl
}

Z80.prototype.ld_d_iyh = function() {
  this.r1.d = this.r1.iyh
}

Z80.prototype.ld_d_iyl = function() {
  this.r1.d = this.r1.iyl
}

Z80.prototype.ld_e_a = function() {
  this.r1.e = this.r1.a
}

Z80.prototype.ld_e_b = function() {
  this.r1.e = this.r1.b
}

Z80.prototype.ld_e_c = function() {
  this.r1.e = this.r1.c
}

Z80.prototype.ld_e_d = function() {
  this.r1.e = this.r1.d
}

Z80.prototype.ld_e_e = function() {
  this.r1.e = this.r1.e
}

Z80.prototype.ld_e_h = function() {
  this.r1.e = this.r1.h
}

Z80.prototype.ld_e_l = function() {
  this.r1.e = this.r1.l
}

Z80.prototype.ld_e_ixh = function() {
  this.r1.e = this.r1.ixh
}

Z80.prototype.ld_e_ixl = function() {
  this.r1.e = this.r1.ixl
}

Z80.prototype.ld_e_iyh = function() {
  this.r1.e = this.r1.iyh
}

Z80.prototype.ld_e_iyl = function() {
  this.r1.e = this.r1.iyl
}

Z80.prototype.ld_h_a = function() {
  this.r1.h = this.r1.a
}

Z80.prototype.ld_h_b = function() {
  this.r1.h = this.r1.b
}

Z80.prototype.ld_h_c = function() {
  this.r1.h = this.r1.c
}

Z80.prototype.ld_h_d = function() {
  this.r1.h = this.r1.d
}

Z80.prototype.ld_h_e = function() {
  this.r1.h = this.r1.e
}

Z80.prototype.ld_h_h = function() {
  this.r1.h = this.r1.h
}

Z80.prototype.ld_h_l = function() {
  this.r1.h = this.r1.l
}

Z80.prototype.ld_h_ixh = function() {
  this.r1.h = this.r1.ixh
}

Z80.prototype.ld_h_ixl = function() {
  this.r1.h = this.r1.ixl
}

Z80.prototype.ld_h_iyh = function() {
  this.r1.h = this.r1.iyh
}

Z80.prototype.ld_h_iyl = function() {
  this.r1.h = this.r1.iyl
}

Z80.prototype.ld_l_a = function() {
  this.r1.l = this.r1.a
}

Z80.prototype.ld_l_b = function() {
  this.r1.l = this.r1.b
}

Z80.prototype.ld_l_c = function() {
  this.r1.l = this.r1.c
}

Z80.prototype.ld_l_d = function() {
  this.r1.l = this.r1.d
}

Z80.prototype.ld_l_e = function() {
  this.r1.l = this.r1.e
}

Z80.prototype.ld_l_h = function() {
  this.r1.l = this.r1.h
}

Z80.prototype.ld_l_l = function() {
  this.r1.l = this.r1.l
}

Z80.prototype.ld_l_ixh = function() {
  this.r1.l = this.r1.ixh
}

Z80.prototype.ld_l_ixl = function() {
  this.r1.l = this.r1.ixl
}

Z80.prototype.ld_l_iyh = function() {
  this.r1.l = this.r1.iyh
}

Z80.prototype.ld_l_iyl = function() {
  this.r1.l = this.r1.iyl
}

Z80.prototype.ld_ixh_a = function() {
  this.r1.ixh = this.r1.a
}

Z80.prototype.ld_ixh_b = function() {
  this.r1.ixh = this.r1.b
}

Z80.prototype.ld_ixh_c = function() {
  this.r1.ixh = this.r1.c
}

Z80.prototype.ld_ixh_d = function() {
  this.r1.ixh = this.r1.d
}

Z80.prototype.ld_ixh_e = function() {
  this.r1.ixh = this.r1.e
}

Z80.prototype.ld_ixh_h = function() {
  this.r1.ixh = this.r1.h
}

Z80.prototype.ld_ixh_l = function() {
  this.r1.ixh = this.r1.l
}

Z80.prototype.ld_ixh_ixh = function() {
  this.r1.ixh = this.r1.ixh
}

Z80.prototype.ld_ixh_ixl = function() {
  this.r1.ixh = this.r1.ixl
}

Z80.prototype.ld_ixh_iyh = function() {
  this.r1.ixh = this.r1.iyh
}

Z80.prototype.ld_ixh_iyl = function() {
  this.r1.ixh = this.r1.iyl
}

Z80.prototype.ld_ixl_a = function() {
  this.r1.ixl = this.r1.a
}

Z80.prototype.ld_ixl_b = function() {
  this.r1.ixl = this.r1.b
}

Z80.prototype.ld_ixl_c = function() {
  this.r1.ixl = this.r1.c
}

Z80.prototype.ld_ixl_d = function() {
  this.r1.ixl = this.r1.d
}

Z80.prototype.ld_ixl_e = function() {
  this.r1.ixl = this.r1.e
}

Z80.prototype.ld_ixl_h = function() {
  this.r1.ixl = this.r1.h
}

Z80.prototype.ld_ixl_l = function() {
  this.r1.ixl = this.r1.l
}

Z80.prototype.ld_ixl_ixh = function() {
  this.r1.ixl = this.r1.ixh
}

Z80.prototype.ld_ixl_ixl = function() {
  this.r1.ixl = this.r1.ixl
}

Z80.prototype.ld_ixl_iyh = function() {
  this.r1.ixl = this.r1.iyh
}

Z80.prototype.ld_ixl_iyl = function() {
  this.r1.ixl = this.r1.iyl
}

Z80.prototype.ld_iyh_a = function() {
  this.r1.iyh = this.r1.a
}

Z80.prototype.ld_iyh_b = function() {
  this.r1.iyh = this.r1.b
}

Z80.prototype.ld_iyh_c = function() {
  this.r1.iyh = this.r1.c
}

Z80.prototype.ld_iyh_d = function() {
  this.r1.iyh = this.r1.d
}

Z80.prototype.ld_iyh_e = function() {
  this.r1.iyh = this.r1.e
}

Z80.prototype.ld_iyh_h = function() {
  this.r1.iyh = this.r1.h
}

Z80.prototype.ld_iyh_l = function() {
  this.r1.iyh = this.r1.l
}

Z80.prototype.ld_iyh_ixh = function() {
  this.r1.iyh = this.r1.ixh
}

Z80.prototype.ld_iyh_ixl = function() {
  this.r1.iyh = this.r1.ixl
}

Z80.prototype.ld_iyh_iyh = function() {
  this.r1.iyh = this.r1.iyh
}

Z80.prototype.ld_iyh_iyl = function() {
  this.r1.iyh = this.r1.iyl
}

Z80.prototype.ld_iyl_a = function() {
  this.r1.iyl = this.r1.a
}

Z80.prototype.ld_iyl_b = function() {
  this.r1.iyl = this.r1.b
}

Z80.prototype.ld_iyl_c = function() {
  this.r1.iyl = this.r1.c
}

Z80.prototype.ld_iyl_d = function() {
  this.r1.iyl = this.r1.d
}

Z80.prototype.ld_iyl_e = function() {
  this.r1.iyl = this.r1.e
}

Z80.prototype.ld_iyl_h = function() {
  this.r1.iyl = this.r1.h
}

Z80.prototype.ld_iyl_l = function() {
  this.r1.iyl = this.r1.l
}

Z80.prototype.ld_iyl_ixh = function() {
  this.r1.iyl = this.r1.ixh
}

Z80.prototype.ld_iyl_ixl = function() {
  this.r1.iyl = this.r1.ixl
}

Z80.prototype.ld_iyl_iyh = function() {
  this.r1.iyl = this.r1.iyh
}

Z80.prototype.ld_iyl_iyl = function() {
  this.r1.iyl = this.r1.iyl
}


// LD r, n
for (let dst in RegisterMap) {
  let opCode = 0b00000110 | (dst << 3)
  let opFuncName = `ld_${RegisterMap[dst]}_n`
  let disasmString = `ld ${RegisterMap[dst]}, \{0\}`
  Z80.prototype[opFuncName] = null
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Byte]
  }
}

Z80.prototype.ld_a_n = function() {
  this.r1.a = this.read8(this.pc++)
}

Z80.prototype.ld_b_n = function() {
  this.r1.b = this.read8(this.pc++)
}

Z80.prototype.ld_c_n = function() {
  this.r1.c = this.read8(this.pc++)
}

Z80.prototype.ld_d_n = function() {
  this.r1.d = this.read8(this.pc++)
}

Z80.prototype.ld_e_n = function() {
  this.r1.e = this.read8(this.pc++)
}

Z80.prototype.ld_h_n = function() {
  this.r1.h = this.read8(this.pc++)
}

Z80.prototype.ld_l_n = function() {
  this.r1.l = this.read8(this.pc++)
}

Z80.prototype.ld_ixh_n = function() {
  this.r1.ixh = this.read8(this.pc++)
}

Z80.prototype.ld_ixl_n = function() {
  this.r1.ixl = this.read8(this.pc++)
}

Z80.prototype.ld_iyh_n = function() {
  this.r1.iyh = this.read8(this.pc++)
}

Z80.prototype.ld_iyl_n = function() {
  this.r1.iyl = this.read8(this.pc++)
}


// LD r, (HL)
for (let dst in RegisterMap) {
  let opCode = 0b01000110 | (dst << 3)
  let opFuncName = `ld_${RegisterMap[dst]}__hl_`
  let disasmString = `ld ${RegisterMap[dst]}, (hl)`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    tStates: 7,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.ld_a__hl_ = function() {
  this.r1.a = this.read8(this.r1.hl)
}

Z80.prototype.ld_b__hl_ = function() {
  this.r1.b = this.read8(this.r1.hl)
}

Z80.prototype.ld_c__hl_ = function() {
  this.r1.c = this.read8(this.r1.hl)
}

Z80.prototype.ld_d__hl_ = function() {
  this.r1.d = this.read8(this.r1.hl)
}

Z80.prototype.ld_e__hl_ = function() {
  this.r1.e = this.read8(this.r1.hl)
}

Z80.prototype.ld_h__hl_ = function() {
  this.r1.h = this.read8(this.r1.hl)
}

Z80.prototype.ld_l__hl_ = function() {
  this.r1.l = this.read8(this.r1.hl)
}


// LD (HL), r
for (let src in RegisterMap) {
  let opCode = 0b01110000 | src
  let opFuncName = `ld__hl__${RegisterMap[src]}`
  let disasmString = `ld (hl), ${RegisterMap[src]}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    tStates: 7,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.ld__hl__a = function() {
  this.write8(this.r1.hl, this.r1.a)
}

Z80.prototype.ld__hl__b = function() {
  this.write8(this.r1.hl, this.r1.b)
}

Z80.prototype.ld__hl__c = function() {
  this.write8(this.r1.hl, this.r1.c)
}

Z80.prototype.ld__hl__d = function() {
  this.write8(this.r1.hl, this.r1.d)
}

Z80.prototype.ld__hl__e = function() {
  this.write8(this.r1.hl, this.r1.e)
}

Z80.prototype.ld__hl__h = function() {
  this.write8(this.r1.hl, this.r1.h)
}

Z80.prototype.ld__hl__l = function() {
  this.write8(this.r1.hl, this.r1.l)
}


// LD (HL), n
Z80.prototype.opcodeTable[0b00110110] = {
  funcName: 'ld__hl__n',
  dasm: 'ld (hl), {0}',
  args: [ArgType.Byte]
}

Z80.prototype.ld__hl__n = function() {
  this.write8(this.r1.hl, this.read8(this.pc++))
}

// LD A, (BC)
Z80.prototype.opcodeTable[0b00001010] = {
  funcName: 'ld_a__bc_',
  tStates: 7,
  dasm: 'ld a, (bc)',
  args: []
}
// LD A, (DE)
Z80.prototype.opcodeTable[0b00011010] = {
  funcName: 'ld_a__de_',
  tStates: 7,
  dasm: 'ld a, (de)',
  args: []
}

Z80.prototype.ld_a__bc_ = function() {
  this.r1.a = this.read8(this.r1.bc)
}

Z80.prototype.ld_a__de_ = function() {
  this.r1.a = this.read8(this.r1.de)
}


// LD (BC), A
Z80.prototype.opcodeTable[0b00000010] = {
  funcName: 'ld__bc__a',
  tStates: 7,
  dasm: 'ld (bc), a',
  args: []
}
// LD (DE), A
Z80.prototype.opcodeTable[0b00010010] = {
  funcName: 'ld__de__a',
  tStates: 7,
  dasm: 'ld (de), a',
  args: []
}

Z80.prototype.ld__bc__a = function() {
  this.write8(this.r1.bc, this.r1.a)
}

Z80.prototype.ld__de__a = function() {
  this.write8(this.r1.de, this.r1.a)
}


// LD A, (nn)
Z80.prototype.opcodeTable[0b00111010] = {
  funcName: 'ld_a__nn_',
  dasm: 'ld a, ({0})',
  args: [ArgType.Word]
}

Z80.prototype.ld_a__nn_ = function() {
  this.r1.a = this.read8(this.read16(this.pc))
  this.pc += 2
}

// LD (nn), A
Z80.prototype.opcodeTable[0b00110010] = {
  funcName: 'ld__nn__a',
  dasm: 'ld ({0}), a',
  args: [ArgType.Word]
}

Z80.prototype.ld__nn__a = function() {
  this.write8(this.read16(this.pc), this.r1.a)
  this.pc += 2
}

// LD A, I
Z80.prototype.opcodeTableED[0b01010111] = {
  funcName: 'ld_a_i',
  tStates: 9,
  dasm: 'ld a, i',
  args: []
}
// LD A, R
Z80.prototype.opcodeTableED[0b01011111] = {
  funcName: 'ld_a_r',
  tStates: 9,
  dasm: 'ld a, r',
  args: []
}

Z80.prototype.ld_a_i = function() {
  this.tStates++
  this.r1.a = this.i
  this.adjustFlags(this.r1.a)
  this.resFlag(f_h | f_n)
  this.valFlag(f_pv, this.iff2)
  this.valFlag(f_s, (this.r1.a & 0x80) !== 0)
  this.valFlag(f_z, this.r1.a === 0)
}

Z80.prototype.ld_a_r = function() {
  this.tStates++
  this.r1.a = this.r
  this.adjustFlags(this.r1.a)
  this.resFlag(f_h | f_n)
  this.valFlag(f_pv, this.iff2)
  this.valFlag(f_s, (this.r1.a & 0x80) !== 0)
  this.valFlag(f_z, this.r1.a === 0)
}


// LD I, A
Z80.prototype.opcodeTableED[0b01000111] = {
  funcName: 'ld_i_a',
  tStates: 9,
  dasm: 'ld i, a',
  args: []
}
// LD R, A
Z80.prototype.opcodeTableED[0b01001111] = {
  funcName: 'ld_r_a',
  tStates: 9,
  dasm: 'ld r, a',
  args: []
}

Z80.prototype.ld_i_a = function() {
  this.tStates++
  this.i = this.r1.a
}

Z80.prototype.ld_r_a = function() {
  this.tStates++
  this.r = this.r1.a
}


// LD r, (IX/IY+d)
for (let dst in RegisterMap) {
  let opCode = 0b01000110 | (dst << 3)
  for (let iReg in Prefixes) {
    let opFuncName = `ld_${RegisterMap[dst]}__${iReg}_d_`
    let disasmString = `ld ${RegisterMap[dst]}, (${iReg}+{0})`
    Z80.prototype.opcodeTable[Prefixes[iReg]][opCode] = {
      funcName: opFuncName,
      dasm: disasmString,
      args: [ArgType.Byte]
    }
  }
}

Z80.prototype.ld_a__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.read8(this.ix + offset)
}

Z80.prototype.ld_a__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.read8(this.iy + offset)
}

Z80.prototype.ld_b__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.b = this.read8(this.ix + offset)
}

Z80.prototype.ld_b__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.b = this.read8(this.iy + offset)
}

Z80.prototype.ld_c__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.c = this.read8(this.ix + offset)
}

Z80.prototype.ld_c__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.c = this.read8(this.iy + offset)
}

Z80.prototype.ld_d__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.d = this.read8(this.ix + offset)
}

Z80.prototype.ld_d__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.d = this.read8(this.iy + offset)
}

Z80.prototype.ld_e__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.e = this.read8(this.ix + offset)
}

Z80.prototype.ld_e__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.e = this.read8(this.iy + offset)
}

Z80.prototype.ld_h__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.h = this.read8(this.ix + offset)
}

Z80.prototype.ld_h__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.h = this.read8(this.iy + offset)
}

Z80.prototype.ld_l__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.l = this.read8(this.ix + offset)
}

Z80.prototype.ld_l__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.r1.l = this.read8(this.iy + offset)
}


// LD (IX/IY+d), r
for (let src in RegisterMap) {
  let opCode = 0b01110000 | src
  for (let iReg in Prefixes) {
    let opFuncName = `ld__${iReg}_d__${RegisterMap[src]}`
    let disasmString = `ld (${iReg}+{0}), ${RegisterMap[src]}`
    Z80.prototype.opcodeTable[Prefixes[iReg]][opCode] = {
      funcName: opFuncName,
      dasm: disasmString,
      args: [ArgType.Byte]
    }
  }
}

Z80.prototype.ld_a__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.a)
}

Z80.prototype.ld_a__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.a)
}

Z80.prototype.ld_b__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.b)
}

Z80.prototype.ld_b__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.b)
}

Z80.prototype.ld_c__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.c)
}

Z80.prototype.ld_c__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.c)
}

Z80.prototype.ld_d__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.d)
}

Z80.prototype.ld_d__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.d)
}

Z80.prototype.ld_e__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.e)
}

Z80.prototype.ld_e__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.e)
}

Z80.prototype.ld_h__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.h)
}

Z80.prototype.ld_h__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.h)
}

Z80.prototype.ld_l__ix_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.l)
}

Z80.prototype.ld_l__iy_d_ = function() {
  let offset = signed8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.l)
}


// LD (IX/IY+d), n
for (let iReg in Prefixes) {
  let opFuncName = `ld__${iReg}_d__n`
  let disasmString = `ld (${iReg}+{0}), {1}`
  Z80.prototype.opcodeTable[Prefixes[iReg]][0b00110110] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Word]
  }
}

Z80.prototype.ld__ix_d__n = function() {
  let offset = signed8(this.read8(this.pc++))
  let n = this.read8(this.pc++)
  this.write8(this.ix + offset, n)
}

Z80.prototype.ld__iy_d__n = function() {
  let offset = signed8(this.read8(this.pc++))
  let n = this.read8(this.pc++)
  this.write8(this.iy + offset, n)
}


// LD dd, nn
for (let rCode in Register16Map) {
  let opCode = 0b00000001 | (rCode << 4)
  let opFuncName = `ld_${Register16Map[rCode]}_nn`
  let disasmString = `ld ${Register16Map[rCode]}, {0}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Word]
  }
}

for (let regName in Prefixes) {
  let code = Prefixes[regName]
  Z80.prototype.opcodeTable[code].nextTable[0b00100001] = {
    funcName: `ld_${regName}_nn`,
    dasm: `ld ${regName}, {0}`,
    args: [ArgType.Word]
  }
}

Z80.prototype.ld_bc_nn = function() {
  this.r1.bc = this.read16(this.pc)
  this.pc += 2
}

Z80.prototype.ld_de_nn = function() {
  this.r1.de = this.read16(this.pc)
  this.pc += 2
}

Z80.prototype.ld_hl_nn = function() {
  this.r1.hl = this.read16(this.pc)
  this.pc += 2
}

Z80.prototype.ld_sp_nn = function() {
  this.r1.sp = this.read16(this.pc)
  this.pc += 2
}

Z80.prototype.ld_ix_nn = function() {
  this.r1.ix = this.read16(this.pc)
  this.pc += 2
}

Z80.prototype.ld_iy_nn = function() {
  this.r1.iy = this.read16(this.pc)
  this.pc += 2
}


// LD HL, (nn)
Z80.prototype.opcodeTable[0x2a] = {
  funcName: 'ld_hl__nn_',
  dasm: `ld hl, ({0})`,
  args: [ArgType.Word]
}

// LD IX/IY, (nn)
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x2a] = {
    funcName: `ld_${pref}__nn_`,
    dasm: `ld ${pref}, ({0})`,
    args: [ArgType.Word]
  }
}

// LD dd, (nn)
for (let rCode in Register16Map) {
  let opCode = 0b01001011 | (rCode << 4)
  let opFuncName = `ld_${Register16Map[rCode]}__nn_`
  let disasmString = `ld ${Register16Map[rCode]}, ({0})`
  Z80.prototype.opcodeTableED[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Word]
  }
}

Z80.prototype.ld_ix__nn_ = function() {
  this.r1.ix = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_iy__nn_ = function() {
  this.r1.iy = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_bc__nn_ = function() {
  this.r1.bc = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_de__nn_ = function() {
  this.r1.de = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_hl__nn_ = function() {
  this.r1.hl = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_sp__nn_ = function() {
  this.r1.sp = this.read16(this.read16(this.pc))
  this.pc += 2
}


// LD (nn), HL
Z80.prototype.opcodeTable[0x22] = {
  funcName: 'ld__nn__hl',
  dasm: `ld ({0}), hl`,
  args: [ArgType.Word]
}

// LD (nn), IX/IY
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x22] = {
    funcName: `ld__nn__${pref}`,
    dasm: `ld ({0}), ${pref}`,
    args: [ArgType.Word]
  }
}

// LD (nn), dd
for (let rCode in Register16Map) {
  let opCode = 0b01000011 | (rCode << 4)
  let opFuncName = `ld__nn__${Register16Map[rCode]}`
  let disasmString = `ld ({0}), ${Register16Map[rCode]}`
  Z80.prototype.opcodeTableED[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Word]
  }
}

Z80.prototype.ld__nn__ix = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  this.write16(addr, this.r1.ix)
}

Z80.prototype.ld__nn__iy = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  this.write16(addr, this.r1.iy)
}

Z80.prototype.ld__nn__bc = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  this.write16(addr, this.r1.bc)
}

Z80.prototype.ld__nn__de = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  this.write16(addr, this.r1.de)
}

Z80.prototype.ld__nn__hl = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  this.write16(addr, this.r1.hl)
}

Z80.prototype.ld__nn__sp = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  this.write16(addr, this.r1.sp)
}


// LD SP, HL/IX/IY
Z80.prototype.opcodeTable[0xf9] = {
  funcName: 'ld_sp_hl',
  dasm: 'ld sp, hl',
  args: []
}
Z80.prototype.ld_sp_hl = function() {
  this.tStates += 2
  this.sp = this.r1.hl
}

Z80.prototype.opcodeTableDD[0xf9] = {
  funcName: 'ld_sp_ix',
  dasm: 'ld sp, ix',
  args: []
}
Z80.prototype.ld_sp_ix = function() {
  this.tStates += 2
  this.sp = this.r1.ix
}

Z80.prototype.opcodeTableFD[0xf9] = {
  funcName: 'ld_sp_iy',
  dasm: 'ld sp, iy',
  args: []
}
Z80.prototype.ld_sp_iy = function() {
  this.tStates += 2
  this.sp = this.r1.iy
}

// PUSH qq
for (let rCode in Register16Map2) {
  let opCode = 0b11000101 | (rCode << 4)
  let opFuncName = `push_${Register16Map2[rCode]}`
  let disasmString = `push ${Register16Map2[rCode]}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

for (let pref in Prefixes) {
  let opFuncName = `push_${pref}`
  let disasmString = `push ${pref}`
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0xe5] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.push_af = function() {
  this.tStates++
  this.doPush(this.r1.af)
}

Z80.prototype.push_bc = function() {
  this.tStates++
  this.doPush(this.r1.bc)
}

Z80.prototype.push_de = function() {
  this.tStates++
  this.doPush(this.r1.de)
}

Z80.prototype.push_hl = function() {
  this.tStates++
  this.doPush(this.r1.hl)
}

Z80.prototype.push_ix = function() {
  this.tStates++
  this.doPush(this.r1.ix)
}

Z80.prototype.push_iy = function() {
  this.tStates++
  this.doPush(this.r1.iy)
}


// POP qq
for (let rCode in Register16Map2) {
  let opCode = 0b11000001 | (rCode << 4)
  let opFuncName = `pop_${Register16Map2[rCode]}`
  let disasmString = `pop ${Register16Map2[rCode]}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

for (let pref in Prefixes) {
  let opFuncName = `pop_${pref}`
  let disasmString = `pop ${pref}`
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0xe1] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.pop_af = function() {
  this.r1.af = this.doPop()
}

Z80.prototype.pop_bc = function() {
  this.r1.bc = this.doPop()
}

Z80.prototype.pop_de = function() {
  this.r1.de = this.doPop()
}

Z80.prototype.pop_hl = function() {
  this.r1.hl = this.doPop()
}

Z80.prototype.pop_ix = function() {
  this.r1.ix = this.doPop()
}

Z80.prototype.pop_iy = function() {
  this.r1.iy = this.doPop()
}


// NOP
Z80.prototype.opcodeTable[0x00] = {
  funcName: 'nop',
  dasm: 'nop',
  args: []
}

Z80.prototype.nop = function() {
  // nop
}

// EX DE, HL
Z80.prototype.opcodeTable[0xeb] = {
  funcName: 'ex_de_hl',
  dasm: 'ex de, hl',
  args: [],
  tStates: 4
}
Z80.prototype.ex_de_hl = function() {
  let _t = this.r1.de
  this.r1.de = this.r1.hl
  this.r1.hl = _t
}

// EX AF, AF'
Z80.prototype.opcodeTable[0x08] = {
  funcName: 'ex_af_af_',
  dasm: "ex af, af'",
  args: [],
  tStates: 4
}
Z80.prototype.ex_af_af_ = function() {
  let _t = this.r1.af
  this.r1.af = this.r2.af
  this.r2.af = _t
}

// EXX
Z80.prototype.opcodeTable[0xd9] = {
  funcName: 'exx',
  dasm: 'exx',
  args: [],
  tStates: 4
}
Z80.prototype.exx = function() {
  let _t = this.r1.bc
  this.r1.bc = this.r2.bc
  this.r2.bc = _t
  _t = this.r1.de
  this.r1.de = this.r2.de
  this.r2.de = _t
  _t = this.r1.hl
  this.r1.hl = this.r2.hl
  this.r2.hl = _t
}

// EX (SP), HL/IX/IY
Z80.prototype.opcodeTable[0xe3] = {
  funcName: 'ex__sp__hl',
  dasm: 'ex (sp), hl',
  args: [],
  tStates: 19
}
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0xe3] = {
    funcName: `ex__sp__${pref}`,
    dasm: `ex (sp), ${pref}`,
    args: [],
    tStates: 19
  }
}

Z80.prototype.ex__sp__hl = function() {
  this.tStates += 3
  let _t = this.r1.hl
  this.r1.hl = this.read16(this.sp)
  this.write16(this.sp, _t)
}

Z80.prototype.ex__sp__ix = function() {
  this.tStates += 3
  let _t = this.r1.ix
  this.r1.ix = this.read16(this.sp)
  this.write16(this.sp, _t)
}

Z80.prototype.ex__sp__iy = function() {
  this.tStates += 3
  let _t = this.r1.iy
  this.r1.iy = this.read16(this.sp)
  this.write16(this.sp, _t)
}


// LDI
Z80.prototype.opcodeTableED[0xa0] = {
  funcName: 'ldi',
  dasm: 'ldi',
  args: [],
  tStates: 16
}
Z80.prototype.ldi = function() {
  this.tStates += 2
  let val = this.read8(this.r1.hl++)
  this.write8(this.r1.de++, val)
  this.r1.bc--
  let sum = usum8(this.r1.a, val)
  this.valFlag(f_5, (sum & 0x02) !== 0)
  this.valFlag(f_3, (sum & f_3) !== 0)
  this.resFlag(f_h | f_n)
  this.valFlag(f_pv, this.r1.bc !== 0)
}

// LDIR
Z80.prototype.opcodeTableED[0xb0] = {
  funcName: 'ldir',
  dasm: 'ldir',
  args: []
}
Z80.prototype.ldir = function() {
  this.ldi()
  if (this.r1.bc !== 0) {
    this.tStates += 5
    this.pc -= 2
  }
}

// LDD
Z80.prototype.opcodeTableED[0xa8] = { funcName: 'ldd', dasm: 'ldd', args: [] }
Z80.prototype.ldd = function() {
  this.tStates += 2
  let val = this.read8(this.r1.hl--)
  this.write8(this.r1.de--, val)
  this.r1.bc--
  let sum = usum8(this.r1.a, val)
  this.valFlag(f_5, (sum & 0x02) !== 0)
  this.valFlag(f_3, (sum & f_3) !== 0)
  this.resFlag(f_h | f_n)
  this.valFlag(f_pv, this.r1.bc !== 0)
}

// LDDR
Z80.prototype.opcodeTableED[0xb8] = {
  funcName: 'lddr',
  dasm: 'lddr',
  args: []
}
Z80.prototype.lddr = function() {
  this.ldd()
  if (this.r1.bc !== 0) {
    this.tStates += 5
    this.pc -= 2
  }
}

// CPI
Z80.prototype.opcodeTableED[0xa1] = { funcName: 'cpi', dasm: 'cpi', args: [] }
Z80.prototype.cpi = function() {
  this.tStates += 5
  let carry = this.getFlag(f_c)
  let value = this.doCPHL()
  if (this.getFlag(f_h)) {
    value--
  }
  this.r1.hl++
  this.r1.bc--
  this.valFlag(f_pv, this.r1.bc !== 0)
  this.valFlag(f_c, carry)
  this.valFlag(f_5, (value & (1 << 2)) !== 0)
  this.valFlag(f_3, (value & (1 << 3)) !== 0)
}

// CPIR
Z80.prototype.opcodeTableED[0xb1] = {
  funcName: 'cpir',
  dasm: 'cpir',
  args: []
}
Z80.prototype.cpir = function() {
  this.cpi()
  if (this.r1.bc !== 0 && !this.getFlag(f_z)) {
    this.tStates += 5
    this.pc -= 2
  }
}

// CPD
Z80.prototype.opcodeTableED[0xa9] = { funcName: 'cpd', dasm: 'cpd', args: [] }
Z80.prototype.cpd = function() {
  this.tStates += 5
  let carry = this.getFlag(f_c)
  let value = this.doCPHL()
  if (this.getFlag(f_h)) {
    value--
  }
  this.r1.hl--
  this.r1.bc--
  this.valFlag(f_pv, this.r1.bc !== 0)
  this.valFlag(f_c, carry)
  this.valFlag(f_5, (value & (1 << 1)) !== 0)
  this.valFlag(f_3, (value & (1 << 3)) !== 0)
}

// CPDR
Z80.prototype.opcodeTableED[0xb9] = {
  funcName: 'cpdr',
  dasm: 'cpdr',
  args: []
}
Z80.prototype.cpdr = function() {
  this.cpd()
  if (this.r1.bc !== 0 && !this.getFlag(f_z)) {
    this.tStates += 5
    this.pc -= 2
  }
}

// ADD A, r
for (let rCode in RegisterMap) {
  let opCode = 0b10000000 | rCode
  let rName = RegisterMap[rCode]
  let opFuncName = `add_a_${rName}`
  let disasmString = `add a, ${rName}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

// ADC A, r
for (let rCode in RegisterMap) {
  let opCode = 0b10001000 | rCode
  let rName = RegisterMap[rCode]
  let opFuncName = `adc_a_${rName}`
  let disasmString = `adc a, ${rName}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

// SUB A, r
for (let rCode in RegisterMap) {
  let opCode = 0b10010000 | rCode
  let rName = RegisterMap[rCode]
  let opFuncName = `sub_a_${rName}`
  let disasmString = `sub ${rName}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

// SBC A, r
for (let rCode in RegisterMap) {
  let opCode = 0b10011000 | rCode
  let rName = RegisterMap[rCode]
  let opFuncName = `sbc_a_${rName}`
  let disasmString = `sbc a, ${rName}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.adc_a_a = function() {
  this.r1.a = this.doArithmetics(this.r1.a, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_b = function() {
  this.r1.a = this.doArithmetics(this.r1.b, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_c = function() {
  this.r1.a = this.doArithmetics(this.r1.c, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_d = function() {
  this.r1.a = this.doArithmetics(this.r1.d, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_e = function() {
  this.r1.a = this.doArithmetics(this.r1.e, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_h = function() {
  this.r1.a = this.doArithmetics(this.r1.h, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_l = function() {
  this.r1.a = this.doArithmetics(this.r1.l, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_ixh = function() {
  this.r1.a = this.doArithmetics(this.r1.ixh, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_ixl = function() {
  this.r1.a = this.doArithmetics(this.r1.ixl, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_iyh = function() {
  this.r1.a = this.doArithmetics(this.r1.iyh, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a_iyl = function() {
  this.r1.a = this.doArithmetics(this.r1.iyl, hasCarry_adc, isSub_adc)
}

Z80.prototype.sbc_a_a = function() {
  this.r1.a = this.doArithmetics(this.r1.a, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_b = function() {
  this.r1.a = this.doArithmetics(this.r1.b, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_c = function() {
  this.r1.a = this.doArithmetics(this.r1.c, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_d = function() {
  this.r1.a = this.doArithmetics(this.r1.d, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_e = function() {
  this.r1.a = this.doArithmetics(this.r1.e, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_h = function() {
  this.r1.a = this.doArithmetics(this.r1.h, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_l = function() {
  this.r1.a = this.doArithmetics(this.r1.l, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_ixh = function() {
  this.r1.a = this.doArithmetics(this.r1.ixh, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_ixl = function() {
  this.r1.a = this.doArithmetics(this.r1.ixl, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_iyh = function() {
  this.r1.a = this.doArithmetics(this.r1.iyh, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a_iyl = function() {
  this.r1.a = this.doArithmetics(this.r1.iyl, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.add_a_a = function() {
  this.r1.a = this.doArithmetics(this.r1.a, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_b = function() {
  this.r1.a = this.doArithmetics(this.r1.b, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_c = function() {
  this.r1.a = this.doArithmetics(this.r1.c, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_d = function() {
  this.r1.a = this.doArithmetics(this.r1.d, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_e = function() {
  this.r1.a = this.doArithmetics(this.r1.e, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_h = function() {
  this.r1.a = this.doArithmetics(this.r1.h, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_l = function() {
  this.r1.a = this.doArithmetics(this.r1.l, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_ixh = function() {
  this.r1.a = this.doArithmetics(this.r1.ixh, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_ixl = function() {
  this.r1.a = this.doArithmetics(this.r1.ixl, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_iyh = function() {
  this.r1.a = this.doArithmetics(this.r1.iyh, hasCarry_add, isSub_add)
}

Z80.prototype.add_a_iyl = function() {
  this.r1.a = this.doArithmetics(this.r1.iyl, hasCarry_add, isSub_add)
}

Z80.prototype.sub_a_a = function() {
  this.r1.a = this.doArithmetics(this.r1.a, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_b = function() {
  this.r1.a = this.doArithmetics(this.r1.b, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_c = function() {
  this.r1.a = this.doArithmetics(this.r1.c, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_d = function() {
  this.r1.a = this.doArithmetics(this.r1.d, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_e = function() {
  this.r1.a = this.doArithmetics(this.r1.e, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_h = function() {
  this.r1.a = this.doArithmetics(this.r1.h, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_l = function() {
  this.r1.a = this.doArithmetics(this.r1.l, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_ixh = function() {
  this.r1.a = this.doArithmetics(this.r1.ixh, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_ixl = function() {
  this.r1.a = this.doArithmetics(this.r1.ixl, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_iyh = function() {
  this.r1.a = this.doArithmetics(this.r1.iyh, hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a_iyl = function() {
  this.r1.a = this.doArithmetics(this.r1.iyl, hasCarry_sub, isSub_sub)
}


// ADD/ADC/SUB/SBC a, n
Z80.prototype.opcodeTable[0xc6] = {
  funcName: 'add_a_n',
  dasm: 'add a, {0}',
  args: [ArgType.Byte]
}
Z80.prototype.opcodeTable[0xce] = {
  funcName: 'adc_a_n',
  dasm: 'adc a, {0}',
  args: [ArgType.Byte]
}
Z80.prototype.opcodeTable[0xde] = {
  funcName: 'sbc_a_n',
  dasm: 'sbc a, {0}',
  args: [ArgType.Byte]
}
Z80.prototype.opcodeTable[0xd6] = {
  funcName: 'sub_a_n',
  dasm: 'sub {0}',
  args: [ArgType.Byte]
}

Z80.prototype.adc_a_n = function() {
  this.r1.a = this.doArithmetics(this.read8(this.pc++), hasCarry_adc, isSub_adc)
}

Z80.prototype.add_a_n = function() {
  this.r1.a = this.doArithmetics(this.read8(this.pc++), hasCarry_add, isSub_add)
}

Z80.prototype.sbc_a_n = function() {
  this.r1.a = this.doArithmetics(this.read8(this.pc++), hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sub_a_n = function() {
  this.r1.a = this.doArithmetics(this.read8(this.pc++), hasCarry_sub, isSub_sub)
}


// ADD a, (hl/ix+d/iy+d)
Z80.prototype.opcodeTable[0x86] = {
  funcName: 'add_a__hl_',
  dasm: 'add a, (hl)',
  args: []
}
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x86] = {
    funcName: `add_a__${pref}_d_`,
    dasm: `add a, (${pref}{0})`,
    args: [ArgType.Offset]
  }
}

// ADC a, (hl/ix+d/iy+d)
Z80.prototype.opcodeTable[0x8e] = {
  funcName: 'adc_a__hl_',
  dasm: 'adc a, (hl)',
  args: []
}
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x8e] = {
    funcName: `adc_a__${pref}_d_`,
    dasm: `adc a, (${pref}{0})`,
    args: [ArgType.Offset]
  }
}

// SUB a, (hl/ix+d/iy+d)
Z80.prototype.opcodeTable[0x96] = {
  funcName: 'sub_a__hl_',
  dasm: 'sub (hl)',
  args: []
}
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x96] = {
    funcName: `sub_a__${pref}_d_`,
    dasm: `sub (${pref}{0})`,
    args: [ArgType.Offset]
  }
}

// SBC a, (hl/ix+d/iy+d)
Z80.prototype.opcodeTable[0x9e] = {
  funcName: 'sbc_a__hl_',
  dasm: 'sbc a, (hl)',
  args: []
}
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x9e] = {
    funcName: `sbc_a__${pref}_d_`,
    dasm: `sbc a, (${pref}{0})`,
    args: [ArgType.Offset]
  }
}

Z80.prototype.adc_a__hl_ = function() {
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl), hasCarry_adc, isSub_adc)
}

Z80.prototype.sbc_a__hl_ = function() {
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl), hasCarry_sbc, isSub_sbc)
}

Z80.prototype.add_a__hl_ = function() {
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl), hasCarry_add, isSub_add)
}

Z80.prototype.sub_a__hl_ = function() {
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl), hasCarry_sub, isSub_sub)
}


Z80.prototype.adc_a__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_a__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_adc, isSub_adc)
}

Z80.prototype.sbc_a__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_a__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_sbc, isSub_sbc)
}

Z80.prototype.add_a__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_add, isSub_add)
}

Z80.prototype.add_a__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_add, isSub_add)
}

Z80.prototype.sub_a__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_sub, isSub_sub)
}

Z80.prototype.sub_a__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.r1.a = this.doArithmetics(this.read8(this.r1.hl + offset), hasCarry_sub, isSub_sub)
}


// ADD HL, BC/DE/HL/SP
for (let rCode in Register16Map) {
  let opCode = 0b00001001 | (rCode << 4)
  let opFuncName = `add_hl_${Register16Map[rCode]}`
  let disasmString = `add hl, ${Register16Map[rCode]}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

// ADC ---//----
for (let rCode in Register16Map) {
  let opCode = 0b01001010 | (rCode << 4)
  let opFuncName = `adc_hl_${Register16Map[rCode]}`
  let disasmString = `adc hl, ${Register16Map[rCode]}`
  Z80.prototype.opcodeTableED[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

// SBC ---//----
for (let rCode in Register16Map) {
  let opCode = 0b01000010 | (rCode << 4)
  let opFuncName = `sbc_hl_${Register16Map[rCode]}`
  let disasmString = `sbc hl, ${Register16Map[rCode]}`
  Z80.prototype.opcodeTableED[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.add_hl_hl = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.hl, hasCarry_add, isSub_add)
}

Z80.prototype.add_hl_bc = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.bc, hasCarry_add, isSub_add)
}

Z80.prototype.add_hl_de = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.de, hasCarry_add, isSub_add)
}

Z80.prototype.add_hl_sp = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.sp, hasCarry_add, isSub_add)
}

Z80.prototype.adc_hl_hl = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.hl, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_hl_bc = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.bc, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_hl_de = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.de, hasCarry_adc, isSub_adc)
}

Z80.prototype.adc_hl_sp = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.sp, hasCarry_adc, isSub_adc)
}

Z80.prototype.sbc_hl_hl = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.hl, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_hl_bc = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.bc, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_hl_de = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.de, hasCarry_sbc, isSub_sbc)
}

Z80.prototype.sbc_hl_sp = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.sp, hasCarry_sbc, isSub_sbc)
}


Z80.prototype.add_ix_ix = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.ix, false, false)
}

Z80.prototype.add_ix_iy = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.iy, false, false)
}

Z80.prototype.add_ix_bc = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.bc, false, false)
}

Z80.prototype.add_ix_de = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.de, false, false)
}

Z80.prototype.add_ix_sp = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.sp, false, false)
}

Z80.prototype.add_iy_ix = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.ix, false, false)
}

Z80.prototype.add_iy_iy = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.iy, false, false)
}

Z80.prototype.add_iy_bc = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.bc, false, false)
}

Z80.prototype.add_iy_de = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.de, false, false)
}

Z80.prototype.add_iy_sp = function() {
  this.tStates += 7
  this.r1.hl = this.doAddWord(this.r1.hl, this.r1.sp, false, false)
}


// AND r
for (let rCode in RegisterMap) {
  let opCode = 0b10100000 | rCode
  let opFuncName = `and_${RegisterMap[rCode]}`
  let disasmString = `and ${RegisterMap[rCode]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, dasm: disasmString, args: [] }
}
// AND n
Z80.prototype.opcodeTable[0xe6] = { funcName: 'and_n', dasm: 'and {0}', args: [ArgType.Byte] }
// AND (HL/IX+d/IY+d)
Z80.prototype.opcodeTable[0xa6] = { funcName: 'and__hl_', dasm: 'and (hl)', args: [] }
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0xa6] = {
    funcName: `add__${pref}_d_`,
    dasm: `add ${pref}{0}`,
    args: [ArgType.Offset]
  }
}

// OR r
for (let rCode in RegisterMap) {
  let opCode = 0b10110000 | rCode
  let opFuncName = `or_${RegisterMap[rCode]}`
  let disasmString = `or ${RegisterMap[rCode]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, dasm: disasmString, args: [] }
}
// OR n
Z80.prototype.opcodeTable[0xf6] = { funcName: 'or_n', dasm: 'or {0}', args: [ArgType.Byte] }
// OR (HL/IX+d/IY+d)
Z80.prototype.opcodeTable[0xb6] = { funcName: 'or__hl_', dasm: 'or (hl)', args: [] }
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0xb6] = {
    funcName: `or__${pref}_d_`,
    dasm: `or ${pref}{0}`,
    args: [ArgType.Offset]
  }
}

// XOR r
for (let rCode in RegisterMap) {
  let opCode = 0b10101000 | rCode
  let opFuncName = `xor_${RegisterMap[rCode]}`
  let disasmString = `xor ${RegisterMap[rCode]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, dasm: disasmString, args: [] }
}
// XOR n
Z80.prototype.opcodeTable[0xee] = { funcName: 'xor_n', dasm: 'xor {0}', args: [ArgType.Byte] }
// XOR (HL/IX+d/IY+d)
Z80.prototype.opcodeTable[0xae] = { funcName: 'xor__hl_', dasm: 'xor (hl)', args: [] }
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0xae] = {
    funcName: `xor__${pref}_d_`,
    dasm: `xor ${pref}{0}`,
    args: [ArgType.Offset]
  }
}

Z80.prototype.and_a = function() {
  this.do_and(this.r1.a)
}

Z80.prototype.and_b = function() {
  this.do_and(this.r1.b)
}

Z80.prototype.and_c = function() {
  this.do_and(this.r1.c)
}

Z80.prototype.and_d = function() {
  this.do_and(this.r1.d)
}

Z80.prototype.and_e = function() {
  this.do_and(this.r1.e)
}

Z80.prototype.and_h = function() {
  this.do_and(this.r1.h)
}

Z80.prototype.and_l = function() {
  this.do_and(this.r1.l)
}

Z80.prototype.and_ixh = function() {
  this.do_and(this.r1.ixh)
}

Z80.prototype.and_ixl = function() {
  this.do_and(this.r1.ixl)
}

Z80.prototype.and_iyh = function() {
  this.do_and(this.r1.iyh)
}

Z80.prototype.and_iyl = function() {
  this.do_and(this.r1.iyl)
}

Z80.prototype.or_a = function() {
  this.do_or(this.r1.a)
}

Z80.prototype.or_b = function() {
  this.do_or(this.r1.b)
}

Z80.prototype.or_c = function() {
  this.do_or(this.r1.c)
}

Z80.prototype.or_d = function() {
  this.do_or(this.r1.d)
}

Z80.prototype.or_e = function() {
  this.do_or(this.r1.e)
}

Z80.prototype.or_h = function() {
  this.do_or(this.r1.h)
}

Z80.prototype.or_l = function() {
  this.do_or(this.r1.l)
}

Z80.prototype.or_ixh = function() {
  this.do_or(this.r1.ixh)
}

Z80.prototype.or_ixl = function() {
  this.do_or(this.r1.ixl)
}

Z80.prototype.or_iyh = function() {
  this.do_or(this.r1.iyh)
}

Z80.prototype.or_iyl = function() {
  this.do_or(this.r1.iyl)
}

Z80.prototype.xor_a = function() {
  this.do_xor(this.r1.a)
}

Z80.prototype.xor_b = function() {
  this.do_xor(this.r1.b)
}

Z80.prototype.xor_c = function() {
  this.do_xor(this.r1.c)
}

Z80.prototype.xor_d = function() {
  this.do_xor(this.r1.d)
}

Z80.prototype.xor_e = function() {
  this.do_xor(this.r1.e)
}

Z80.prototype.xor_h = function() {
  this.do_xor(this.r1.h)
}

Z80.prototype.xor_l = function() {
  this.do_xor(this.r1.l)
}

Z80.prototype.xor_ixh = function() {
  this.do_xor(this.r1.ixh)
}

Z80.prototype.xor_ixl = function() {
  this.do_xor(this.r1.ixl)
}

Z80.prototype.xor_iyh = function() {
  this.do_xor(this.r1.iyh)
}

Z80.prototype.xor_iyl = function() {
  this.do_xor(this.r1.iyl)
}


Z80.prototype.and_n = function() {
  this.do_and(this.read8(this.pc++))
}

Z80.prototype.or_n = function() {
  this.do_or(this.read8(this.pc++))
}

Z80.prototype.xor_n = function() {
  this.do_xor(this.read8(this.pc++))
}


Z80.prototype.and__hl_ = function() {
  this.do_and(this.read8(this.r1.hl))
}

Z80.prototype.or__hl_ = function() {
  this.do_or(this.read8(this.r1.hl))
}

Z80.prototype.xor__hl_ = function() {
  this.do_xor(this.read8(this.r1.hl))
}


Z80.prototype.and__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.do_and(this.read8(this.r1.ix + offset))
}

Z80.prototype.and__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.do_and(this.read8(this.r1.iy + offset))
}

Z80.prototype.or__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.do_or(this.read8(this.r1.ix + offset))
}

Z80.prototype.or__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.do_or(this.read8(this.r1.iy + offset))
}

Z80.prototype.xor__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.do_xor(this.read8(this.r1.ix + offset))
}

Z80.prototype.xor__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  this.do_xor(this.read8(this.r1.iy + offset))
}


// CP r
for (let rCode in RegisterMap) {
  let opCode = 0b10111000 | rCode
  let opFuncName = `cp_${RegisterMap[rCode]}`
  let disasmString = `cp ${RegisterMap[rCode]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, dasm: disasmString, args: [] }
}
// CP n
Z80.prototype.opcodeTable[0xfe] = { funcName: 'cp_n', dasm: 'cp {0}', args: [ArgType.Byte] }
// CP (HL/IX+d/IY+d)
Z80.prototype.opcodeTable[0xbe] = { funcName: 'cp__hl_', dasm: 'cp (hl)', args: [] }
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0xbe] = {
    funcName: `cp__${pref}_d_`,
    dasm: `cp ${pref}{0}`,
    args: [ArgType.Offset]
  }
}

Z80.prototype.cp_a = function() {
  this.doArithmetics(this.r1.a, false, true)
  this.adjustFlags(this.r1.a)
}

Z80.prototype.cp_b = function() {
  this.doArithmetics(this.r1.b, false, true)
  this.adjustFlags(this.r1.b)
}

Z80.prototype.cp_c = function() {
  this.doArithmetics(this.r1.c, false, true)
  this.adjustFlags(this.r1.c)
}

Z80.prototype.cp_d = function() {
  this.doArithmetics(this.r1.d, false, true)
  this.adjustFlags(this.r1.d)
}

Z80.prototype.cp_e = function() {
  this.doArithmetics(this.r1.e, false, true)
  this.adjustFlags(this.r1.e)
}

Z80.prototype.cp_h = function() {
  this.doArithmetics(this.r1.h, false, true)
  this.adjustFlags(this.r1.h)
}

Z80.prototype.cp_l = function() {
  this.doArithmetics(this.r1.l, false, true)
  this.adjustFlags(this.r1.l)
}

Z80.prototype.cp_ixh = function() {
  this.doArithmetics(this.r1.ixh, false, true)
  this.adjustFlags(this.r1.ixh)
}

Z80.prototype.cp_ixl = function() {
  this.doArithmetics(this.r1.ixl, false, true)
  this.adjustFlags(this.r1.ixl)
}

Z80.prototype.cp_iyh = function() {
  this.doArithmetics(this.r1.iyh, false, true)
  this.adjustFlags(this.r1.iyh)
}

Z80.prototype.cp_iyl = function() {
  this.doArithmetics(this.r1.iyl, false, true)
  this.adjustFlags(this.r1.iyl)
}


Z80.prototype.cp__hl_ = function() {
  this.doCPHL()
}

Z80.prototype.cp__ix_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  let value = this.read8(this.r1.ix + offset)
  this.doArithmetics(value, false, true)
  this.adjustFlags(value)
}

Z80.prototype.cp__iy_d_ = function() {
  this.tStates += 5
  let offset = signed8(this.read8(this.pc++))
  let value = this.read8(this.r1.iy + offset)
  this.doArithmetics(value, false, true)
  this.adjustFlags(value)
}


Z80.prototype.cp_n = function() {
  let value = this.read8(this.pc++)
  this.doArithmetics(value, false, true)
  this.adjustFlags(value)
}

// INC r
for (let rCode in RegisterMap) {
  let opCode = 0b00000100 | (rCode << 3)
  let opFuncName = `inc_${RegisterMap[rCode]}`
  let disasmString = `inc ${RegisterMap[rCode]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, dasm: disasmString, args: [] }
}
// INC (HL/IX+d/IY+d)
Z80.prototype.opcodeTable[0x34] = { funcName: 'inc__hl_', dasm: 'inc (hl)', args: [] }
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x34] = {
    funcName: `inc__${pref}_d_`,
    dasm: `inc ${pref}{0}`,
    args: [ArgType.Offset]
  }
}

// DEC r
for (let rCode in RegisterMap) {
  let opCode = 0b00000101 | (rCode << 3)
  let opFuncName = `dec_${RegisterMap[rCode]}`
  let disasmString = `dec ${RegisterMap[rCode]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, dasm: disasmString, args: [] }
}
// DEC (HL/IX+d/IY+d)
Z80.prototype.opcodeTable[0x35] = { funcName: 'dec__hl_', dasm: 'dec (hl)', args: [] }
for (let pref in Prefixes) {
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x35] = {
    funcName: `dec__${pref}_d_`,
    dasm: `dec ${pref}{0}`,
    args: [ArgType.Offset]
  }
}

Z80.prototype.inc_a = function() {
  this.r1.a = this.doIncDec(this.r1.a, isDec_inc)
}

Z80.prototype.inc_b = function() {
  this.r1.b = this.doIncDec(this.r1.b, isDec_inc)
}

Z80.prototype.inc_c = function() {
  this.r1.c = this.doIncDec(this.r1.c, isDec_inc)
}

Z80.prototype.inc_d = function() {
  this.r1.d = this.doIncDec(this.r1.d, isDec_inc)
}

Z80.prototype.inc_e = function() {
  this.r1.e = this.doIncDec(this.r1.e, isDec_inc)
}

Z80.prototype.inc_h = function() {
  this.r1.h = this.doIncDec(this.r1.h, isDec_inc)
}

Z80.prototype.inc_l = function() {
  this.r1.l = this.doIncDec(this.r1.l, isDec_inc)
}

Z80.prototype.inc_ixh = function() {
  this.r1.ixh = this.doIncDec(this.r1.ixh, isDec_inc)
}

Z80.prototype.inc_ixl = function() {
  this.r1.ixl = this.doIncDec(this.r1.ixl, isDec_inc)
}

Z80.prototype.inc_iyh = function() {
  this.r1.iyh = this.doIncDec(this.r1.iyh, isDec_inc)
}

Z80.prototype.inc_iyl = function() {
  this.r1.iyl = this.doIncDec(this.r1.iyl, isDec_inc)
}

Z80.prototype.dec_a = function() {
  this.r1.a = this.doIncDec(this.r1.a, isDec_dec)
}

Z80.prototype.dec_b = function() {
  this.r1.b = this.doIncDec(this.r1.b, isDec_dec)
}

Z80.prototype.dec_c = function() {
  this.r1.c = this.doIncDec(this.r1.c, isDec_dec)
}

Z80.prototype.dec_d = function() {
  this.r1.d = this.doIncDec(this.r1.d, isDec_dec)
}

Z80.prototype.dec_e = function() {
  this.r1.e = this.doIncDec(this.r1.e, isDec_dec)
}

Z80.prototype.dec_h = function() {
  this.r1.h = this.doIncDec(this.r1.h, isDec_dec)
}

Z80.prototype.dec_l = function() {
  this.r1.l = this.doIncDec(this.r1.l, isDec_dec)
}

Z80.prototype.dec_ixh = function() {
  this.r1.ixh = this.doIncDec(this.r1.ixh, isDec_dec)
}

Z80.prototype.dec_ixl = function() {
  this.r1.ixl = this.doIncDec(this.r1.ixl, isDec_dec)
}

Z80.prototype.dec_iyh = function() {
  this.r1.iyh = this.doIncDec(this.r1.iyh, isDec_dec)
}

Z80.prototype.dec_iyl = function() {
  this.r1.iyl = this.doIncDec(this.r1.iyl, isDec_dec)
}


Z80.prototype.inc__hl_ = function() {
  this.tStates++
  let value = this.read8(this.r1.hl)
  this.write8(this.r1.hl, this.doIncDec(value, isDec_inc))
}

Z80.prototype.dec__hl_ = function() {
  this.tStates++
  let value = this.read8(this.r1.hl)
  this.write8(this.r1.hl, this.doIncDec(value, isDec_dec))
}


Z80.prototype.inc__ix_d_ = function() {
  this.tStates += 6
  let offset = signed8(this.read8(this.pc++))
  let addr = this.r1.ix + offset
  let value = this.read8(addr)
  this.write8(addr, this.doIncDec(value, isDec_inc))
}

Z80.prototype.inc__iy_d_ = function() {
  this.tStates += 6
  let offset = signed8(this.read8(this.pc++))
  let addr = this.r1.iy + offset
  let value = this.read8(addr)
  this.write8(addr, this.doIncDec(value, isDec_inc))
}

Z80.prototype.dec__ix_d_ = function() {
  this.tStates += 6
  let offset = signed8(this.read8(this.pc++))
  let addr = this.r1.ix + offset
  let value = this.read8(addr)
  this.write8(addr, this.doIncDec(value, isDec_dec))
}

Z80.prototype.dec__iy_d_ = function() {
  this.tStates += 6
  let offset = signed8(this.read8(this.pc++))
  let addr = this.r1.iy + offset
  let value = this.read8(addr)
  this.write8(addr, this.doIncDec(value, isDec_dec))
}


// INC ss
for (let rCode in Register16Map) {
  let opCode = 0b00000011 | (rCode << 4)
  let opFuncName = `inc_${Register16Map[rCode]}`
  let disasmString = `inc ${Register16Map[rCode]}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}
for (let pref in Prefixes) {
  let opFuncName = `inc_${pref}`
  let disasmString = `inc ${pref}`
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x23] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

// DEC ss
for (let rCode in Register16Map) {
  let opCode = 0b00001011 | (rCode << 4)
  let opFuncName = `dec_${Register16Map[rCode]}`
  let disasmString = `dec ${Register16Map[rCode]}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}
for (let pref in Prefixes) {
  let opFuncName = `dec_${pref}`
  let disasmString = `dec ${pref}`
  Z80.prototype.opcodeTable[Prefixes[pref]].nextTable[0x2b] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.inc_hl = function() {
  this.tStates += 2
  this.r1.hl++
}
Z80.prototype.inc_sp = function() {
  this.tStates += 2
  this.r1.sp++
}
Z80.prototype.inc_de = function() {
  this.tStates += 2
  this.r1.de++
}
Z80.prototype.inc_bc = function() {
  this.tStates += 2
  this.r1.bc++
}
Z80.prototype.inc_ix = function() {
  this.tStates += 2
  this.r1.ix++
}
Z80.prototype.inc_iy = function() {
  this.tStates += 2
  this.r1.iy++
}
Z80.prototype.dec_hl = function() {
  this.tStates += 2
  this.r1.hl--
}
Z80.prototype.dec_sp = function() {
  this.tStates += 2
  this.r1.sp--
}
Z80.prototype.dec_de = function() {
  this.tStates += 2
  this.r1.de--
}
Z80.prototype.dec_bc = function() {
  this.tStates += 2
  this.r1.bc--
}
Z80.prototype.dec_ix = function() {
  this.tStates += 2
  this.r1.ix--
}
Z80.prototype.dec_iy = function() {
  this.tStates += 2
  this.r1.iy--
}

// DAA
Z80.prototype.opcodeTable[0x27] = { funcName: 'daa', dasm: 'daa', args: [] }
Z80.prototype.daa = function() {
  this.doDAA()
}

// CPL
Z80.prototype.opcodeTable[0x2f] = { funcName: 'cpl', dasm: 'cpl', args: [] }
Z80.prototype.cpl = function() {
  this.r1.a = ~this.r1.a
  this.setFlag(f_h | f_n)
  this.adjustFlags(this.r1.a)
}

// NEG
Z80.prototype.opcodeTableED[0x44] = { funcName: 'neg', dasm: 'neg', args: [] }
Z80.prototype.neg = function() {
  let _t = this.r1.a
  this.r1.a = 0
  this.r1.a = this.doArithmetics(_t, false, true)
  this.setFlag(f_n)
}

// CCF
Z80.prototype.opcodeTable[0x3f] = { funcName: 'ccf', dasm: 'ccf', args: [] }
Z80.prototype.ccf = function() {
  this.valFlag(f_c, !this.getFlag(f_c))
  this.resFlag(f_n)
  this.adjustFlags(this.r1.a)
}
// SCF
Z80.prototype.opcodeTable[0x37] = { funcName: 'scf', dasm: 'scf', args: [] }
Z80.prototype.scf = function() {
  this.setFlag(f_c)
  this.resFlag(f_n | f_h)
  this.adjustFlags(this.r1.a)
}
// HALT
Z80.prototype.opcodeTable[0x76] = { funcName: 'halt', dasm: 'halt', args: [] }
Z80.prototype.halt = function() {
  this.halted = true
  this.pc--
}
// DI
Z80.prototype.opcodeTable[0xf3] = { funcName: 'di', dasm: 'di', args: [] }
Z80.prototype.opcodeTable[0xfb] = { funcName: 'ei', dasm: 'ei', args: [] }

Z80.prototype.di = function() {
  this.iff1 = ie_di
  this.iff2 = ie_di
  this.deferInt = true
}

Z80.prototype.ei = function() {
  this.iff1 = ie_ei
  this.iff2 = ie_ei
  this.deferInt = true
}


// IM
Z80.prototype.opcodeTableED[0x46] = { funcName: 'im_0', dasm: 'im 0', args: [] }
Z80.prototype.opcodeTableED[0x56] = { funcName: 'im_1', dasm: 'im 1', args: [] }
Z80.prototype.opcodeTableED[0x5e] = { funcName: 'im_2', dasm: 'im 2', args: [] }

Z80.prototype.im_0 = function() {
  this.im = 0
}

Z80.prototype.im_1 = function() {
  this.im = 1
}

Z80.prototype.im_2 = function() {
  this.im = 2
}


Z80.prototype.opcodeTable[0x07] = { funcName: 'rlca', dasm: 'rlca', args: [] }
Z80.prototype.opcodeTable[0x17] = { funcName: 'rla', dasm: 'rla', args: [] }
Z80.prototype.opcodeTable[0x0f] = { funcName: 'rrca', dasm: 'rrca', args: [] }
Z80.prototype.opcodeTable[0x1f] = { funcName: 'rra', dasm: 'rra', args: [] }

Z80.prototype.rla = function() {
  this.r1.a = this.do_rl(this.r1.a, false)
}

Z80.prototype.rra = function() {
  this.r1.a = this.do_rr(this.r1.a, false)
}

Z80.prototype.rlca = function() {
  this.r1.a = this.do_rlc(this.r1.a, false)
}

Z80.prototype.rrca = function() {
  this.r1.a = this.do_rrc(this.r1.a, false)
}


// IN A, (n)
Z80.prototype.opcodeTable[0xdb] = { funcName: 'in_a__n_', dasm: 'in a, (0x{0})', args: [ArgType.Byte] }
Z80.prototype.in_a__n_ = function() {
  let port = this.read8(this.pc++)
  port = (this.r1.a << 8) | port
  this.r1.a = this.ioread(port)
}

// OUT (n), A
Z80.prototype.opcodeTable[0xd3] = { funcName: 'out__n__a', dasm: 'out (0x{0}), a', args: [ArgType.Byte] }
Z80.prototype.out__n__a = function() {
  let port = this.read8(this.pc++)
  port = (this.r1.a << 8) | port
  this.iowrite(port, this.r1.a)
}

// JP nn
Z80.prototype.opcodeTable[0xc3] = {
  funcName: 'jp_nn',
  dasm: 'jp {0}',
  args: [ArgType.Word]
}

Z80.prototype.jp_nn = function() {
  this.pc = this.read16(this.pc)
}

// JP cc, nn
for (let cond in Conditions) {
  let opCode = 0b11000010 | (Conditions[cond] << 3)
  let opFuncName = `jp_${cond}_nn`
  let disasmString = `jp_${cond}_{0}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Word]
  }
}

Z80.prototype.jp_c_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_c)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_nc_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_nc)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_z_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_z)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_nz_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_nz)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_pe_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_pe)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_po_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_po)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_p_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_p)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_m_nn = function() {
  // no matter if the condition is true we spend 6 tstates to read the addr
  let addr = this.read16(this.pc)
  if (this.condition(c_m)) {
    this.pc = addr
  } else {
    this.pc += 2
  }
}


Z80.prototype.opcodeTable[0x18] = { funcName: 'jr_pc_e', dasm: 'jr pc{0}', args: [ArgType.Offset] }
Z80.prototype.jr_pc_e = function() {
  let offset = signed8(this.read8(this.pc++))
  this.tStates += 5
  this.pc = this.pc + offset
}

Z80.prototype.opcodeTable[0x38] = { funcName: 'jr_c_pc_e', dasm: 'jr c, pc{0}', args: [ArgType.Offset] }
Z80.prototype.opcodeTable[0x30] = { funcName: 'jr_nc_pc_e', dasm: 'jr nc, pc{0}', args: [ArgType.Offset] }
Z80.prototype.opcodeTable[0x28] = { funcName: 'jr_z_pc_e', dasm: 'jr z, pc{0}', args: [ArgType.Offset] }
Z80.prototype.opcodeTable[0x20] = { funcName: 'jr_nz_pc_e', dasm: 'jr nz, pc{0}', args: [ArgType.Offset] }

Z80.prototype.jr_c_pc_e = function() {
  let offset = signed8(this.read8(this.pc++))
  if (this.condition(c_c)) {
    this.tStates += 5
    this.pc = this.pc + offset
  }
}

Z80.prototype.jr_nc_pc_e = function() {
  let offset = signed8(this.read8(this.pc++))
  if (this.condition(c_nc)) {
    this.tStates += 5
    this.pc = this.pc + offset
  }
}

Z80.prototype.jr_z_pc_e = function() {
  let offset = signed8(this.read8(this.pc++))
  if (this.condition(c_z)) {
    this.tStates += 5
    this.pc = this.pc + offset
  }
}

Z80.prototype.jr_nz_pc_e = function() {
  let offset = signed8(this.read8(this.pc++))
  if (this.condition(c_nz)) {
    this.tStates += 5
    this.pc = this.pc + offset
  }
}


// JP (HL/IX/IY)
Z80.prototype.opcodeTable[0xe9] = { funcName: 'jp__hl_', dasm: 'jp (hl)', args: [] }
Z80.prototype.opcodeTableDD[0xe9] = { funcName: 'jp__ix_', dasm: 'jp (ix)', args: [] }
Z80.prototype.opcodeTableFD[0xe9] = { funcName: 'jp__iy_', dasm: 'jp (iy)', args: [] }

Z80.prototype.jp__hl_ = function() {
  this.pc = this.r1.hl
}
Z80.prototype.jp__ix_ = function() {
  this.pc = this.r1.ix
}
Z80.prototype.jp__iy_ = function() {
  this.pc = this.r1.iy
}

// DJNZ
Z80.prototype.opcodeTable[0x10] = { funcName: 'djnz_pc_e', dasm: 'djnz pc{0}', args: [ArgType.Offset] }
Z80.prototype.djnz_pc_e = function() {
  this.tStates++
  let offset = signed8(this.read8(this.pc++))
  this.r1.b--
  if (this.r1.b !== 0) {
    this.tStates += 5
    this.pc = this.pc + offset
  }
}

// CALL nn
Z80.prototype.opcodeTable[0xcd] = { funcName: 'call_nn', dasm: 'call {0}', args: [ArgType.Word] }
Z80.prototype.call_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  this.tStates++
  this.doPush(this.pc)
  this.pc = addr
}

// CALL cc, nn
for (let cond in Conditions) {
  let opCode = 0b11000100 | (Conditions[cond] << 3)
  let opFuncName = `call_${cond}_nn`
  let disasmString = `call ${cond}, {0}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Word]
  }
}

Z80.prototype.call_c_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_c)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}

Z80.prototype.call_m_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_m)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}

Z80.prototype.call_nc_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_nc)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}

Z80.prototype.call_nz_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_nz)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}

Z80.prototype.call_p_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_p)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}

Z80.prototype.call_pe_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_pe)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}

Z80.prototype.call_po_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_po)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}

Z80.prototype.call_z_nn = function() {
  let addr = this.read16(this.pc)
  this.pc += 2
  if (this.condition(c_z)) {
    this.tStates++
    this.doPush(this.pc)
    this.pc = addr
  }
}


// RET
Z80.prototype.opcodeTable[0xc9] = { funcName: 'ret', dasm: 'ret', args: [] }
Z80.prototype.ret = function() {
  this.pc = this.doPop()
}

// RET cc
for (let cond in Conditions) {
  let opCode = 0b11000000 | (Conditions[cond] << 3)
  let opFuncName = `ret_${cond}`
  let disasmString = `ret ${cond}`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: [ArgType.Word]
  }
}

Z80.prototype.ret_c = function() {
  this.tStates++
  if (this.condition(c_c)) {
    this.ret()
  }
}

Z80.prototype.ret_m = function() {
  this.tStates++
  if (this.condition(c_m)) {
    this.ret()
  }
}

Z80.prototype.ret_nc = function() {
  this.tStates++
  if (this.condition(c_nc)) {
    this.ret()
  }
}

Z80.prototype.ret_nz = function() {
  this.tStates++
  if (this.condition(c_nz)) {
    this.ret()
  }
}

Z80.prototype.ret_p = function() {
  this.tStates++
  if (this.condition(c_p)) {
    this.ret()
  }
}

Z80.prototype.ret_pe = function() {
  this.tStates++
  if (this.condition(c_pe)) {
    this.ret()
  }
}

Z80.prototype.ret_po = function() {
  this.tStates++
  if (this.condition(c_po)) {
    this.ret()
  }
}

Z80.prototype.ret_z = function() {
  this.tStates++
  if (this.condition(c_z)) {
    this.ret()
  }
}


// RST p
for (let p = 0; p < 8; p++) {
  let vector = p << 3
  let opCode = 0b11000111 | vector
  let opFuncName = `rst_${hex8(vector)}h`
  let disasmString = `rst ${hex8(vector)}h`
  Z80.prototype.opcodeTable[opCode] = {
    funcName: opFuncName,
    dasm: disasmString,
    args: []
  }
}

Z80.prototype.rst_00h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x00
}

Z80.prototype.rst_08h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x08
}

Z80.prototype.rst_10h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x10
}

Z80.prototype.rst_18h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x18
}

Z80.prototype.rst_20h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x20
}

Z80.prototype.rst_28h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x28
}

Z80.prototype.rst_30h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x30
}

Z80.prototype.rst_38h = function() {
  this.tStates += 1
  this.doPush(this.pc)
  this.pc = 0x38
}

module.exports = Z80

const ParityBit = require('./parity')
const { unot8, unsigned8, hex16, hex8 } = require('./utils')

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

const RegisterMapHL = {
  0b100: 'h',
  0b101: 'l'
}

const Prefixes = {
  ix: 0xdd,
  iy: 0xfd
}

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

const MemoryMethods = [ 'read8', 'read16', 'write8', 'write16' ]

// Z80 constructor

const Z80 = function(memory, debug) {
  if (!(this instanceof Z80)) {
    throw 'Z80 is a constructor, use "new" keyword'
  }

  if (!memory) {
    throw 'Constructor should be called with a Memory instance as the first argument'
  }

  // Binding memory access methods
  MemoryMethods.forEach((method) => {
    if (!memory[method] || typeof memory[method] !== 'function') {
      throw 'Memory instance should have a ' + method + ' method'
    }
    this[method] = memory[method].bind(memory)
  })

  this.tStates = 0
  this.debug = !!debug

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
    set: (val) => {
      this.w0[2] = val
    }
  })
  // Alias
  Object.defineProperty(this.r1, 'sp', {
    get: () => {
      return this.w0[2]
    },
    set: (val) => {
      this.w0[2] = val
    }
  })
  Object.defineProperty(this, 'pc', {
    get: () => {
      return this.w0[0]
    },
    set: (val) => {
      this.w0[0] = val
    }
  })
  Object.defineProperty(this, 'r', {
    get: () => {
      return this.b0[2]
    },
    set: (val) => {
      this.b0[2] = val
    }
  })
  Object.defineProperty(this, 'i', {
    get: () => {
      return this.b0[3]
    },
    set: (val) => {
      this.b0[3] = val
    }
  })
}

Z80.prototype._defineByteRegister = function(name, position) {
  Object.defineProperty(this.r1, name, {
    get: () => {
      return this.b1[position]
    },
    set: (value) => {
      this.b1[position] = value
    }
  })
  Object.defineProperty(this.r2, name, {
    get: () => {
      return this.b2[position]
    },
    set: (value) => {
      this.b2[position] = value
    }
  })
}

Z80.prototype._defineWordRegister = function(name, position) {
  Object.defineProperty(this.r1, name, {
    get: () => {
      return this.w1[position]
    },
    set: (value) => {
      this.w1[position] = value
    }
  })
  Object.defineProperty(this.r2, name, {
    get: () => {
      return this.w2[position]
    },
    set: (value) => {
      this.w2[position] = value
    }
  })
}

Z80.prototype.dump = function() {
  console.log(`PC: ${hex16(this.pc)}`)
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
  if (operandName in this.r1) {
    this.r1[operandName] = this.read16(this.sp)
  } else {
    this[operandName] = this.read16(this.sp)
  }
  this.sp += 2
}

// R register
Z80.prototype.incr = function() {
  this.r = (this.r & 0x80) | ((this.r + 1) & 0x7f)
}

Z80.prototype.decr = function() {
  this.r = (this.r & 0x80) | ((this.r - 1) & 0x7f)
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
Z80.prototype.opcodeTableDD[0xcb] = { nextTable: Z80.prototype.opcodeTableDDCB }
Z80.prototype.opcodeTableFD[0xcb] = { nextTable: Z80.prototype.opcodeTableFDCB }

Z80.prototype.disassemble = function(addr) {
  let codes = []

  if (typeof addr === 'undefined') {
    addr = this.pc
  }
  let opCode = this.read8(addr++)
  codes.push(opCode)

  let instr = this.opcodeTable[opCode]
  if (!instr) {
    return 'Error disassembling ' + codes.map((c) => hex8(c)).join(' ')
  }

  while ('nextTable' in instr) {
    let nextTable = instr.nextTable
    opCode = this.read8(addr++)
    codes.push(opCode)

    instr = nextTable[opCode]
    if (!instr) {
      return 'Error disassembling ' + codes.map((c) => hex8(c)).join(' ')
    }
  }

  let { dasm, args } = instr
  let argNum = 0
  let arg
  args.forEach((argType) => {
    switch (argType) {
      case ArgType.Byte:
        arg = this.read8(addr++)
        dasm = dasm.replace(`{${argNum++}}`, `$${hex8(arg)}`)
        break
      case ArgType.Offset:
        arg = this.read8(addr++)
        dasm = dasm.replace(`{${argNum++}}`, `${arg}`)
        break
      case ArgType.Word:
        arg = this.read16(addr)
        addr += 2
        dasm = dasm.replace(`{${argNum++}}`, `0x${hex16(arg)}`)
        break
    }
  })
  return dasm
}

Z80.prototype.execInstruction = function() {
  this.incr()
  let opCode = this.read8(this.pc)
  if (this.debug) {
    console.log('read opCode ' + hex8(opCode))
  }
  let codesString = opCode.toString(16)
  let instr = this.opcodeTable[opCode]
  if (this.debug) {
    console.log('instruction is ' + instr)
  }
  if (!instr) {
    throw 'Unknown instruction (opcode ' + codesString + ')'
  }

  while ('nextTable' in instr) {
    let nextTable = instr.nextTable
    if (this.debug) {
      console.log('Next table reached')
    }
    if (nextTable.opcodeOffset) {
      this.decr()
    }
    this.tStates += 3
    this.pc++
    opCode = this.read8(this.pc)
    if (this.debug) {
      console.log('read opCode ' + hex8(opCode))
    }
    codesString += ' ' + opCode.toString(16)
    instr = nextTable[opCode]
    if (this.debug) {
      console.log('instruction is ' + JSON.stringify(instr))
    }
    if (!instr) {
      throw 'Unknown instruction (opcode ' + codesString + ')'
    }
  }

  this.pc++
  let { funcName, tStates } = instr
  if (!(funcName in this)) {
    throw 'Instruction ' + funcName + ' is not implemented'
  }
  this[funcName].call(this)
  this.tStates += tStates
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
      tStates: 4,
      cycles: 1,
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
        tStates: 4,
        cycles: 1,
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
    tStates: 7,
    cycles: 2,
    dasm: disasmString,
    args: [ ArgType.Byte ]
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
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, tStates: 7, cycles: 2, dasm: disasmString, args: [] }
}

Z80.prototype.lda__hl_ = function() {
  this.r1.a = this.read8(this.r1.hl)
}

Z80.prototype.ldb__hl_ = function() {
  this.r1.b = this.read8(this.r1.hl)
}

Z80.prototype.ldc__hl_ = function() {
  this.r1.c = this.read8(this.r1.hl)
}

Z80.prototype.ldd__hl_ = function() {
  this.r1.d = this.read8(this.r1.hl)
}

Z80.prototype.lde__hl_ = function() {
  this.r1.e = this.read8(this.r1.hl)
}

Z80.prototype.ldh__hl_ = function() {
  this.r1.h = this.read8(this.r1.hl)
}

Z80.prototype.ldl__hl_ = function() {
  this.r1.l = this.read8(this.r1.hl)
}


// LD (HL), r
for (let src in RegisterMap) {
  let opCode = 0b01110000 | src
  let opFuncName = `ld__hl__${RegisterMap[src]}`
  let disasmString = `ld (hl), ${RegisterMap[src]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, tStates: 7, cycles: 2, dasm: disasmString, args: [] }
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
  tStates: 10,
  cycles: 3,
  dasm: 'ld (hl), {0}',
  args: [ ArgType.Byte ]
}

Z80.prototype.ld__hl__n = function() {
  this.write8(this.r1.hl, this.read8(this.pc++))
}

// LD A, (BC)
Z80.prototype.opcodeTable[0b00001010] = { funcName: 'ld_a__bc_', tStates: 7, cycles: 2, dasm: 'ld a, (bc)', args: [] }
// LD A, (DE)
Z80.prototype.opcodeTable[0b00011010] = { funcName: 'ld_a__de_', tStates: 7, cycles: 2, dasm: 'ld a, (de)', args: [] }

Z80.prototype.ld_a__bc_ = function() {
  this.r1.a = this.read8(this.r1.bc)
}

Z80.prototype.ld_a__de_ = function() {
  this.r1.a = this.read8(this.r1.de)
}


// LD (BC), A
Z80.prototype.opcodeTable[0b00000010] = { funcName: 'ld__bc__a', tStates: 7, cycles: 2, dasm: 'ld (bc), a', args: [] }
// LD (DE), A
Z80.prototype.opcodeTable[0b00010010] = { funcName: 'ld__de__a', tStates: 7, cycles: 2, dasm: 'ld (de), a', args: [] }

Z80.prototype.ld__bc__a = function() {
  this.write8(this.r1.bc, this.r1.a)
}

Z80.prototype.ld__de__a = function() {
  this.write8(this.r1.de, this.r1.a)
}


// LD A, (nn)
Z80.prototype.opcodeTable[0b00111010] = {
  funcName: 'ld_a__nn_',
  tStates: 13,
  cycles: 4,
  dasm: 'ld a, ({0})',
  args: [ ArgType.Word ]
}

Z80.prototype.ld_a__nn_ = function() {
  this.r1.a = this.read8(this.read16(this.pc))
  this.pc += 2
}

// LD (nn), A
Z80.prototype.opcodeTable[0b00110010] = {
  funcName: 'ld__nn__a',
  tStates: 13,
  cycles: 4,
  dasm: 'ld ({0}), a',
  args: [ ArgType.Word ]
}

Z80.prototype.ld__nn__a = function() {
  this.write8(this.read16(this.pc), this.r1.a)
  this.pc += 2
}

// LD A, I
Z80.prototype.opcodeTableED[0b01010111] = { funcName: 'ld_a_i', tStates: 9, cycles: 2, dasm: 'ld a, i', args: [] }
// LD A, R
Z80.prototype.opcodeTableED[0b01011111] = { funcName: 'ld_a_r', tStates: 9, cycles: 2, dasm: 'ld a, r', args: [] }

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
Z80.prototype.opcodeTableED[0b01000111] = { funcName: 'ld_i_a', tStates: 9, cycles: 2, dasm: 'ld i, a', args: [] }
// LD R, A
Z80.prototype.opcodeTableED[0b01001111] = { funcName: 'ld_r_a', tStates: 9, cycles: 2, dasm: 'ld r, a', args: [] }

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
      tStates: 15,
      cycles: 2,
      dasm: disasmString,
      args: [ ArgType.Byte ]
    }
  }
}

Z80.prototype.ld_a__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.a = this.read8(this.ix + offset)
}

Z80.prototype.ld_a__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.a = this.read8(this.iy + offset)
}

Z80.prototype.ld_b__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.b = this.read8(this.ix + offset)
}

Z80.prototype.ld_b__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.b = this.read8(this.iy + offset)
}

Z80.prototype.ld_c__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.c = this.read8(this.ix + offset)
}

Z80.prototype.ld_c__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.c = this.read8(this.iy + offset)
}

Z80.prototype.ld_d__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.d = this.read8(this.ix + offset)
}

Z80.prototype.ld_d__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.d = this.read8(this.iy + offset)
}

Z80.prototype.ld_e__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.e = this.read8(this.ix + offset)
}

Z80.prototype.ld_e__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.e = this.read8(this.iy + offset)
}

Z80.prototype.ld_h__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.h = this.read8(this.ix + offset)
}

Z80.prototype.ld_h__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.h = this.read8(this.iy + offset)
}

Z80.prototype.ld_l__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.r1.l = this.read8(this.ix + offset)
}

Z80.prototype.ld_l__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
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
      tStates: 15,
      cycles: 5,
      dasm: disasmString,
      args: [ ArgType.Byte ]
    }
  }
}

Z80.prototype.ld_a__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.a)
}

Z80.prototype.ld_a__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.a)
}

Z80.prototype.ld_b__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.b)
}

Z80.prototype.ld_b__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.b)
}

Z80.prototype.ld_c__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.c)
}

Z80.prototype.ld_c__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.c)
}

Z80.prototype.ld_d__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.d)
}

Z80.prototype.ld_d__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.d)
}

Z80.prototype.ld_e__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.e)
}

Z80.prototype.ld_e__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.e)
}

Z80.prototype.ld_h__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.h)
}

Z80.prototype.ld_h__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.h)
}

Z80.prototype.ld_l__ix_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.ix + offset, this.r1.l)
}

Z80.prototype.ld_l__iy_d_ = function() {
  let offset = unsigned8(this.read8(this.pc++))
  this.write8(this.iy + offset, this.r1.l)
}


// LD (IX/IY+d), n
for (let iReg in Prefixes) {
  let opFuncName = `ld__${iReg}_d__n`
  let disasmString = `ld (${iReg}+{0}), {1}`
  Z80.prototype.opcodeTable[Prefixes[iReg]][0b00110110] = {
    funcName: opFuncName,
    tStates: 15,
    cycles: 5,
    dasm: disasmString,
    args: [ ArgType.Word ]
  }
}

Z80.prototype.ld__ix_d__n = function() {
  let offset = unsigned8(this.read8(this.pc++))
  let n = this.read8(this.pc++)
  this.write8(this.ix + offset, n)
}

Z80.prototype.ld__iy_d__n = function() {
  let offset = unsigned8(this.read8(this.pc++))
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
    tStates: 10,
    cycles: 2,
    dasm: disasmString,
    args: [ ArgType.Word ]
  }
}

for (let regName in Prefixes) {
  let code = Prefixes[regName]
  Z80.prototype.opcodeTable[code].nextTable[0b00100001] = {
    funcName: `ld_${regName}_nn`,
    tStates: 10,
    cycles: 2,
    dasm: `ld ${regName}, {0}`,
    args: [ ArgType.Word ]
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


Z80.prototype.opcodeTable[0x2a] = {
  funcName: 'ld_hl__nn_',
  tStates: 16,
  cycles: 5,
  dasm: `ld hl, ({0})`,
  args: [ ArgType.Word ]
}

for (let rCode in Register16Map) {
  let opCode = 0b01001011 | (rCode << 4)
  let opFuncName = `ld_${Register16Map[rCode]}__nn_`
  let disasmString = `ld ${Register16Map[rCode]}, ({0})`
  Z80.prototype.opcodeTableED[opCode] = {
    funcName: opFuncName,
    tStates: 20,
    cycles: 6,
    dasm: disasmString,
    args: [ ArgType.Word ]
  }
}

Z80.prototype.ld_bc__nn_ = function() {
  this.r1.ld_bc__nn_ = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_de__nn_ = function() {
  this.r1.ld_de__nn_ = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_hl__nn_ = function() {
  this.r1.ld_hl__nn_ = this.read16(this.read16(this.pc))
  this.pc += 2
}

Z80.prototype.ld_sp__nn_ = function() {
  this.r1.ld_sp__nn_ = this.read16(this.read16(this.pc))
  this.pc += 2
}


// NOP
Z80.prototype.opcodeTable[0x00] = {
  funcName: 'nop',
  tStates: 4,
  cycles: 1,
  dasm: 'nop',
  args: []
}

Z80.prototype.nop = function() {
  // nop
}

// JP nn
Z80.prototype.opcodeTable[0xc3] = {
  funcName: 'jp_nn',
  tStates: 10,
  cycles: 3,
  dasm: 'jp {0}',
  args: [ ArgType.Word ]
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
    tStates: 10,
    cycles: 3,
    dasm: disasmString,
    args: [ ArgType.Word ]
  }
}

Z80.prototype.jp_c_nn = function() {
  if (this.condition(c_c)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_nc_nn = function() {
  if (this.condition(c_nc)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_z_nn = function() {
  if (this.condition(c_z)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_nz_nn = function() {
  if (this.condition(c_nz)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_pe_nn = function() {
  if (this.condition(c_pe)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_po_nn = function() {
  if (this.condition(c_po)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_p_nn = function() {
  if (this.condition(c_p)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
  }
}

Z80.prototype.jp_m_nn = function() {
  if (this.condition(c_m)) {
    this.pc = this.read16(this.pc)
  } else {
    this.pc += 2
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
    tStates: 11,
    cycles: 3,
    dasm: disasmString,
    args: []
  }
}

// Z80.prototype.rst_00h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x00
// }

// Z80.prototype.rst_08h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x08
// }

// Z80.prototype.rst_10h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x10
// }

// Z80.prototype.rst_18h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x18
// }

// Z80.prototype.rst_20h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x20
// }

// Z80.prototype.rst_28h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x28
// }

// Z80.prototype.rst_30h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x30
// }

// Z80.prototype.rst_38h = function() {
//   this.doPush(this.pc)
//   this.pc = 0x38
// }

module.exports = Z80

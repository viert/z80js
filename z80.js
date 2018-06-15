const RegisterMap = {
  0b111: 'a',
  0b000: 'b',
  0b001: 'c',
  0b010: 'd',
  0b011: 'e',
  0b100: 'h',
  0b101: 'l'
}

const RegisterMapHL = {
  0b100: 'h',
  0b101: 'l'
}

const Prefixes = {
  ix: 0xdd,
  iy: 0xfd
}

const MemoryMethods = [ 'read8', 'read16', 'write8', 'write16' ]

// Z80 constructor
const Z80 = function(memory) {
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

  // Creating registers
  this.r1 = {}
  this.r2 = {}

  let bf1 = new ArrayBuffer(14)
  let bf2 = new ArrayBuffer(14)
  this.b1 = new Uint8Array(bf1)
  this.w1 = new Uint16Array(bf1)
  this.b2 = new Uint8Array(bf2)
  this.w2 = new Uint16Array(bf3)
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
  this._defineWordRegister('sp', 6)
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

// Creating opcode tables
Z80.prototype.opcodeTable = new Array(256)
Z80.prototype.opcodeTableCB = new Array(256)
Z80.prototype.opcodeTableED = new Array(256)
Z80.prototype.opcodeTableFD = new Array(256)
Z80.prototype.opcodeTableDD = new Array(256)
Z80.prototype.opcodeTableDDCB = new Array(256)
Z80.prototype.opcodeTableFDCB = new Array(256)

// Creating cross-table links
Z80.prototype.opcodeTable[0xcb] = Z80.prototype.opcodeTableCB
Z80.prototype.opcodeTable[0xed] = Z80.prototype.opcodeTableED
Z80.prototype.opcodeTable[0xfd] = Z80.prototype.opcodeTableFD
Z80.prototype.opcodeTable[0xdd] = Z80.prototype.opcodeTableDD
Z80.prototype.opcodeTableDD[0xcb] = Z80.prototype.opcodeTableDDCB
Z80.prototype.opcodeTableFD[0xcb] = Z80.prototype.opcodeTableFDCB

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
      argLen: 0
    }
    for (let pref in Prefixes) {
      if (srcRegName === 'l' || srcRegName === 'h') {
        srcRegName = pref + srcRegName
      }
      if (dstRegName === 'l' || dstRegName === 'h') {
        dstRegName = pref + dstRegName
      }
      opFuncName = `ld_${dstRegName}_${srcRegName}`
      disasmString = `ld ${dstRegName}, ${srcRegName}`
      let table = pref === 'ix' ? Z80.prototype.opcodeTableDD : Z80.prototype.opcodeTableFD
      table[opCode] = {
        funcName: opFuncName,
        tStates: 4,
        cycles: 1,
        dasm: disasmString,
        argLen: 0
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
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, tStates: 7, cycles: 2, dasm: disasmString, argLen: 1 }
}

// LD r, (HL)
for (let dst in RegisterMap) {
  let opCode = 0b01000110 | (dst << 3)
  let opFuncName = `ld_${RegisterMap[dst]}__hl_`
  let disasmString = `ld ${RegisterMap[dst]}, (hl)`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, tStates: 7, cycles: 2, dasm: disasmString, argLen: 0 }
}

// LD (HL), r
for (let src in RegisterMap) {
  let opCode = 0b01110000 | src
  let opFuncName = `ld__hl__${RegisterMap[src]}`
  let disasmString = `ld (hl), ${RegisterMap[src]}`
  Z80.prototype.opcodeTable[opCode] = { funcName: opFuncName, tStates: 7, cycles: 2, dasm: disasmString, argLen: 0 }
}

// LD (HL), n
Z80.prototype.opcodeTable[0b00110110] = {
  funcName: 'ld__hl__n',
  tStates: 10,
  cycles: 3,
  dasm: 'ld (hl), {0}',
  argLen: 1
}

// LD A, (BC)
Z80.prototype.opcodeTable[0b00001010] = { funcName: 'ld_a__bc_', tStates: 7, cycles: 2, dasm: 'ld a, (bc)', argLen: 0 }
// LD A, (DE)
Z80.prototype.opcodeTable[0b00011010] = { funcName: 'ld_a__de_', tStates: 7, cycles: 2, dasm: 'ld a, (de)', argLen: 0 }
// LD A, (nn)
Z80.prototype.opcodeTable[0b00111010] = {
  funcName: 'ld_a__nn_',
  tStates: 13,
  cycles: 4,
  dasm: 'ld a, ({0})',
  argLen: 2
}
// LD (BC), A
Z80.prototype.opcodeTable[0b00000010] = { funcName: 'ld__bc__a', tStates: 7, cycles: 2, dasm: 'ld (bc), a', argLen: 0 }
// LD (DE), A
Z80.prototype.opcodeTable[0b00010010] = { funcName: 'ld__de__a', tStates: 7, cycles: 2, dasm: 'ld (de), a', argLen: 0 }
// LD (nn), A
Z80.prototype.opcodeTable[0b00110010] = {
  funcName: 'ld__nn__a',
  tStates: 13,
  cycles: 4,
  dasm: 'ld ({0}), a',
  argLen: 2
}
// LD A, I
Z80.prototype.opcodeTableED[0b01010111] = { funcName: 'ld_a_i', tStates: 9, cycles: 2, dasm: 'ld a, i', argLen: 0 }
// LD A, R
Z80.prototype.opcodeTableED[0b01011111] = { funcName: 'ld_a_r', tStates: 9, cycles: 2, dasm: 'ld a, r', argLen: 0 }
// LD I, A
Z80.prototype.opcodeTableED[0b01000111] = { funcName: 'ld_i_a', tStates: 9, cycles: 2, dasm: 'ld i, a', argLen: 0 }
// LD R, A
Z80.prototype.opcodeTableED[0b01001111] = { funcName: 'ld_r_a', tStates: 9, cycles: 2, dasm: 'ld r, a', argLen: 0 }

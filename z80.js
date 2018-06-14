const RegisterMap = {
	0b111: 'a',
	0b000: 'b',
	0b001: 'c',
	0b010: 'd',
	0b011: 'e',
	0b100: 'h',
	0b101: 'l'
}

// Z80 constructor
const Z80 = function() {
	if (!(this instanceof Z80)) {
		throw 'Z80 is a constructor, use "new" keyword'
	}
}

// creating opcode tables
Z80.prototype.opcodeTable = new Array(256)
Z80.prototype.opcodeTableCB = new Array(256)
Z80.prototype.opcodeTableED = new Array(256)
Z80.prototype.opcodeTableFD = new Array(256)
Z80.prototype.opcodeTableDD = new Array(256)
Z80.prototype.opcodeTableDDCB = new Array(256)
Z80.prototype.opcodeTableFDCB = new Array(256)

// creating cross-table links
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
		let opFuncName = `ld_${RegisterMap[dst]}_${RegisterMap[src]}`
		let disasmString = `ld ${RegisterMap[dst]}, ${RegisterMap[src]}`
		Z80.prototype.opcodeTable[opCode] = {
			funcName: opFuncName,
			tStates: 4,
			cycles: 1,
			dasm: disasmString,
			argLen: 0
		}
	}
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

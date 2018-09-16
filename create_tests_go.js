const fs = require('fs')
const path = require('path')
const { hex16, hex8 } = require('./src/utils')
const tests = {}

function readRegs(regs, regs2) {
  regs = regs.split(/\s+/)
  regs = {
    af: parseInt(regs[0], 16),
    bc: parseInt(regs[1], 16),
    de: parseInt(regs[2], 16),
    hl: parseInt(regs[3], 16),
    af2: parseInt(regs[4], 16),
    bc2: parseInt(regs[5], 16),
    de2: parseInt(regs[6], 16),
    hl2: parseInt(regs[7], 16),
    ix: parseInt(regs[8], 16),
    iy: parseInt(regs[9], 16),
    sp: parseInt(regs[10], 16),
    pc: parseInt(regs[11], 16)
  }
  regs2 = regs2.split(/\s+/)
  regs['i'] = parseInt(regs2[0], 16)
  regs['r'] = parseInt(regs2[1], 16)
  regs['iff1'] = parseInt(regs2[2], 16)
  regs['iff2'] = parseInt(regs2[3], 16)
  regs['im'] = parseInt(regs2[4], 16)
  regs['halted'] = regs2[5] === '1'
  regs['tStates'] = parseInt(regs2[6])
  return regs
}

function readMem(input) {
  let dump = input.split(/\s+/)
  return {
    start: parseInt(dump[0], 16),
    data: dump.slice(1, dump.length - 1).filter(item => item != "-1").map(item => parseInt(item, 16))
  }
}

function prepareTestsInput(input) {
  let i = 0
  while (i < input.length) {
    if (input[i].trim() === '') {
      i++
      continue
    }
    let desc = input[i++]
    let regs = readRegs(input[i++], input[i++])
    let mem = []
    while (input[i].trim() !== '-1') {
      mem.push(readMem(input[i++]))
    }
    i++

    tests[desc] = {
      regs: regs,
      mem: mem
    }
  }
}

function prepareTestsOutput(expected) {
  let i = 0
  while (i < expected.length) {
    if (expected[i].trim() === '') {
      i++
      continue
    }
    let desc = expected[i++]
    while (/^\s/.test(expected[i])) {
      i++
    }
    let regs = readRegs(expected[i++], expected[i++])
    let mem = []
    while (expected[i].trim() !== '') {
      mem.push(readMem(expected[i++]))
    }
    tests[desc]['output'] = {
      regs: regs,
      mem: mem
    }
  }
}

let input = fs.readFileSync(path.resolve(__dirname, 'tests.in'))
input = input.toString().split('\n')
prepareTestsInput(input)

let expected = fs.readFileSync(path.resolve(__dirname, 'tests.expected'))
expected = expected.toString().split('\n')
prepareTestsOutput(expected)

let testRenders = {
  main: [],
  cb: [],
  ed: [],
  dd: [],
  fd: [],
  ddcb: [],
  fdcb: []
}
let testLines

for (let desc in tests) {
  if (desc.startsWith('ddcb')) {
    testLines = testRenders['ddcb']
  } else if (desc.startsWith('fdcb')) {
    testLines = testRenders['fdcb']
  } else if (desc.startsWith('fd')) {
    testLines = testRenders['fd']
  } else if (desc.startsWith('dd')) {
    testLines = testRenders['dd']
  } else if (desc.startsWith('ed')) {
    testLines = testRenders['ed']
  } else if (desc.startsWith('cb')) {
    testLines = testRenders['cb']
  } else {
    testLines = testRenders['main']
  }
  let funcName = 'Test' + desc.toUpperCase().trim()
  let data = tests[desc]
  testLines.push('')
  testLines.push(`func ${funcName}(t *testing.T) {`)
  testLines.push('  c.Reset()')
  testLines.push(`  *c.R1.AF = 0x${hex16(data.regs.af)}`)
  testLines.push(`  *c.R1.BC = 0x${hex16(data.regs.bc)}`)
  testLines.push(`  *c.R1.DE = 0x${hex16(data.regs.de)}`)
  testLines.push(`  *c.R1.HL = 0x${hex16(data.regs.hl)}`)
  testLines.push(`  *c.R2.AF = 0x${hex16(data.regs.af2)}`)
  testLines.push(`  *c.R2.BC = 0x${hex16(data.regs.bc2)}`)
  testLines.push(`  *c.R2.DE = 0x${hex16(data.regs.de2)}`)
  testLines.push(`  *c.R2.HL = 0x${hex16(data.regs.hl2)}`)
  testLines.push(`  *c.R1.IX = 0x${hex16(data.regs.ix)}`)
  testLines.push(`  *c.R1.IY = 0x${hex16(data.regs.iy)}`)
  testLines.push(`  *c.R1.SP = 0x${hex16(data.regs.sp)}`)
  testLines.push(`  c.PC = 0x${hex16(data.regs.pc)}`)
  testLines.push(`  c.I = 0x${hex8(data.regs.i)}`)
  testLines.push(`  c.R = 0x${hex8(data.regs.r)}`)
  data.mem.forEach(memItem => {
    let i = memItem.start
    memItem.data.forEach(byte => {
      testLines.push(`  mem[0x${hex16(i++)}] = 0x${hex8(byte)}`)
    })
  })
  testLines.push(`  for c.TStates < ${data.output.regs.tStates} {
      c.Execute();
  }`)
  testLines.push(`  if (*c.R1.AF != 0x${hex16(data.output.regs.af)}) {`)
  testLines.push(`    t.Errorf("AF mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.af)}, *c.R1.AF)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R1.BC != 0x${hex16(data.output.regs.bc)}) {`)
  testLines.push(`    t.Errorf("BC mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.bc)}, *c.R1.BC)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R1.DE != 0x${hex16(data.output.regs.de)}) {`)
  testLines.push(`    t.Errorf("DE mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.de)}, *c.R1.DE)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R1.HL != 0x${hex16(data.output.regs.hl)}) {`)
  testLines.push(`    t.Errorf("HL mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.hl)}, *c.R1.HL)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R2.AF != 0x${hex16(data.output.regs.af2)}) {`)
  testLines.push(`    t.Errorf("AF' mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.af2)}, *c.R2.AF)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R2.BC != 0x${hex16(data.output.regs.bc2)}) {`)
  testLines.push(`    t.Errorf("BC' mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.bc2)}, *c.R2.BC)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R2.DE != 0x${hex16(data.output.regs.de2)}) {`)
  testLines.push(`    t.Errorf("DE' mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.de2)}, *c.R2.DE)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R2.HL != 0x${hex16(data.output.regs.hl2)}) {`)
  testLines.push(`    t.Errorf("HL' mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.hl2)}, *c.R2.HL)`)
  testLines.push('  }')

  testLines.push(`  if (*c.R1.IX != 0x${hex16(data.output.regs.ix)}) {`)
  testLines.push(`    t.Errorf("IX mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.ix)}, *c.R1.IX)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R1.IY != 0x${hex16(data.output.regs.iy)}) {`)
  testLines.push(`    t.Errorf("IY mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.iy)}, *c.R1.IY)`)
  testLines.push('  }')
  testLines.push(`  if (*c.R1.SP != 0x${hex16(data.output.regs.sp)}) {`)
  testLines.push(`    t.Errorf("SP mismatch: %04X expected, got %04X", 0x${hex16(data.output.regs.sp)}, *c.R1.SP)`)
  testLines.push('  }')

  testLines.push(`  if (c.R != 0x${hex8(data.output.regs.r)}) {`)
  testLines.push(`    t.Errorf("R mismatch: %02X expected, got %02X", 0x${hex8(data.output.regs.r)}, c.R)`)
  testLines.push('  }')
  testLines.push(`  if (c.I != 0x${hex8(data.output.regs.i)}) {`)
  testLines.push(`    t.Errorf("I mismatch: %02X expected, got %02X", 0x${hex8(data.output.regs.i)}, c.I)`)
  testLines.push('  }')
  testLines.push(`  if (c.TStates != ${data.output.regs.tStates}) {`)
  testLines.push(`    t.Errorf("TStates mismatch: %d expected, got %d", ${data.output.regs.tStates}, c.TStates)`)
  testLines.push('  }')

  testLines.push('}')
}

for (let key in testRenders) {
  let fileName = path.resolve(__dirname, `GoUnitTests/z80_${key}_test.go`)
  let lines = ['package z80', '', 'import "testing"', '']
  if (key == 'main') {
    lines.push('var (', '  c *Context', '  mem []byte', ')', '')
    lines.push('func TestMain(m *testing.M) {')
    lines.push('  mem = make([]byte, 65536)')
    lines.push('  c = NewContext(false)')
    lines.push('  c.MemoryRead = func(address uint16) byte { return mem[address] }')
    lines.push('  c.MemoryWrite = func(address uint16, value byte) { mem[address] = value }')
    lines.push('  c.IoRead = func(address uint16) byte { return byte(address >> 8) }')
    lines.push('  c.IoWrite = func(address uint16, value byte) {}')
    lines.push('  m.Run()')
    lines.push('}')
    lines.push('')
  }
  lines = lines.concat(testRenders[key])
  fs.writeFileSync(fileName, lines.join('\n'))
}

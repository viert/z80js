const fs = require('fs')
const path = require('path')
const { hex16, hex8 } = require('./src/utils')
const tests = {}

function readRegs (regs, regs2) {
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

function readMem (input) {
  let dump = input.split(/\s+/)
  return {
    start: parseInt(dump[0], 16),
    data: dump.slice(1, dump.length - 1).map(item => parseInt(item, 16))
  }
}

function prepareTestsInput (input) {
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

function prepareTestsOutput (expected) {
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
  CpuTestMain: [],
  CpuTestCB: [],
  CpuTestED: [],
  CpuTestDD: [],
  CpuTestFD: [],
  CpuTestDDCB: [],
  CpuTestFDCB: []
}
let testLines

for (let desc in tests) {
  if (desc.startsWith('ddcb')) {
    testLines = testRenders['CpuTestDDCB']
  } else if (desc.startsWith('fdcb')) {
    testLines = testRenders['CpuTestFDCB']
  } else if (desc.startsWith('fd')) {
    testLines = testRenders['CpuTestFD']
  } else if (desc.startsWith('dd')) {
    testLines = testRenders['CpuTestDD']
  } else if (desc.startsWith('ed')) {
    testLines = testRenders['CpuTestED']
  } else if (desc.startsWith('cb')) {
    testLines = testRenders['CpuTestCB']
  } else {
    testLines = testRenders['CpuTestMain']
  }
  let className = 'Test' + desc.toUpperCase()
  let data = tests[desc]
  testLines.push('')
  testLines.push('        [TestMethod]')
  testLines.push(`        public void ${className}() {`)
  testLines.push('            cpu.Reset();')
  testLines.push(`            cpu.r1.af = 0x${hex16(data.regs.af)};`)
  testLines.push(`            cpu.r1.bc = 0x${hex16(data.regs.bc)};`)
  testLines.push(`            cpu.r1.de = 0x${hex16(data.regs.de)};`)
  testLines.push(`            cpu.r1.hl = 0x${hex16(data.regs.hl)};`)
  testLines.push(`            cpu.r2.af = 0x${hex16(data.regs.af2)};`)
  testLines.push(`            cpu.r2.bc = 0x${hex16(data.regs.bc2)};`)
  testLines.push(`            cpu.r2.de = 0x${hex16(data.regs.de2)};`)
  testLines.push(`            cpu.r2.hl = 0x${hex16(data.regs.hl2)};`)
  testLines.push(`            cpu.r1.ix = 0x${hex16(data.regs.ix)};`)
  testLines.push(`            cpu.r1.iy = 0x${hex16(data.regs.iy)};`)
  testLines.push(`            cpu.sp = 0x${hex16(data.regs.sp)};`)
  testLines.push(`            cpu.pc = 0x${hex16(data.regs.pc)};`)
  testLines.push(`            cpu.i = 0x${hex8(data.regs.i)};`)
  testLines.push(`            cpu.r = 0x${hex8(data.regs.r)};`)
  data.mem.forEach(memItem => {
    let i = memItem.start
    memItem.data.forEach(byte => {
      testLines.push(`            memory.Write8(0x${hex16(i++)}, 0x${hex8(byte)});`)
    })
  })
  testLines.push(`
            while (cpu.tStates < ${data.output.regs.tStates}) {
                cpu.Execute();
            }
  `)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.af)}, cpu.r1.af, "AF mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.bc)}, cpu.r1.bc, "BC mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.de)}, cpu.r1.de, "DE mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.hl)}, cpu.r1.hl, "HL mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.af2)}, cpu.r2.af, "AF' mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.bc2)}, cpu.r2.bc, "BC' mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.de2)}, cpu.r2.de, "DE' mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.hl2)}, cpu.r2.hl, "HL' mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.ix)}, cpu.r1.ix, "IX mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.iy)}, cpu.r1.iy, "IY mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.sp)}, cpu.sp, "SP mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.r)}, cpu.r, "R mismatch");`)
  testLines.push(`            Assert.AreEqual(0x${hex16(data.output.regs.i)}, cpu.i, "I mismatch");`)
  testLines.push(`            Assert.AreEqual(${data.output.regs.tStates}UL, cpu.tStates, "tStates mismatch");`)
  testLines.push('        }')
}

for (let key in testRenders) {
  let fileName = path.resolve(__dirname, `MsUnitTests/${key}.cs`)
  let lines = [ 'using Microsoft.VisualStudio.TestTools.UnitTesting;', 'using Z80;', '' ]
  lines.push('namespace z80ilTest')
  lines.push('{')
  lines.push('    [TestClass]')
  lines.push(`    public class ${key}`)
  lines.push('    {')
  lines.push('        readonly Cpu cpu;')
  lines.push('        SimpleMemory memory;')
  lines.push('        FakePort port;')
  lines.push('')
  lines.push(`        public ${key}() {`)
  lines.push('            memory = new SimpleMemory();')
  lines.push('            port = new FakePort();')
  lines.push('            cpu = new Cpu(memory, port);')
  lines.push('        }')
  lines = lines.concat(testRenders[key])
  lines.push('    }')
  lines.push('}')

  fs.writeFileSync(fileName, lines.join('\n'))
}

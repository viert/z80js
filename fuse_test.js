const fs = require('fs')
const path = require('path')
const Z80 = require('./z80')
const tests = {}

class Memory {
  constructor() {
    let buf = new ArrayBuffer(65536)
    this.data = new Uint8Array(buf)
  }

  read8(addr) {
    if (addr > 65535) {
      addr = addr % 65536
    }
    return this.data[addr]
  }
  read16(addr) {
    return this.read8(addr) + (this.read8(addr + 1) << 8)
  }

  write8(addr, val) {
    if (addr > 65535) {
      addr = addr % 65536
    }
    this.data[addr] = val
  }

  write16(addr, val) {
    let high = (val & 0xff00) >> 8
    let low = val & 0xff
    this.write8(addr, low)
    this.write8(addr + 1, high)
  }
}

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
    data: dump.slice(1, dump.length - 1).map((item) => parseInt(item, 16))
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

for (let desc in tests) {
  test('Test ' + desc, () => {
    let test = tests[desc]
    let mem = new Memory()
    let cpu = new Z80(mem)
    cpu.r1.af = test.regs.af
    cpu.r1.bc = test.regs.bc
    cpu.r1.de = test.regs.de
    cpu.r1.hl = test.regs.hl
    cpu.r2.af = test.regs.af2
    cpu.r2.bc = test.regs.bc2
    cpu.r2.de = test.regs.de2
    cpu.r2.hl = test.regs.hl2
    cpu.r1.ix = test.regs.ix
    cpu.r1.iy = test.regs.iy
    cpu.r1.sp = test.regs.sp
    cpu.i = test.regs.i
    cpu.r = test.regs.r
    cpu.pc = test.regs.pc
    test.mem.forEach((memItem) => {
      let i = memItem.start
      memItem.data.forEach((byte) => {
        mem.write8(i++, byte)
      })
    })
  })
}

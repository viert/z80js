const Memory = require('../src/memory')
const Z80 = require('../src/z80')

test('Test ed40', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x83f9
  cpu.r1.bc = 0x296b
  cpu.r1.de = 0x7034
  cpu.r1.hl = 0x1f2f
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x40)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x8329)
  expect(cpu.r1.bc).toEqual(0x296b)
  expect(cpu.r1.de).toEqual(0x7034)
  expect(cpu.r1.hl).toEqual(0x1f2f)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed41', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x29a2
  cpu.r1.bc = 0x0881
  cpu.r1.de = 0xd7dd
  cpu.r1.hl = 0xff4e
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x41)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x29a2)
  expect(cpu.r1.bc).toEqual(0x0881)
  expect(cpu.r1.de).toEqual(0xd7dd)
  expect(cpu.r1.hl).toEqual(0xff4e)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed42', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xcbd3
  cpu.r1.bc = 0x1c8f
  cpu.r1.de = 0xd456
  cpu.r1.hl = 0x315e
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x42)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xcb12)
  expect(cpu.r1.bc).toEqual(0x1c8f)
  expect(cpu.r1.de).toEqual(0xd456)
  expect(cpu.r1.hl).toEqual(0x14ce)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed43', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xda36
  cpu.r1.bc = 0x2732
  cpu.r1.de = 0x91cc
  cpu.r1.hl = 0x9798
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5f73
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x43)
  mem.write8(0x0002, 0xc6)
  mem.write8(0x0003, 0x54)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xda36)
  expect(cpu.r1.bc).toEqual(0x2732)
  expect(cpu.r1.de).toEqual(0x91cc)
  expect(cpu.r1.hl).toEqual(0x9798)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5f73)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed44', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xfe2b
  cpu.r1.bc = 0x040f
  cpu.r1.de = 0xdeb6
  cpu.r1.hl = 0xafc3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5ca8
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x44)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0213)
  expect(cpu.r1.bc).toEqual(0x040f)
  expect(cpu.r1.de).toEqual(0xdeb6)
  expect(cpu.r1.hl).toEqual(0xafc3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5ca8)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed45', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x001d
  cpu.r1.bc = 0x5b63
  cpu.r1.de = 0xa586
  cpu.r1.hl = 0x1451
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x3100
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x45)
  mem.write8(0x3100, 0x1f)
  mem.write8(0x3101, 0x22)

  while (cpu.pc !== 0x8735 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x001d)
  expect(cpu.r1.bc).toEqual(0x5b63)
  expect(cpu.r1.de).toEqual(0xa586)
  expect(cpu.r1.hl).toEqual(0x1451)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x3102)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed46', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xb6ec
  cpu.r1.bc = 0x8afb
  cpu.r1.de = 0xce09
  cpu.r1.hl = 0x70a1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x8dea
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x46)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xb6ec)
  expect(cpu.r1.bc).toEqual(0x8afb)
  expect(cpu.r1.de).toEqual(0xce09)
  expect(cpu.r1.hl).toEqual(0x70a1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x8dea)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed47', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9a99
  cpu.r1.bc = 0x9e5a
  cpu.r1.de = 0x9913
  cpu.r1.hl = 0xcacc
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x47)

  while (cpu.pc !== 0x2 && cpu.tStates < 9) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x9a99)
  expect(cpu.r1.bc).toEqual(0x9e5a)
  expect(cpu.r1.de).toEqual(0x9913)
  expect(cpu.r1.hl).toEqual(0xcacc)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x9a)
})

test('Test ed48', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xdbdd
  cpu.r1.bc = 0x7d1b
  cpu.r1.de = 0x141d
  cpu.r1.hl = 0x5fb4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x48)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xdb2d)
  expect(cpu.r1.bc).toEqual(0x7d7d)
  expect(cpu.r1.de).toEqual(0x141d)
  expect(cpu.r1.hl).toEqual(0x5fb4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed49', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x07a5
  cpu.r1.bc = 0x59ec
  cpu.r1.de = 0xf459
  cpu.r1.hl = 0x4316
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x49)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x07a5)
  expect(cpu.r1.bc).toEqual(0x59ec)
  expect(cpu.r1.de).toEqual(0xf459)
  expect(cpu.r1.hl).toEqual(0x4316)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed4a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5741
  cpu.r1.bc = 0x24b5
  cpu.r1.de = 0x83d2
  cpu.r1.hl = 0x9ac8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x4a)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x57a8)
  expect(cpu.r1.bc).toEqual(0x24b5)
  expect(cpu.r1.de).toEqual(0x83d2)
  expect(cpu.r1.hl).toEqual(0xbf7e)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed4b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x650c
  cpu.r1.bc = 0xd74d
  cpu.r1.de = 0x0448
  cpu.r1.hl = 0xa3b9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xb554
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x4b)
  mem.write8(0x0002, 0x1a)
  mem.write8(0x0003, 0xa4)
  mem.write8(0xa41a, 0xf3)
  mem.write8(0xa41b, 0xd4)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x650c)
  expect(cpu.r1.bc).toEqual(0xd4f3)
  expect(cpu.r1.de).toEqual(0x0448)
  expect(cpu.r1.hl).toEqual(0xa3b9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xb554)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed4c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5682
  cpu.r1.bc = 0x7dde
  cpu.r1.de = 0xb049
  cpu.r1.hl = 0x939d
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xc7bb
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x4c)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xaabb)
  expect(cpu.r1.bc).toEqual(0x7dde)
  expect(cpu.r1.de).toEqual(0xb049)
  expect(cpu.r1.hl).toEqual(0x939d)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xc7bb)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed4d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1bed
  cpu.r1.bc = 0xc358
  cpu.r1.de = 0x5fd5
  cpu.r1.hl = 0x6093
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x680e
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x4d)
  mem.write8(0x680e, 0x03)
  mem.write8(0x680f, 0x7c)

  while (cpu.pc !== 0x31747 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x1bed)
  expect(cpu.r1.bc).toEqual(0xc358)
  expect(cpu.r1.de).toEqual(0x5fd5)
  expect(cpu.r1.hl).toEqual(0x6093)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x6810)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed4e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8e01
  cpu.r1.bc = 0xe7c6
  cpu.r1.de = 0x880f
  cpu.r1.hl = 0xd2a2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x85da
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x4e)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x8e01)
  expect(cpu.r1.bc).toEqual(0xe7c6)
  expect(cpu.r1.de).toEqual(0x880f)
  expect(cpu.r1.hl).toEqual(0xd2a2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x85da)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed4f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2ae3
  cpu.r1.bc = 0xc115
  cpu.r1.de = 0xeff8
  cpu.r1.hl = 0x9f6d
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x4f)

  while (cpu.pc !== 0x2 && cpu.tStates < 9) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x2ae3)
  expect(cpu.r1.bc).toEqual(0xc115)
  expect(cpu.r1.de).toEqual(0xeff8)
  expect(cpu.r1.hl).toEqual(0x9f6d)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x2a)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed50', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x85ae
  cpu.r1.bc = 0xbbcc
  cpu.r1.de = 0xe2a8
  cpu.r1.hl = 0xf219
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x50)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x85ac)
  expect(cpu.r1.bc).toEqual(0xbbcc)
  expect(cpu.r1.de).toEqual(0xbba8)
  expect(cpu.r1.hl).toEqual(0xf219)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed51', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2c4c
  cpu.r1.bc = 0xc0a4
  cpu.r1.de = 0x5303
  cpu.r1.hl = 0xbc25
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x51)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x2c4c)
  expect(cpu.r1.bc).toEqual(0xc0a4)
  expect(cpu.r1.de).toEqual(0x5303)
  expect(cpu.r1.hl).toEqual(0xbc25)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed52', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xfc57
  cpu.r1.bc = 0x1fc8
  cpu.r1.de = 0x47b6
  cpu.r1.hl = 0xda7c
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x52)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xfc82)
  expect(cpu.r1.bc).toEqual(0x1fc8)
  expect(cpu.r1.de).toEqual(0x47b6)
  expect(cpu.r1.hl).toEqual(0x92c5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed53', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1f88
  cpu.r1.bc = 0x4692
  cpu.r1.de = 0x5cb2
  cpu.r1.hl = 0x4915
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x7d8c
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x53)
  mem.write8(0x0002, 0xff)
  mem.write8(0x0003, 0x21)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x1f88)
  expect(cpu.r1.bc).toEqual(0x4692)
  expect(cpu.r1.de).toEqual(0x5cb2)
  expect(cpu.r1.hl).toEqual(0x4915)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x7d8c)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed54', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xadf9
  cpu.r1.bc = 0x5661
  cpu.r1.de = 0x547c
  cpu.r1.hl = 0xc322
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xd9eb
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x54)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x5313)
  expect(cpu.r1.bc).toEqual(0x5661)
  expect(cpu.r1.de).toEqual(0x547c)
  expect(cpu.r1.hl).toEqual(0xc322)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xd9eb)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed55', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xb05b
  cpu.r1.bc = 0x5e84
  cpu.r1.de = 0xd6e9
  cpu.r1.hl = 0xcb3e
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xd4b4
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x55)
  mem.write8(0xd4b4, 0xea)
  mem.write8(0xd4b5, 0xc9)

  while (cpu.pc !== 0x51690 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xb05b)
  expect(cpu.r1.bc).toEqual(0x5e84)
  expect(cpu.r1.de).toEqual(0xd6e9)
  expect(cpu.r1.hl).toEqual(0xcb3e)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xd4b6)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed56', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5cc0
  cpu.r1.bc = 0x9100
  cpu.r1.de = 0x356b
  cpu.r1.hl = 0x4bfd
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x2c93
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x56)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x5cc0)
  expect(cpu.r1.bc).toEqual(0x9100)
  expect(cpu.r1.de).toEqual(0x356b)
  expect(cpu.r1.hl).toEqual(0x4bfd)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x2c93)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed57', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xbcfe
  cpu.r1.bc = 0xdfc7
  cpu.r1.de = 0xa621
  cpu.r1.hl = 0x1022
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x1e
  cpu.r = 0x17
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x57)

  while (cpu.pc !== 0x2 && cpu.tStates < 9) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x1e08)
  expect(cpu.r1.bc).toEqual(0xdfc7)
  expect(cpu.r1.de).toEqual(0xa621)
  expect(cpu.r1.hl).toEqual(0x1022)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x19)
  expect(cpu.i).toEqual(0x1e)
})

test('Test ed58', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xc9ee
  cpu.r1.bc = 0x4091
  cpu.r1.de = 0x9e46
  cpu.r1.hl = 0x873a
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x58)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xc900)
  expect(cpu.r1.bc).toEqual(0x4091)
  expect(cpu.r1.de).toEqual(0x9e40)
  expect(cpu.r1.hl).toEqual(0x873a)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed59', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x388a
  cpu.r1.bc = 0xd512
  cpu.r1.de = 0xecc5
  cpu.r1.hl = 0x93af
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x59)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x388a)
  expect(cpu.r1.bc).toEqual(0xd512)
  expect(cpu.r1.de).toEqual(0xecc5)
  expect(cpu.r1.hl).toEqual(0x93af)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed5a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xa41f
  cpu.r1.bc = 0x751c
  cpu.r1.de = 0x19ce
  cpu.r1.hl = 0x0493
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x5a)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xa408)
  expect(cpu.r1.bc).toEqual(0x751c)
  expect(cpu.r1.de).toEqual(0x19ce)
  expect(cpu.r1.hl).toEqual(0x1e62)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed5b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5df1
  cpu.r1.bc = 0x982e
  cpu.r1.de = 0x002f
  cpu.r1.hl = 0xadb9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xf398
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x5b)
  mem.write8(0x0002, 0x04)
  mem.write8(0x0003, 0x9f)
  mem.write8(0x9f04, 0x84)
  mem.write8(0x9f05, 0x4d)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x5df1)
  expect(cpu.r1.bc).toEqual(0x982e)
  expect(cpu.r1.de).toEqual(0x4d84)
  expect(cpu.r1.hl).toEqual(0xadb9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xf398)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed5c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x11c3
  cpu.r1.bc = 0xb86c
  cpu.r1.de = 0x2042
  cpu.r1.hl = 0xc958
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x93dc
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x5c)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xefbb)
  expect(cpu.r1.bc).toEqual(0xb86c)
  expect(cpu.r1.de).toEqual(0x2042)
  expect(cpu.r1.hl).toEqual(0xc958)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x93dc)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed5d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1152
  cpu.r1.bc = 0x1d20
  cpu.r1.de = 0x3f86
  cpu.r1.hl = 0x64fc
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5308
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x5d)
  mem.write8(0x5308, 0x26)
  mem.write8(0x5309, 0xe0)

  while (cpu.pc !== 0x57382 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x1152)
  expect(cpu.r1.bc).toEqual(0x1d20)
  expect(cpu.r1.de).toEqual(0x3f86)
  expect(cpu.r1.hl).toEqual(0x64fc)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x530a)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed5e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x611a
  cpu.r1.bc = 0xc8cf
  cpu.r1.de = 0xf215
  cpu.r1.hl = 0xd92b
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x4d86
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x5e)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x611a)
  expect(cpu.r1.bc).toEqual(0xc8cf)
  expect(cpu.r1.de).toEqual(0xf215)
  expect(cpu.r1.hl).toEqual(0xd92b)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x4d86)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed5f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1bb5
  cpu.r1.bc = 0xfc09
  cpu.r1.de = 0x2dfa
  cpu.r1.hl = 0xbab9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0xd7
  cpu.r = 0xf3
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x5f)

  while (cpu.pc !== 0x2 && cpu.tStates < 9) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xf5a1)
  expect(cpu.r1.bc).toEqual(0xfc09)
  expect(cpu.r1.de).toEqual(0x2dfa)
  expect(cpu.r1.hl).toEqual(0xbab9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0xf5)
  expect(cpu.i).toEqual(0xd7)
})

test('Test ed60', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2c9c
  cpu.r1.bc = 0x0dae
  cpu.r1.de = 0x621e
  cpu.r1.hl = 0x2f66
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x60)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x2c08)
  expect(cpu.r1.bc).toEqual(0x0dae)
  expect(cpu.r1.de).toEqual(0x621e)
  expect(cpu.r1.hl).toEqual(0x0d66)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed61', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xffa8
  cpu.r1.bc = 0x90ca
  cpu.r1.de = 0x0340
  cpu.r1.hl = 0xd847
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x61)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xffa8)
  expect(cpu.r1.bc).toEqual(0x90ca)
  expect(cpu.r1.de).toEqual(0x0340)
  expect(cpu.r1.hl).toEqual(0xd847)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed62', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xa60b
  cpu.r1.bc = 0xd9aa
  cpu.r1.de = 0x6623
  cpu.r1.hl = 0x0b1a
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x62)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xa6bb)
  expect(cpu.r1.bc).toEqual(0xd9aa)
  expect(cpu.r1.de).toEqual(0x6623)
  expect(cpu.r1.hl).toEqual(0xffff)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed63', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5222
  cpu.r1.bc = 0x88f9
  cpu.r1.de = 0x9d9a
  cpu.r1.hl = 0xe4d3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xa2f0
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x63)
  mem.write8(0x0002, 0x67)
  mem.write8(0x0003, 0x65)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x5222)
  expect(cpu.r1.bc).toEqual(0x88f9)
  expect(cpu.r1.de).toEqual(0x9d9a)
  expect(cpu.r1.hl).toEqual(0xe4d3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xa2f0)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed64', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2127
  cpu.r1.bc = 0xe425
  cpu.r1.de = 0x66ac
  cpu.r1.hl = 0xb2a3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43f2
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x64)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xdf9b)
  expect(cpu.r1.bc).toEqual(0xe425)
  expect(cpu.r1.de).toEqual(0x66ac)
  expect(cpu.r1.hl).toEqual(0xb2a3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43f2)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed65', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x63d2
  cpu.r1.bc = 0x1fa1
  cpu.r1.de = 0x0788
  cpu.r1.hl = 0x881c
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xf207
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x65)
  mem.write8(0xf207, 0xeb)
  mem.write8(0xf208, 0x0e)

  while (cpu.pc !== 0x3819 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x63d2)
  expect(cpu.r1.bc).toEqual(0x1fa1)
  expect(cpu.r1.de).toEqual(0x0788)
  expect(cpu.r1.hl).toEqual(0x881c)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xf209)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed66', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4088
  cpu.r1.bc = 0xa7e1
  cpu.r1.de = 0x3ffd
  cpu.r1.hl = 0x919b
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xd193
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x66)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x4088)
  expect(cpu.r1.bc).toEqual(0xa7e1)
  expect(cpu.r1.de).toEqual(0x3ffd)
  expect(cpu.r1.hl).toEqual(0x919b)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xd193)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed67', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3624
  cpu.r1.bc = 0xb16a
  cpu.r1.de = 0xa4db
  cpu.r1.hl = 0xb9de
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x67)
  mem.write8(0xb9de, 0x93)

  while (cpu.pc !== 0x2 && cpu.tStates < 18) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x3324)
  expect(cpu.r1.bc).toEqual(0xb16a)
  expect(cpu.r1.de).toEqual(0xa4db)
  expect(cpu.r1.hl).toEqual(0xb9de)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed68', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5316
  cpu.r1.bc = 0x624b
  cpu.r1.de = 0x7311
  cpu.r1.hl = 0x3106
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x68)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x5320)
  expect(cpu.r1.bc).toEqual(0x624b)
  expect(cpu.r1.de).toEqual(0x7311)
  expect(cpu.r1.hl).toEqual(0x3162)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed69', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xabd8
  cpu.r1.bc = 0x8d2f
  cpu.r1.de = 0x89c7
  cpu.r1.hl = 0xc3d6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x69)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xabd8)
  expect(cpu.r1.bc).toEqual(0x8d2f)
  expect(cpu.r1.de).toEqual(0x89c7)
  expect(cpu.r1.hl).toEqual(0xc3d6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed6a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xbb5a
  cpu.r1.bc = 0x6fed
  cpu.r1.de = 0x59bb
  cpu.r1.hl = 0x4e40
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x6a)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xbb9c)
  expect(cpu.r1.bc).toEqual(0x6fed)
  expect(cpu.r1.de).toEqual(0x59bb)
  expect(cpu.r1.hl).toEqual(0x9c80)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed6b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9e35
  cpu.r1.bc = 0xd240
  cpu.r1.de = 0x1998
  cpu.r1.hl = 0xab19
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x9275
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x6b)
  mem.write8(0x0002, 0x98)
  mem.write8(0x0003, 0x61)
  mem.write8(0x6198, 0x3f)
  mem.write8(0x6199, 0xbe)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x9e35)
  expect(cpu.r1.bc).toEqual(0xd240)
  expect(cpu.r1.de).toEqual(0x1998)
  expect(cpu.r1.hl).toEqual(0xbe3f)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x9275)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed6c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0fb1
  cpu.r1.bc = 0x7d5b
  cpu.r1.de = 0xcadb
  cpu.r1.hl = 0x0893
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xd983
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x6c)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xf1b3)
  expect(cpu.r1.bc).toEqual(0x7d5b)
  expect(cpu.r1.de).toEqual(0xcadb)
  expect(cpu.r1.hl).toEqual(0x0893)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xd983)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed6d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3860
  cpu.r1.bc = 0x42da
  cpu.r1.de = 0x5935
  cpu.r1.hl = 0xdc10
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5cd3
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x6d)
  mem.write8(0x5cd3, 0xa9)
  mem.write8(0x5cd4, 0x73)

  while (cpu.pc !== 0x29609 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x3860)
  expect(cpu.r1.bc).toEqual(0x42da)
  expect(cpu.r1.de).toEqual(0x5935)
  expect(cpu.r1.hl).toEqual(0xdc10)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5cd5)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed6e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7752
  cpu.r1.bc = 0xbec3
  cpu.r1.de = 0x0457
  cpu.r1.hl = 0x8c95
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xa787
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x6e)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x7752)
  expect(cpu.r1.bc).toEqual(0xbec3)
  expect(cpu.r1.de).toEqual(0x0457)
  expect(cpu.r1.hl).toEqual(0x8c95)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xa787)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed6f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x658b
  cpu.r1.bc = 0x7a7a
  cpu.r1.de = 0xecf0
  cpu.r1.hl = 0x403c
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x6f)
  mem.write8(0x403c, 0xc4)

  while (cpu.pc !== 0x2 && cpu.tStates < 18) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x6c2d)
  expect(cpu.r1.bc).toEqual(0x7a7a)
  expect(cpu.r1.de).toEqual(0xecf0)
  expect(cpu.r1.hl).toEqual(0x403c)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed70', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xc6a1
  cpu.r1.bc = 0xf7d6
  cpu.r1.de = 0xa3cb
  cpu.r1.hl = 0x288d
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x70)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xc6a1)
  expect(cpu.r1.bc).toEqual(0xf7d6)
  expect(cpu.r1.de).toEqual(0xa3cb)
  expect(cpu.r1.hl).toEqual(0x288d)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed71', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xafa0
  cpu.r1.bc = 0x20b3
  cpu.r1.de = 0x7b33
  cpu.r1.hl = 0x4ac1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x71)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xafa0)
  expect(cpu.r1.bc).toEqual(0x20b3)
  expect(cpu.r1.de).toEqual(0x7b33)
  expect(cpu.r1.hl).toEqual(0x4ac1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed72', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5fd9
  cpu.r1.bc = 0x05cb
  cpu.r1.de = 0x0c6c
  cpu.r1.hl = 0xd18b
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x53db
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x72)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x5f3e)
  expect(cpu.r1.bc).toEqual(0x05cb)
  expect(cpu.r1.de).toEqual(0x0c6c)
  expect(cpu.r1.hl).toEqual(0x7daf)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x53db)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed73', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x41c4
  cpu.r1.bc = 0x763a
  cpu.r1.de = 0xecb0
  cpu.r1.hl = 0xee62
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xaed5
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x73)
  mem.write8(0x0002, 0x2a)
  mem.write8(0x0003, 0x79)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x41c4)
  expect(cpu.r1.bc).toEqual(0x763a)
  expect(cpu.r1.de).toEqual(0xecb0)
  expect(cpu.r1.hl).toEqual(0xee62)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xaed5)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed74', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4454
  cpu.r1.bc = 0xf2d2
  cpu.r1.de = 0x8340
  cpu.r1.hl = 0x7e76
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0323
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x74)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xbcbb)
  expect(cpu.r1.bc).toEqual(0xf2d2)
  expect(cpu.r1.de).toEqual(0x8340)
  expect(cpu.r1.hl).toEqual(0x7e76)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0323)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed75', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7ca4
  cpu.r1.bc = 0x1615
  cpu.r1.de = 0x5d2a
  cpu.r1.hl = 0xa95b
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x7d00
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x75)
  mem.write8(0x7d00, 0xfd)
  mem.write8(0x7d01, 0x4f)

  while (cpu.pc !== 0x20477 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x7ca4)
  expect(cpu.r1.bc).toEqual(0x1615)
  expect(cpu.r1.de).toEqual(0x5d2a)
  expect(cpu.r1.hl).toEqual(0xa95b)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x7d02)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed76', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xcabf
  cpu.r1.bc = 0xff9a
  cpu.r1.de = 0xb98c
  cpu.r1.hl = 0xa8e6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xfe8e
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x76)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xcabf)
  expect(cpu.r1.bc).toEqual(0xff9a)
  expect(cpu.r1.de).toEqual(0xb98c)
  expect(cpu.r1.hl).toEqual(0xa8e6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xfe8e)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed78', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x58dd
  cpu.r1.bc = 0xf206
  cpu.r1.de = 0x2d6a
  cpu.r1.hl = 0xaf16
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x78)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xf2a1)
  expect(cpu.r1.bc).toEqual(0xf206)
  expect(cpu.r1.de).toEqual(0x2d6a)
  expect(cpu.r1.hl).toEqual(0xaf16)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed79', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xe000
  cpu.r1.bc = 0x4243
  cpu.r1.de = 0x8f7f
  cpu.r1.hl = 0xed90
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x79)

  while (cpu.pc !== 0x2 && cpu.tStates < 12) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xe000)
  expect(cpu.r1.bc).toEqual(0x4243)
  expect(cpu.r1.de).toEqual(0x8f7f)
  expect(cpu.r1.hl).toEqual(0xed90)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed7a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x32fd
  cpu.r1.bc = 0xd819
  cpu.r1.de = 0xd873
  cpu.r1.hl = 0x8dcf
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5d22
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x7a)

  while (cpu.pc !== 0x2 && cpu.tStates < 15) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x32b8)
  expect(cpu.r1.bc).toEqual(0xd819)
  expect(cpu.r1.de).toEqual(0xd873)
  expect(cpu.r1.hl).toEqual(0xeaf2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5d22)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed7b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4f97
  cpu.r1.bc = 0x24b7
  cpu.r1.de = 0xe105
  cpu.r1.hl = 0x1bf2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5e17
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x7b)
  mem.write8(0x0002, 0x50)
  mem.write8(0x0003, 0x8c)
  mem.write8(0x8c50, 0xd8)
  mem.write8(0x8c51, 0x48)

  while (cpu.pc !== 0x4 && cpu.tStates < 20) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x4f97)
  expect(cpu.r1.bc).toEqual(0x24b7)
  expect(cpu.r1.de).toEqual(0xe105)
  expect(cpu.r1.hl).toEqual(0x1bf2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x48d8)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed7c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xd333
  cpu.r1.bc = 0x29ca
  cpu.r1.de = 0x9622
  cpu.r1.hl = 0xb452
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0be6
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x7c)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x2d3b)
  expect(cpu.r1.bc).toEqual(0x29ca)
  expect(cpu.r1.de).toEqual(0x9622)
  expect(cpu.r1.hl).toEqual(0xb452)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0be6)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed7d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xecb6
  cpu.r1.bc = 0x073e
  cpu.r1.de = 0xdc1e
  cpu.r1.hl = 0x38d9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x66f0
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x7d)
  mem.write8(0x66f0, 0x4f)
  mem.write8(0x66f1, 0xfb)

  while (cpu.pc !== 0x64335 && cpu.tStates < 14) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xecb6)
  expect(cpu.r1.bc).toEqual(0x073e)
  expect(cpu.r1.de).toEqual(0xdc1e)
  expect(cpu.r1.hl).toEqual(0x38d9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x66f2)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ed7e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xb246
  cpu.r1.bc = 0x1a1a
  cpu.r1.de = 0x933a
  cpu.r1.hl = 0x4b8b
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x2242
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0x7e)

  while (cpu.pc !== 0x2 && cpu.tStates < 8) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xb246)
  expect(cpu.r1.bc).toEqual(0x1a1a)
  expect(cpu.r1.de).toEqual(0x933a)
  expect(cpu.r1.hl).toEqual(0x4b8b)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x2242)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1bc9
  cpu.r1.bc = 0x3d11
  cpu.r1.de = 0x95c1
  cpu.r1.hl = 0xd097
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa0)
  mem.write8(0xd097, 0xb7)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x1be5)
  expect(cpu.r1.bc).toEqual(0x3d10)
  expect(cpu.r1.de).toEqual(0x95c2)
  expect(cpu.r1.hl).toEqual(0xd098)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xecdb
  cpu.r1.bc = 0x7666
  cpu.r1.de = 0x537f
  cpu.r1.hl = 0x3bc3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa1)
  mem.write8(0x3bc3, 0xb4)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xec0f)
  expect(cpu.r1.bc).toEqual(0x7665)
  expect(cpu.r1.de).toEqual(0x537f)
  expect(cpu.r1.hl).toEqual(0x3bc4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0121
  cpu.r1.bc = 0x9a82
  cpu.r1.de = 0x5bbd
  cpu.r1.hl = 0x2666
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa2)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x019f)
  expect(cpu.r1.bc).toEqual(0x9982)
  expect(cpu.r1.de).toEqual(0x5bbd)
  expect(cpu.r1.hl).toEqual(0x2667)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda2_01', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0200
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x8000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa2)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0100)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x8001)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda2_02', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x569a
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x8000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa2)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x559a)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x8001)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda2_03', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xabcc
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x8000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa2)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x00bf)
  expect(cpu.r1.bc).toEqual(0xaacc)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x8001)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x42c5
  cpu.r1.bc = 0x6334
  cpu.r1.de = 0x1e28
  cpu.r1.hl = 0x32fa
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x32fa, 0xb3)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x4233)
  expect(cpu.r1.bc).toEqual(0x6234)
  expect(cpu.r1.de).toEqual(0x1e28)
  expect(cpu.r1.hl).toEqual(0x32fb)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_01', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01ff
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01ff, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0044)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0200)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_02', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0100
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x0100, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0040)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0101)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_03', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0107
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x0107, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0044)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0108)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_04', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01ff
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01ff, 0x80)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0046)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0200)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_05', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01fd
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01fd, 0x12)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0055)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x01fe)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_06', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01fe
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01fe, 0x12)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0051)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x01ff)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_07', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0200
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01ff
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01ff, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0100)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0200)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_08', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0800
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01fe
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01fe, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0004)
  expect(cpu.r1.bc).toEqual(0x0700)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x01ff)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_09', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x8100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01ff
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01ff, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0080)
  expect(cpu.r1.bc).toEqual(0x8000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0200)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_10', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x8200
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01ff
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01ff, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0084)
  expect(cpu.r1.bc).toEqual(0x8100)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0200)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda3_11', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xa900
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01ff
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa3)
  mem.write8(0x01ff, 0x00)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x00a8)
  expect(cpu.r1.bc).toEqual(0xa800)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0200)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2a8e
  cpu.r1.bc = 0x1607
  cpu.r1.de = 0x5938
  cpu.r1.hl = 0x12e8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa8)
  mem.write8(0x12e8, 0xd8)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x2aa4)
  expect(cpu.r1.bc).toEqual(0x1606)
  expect(cpu.r1.de).toEqual(0x5937)
  expect(cpu.r1.hl).toEqual(0x12e7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test eda9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1495
  cpu.r1.bc = 0xfb42
  cpu.r1.de = 0x0466
  cpu.r1.hl = 0x0dbe
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xa9)
  mem.write8(0x0dbe, 0x89)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x14bf)
  expect(cpu.r1.bc).toEqual(0xfb41)
  expect(cpu.r1.de).toEqual(0x0466)
  expect(cpu.r1.hl).toEqual(0x0dbd)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edaa', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2042
  cpu.r1.bc = 0xd791
  cpu.r1.de = 0xa912
  cpu.r1.hl = 0xa533
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xaa)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x2097)
  expect(cpu.r1.bc).toEqual(0xd691)
  expect(cpu.r1.de).toEqual(0xa912)
  expect(cpu.r1.hl).toEqual(0xa532)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edaa_01', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0101
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x8000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xaa)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0040)
  expect(cpu.r1.bc).toEqual(0x0001)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7fff)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edaa_02', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x56aa
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x8000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xaa)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x55aa)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7fff)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edaa_03', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xabcc
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x8000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xaa)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x00bf)
  expect(cpu.r1.bc).toEqual(0xaacc)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7fff)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edab', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0037
  cpu.r1.bc = 0xf334
  cpu.r1.de = 0xd3e1
  cpu.r1.hl = 0x199f
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xab)
  mem.write8(0x199f, 0x49)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x00a4)
  expect(cpu.r1.bc).toEqual(0xf234)
  expect(cpu.r1.de).toEqual(0xd3e1)
  expect(cpu.r1.hl).toEqual(0x199e)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edab_01', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x5800
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x007a
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xab)
  mem.write8(0x007a, 0x7f)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x5700)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0079)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edab_02', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xab00
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x00f1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xab)
  mem.write8(0x00f1, 0xcd)

  while (cpu.pc !== 0x2 && cpu.tStates < 16) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x00bf)
  expect(cpu.r1.bc).toEqual(0xaa00)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x00f0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test edb0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1045
  cpu.r1.bc = 0x0010
  cpu.r1.de = 0xaad8
  cpu.r1.hl = 0x558e
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xb0)
  mem.write8(0x558e, 0x53)
  mem.write8(0x558f, 0x94)
  mem.write8(0x5590, 0x30)
  mem.write8(0x5591, 0x05)
  mem.write8(0x5592, 0x44)
  mem.write8(0x5593, 0x24)
  mem.write8(0x5594, 0x22)
  mem.write8(0x5595, 0xb9)
  mem.write8(0x5596, 0xe9)
  mem.write8(0x5597, 0x77)
  mem.write8(0x5598, 0x23)
  mem.write8(0x5599, 0x71)
  mem.write8(0x559a, 0xe2)
  mem.write8(0x559b, 0x5c)
  mem.write8(0x559c, 0xfb)
  mem.write8(0x559d, 0x49)

  while (cpu.pc !== 0x2 && cpu.tStates < 331) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x1049)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xaae8)
  expect(cpu.r1.hl).toEqual(0x559e)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x20)
  expect(cpu.i).toEqual(0x00)
})

test('Test edb1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xf4dd
  cpu.r1.bc = 0x0008
  cpu.r1.de = 0xe4e0
  cpu.r1.hl = 0x9825
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xb1)
  mem.write8(0x9825, 0x50)
  mem.write8(0x9826, 0xe5)
  mem.write8(0x9827, 0x41)
  mem.write8(0x9828, 0xf4)
  mem.write8(0x9829, 0x01)
  mem.write8(0x982a, 0x9f)
  mem.write8(0x982b, 0x11)
  mem.write8(0x982c, 0x85)

  while (cpu.pc !== 0x2 && cpu.tStates < 79) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xf447)
  expect(cpu.r1.bc).toEqual(0x0004)
  expect(cpu.r1.de).toEqual(0xe4e0)
  expect(cpu.r1.hl).toEqual(0x9829)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x08)
  expect(cpu.i).toEqual(0x00)
})

test('Test edb2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8a34
  cpu.r1.bc = 0x0a40
  cpu.r1.de = 0xd98c
  cpu.r1.hl = 0x37ce
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xb2)

  while (cpu.pc !== 0x2 && cpu.tStates < 205) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x8a40)
  expect(cpu.r1.bc).toEqual(0x0040)
  expect(cpu.r1.de).toEqual(0xd98c)
  expect(cpu.r1.hl).toEqual(0x37d8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x14)
  expect(cpu.i).toEqual(0x00)
})

test('Test edb3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x34ab
  cpu.r1.bc = 0x03e0
  cpu.r1.de = 0x41b9
  cpu.r1.hl = 0x1d7c
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xb3)
  mem.write8(0x1d7c, 0x9d)
  mem.write8(0x1d7d, 0x24)
  mem.write8(0x1d7e, 0xaa)

  while (cpu.pc !== 0x2 && cpu.tStates < 58) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x3453)
  expect(cpu.r1.bc).toEqual(0x00e0)
  expect(cpu.r1.de).toEqual(0x41b9)
  expect(cpu.r1.hl).toEqual(0x1d7f)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x06)
  expect(cpu.i).toEqual(0x00)
})

test('Test edb8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xe553
  cpu.r1.bc = 0x0008
  cpu.r1.de = 0x68e8
  cpu.r1.hl = 0x4dcf
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xb8)
  mem.write8(0x4dc8, 0x29)
  mem.write8(0x4dc9, 0x85)
  mem.write8(0x4dca, 0xa7)
  mem.write8(0x4dcb, 0xc3)
  mem.write8(0x4dcc, 0x55)
  mem.write8(0x4dcd, 0x74)
  mem.write8(0x4dce, 0x23)
  mem.write8(0x4dcf, 0x0a)

  while (cpu.pc !== 0x2 && cpu.tStates < 163) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xe569)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x68e0)
  expect(cpu.r1.hl).toEqual(0x4dc7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x10)
  expect(cpu.i).toEqual(0x00)
})

test('Test edb9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xffcd
  cpu.r1.bc = 0x0008
  cpu.r1.de = 0xa171
  cpu.r1.hl = 0xc749
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xb9)
  mem.write8(0xc742, 0xc6)
  mem.write8(0xc743, 0x09)
  mem.write8(0xc744, 0x85)
  mem.write8(0xc745, 0xec)
  mem.write8(0xc746, 0x5a)
  mem.write8(0xc747, 0x01)
  mem.write8(0xc748, 0x4e)
  mem.write8(0xc749, 0x6c)

  while (cpu.pc !== 0x2 && cpu.tStates < 163) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0xff0b)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xa171)
  expect(cpu.r1.hl).toEqual(0xc741)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x10)
  expect(cpu.i).toEqual(0x00)
})

test('Test edba', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2567
  cpu.r1.bc = 0x069f
  cpu.r1.de = 0xd40d
  cpu.r1.hl = 0x6b55
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xba)

  while (cpu.pc !== 0x2 && cpu.tStates < 121) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x2540)
  expect(cpu.r1.bc).toEqual(0x009f)
  expect(cpu.r1.de).toEqual(0xd40d)
  expect(cpu.r1.hl).toEqual(0x6b4f)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x0c)
  expect(cpu.i).toEqual(0x00)
})

test('Test edbb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x09c4
  cpu.r1.bc = 0x043b
  cpu.r1.de = 0xbe49
  cpu.r1.hl = 0x1dd0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xed)
  mem.write8(0x0001, 0xbb)
  mem.write8(0x1dcd, 0xf9)
  mem.write8(0x1dce, 0x71)
  mem.write8(0x1dcf, 0xc5)
  mem.write8(0x1dd0, 0xb6)

  while (cpu.pc !== 0x2 && cpu.tStates < 79) {
    cpu.execInstruction()
  }

  expect(cpu.r1.af).toEqual(0x0957)
  expect(cpu.r1.bc).toEqual(0x003b)
  expect(cpu.r1.de).toEqual(0xbe49)
  expect(cpu.r1.hl).toEqual(0x1dcc)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x08)
  expect(cpu.i).toEqual(0x00)
})

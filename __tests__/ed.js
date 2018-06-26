const Memory = require("../src/memory")
const Z80 = require("../src/z80")
const { FakePort } = require("../src/port")

test('Test ed40', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x83F9
  cpu.r1.bc = 0x296B
  cpu.r1.de = 0x7034
  cpu.r1.hl = 0x1F2F
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x40)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8329)
  expect(cpu.r1.bc).toEqual(0x296B)
  expect(cpu.r1.de).toEqual(0x7034)
  expect(cpu.r1.hl).toEqual(0x1F2F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed41', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x29A2
  cpu.r1.bc = 0x0881
  cpu.r1.de = 0xD7DD
  cpu.r1.hl = 0xFF4E
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x41)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x29A2)
  expect(cpu.r1.bc).toEqual(0x0881)
  expect(cpu.r1.de).toEqual(0xD7DD)
  expect(cpu.r1.hl).toEqual(0xFF4E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed42', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCBD3
  cpu.r1.bc = 0x1C8F
  cpu.r1.de = 0xD456
  cpu.r1.hl = 0x315E
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x42)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCB12)
  expect(cpu.r1.bc).toEqual(0x1C8F)
  expect(cpu.r1.de).toEqual(0xD456)
  expect(cpu.r1.hl).toEqual(0x14CE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed43', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDA36
  cpu.r1.bc = 0x2732
  cpu.r1.de = 0x91CC
  cpu.r1.hl = 0x9798
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5F73
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x43)
  mem.write8(0x0002, 0xC6)
  mem.write8(0x0003, 0x54)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDA36)
  expect(cpu.r1.bc).toEqual(0x2732)
  expect(cpu.r1.de).toEqual(0x91CC)
  expect(cpu.r1.hl).toEqual(0x9798)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5F73)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed44', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFE2B
  cpu.r1.bc = 0x040F
  cpu.r1.de = 0xDEB6
  cpu.r1.hl = 0xAFC3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5CA8
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x44)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0213)
  expect(cpu.r1.bc).toEqual(0x040F)
  expect(cpu.r1.de).toEqual(0xDEB6)
  expect(cpu.r1.hl).toEqual(0xAFC3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5CA8)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed45', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x001D
  cpu.r1.bc = 0x5B63
  cpu.r1.de = 0xA586
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x45)
  mem.write8(0x3100, 0x1F)
  mem.write8(0x3101, 0x22)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x001D)
  expect(cpu.r1.bc).toEqual(0x5B63)
  expect(cpu.r1.de).toEqual(0xA586)
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
  expect(cpu.tStates).toEqual(14)
})

test('Test ed46', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB6EC
  cpu.r1.bc = 0x8AFB
  cpu.r1.de = 0xCE09
  cpu.r1.hl = 0x70A1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x8DEA
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x46)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB6EC)
  expect(cpu.r1.bc).toEqual(0x8AFB)
  expect(cpu.r1.de).toEqual(0xCE09)
  expect(cpu.r1.hl).toEqual(0x70A1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x8DEA)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed47', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9A99
  cpu.r1.bc = 0x9E5A
  cpu.r1.de = 0x9913
  cpu.r1.hl = 0xCACC
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x47)

  while (cpu.tStates < 9) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9A99)
  expect(cpu.r1.bc).toEqual(0x9E5A)
  expect(cpu.r1.de).toEqual(0x9913)
  expect(cpu.r1.hl).toEqual(0xCACC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x9A)
  expect(cpu.tStates).toEqual(9)
})

test('Test ed48', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDBDD
  cpu.r1.bc = 0x7D1B
  cpu.r1.de = 0x141D
  cpu.r1.hl = 0x5FB4
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x48)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDB2D)
  expect(cpu.r1.bc).toEqual(0x7D7D)
  expect(cpu.r1.de).toEqual(0x141D)
  expect(cpu.r1.hl).toEqual(0x5FB4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed49', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x07A5
  cpu.r1.bc = 0x59EC
  cpu.r1.de = 0xF459
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x49)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x07A5)
  expect(cpu.r1.bc).toEqual(0x59EC)
  expect(cpu.r1.de).toEqual(0xF459)
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
  expect(cpu.tStates).toEqual(12)
})

test('Test ed4a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5741
  cpu.r1.bc = 0x24B5
  cpu.r1.de = 0x83D2
  cpu.r1.hl = 0x9AC8
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x4A)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x57A8)
  expect(cpu.r1.bc).toEqual(0x24B5)
  expect(cpu.r1.de).toEqual(0x83D2)
  expect(cpu.r1.hl).toEqual(0xBF7E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed4b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x650C
  cpu.r1.bc = 0xD74D
  cpu.r1.de = 0x0448
  cpu.r1.hl = 0xA3B9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xB554
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x4B)
  mem.write8(0x0002, 0x1A)
  mem.write8(0x0003, 0xA4)
  mem.write8(0xA41A, 0xF3)
  mem.write8(0xA41B, 0xD4)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x650C)
  expect(cpu.r1.bc).toEqual(0xD4F3)
  expect(cpu.r1.de).toEqual(0x0448)
  expect(cpu.r1.hl).toEqual(0xA3B9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xB554)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed4c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5682
  cpu.r1.bc = 0x7DDE
  cpu.r1.de = 0xB049
  cpu.r1.hl = 0x939D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xC7BB
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x4C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAABB)
  expect(cpu.r1.bc).toEqual(0x7DDE)
  expect(cpu.r1.de).toEqual(0xB049)
  expect(cpu.r1.hl).toEqual(0x939D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xC7BB)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed4d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1BED
  cpu.r1.bc = 0xC358
  cpu.r1.de = 0x5FD5
  cpu.r1.hl = 0x6093
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x680E
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x4D)
  mem.write8(0x680E, 0x03)
  mem.write8(0x680F, 0x7C)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1BED)
  expect(cpu.r1.bc).toEqual(0xC358)
  expect(cpu.r1.de).toEqual(0x5FD5)
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
  expect(cpu.tStates).toEqual(14)
})

test('Test ed4e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8E01
  cpu.r1.bc = 0xE7C6
  cpu.r1.de = 0x880F
  cpu.r1.hl = 0xD2A2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x85DA
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x4E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8E01)
  expect(cpu.r1.bc).toEqual(0xE7C6)
  expect(cpu.r1.de).toEqual(0x880F)
  expect(cpu.r1.hl).toEqual(0xD2A2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x85DA)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed4f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2AE3
  cpu.r1.bc = 0xC115
  cpu.r1.de = 0xEFF8
  cpu.r1.hl = 0x9F6D
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x4F)

  while (cpu.tStates < 9) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2AE3)
  expect(cpu.r1.bc).toEqual(0xC115)
  expect(cpu.r1.de).toEqual(0xEFF8)
  expect(cpu.r1.hl).toEqual(0x9F6D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x2A)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(9)
})

test('Test ed50', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x85AE
  cpu.r1.bc = 0xBBCC
  cpu.r1.de = 0xE2A8
  cpu.r1.hl = 0xF219
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x50)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x85AC)
  expect(cpu.r1.bc).toEqual(0xBBCC)
  expect(cpu.r1.de).toEqual(0xBBA8)
  expect(cpu.r1.hl).toEqual(0xF219)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed51', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2C4C
  cpu.r1.bc = 0xC0A4
  cpu.r1.de = 0x5303
  cpu.r1.hl = 0xBC25
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x51)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2C4C)
  expect(cpu.r1.bc).toEqual(0xC0A4)
  expect(cpu.r1.de).toEqual(0x5303)
  expect(cpu.r1.hl).toEqual(0xBC25)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed52', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFC57
  cpu.r1.bc = 0x1FC8
  cpu.r1.de = 0x47B6
  cpu.r1.hl = 0xDA7C
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x52)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFC82)
  expect(cpu.r1.bc).toEqual(0x1FC8)
  expect(cpu.r1.de).toEqual(0x47B6)
  expect(cpu.r1.hl).toEqual(0x92C5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed53', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1F88
  cpu.r1.bc = 0x4692
  cpu.r1.de = 0x5CB2
  cpu.r1.hl = 0x4915
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x7D8C
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x53)
  mem.write8(0x0002, 0xFF)
  mem.write8(0x0003, 0x21)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1F88)
  expect(cpu.r1.bc).toEqual(0x4692)
  expect(cpu.r1.de).toEqual(0x5CB2)
  expect(cpu.r1.hl).toEqual(0x4915)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x7D8C)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed54', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xADF9
  cpu.r1.bc = 0x5661
  cpu.r1.de = 0x547C
  cpu.r1.hl = 0xC322
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xD9EB
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x54)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5313)
  expect(cpu.r1.bc).toEqual(0x5661)
  expect(cpu.r1.de).toEqual(0x547C)
  expect(cpu.r1.hl).toEqual(0xC322)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xD9EB)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed55', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB05B
  cpu.r1.bc = 0x5E84
  cpu.r1.de = 0xD6E9
  cpu.r1.hl = 0xCB3E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xD4B4
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x55)
  mem.write8(0xD4B4, 0xEA)
  mem.write8(0xD4B5, 0xC9)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB05B)
  expect(cpu.r1.bc).toEqual(0x5E84)
  expect(cpu.r1.de).toEqual(0xD6E9)
  expect(cpu.r1.hl).toEqual(0xCB3E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xD4B6)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test ed56', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5CC0
  cpu.r1.bc = 0x9100
  cpu.r1.de = 0x356B
  cpu.r1.hl = 0x4BFD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x2C93
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x56)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5CC0)
  expect(cpu.r1.bc).toEqual(0x9100)
  expect(cpu.r1.de).toEqual(0x356B)
  expect(cpu.r1.hl).toEqual(0x4BFD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x2C93)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed57', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBCFE
  cpu.r1.bc = 0xDFC7
  cpu.r1.de = 0xA621
  cpu.r1.hl = 0x1022
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x1E
  cpu.r = 0x17
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x57)

  while (cpu.tStates < 9) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1E08)
  expect(cpu.r1.bc).toEqual(0xDFC7)
  expect(cpu.r1.de).toEqual(0xA621)
  expect(cpu.r1.hl).toEqual(0x1022)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x19)
  expect(cpu.i).toEqual(0x1E)
  expect(cpu.tStates).toEqual(9)
})

test('Test ed58', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC9EE
  cpu.r1.bc = 0x4091
  cpu.r1.de = 0x9E46
  cpu.r1.hl = 0x873A
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x58)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC900)
  expect(cpu.r1.bc).toEqual(0x4091)
  expect(cpu.r1.de).toEqual(0x9E40)
  expect(cpu.r1.hl).toEqual(0x873A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed59', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x388A
  cpu.r1.bc = 0xD512
  cpu.r1.de = 0xECC5
  cpu.r1.hl = 0x93AF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x59)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x388A)
  expect(cpu.r1.bc).toEqual(0xD512)
  expect(cpu.r1.de).toEqual(0xECC5)
  expect(cpu.r1.hl).toEqual(0x93AF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed5a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA41F
  cpu.r1.bc = 0x751C
  cpu.r1.de = 0x19CE
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x5A)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA408)
  expect(cpu.r1.bc).toEqual(0x751C)
  expect(cpu.r1.de).toEqual(0x19CE)
  expect(cpu.r1.hl).toEqual(0x1E62)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed5b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5DF1
  cpu.r1.bc = 0x982E
  cpu.r1.de = 0x002F
  cpu.r1.hl = 0xADB9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xF398
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x5B)
  mem.write8(0x0002, 0x04)
  mem.write8(0x0003, 0x9F)
  mem.write8(0x9F04, 0x84)
  mem.write8(0x9F05, 0x4D)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5DF1)
  expect(cpu.r1.bc).toEqual(0x982E)
  expect(cpu.r1.de).toEqual(0x4D84)
  expect(cpu.r1.hl).toEqual(0xADB9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xF398)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed5c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x11C3
  cpu.r1.bc = 0xB86C
  cpu.r1.de = 0x2042
  cpu.r1.hl = 0xC958
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x93DC
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x5C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEFBB)
  expect(cpu.r1.bc).toEqual(0xB86C)
  expect(cpu.r1.de).toEqual(0x2042)
  expect(cpu.r1.hl).toEqual(0xC958)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x93DC)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed5d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1152
  cpu.r1.bc = 0x1D20
  cpu.r1.de = 0x3F86
  cpu.r1.hl = 0x64FC
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x5D)
  mem.write8(0x5308, 0x26)
  mem.write8(0x5309, 0xE0)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1152)
  expect(cpu.r1.bc).toEqual(0x1D20)
  expect(cpu.r1.de).toEqual(0x3F86)
  expect(cpu.r1.hl).toEqual(0x64FC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x530A)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test ed5e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x611A
  cpu.r1.bc = 0xC8CF
  cpu.r1.de = 0xF215
  cpu.r1.hl = 0xD92B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x4D86
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x5E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x611A)
  expect(cpu.r1.bc).toEqual(0xC8CF)
  expect(cpu.r1.de).toEqual(0xF215)
  expect(cpu.r1.hl).toEqual(0xD92B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x4D86)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed5f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1BB5
  cpu.r1.bc = 0xFC09
  cpu.r1.de = 0x2DFA
  cpu.r1.hl = 0xBAB9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0xD7
  cpu.r = 0xF3
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x5F)

  while (cpu.tStates < 9) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF5A1)
  expect(cpu.r1.bc).toEqual(0xFC09)
  expect(cpu.r1.de).toEqual(0x2DFA)
  expect(cpu.r1.hl).toEqual(0xBAB9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0xF5)
  expect(cpu.i).toEqual(0xD7)
  expect(cpu.tStates).toEqual(9)
})

test('Test ed60', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2C9C
  cpu.r1.bc = 0x0DAE
  cpu.r1.de = 0x621E
  cpu.r1.hl = 0x2F66
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x60)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2C08)
  expect(cpu.r1.bc).toEqual(0x0DAE)
  expect(cpu.r1.de).toEqual(0x621E)
  expect(cpu.r1.hl).toEqual(0x0D66)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed61', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFFA8
  cpu.r1.bc = 0x90CA
  cpu.r1.de = 0x0340
  cpu.r1.hl = 0xD847
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x61)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFFA8)
  expect(cpu.r1.bc).toEqual(0x90CA)
  expect(cpu.r1.de).toEqual(0x0340)
  expect(cpu.r1.hl).toEqual(0xD847)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed62', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA60B
  cpu.r1.bc = 0xD9AA
  cpu.r1.de = 0x6623
  cpu.r1.hl = 0x0B1A
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x62)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA6BB)
  expect(cpu.r1.bc).toEqual(0xD9AA)
  expect(cpu.r1.de).toEqual(0x6623)
  expect(cpu.r1.hl).toEqual(0xFFFF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed63', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5222
  cpu.r1.bc = 0x88F9
  cpu.r1.de = 0x9D9A
  cpu.r1.hl = 0xE4D3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xA2F0
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x63)
  mem.write8(0x0002, 0x67)
  mem.write8(0x0003, 0x65)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5222)
  expect(cpu.r1.bc).toEqual(0x88F9)
  expect(cpu.r1.de).toEqual(0x9D9A)
  expect(cpu.r1.hl).toEqual(0xE4D3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xA2F0)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed64', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2127
  cpu.r1.bc = 0xE425
  cpu.r1.de = 0x66AC
  cpu.r1.hl = 0xB2A3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F2
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x64)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDF9B)
  expect(cpu.r1.bc).toEqual(0xE425)
  expect(cpu.r1.de).toEqual(0x66AC)
  expect(cpu.r1.hl).toEqual(0xB2A3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F2)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed65', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x63D2
  cpu.r1.bc = 0x1FA1
  cpu.r1.de = 0x0788
  cpu.r1.hl = 0x881C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xF207
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x65)
  mem.write8(0xF207, 0xEB)
  mem.write8(0xF208, 0x0E)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x63D2)
  expect(cpu.r1.bc).toEqual(0x1FA1)
  expect(cpu.r1.de).toEqual(0x0788)
  expect(cpu.r1.hl).toEqual(0x881C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xF209)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test ed66', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4088
  cpu.r1.bc = 0xA7E1
  cpu.r1.de = 0x3FFD
  cpu.r1.hl = 0x919B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xD193
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x66)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4088)
  expect(cpu.r1.bc).toEqual(0xA7E1)
  expect(cpu.r1.de).toEqual(0x3FFD)
  expect(cpu.r1.hl).toEqual(0x919B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xD193)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed67', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3624
  cpu.r1.bc = 0xB16A
  cpu.r1.de = 0xA4DB
  cpu.r1.hl = 0xB9DE
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x67)
  mem.write8(0xB9DE, 0x93)

  while (cpu.tStates < 18) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3324)
  expect(cpu.r1.bc).toEqual(0xB16A)
  expect(cpu.r1.de).toEqual(0xA4DB)
  expect(cpu.r1.hl).toEqual(0xB9DE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(18)
})

test('Test ed68', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5316
  cpu.r1.bc = 0x624B
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x68)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5320)
  expect(cpu.r1.bc).toEqual(0x624B)
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
  expect(cpu.tStates).toEqual(12)
})

test('Test ed69', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xABD8
  cpu.r1.bc = 0x8D2F
  cpu.r1.de = 0x89C7
  cpu.r1.hl = 0xC3D6
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x69)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xABD8)
  expect(cpu.r1.bc).toEqual(0x8D2F)
  expect(cpu.r1.de).toEqual(0x89C7)
  expect(cpu.r1.hl).toEqual(0xC3D6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed6a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBB5A
  cpu.r1.bc = 0x6FED
  cpu.r1.de = 0x59BB
  cpu.r1.hl = 0x4E40
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x6A)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBB9C)
  expect(cpu.r1.bc).toEqual(0x6FED)
  expect(cpu.r1.de).toEqual(0x59BB)
  expect(cpu.r1.hl).toEqual(0x9C80)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed6b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9E35
  cpu.r1.bc = 0xD240
  cpu.r1.de = 0x1998
  cpu.r1.hl = 0xAB19
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x6B)
  mem.write8(0x0002, 0x98)
  mem.write8(0x0003, 0x61)
  mem.write8(0x6198, 0x3F)
  mem.write8(0x6199, 0xBE)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9E35)
  expect(cpu.r1.bc).toEqual(0xD240)
  expect(cpu.r1.de).toEqual(0x1998)
  expect(cpu.r1.hl).toEqual(0xBE3F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x9275)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed6c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0FB1
  cpu.r1.bc = 0x7D5B
  cpu.r1.de = 0xCADB
  cpu.r1.hl = 0x0893
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xD983
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x6C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF1B3)
  expect(cpu.r1.bc).toEqual(0x7D5B)
  expect(cpu.r1.de).toEqual(0xCADB)
  expect(cpu.r1.hl).toEqual(0x0893)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xD983)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed6d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3860
  cpu.r1.bc = 0x42DA
  cpu.r1.de = 0x5935
  cpu.r1.hl = 0xDC10
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5CD3
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x6D)
  mem.write8(0x5CD3, 0xA9)
  mem.write8(0x5CD4, 0x73)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3860)
  expect(cpu.r1.bc).toEqual(0x42DA)
  expect(cpu.r1.de).toEqual(0x5935)
  expect(cpu.r1.hl).toEqual(0xDC10)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5CD5)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test ed6e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7752
  cpu.r1.bc = 0xBEC3
  cpu.r1.de = 0x0457
  cpu.r1.hl = 0x8C95
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xA787
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x6E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7752)
  expect(cpu.r1.bc).toEqual(0xBEC3)
  expect(cpu.r1.de).toEqual(0x0457)
  expect(cpu.r1.hl).toEqual(0x8C95)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xA787)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed6f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x658B
  cpu.r1.bc = 0x7A7A
  cpu.r1.de = 0xECF0
  cpu.r1.hl = 0x403C
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x6F)
  mem.write8(0x403C, 0xC4)

  while (cpu.tStates < 18) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6C2D)
  expect(cpu.r1.bc).toEqual(0x7A7A)
  expect(cpu.r1.de).toEqual(0xECF0)
  expect(cpu.r1.hl).toEqual(0x403C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(18)
})

test('Test ed70', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC6A1
  cpu.r1.bc = 0xF7D6
  cpu.r1.de = 0xA3CB
  cpu.r1.hl = 0x288D
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x70)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC6A1)
  expect(cpu.r1.bc).toEqual(0xF7D6)
  expect(cpu.r1.de).toEqual(0xA3CB)
  expect(cpu.r1.hl).toEqual(0x288D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed71', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAFA0
  cpu.r1.bc = 0x20B3
  cpu.r1.de = 0x7B33
  cpu.r1.hl = 0x4AC1
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x71)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAFA0)
  expect(cpu.r1.bc).toEqual(0x20B3)
  expect(cpu.r1.de).toEqual(0x7B33)
  expect(cpu.r1.hl).toEqual(0x4AC1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed72', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5FD9
  cpu.r1.bc = 0x05CB
  cpu.r1.de = 0x0C6C
  cpu.r1.hl = 0xD18B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x53DB
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x72)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5F3E)
  expect(cpu.r1.bc).toEqual(0x05CB)
  expect(cpu.r1.de).toEqual(0x0C6C)
  expect(cpu.r1.hl).toEqual(0x7DAF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x53DB)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed73', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x41C4
  cpu.r1.bc = 0x763A
  cpu.r1.de = 0xECB0
  cpu.r1.hl = 0xEE62
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xAED5
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x73)
  mem.write8(0x0002, 0x2A)
  mem.write8(0x0003, 0x79)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x41C4)
  expect(cpu.r1.bc).toEqual(0x763A)
  expect(cpu.r1.de).toEqual(0xECB0)
  expect(cpu.r1.hl).toEqual(0xEE62)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xAED5)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed74', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4454
  cpu.r1.bc = 0xF2D2
  cpu.r1.de = 0x8340
  cpu.r1.hl = 0x7E76
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x74)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBCBB)
  expect(cpu.r1.bc).toEqual(0xF2D2)
  expect(cpu.r1.de).toEqual(0x8340)
  expect(cpu.r1.hl).toEqual(0x7E76)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0323)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed75', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7CA4
  cpu.r1.bc = 0x1615
  cpu.r1.de = 0x5D2A
  cpu.r1.hl = 0xA95B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x7D00
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x75)
  mem.write8(0x7D00, 0xFD)
  mem.write8(0x7D01, 0x4F)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7CA4)
  expect(cpu.r1.bc).toEqual(0x1615)
  expect(cpu.r1.de).toEqual(0x5D2A)
  expect(cpu.r1.hl).toEqual(0xA95B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x7D02)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test ed76', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCABF
  cpu.r1.bc = 0xFF9A
  cpu.r1.de = 0xB98C
  cpu.r1.hl = 0xA8E6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xFE8E
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x76)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCABF)
  expect(cpu.r1.bc).toEqual(0xFF9A)
  expect(cpu.r1.de).toEqual(0xB98C)
  expect(cpu.r1.hl).toEqual(0xA8E6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xFE8E)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed78', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x58DD
  cpu.r1.bc = 0xF206
  cpu.r1.de = 0x2D6A
  cpu.r1.hl = 0xAF16
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x78)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF2A1)
  expect(cpu.r1.bc).toEqual(0xF206)
  expect(cpu.r1.de).toEqual(0x2D6A)
  expect(cpu.r1.hl).toEqual(0xAF16)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed79', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE000
  cpu.r1.bc = 0x4243
  cpu.r1.de = 0x8F7F
  cpu.r1.hl = 0xED90
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x79)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE000)
  expect(cpu.r1.bc).toEqual(0x4243)
  expect(cpu.r1.de).toEqual(0x8F7F)
  expect(cpu.r1.hl).toEqual(0xED90)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(12)
})

test('Test ed7a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x32FD
  cpu.r1.bc = 0xD819
  cpu.r1.de = 0xD873
  cpu.r1.hl = 0x8DCF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5D22
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x7A)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x32B8)
  expect(cpu.r1.bc).toEqual(0xD819)
  expect(cpu.r1.de).toEqual(0xD873)
  expect(cpu.r1.hl).toEqual(0xEAF2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5D22)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test ed7b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4F97
  cpu.r1.bc = 0x24B7
  cpu.r1.de = 0xE105
  cpu.r1.hl = 0x1BF2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5E17
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x7B)
  mem.write8(0x0002, 0x50)
  mem.write8(0x0003, 0x8C)
  mem.write8(0x8C50, 0xD8)
  mem.write8(0x8C51, 0x48)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4F97)
  expect(cpu.r1.bc).toEqual(0x24B7)
  expect(cpu.r1.de).toEqual(0xE105)
  expect(cpu.r1.hl).toEqual(0x1BF2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x48D8)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test ed7c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD333
  cpu.r1.bc = 0x29CA
  cpu.r1.de = 0x9622
  cpu.r1.hl = 0xB452
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0BE6
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x7C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2D3B)
  expect(cpu.r1.bc).toEqual(0x29CA)
  expect(cpu.r1.de).toEqual(0x9622)
  expect(cpu.r1.hl).toEqual(0xB452)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0BE6)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test ed7d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xECB6
  cpu.r1.bc = 0x073E
  cpu.r1.de = 0xDC1E
  cpu.r1.hl = 0x38D9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x66F0
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x7D)
  mem.write8(0x66F0, 0x4F)
  mem.write8(0x66F1, 0xFB)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xECB6)
  expect(cpu.r1.bc).toEqual(0x073E)
  expect(cpu.r1.de).toEqual(0xDC1E)
  expect(cpu.r1.hl).toEqual(0x38D9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x66F2)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test ed7e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB246
  cpu.r1.bc = 0x1A1A
  cpu.r1.de = 0x933A
  cpu.r1.hl = 0x4B8B
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0x7E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB246)
  expect(cpu.r1.bc).toEqual(0x1A1A)
  expect(cpu.r1.de).toEqual(0x933A)
  expect(cpu.r1.hl).toEqual(0x4B8B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x2242)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test eda0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1BC9
  cpu.r1.bc = 0x3D11
  cpu.r1.de = 0x95C1
  cpu.r1.hl = 0xD097
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA0)
  mem.write8(0xD097, 0xB7)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1BE5)
  expect(cpu.r1.bc).toEqual(0x3D10)
  expect(cpu.r1.de).toEqual(0x95C2)
  expect(cpu.r1.hl).toEqual(0xD098)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test eda1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xECDB
  cpu.r1.bc = 0x7666
  cpu.r1.de = 0x537F
  cpu.r1.hl = 0x3BC3
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA1)
  mem.write8(0x3BC3, 0xB4)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEC0F)
  expect(cpu.r1.bc).toEqual(0x7665)
  expect(cpu.r1.de).toEqual(0x537F)
  expect(cpu.r1.hl).toEqual(0x3BC4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test eda2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0121
  cpu.r1.bc = 0x9A82
  cpu.r1.de = 0x5BBD
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA2)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x019F)
  expect(cpu.r1.bc).toEqual(0x9982)
  expect(cpu.r1.de).toEqual(0x5BBD)
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda2_01', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA2)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda2_02', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x569A
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA2)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x559A)
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda2_03', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xABCC
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA2)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x00BF)
  expect(cpu.r1.bc).toEqual(0xAACC)
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x42C5
  cpu.r1.bc = 0x6334
  cpu.r1.de = 0x1E28
  cpu.r1.hl = 0x32FA
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x32FA, 0xB3)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4233)
  expect(cpu.r1.bc).toEqual(0x6234)
  expect(cpu.r1.de).toEqual(0x1E28)
  expect(cpu.r1.hl).toEqual(0x32FB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_01', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FF, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_02', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x0100, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_03', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x0107, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_04', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FF, 0x80)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_05', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FD
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FD, 0x12)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0055)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x01FE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_06', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FE
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FE, 0x12)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0051)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x01FF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_07', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0200
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FF, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_08', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0800
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FE
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FE, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0004)
  expect(cpu.r1.bc).toEqual(0x0700)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x01FF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_09', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x8100
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FF, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_10', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x8200
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FF, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda3_11', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xA900
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x01FF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x01FF, 0x00)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x00A8)
  expect(cpu.r1.bc).toEqual(0xA800)
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
  expect(cpu.tStates).toEqual(16)
})

test('Test eda8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2A8E
  cpu.r1.bc = 0x1607
  cpu.r1.de = 0x5938
  cpu.r1.hl = 0x12E8
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA8)
  mem.write8(0x12E8, 0xD8)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2AA4)
  expect(cpu.r1.bc).toEqual(0x1606)
  expect(cpu.r1.de).toEqual(0x5937)
  expect(cpu.r1.hl).toEqual(0x12E7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test eda9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1495
  cpu.r1.bc = 0xFB42
  cpu.r1.de = 0x0466
  cpu.r1.hl = 0x0DBE
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xA9)
  mem.write8(0x0DBE, 0x89)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x14BF)
  expect(cpu.r1.bc).toEqual(0xFB41)
  expect(cpu.r1.de).toEqual(0x0466)
  expect(cpu.r1.hl).toEqual(0x0DBD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test edaa', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2042
  cpu.r1.bc = 0xD791
  cpu.r1.de = 0xA912
  cpu.r1.hl = 0xA533
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xAA)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2097)
  expect(cpu.r1.bc).toEqual(0xD691)
  expect(cpu.r1.de).toEqual(0xA912)
  expect(cpu.r1.hl).toEqual(0xA532)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test edaa_01', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xAA)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0040)
  expect(cpu.r1.bc).toEqual(0x0001)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7FFF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test edaa_02', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x56AA
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xAA)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x55AA)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7FFF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test edaa_03', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xABCC
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xAA)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x00BF)
  expect(cpu.r1.bc).toEqual(0xAACC)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7FFF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test edab', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0037
  cpu.r1.bc = 0xF334
  cpu.r1.de = 0xD3E1
  cpu.r1.hl = 0x199F
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xAB)
  mem.write8(0x199F, 0x49)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x00A4)
  expect(cpu.r1.bc).toEqual(0xF234)
  expect(cpu.r1.de).toEqual(0xD3E1)
  expect(cpu.r1.hl).toEqual(0x199E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test edab_01', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x5800
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x007A
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xAB)
  mem.write8(0x007A, 0x7F)

  while (cpu.tStates < 16) {
    cpu.execute()
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
  expect(cpu.tStates).toEqual(16)
})

test('Test edab_02', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xAB00
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x00F1
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xAB)
  mem.write8(0x00F1, 0xCD)

  while (cpu.tStates < 16) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x00BF)
  expect(cpu.r1.bc).toEqual(0xAA00)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x00F0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(16)
})

test('Test edb0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1045
  cpu.r1.bc = 0x0010
  cpu.r1.de = 0xAAD8
  cpu.r1.hl = 0x558E
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xB0)
  mem.write8(0x558E, 0x53)
  mem.write8(0x558F, 0x94)
  mem.write8(0x5590, 0x30)
  mem.write8(0x5591, 0x05)
  mem.write8(0x5592, 0x44)
  mem.write8(0x5593, 0x24)
  mem.write8(0x5594, 0x22)
  mem.write8(0x5595, 0xB9)
  mem.write8(0x5596, 0xE9)
  mem.write8(0x5597, 0x77)
  mem.write8(0x5598, 0x23)
  mem.write8(0x5599, 0x71)
  mem.write8(0x559A, 0xE2)
  mem.write8(0x559B, 0x5C)
  mem.write8(0x559C, 0xFB)
  mem.write8(0x559D, 0x49)

  while (cpu.tStates < 331) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1049)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xAAE8)
  expect(cpu.r1.hl).toEqual(0x559E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x20)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(331)
})

test('Test edb1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF4DD
  cpu.r1.bc = 0x0008
  cpu.r1.de = 0xE4E0
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xB1)
  mem.write8(0x9825, 0x50)
  mem.write8(0x9826, 0xE5)
  mem.write8(0x9827, 0x41)
  mem.write8(0x9828, 0xF4)
  mem.write8(0x9829, 0x01)
  mem.write8(0x982A, 0x9F)
  mem.write8(0x982B, 0x11)
  mem.write8(0x982C, 0x85)

  while (cpu.tStates < 79) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF447)
  expect(cpu.r1.bc).toEqual(0x0004)
  expect(cpu.r1.de).toEqual(0xE4E0)
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
  expect(cpu.tStates).toEqual(79)
})

test('Test edb2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8A34
  cpu.r1.bc = 0x0A40
  cpu.r1.de = 0xD98C
  cpu.r1.hl = 0x37CE
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xB2)

  while (cpu.tStates < 205) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8A40)
  expect(cpu.r1.bc).toEqual(0x0040)
  expect(cpu.r1.de).toEqual(0xD98C)
  expect(cpu.r1.hl).toEqual(0x37D8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x14)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(205)
})

test('Test edb3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x34AB
  cpu.r1.bc = 0x03E0
  cpu.r1.de = 0x41B9
  cpu.r1.hl = 0x1D7C
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xB3)
  mem.write8(0x1D7C, 0x9D)
  mem.write8(0x1D7D, 0x24)
  mem.write8(0x1D7E, 0xAA)

  while (cpu.tStates < 58) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3453)
  expect(cpu.r1.bc).toEqual(0x00E0)
  expect(cpu.r1.de).toEqual(0x41B9)
  expect(cpu.r1.hl).toEqual(0x1D7F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x06)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(58)
})

test('Test edb8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE553
  cpu.r1.bc = 0x0008
  cpu.r1.de = 0x68E8
  cpu.r1.hl = 0x4DCF
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xB8)
  mem.write8(0x4DC8, 0x29)
  mem.write8(0x4DC9, 0x85)
  mem.write8(0x4DCA, 0xA7)
  mem.write8(0x4DCB, 0xC3)
  mem.write8(0x4DCC, 0x55)
  mem.write8(0x4DCD, 0x74)
  mem.write8(0x4DCE, 0x23)
  mem.write8(0x4DCF, 0x0A)

  while (cpu.tStates < 163) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE569)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x68E0)
  expect(cpu.r1.hl).toEqual(0x4DC7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x10)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(163)
})

test('Test edb9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFFCD
  cpu.r1.bc = 0x0008
  cpu.r1.de = 0xA171
  cpu.r1.hl = 0xC749
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xB9)
  mem.write8(0xC742, 0xC6)
  mem.write8(0xC743, 0x09)
  mem.write8(0xC744, 0x85)
  mem.write8(0xC745, 0xEC)
  mem.write8(0xC746, 0x5A)
  mem.write8(0xC747, 0x01)
  mem.write8(0xC748, 0x4E)
  mem.write8(0xC749, 0x6C)

  while (cpu.tStates < 163) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF0B)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xA171)
  expect(cpu.r1.hl).toEqual(0xC741)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x10)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(163)
})

test('Test edba', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2567
  cpu.r1.bc = 0x069F
  cpu.r1.de = 0xD40D
  cpu.r1.hl = 0x6B55
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xBA)

  while (cpu.tStates < 121) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2540)
  expect(cpu.r1.bc).toEqual(0x009F)
  expect(cpu.r1.de).toEqual(0xD40D)
  expect(cpu.r1.hl).toEqual(0x6B4F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x0C)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(121)
})

test('Test edbb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x09C4
  cpu.r1.bc = 0x043B
  cpu.r1.de = 0xBE49
  cpu.r1.hl = 0x1DD0
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
  mem.write8(0x0000, 0xED)
  mem.write8(0x0001, 0xBB)
  mem.write8(0x1DCD, 0xF9)
  mem.write8(0x1DCE, 0x71)
  mem.write8(0x1DCF, 0xC5)
  mem.write8(0x1DD0, 0xB6)

  while (cpu.tStates < 79) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0957)
  expect(cpu.r1.bc).toEqual(0x003B)
  expect(cpu.r1.de).toEqual(0xBE49)
  expect(cpu.r1.hl).toEqual(0x1DCC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x08)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(79)
})

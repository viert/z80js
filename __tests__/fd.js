const Memory = require("../src/memory")
const Z80 = require("../index")
const { FakePort } = require("../src/port")

test('Test fd09', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x466A
  cpu.r1.bc = 0xA623
  cpu.r1.de = 0xBAB2
  cpu.r1.hl = 0xD788
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC9E8
  cpu.r1.iy = 0xF698
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x09)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4649)
  expect(cpu.r1.bc).toEqual(0xA623)
  expect(cpu.r1.de).toEqual(0xBAB2)
  expect(cpu.r1.hl).toEqual(0xD788)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC9E8)
  expect(cpu.r1.iy).toEqual(0x9CBB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test fd19', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB3E5
  cpu.r1.bc = 0x5336
  cpu.r1.de = 0x76CB
  cpu.r1.hl = 0x54E2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB9CE
  cpu.r1.iy = 0x8624
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x19)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB3EC)
  expect(cpu.r1.bc).toEqual(0x5336)
  expect(cpu.r1.de).toEqual(0x76CB)
  expect(cpu.r1.hl).toEqual(0x54E2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB9CE)
  expect(cpu.r1.iy).toEqual(0xFCEF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test fd21', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC924
  cpu.r1.bc = 0x5C83
  cpu.r1.de = 0xE0E2
  cpu.r1.hl = 0xEDDB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6E9F
  cpu.r1.iy = 0xBA55
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x21)
  mem.write8(0x0002, 0x46)
  mem.write8(0x0003, 0x47)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC924)
  expect(cpu.r1.bc).toEqual(0x5C83)
  expect(cpu.r1.de).toEqual(0xE0E2)
  expect(cpu.r1.hl).toEqual(0xEDDB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6E9F)
  expect(cpu.r1.iy).toEqual(0x4746)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test fd22', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1235
  cpu.r1.bc = 0xF0B6
  cpu.r1.de = 0xB74C
  cpu.r1.hl = 0xCC9F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8B00
  cpu.r1.iy = 0x81E4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x22)
  mem.write8(0x0002, 0x9A)
  mem.write8(0x0003, 0xE2)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1235)
  expect(cpu.r1.bc).toEqual(0xF0B6)
  expect(cpu.r1.de).toEqual(0xB74C)
  expect(cpu.r1.hl).toEqual(0xCC9F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8B00)
  expect(cpu.r1.iy).toEqual(0x81E4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fd23', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x69F2
  cpu.r1.bc = 0xC1D3
  cpu.r1.de = 0x0F6F
  cpu.r1.hl = 0x2169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE39E
  cpu.r1.iy = 0x2605
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x23)

  while (cpu.tStates < 10) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x69F2)
  expect(cpu.r1.bc).toEqual(0xC1D3)
  expect(cpu.r1.de).toEqual(0x0F6F)
  expect(cpu.r1.hl).toEqual(0x2169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE39E)
  expect(cpu.r1.iy).toEqual(0x2606)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(10)
})

test('Test fd24', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5554
  cpu.r1.bc = 0x9684
  cpu.r1.de = 0xD36A
  cpu.r1.hl = 0xDAC3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7803
  cpu.r1.iy = 0x6434
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x24)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5520)
  expect(cpu.r1.bc).toEqual(0x9684)
  expect(cpu.r1.de).toEqual(0xD36A)
  expect(cpu.r1.hl).toEqual(0xDAC3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7803)
  expect(cpu.r1.iy).toEqual(0x6534)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd25', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCD0B
  cpu.r1.bc = 0xB5E4
  cpu.r1.de = 0xA754
  cpu.r1.hl = 0x9526
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3DCB
  cpu.r1.iy = 0x03B2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x25)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCD03)
  expect(cpu.r1.bc).toEqual(0xB5E4)
  expect(cpu.r1.de).toEqual(0xA754)
  expect(cpu.r1.hl).toEqual(0x9526)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3DCB)
  expect(cpu.r1.iy).toEqual(0x02B2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd26', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2452
  cpu.r1.bc = 0x300B
  cpu.r1.de = 0xB4A1
  cpu.r1.hl = 0x929D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC259
  cpu.r1.iy = 0x3F30
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x26)
  mem.write8(0x0002, 0x77)

  while (cpu.tStates < 11) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2452)
  expect(cpu.r1.bc).toEqual(0x300B)
  expect(cpu.r1.de).toEqual(0xB4A1)
  expect(cpu.r1.hl).toEqual(0x929D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC259)
  expect(cpu.r1.iy).toEqual(0x7730)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(11)
})

test('Test fd29', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5812
  cpu.r1.bc = 0x49D0
  cpu.r1.de = 0xEC95
  cpu.r1.hl = 0x011C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEC6C
  cpu.r1.iy = 0x594C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x29)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5830)
  expect(cpu.r1.bc).toEqual(0x49D0)
  expect(cpu.r1.de).toEqual(0xEC95)
  expect(cpu.r1.hl).toEqual(0x011C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEC6C)
  expect(cpu.r1.iy).toEqual(0xB298)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test fd2a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0F82
  cpu.r1.bc = 0x3198
  cpu.r1.de = 0x87E3
  cpu.r1.hl = 0x7C1C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1BB4
  cpu.r1.iy = 0xEB1A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x2A)
  mem.write8(0x0002, 0x91)
  mem.write8(0x0003, 0xF9)
  mem.write8(0xF991, 0x92)
  mem.write8(0xF992, 0xBF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0F82)
  expect(cpu.r1.bc).toEqual(0x3198)
  expect(cpu.r1.de).toEqual(0x87E3)
  expect(cpu.r1.hl).toEqual(0x7C1C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1BB4)
  expect(cpu.r1.iy).toEqual(0xBF92)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fd2b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAB27
  cpu.r1.bc = 0x942F
  cpu.r1.de = 0x82FA
  cpu.r1.hl = 0x6F2F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9438
  cpu.r1.iy = 0xEBBC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x2B)

  while (cpu.tStates < 10) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAB27)
  expect(cpu.r1.bc).toEqual(0x942F)
  expect(cpu.r1.de).toEqual(0x82FA)
  expect(cpu.r1.hl).toEqual(0x6F2F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9438)
  expect(cpu.r1.iy).toEqual(0xEBBB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(10)
})

test('Test fd2c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x665D
  cpu.r1.bc = 0x0AB1
  cpu.r1.de = 0x5656
  cpu.r1.hl = 0xE5A9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5FB9
  cpu.r1.iy = 0x4DF7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x2C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x66A9)
  expect(cpu.r1.bc).toEqual(0x0AB1)
  expect(cpu.r1.de).toEqual(0x5656)
  expect(cpu.r1.hl).toEqual(0xE5A9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5FB9)
  expect(cpu.r1.iy).toEqual(0x4DF8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd2d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x32FB
  cpu.r1.bc = 0xF78A
  cpu.r1.de = 0xB906
  cpu.r1.hl = 0x31D0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC72A
  cpu.r1.iy = 0xE91C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x2D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x320B)
  expect(cpu.r1.bc).toEqual(0xF78A)
  expect(cpu.r1.de).toEqual(0xB906)
  expect(cpu.r1.hl).toEqual(0x31D0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC72A)
  expect(cpu.r1.iy).toEqual(0xE91B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd2e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2114
  cpu.r1.bc = 0x4923
  cpu.r1.de = 0x6E65
  cpu.r1.hl = 0x006C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDA39
  cpu.r1.iy = 0xC0CB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x2E)
  mem.write8(0x0002, 0x49)

  while (cpu.tStates < 11) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2114)
  expect(cpu.r1.bc).toEqual(0x4923)
  expect(cpu.r1.de).toEqual(0x6E65)
  expect(cpu.r1.hl).toEqual(0x006C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDA39)
  expect(cpu.r1.iy).toEqual(0xC049)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(11)
})

test('Test fd34', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD56A
  cpu.r1.bc = 0x6F24
  cpu.r1.de = 0x7DF7
  cpu.r1.hl = 0x74F0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x365A
  cpu.r1.iy = 0xEFC4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x34)
  mem.write8(0x0002, 0xB8)
  mem.write8(0xEF7C, 0xE0)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD5A0)
  expect(cpu.r1.bc).toEqual(0x6F24)
  expect(cpu.r1.de).toEqual(0x7DF7)
  expect(cpu.r1.hl).toEqual(0x74F0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x365A)
  expect(cpu.r1.iy).toEqual(0xEFC4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fd35', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8CDA
  cpu.r1.bc = 0x35D8
  cpu.r1.de = 0x7C1A
  cpu.r1.hl = 0x1C0A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x62BB
  cpu.r1.iy = 0xAEC6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x35)
  mem.write8(0x0002, 0xAB)
  mem.write8(0xAE71, 0xA6)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8CA2)
  expect(cpu.r1.bc).toEqual(0x35D8)
  expect(cpu.r1.de).toEqual(0x7C1A)
  expect(cpu.r1.hl).toEqual(0x1C0A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x62BB)
  expect(cpu.r1.iy).toEqual(0xAEC6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fd36', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE0F9
  cpu.r1.bc = 0xAE1F
  cpu.r1.de = 0x4AEF
  cpu.r1.hl = 0xC9D5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC0DB
  cpu.r1.iy = 0xBDD4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x36)
  mem.write8(0x0002, 0x81)
  mem.write8(0x0003, 0xC5)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE0F9)
  expect(cpu.r1.bc).toEqual(0xAE1F)
  expect(cpu.r1.de).toEqual(0x4AEF)
  expect(cpu.r1.hl).toEqual(0xC9D5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC0DB)
  expect(cpu.r1.iy).toEqual(0xBDD4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd39', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2603
  cpu.r1.bc = 0x726F
  cpu.r1.de = 0x9C7F
  cpu.r1.hl = 0xCD46
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDC45
  cpu.r1.iy = 0x54D5
  cpu.sp = 0xDC57
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x39)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2631)
  expect(cpu.r1.bc).toEqual(0x726F)
  expect(cpu.r1.de).toEqual(0x9C7F)
  expect(cpu.r1.hl).toEqual(0xCD46)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDC45)
  expect(cpu.r1.iy).toEqual(0x312C)
  expect(cpu.sp).toEqual(0xDC57)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test fd44', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0E58
  cpu.r1.bc = 0x7192
  cpu.r1.de = 0x3580
  cpu.r1.hl = 0x9BE4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1B79
  cpu.r1.iy = 0x685E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x44)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0E58)
  expect(cpu.r1.bc).toEqual(0x6892)
  expect(cpu.r1.de).toEqual(0x3580)
  expect(cpu.r1.hl).toEqual(0x9BE4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1B79)
  expect(cpu.r1.iy).toEqual(0x685E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd45', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6555
  cpu.r1.bc = 0xA488
  cpu.r1.de = 0x5AE8
  cpu.r1.hl = 0xC948
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD7B8
  cpu.r1.iy = 0xA177
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x45)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6555)
  expect(cpu.r1.bc).toEqual(0x7788)
  expect(cpu.r1.de).toEqual(0x5AE8)
  expect(cpu.r1.hl).toEqual(0xC948)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD7B8)
  expect(cpu.r1.iy).toEqual(0xA177)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd46', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x87F3
  cpu.r1.bc = 0x17D5
  cpu.r1.de = 0x5EEA
  cpu.r1.hl = 0x830B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDCEE
  cpu.r1.iy = 0x3AFC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x46)
  mem.write8(0x0002, 0x4D)
  mem.write8(0x3B49, 0xC9)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x87F3)
  expect(cpu.r1.bc).toEqual(0xC9D5)
  expect(cpu.r1.de).toEqual(0x5EEA)
  expect(cpu.r1.hl).toEqual(0x830B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDCEE)
  expect(cpu.r1.iy).toEqual(0x3AFC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd4c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7E6B
  cpu.r1.bc = 0xBD4B
  cpu.r1.de = 0x24B6
  cpu.r1.hl = 0xFF94
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x862D
  cpu.r1.iy = 0x01D0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x4C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7E6B)
  expect(cpu.r1.bc).toEqual(0xBD01)
  expect(cpu.r1.de).toEqual(0x24B6)
  expect(cpu.r1.hl).toEqual(0xFF94)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x862D)
  expect(cpu.r1.iy).toEqual(0x01D0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd4d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x50CF
  cpu.r1.bc = 0xE3FE
  cpu.r1.de = 0x998E
  cpu.r1.hl = 0xDBA2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC4F5
  cpu.r1.iy = 0xC7C9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x4D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x50CF)
  expect(cpu.r1.bc).toEqual(0xE3C9)
  expect(cpu.r1.de).toEqual(0x998E)
  expect(cpu.r1.hl).toEqual(0xDBA2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC4F5)
  expect(cpu.r1.iy).toEqual(0xC7C9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd4e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2C0F
  cpu.r1.bc = 0x69D7
  cpu.r1.de = 0x748A
  cpu.r1.hl = 0x9290
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x904F
  cpu.r1.iy = 0xBB9A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x4E)
  mem.write8(0x0002, 0x67)
  mem.write8(0xBC01, 0x9D)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2C0F)
  expect(cpu.r1.bc).toEqual(0x699D)
  expect(cpu.r1.de).toEqual(0x748A)
  expect(cpu.r1.hl).toEqual(0x9290)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x904F)
  expect(cpu.r1.iy).toEqual(0xBB9A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd54', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD7F9
  cpu.r1.bc = 0xF65B
  cpu.r1.de = 0xB001
  cpu.r1.hl = 0xD4C4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4B8E
  cpu.r1.iy = 0xD437
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x54)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD7F9)
  expect(cpu.r1.bc).toEqual(0xF65B)
  expect(cpu.r1.de).toEqual(0xD401)
  expect(cpu.r1.hl).toEqual(0xD4C4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4B8E)
  expect(cpu.r1.iy).toEqual(0xD437)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd55', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAB98
  cpu.r1.bc = 0xFDAB
  cpu.r1.de = 0x254A
  cpu.r1.hl = 0x010E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x126B
  cpu.r1.iy = 0x13A9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x55)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAB98)
  expect(cpu.r1.bc).toEqual(0xFDAB)
  expect(cpu.r1.de).toEqual(0xA94A)
  expect(cpu.r1.hl).toEqual(0x010E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x126B)
  expect(cpu.r1.iy).toEqual(0x13A9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd56', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD3E8
  cpu.r1.bc = 0xDF10
  cpu.r1.de = 0x5442
  cpu.r1.hl = 0xB641
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA5A0
  cpu.r1.iy = 0xFDA2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x56)
  mem.write8(0x0002, 0xCE)
  mem.write8(0xFD70, 0x78)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD3E8)
  expect(cpu.r1.bc).toEqual(0xDF10)
  expect(cpu.r1.de).toEqual(0x7842)
  expect(cpu.r1.hl).toEqual(0xB641)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA5A0)
  expect(cpu.r1.iy).toEqual(0xFDA2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd5c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x11D5
  cpu.r1.bc = 0xC489
  cpu.r1.de = 0xE220
  cpu.r1.hl = 0x434E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3244
  cpu.r1.iy = 0xD8BB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x5C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x11D5)
  expect(cpu.r1.bc).toEqual(0xC489)
  expect(cpu.r1.de).toEqual(0xE2D8)
  expect(cpu.r1.hl).toEqual(0x434E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3244)
  expect(cpu.r1.iy).toEqual(0xD8BB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd5d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE945
  cpu.r1.bc = 0xDBAE
  cpu.r1.de = 0x32EA
  cpu.r1.hl = 0x4F7E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFA56
  cpu.r1.iy = 0x074E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x5D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE945)
  expect(cpu.r1.bc).toEqual(0xDBAE)
  expect(cpu.r1.de).toEqual(0x324E)
  expect(cpu.r1.hl).toEqual(0x4F7E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFA56)
  expect(cpu.r1.iy).toEqual(0x074E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd5e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6F3B
  cpu.r1.bc = 0xE9DC
  cpu.r1.de = 0x7A06
  cpu.r1.hl = 0x14F3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEC76
  cpu.r1.iy = 0x8AAA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x5E)
  mem.write8(0x0002, 0xC6)
  mem.write8(0x8A70, 0x8C)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6F3B)
  expect(cpu.r1.bc).toEqual(0xE9DC)
  expect(cpu.r1.de).toEqual(0x7A8C)
  expect(cpu.r1.hl).toEqual(0x14F3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEC76)
  expect(cpu.r1.iy).toEqual(0x8AAA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd60', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8579
  cpu.r1.bc = 0x005D
  cpu.r1.de = 0xD9EE
  cpu.r1.hl = 0xFAEE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x382D
  cpu.r1.iy = 0x2F95
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x60)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8579)
  expect(cpu.r1.bc).toEqual(0x005D)
  expect(cpu.r1.de).toEqual(0xD9EE)
  expect(cpu.r1.hl).toEqual(0xFAEE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x382D)
  expect(cpu.r1.iy).toEqual(0x0095)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd61', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5682
  cpu.r1.bc = 0xDBC3
  cpu.r1.de = 0xB495
  cpu.r1.hl = 0x9799
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x85B2
  cpu.r1.iy = 0x3C1E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x61)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5682)
  expect(cpu.r1.bc).toEqual(0xDBC3)
  expect(cpu.r1.de).toEqual(0xB495)
  expect(cpu.r1.hl).toEqual(0x9799)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x85B2)
  expect(cpu.r1.iy).toEqual(0xC31E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd62', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x906B
  cpu.r1.bc = 0xF52E
  cpu.r1.de = 0xF3D8
  cpu.r1.hl = 0x1E8C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDDBA
  cpu.r1.iy = 0x9A02
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x62)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x906B)
  expect(cpu.r1.bc).toEqual(0xF52E)
  expect(cpu.r1.de).toEqual(0xF3D8)
  expect(cpu.r1.hl).toEqual(0x1E8C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDDBA)
  expect(cpu.r1.iy).toEqual(0xF302)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd63', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9D59
  cpu.r1.bc = 0xBEB9
  cpu.r1.de = 0xD826
  cpu.r1.hl = 0x0EAA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4290
  cpu.r1.iy = 0xA4B9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x63)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9D59)
  expect(cpu.r1.bc).toEqual(0xBEB9)
  expect(cpu.r1.de).toEqual(0xD826)
  expect(cpu.r1.hl).toEqual(0x0EAA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4290)
  expect(cpu.r1.iy).toEqual(0x26B9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd64', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7B0E
  cpu.r1.bc = 0xE394
  cpu.r1.de = 0x8A25
  cpu.r1.hl = 0xCDDF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9784
  cpu.r1.iy = 0x2116
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x64)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7B0E)
  expect(cpu.r1.bc).toEqual(0xE394)
  expect(cpu.r1.de).toEqual(0x8A25)
  expect(cpu.r1.hl).toEqual(0xCDDF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9784)
  expect(cpu.r1.iy).toEqual(0x2116)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd65', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB827
  cpu.r1.bc = 0xEB4F
  cpu.r1.de = 0xF666
  cpu.r1.hl = 0xC52A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6206
  cpu.r1.iy = 0x831F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x65)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB827)
  expect(cpu.r1.bc).toEqual(0xEB4F)
  expect(cpu.r1.de).toEqual(0xF666)
  expect(cpu.r1.hl).toEqual(0xC52A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6206)
  expect(cpu.r1.iy).toEqual(0x1F1F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd66', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9129
  cpu.r1.bc = 0xE4EE
  cpu.r1.de = 0xE3A3
  cpu.r1.hl = 0x86CA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4D93
  cpu.r1.iy = 0x5B24
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x66)
  mem.write8(0x0002, 0x80)
  mem.write8(0x5AA4, 0x77)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9129)
  expect(cpu.r1.bc).toEqual(0xE4EE)
  expect(cpu.r1.de).toEqual(0xE3A3)
  expect(cpu.r1.hl).toEqual(0x77CA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4D93)
  expect(cpu.r1.iy).toEqual(0x5B24)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd67', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDB7A
  cpu.r1.bc = 0xB40B
  cpu.r1.de = 0x7B58
  cpu.r1.hl = 0x49FD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x266F
  cpu.r1.iy = 0x9E7B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x67)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDB7A)
  expect(cpu.r1.bc).toEqual(0xB40B)
  expect(cpu.r1.de).toEqual(0x7B58)
  expect(cpu.r1.hl).toEqual(0x49FD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x266F)
  expect(cpu.r1.iy).toEqual(0xDB7B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd68', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4D1D
  cpu.r1.bc = 0x4FD9
  cpu.r1.de = 0x783E
  cpu.r1.hl = 0x0745
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0C3D
  cpu.r1.iy = 0x82B5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x68)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4D1D)
  expect(cpu.r1.bc).toEqual(0x4FD9)
  expect(cpu.r1.de).toEqual(0x783E)
  expect(cpu.r1.hl).toEqual(0x0745)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0C3D)
  expect(cpu.r1.iy).toEqual(0x824F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd69', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1589
  cpu.r1.bc = 0x5CEB
  cpu.r1.de = 0xB5DB
  cpu.r1.hl = 0x922A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3C3A
  cpu.r1.iy = 0xDC98
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x69)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1589)
  expect(cpu.r1.bc).toEqual(0x5CEB)
  expect(cpu.r1.de).toEqual(0xB5DB)
  expect(cpu.r1.hl).toEqual(0x922A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3C3A)
  expect(cpu.r1.iy).toEqual(0xDCEB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd6a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x607A
  cpu.r1.bc = 0xE035
  cpu.r1.de = 0x5BB9
  cpu.r1.hl = 0xDAC0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFC04
  cpu.r1.iy = 0xB5B7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x6A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x607A)
  expect(cpu.r1.bc).toEqual(0xE035)
  expect(cpu.r1.de).toEqual(0x5BB9)
  expect(cpu.r1.hl).toEqual(0xDAC0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFC04)
  expect(cpu.r1.iy).toEqual(0xB55B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd6b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDB2A
  cpu.r1.bc = 0xE244
  cpu.r1.de = 0x1182
  cpu.r1.hl = 0x096F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x198E
  cpu.r1.iy = 0x91A6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x6B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDB2A)
  expect(cpu.r1.bc).toEqual(0xE244)
  expect(cpu.r1.de).toEqual(0x1182)
  expect(cpu.r1.hl).toEqual(0x096F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x198E)
  expect(cpu.r1.iy).toEqual(0x9182)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd6c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA0BE
  cpu.r1.bc = 0x34EF
  cpu.r1.de = 0x8FCD
  cpu.r1.hl = 0x40A7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4481
  cpu.r1.iy = 0xC215
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x6C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA0BE)
  expect(cpu.r1.bc).toEqual(0x34EF)
  expect(cpu.r1.de).toEqual(0x8FCD)
  expect(cpu.r1.hl).toEqual(0x40A7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4481)
  expect(cpu.r1.iy).toEqual(0xC2C2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd6d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFDFC
  cpu.r1.bc = 0x727A
  cpu.r1.de = 0xB839
  cpu.r1.hl = 0x50A6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE782
  cpu.r1.iy = 0x02E5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x6D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFDFC)
  expect(cpu.r1.bc).toEqual(0x727A)
  expect(cpu.r1.de).toEqual(0xB839)
  expect(cpu.r1.hl).toEqual(0x50A6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE782)
  expect(cpu.r1.iy).toEqual(0x02E5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd6e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCFD4
  cpu.r1.bc = 0x6EF1
  cpu.r1.de = 0xC07D
  cpu.r1.hl = 0xEB96
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB0F9
  cpu.r1.iy = 0xB0A3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x6E)
  mem.write8(0x0002, 0x78)
  mem.write8(0xB11B, 0xF8)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCFD4)
  expect(cpu.r1.bc).toEqual(0x6EF1)
  expect(cpu.r1.de).toEqual(0xC07D)
  expect(cpu.r1.hl).toEqual(0xEBF8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB0F9)
  expect(cpu.r1.iy).toEqual(0xB0A3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd6f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8E1D
  cpu.r1.bc = 0xA138
  cpu.r1.de = 0xF20A
  cpu.r1.hl = 0x298E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB600
  cpu.r1.iy = 0x0CF7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x6F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8E1D)
  expect(cpu.r1.bc).toEqual(0xA138)
  expect(cpu.r1.de).toEqual(0xF20A)
  expect(cpu.r1.hl).toEqual(0x298E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB600)
  expect(cpu.r1.iy).toEqual(0x0C8E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd70', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2677
  cpu.r1.bc = 0x33C5
  cpu.r1.de = 0xC0DC
  cpu.r1.hl = 0x262F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD3DC
  cpu.r1.iy = 0x23A1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x70)
  mem.write8(0x0002, 0x53)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2677)
  expect(cpu.r1.bc).toEqual(0x33C5)
  expect(cpu.r1.de).toEqual(0xC0DC)
  expect(cpu.r1.hl).toEqual(0x262F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD3DC)
  expect(cpu.r1.iy).toEqual(0x23A1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd71', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x892E
  cpu.r1.bc = 0x04AE
  cpu.r1.de = 0xD67F
  cpu.r1.hl = 0x81EC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7757
  cpu.r1.iy = 0xBFAB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x71)
  mem.write8(0x0002, 0xB4)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x892E)
  expect(cpu.r1.bc).toEqual(0x04AE)
  expect(cpu.r1.de).toEqual(0xD67F)
  expect(cpu.r1.hl).toEqual(0x81EC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7757)
  expect(cpu.r1.iy).toEqual(0xBFAB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd72', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD2DC
  cpu.r1.bc = 0xC23C
  cpu.r1.de = 0xDD54
  cpu.r1.hl = 0x6559
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB32B
  cpu.r1.iy = 0x7C80
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x72)
  mem.write8(0x0002, 0xE3)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD2DC)
  expect(cpu.r1.bc).toEqual(0xC23C)
  expect(cpu.r1.de).toEqual(0xDD54)
  expect(cpu.r1.hl).toEqual(0x6559)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB32B)
  expect(cpu.r1.iy).toEqual(0x7C80)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd73', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x49EF
  cpu.r1.bc = 0xBFF2
  cpu.r1.de = 0x8409
  cpu.r1.hl = 0x02DD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAF95
  cpu.r1.iy = 0x8762
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x73)
  mem.write8(0x0002, 0x17)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x49EF)
  expect(cpu.r1.bc).toEqual(0xBFF2)
  expect(cpu.r1.de).toEqual(0x8409)
  expect(cpu.r1.hl).toEqual(0x02DD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAF95)
  expect(cpu.r1.iy).toEqual(0x8762)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd74', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9479
  cpu.r1.bc = 0x9817
  cpu.r1.de = 0xFA2E
  cpu.r1.hl = 0x1FE0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA395
  cpu.r1.iy = 0x92DB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x74)
  mem.write8(0x0002, 0xF6)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9479)
  expect(cpu.r1.bc).toEqual(0x9817)
  expect(cpu.r1.de).toEqual(0xFA2E)
  expect(cpu.r1.hl).toEqual(0x1FE0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA395)
  expect(cpu.r1.iy).toEqual(0x92DB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd75', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC8D6
  cpu.r1.bc = 0x6AA4
  cpu.r1.de = 0x180E
  cpu.r1.hl = 0xE37B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x02CF
  cpu.r1.iy = 0x1724
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x75)
  mem.write8(0x0002, 0xAB)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC8D6)
  expect(cpu.r1.bc).toEqual(0x6AA4)
  expect(cpu.r1.de).toEqual(0x180E)
  expect(cpu.r1.hl).toEqual(0xE37B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x02CF)
  expect(cpu.r1.iy).toEqual(0x1724)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd77', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6F9E
  cpu.r1.bc = 0x7475
  cpu.r1.de = 0x78AD
  cpu.r1.hl = 0x2B8C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC6B7
  cpu.r1.iy = 0x6B4D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x77)
  mem.write8(0x0002, 0xF7)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6F9E)
  expect(cpu.r1.bc).toEqual(0x7475)
  expect(cpu.r1.de).toEqual(0x78AD)
  expect(cpu.r1.hl).toEqual(0x2B8C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC6B7)
  expect(cpu.r1.iy).toEqual(0x6B4D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd7c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF228
  cpu.r1.bc = 0x93FC
  cpu.r1.de = 0xA3D4
  cpu.r1.hl = 0xDC9E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x21AC
  cpu.r1.iy = 0xC617
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x7C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC628)
  expect(cpu.r1.bc).toEqual(0x93FC)
  expect(cpu.r1.de).toEqual(0xA3D4)
  expect(cpu.r1.hl).toEqual(0xDC9E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x21AC)
  expect(cpu.r1.iy).toEqual(0xC617)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd7d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x93E5
  cpu.r1.bc = 0x3CBE
  cpu.r1.de = 0x02C3
  cpu.r1.hl = 0x26C2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCA81
  cpu.r1.iy = 0x92B9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x7D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB9E5)
  expect(cpu.r1.bc).toEqual(0x3CBE)
  expect(cpu.r1.de).toEqual(0x02C3)
  expect(cpu.r1.hl).toEqual(0x26C2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCA81)
  expect(cpu.r1.iy).toEqual(0x92B9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd7e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1596
  cpu.r1.bc = 0xDABA
  cpu.r1.de = 0x147B
  cpu.r1.hl = 0xF362
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7110
  cpu.r1.iy = 0xD45F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x7E)
  mem.write8(0x0002, 0xE4)
  mem.write8(0xD443, 0xAA)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAA96)
  expect(cpu.r1.bc).toEqual(0xDABA)
  expect(cpu.r1.de).toEqual(0x147B)
  expect(cpu.r1.hl).toEqual(0xF362)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7110)
  expect(cpu.r1.iy).toEqual(0xD45F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd84', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBFBA
  cpu.r1.bc = 0x7CAE
  cpu.r1.de = 0xC4DA
  cpu.r1.hl = 0x7AEE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x43EE
  cpu.r1.iy = 0xC08E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x84)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7F2D)
  expect(cpu.r1.bc).toEqual(0x7CAE)
  expect(cpu.r1.de).toEqual(0xC4DA)
  expect(cpu.r1.hl).toEqual(0x7AEE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x43EE)
  expect(cpu.r1.iy).toEqual(0xC08E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd85', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x52DD
  cpu.r1.bc = 0x1DEA
  cpu.r1.de = 0x324F
  cpu.r1.hl = 0x84E7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE7A8
  cpu.r1.iy = 0xF799
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x85)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEBA8)
  expect(cpu.r1.bc).toEqual(0x1DEA)
  expect(cpu.r1.de).toEqual(0x324F)
  expect(cpu.r1.hl).toEqual(0x84E7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE7A8)
  expect(cpu.r1.iy).toEqual(0xF799)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd86', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFC9C
  cpu.r1.bc = 0xB882
  cpu.r1.de = 0x43F9
  cpu.r1.hl = 0x3E15
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9781
  cpu.r1.iy = 0x8B33
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x86)
  mem.write8(0x0002, 0xCE)
  mem.write8(0x8B01, 0xE1)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDD89)
  expect(cpu.r1.bc).toEqual(0xB882)
  expect(cpu.r1.de).toEqual(0x43F9)
  expect(cpu.r1.hl).toEqual(0x3E15)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9781)
  expect(cpu.r1.iy).toEqual(0x8B33)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd8c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFD9C
  cpu.r1.bc = 0x42B1
  cpu.r1.de = 0x5E8A
  cpu.r1.hl = 0x081C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCB58
  cpu.r1.iy = 0x3B4E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x8C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3839)
  expect(cpu.r1.bc).toEqual(0x42B1)
  expect(cpu.r1.de).toEqual(0x5E8A)
  expect(cpu.r1.hl).toEqual(0x081C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCB58)
  expect(cpu.r1.iy).toEqual(0x3B4E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd8d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9301
  cpu.r1.bc = 0x7750
  cpu.r1.de = 0x8AD6
  cpu.r1.hl = 0x295C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x695C
  cpu.r1.iy = 0x99FB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x8D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8F89)
  expect(cpu.r1.bc).toEqual(0x7750)
  expect(cpu.r1.de).toEqual(0x8AD6)
  expect(cpu.r1.hl).toEqual(0x295C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x695C)
  expect(cpu.r1.iy).toEqual(0x99FB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd8e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x41EE
  cpu.r1.bc = 0x398F
  cpu.r1.de = 0xF6DC
  cpu.r1.hl = 0x06F3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF34A
  cpu.r1.iy = 0x1AA2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x8E)
  mem.write8(0x0002, 0x78)
  mem.write8(0x1B1A, 0xC0)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0101)
  expect(cpu.r1.bc).toEqual(0x398F)
  expect(cpu.r1.de).toEqual(0xF6DC)
  expect(cpu.r1.hl).toEqual(0x06F3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF34A)
  expect(cpu.r1.iy).toEqual(0x1AA2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd94', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0431
  cpu.r1.bc = 0xD255
  cpu.r1.de = 0xB9D6
  cpu.r1.hl = 0x20BB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1E6A
  cpu.r1.iy = 0xD5EF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x94)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2F3B)
  expect(cpu.r1.bc).toEqual(0xD255)
  expect(cpu.r1.de).toEqual(0xB9D6)
  expect(cpu.r1.hl).toEqual(0x20BB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1E6A)
  expect(cpu.r1.iy).toEqual(0xD5EF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd95', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8B5D
  cpu.r1.bc = 0xB455
  cpu.r1.de = 0x2388
  cpu.r1.hl = 0xEC1E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7637
  cpu.r1.iy = 0xCB97
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x95)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF4A3)
  expect(cpu.r1.bc).toEqual(0xB455)
  expect(cpu.r1.de).toEqual(0x2388)
  expect(cpu.r1.hl).toEqual(0xEC1E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7637)
  expect(cpu.r1.iy).toEqual(0xCB97)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd96', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA0C6
  cpu.r1.bc = 0x22AC
  cpu.r1.de = 0x0413
  cpu.r1.hl = 0x4B13
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB44E
  cpu.r1.iy = 0xC08B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x96)
  mem.write8(0x0002, 0x55)
  mem.write8(0xC0E0, 0x7B)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2536)
  expect(cpu.r1.bc).toEqual(0x22AC)
  expect(cpu.r1.de).toEqual(0x0413)
  expect(cpu.r1.hl).toEqual(0x4B13)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB44E)
  expect(cpu.r1.iy).toEqual(0xC08B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fd9c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA44A
  cpu.r1.bc = 0x3ECF
  cpu.r1.de = 0xCED3
  cpu.r1.hl = 0x66EC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4BFF
  cpu.r1.iy = 0xB133
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x9C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF3A3)
  expect(cpu.r1.bc).toEqual(0x3ECF)
  expect(cpu.r1.de).toEqual(0xCED3)
  expect(cpu.r1.hl).toEqual(0x66EC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4BFF)
  expect(cpu.r1.iy).toEqual(0xB133)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd9d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x06C0
  cpu.r1.bc = 0x8BD0
  cpu.r1.de = 0x131B
  cpu.r1.hl = 0x3094
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAFC3
  cpu.r1.iy = 0x7409
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x9D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFDBB)
  expect(cpu.r1.bc).toEqual(0x8BD0)
  expect(cpu.r1.de).toEqual(0x131B)
  expect(cpu.r1.hl).toEqual(0x3094)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAFC3)
  expect(cpu.r1.iy).toEqual(0x7409)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fd9e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB983
  cpu.r1.bc = 0x981F
  cpu.r1.de = 0xBB8E
  cpu.r1.hl = 0xD6D5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5C3B
  cpu.r1.iy = 0xF66C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0x9E)
  mem.write8(0x0002, 0xF9)
  mem.write8(0xF665, 0xF3)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC583)
  expect(cpu.r1.bc).toEqual(0x981F)
  expect(cpu.r1.de).toEqual(0xBB8E)
  expect(cpu.r1.hl).toEqual(0xD6D5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5C3B)
  expect(cpu.r1.iy).toEqual(0xF66C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fda4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB079
  cpu.r1.bc = 0x79C0
  cpu.r1.de = 0x2C7C
  cpu.r1.hl = 0x3E06
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7399
  cpu.r1.iy = 0x037A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xA4)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0054)
  expect(cpu.r1.bc).toEqual(0x79C0)
  expect(cpu.r1.de).toEqual(0x2C7C)
  expect(cpu.r1.hl).toEqual(0x3E06)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7399)
  expect(cpu.r1.iy).toEqual(0x037A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fda5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x01D2
  cpu.r1.bc = 0x654D
  cpu.r1.de = 0x9653
  cpu.r1.hl = 0x2B33
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x61A4
  cpu.r1.iy = 0x8F88
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xA5)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0054)
  expect(cpu.r1.bc).toEqual(0x654D)
  expect(cpu.r1.de).toEqual(0x9653)
  expect(cpu.r1.hl).toEqual(0x2B33)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x61A4)
  expect(cpu.r1.iy).toEqual(0x8F88)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fda6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDDB8
  cpu.r1.bc = 0x40BB
  cpu.r1.de = 0x3742
  cpu.r1.hl = 0x6FF1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAD28
  cpu.r1.iy = 0x659B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xA6)
  mem.write8(0x0002, 0x53)
  mem.write8(0x65EE, 0x95)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9594)
  expect(cpu.r1.bc).toEqual(0x40BB)
  expect(cpu.r1.de).toEqual(0x3742)
  expect(cpu.r1.hl).toEqual(0x6FF1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAD28)
  expect(cpu.r1.iy).toEqual(0x659B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fdac', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7A43
  cpu.r1.bc = 0x72E3
  cpu.r1.de = 0xDD4D
  cpu.r1.hl = 0x1B62
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4753
  cpu.r1.iy = 0x5D63
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xAC)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2724)
  expect(cpu.r1.bc).toEqual(0x72E3)
  expect(cpu.r1.de).toEqual(0xDD4D)
  expect(cpu.r1.hl).toEqual(0x1B62)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4753)
  expect(cpu.r1.iy).toEqual(0x5D63)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fdad', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7D8E
  cpu.r1.bc = 0x2573
  cpu.r1.de = 0x19CC
  cpu.r1.hl = 0x78FB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5248
  cpu.r1.iy = 0x8391
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xAD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xECA8)
  expect(cpu.r1.bc).toEqual(0x2573)
  expect(cpu.r1.de).toEqual(0x19CC)
  expect(cpu.r1.hl).toEqual(0x78FB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5248)
  expect(cpu.r1.iy).toEqual(0x8391)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fdae', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA0DA
  cpu.r1.bc = 0xBC27
  cpu.r1.de = 0x257B
  cpu.r1.hl = 0x5489
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFA59
  cpu.r1.iy = 0x81F8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xAE)
  mem.write8(0x0002, 0x09)
  mem.write8(0x8201, 0xCB)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6B28)
  expect(cpu.r1.bc).toEqual(0xBC27)
  expect(cpu.r1.de).toEqual(0x257B)
  expect(cpu.r1.hl).toEqual(0x5489)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFA59)
  expect(cpu.r1.iy).toEqual(0x81F8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fdb4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4F95
  cpu.r1.bc = 0x3461
  cpu.r1.de = 0xF173
  cpu.r1.hl = 0x8AD3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC1A2
  cpu.r1.iy = 0x8265
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xB4)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCF8C)
  expect(cpu.r1.bc).toEqual(0x3461)
  expect(cpu.r1.de).toEqual(0xF173)
  expect(cpu.r1.hl).toEqual(0x8AD3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC1A2)
  expect(cpu.r1.iy).toEqual(0x8265)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fdb5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x17F6
  cpu.r1.bc = 0xE6EA
  cpu.r1.de = 0xF919
  cpu.r1.hl = 0x327C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4299
  cpu.r1.iy = 0x9733
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xB5)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3720)
  expect(cpu.r1.bc).toEqual(0xE6EA)
  expect(cpu.r1.de).toEqual(0xF919)
  expect(cpu.r1.hl).toEqual(0x327C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4299)
  expect(cpu.r1.iy).toEqual(0x9733)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fdb6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDB37
  cpu.r1.bc = 0x3509
  cpu.r1.de = 0xD6CA
  cpu.r1.hl = 0xB16A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA099
  cpu.r1.iy = 0xDF6D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xB6)
  mem.write8(0x0002, 0x4B)
  mem.write8(0xDFB8, 0x64)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFFAC)
  expect(cpu.r1.bc).toEqual(0x3509)
  expect(cpu.r1.de).toEqual(0xD6CA)
  expect(cpu.r1.hl).toEqual(0xB16A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA099)
  expect(cpu.r1.iy).toEqual(0xDF6D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fdbc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB4FC
  cpu.r1.bc = 0x9302
  cpu.r1.de = 0xE35D
  cpu.r1.hl = 0x31BC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5C12
  cpu.r1.iy = 0x1C92
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xBC)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB49A)
  expect(cpu.r1.bc).toEqual(0x9302)
  expect(cpu.r1.de).toEqual(0xE35D)
  expect(cpu.r1.hl).toEqual(0x31BC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5C12)
  expect(cpu.r1.iy).toEqual(0x1C92)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fdbd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x391C
  cpu.r1.bc = 0x7B82
  cpu.r1.de = 0xDFEB
  cpu.r1.hl = 0x03EE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBE7B
  cpu.r1.iy = 0xB30F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xBD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x391A)
  expect(cpu.r1.bc).toEqual(0x7B82)
  expect(cpu.r1.de).toEqual(0xDFEB)
  expect(cpu.r1.hl).toEqual(0x03EE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBE7B)
  expect(cpu.r1.iy).toEqual(0xB30F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fdbe', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0970
  cpu.r1.bc = 0x0B31
  cpu.r1.de = 0xF4AD
  cpu.r1.hl = 0x9D4C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB95A
  cpu.r1.iy = 0xA96B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xBE)
  mem.write8(0x0002, 0x6B)
  mem.write8(0xA9D6, 0xC0)

  while (cpu.tStates < 19) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0903)
  expect(cpu.r1.bc).toEqual(0x0B31)
  expect(cpu.r1.de).toEqual(0xF4AD)
  expect(cpu.r1.hl).toEqual(0x9D4C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB95A)
  expect(cpu.r1.iy).toEqual(0xA96B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(19)
})

test('Test fde1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x828E
  cpu.r1.bc = 0x078B
  cpu.r1.de = 0x1E35
  cpu.r1.hl = 0x8F1C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4827
  cpu.r1.iy = 0xB742
  cpu.sp = 0x716E
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xE1)
  mem.write8(0x716E, 0xD5)
  mem.write8(0x716F, 0x92)

  while (cpu.tStates < 14) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x828E)
  expect(cpu.r1.bc).toEqual(0x078B)
  expect(cpu.r1.de).toEqual(0x1E35)
  expect(cpu.r1.hl).toEqual(0x8F1C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4827)
  expect(cpu.r1.iy).toEqual(0x92D5)
  expect(cpu.sp).toEqual(0x7170)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(14)
})

test('Test fde3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4298
  cpu.r1.bc = 0xC805
  cpu.r1.de = 0x6030
  cpu.r1.hl = 0x4292
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x473B
  cpu.r1.iy = 0x9510
  cpu.sp = 0x1A38
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xE3)
  mem.write8(0x1A38, 0xE0)
  mem.write8(0x1A39, 0x0F)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4298)
  expect(cpu.r1.bc).toEqual(0xC805)
  expect(cpu.r1.de).toEqual(0x6030)
  expect(cpu.r1.hl).toEqual(0x4292)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x473B)
  expect(cpu.r1.iy).toEqual(0x0FE0)
  expect(cpu.sp).toEqual(0x1A38)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fde5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD139
  cpu.r1.bc = 0xAA0D
  cpu.r1.de = 0xBF2B
  cpu.r1.hl = 0x2A56
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE138
  cpu.r1.iy = 0xD4DA
  cpu.sp = 0xA8E1
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xE5)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD139)
  expect(cpu.r1.bc).toEqual(0xAA0D)
  expect(cpu.r1.de).toEqual(0xBF2B)
  expect(cpu.r1.hl).toEqual(0x2A56)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE138)
  expect(cpu.r1.iy).toEqual(0xD4DA)
  expect(cpu.sp).toEqual(0xA8DF)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(15)
})

test('Test fde9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC14F
  cpu.r1.bc = 0x2EB6
  cpu.r1.de = 0xEDF0
  cpu.r1.hl = 0x27CF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x09EE
  cpu.r1.iy = 0xA2A4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xE9)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC14F)
  expect(cpu.r1.bc).toEqual(0x2EB6)
  expect(cpu.r1.de).toEqual(0xEDF0)
  expect(cpu.r1.hl).toEqual(0x27CF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x09EE)
  expect(cpu.r1.iy).toEqual(0xA2A4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test fdf9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC260
  cpu.r1.bc = 0x992E
  cpu.r1.de = 0xD544
  cpu.r1.hl = 0x67FB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBA5E
  cpu.r1.iy = 0x3596
  cpu.sp = 0x353F
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xF9)

  while (cpu.tStates < 10) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC260)
  expect(cpu.r1.bc).toEqual(0x992E)
  expect(cpu.r1.de).toEqual(0xD544)
  expect(cpu.r1.hl).toEqual(0x67FB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBA5E)
  expect(cpu.r1.iy).toEqual(0x3596)
  expect(cpu.sp).toEqual(0x3596)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(10)
})

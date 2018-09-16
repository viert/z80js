const Memory = require("../src/memory")
const Z80 = require("../index")
const { FakePort } = require("../src/port")

test('Test fdcb00', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x85AC
  cpu.r1.bc = 0x46D0
  cpu.r1.de = 0xA135
  cpu.r1.hl = 0x20C5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB8DE
  cpu.r1.iy = 0x2776
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0B)
  mem.write8(0x0003, 0x00)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x2781, 0x50)
  mem.write8(0x2782, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x85A4)
  expect(cpu.r1.bc).toEqual(0xA0D0)
  expect(cpu.r1.de).toEqual(0xA135)
  expect(cpu.r1.hl).toEqual(0x20C5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB8DE)
  expect(cpu.r1.iy).toEqual(0x2776)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb01', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x577C
  cpu.r1.bc = 0x2B76
  cpu.r1.de = 0x3576
  cpu.r1.hl = 0x280A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAE22
  cpu.r1.iy = 0x5C35
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC8)
  mem.write8(0x0003, 0x01)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5BFD, 0xCB)
  mem.write8(0x5BFE, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5781)
  expect(cpu.r1.bc).toEqual(0x2B97)
  expect(cpu.r1.de).toEqual(0x3576)
  expect(cpu.r1.hl).toEqual(0x280A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAE22)
  expect(cpu.r1.iy).toEqual(0x5C35)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb02', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDC23
  cpu.r1.bc = 0x2B37
  cpu.r1.de = 0x83C8
  cpu.r1.hl = 0x5DD9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB2D2
  cpu.r1.iy = 0x3DF2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x14)
  mem.write8(0x0003, 0x02)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3E06, 0x58)
  mem.write8(0x3E07, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDCA0)
  expect(cpu.r1.bc).toEqual(0x2B37)
  expect(cpu.r1.de).toEqual(0xB0C8)
  expect(cpu.r1.hl).toEqual(0x5DD9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB2D2)
  expect(cpu.r1.iy).toEqual(0x3DF2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb03', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x57EE
  cpu.r1.bc = 0xC179
  cpu.r1.de = 0xB2B6
  cpu.r1.hl = 0x7058
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3F2E
  cpu.r1.iy = 0x57E7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3A)
  mem.write8(0x0003, 0x03)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5821, 0x1A)
  mem.write8(0x5822, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5720)
  expect(cpu.r1.bc).toEqual(0xC179)
  expect(cpu.r1.de).toEqual(0xB234)
  expect(cpu.r1.hl).toEqual(0x7058)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3F2E)
  expect(cpu.r1.iy).toEqual(0x57E7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb04', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xED18
  cpu.r1.bc = 0x3F03
  cpu.r1.de = 0x3327
  cpu.r1.hl = 0xF35A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCBF2
  cpu.r1.iy = 0x5071
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x67)
  mem.write8(0x0003, 0x04)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x50D8, 0x92)
  mem.write8(0x50D9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xED21)
  expect(cpu.r1.bc).toEqual(0x3F03)
  expect(cpu.r1.de).toEqual(0x3327)
  expect(cpu.r1.hl).toEqual(0x255A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCBF2)
  expect(cpu.r1.iy).toEqual(0x5071)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb05', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7A39
  cpu.r1.bc = 0x0858
  cpu.r1.de = 0xDB6C
  cpu.r1.hl = 0xDBE0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x157A
  cpu.r1.iy = 0xB25B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1E)
  mem.write8(0x0003, 0x05)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB279, 0x66)
  mem.write8(0xB27A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7A8C)
  expect(cpu.r1.bc).toEqual(0x0858)
  expect(cpu.r1.de).toEqual(0xDB6C)
  expect(cpu.r1.hl).toEqual(0xDBCC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x157A)
  expect(cpu.r1.iy).toEqual(0xB25B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb06', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF285
  cpu.r1.bc = 0x89A2
  cpu.r1.de = 0xE78F
  cpu.r1.hl = 0xEF74
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x140D
  cpu.r1.iy = 0xFF27
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x72)
  mem.write8(0x0003, 0x06)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xFF99, 0xF1)
  mem.write8(0xFF9A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF2A1)
  expect(cpu.r1.bc).toEqual(0x89A2)
  expect(cpu.r1.de).toEqual(0xE78F)
  expect(cpu.r1.hl).toEqual(0xEF74)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x140D)
  expect(cpu.r1.iy).toEqual(0xFF27)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb07', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8CCE
  cpu.r1.bc = 0xF3A7
  cpu.r1.de = 0x3A6E
  cpu.r1.hl = 0x8F0A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8423
  cpu.r1.iy = 0x07EB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x24)
  mem.write8(0x0003, 0x07)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x080F, 0xAE)
  mem.write8(0x0810, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5D09)
  expect(cpu.r1.bc).toEqual(0xF3A7)
  expect(cpu.r1.de).toEqual(0x3A6E)
  expect(cpu.r1.hl).toEqual(0x8F0A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8423)
  expect(cpu.r1.iy).toEqual(0x07EB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb08', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA611
  cpu.r1.bc = 0xE8EC
  cpu.r1.de = 0xC958
  cpu.r1.hl = 0x7BDA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x194D
  cpu.r1.iy = 0x6137
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x25)
  mem.write8(0x0003, 0x08)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x615C, 0x83)
  mem.write8(0x615D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA681)
  expect(cpu.r1.bc).toEqual(0xC1EC)
  expect(cpu.r1.de).toEqual(0xC958)
  expect(cpu.r1.hl).toEqual(0x7BDA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x194D)
  expect(cpu.r1.iy).toEqual(0x6137)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb09', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x54B1
  cpu.r1.bc = 0xFA1A
  cpu.r1.de = 0x84E8
  cpu.r1.hl = 0x4FA5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1AD3
  cpu.r1.iy = 0x19DA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA0)
  mem.write8(0x0003, 0x09)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x197A, 0x27)
  mem.write8(0x197B, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5485)
  expect(cpu.r1.bc).toEqual(0xFA93)
  expect(cpu.r1.de).toEqual(0x84E8)
  expect(cpu.r1.hl).toEqual(0x4FA5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1AD3)
  expect(cpu.r1.iy).toEqual(0x19DA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb0a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB3EF
  cpu.r1.bc = 0xA2BB
  cpu.r1.de = 0xE5D6
  cpu.r1.hl = 0x9617
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF946
  cpu.r1.iy = 0xEEF6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE1)
  mem.write8(0x0003, 0x0A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xEED7, 0x19)
  mem.write8(0xEED8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB389)
  expect(cpu.r1.bc).toEqual(0xA2BB)
  expect(cpu.r1.de).toEqual(0x8CD6)
  expect(cpu.r1.hl).toEqual(0x9617)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF946)
  expect(cpu.r1.iy).toEqual(0xEEF6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb0b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAE10
  cpu.r1.bc = 0x8C4E
  cpu.r1.de = 0xE159
  cpu.r1.hl = 0x1C54
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE108
  cpu.r1.iy = 0xC68F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0C)
  mem.write8(0x0003, 0x0B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC69B, 0xF2)
  mem.write8(0xC69C, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAE28)
  expect(cpu.r1.bc).toEqual(0x8C4E)
  expect(cpu.r1.de).toEqual(0xE179)
  expect(cpu.r1.hl).toEqual(0x1C54)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE108)
  expect(cpu.r1.iy).toEqual(0xC68F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb0c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8719
  cpu.r1.bc = 0x6B16
  cpu.r1.de = 0x4C3B
  cpu.r1.hl = 0x180A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x175A
  cpu.r1.iy = 0x8C9D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD7)
  mem.write8(0x0003, 0x0C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8C74, 0xAE)
  mem.write8(0x8C75, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8700)
  expect(cpu.r1.bc).toEqual(0x6B16)
  expect(cpu.r1.de).toEqual(0x4C3B)
  expect(cpu.r1.hl).toEqual(0x570A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x175A)
  expect(cpu.r1.iy).toEqual(0x8C9D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb0d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1204
  cpu.r1.bc = 0xE0CB
  cpu.r1.de = 0x3AB1
  cpu.r1.hl = 0x2416
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1DE4
  cpu.r1.iy = 0xFE2D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x11)
  mem.write8(0x0003, 0x0D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xFE3E, 0x1B)
  mem.write8(0xFE3F, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x128D)
  expect(cpu.r1.bc).toEqual(0xE0CB)
  expect(cpu.r1.de).toEqual(0x3AB1)
  expect(cpu.r1.hl).toEqual(0x248D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1DE4)
  expect(cpu.r1.iy).toEqual(0xFE2D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb0e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8DA4
  cpu.r1.bc = 0x8F91
  cpu.r1.de = 0xFC5A
  cpu.r1.hl = 0x5E2C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB2F2
  cpu.r1.iy = 0xF223
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0C)
  mem.write8(0x0003, 0x0E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF22F, 0xF7)
  mem.write8(0xF230, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8DA9)
  expect(cpu.r1.bc).toEqual(0x8F91)
  expect(cpu.r1.de).toEqual(0xFC5A)
  expect(cpu.r1.hl).toEqual(0x5E2C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB2F2)
  expect(cpu.r1.iy).toEqual(0xF223)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb0f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFBB0
  cpu.r1.bc = 0x2AC9
  cpu.r1.de = 0xEC6B
  cpu.r1.hl = 0x6511
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC93A
  cpu.r1.iy = 0xCE38
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x15)
  mem.write8(0x0003, 0x0F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xCE4D, 0x44)
  mem.write8(0xCE4E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2224)
  expect(cpu.r1.bc).toEqual(0x2AC9)
  expect(cpu.r1.de).toEqual(0xEC6B)
  expect(cpu.r1.hl).toEqual(0x6511)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC93A)
  expect(cpu.r1.iy).toEqual(0xCE38)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb10', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x259D
  cpu.r1.bc = 0x3852
  cpu.r1.de = 0x590D
  cpu.r1.hl = 0xAC66
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x144F
  cpu.r1.iy = 0x42A2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7A)
  mem.write8(0x0003, 0x10)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x431C, 0x1C)
  mem.write8(0x431D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x252C)
  expect(cpu.r1.bc).toEqual(0x3952)
  expect(cpu.r1.de).toEqual(0x590D)
  expect(cpu.r1.hl).toEqual(0xAC66)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x144F)
  expect(cpu.r1.iy).toEqual(0x42A2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb11', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBC60
  cpu.r1.bc = 0x61C1
  cpu.r1.de = 0xF5F8
  cpu.r1.hl = 0xAF24
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4019
  cpu.r1.iy = 0x9C90
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7B)
  mem.write8(0x0003, 0x11)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x9D0B, 0x5E)
  mem.write8(0x9D0C, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBCA8)
  expect(cpu.r1.bc).toEqual(0x61BC)
  expect(cpu.r1.de).toEqual(0xF5F8)
  expect(cpu.r1.hl).toEqual(0xAF24)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4019)
  expect(cpu.r1.iy).toEqual(0x9C90)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb12', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4E45
  cpu.r1.bc = 0x3A25
  cpu.r1.de = 0x3417
  cpu.r1.hl = 0xBCC7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0D7E
  cpu.r1.iy = 0x8537
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x61)
  mem.write8(0x0003, 0x12)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8598, 0xA7)
  mem.write8(0x8599, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4E09)
  expect(cpu.r1.bc).toEqual(0x3A25)
  expect(cpu.r1.de).toEqual(0x4F17)
  expect(cpu.r1.hl).toEqual(0xBCC7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0D7E)
  expect(cpu.r1.iy).toEqual(0x8537)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb13', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB224
  cpu.r1.bc = 0xB79B
  cpu.r1.de = 0x84F1
  cpu.r1.hl = 0xFF7D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x414C
  cpu.r1.iy = 0xE798
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB3)
  mem.write8(0x0003, 0x13)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE74B, 0xB3)
  mem.write8(0xE74C, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB225)
  expect(cpu.r1.bc).toEqual(0xB79B)
  expect(cpu.r1.de).toEqual(0x8466)
  expect(cpu.r1.hl).toEqual(0xFF7D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x414C)
  expect(cpu.r1.iy).toEqual(0xE798)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb14', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xABBB
  cpu.r1.bc = 0x451A
  cpu.r1.de = 0xFC65
  cpu.r1.hl = 0x14A1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0F4D
  cpu.r1.iy = 0xD93C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC4)
  mem.write8(0x0003, 0x14)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD900, 0x06)
  mem.write8(0xD901, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAB08)
  expect(cpu.r1.bc).toEqual(0x451A)
  expect(cpu.r1.de).toEqual(0xFC65)
  expect(cpu.r1.hl).toEqual(0x0DA1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0F4D)
  expect(cpu.r1.iy).toEqual(0xD93C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb15', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2864
  cpu.r1.bc = 0x9532
  cpu.r1.de = 0x8631
  cpu.r1.hl = 0x751C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE327
  cpu.r1.iy = 0x2D7B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x17)
  mem.write8(0x0003, 0x15)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x2D92, 0x12)
  mem.write8(0x2D93, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2824)
  expect(cpu.r1.bc).toEqual(0x9532)
  expect(cpu.r1.de).toEqual(0x8631)
  expect(cpu.r1.hl).toEqual(0x7524)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE327)
  expect(cpu.r1.iy).toEqual(0x2D7B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb16', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0C3C
  cpu.r1.bc = 0xDCD7
  cpu.r1.de = 0xADCC
  cpu.r1.hl = 0x196D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x87E2
  cpu.r1.iy = 0xF0B4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x23)
  mem.write8(0x0003, 0x16)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF0D7, 0x89)
  mem.write8(0xF0D8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0C05)
  expect(cpu.r1.bc).toEqual(0xDCD7)
  expect(cpu.r1.de).toEqual(0xADCC)
  expect(cpu.r1.hl).toEqual(0x196D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x87E2)
  expect(cpu.r1.iy).toEqual(0xF0B4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb17', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAF5B
  cpu.r1.bc = 0xD016
  cpu.r1.de = 0x066E
  cpu.r1.hl = 0x6638
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5E92
  cpu.r1.iy = 0x2013
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8A)
  mem.write8(0x0003, 0x17)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1F9D, 0xB8)
  mem.write8(0x1F9E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7125)
  expect(cpu.r1.bc).toEqual(0xD016)
  expect(cpu.r1.de).toEqual(0x066E)
  expect(cpu.r1.hl).toEqual(0x6638)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5E92)
  expect(cpu.r1.iy).toEqual(0x2013)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb18', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x23F3
  cpu.r1.bc = 0x4517
  cpu.r1.de = 0x16E0
  cpu.r1.hl = 0x6894
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB908
  cpu.r1.iy = 0x3216
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC0)
  mem.write8(0x0003, 0x18)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x31D6, 0xFA)
  mem.write8(0x31D7, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x23A8)
  expect(cpu.r1.bc).toEqual(0xFD17)
  expect(cpu.r1.de).toEqual(0x16E0)
  expect(cpu.r1.hl).toEqual(0x6894)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB908)
  expect(cpu.r1.iy).toEqual(0x3216)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb19', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x11ED
  cpu.r1.bc = 0xC2B8
  cpu.r1.de = 0xA9F3
  cpu.r1.hl = 0x2014
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6DB0
  cpu.r1.iy = 0x4D2E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA2)
  mem.write8(0x0003, 0x19)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4CD0, 0x4B)
  mem.write8(0x4CD1, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x11A5)
  expect(cpu.r1.bc).toEqual(0xC2A5)
  expect(cpu.r1.de).toEqual(0xA9F3)
  expect(cpu.r1.hl).toEqual(0x2014)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6DB0)
  expect(cpu.r1.iy).toEqual(0x4D2E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb1a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBC5C
  cpu.r1.bc = 0x6168
  cpu.r1.de = 0xE541
  cpu.r1.hl = 0xB630
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0207
  cpu.r1.iy = 0x40D3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x78)
  mem.write8(0x0003, 0x1A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x414B, 0x44)
  mem.write8(0x414C, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBC24)
  expect(cpu.r1.bc).toEqual(0x6168)
  expect(cpu.r1.de).toEqual(0x2241)
  expect(cpu.r1.hl).toEqual(0xB630)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0207)
  expect(cpu.r1.iy).toEqual(0x40D3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb1b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7A28
  cpu.r1.bc = 0x1286
  cpu.r1.de = 0xFE50
  cpu.r1.hl = 0xC42D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE290
  cpu.r1.iy = 0x71B0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x16)
  mem.write8(0x0003, 0x1B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x71C6, 0xB8)
  mem.write8(0x71C7, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7A0C)
  expect(cpu.r1.bc).toEqual(0x1286)
  expect(cpu.r1.de).toEqual(0xFE5C)
  expect(cpu.r1.hl).toEqual(0xC42D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE290)
  expect(cpu.r1.iy).toEqual(0x71B0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb1c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x932B
  cpu.r1.bc = 0x097B
  cpu.r1.de = 0x6928
  cpu.r1.hl = 0x83A3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFF2D
  cpu.r1.iy = 0xDF62
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x86)
  mem.write8(0x0003, 0x1C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xDEE8, 0x8F)
  mem.write8(0xDEE9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9381)
  expect(cpu.r1.bc).toEqual(0x097B)
  expect(cpu.r1.de).toEqual(0x6928)
  expect(cpu.r1.hl).toEqual(0xC7A3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFF2D)
  expect(cpu.r1.iy).toEqual(0xDF62)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb1d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x97B1
  cpu.r1.bc = 0x2B30
  cpu.r1.de = 0x2645
  cpu.r1.hl = 0x04EF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x186A
  cpu.r1.iy = 0xD667
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x27)
  mem.write8(0x0003, 0x1D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD68E, 0xB7)
  mem.write8(0xD68F, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x978D)
  expect(cpu.r1.bc).toEqual(0x2B30)
  expect(cpu.r1.de).toEqual(0x2645)
  expect(cpu.r1.hl).toEqual(0x04DB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x186A)
  expect(cpu.r1.iy).toEqual(0xD667)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb1e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2F39
  cpu.r1.bc = 0x2470
  cpu.r1.de = 0xB521
  cpu.r1.hl = 0x6CA3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1066
  cpu.r1.iy = 0xDA38
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3A)
  mem.write8(0x0003, 0x1E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xDA72, 0x25)
  mem.write8(0xDA73, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2F81)
  expect(cpu.r1.bc).toEqual(0x2470)
  expect(cpu.r1.de).toEqual(0xB521)
  expect(cpu.r1.hl).toEqual(0x6CA3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1066)
  expect(cpu.r1.iy).toEqual(0xDA38)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb1f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4CDD
  cpu.r1.bc = 0x49A3
  cpu.r1.de = 0xDA18
  cpu.r1.hl = 0x3AFD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA4F1
  cpu.r1.iy = 0x2095
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7B)
  mem.write8(0x0003, 0x1F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x2110, 0x04)
  mem.write8(0x2111, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8284)
  expect(cpu.r1.bc).toEqual(0x49A3)
  expect(cpu.r1.de).toEqual(0xDA18)
  expect(cpu.r1.hl).toEqual(0x3AFD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA4F1)
  expect(cpu.r1.iy).toEqual(0x2095)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb20', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3D74
  cpu.r1.bc = 0x3A8F
  cpu.r1.de = 0x206F
  cpu.r1.hl = 0x8894
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDDAB
  cpu.r1.iy = 0xDA25
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7A)
  mem.write8(0x0003, 0x20)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xDA9F, 0x89)
  mem.write8(0xDAA0, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3D05)
  expect(cpu.r1.bc).toEqual(0x128F)
  expect(cpu.r1.de).toEqual(0x206F)
  expect(cpu.r1.hl).toEqual(0x8894)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDDAB)
  expect(cpu.r1.iy).toEqual(0xDA25)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb21', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1674
  cpu.r1.bc = 0x6025
  cpu.r1.de = 0x641A
  cpu.r1.hl = 0x6598
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x473B
  cpu.r1.iy = 0xDE36
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7B)
  mem.write8(0x0003, 0x21)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xDEB1, 0x23)
  mem.write8(0xDEB2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1600)
  expect(cpu.r1.bc).toEqual(0x6046)
  expect(cpu.r1.de).toEqual(0x641A)
  expect(cpu.r1.hl).toEqual(0x6598)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x473B)
  expect(cpu.r1.iy).toEqual(0xDE36)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb22', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xADA9
  cpu.r1.bc = 0xEFB2
  cpu.r1.de = 0x6F03
  cpu.r1.hl = 0xE732
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC11D
  cpu.r1.iy = 0x8926
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9A)
  mem.write8(0x0003, 0x22)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x88C0, 0xD4)
  mem.write8(0x88C1, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xADA9)
  expect(cpu.r1.bc).toEqual(0xEFB2)
  expect(cpu.r1.de).toEqual(0xA803)
  expect(cpu.r1.hl).toEqual(0xE732)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC11D)
  expect(cpu.r1.iy).toEqual(0x8926)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb23', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x21E9
  cpu.r1.bc = 0xD678
  cpu.r1.de = 0xA71B
  cpu.r1.hl = 0x25D7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4CA8
  cpu.r1.iy = 0x5255
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF5)
  mem.write8(0x0003, 0x23)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x524A, 0x65)
  mem.write8(0x524B, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x218C)
  expect(cpu.r1.bc).toEqual(0xD678)
  expect(cpu.r1.de).toEqual(0xA7CA)
  expect(cpu.r1.hl).toEqual(0x25D7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4CA8)
  expect(cpu.r1.iy).toEqual(0x5255)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb24', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1C51
  cpu.r1.bc = 0xDA3E
  cpu.r1.de = 0xCC7C
  cpu.r1.hl = 0xCB19
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x572C
  cpu.r1.iy = 0xAFFE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB4)
  mem.write8(0x0003, 0x24)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xAFB2, 0x7E)
  mem.write8(0xAFB3, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1CAC)
  expect(cpu.r1.bc).toEqual(0xDA3E)
  expect(cpu.r1.de).toEqual(0xCC7C)
  expect(cpu.r1.hl).toEqual(0xFC19)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x572C)
  expect(cpu.r1.iy).toEqual(0xAFFE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb25', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x954E
  cpu.r1.bc = 0x097C
  cpu.r1.de = 0xA341
  cpu.r1.hl = 0x89E0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x435D
  cpu.r1.iy = 0x23E9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA6)
  mem.write8(0x0003, 0x25)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x238F, 0x26)
  mem.write8(0x2390, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9508)
  expect(cpu.r1.bc).toEqual(0x097C)
  expect(cpu.r1.de).toEqual(0xA341)
  expect(cpu.r1.hl).toEqual(0x894C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x435D)
  expect(cpu.r1.iy).toEqual(0x23E9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb26', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5844
  cpu.r1.bc = 0x0E19
  cpu.r1.de = 0xD277
  cpu.r1.hl = 0xBF7F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6504
  cpu.r1.iy = 0xD4E4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBD)
  mem.write8(0x0003, 0x26)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD4A1, 0xBF)
  mem.write8(0xD4A2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x582D)
  expect(cpu.r1.bc).toEqual(0x0E19)
  expect(cpu.r1.de).toEqual(0xD277)
  expect(cpu.r1.hl).toEqual(0xBF7F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6504)
  expect(cpu.r1.iy).toEqual(0xD4E4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb27', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8E0D
  cpu.r1.bc = 0x8C06
  cpu.r1.de = 0x2C4C
  cpu.r1.hl = 0xD7C8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9239
  cpu.r1.iy = 0x8D42
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x59)
  mem.write8(0x0003, 0x27)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8D9B, 0xA7)
  mem.write8(0x8D9C, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4E0D)
  expect(cpu.r1.bc).toEqual(0x8C06)
  expect(cpu.r1.de).toEqual(0x2C4C)
  expect(cpu.r1.hl).toEqual(0xD7C8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9239)
  expect(cpu.r1.iy).toEqual(0x8D42)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb28', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4122
  cpu.r1.bc = 0xAF9B
  cpu.r1.de = 0x7745
  cpu.r1.hl = 0x76F5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA1BB
  cpu.r1.iy = 0xAB43
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x83)
  mem.write8(0x0003, 0x28)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xAAC6, 0x5D)
  mem.write8(0xAAC7, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x412D)
  expect(cpu.r1.bc).toEqual(0x2E9B)
  expect(cpu.r1.de).toEqual(0x7745)
  expect(cpu.r1.hl).toEqual(0x76F5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA1BB)
  expect(cpu.r1.iy).toEqual(0xAB43)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb29', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0B21
  cpu.r1.bc = 0xAFFD
  cpu.r1.de = 0xFEA6
  cpu.r1.hl = 0x9478
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x32BB
  cpu.r1.iy = 0x0343
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7D)
  mem.write8(0x0003, 0x29)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x03C0, 0x84)
  mem.write8(0x03C1, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0B80)
  expect(cpu.r1.bc).toEqual(0xAFC2)
  expect(cpu.r1.de).toEqual(0xFEA6)
  expect(cpu.r1.hl).toEqual(0x9478)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x32BB)
  expect(cpu.r1.iy).toEqual(0x0343)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb2a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF236
  cpu.r1.bc = 0x8C31
  cpu.r1.de = 0x5932
  cpu.r1.hl = 0x7FEB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7DB7
  cpu.r1.iy = 0xABE7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF9)
  mem.write8(0x0003, 0x2A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xABE0, 0xDD)
  mem.write8(0xABE1, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF2AD)
  expect(cpu.r1.bc).toEqual(0x8C31)
  expect(cpu.r1.de).toEqual(0xEE32)
  expect(cpu.r1.hl).toEqual(0x7FEB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7DB7)
  expect(cpu.r1.iy).toEqual(0xABE7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb2b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2450
  cpu.r1.bc = 0x6945
  cpu.r1.de = 0xDCFC
  cpu.r1.hl = 0xD643
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5BE1
  cpu.r1.iy = 0x4A94
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4B)
  mem.write8(0x0003, 0x2B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4ADF, 0x49)
  mem.write8(0x4AE0, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2425)
  expect(cpu.r1.bc).toEqual(0x6945)
  expect(cpu.r1.de).toEqual(0xDC24)
  expect(cpu.r1.hl).toEqual(0xD643)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5BE1)
  expect(cpu.r1.iy).toEqual(0x4A94)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb2c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x117F
  cpu.r1.bc = 0xB32B
  cpu.r1.de = 0xE530
  cpu.r1.hl = 0x255A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2416
  cpu.r1.iy = 0xCCD1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE6)
  mem.write8(0x0003, 0x2C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xCCB7, 0x3C)
  mem.write8(0xCCB8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x110C)
  expect(cpu.r1.bc).toEqual(0xB32B)
  expect(cpu.r1.de).toEqual(0xE530)
  expect(cpu.r1.hl).toEqual(0x1E5A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2416)
  expect(cpu.r1.iy).toEqual(0xCCD1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb2d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD0C3
  cpu.r1.bc = 0x344B
  cpu.r1.de = 0x1BB0
  cpu.r1.hl = 0x3EAB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFE11
  cpu.r1.iy = 0xE4E6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5F)
  mem.write8(0x0003, 0x2D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE545, 0x78)
  mem.write8(0xE546, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD02C)
  expect(cpu.r1.bc).toEqual(0x344B)
  expect(cpu.r1.de).toEqual(0x1BB0)
  expect(cpu.r1.hl).toEqual(0x3E3C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFE11)
  expect(cpu.r1.iy).toEqual(0xE4E6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb2e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF4EE
  cpu.r1.bc = 0xB832
  cpu.r1.de = 0x4B7F
  cpu.r1.hl = 0xE2B7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9386
  cpu.r1.iy = 0x42FD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x06)
  mem.write8(0x0003, 0x2E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4303, 0xAD)
  mem.write8(0x4304, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF481)
  expect(cpu.r1.bc).toEqual(0xB832)
  expect(cpu.r1.de).toEqual(0x4B7F)
  expect(cpu.r1.hl).toEqual(0xE2B7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9386)
  expect(cpu.r1.iy).toEqual(0x42FD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb2f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF86
  cpu.r1.bc = 0xF2C2
  cpu.r1.de = 0x9F2F
  cpu.r1.hl = 0xC946
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5FE0
  cpu.r1.iy = 0x16B8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x29)
  mem.write8(0x0003, 0x2F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x16E1, 0x18)
  mem.write8(0x16E2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0C0C)
  expect(cpu.r1.bc).toEqual(0xF2C2)
  expect(cpu.r1.de).toEqual(0x9F2F)
  expect(cpu.r1.hl).toEqual(0xC946)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5FE0)
  expect(cpu.r1.iy).toEqual(0x16B8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb30', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xACF6
  cpu.r1.bc = 0xE832
  cpu.r1.de = 0xF9ED
  cpu.r1.hl = 0xCABC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFABD
  cpu.r1.iy = 0xD646
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1B)
  mem.write8(0x0003, 0x30)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD661, 0xA5)
  mem.write8(0xD662, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAC0D)
  expect(cpu.r1.bc).toEqual(0x4B32)
  expect(cpu.r1.de).toEqual(0xF9ED)
  expect(cpu.r1.hl).toEqual(0xCABC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFABD)
  expect(cpu.r1.iy).toEqual(0xD646)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb31', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2B96
  cpu.r1.bc = 0x5134
  cpu.r1.de = 0x83A7
  cpu.r1.hl = 0x7EEE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7750
  cpu.r1.iy = 0xBFE0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF0)
  mem.write8(0x0003, 0x31)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xBFD0, 0xF1)
  mem.write8(0xBFD1, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2BA1)
  expect(cpu.r1.bc).toEqual(0x51E3)
  expect(cpu.r1.de).toEqual(0x83A7)
  expect(cpu.r1.hl).toEqual(0x7EEE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7750)
  expect(cpu.r1.iy).toEqual(0xBFE0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb32', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB2BC
  cpu.r1.bc = 0xA4B1
  cpu.r1.de = 0xB685
  cpu.r1.hl = 0xF66E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA9A1
  cpu.r1.iy = 0x5ADE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC5)
  mem.write8(0x0003, 0x32)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5AA3, 0x59)
  mem.write8(0x5AA4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB2A0)
  expect(cpu.r1.bc).toEqual(0xA4B1)
  expect(cpu.r1.de).toEqual(0xB385)
  expect(cpu.r1.hl).toEqual(0xF66E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA9A1)
  expect(cpu.r1.iy).toEqual(0x5ADE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb33', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9C6D
  cpu.r1.bc = 0x2C90
  cpu.r1.de = 0xD0A9
  cpu.r1.hl = 0x2BE3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2691
  cpu.r1.iy = 0x1964
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7F)
  mem.write8(0x0003, 0x33)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x19E3, 0xDA)
  mem.write8(0x19E4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9CA1)
  expect(cpu.r1.bc).toEqual(0x2C90)
  expect(cpu.r1.de).toEqual(0xD0B5)
  expect(cpu.r1.hl).toEqual(0x2BE3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2691)
  expect(cpu.r1.iy).toEqual(0x1964)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb34', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6029
  cpu.r1.bc = 0xFBCD
  cpu.r1.de = 0x5348
  cpu.r1.hl = 0xF947
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5338
  cpu.r1.iy = 0x5696
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD2)
  mem.write8(0x0003, 0x34)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5668, 0xD4)
  mem.write8(0x5669, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x60AD)
  expect(cpu.r1.bc).toEqual(0xFBCD)
  expect(cpu.r1.de).toEqual(0x5348)
  expect(cpu.r1.hl).toEqual(0xA947)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5338)
  expect(cpu.r1.iy).toEqual(0x5696)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb35', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x96A9
  cpu.r1.bc = 0x21C6
  cpu.r1.de = 0x4CB6
  cpu.r1.hl = 0xB40B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x673A
  cpu.r1.iy = 0x00F8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x71)
  mem.write8(0x0003, 0x35)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0169, 0x0B)
  mem.write8(0x016A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9604)
  expect(cpu.r1.bc).toEqual(0x21C6)
  expect(cpu.r1.de).toEqual(0x4CB6)
  expect(cpu.r1.hl).toEqual(0xB417)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x673A)
  expect(cpu.r1.iy).toEqual(0x00F8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb36', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDC6F
  cpu.r1.bc = 0x0892
  cpu.r1.de = 0x3CC7
  cpu.r1.hl = 0x1494
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8598
  cpu.r1.iy = 0x1ADE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDA)
  mem.write8(0x0003, 0x36)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1AB8, 0x3C)
  mem.write8(0x1AB9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDC28)
  expect(cpu.r1.bc).toEqual(0x0892)
  expect(cpu.r1.de).toEqual(0x3CC7)
  expect(cpu.r1.hl).toEqual(0x1494)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8598)
  expect(cpu.r1.iy).toEqual(0x1ADE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb37', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD2B3
  cpu.r1.bc = 0x4524
  cpu.r1.de = 0x208F
  cpu.r1.hl = 0x076F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAD10
  cpu.r1.iy = 0xE7EC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xCB)
  mem.write8(0x0003, 0x37)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE7B7, 0x9F)
  mem.write8(0xE7B8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3F2D)
  expect(cpu.r1.bc).toEqual(0x4524)
  expect(cpu.r1.de).toEqual(0x208F)
  expect(cpu.r1.hl).toEqual(0x076F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAD10)
  expect(cpu.r1.iy).toEqual(0xE7EC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb38', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4F07
  cpu.r1.bc = 0x0050
  cpu.r1.de = 0x40C6
  cpu.r1.hl = 0x4FB7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF37E
  cpu.r1.iy = 0xD096
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8E)
  mem.write8(0x0003, 0x38)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD024, 0x0D)
  mem.write8(0xD025, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4F05)
  expect(cpu.r1.bc).toEqual(0x0650)
  expect(cpu.r1.de).toEqual(0x40C6)
  expect(cpu.r1.hl).toEqual(0x4FB7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF37E)
  expect(cpu.r1.iy).toEqual(0xD096)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb39', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBCC2
  cpu.r1.bc = 0xF5B5
  cpu.r1.de = 0x8DEE
  cpu.r1.hl = 0xE514
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x48BC
  cpu.r1.iy = 0xF433
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7F)
  mem.write8(0x0003, 0x39)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF4B2, 0xF5)
  mem.write8(0xF4B3, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBC29)
  expect(cpu.r1.bc).toEqual(0xF57A)
  expect(cpu.r1.de).toEqual(0x8DEE)
  expect(cpu.r1.hl).toEqual(0xE514)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x48BC)
  expect(cpu.r1.iy).toEqual(0xF433)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb3a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD012
  cpu.r1.bc = 0x2EF5
  cpu.r1.de = 0x2910
  cpu.r1.hl = 0x9CA5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB155
  cpu.r1.iy = 0xCB03
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1D)
  mem.write8(0x0003, 0x3A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xCB20, 0xA8)
  mem.write8(0xCB21, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD000)
  expect(cpu.r1.bc).toEqual(0x2EF5)
  expect(cpu.r1.de).toEqual(0x5410)
  expect(cpu.r1.hl).toEqual(0x9CA5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB155)
  expect(cpu.r1.iy).toEqual(0xCB03)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb3b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x503D
  cpu.r1.bc = 0xA85B
  cpu.r1.de = 0xCFBB
  cpu.r1.hl = 0xDE8C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9C5B
  cpu.r1.iy = 0xD263
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x05)
  mem.write8(0x0003, 0x3B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD268, 0xB2)
  mem.write8(0xD269, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x500C)
  expect(cpu.r1.bc).toEqual(0xA85B)
  expect(cpu.r1.de).toEqual(0xCF59)
  expect(cpu.r1.hl).toEqual(0xDE8C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9C5B)
  expect(cpu.r1.iy).toEqual(0xD263)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb3c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x97F0
  cpu.r1.bc = 0x4456
  cpu.r1.de = 0x0B52
  cpu.r1.hl = 0xFDAD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6D2A
  cpu.r1.iy = 0xA80F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAE)
  mem.write8(0x0003, 0x3C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA7BD, 0x96)
  mem.write8(0xA7BE, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x970C)
  expect(cpu.r1.bc).toEqual(0x4456)
  expect(cpu.r1.de).toEqual(0x0B52)
  expect(cpu.r1.hl).toEqual(0x4BAD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6D2A)
  expect(cpu.r1.iy).toEqual(0xA80F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb3d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7D44
  cpu.r1.bc = 0x9303
  cpu.r1.de = 0xE12B
  cpu.r1.hl = 0xBFF6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4C0F
  cpu.r1.iy = 0xE52A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x13)
  mem.write8(0x0003, 0x3D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE53D, 0xFB)
  mem.write8(0xE53E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7D2D)
  expect(cpu.r1.bc).toEqual(0x9303)
  expect(cpu.r1.de).toEqual(0xE12B)
  expect(cpu.r1.hl).toEqual(0xBF7D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4C0F)
  expect(cpu.r1.iy).toEqual(0xE52A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb3e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0D95
  cpu.r1.bc = 0x3E02
  cpu.r1.de = 0x8F74
  cpu.r1.hl = 0x0F82
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x85DF
  cpu.r1.iy = 0xB2D1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2E)
  mem.write8(0x0003, 0x3E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB2FF, 0x50)
  mem.write8(0xB300, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0D2C)
  expect(cpu.r1.bc).toEqual(0x3E02)
  expect(cpu.r1.de).toEqual(0x8F74)
  expect(cpu.r1.hl).toEqual(0x0F82)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x85DF)
  expect(cpu.r1.iy).toEqual(0xB2D1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb3f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x89E3
  cpu.r1.bc = 0x12F6
  cpu.r1.de = 0x426C
  cpu.r1.hl = 0x52D4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD9F7
  cpu.r1.iy = 0xC1AC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x21)
  mem.write8(0x0003, 0x3F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC1CD, 0x78)
  mem.write8(0xC1CE, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3C2C)
  expect(cpu.r1.bc).toEqual(0x12F6)
  expect(cpu.r1.de).toEqual(0x426C)
  expect(cpu.r1.hl).toEqual(0x52D4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD9F7)
  expect(cpu.r1.iy).toEqual(0xC1AC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb40', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5408
  cpu.r1.bc = 0x2C34
  cpu.r1.de = 0x6784
  cpu.r1.hl = 0xB376
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8FF9
  cpu.r1.iy = 0x4195
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3B)
  mem.write8(0x0003, 0x40)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x41D0, 0x0D)
  mem.write8(0x41D1, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5410)
  expect(cpu.r1.bc).toEqual(0x2C34)
  expect(cpu.r1.de).toEqual(0x6784)
  expect(cpu.r1.hl).toEqual(0xB376)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8FF9)
  expect(cpu.r1.iy).toEqual(0x4195)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb41', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8C35
  cpu.r1.bc = 0x5A58
  cpu.r1.de = 0xB71C
  cpu.r1.hl = 0x6777
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDECA
  cpu.r1.iy = 0x03CB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xCC)
  mem.write8(0x0003, 0x41)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0397, 0xE9)
  mem.write8(0x0398, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8C11)
  expect(cpu.r1.bc).toEqual(0x5A58)
  expect(cpu.r1.de).toEqual(0xB71C)
  expect(cpu.r1.hl).toEqual(0x6777)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDECA)
  expect(cpu.r1.iy).toEqual(0x03CB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb42', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5535
  cpu.r1.bc = 0x9C29
  cpu.r1.de = 0x2FEB
  cpu.r1.hl = 0x97FF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7F17
  cpu.r1.iy = 0x9F56
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x01)
  mem.write8(0x0003, 0x42)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x9F57, 0xA8)
  mem.write8(0x9F58, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x555D)
  expect(cpu.r1.bc).toEqual(0x9C29)
  expect(cpu.r1.de).toEqual(0x2FEB)
  expect(cpu.r1.hl).toEqual(0x97FF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7F17)
  expect(cpu.r1.iy).toEqual(0x9F56)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb43', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB404
  cpu.r1.bc = 0xE58C
  cpu.r1.de = 0xE62E
  cpu.r1.hl = 0x2A32
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7130
  cpu.r1.iy = 0x1FD1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x08)
  mem.write8(0x0003, 0x43)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1FD9, 0xAA)
  mem.write8(0x1FDA, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB45C)
  expect(cpu.r1.bc).toEqual(0xE58C)
  expect(cpu.r1.de).toEqual(0xE62E)
  expect(cpu.r1.hl).toEqual(0x2A32)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7130)
  expect(cpu.r1.iy).toEqual(0x1FD1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb44', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA954
  cpu.r1.bc = 0x68F4
  cpu.r1.de = 0x9FA4
  cpu.r1.hl = 0x7F66
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0209
  cpu.r1.iy = 0xF4F3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x03)
  mem.write8(0x0003, 0x44)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF4F6, 0x89)
  mem.write8(0xF4F7, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA930)
  expect(cpu.r1.bc).toEqual(0x68F4)
  expect(cpu.r1.de).toEqual(0x9FA4)
  expect(cpu.r1.hl).toEqual(0x7F66)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0209)
  expect(cpu.r1.iy).toEqual(0xF4F3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb45', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x73E5
  cpu.r1.bc = 0x8DDE
  cpu.r1.de = 0x5E4F
  cpu.r1.hl = 0x84A7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4E24
  cpu.r1.iy = 0x93ED
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8D)
  mem.write8(0x0003, 0x45)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x937A, 0x8D)
  mem.write8(0x937B, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7311)
  expect(cpu.r1.bc).toEqual(0x8DDE)
  expect(cpu.r1.de).toEqual(0x5E4F)
  expect(cpu.r1.hl).toEqual(0x84A7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4E24)
  expect(cpu.r1.iy).toEqual(0x93ED)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb46', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0E5A
  cpu.r1.bc = 0xB1F9
  cpu.r1.de = 0x475F
  cpu.r1.hl = 0xEBFC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7765
  cpu.r1.iy = 0x63B1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8C)
  mem.write8(0x0003, 0x46)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x633D, 0xFE)
  mem.write8(0x633E, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0E74)
  expect(cpu.r1.bc).toEqual(0xB1F9)
  expect(cpu.r1.de).toEqual(0x475F)
  expect(cpu.r1.hl).toEqual(0xEBFC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7765)
  expect(cpu.r1.iy).toEqual(0x63B1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb47', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9B3D
  cpu.r1.bc = 0x7F38
  cpu.r1.de = 0x0753
  cpu.r1.hl = 0xD5E7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB9C3
  cpu.r1.iy = 0x6E0E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x96)
  mem.write8(0x0003, 0x47)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x6DA4, 0xD6)
  mem.write8(0x6DA5, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9B7D)
  expect(cpu.r1.bc).toEqual(0x7F38)
  expect(cpu.r1.de).toEqual(0x0753)
  expect(cpu.r1.hl).toEqual(0xD5E7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB9C3)
  expect(cpu.r1.iy).toEqual(0x6E0E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb48', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7D94
  cpu.r1.bc = 0x50A9
  cpu.r1.de = 0x2511
  cpu.r1.hl = 0x8F9F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB612
  cpu.r1.iy = 0xABA9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x44)
  mem.write8(0x0003, 0x48)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xABED, 0xB0)
  mem.write8(0xABEE, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7D7C)
  expect(cpu.r1.bc).toEqual(0x50A9)
  expect(cpu.r1.de).toEqual(0x2511)
  expect(cpu.r1.hl).toEqual(0x8F9F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB612)
  expect(cpu.r1.iy).toEqual(0xABA9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb49', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x691E
  cpu.r1.bc = 0x3A39
  cpu.r1.de = 0xB834
  cpu.r1.hl = 0x74B6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0EB7
  cpu.r1.iy = 0x3E21
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4E)
  mem.write8(0x0003, 0x49)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3E6F, 0xA9)
  mem.write8(0x3E70, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x697C)
  expect(cpu.r1.bc).toEqual(0x3A39)
  expect(cpu.r1.de).toEqual(0xB834)
  expect(cpu.r1.hl).toEqual(0x74B6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0EB7)
  expect(cpu.r1.iy).toEqual(0x3E21)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb4a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x31E3
  cpu.r1.bc = 0x68E0
  cpu.r1.de = 0xFE2F
  cpu.r1.hl = 0xA2C4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAC96
  cpu.r1.iy = 0xE7DB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x52)
  mem.write8(0x0003, 0x4A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE82D, 0xDA)
  mem.write8(0xE82E, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3139)
  expect(cpu.r1.bc).toEqual(0x68E0)
  expect(cpu.r1.de).toEqual(0xFE2F)
  expect(cpu.r1.hl).toEqual(0xA2C4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAC96)
  expect(cpu.r1.iy).toEqual(0xE7DB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb4b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x09A1
  cpu.r1.bc = 0x2453
  cpu.r1.de = 0x9186
  cpu.r1.hl = 0xA32A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x71AF
  cpu.r1.iy = 0x883F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEA)
  mem.write8(0x0003, 0x4B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8829, 0x4E)
  mem.write8(0x882A, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0919)
  expect(cpu.r1.bc).toEqual(0x2453)
  expect(cpu.r1.de).toEqual(0x9186)
  expect(cpu.r1.hl).toEqual(0xA32A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x71AF)
  expect(cpu.r1.iy).toEqual(0x883F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb4c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4A52
  cpu.r1.bc = 0x1E5B
  cpu.r1.de = 0xBE2E
  cpu.r1.hl = 0x3EE4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAF79
  cpu.r1.iy = 0x7F22
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEE)
  mem.write8(0x0003, 0x4C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x7F10, 0x70)
  mem.write8(0x7F11, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4A7C)
  expect(cpu.r1.bc).toEqual(0x1E5B)
  expect(cpu.r1.de).toEqual(0xBE2E)
  expect(cpu.r1.hl).toEqual(0x3EE4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAF79)
  expect(cpu.r1.iy).toEqual(0x7F22)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb4d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9F87
  cpu.r1.bc = 0x6C8F
  cpu.r1.de = 0x34F4
  cpu.r1.hl = 0x5A79
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD3CC
  cpu.r1.iy = 0xA770
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x29)
  mem.write8(0x0003, 0x4D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA799, 0x78)
  mem.write8(0xA79A, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9F75)
  expect(cpu.r1.bc).toEqual(0x6C8F)
  expect(cpu.r1.de).toEqual(0x34F4)
  expect(cpu.r1.hl).toEqual(0x5A79)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD3CC)
  expect(cpu.r1.iy).toEqual(0xA770)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb4e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x30CB
  cpu.r1.bc = 0x5626
  cpu.r1.de = 0x52BC
  cpu.r1.hl = 0x5503
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x303B
  cpu.r1.iy = 0xE1C8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x20)
  mem.write8(0x0003, 0x4E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE1E8, 0xAA)
  mem.write8(0xE1E9, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3031)
  expect(cpu.r1.bc).toEqual(0x5626)
  expect(cpu.r1.de).toEqual(0x52BC)
  expect(cpu.r1.hl).toEqual(0x5503)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x303B)
  expect(cpu.r1.iy).toEqual(0xE1C8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb4f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6088
  cpu.r1.bc = 0xE079
  cpu.r1.de = 0x7152
  cpu.r1.hl = 0x671F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8C22
  cpu.r1.iy = 0x1CF8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9D)
  mem.write8(0x0003, 0x4F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1C95, 0x18)
  mem.write8(0x1C96, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x605C)
  expect(cpu.r1.bc).toEqual(0xE079)
  expect(cpu.r1.de).toEqual(0x7152)
  expect(cpu.r1.hl).toEqual(0x671F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8C22)
  expect(cpu.r1.iy).toEqual(0x1CF8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb50', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8CDE
  cpu.r1.bc = 0x1409
  cpu.r1.de = 0x6D69
  cpu.r1.hl = 0xE5B2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4A0C
  cpu.r1.iy = 0xC75F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6B)
  mem.write8(0x0003, 0x50)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC7CA, 0xFE)
  mem.write8(0xC7CB, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8C10)
  expect(cpu.r1.bc).toEqual(0x1409)
  expect(cpu.r1.de).toEqual(0x6D69)
  expect(cpu.r1.hl).toEqual(0xE5B2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4A0C)
  expect(cpu.r1.iy).toEqual(0xC75F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb51', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8F59
  cpu.r1.bc = 0x40CB
  cpu.r1.de = 0x9543
  cpu.r1.hl = 0x9B3A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1942
  cpu.r1.iy = 0x3495
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x86)
  mem.write8(0x0003, 0x51)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x341B, 0x13)
  mem.write8(0x341C, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8F75)
  expect(cpu.r1.bc).toEqual(0x40CB)
  expect(cpu.r1.de).toEqual(0x9543)
  expect(cpu.r1.hl).toEqual(0x9B3A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1942)
  expect(cpu.r1.iy).toEqual(0x3495)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb52', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8905
  cpu.r1.bc = 0x3E41
  cpu.r1.de = 0x7AB4
  cpu.r1.hl = 0x37F6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF82D
  cpu.r1.iy = 0x8B0D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE6)
  mem.write8(0x0003, 0x52)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8AF3, 0x87)
  mem.write8(0x8AF4, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8919)
  expect(cpu.r1.bc).toEqual(0x3E41)
  expect(cpu.r1.de).toEqual(0x7AB4)
  expect(cpu.r1.hl).toEqual(0x37F6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF82D)
  expect(cpu.r1.iy).toEqual(0x8B0D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb53', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEFDE
  cpu.r1.bc = 0xE345
  cpu.r1.de = 0x09A3
  cpu.r1.hl = 0xF0B2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC378
  cpu.r1.iy = 0x7EE1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD1)
  mem.write8(0x0003, 0x53)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x7EB2, 0xE4)
  mem.write8(0x7EB3, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEF38)
  expect(cpu.r1.bc).toEqual(0xE345)
  expect(cpu.r1.de).toEqual(0x09A3)
  expect(cpu.r1.hl).toEqual(0xF0B2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC378)
  expect(cpu.r1.iy).toEqual(0x7EE1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb54', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x72A6
  cpu.r1.bc = 0xCB82
  cpu.r1.de = 0xD966
  cpu.r1.hl = 0x2FC6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3C00
  cpu.r1.iy = 0x5B6B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x08)
  mem.write8(0x0003, 0x54)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5B73, 0x07)
  mem.write8(0x5B74, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7218)
  expect(cpu.r1.bc).toEqual(0xCB82)
  expect(cpu.r1.de).toEqual(0xD966)
  expect(cpu.r1.hl).toEqual(0x2FC6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3C00)
  expect(cpu.r1.iy).toEqual(0x5B6B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb55', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x855C
  cpu.r1.bc = 0xC23B
  cpu.r1.de = 0x6AAB
  cpu.r1.hl = 0x9B00
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFE93
  cpu.r1.iy = 0xB4B2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x54)
  mem.write8(0x0003, 0x55)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB506, 0x46)
  mem.write8(0xB507, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8530)
  expect(cpu.r1.bc).toEqual(0xC23B)
  expect(cpu.r1.de).toEqual(0x6AAB)
  expect(cpu.r1.hl).toEqual(0x9B00)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFE93)
  expect(cpu.r1.iy).toEqual(0xB4B2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb56', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF5AD
  cpu.r1.bc = 0xF9F6
  cpu.r1.de = 0x1E8C
  cpu.r1.hl = 0x9E08
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x716A
  cpu.r1.iy = 0x6932
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6F)
  mem.write8(0x0003, 0x56)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x69A1, 0xDF)
  mem.write8(0x69A2, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF539)
  expect(cpu.r1.bc).toEqual(0xF9F6)
  expect(cpu.r1.de).toEqual(0x1E8C)
  expect(cpu.r1.hl).toEqual(0x9E08)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x716A)
  expect(cpu.r1.iy).toEqual(0x6932)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb57', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x37D7
  cpu.r1.bc = 0xB7DC
  cpu.r1.de = 0xBE1C
  cpu.r1.hl = 0x38EA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5E82
  cpu.r1.iy = 0xA3BB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3C)
  mem.write8(0x0003, 0x57)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA3F7, 0x6C)
  mem.write8(0xA3F8, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3731)
  expect(cpu.r1.bc).toEqual(0xB7DC)
  expect(cpu.r1.de).toEqual(0xBE1C)
  expect(cpu.r1.hl).toEqual(0x38EA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5E82)
  expect(cpu.r1.iy).toEqual(0xA3BB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb58', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x752C
  cpu.r1.bc = 0x7296
  cpu.r1.de = 0x3EA5
  cpu.r1.hl = 0x1143
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD7CC
  cpu.r1.iy = 0x1E94
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4E)
  mem.write8(0x0003, 0x58)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1EE2, 0xF6)
  mem.write8(0x1EE3, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x755C)
  expect(cpu.r1.bc).toEqual(0x7296)
  expect(cpu.r1.de).toEqual(0x3EA5)
  expect(cpu.r1.hl).toEqual(0x1143)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD7CC)
  expect(cpu.r1.iy).toEqual(0x1E94)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb59', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8056
  cpu.r1.bc = 0xBF2A
  cpu.r1.de = 0x1809
  cpu.r1.hl = 0xED31
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFE2B
  cpu.r1.iy = 0xFAD3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2E)
  mem.write8(0x0003, 0x59)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xFB01, 0x6F)
  mem.write8(0xFB02, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8038)
  expect(cpu.r1.bc).toEqual(0xBF2A)
  expect(cpu.r1.de).toEqual(0x1809)
  expect(cpu.r1.hl).toEqual(0xED31)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFE2B)
  expect(cpu.r1.iy).toEqual(0xFAD3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb5a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCC74
  cpu.r1.bc = 0xA108
  cpu.r1.de = 0x65D4
  cpu.r1.hl = 0x6F66
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0008
  cpu.r1.iy = 0x7BB8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x88)
  mem.write8(0x0003, 0x5A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x7B40, 0x6E)
  mem.write8(0x7B41, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCC38)
  expect(cpu.r1.bc).toEqual(0xA108)
  expect(cpu.r1.de).toEqual(0x65D4)
  expect(cpu.r1.hl).toEqual(0x6F66)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0008)
  expect(cpu.r1.iy).toEqual(0x7BB8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb5b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5CF1
  cpu.r1.bc = 0xB3BD
  cpu.r1.de = 0x25BD
  cpu.r1.hl = 0x98CF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2BA1
  cpu.r1.iy = 0x315C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE7)
  mem.write8(0x0003, 0x5B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3143, 0xB1)
  mem.write8(0x3144, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5C75)
  expect(cpu.r1.bc).toEqual(0xB3BD)
  expect(cpu.r1.de).toEqual(0x25BD)
  expect(cpu.r1.hl).toEqual(0x98CF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2BA1)
  expect(cpu.r1.iy).toEqual(0x315C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb5c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB3E0
  cpu.r1.bc = 0xD43D
  cpu.r1.de = 0xD9C0
  cpu.r1.hl = 0xB04D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x21A9
  cpu.r1.iy = 0x543E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x74)
  mem.write8(0x0003, 0x5C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x54B2, 0xE3)
  mem.write8(0x54B3, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB354)
  expect(cpu.r1.bc).toEqual(0xD43D)
  expect(cpu.r1.de).toEqual(0xD9C0)
  expect(cpu.r1.hl).toEqual(0xB04D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x21A9)
  expect(cpu.r1.iy).toEqual(0x543E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb5d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9F49
  cpu.r1.bc = 0x43DD
  cpu.r1.de = 0xCCB3
  cpu.r1.hl = 0x085A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF130
  cpu.r1.iy = 0x3B84
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDC)
  mem.write8(0x0003, 0x5D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3B60, 0xEF)
  mem.write8(0x3B61, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9F39)
  expect(cpu.r1.bc).toEqual(0x43DD)
  expect(cpu.r1.de).toEqual(0xCCB3)
  expect(cpu.r1.hl).toEqual(0x085A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF130)
  expect(cpu.r1.iy).toEqual(0x3B84)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb5e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6F89
  cpu.r1.bc = 0xEFF5
  cpu.r1.de = 0x993B
  cpu.r1.hl = 0x22B5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0F30
  cpu.r1.iy = 0xE165
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE2)
  mem.write8(0x0003, 0x5E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE147, 0x17)
  mem.write8(0xE148, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6F75)
  expect(cpu.r1.bc).toEqual(0xEFF5)
  expect(cpu.r1.de).toEqual(0x993B)
  expect(cpu.r1.hl).toEqual(0x22B5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0F30)
  expect(cpu.r1.iy).toEqual(0xE165)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb5f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD72A
  cpu.r1.bc = 0xA57A
  cpu.r1.de = 0xACA6
  cpu.r1.hl = 0x667E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5C33
  cpu.r1.iy = 0xF81B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAB)
  mem.write8(0x0003, 0x5F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF7C6, 0xE2)
  mem.write8(0xF7C7, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD774)
  expect(cpu.r1.bc).toEqual(0xA57A)
  expect(cpu.r1.de).toEqual(0xACA6)
  expect(cpu.r1.hl).toEqual(0x667E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5C33)
  expect(cpu.r1.iy).toEqual(0xF81B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb60', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x15E9
  cpu.r1.bc = 0x8D30
  cpu.r1.de = 0x43F4
  cpu.r1.hl = 0xC65E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1E34
  cpu.r1.iy = 0x8C44
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x85)
  mem.write8(0x0003, 0x60)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8BC9, 0xB9)
  mem.write8(0x8BCA, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1519)
  expect(cpu.r1.bc).toEqual(0x8D30)
  expect(cpu.r1.de).toEqual(0x43F4)
  expect(cpu.r1.hl).toEqual(0xC65E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1E34)
  expect(cpu.r1.iy).toEqual(0x8C44)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb61', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7BD1
  cpu.r1.bc = 0xD421
  cpu.r1.de = 0x5570
  cpu.r1.hl = 0xCB85
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x32EC
  cpu.r1.iy = 0x92E4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBE)
  mem.write8(0x0003, 0x61)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x92A2, 0x28)
  mem.write8(0x92A3, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7B55)
  expect(cpu.r1.bc).toEqual(0xD421)
  expect(cpu.r1.de).toEqual(0x5570)
  expect(cpu.r1.hl).toEqual(0xCB85)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x32EC)
  expect(cpu.r1.iy).toEqual(0x92E4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb62', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBA2F
  cpu.r1.bc = 0x4FBB
  cpu.r1.de = 0x67A7
  cpu.r1.hl = 0xC5DB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x470B
  cpu.r1.iy = 0x7EB1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9D)
  mem.write8(0x0003, 0x62)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x7E4E, 0x1A)
  mem.write8(0x7E4F, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBA39)
  expect(cpu.r1.bc).toEqual(0x4FBB)
  expect(cpu.r1.de).toEqual(0x67A7)
  expect(cpu.r1.hl).toEqual(0xC5DB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x470B)
  expect(cpu.r1.iy).toEqual(0x7EB1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb63', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC0A1
  cpu.r1.bc = 0x2CC2
  cpu.r1.de = 0xCE12
  cpu.r1.hl = 0xE77C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x71C5
  cpu.r1.iy = 0x1713
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF4)
  mem.write8(0x0003, 0x63)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1707, 0x3B)
  mem.write8(0x1708, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC011)
  expect(cpu.r1.bc).toEqual(0x2CC2)
  expect(cpu.r1.de).toEqual(0xCE12)
  expect(cpu.r1.hl).toEqual(0xE77C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x71C5)
  expect(cpu.r1.iy).toEqual(0x1713)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb64', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0C1F
  cpu.r1.bc = 0x7847
  cpu.r1.de = 0x2494
  cpu.r1.hl = 0x71EB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x315C
  cpu.r1.iy = 0xB336
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x35)
  mem.write8(0x0003, 0x64)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB36B, 0x8C)
  mem.write8(0xB36C, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0C75)
  expect(cpu.r1.bc).toEqual(0x7847)
  expect(cpu.r1.de).toEqual(0x2494)
  expect(cpu.r1.hl).toEqual(0x71EB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x315C)
  expect(cpu.r1.iy).toEqual(0xB336)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb65', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5245
  cpu.r1.bc = 0xA82D
  cpu.r1.de = 0x1112
  cpu.r1.hl = 0x8F09
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x672A
  cpu.r1.iy = 0x89F4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x37)
  mem.write8(0x0003, 0x65)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8A2B, 0x08)
  mem.write8(0x8A2C, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x525D)
  expect(cpu.r1.bc).toEqual(0xA82D)
  expect(cpu.r1.de).toEqual(0x1112)
  expect(cpu.r1.hl).toEqual(0x8F09)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x672A)
  expect(cpu.r1.iy).toEqual(0x89F4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb66', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x583F
  cpu.r1.bc = 0xC13E
  cpu.r1.de = 0xB136
  cpu.r1.hl = 0x6BC5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3EF9
  cpu.r1.iy = 0x6948
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9D)
  mem.write8(0x0003, 0x66)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x68E5, 0x90)
  mem.write8(0x68E6, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5839)
  expect(cpu.r1.bc).toEqual(0xC13E)
  expect(cpu.r1.de).toEqual(0xB136)
  expect(cpu.r1.hl).toEqual(0x6BC5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3EF9)
  expect(cpu.r1.iy).toEqual(0x6948)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb67', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x31B6
  cpu.r1.bc = 0x0F7D
  cpu.r1.de = 0x48B5
  cpu.r1.hl = 0xCC5F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2103
  cpu.r1.iy = 0x6572
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xCB)
  mem.write8(0x0003, 0x67)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x653D, 0x15)
  mem.write8(0x653E, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3130)
  expect(cpu.r1.bc).toEqual(0x0F7D)
  expect(cpu.r1.de).toEqual(0x48B5)
  expect(cpu.r1.hl).toEqual(0xCC5F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2103)
  expect(cpu.r1.iy).toEqual(0x6572)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb68', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE330
  cpu.r1.bc = 0x39FB
  cpu.r1.de = 0xA03A
  cpu.r1.hl = 0x59BC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE04A
  cpu.r1.iy = 0x03BE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xCA)
  mem.write8(0x0003, 0x68)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0388, 0x83)
  mem.write8(0x0389, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE354)
  expect(cpu.r1.bc).toEqual(0x39FB)
  expect(cpu.r1.de).toEqual(0xA03A)
  expect(cpu.r1.hl).toEqual(0x59BC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE04A)
  expect(cpu.r1.iy).toEqual(0x03BE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb69', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1896
  cpu.r1.bc = 0x5BC2
  cpu.r1.de = 0xD4D9
  cpu.r1.hl = 0x4E8A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3716
  cpu.r1.iy = 0xA603
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE2)
  mem.write8(0x0003, 0x69)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA5E5, 0x01)
  mem.write8(0xA5E6, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1874)
  expect(cpu.r1.bc).toEqual(0x5BC2)
  expect(cpu.r1.de).toEqual(0xD4D9)
  expect(cpu.r1.hl).toEqual(0x4E8A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3716)
  expect(cpu.r1.iy).toEqual(0xA603)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb6a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5BC9
  cpu.r1.bc = 0x0099
  cpu.r1.de = 0x34F8
  cpu.r1.hl = 0x3E96
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF251
  cpu.r1.iy = 0x93BE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAE)
  mem.write8(0x0003, 0x6A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x936C, 0x33)
  mem.write8(0x936D, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5B11)
  expect(cpu.r1.bc).toEqual(0x0099)
  expect(cpu.r1.de).toEqual(0x34F8)
  expect(cpu.r1.hl).toEqual(0x3E96)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF251)
  expect(cpu.r1.iy).toEqual(0x93BE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb6b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBBE5
  cpu.r1.bc = 0x9E6C
  cpu.r1.de = 0xABD1
  cpu.r1.hl = 0x515F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x73DB
  cpu.r1.iy = 0xAA2F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1F)
  mem.write8(0x0003, 0x6B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xAA4E, 0x7C)
  mem.write8(0xAA4F, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBB39)
  expect(cpu.r1.bc).toEqual(0x9E6C)
  expect(cpu.r1.de).toEqual(0xABD1)
  expect(cpu.r1.hl).toEqual(0x515F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x73DB)
  expect(cpu.r1.iy).toEqual(0xAA2F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb6c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x144B
  cpu.r1.bc = 0x3AF2
  cpu.r1.de = 0x8F80
  cpu.r1.hl = 0x7BE5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC379
  cpu.r1.iy = 0x86BA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0D)
  mem.write8(0x0003, 0x6C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x86C7, 0x25)
  mem.write8(0x86C8, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1411)
  expect(cpu.r1.bc).toEqual(0x3AF2)
  expect(cpu.r1.de).toEqual(0x8F80)
  expect(cpu.r1.hl).toEqual(0x7BE5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC379)
  expect(cpu.r1.iy).toEqual(0x86BA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb6d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6392
  cpu.r1.bc = 0xD077
  cpu.r1.de = 0x668D
  cpu.r1.hl = 0x6E4A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB0A8
  cpu.r1.iy = 0x62C8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF0)
  mem.write8(0x0003, 0x6D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x62B8, 0xE3)
  mem.write8(0x62B9, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6330)
  expect(cpu.r1.bc).toEqual(0xD077)
  expect(cpu.r1.de).toEqual(0x668D)
  expect(cpu.r1.hl).toEqual(0x6E4A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB0A8)
  expect(cpu.r1.iy).toEqual(0x62C8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb6e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2DA0
  cpu.r1.bc = 0xF872
  cpu.r1.de = 0x692D
  cpu.r1.hl = 0x92C4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x36B5
  cpu.r1.iy = 0x4210
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x93)
  mem.write8(0x0003, 0x6E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x41A3, 0x1E)
  mem.write8(0x41A4, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2D54)
  expect(cpu.r1.bc).toEqual(0xF872)
  expect(cpu.r1.de).toEqual(0x692D)
  expect(cpu.r1.hl).toEqual(0x92C4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x36B5)
  expect(cpu.r1.iy).toEqual(0x4210)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb6f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDF7B
  cpu.r1.bc = 0xC7AA
  cpu.r1.de = 0x9002
  cpu.r1.hl = 0x86B8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1347
  cpu.r1.iy = 0x004E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x20)
  mem.write8(0x0003, 0x6F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x006E, 0x37)
  mem.write8(0x006F, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDF11)
  expect(cpu.r1.bc).toEqual(0xC7AA)
  expect(cpu.r1.de).toEqual(0x9002)
  expect(cpu.r1.hl).toEqual(0x86B8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1347)
  expect(cpu.r1.iy).toEqual(0x004E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb70', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6EA9
  cpu.r1.bc = 0x018D
  cpu.r1.de = 0x5075
  cpu.r1.hl = 0xCF4E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCD2B
  cpu.r1.iy = 0x3E68
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD9)
  mem.write8(0x0003, 0x70)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3E41, 0xC9)
  mem.write8(0x3E42, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6E39)
  expect(cpu.r1.bc).toEqual(0x018D)
  expect(cpu.r1.de).toEqual(0x5075)
  expect(cpu.r1.hl).toEqual(0xCF4E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCD2B)
  expect(cpu.r1.iy).toEqual(0x3E68)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb71', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1B48
  cpu.r1.bc = 0xE3AF
  cpu.r1.de = 0x94D5
  cpu.r1.hl = 0x0996
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCAD5
  cpu.r1.iy = 0x999A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x27)
  mem.write8(0x0003, 0x71)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x99C1, 0x3E)
  mem.write8(0x99C2, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1B5C)
  expect(cpu.r1.bc).toEqual(0xE3AF)
  expect(cpu.r1.de).toEqual(0x94D5)
  expect(cpu.r1.hl).toEqual(0x0996)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCAD5)
  expect(cpu.r1.iy).toEqual(0x999A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb72', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE83B
  cpu.r1.bc = 0x26B1
  cpu.r1.de = 0x8608
  cpu.r1.hl = 0xF3CB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6323
  cpu.r1.iy = 0xFD31
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x98)
  mem.write8(0x0003, 0x72)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xFCC9, 0x4F)
  mem.write8(0xFCCA, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE839)
  expect(cpu.r1.bc).toEqual(0x26B1)
  expect(cpu.r1.de).toEqual(0x8608)
  expect(cpu.r1.hl).toEqual(0xF3CB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6323)
  expect(cpu.r1.iy).toEqual(0xFD31)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb73', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x101B
  cpu.r1.bc = 0x446C
  cpu.r1.de = 0xC2F9
  cpu.r1.hl = 0xB9B1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0820
  cpu.r1.iy = 0xF5D8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7A)
  mem.write8(0x0003, 0x73)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF652, 0x31)
  mem.write8(0xF653, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1075)
  expect(cpu.r1.bc).toEqual(0x446C)
  expect(cpu.r1.de).toEqual(0xC2F9)
  expect(cpu.r1.hl).toEqual(0xB9B1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0820)
  expect(cpu.r1.iy).toEqual(0xF5D8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb74', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6847
  cpu.r1.bc = 0x38C2
  cpu.r1.de = 0x0EA4
  cpu.r1.hl = 0x0825
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD255
  cpu.r1.iy = 0x5E4A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4B)
  mem.write8(0x0003, 0x74)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5E95, 0xFE)
  mem.write8(0x5E96, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6819)
  expect(cpu.r1.bc).toEqual(0x38C2)
  expect(cpu.r1.de).toEqual(0x0EA4)
  expect(cpu.r1.hl).toEqual(0x0825)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD255)
  expect(cpu.r1.iy).toEqual(0x5E4A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb75', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x56F2
  cpu.r1.bc = 0xC034
  cpu.r1.de = 0x6E11
  cpu.r1.hl = 0xD35E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE702
  cpu.r1.iy = 0x60BE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x57)
  mem.write8(0x0003, 0x75)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x6115, 0x21)
  mem.write8(0x6116, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5674)
  expect(cpu.r1.bc).toEqual(0xC034)
  expect(cpu.r1.de).toEqual(0x6E11)
  expect(cpu.r1.hl).toEqual(0xD35E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE702)
  expect(cpu.r1.iy).toEqual(0x60BE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb76', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7375
  cpu.r1.bc = 0xCAFF
  cpu.r1.de = 0xDD80
  cpu.r1.hl = 0xC8ED
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7E39
  cpu.r1.iy = 0x6623
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x53)
  mem.write8(0x0003, 0x76)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x6676, 0x3A)
  mem.write8(0x6677, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7375)
  expect(cpu.r1.bc).toEqual(0xCAFF)
  expect(cpu.r1.de).toEqual(0xDD80)
  expect(cpu.r1.hl).toEqual(0xC8ED)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7E39)
  expect(cpu.r1.iy).toEqual(0x6623)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb77', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAB10
  cpu.r1.bc = 0x983E
  cpu.r1.de = 0x0BDC
  cpu.r1.hl = 0x3B46
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAE51
  cpu.r1.iy = 0x8841
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x02)
  mem.write8(0x0003, 0x77)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8843, 0xD8)
  mem.write8(0x8844, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAB18)
  expect(cpu.r1.bc).toEqual(0x983E)
  expect(cpu.r1.de).toEqual(0x0BDC)
  expect(cpu.r1.hl).toEqual(0x3B46)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAE51)
  expect(cpu.r1.iy).toEqual(0x8841)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb78', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2765
  cpu.r1.bc = 0xCE2F
  cpu.r1.de = 0x4824
  cpu.r1.hl = 0x6930
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAE69
  cpu.r1.iy = 0xFECB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7D)
  mem.write8(0x0003, 0x78)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xFF48, 0xEC)
  mem.write8(0xFF49, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x27B9)
  expect(cpu.r1.bc).toEqual(0xCE2F)
  expect(cpu.r1.de).toEqual(0x4824)
  expect(cpu.r1.hl).toEqual(0x6930)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAE69)
  expect(cpu.r1.iy).toEqual(0xFECB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb79', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB428
  cpu.r1.bc = 0x6355
  cpu.r1.de = 0x7896
  cpu.r1.hl = 0x8A7C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9090
  cpu.r1.iy = 0x1CAE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x23)
  mem.write8(0x0003, 0x79)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1CD1, 0x87)
  mem.write8(0x1CD2, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB498)
  expect(cpu.r1.bc).toEqual(0x6355)
  expect(cpu.r1.de).toEqual(0x7896)
  expect(cpu.r1.hl).toEqual(0x8A7C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9090)
  expect(cpu.r1.iy).toEqual(0x1CAE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb7a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x59F4
  cpu.r1.bc = 0xCA21
  cpu.r1.de = 0x1482
  cpu.r1.hl = 0x3FAE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC6C9
  cpu.r1.iy = 0xD923
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x42)
  mem.write8(0x0003, 0x7A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD965, 0xB3)
  mem.write8(0xD966, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5998)
  expect(cpu.r1.bc).toEqual(0xCA21)
  expect(cpu.r1.de).toEqual(0x1482)
  expect(cpu.r1.hl).toEqual(0x3FAE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC6C9)
  expect(cpu.r1.iy).toEqual(0xD923)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb7b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6314
  cpu.r1.bc = 0x0240
  cpu.r1.de = 0x5EFA
  cpu.r1.hl = 0x5E7B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3E50
  cpu.r1.iy = 0x0A83
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x17)
  mem.write8(0x0003, 0x7B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0A9A, 0xBD)
  mem.write8(0x0A9B, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6398)
  expect(cpu.r1.bc).toEqual(0x0240)
  expect(cpu.r1.de).toEqual(0x5EFA)
  expect(cpu.r1.hl).toEqual(0x5E7B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3E50)
  expect(cpu.r1.iy).toEqual(0x0A83)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb7c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x22A6
  cpu.r1.bc = 0xAFF4
  cpu.r1.de = 0xB89B
  cpu.r1.hl = 0x4DCA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0AC2
  cpu.r1.iy = 0xD371
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF1)
  mem.write8(0x0003, 0x7C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD362, 0x1B)
  mem.write8(0xD363, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2254)
  expect(cpu.r1.bc).toEqual(0xAFF4)
  expect(cpu.r1.de).toEqual(0xB89B)
  expect(cpu.r1.hl).toEqual(0x4DCA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0AC2)
  expect(cpu.r1.iy).toEqual(0xD371)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb7d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1C95
  cpu.r1.bc = 0xD615
  cpu.r1.de = 0x825A
  cpu.r1.hl = 0x5E64
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x32FB
  cpu.r1.iy = 0xAC3B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9F)
  mem.write8(0x0003, 0x7D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xABDA, 0x8A)
  mem.write8(0xABDB, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1CB9)
  expect(cpu.r1.bc).toEqual(0xD615)
  expect(cpu.r1.de).toEqual(0x825A)
  expect(cpu.r1.hl).toEqual(0x5E64)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x32FB)
  expect(cpu.r1.iy).toEqual(0xAC3B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb7e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x503C
  cpu.r1.bc = 0x8DFE
  cpu.r1.de = 0x1019
  cpu.r1.hl = 0x6778
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF7DF
  cpu.r1.iy = 0x9484
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x40)
  mem.write8(0x0003, 0x7E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x94C4, 0x9E)
  mem.write8(0x94C5, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5090)
  expect(cpu.r1.bc).toEqual(0x8DFE)
  expect(cpu.r1.de).toEqual(0x1019)
  expect(cpu.r1.hl).toEqual(0x6778)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF7DF)
  expect(cpu.r1.iy).toEqual(0x9484)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb7f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1B07
  cpu.r1.bc = 0x9EC3
  cpu.r1.de = 0x14BE
  cpu.r1.hl = 0x5EBE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1178
  cpu.r1.iy = 0xCE69
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA2)
  mem.write8(0x0003, 0x7F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xCE0B, 0x47)
  mem.write8(0xCE0C, 0xFF)

  while (cpu.tStates < 20) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1B5D)
  expect(cpu.r1.bc).toEqual(0x9EC3)
  expect(cpu.r1.de).toEqual(0x14BE)
  expect(cpu.r1.hl).toEqual(0x5EBE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1178)
  expect(cpu.r1.iy).toEqual(0xCE69)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(20)
})

test('Test fdcb80', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE196
  cpu.r1.bc = 0x72EA
  cpu.r1.de = 0x507E
  cpu.r1.hl = 0x6457
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAB75
  cpu.r1.iy = 0x920D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8B)
  mem.write8(0x0003, 0x80)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x9198, 0xA9)
  mem.write8(0x9199, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE196)
  expect(cpu.r1.bc).toEqual(0xA8EA)
  expect(cpu.r1.de).toEqual(0x507E)
  expect(cpu.r1.hl).toEqual(0x6457)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAB75)
  expect(cpu.r1.iy).toEqual(0x920D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb81', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3D3D
  cpu.r1.bc = 0xB255
  cpu.r1.de = 0x8759
  cpu.r1.hl = 0x0CB0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE078
  cpu.r1.iy = 0x82A5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x55)
  mem.write8(0x0003, 0x81)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x82FA, 0xFA)
  mem.write8(0x82FB, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3D3D)
  expect(cpu.r1.bc).toEqual(0xB2FA)
  expect(cpu.r1.de).toEqual(0x8759)
  expect(cpu.r1.hl).toEqual(0x0CB0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE078)
  expect(cpu.r1.iy).toEqual(0x82A5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb82', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4E10
  cpu.r1.bc = 0x5D8D
  cpu.r1.de = 0x27A0
  cpu.r1.hl = 0xFFFF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEE0A
  cpu.r1.iy = 0x5DD8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9C)
  mem.write8(0x0003, 0x82)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5D74, 0x9D)
  mem.write8(0x5D75, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4E10)
  expect(cpu.r1.bc).toEqual(0x5D8D)
  expect(cpu.r1.de).toEqual(0x9CA0)
  expect(cpu.r1.hl).toEqual(0xFFFF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEE0A)
  expect(cpu.r1.iy).toEqual(0x5DD8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb83', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3C7F
  cpu.r1.bc = 0xFD81
  cpu.r1.de = 0x47FB
  cpu.r1.hl = 0x9F12
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCBF9
  cpu.r1.iy = 0x374A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x28)
  mem.write8(0x0003, 0x83)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3772, 0xD5)
  mem.write8(0x3773, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3C7F)
  expect(cpu.r1.bc).toEqual(0xFD81)
  expect(cpu.r1.de).toEqual(0x47D4)
  expect(cpu.r1.hl).toEqual(0x9F12)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCBF9)
  expect(cpu.r1.iy).toEqual(0x374A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb84', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6872
  cpu.r1.bc = 0x81B1
  cpu.r1.de = 0x1E7A
  cpu.r1.hl = 0xE37E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9B4C
  cpu.r1.iy = 0xF1C3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAA)
  mem.write8(0x0003, 0x84)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF16D, 0xEA)
  mem.write8(0xF16E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6872)
  expect(cpu.r1.bc).toEqual(0x81B1)
  expect(cpu.r1.de).toEqual(0x1E7A)
  expect(cpu.r1.hl).toEqual(0xEA7E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9B4C)
  expect(cpu.r1.iy).toEqual(0xF1C3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb85', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x25B3
  cpu.r1.bc = 0x5694
  cpu.r1.de = 0x57CD
  cpu.r1.hl = 0xF34D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8ED2
  cpu.r1.iy = 0x0433
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6C)
  mem.write8(0x0003, 0x85)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x049F, 0xE0)
  mem.write8(0x04A0, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x25B3)
  expect(cpu.r1.bc).toEqual(0x5694)
  expect(cpu.r1.de).toEqual(0x57CD)
  expect(cpu.r1.hl).toEqual(0xF3E0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8ED2)
  expect(cpu.r1.iy).toEqual(0x0433)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb86', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x152B
  cpu.r1.bc = 0x8CE1
  cpu.r1.de = 0x818D
  cpu.r1.hl = 0x40F2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9B7A
  cpu.r1.iy = 0x2A50
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7E)
  mem.write8(0x0003, 0x86)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x2ACE, 0x36)
  mem.write8(0x2ACF, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x152B)
  expect(cpu.r1.bc).toEqual(0x8CE1)
  expect(cpu.r1.de).toEqual(0x818D)
  expect(cpu.r1.hl).toEqual(0x40F2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9B7A)
  expect(cpu.r1.iy).toEqual(0x2A50)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb87', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFE1D
  cpu.r1.bc = 0x5353
  cpu.r1.de = 0x618D
  cpu.r1.hl = 0x3266
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1A53
  cpu.r1.iy = 0x246A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x59)
  mem.write8(0x0003, 0x87)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x24C3, 0x65)
  mem.write8(0x24C4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x641D)
  expect(cpu.r1.bc).toEqual(0x5353)
  expect(cpu.r1.de).toEqual(0x618D)
  expect(cpu.r1.hl).toEqual(0x3266)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1A53)
  expect(cpu.r1.iy).toEqual(0x246A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb88', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7D14
  cpu.r1.bc = 0xA0EC
  cpu.r1.de = 0x1E47
  cpu.r1.hl = 0x76E1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3871
  cpu.r1.iy = 0xC60D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD4)
  mem.write8(0x0003, 0x88)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC5E1, 0xD6)
  mem.write8(0xC5E2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7D14)
  expect(cpu.r1.bc).toEqual(0xD4EC)
  expect(cpu.r1.de).toEqual(0x1E47)
  expect(cpu.r1.hl).toEqual(0x76E1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3871)
  expect(cpu.r1.iy).toEqual(0xC60D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb89', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x86C3
  cpu.r1.bc = 0x50A6
  cpu.r1.de = 0x8592
  cpu.r1.hl = 0xD6CA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x947B
  cpu.r1.iy = 0x0A01
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC3)
  mem.write8(0x0003, 0x89)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x09C4, 0xB0)
  mem.write8(0x09C5, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x86C3)
  expect(cpu.r1.bc).toEqual(0x50B0)
  expect(cpu.r1.de).toEqual(0x8592)
  expect(cpu.r1.hl).toEqual(0xD6CA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x947B)
  expect(cpu.r1.iy).toEqual(0x0A01)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb8a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x599C
  cpu.r1.bc = 0x961A
  cpu.r1.de = 0x55F9
  cpu.r1.hl = 0x8470
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD2A5
  cpu.r1.iy = 0xD4D2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF9)
  mem.write8(0x0003, 0x8A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD4CB, 0xD8)
  mem.write8(0xD4CC, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x599C)
  expect(cpu.r1.bc).toEqual(0x961A)
  expect(cpu.r1.de).toEqual(0xD8F9)
  expect(cpu.r1.hl).toEqual(0x8470)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD2A5)
  expect(cpu.r1.iy).toEqual(0xD4D2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb8b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2715
  cpu.r1.bc = 0xA209
  cpu.r1.de = 0xAB47
  cpu.r1.hl = 0x3EAC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF352
  cpu.r1.iy = 0xC71E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xED)
  mem.write8(0x0003, 0x8B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC70B, 0xDC)
  mem.write8(0xC70C, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2715)
  expect(cpu.r1.bc).toEqual(0xA209)
  expect(cpu.r1.de).toEqual(0xABDC)
  expect(cpu.r1.hl).toEqual(0x3EAC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF352)
  expect(cpu.r1.iy).toEqual(0xC71E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb8c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2818
  cpu.r1.bc = 0x4259
  cpu.r1.de = 0xA9B0
  cpu.r1.hl = 0xE7A0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6471
  cpu.r1.iy = 0xA202
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x97)
  mem.write8(0x0003, 0x8C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA199, 0x67)
  mem.write8(0xA19A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2818)
  expect(cpu.r1.bc).toEqual(0x4259)
  expect(cpu.r1.de).toEqual(0xA9B0)
  expect(cpu.r1.hl).toEqual(0x65A0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6471)
  expect(cpu.r1.iy).toEqual(0xA202)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb8d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x14E3
  cpu.r1.bc = 0xC330
  cpu.r1.de = 0x9AA2
  cpu.r1.hl = 0x8418
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0D4F
  cpu.r1.iy = 0x5669
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC9)
  mem.write8(0x0003, 0x8D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5632, 0x9A)
  mem.write8(0x5633, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x14E3)
  expect(cpu.r1.bc).toEqual(0xC330)
  expect(cpu.r1.de).toEqual(0x9AA2)
  expect(cpu.r1.hl).toEqual(0x8498)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0D4F)
  expect(cpu.r1.iy).toEqual(0x5669)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb8e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCB79
  cpu.r1.bc = 0x0FFF
  cpu.r1.de = 0xB244
  cpu.r1.hl = 0xC902
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6246
  cpu.r1.iy = 0x4C81
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC2)
  mem.write8(0x0003, 0x8E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4C43, 0x7F)
  mem.write8(0x4C44, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCB79)
  expect(cpu.r1.bc).toEqual(0x0FFF)
  expect(cpu.r1.de).toEqual(0xB244)
  expect(cpu.r1.hl).toEqual(0xC902)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6246)
  expect(cpu.r1.iy).toEqual(0x4C81)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb8f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x66B4
  cpu.r1.bc = 0x5FBB
  cpu.r1.de = 0x6C9B
  cpu.r1.hl = 0xD0E3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAC5A
  cpu.r1.iy = 0x6B51
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD4)
  mem.write8(0x0003, 0x8F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x6B25, 0x59)
  mem.write8(0x6B26, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x59B4)
  expect(cpu.r1.bc).toEqual(0x5FBB)
  expect(cpu.r1.de).toEqual(0x6C9B)
  expect(cpu.r1.hl).toEqual(0xD0E3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAC5A)
  expect(cpu.r1.iy).toEqual(0x6B51)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb90', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1305
  cpu.r1.bc = 0x1CE1
  cpu.r1.de = 0xD627
  cpu.r1.hl = 0x7402
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB470
  cpu.r1.iy = 0xD7F5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFD)
  mem.write8(0x0003, 0x90)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD7F2, 0x70)
  mem.write8(0xD7F3, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1305)
  expect(cpu.r1.bc).toEqual(0x70E1)
  expect(cpu.r1.de).toEqual(0xD627)
  expect(cpu.r1.hl).toEqual(0x7402)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB470)
  expect(cpu.r1.iy).toEqual(0xD7F5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb91', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x10DF
  cpu.r1.bc = 0xC48F
  cpu.r1.de = 0x0213
  cpu.r1.hl = 0xFC7E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBFAB
  cpu.r1.iy = 0x47D2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBF)
  mem.write8(0x0003, 0x91)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4791, 0x0E)
  mem.write8(0x4792, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x10DF)
  expect(cpu.r1.bc).toEqual(0xC40A)
  expect(cpu.r1.de).toEqual(0x0213)
  expect(cpu.r1.hl).toEqual(0xFC7E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBFAB)
  expect(cpu.r1.iy).toEqual(0x47D2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb92', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6A11
  cpu.r1.bc = 0xF89E
  cpu.r1.de = 0xF49D
  cpu.r1.hl = 0xC115
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBC5D
  cpu.r1.iy = 0x313A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0B)
  mem.write8(0x0003, 0x92)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3145, 0xF6)
  mem.write8(0x3146, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6A11)
  expect(cpu.r1.bc).toEqual(0xF89E)
  expect(cpu.r1.de).toEqual(0xF29D)
  expect(cpu.r1.hl).toEqual(0xC115)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBC5D)
  expect(cpu.r1.iy).toEqual(0x313A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb93', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x61E5
  cpu.r1.bc = 0xCC2C
  cpu.r1.de = 0x959A
  cpu.r1.hl = 0xB52B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFA64
  cpu.r1.iy = 0x2940
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x52)
  mem.write8(0x0003, 0x93)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x2992, 0x38)
  mem.write8(0x2993, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x61E5)
  expect(cpu.r1.bc).toEqual(0xCC2C)
  expect(cpu.r1.de).toEqual(0x9538)
  expect(cpu.r1.hl).toEqual(0xB52B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFA64)
  expect(cpu.r1.iy).toEqual(0x2940)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb94', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x31B4
  cpu.r1.bc = 0x3E5A
  cpu.r1.de = 0xFB3D
  cpu.r1.hl = 0xAB83
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA801
  cpu.r1.iy = 0xFE1C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x95)
  mem.write8(0x0003, 0x94)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xFDB1, 0x48)
  mem.write8(0xFDB2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x31B4)
  expect(cpu.r1.bc).toEqual(0x3E5A)
  expect(cpu.r1.de).toEqual(0xFB3D)
  expect(cpu.r1.hl).toEqual(0x4883)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA801)
  expect(cpu.r1.iy).toEqual(0xFE1C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb95', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x337E
  cpu.r1.bc = 0x63A7
  cpu.r1.de = 0x2918
  cpu.r1.hl = 0xED6B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB12C
  cpu.r1.iy = 0xE776
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x90)
  mem.write8(0x0003, 0x95)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE706, 0xEB)
  mem.write8(0xE707, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x337E)
  expect(cpu.r1.bc).toEqual(0x63A7)
  expect(cpu.r1.de).toEqual(0x2918)
  expect(cpu.r1.hl).toEqual(0xEDEB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB12C)
  expect(cpu.r1.iy).toEqual(0xE776)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb96', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5D99
  cpu.r1.bc = 0xD9EC
  cpu.r1.de = 0xB6D0
  cpu.r1.hl = 0x5ED5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5D9D
  cpu.r1.iy = 0xE6CF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9E)
  mem.write8(0x0003, 0x96)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE66D, 0xFC)
  mem.write8(0xE66E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5D99)
  expect(cpu.r1.bc).toEqual(0xD9EC)
  expect(cpu.r1.de).toEqual(0xB6D0)
  expect(cpu.r1.hl).toEqual(0x5ED5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5D9D)
  expect(cpu.r1.iy).toEqual(0xE6CF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb97', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCCB6
  cpu.r1.bc = 0x8406
  cpu.r1.de = 0x72C6
  cpu.r1.hl = 0x1BA7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6DCA
  cpu.r1.iy = 0x187F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x64)
  mem.write8(0x0003, 0x97)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x18E3, 0x9D)
  mem.write8(0x18E4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x99B6)
  expect(cpu.r1.bc).toEqual(0x8406)
  expect(cpu.r1.de).toEqual(0x72C6)
  expect(cpu.r1.hl).toEqual(0x1BA7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6DCA)
  expect(cpu.r1.iy).toEqual(0x187F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb98', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0495
  cpu.r1.bc = 0x312F
  cpu.r1.de = 0x8000
  cpu.r1.hl = 0xB749
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE9CB
  cpu.r1.iy = 0x43B8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDA)
  mem.write8(0x0003, 0x98)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4392, 0x15)
  mem.write8(0x4393, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0495)
  expect(cpu.r1.bc).toEqual(0x152F)
  expect(cpu.r1.de).toEqual(0x8000)
  expect(cpu.r1.hl).toEqual(0xB749)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE9CB)
  expect(cpu.r1.iy).toEqual(0x43B8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb99', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2824
  cpu.r1.bc = 0xA485
  cpu.r1.de = 0xA30B
  cpu.r1.hl = 0xB286
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x10B0
  cpu.r1.iy = 0xD86C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x78)
  mem.write8(0x0003, 0x99)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD8E4, 0xB5)
  mem.write8(0xD8E5, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2824)
  expect(cpu.r1.bc).toEqual(0xA4B5)
  expect(cpu.r1.de).toEqual(0xA30B)
  expect(cpu.r1.hl).toEqual(0xB286)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x10B0)
  expect(cpu.r1.iy).toEqual(0xD86C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb9a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB0CC
  cpu.r1.bc = 0xC40C
  cpu.r1.de = 0xDC1A
  cpu.r1.hl = 0x014A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2FF9
  cpu.r1.iy = 0xD717
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9C)
  mem.write8(0x0003, 0x9A)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD6B3, 0x9D)
  mem.write8(0xD6B4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB0CC)
  expect(cpu.r1.bc).toEqual(0xC40C)
  expect(cpu.r1.de).toEqual(0x951A)
  expect(cpu.r1.hl).toEqual(0x014A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2FF9)
  expect(cpu.r1.iy).toEqual(0xD717)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb9b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD092
  cpu.r1.bc = 0xA6C2
  cpu.r1.de = 0x7900
  cpu.r1.hl = 0x5448
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFAB0
  cpu.r1.iy = 0xCB1E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x83)
  mem.write8(0x0003, 0x9B)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xCAA1, 0x95)
  mem.write8(0xCAA2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD092)
  expect(cpu.r1.bc).toEqual(0xA6C2)
  expect(cpu.r1.de).toEqual(0x7995)
  expect(cpu.r1.hl).toEqual(0x5448)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFAB0)
  expect(cpu.r1.iy).toEqual(0xCB1E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb9c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB58D
  cpu.r1.bc = 0x1ED1
  cpu.r1.de = 0xE93B
  cpu.r1.hl = 0x9E0C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5605
  cpu.r1.iy = 0x03B3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1E)
  mem.write8(0x0003, 0x9C)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x03D1, 0x78)
  mem.write8(0x03D2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB58D)
  expect(cpu.r1.bc).toEqual(0x1ED1)
  expect(cpu.r1.de).toEqual(0xE93B)
  expect(cpu.r1.hl).toEqual(0x700C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5605)
  expect(cpu.r1.iy).toEqual(0x03B3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb9d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC7E9
  cpu.r1.bc = 0x18D3
  cpu.r1.de = 0x8EED
  cpu.r1.hl = 0xBD7D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9A7F
  cpu.r1.iy = 0xC087
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE6)
  mem.write8(0x0003, 0x9D)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC06D, 0x53)
  mem.write8(0xC06E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC7E9)
  expect(cpu.r1.bc).toEqual(0x18D3)
  expect(cpu.r1.de).toEqual(0x8EED)
  expect(cpu.r1.hl).toEqual(0xBD53)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9A7F)
  expect(cpu.r1.iy).toEqual(0xC087)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb9e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x81C7
  cpu.r1.bc = 0x71DF
  cpu.r1.de = 0x45D5
  cpu.r1.hl = 0x0CA7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x648F
  cpu.r1.iy = 0x41BD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEB)
  mem.write8(0x0003, 0x9E)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x41A8, 0x61)
  mem.write8(0x41A9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x81C7)
  expect(cpu.r1.bc).toEqual(0x71DF)
  expect(cpu.r1.de).toEqual(0x45D5)
  expect(cpu.r1.hl).toEqual(0x0CA7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x648F)
  expect(cpu.r1.iy).toEqual(0x41BD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcb9f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEBF5
  cpu.r1.bc = 0xDC9F
  cpu.r1.de = 0xD490
  cpu.r1.hl = 0x15BE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0E12
  cpu.r1.iy = 0x9D49
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x50)
  mem.write8(0x0003, 0x9F)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x9D99, 0x89)
  mem.write8(0x9D9A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x81F5)
  expect(cpu.r1.bc).toEqual(0xDC9F)
  expect(cpu.r1.de).toEqual(0xD490)
  expect(cpu.r1.hl).toEqual(0x15BE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0E12)
  expect(cpu.r1.iy).toEqual(0x9D49)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8CCB
  cpu.r1.bc = 0x0057
  cpu.r1.de = 0xBC19
  cpu.r1.hl = 0xE543
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8C5D
  cpu.r1.iy = 0xD68D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x76)
  mem.write8(0x0003, 0xA0)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD703, 0xD4)
  mem.write8(0xD704, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8CCB)
  expect(cpu.r1.bc).toEqual(0xC457)
  expect(cpu.r1.de).toEqual(0xBC19)
  expect(cpu.r1.hl).toEqual(0xE543)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8C5D)
  expect(cpu.r1.iy).toEqual(0xD68D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEEE6
  cpu.r1.bc = 0x6DA4
  cpu.r1.de = 0x3A20
  cpu.r1.hl = 0x8BBA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1DE7
  cpu.r1.iy = 0x66C8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x31)
  mem.write8(0x0003, 0xA1)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x66F9, 0xEC)
  mem.write8(0x66FA, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEEE6)
  expect(cpu.r1.bc).toEqual(0x6DEC)
  expect(cpu.r1.de).toEqual(0x3A20)
  expect(cpu.r1.hl).toEqual(0x8BBA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1DE7)
  expect(cpu.r1.iy).toEqual(0x66C8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3F89
  cpu.r1.bc = 0x5120
  cpu.r1.de = 0x0BD1
  cpu.r1.hl = 0xE669
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2993
  cpu.r1.iy = 0x04BF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0E)
  mem.write8(0x0003, 0xA2)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x04CD, 0x47)
  mem.write8(0x04CE, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3F89)
  expect(cpu.r1.bc).toEqual(0x5120)
  expect(cpu.r1.de).toEqual(0x47D1)
  expect(cpu.r1.hl).toEqual(0xE669)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2993)
  expect(cpu.r1.iy).toEqual(0x04BF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4439
  cpu.r1.bc = 0x6B8B
  cpu.r1.de = 0x6178
  cpu.r1.hl = 0x1246
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4CDB
  cpu.r1.iy = 0xAD77
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x05)
  mem.write8(0x0003, 0xA3)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xAD7C, 0x59)
  mem.write8(0xAD7D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4439)
  expect(cpu.r1.bc).toEqual(0x6B8B)
  expect(cpu.r1.de).toEqual(0x6149)
  expect(cpu.r1.hl).toEqual(0x1246)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4CDB)
  expect(cpu.r1.iy).toEqual(0xAD77)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3385
  cpu.r1.bc = 0x261E
  cpu.r1.de = 0xA487
  cpu.r1.hl = 0xB3BD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4B8F
  cpu.r1.iy = 0xC0CD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x66)
  mem.write8(0x0003, 0xA4)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC133, 0xC5)
  mem.write8(0xC134, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3385)
  expect(cpu.r1.bc).toEqual(0x261E)
  expect(cpu.r1.de).toEqual(0xA487)
  expect(cpu.r1.hl).toEqual(0xC5BD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4B8F)
  expect(cpu.r1.iy).toEqual(0xC0CD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6E70
  cpu.r1.bc = 0xB7ED
  cpu.r1.de = 0x22CD
  cpu.r1.hl = 0xAEDC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x46DE
  cpu.r1.iy = 0xF1A1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA0)
  mem.write8(0x0003, 0xA5)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF141, 0x44)
  mem.write8(0xF142, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6E70)
  expect(cpu.r1.bc).toEqual(0xB7ED)
  expect(cpu.r1.de).toEqual(0x22CD)
  expect(cpu.r1.hl).toEqual(0xAE44)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x46DE)
  expect(cpu.r1.iy).toEqual(0xF1A1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x814B
  cpu.r1.bc = 0x6408
  cpu.r1.de = 0x3DCB
  cpu.r1.hl = 0x971F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5716
  cpu.r1.iy = 0x93F3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x76)
  mem.write8(0x0003, 0xA6)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x9469, 0xBC)
  mem.write8(0x946A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x814B)
  expect(cpu.r1.bc).toEqual(0x6408)
  expect(cpu.r1.de).toEqual(0x3DCB)
  expect(cpu.r1.hl).toEqual(0x971F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5716)
  expect(cpu.r1.iy).toEqual(0x93F3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA4C2
  cpu.r1.bc = 0x679E
  cpu.r1.de = 0xC313
  cpu.r1.hl = 0x61DF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x67E6
  cpu.r1.iy = 0x79C4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x66)
  mem.write8(0x0003, 0xA7)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x7A2A, 0x2E)
  mem.write8(0x7A2B, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2EC2)
  expect(cpu.r1.bc).toEqual(0x679E)
  expect(cpu.r1.de).toEqual(0xC313)
  expect(cpu.r1.hl).toEqual(0x61DF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x67E6)
  expect(cpu.r1.iy).toEqual(0x79C4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x537C
  cpu.r1.bc = 0x1FED
  cpu.r1.de = 0x6CBB
  cpu.r1.hl = 0xBD26
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC638
  cpu.r1.iy = 0x0D46
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA9)
  mem.write8(0x0003, 0xA8)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0CEF, 0xB7)
  mem.write8(0x0CF0, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x537C)
  expect(cpu.r1.bc).toEqual(0x97ED)
  expect(cpu.r1.de).toEqual(0x6CBB)
  expect(cpu.r1.hl).toEqual(0xBD26)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC638)
  expect(cpu.r1.iy).toEqual(0x0D46)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcba9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBA5A
  cpu.r1.bc = 0x3076
  cpu.r1.de = 0xCDD7
  cpu.r1.hl = 0x298D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x59AB
  cpu.r1.iy = 0x0F54
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2B)
  mem.write8(0x0003, 0xA9)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0F7F, 0x8F)
  mem.write8(0x0F80, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBA5A)
  expect(cpu.r1.bc).toEqual(0x308F)
  expect(cpu.r1.de).toEqual(0xCDD7)
  expect(cpu.r1.hl).toEqual(0x298D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x59AB)
  expect(cpu.r1.iy).toEqual(0x0F54)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbaa', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x406A
  cpu.r1.bc = 0x2ED6
  cpu.r1.de = 0xFA8C
  cpu.r1.hl = 0xC633
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x87CB
  cpu.r1.iy = 0xB3D1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0B)
  mem.write8(0x0003, 0xAA)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB3DC, 0x3A)
  mem.write8(0xB3DD, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x406A)
  expect(cpu.r1.bc).toEqual(0x2ED6)
  expect(cpu.r1.de).toEqual(0x1A8C)
  expect(cpu.r1.hl).toEqual(0xC633)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x87CB)
  expect(cpu.r1.iy).toEqual(0xB3D1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbab', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDA61
  cpu.r1.bc = 0x0521
  cpu.r1.de = 0xA123
  cpu.r1.hl = 0xC7FA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB71A
  cpu.r1.iy = 0x8ECE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA9)
  mem.write8(0x0003, 0xAB)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8E77, 0x1F)
  mem.write8(0x8E78, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDA61)
  expect(cpu.r1.bc).toEqual(0x0521)
  expect(cpu.r1.de).toEqual(0xA11F)
  expect(cpu.r1.hl).toEqual(0xC7FA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB71A)
  expect(cpu.r1.iy).toEqual(0x8ECE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbac', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x34A3
  cpu.r1.bc = 0x81CE
  cpu.r1.de = 0x07D6
  cpu.r1.hl = 0xF3A4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x430B
  cpu.r1.iy = 0x0525
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x23)
  mem.write8(0x0003, 0xAC)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0548, 0x9C)
  mem.write8(0x0549, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x34A3)
  expect(cpu.r1.bc).toEqual(0x81CE)
  expect(cpu.r1.de).toEqual(0x07D6)
  expect(cpu.r1.hl).toEqual(0x9CA4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x430B)
  expect(cpu.r1.iy).toEqual(0x0525)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbad', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5010
  cpu.r1.bc = 0x918E
  cpu.r1.de = 0xDDBC
  cpu.r1.hl = 0x4F89
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x88C5
  cpu.r1.iy = 0x948F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4E)
  mem.write8(0x0003, 0xAD)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x94DD, 0x37)
  mem.write8(0x94DE, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5010)
  expect(cpu.r1.bc).toEqual(0x918E)
  expect(cpu.r1.de).toEqual(0xDDBC)
  expect(cpu.r1.hl).toEqual(0x4F17)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x88C5)
  expect(cpu.r1.iy).toEqual(0x948F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbae', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEC0D
  cpu.r1.bc = 0xB57E
  cpu.r1.de = 0x18C6
  cpu.r1.hl = 0x7B01
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBAC6
  cpu.r1.iy = 0x0C1D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0C)
  mem.write8(0x0003, 0xAE)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0C29, 0xA9)
  mem.write8(0x0C2A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEC0D)
  expect(cpu.r1.bc).toEqual(0xB57E)
  expect(cpu.r1.de).toEqual(0x18C6)
  expect(cpu.r1.hl).toEqual(0x7B01)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBAC6)
  expect(cpu.r1.iy).toEqual(0x0C1D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbaf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB322
  cpu.r1.bc = 0x6731
  cpu.r1.de = 0xDAAD
  cpu.r1.hl = 0x8D38
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDD8F
  cpu.r1.iy = 0x26EB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0D)
  mem.write8(0x0003, 0xAF)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x26F8, 0x44)
  mem.write8(0x26F9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4422)
  expect(cpu.r1.bc).toEqual(0x6731)
  expect(cpu.r1.de).toEqual(0xDAAD)
  expect(cpu.r1.hl).toEqual(0x8D38)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDD8F)
  expect(cpu.r1.iy).toEqual(0x26EB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB984
  cpu.r1.bc = 0x796C
  cpu.r1.de = 0x44B1
  cpu.r1.hl = 0xFEF9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4069
  cpu.r1.iy = 0xA0CB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5A)
  mem.write8(0x0003, 0xB0)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA125, 0x76)
  mem.write8(0xA126, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB984)
  expect(cpu.r1.bc).toEqual(0x366C)
  expect(cpu.r1.de).toEqual(0x44B1)
  expect(cpu.r1.hl).toEqual(0xFEF9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4069)
  expect(cpu.r1.iy).toEqual(0xA0CB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x59C3
  cpu.r1.bc = 0xAB13
  cpu.r1.de = 0x42EE
  cpu.r1.hl = 0xB764
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8F7F
  cpu.r1.iy = 0xF398
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x82)
  mem.write8(0x0003, 0xB1)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF31A, 0x79)
  mem.write8(0xF31B, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x59C3)
  expect(cpu.r1.bc).toEqual(0xAB39)
  expect(cpu.r1.de).toEqual(0x42EE)
  expect(cpu.r1.hl).toEqual(0xB764)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8F7F)
  expect(cpu.r1.iy).toEqual(0xF398)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF310
  cpu.r1.bc = 0xCEEC
  cpu.r1.de = 0xBBFB
  cpu.r1.hl = 0x3569
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4A6F
  cpu.r1.iy = 0x33F9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x23)
  mem.write8(0x0003, 0xB2)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x341C, 0x7B)
  mem.write8(0x341D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF310)
  expect(cpu.r1.bc).toEqual(0xCEEC)
  expect(cpu.r1.de).toEqual(0x3BFB)
  expect(cpu.r1.hl).toEqual(0x3569)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4A6F)
  expect(cpu.r1.iy).toEqual(0x33F9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9C05
  cpu.r1.bc = 0x0F92
  cpu.r1.de = 0xBD3B
  cpu.r1.hl = 0x553D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC75E
  cpu.r1.iy = 0x51D2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6C)
  mem.write8(0x0003, 0xB3)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x523E, 0x37)
  mem.write8(0x523F, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9C05)
  expect(cpu.r1.bc).toEqual(0x0F92)
  expect(cpu.r1.de).toEqual(0xBD37)
  expect(cpu.r1.hl).toEqual(0x553D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC75E)
  expect(cpu.r1.iy).toEqual(0x51D2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3E55
  cpu.r1.bc = 0x1338
  cpu.r1.de = 0x638D
  cpu.r1.hl = 0x353C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x44AD
  cpu.r1.iy = 0x4D17
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC5)
  mem.write8(0x0003, 0xB4)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4CDC, 0xE9)
  mem.write8(0x4CDD, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3E55)
  expect(cpu.r1.bc).toEqual(0x1338)
  expect(cpu.r1.de).toEqual(0x638D)
  expect(cpu.r1.hl).toEqual(0xA93C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x44AD)
  expect(cpu.r1.iy).toEqual(0x4D17)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2F3A
  cpu.r1.bc = 0xB709
  cpu.r1.de = 0x4167
  cpu.r1.hl = 0x57BE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB543
  cpu.r1.iy = 0x8EDD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x50)
  mem.write8(0x0003, 0xB5)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8F2D, 0x0F)
  mem.write8(0x8F2E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2F3A)
  expect(cpu.r1.bc).toEqual(0xB709)
  expect(cpu.r1.de).toEqual(0x4167)
  expect(cpu.r1.hl).toEqual(0x570F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB543)
  expect(cpu.r1.iy).toEqual(0x8EDD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA887
  cpu.r1.bc = 0x519B
  cpu.r1.de = 0xC91B
  cpu.r1.hl = 0xCC91
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA416
  cpu.r1.iy = 0x1E16
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3A)
  mem.write8(0x0003, 0xB6)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1E50, 0x13)
  mem.write8(0x1E51, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA887)
  expect(cpu.r1.bc).toEqual(0x519B)
  expect(cpu.r1.de).toEqual(0xC91B)
  expect(cpu.r1.hl).toEqual(0xCC91)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA416)
  expect(cpu.r1.iy).toEqual(0x1E16)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1335
  cpu.r1.bc = 0xA599
  cpu.r1.de = 0x9FBF
  cpu.r1.hl = 0xC111
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8BC5
  cpu.r1.iy = 0x00A9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC0)
  mem.write8(0x0003, 0xB7)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0069, 0x38)
  mem.write8(0x006A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3835)
  expect(cpu.r1.bc).toEqual(0xA599)
  expect(cpu.r1.de).toEqual(0x9FBF)
  expect(cpu.r1.hl).toEqual(0xC111)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8BC5)
  expect(cpu.r1.iy).toEqual(0x00A9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD146
  cpu.r1.bc = 0x1138
  cpu.r1.de = 0x1A45
  cpu.r1.hl = 0x8259
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6A03
  cpu.r1.iy = 0xD087
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x31)
  mem.write8(0x0003, 0xB8)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD0B8, 0x17)
  mem.write8(0xD0B9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD146)
  expect(cpu.r1.bc).toEqual(0x1738)
  expect(cpu.r1.de).toEqual(0x1A45)
  expect(cpu.r1.hl).toEqual(0x8259)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6A03)
  expect(cpu.r1.iy).toEqual(0xD087)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbb9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x757B
  cpu.r1.bc = 0x0B9E
  cpu.r1.de = 0x767B
  cpu.r1.hl = 0x2AD1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1498
  cpu.r1.iy = 0xB84E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3B)
  mem.write8(0x0003, 0xB9)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB889, 0xB4)
  mem.write8(0xB88A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x757B)
  expect(cpu.r1.bc).toEqual(0x0B34)
  expect(cpu.r1.de).toEqual(0x767B)
  expect(cpu.r1.hl).toEqual(0x2AD1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1498)
  expect(cpu.r1.iy).toEqual(0xB84E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbba', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x43EF
  cpu.r1.bc = 0x1C58
  cpu.r1.de = 0xDDA3
  cpu.r1.hl = 0x4519
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB67B
  cpu.r1.iy = 0x383F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x38)
  mem.write8(0x0003, 0xBA)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3877, 0xD6)
  mem.write8(0x3878, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x43EF)
  expect(cpu.r1.bc).toEqual(0x1C58)
  expect(cpu.r1.de).toEqual(0x56A3)
  expect(cpu.r1.hl).toEqual(0x4519)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB67B)
  expect(cpu.r1.iy).toEqual(0x383F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbbb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDCCB
  cpu.r1.bc = 0x7AB3
  cpu.r1.de = 0x7615
  cpu.r1.hl = 0x4161
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2942
  cpu.r1.iy = 0xE2FE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x07)
  mem.write8(0x0003, 0xBB)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE305, 0x6E)
  mem.write8(0xE306, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDCCB)
  expect(cpu.r1.bc).toEqual(0x7AB3)
  expect(cpu.r1.de).toEqual(0x766E)
  expect(cpu.r1.hl).toEqual(0x4161)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2942)
  expect(cpu.r1.iy).toEqual(0xE2FE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbbc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0E07
  cpu.r1.bc = 0x34F5
  cpu.r1.de = 0x0995
  cpu.r1.hl = 0xCC42
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9D42
  cpu.r1.iy = 0xAF0C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF8)
  mem.write8(0x0003, 0xBC)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xAF04, 0xCF)
  mem.write8(0xAF05, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0E07)
  expect(cpu.r1.bc).toEqual(0x34F5)
  expect(cpu.r1.de).toEqual(0x0995)
  expect(cpu.r1.hl).toEqual(0x4F42)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9D42)
  expect(cpu.r1.iy).toEqual(0xAF0C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbbd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x30EF
  cpu.r1.bc = 0xE60C
  cpu.r1.de = 0x9BF0
  cpu.r1.hl = 0xA1BF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBD1C
  cpu.r1.iy = 0xDF0D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAA)
  mem.write8(0x0003, 0xBD)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xDEB7, 0x8D)
  mem.write8(0xDEB8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x30EF)
  expect(cpu.r1.bc).toEqual(0xE60C)
  expect(cpu.r1.de).toEqual(0x9BF0)
  expect(cpu.r1.hl).toEqual(0xA10D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBD1C)
  expect(cpu.r1.iy).toEqual(0xDF0D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbbe', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1133
  cpu.r1.bc = 0xBEF6
  cpu.r1.de = 0x5059
  cpu.r1.hl = 0x1089
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD558
  cpu.r1.iy = 0x3D0F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC8)
  mem.write8(0x0003, 0xBE)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3CD7, 0xA1)
  mem.write8(0x3CD8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1133)
  expect(cpu.r1.bc).toEqual(0xBEF6)
  expect(cpu.r1.de).toEqual(0x5059)
  expect(cpu.r1.hl).toEqual(0x1089)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD558)
  expect(cpu.r1.iy).toEqual(0x3D0F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbbf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x83D6
  cpu.r1.bc = 0xC893
  cpu.r1.de = 0x8DB8
  cpu.r1.hl = 0x716B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0956
  cpu.r1.iy = 0xBDE7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFD)
  mem.write8(0x0003, 0xBF)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xBDE4, 0xAC)
  mem.write8(0xBDE5, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2CD6)
  expect(cpu.r1.bc).toEqual(0xC893)
  expect(cpu.r1.de).toEqual(0x8DB8)
  expect(cpu.r1.hl).toEqual(0x716B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0956)
  expect(cpu.r1.iy).toEqual(0xBDE7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3666
  cpu.r1.bc = 0x676C
  cpu.r1.de = 0x35E5
  cpu.r1.hl = 0xDB0A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEA93
  cpu.r1.iy = 0x2B31
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0A)
  mem.write8(0x0003, 0xC0)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x2B3B, 0xEC)
  mem.write8(0x2B3C, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3666)
  expect(cpu.r1.bc).toEqual(0xED6C)
  expect(cpu.r1.de).toEqual(0x35E5)
  expect(cpu.r1.hl).toEqual(0xDB0A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEA93)
  expect(cpu.r1.iy).toEqual(0x2B31)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3902
  cpu.r1.bc = 0xD498
  cpu.r1.de = 0xAF62
  cpu.r1.hl = 0x9821
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x48B8
  cpu.r1.iy = 0xBD67
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x87)
  mem.write8(0x0003, 0xC1)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xBCEE, 0xEE)
  mem.write8(0xBCEF, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3902)
  expect(cpu.r1.bc).toEqual(0xD4EF)
  expect(cpu.r1.de).toEqual(0xAF62)
  expect(cpu.r1.hl).toEqual(0x9821)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x48B8)
  expect(cpu.r1.iy).toEqual(0xBD67)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAD26
  cpu.r1.bc = 0x5A6D
  cpu.r1.de = 0x6762
  cpu.r1.hl = 0x16C9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x495A
  cpu.r1.iy = 0x5B2C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8D)
  mem.write8(0x0003, 0xC2)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5AB9, 0xC2)
  mem.write8(0x5ABA, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAD26)
  expect(cpu.r1.bc).toEqual(0x5A6D)
  expect(cpu.r1.de).toEqual(0xC362)
  expect(cpu.r1.hl).toEqual(0x16C9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x495A)
  expect(cpu.r1.iy).toEqual(0x5B2C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3E6C
  cpu.r1.bc = 0x9A74
  cpu.r1.de = 0xA2EE
  cpu.r1.hl = 0x9838
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEAFA
  cpu.r1.iy = 0xE666
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5A)
  mem.write8(0x0003, 0xC3)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE6C0, 0x4F)
  mem.write8(0xE6C1, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3E6C)
  expect(cpu.r1.bc).toEqual(0x9A74)
  expect(cpu.r1.de).toEqual(0xA24F)
  expect(cpu.r1.hl).toEqual(0x9838)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEAFA)
  expect(cpu.r1.iy).toEqual(0xE666)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBF68
  cpu.r1.bc = 0xD00B
  cpu.r1.de = 0x5283
  cpu.r1.hl = 0x51C2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x517C
  cpu.r1.iy = 0x5D10
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x89)
  mem.write8(0x0003, 0xC4)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5C99, 0x61)
  mem.write8(0x5C9A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBF68)
  expect(cpu.r1.bc).toEqual(0xD00B)
  expect(cpu.r1.de).toEqual(0x5283)
  expect(cpu.r1.hl).toEqual(0x61C2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x517C)
  expect(cpu.r1.iy).toEqual(0x5D10)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x127B
  cpu.r1.bc = 0xDB6A
  cpu.r1.de = 0x00B9
  cpu.r1.hl = 0x5138
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x98F6
  cpu.r1.iy = 0x02BB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA9)
  mem.write8(0x0003, 0xC5)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0264, 0xCD)
  mem.write8(0x0265, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x127B)
  expect(cpu.r1.bc).toEqual(0xDB6A)
  expect(cpu.r1.de).toEqual(0x00B9)
  expect(cpu.r1.hl).toEqual(0x51CD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x98F6)
  expect(cpu.r1.iy).toEqual(0x02BB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x35DA
  cpu.r1.bc = 0x98C2
  cpu.r1.de = 0x3F57
  cpu.r1.hl = 0x44A4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2771
  cpu.r1.iy = 0x76C4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEE)
  mem.write8(0x0003, 0xC6)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x76B2, 0x82)
  mem.write8(0x76B3, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x35DA)
  expect(cpu.r1.bc).toEqual(0x98C2)
  expect(cpu.r1.de).toEqual(0x3F57)
  expect(cpu.r1.hl).toEqual(0x44A4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2771)
  expect(cpu.r1.iy).toEqual(0x76C4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x763F
  cpu.r1.bc = 0xB86F
  cpu.r1.de = 0x12D3
  cpu.r1.hl = 0x7E2D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD870
  cpu.r1.iy = 0xF30B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9E)
  mem.write8(0x0003, 0xC7)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF2A9, 0xD7)
  mem.write8(0xF2AA, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD73F)
  expect(cpu.r1.bc).toEqual(0xB86F)
  expect(cpu.r1.de).toEqual(0x12D3)
  expect(cpu.r1.hl).toEqual(0x7E2D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD870)
  expect(cpu.r1.iy).toEqual(0xF30B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1F81
  cpu.r1.bc = 0xC7C0
  cpu.r1.de = 0x85DA
  cpu.r1.hl = 0x3CDD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD854
  cpu.r1.iy = 0xC412
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x10)
  mem.write8(0x0003, 0xC8)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC422, 0xE9)
  mem.write8(0xC423, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1F81)
  expect(cpu.r1.bc).toEqual(0xEBC0)
  expect(cpu.r1.de).toEqual(0x85DA)
  expect(cpu.r1.hl).toEqual(0x3CDD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD854)
  expect(cpu.r1.iy).toEqual(0xC412)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbc9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xED19
  cpu.r1.bc = 0x3F88
  cpu.r1.de = 0x1370
  cpu.r1.hl = 0xE084
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4FDD
  cpu.r1.iy = 0x8B42
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x61)
  mem.write8(0x0003, 0xC9)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8BA3, 0xB7)
  mem.write8(0x8BA4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xED19)
  expect(cpu.r1.bc).toEqual(0x3FB7)
  expect(cpu.r1.de).toEqual(0x1370)
  expect(cpu.r1.hl).toEqual(0xE084)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4FDD)
  expect(cpu.r1.iy).toEqual(0x8B42)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbca', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC7E5
  cpu.r1.bc = 0x233B
  cpu.r1.de = 0x2312
  cpu.r1.hl = 0xF7F9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE417
  cpu.r1.iy = 0x5190
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1A)
  mem.write8(0x0003, 0xCA)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x51AA, 0x90)
  mem.write8(0x51AB, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC7E5)
  expect(cpu.r1.bc).toEqual(0x233B)
  expect(cpu.r1.de).toEqual(0x9212)
  expect(cpu.r1.hl).toEqual(0xF7F9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE417)
  expect(cpu.r1.iy).toEqual(0x5190)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbcb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBDBA
  cpu.r1.bc = 0xA964
  cpu.r1.de = 0xEA38
  cpu.r1.hl = 0x9422
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFCA3
  cpu.r1.iy = 0x9A72
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5E)
  mem.write8(0x0003, 0xCB)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x9AD0, 0x70)
  mem.write8(0x9AD1, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xBDBA)
  expect(cpu.r1.bc).toEqual(0xA964)
  expect(cpu.r1.de).toEqual(0xEA72)
  expect(cpu.r1.hl).toEqual(0x9422)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFCA3)
  expect(cpu.r1.iy).toEqual(0x9A72)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbcc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0F4F
  cpu.r1.bc = 0x0261
  cpu.r1.de = 0x21B0
  cpu.r1.hl = 0x2097
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x575D
  cpu.r1.iy = 0x14F9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2D)
  mem.write8(0x0003, 0xCC)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1526, 0x4E)
  mem.write8(0x1527, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0F4F)
  expect(cpu.r1.bc).toEqual(0x0261)
  expect(cpu.r1.de).toEqual(0x21B0)
  expect(cpu.r1.hl).toEqual(0x4E97)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x575D)
  expect(cpu.r1.iy).toEqual(0x14F9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbcd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1B79
  cpu.r1.bc = 0x8F9F
  cpu.r1.de = 0x31BF
  cpu.r1.hl = 0x9CA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7ECB
  cpu.r1.iy = 0xBBE9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA1)
  mem.write8(0x0003, 0xCD)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xBB8A, 0x66)
  mem.write8(0xBB8B, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1B79)
  expect(cpu.r1.bc).toEqual(0x8F9F)
  expect(cpu.r1.de).toEqual(0x31BF)
  expect(cpu.r1.hl).toEqual(0x9C66)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7ECB)
  expect(cpu.r1.iy).toEqual(0xBBE9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbce', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8E13
  cpu.r1.bc = 0x968E
  cpu.r1.de = 0x1784
  cpu.r1.hl = 0x0A0A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1E87
  cpu.r1.iy = 0xB8A2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x36)
  mem.write8(0x0003, 0xCE)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB8D8, 0x45)
  mem.write8(0xB8D9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8E13)
  expect(cpu.r1.bc).toEqual(0x968E)
  expect(cpu.r1.de).toEqual(0x1784)
  expect(cpu.r1.hl).toEqual(0x0A0A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1E87)
  expect(cpu.r1.iy).toEqual(0xB8A2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbcf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8D0A
  cpu.r1.bc = 0xA073
  cpu.r1.de = 0xC4BA
  cpu.r1.hl = 0x5B69
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3B47
  cpu.r1.iy = 0xC29C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x70)
  mem.write8(0x0003, 0xCF)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC30C, 0x7A)
  mem.write8(0xC30D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7A0A)
  expect(cpu.r1.bc).toEqual(0xA073)
  expect(cpu.r1.de).toEqual(0xC4BA)
  expect(cpu.r1.hl).toEqual(0x5B69)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3B47)
  expect(cpu.r1.iy).toEqual(0xC29C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE2BB
  cpu.r1.bc = 0x8635
  cpu.r1.de = 0x650C
  cpu.r1.hl = 0x689A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1294
  cpu.r1.iy = 0x3BEB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBC)
  mem.write8(0x0003, 0xD0)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3BA7, 0x20)
  mem.write8(0x3BA8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE2BB)
  expect(cpu.r1.bc).toEqual(0x2435)
  expect(cpu.r1.de).toEqual(0x650C)
  expect(cpu.r1.hl).toEqual(0x689A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1294)
  expect(cpu.r1.iy).toEqual(0x3BEB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5DF8
  cpu.r1.bc = 0xF701
  cpu.r1.de = 0x9494
  cpu.r1.hl = 0x4967
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAD00
  cpu.r1.iy = 0x8C65
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x11)
  mem.write8(0x0003, 0xD1)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8C76, 0xB9)
  mem.write8(0x8C77, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5DF8)
  expect(cpu.r1.bc).toEqual(0xF7BD)
  expect(cpu.r1.de).toEqual(0x9494)
  expect(cpu.r1.hl).toEqual(0x4967)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAD00)
  expect(cpu.r1.iy).toEqual(0x8C65)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9876
  cpu.r1.bc = 0x4BD9
  cpu.r1.de = 0x3148
  cpu.r1.hl = 0x665A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7EAC
  cpu.r1.iy = 0xC051
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFB)
  mem.write8(0x0003, 0xD2)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC04C, 0x51)
  mem.write8(0xC04D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9876)
  expect(cpu.r1.bc).toEqual(0x4BD9)
  expect(cpu.r1.de).toEqual(0x5548)
  expect(cpu.r1.hl).toEqual(0x665A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7EAC)
  expect(cpu.r1.iy).toEqual(0xC051)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8F90
  cpu.r1.bc = 0xBACD
  cpu.r1.de = 0xE87A
  cpu.r1.hl = 0x538F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFE5A
  cpu.r1.iy = 0x0A87
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3E)
  mem.write8(0x0003, 0xD3)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0AC5, 0xE0)
  mem.write8(0x0AC6, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8F90)
  expect(cpu.r1.bc).toEqual(0xBACD)
  expect(cpu.r1.de).toEqual(0xE8E4)
  expect(cpu.r1.hl).toEqual(0x538F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFE5A)
  expect(cpu.r1.iy).toEqual(0x0A87)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x15E2
  cpu.r1.bc = 0x1820
  cpu.r1.de = 0x5588
  cpu.r1.hl = 0xE67F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7193
  cpu.r1.iy = 0x9478
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x36)
  mem.write8(0x0003, 0xD4)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x94AE, 0x7D)
  mem.write8(0x94AF, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x15E2)
  expect(cpu.r1.bc).toEqual(0x1820)
  expect(cpu.r1.de).toEqual(0x5588)
  expect(cpu.r1.hl).toEqual(0x7D7F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7193)
  expect(cpu.r1.iy).toEqual(0x9478)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1409
  cpu.r1.bc = 0x6535
  cpu.r1.de = 0xC371
  cpu.r1.hl = 0xABE2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2E10
  cpu.r1.iy = 0x8608
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x48)
  mem.write8(0x0003, 0xD5)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8650, 0x98)
  mem.write8(0x8651, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1409)
  expect(cpu.r1.bc).toEqual(0x6535)
  expect(cpu.r1.de).toEqual(0xC371)
  expect(cpu.r1.hl).toEqual(0xAB9C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2E10)
  expect(cpu.r1.iy).toEqual(0x8608)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7801
  cpu.r1.bc = 0x78B6
  cpu.r1.de = 0xD191
  cpu.r1.hl = 0x054A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2065
  cpu.r1.iy = 0x6AA3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC9)
  mem.write8(0x0003, 0xD6)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x6A6C, 0x7C)
  mem.write8(0x6A6D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7801)
  expect(cpu.r1.bc).toEqual(0x78B6)
  expect(cpu.r1.de).toEqual(0xD191)
  expect(cpu.r1.hl).toEqual(0x054A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2065)
  expect(cpu.r1.iy).toEqual(0x6AA3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1B6A
  cpu.r1.bc = 0x266E
  cpu.r1.de = 0x387F
  cpu.r1.hl = 0x7FCB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1941
  cpu.r1.iy = 0x36AB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBE)
  mem.write8(0x0003, 0xD7)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x3669, 0x95)
  mem.write8(0x366A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x956A)
  expect(cpu.r1.bc).toEqual(0x266E)
  expect(cpu.r1.de).toEqual(0x387F)
  expect(cpu.r1.hl).toEqual(0x7FCB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1941)
  expect(cpu.r1.iy).toEqual(0x36AB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7B1B
  cpu.r1.bc = 0xA191
  cpu.r1.de = 0xEFEE
  cpu.r1.hl = 0x55B9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF789
  cpu.r1.iy = 0x43F8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBC)
  mem.write8(0x0003, 0xD8)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x43B4, 0xD8)
  mem.write8(0x43B5, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7B1B)
  expect(cpu.r1.bc).toEqual(0xD891)
  expect(cpu.r1.de).toEqual(0xEFEE)
  expect(cpu.r1.hl).toEqual(0x55B9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF789)
  expect(cpu.r1.iy).toEqual(0x43F8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbd9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0FAF
  cpu.r1.bc = 0x4EDA
  cpu.r1.de = 0xC556
  cpu.r1.hl = 0x6ED3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3FC3
  cpu.r1.iy = 0x0A66
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x16)
  mem.write8(0x0003, 0xD9)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0A7C, 0xF4)
  mem.write8(0x0A7D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0FAF)
  expect(cpu.r1.bc).toEqual(0x4EFC)
  expect(cpu.r1.de).toEqual(0xC556)
  expect(cpu.r1.hl).toEqual(0x6ED3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3FC3)
  expect(cpu.r1.iy).toEqual(0x0A66)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbda', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9EA1
  cpu.r1.bc = 0x8186
  cpu.r1.de = 0xC045
  cpu.r1.hl = 0xD6E0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x34D3
  cpu.r1.iy = 0xD0F0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE8)
  mem.write8(0x0003, 0xDA)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD0D8, 0x6B)
  mem.write8(0xD0D9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9EA1)
  expect(cpu.r1.bc).toEqual(0x8186)
  expect(cpu.r1.de).toEqual(0x6B45)
  expect(cpu.r1.hl).toEqual(0xD6E0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x34D3)
  expect(cpu.r1.iy).toEqual(0xD0F0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbdb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5EE0
  cpu.r1.bc = 0xBDEA
  cpu.r1.de = 0xD00E
  cpu.r1.hl = 0x513F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x690A
  cpu.r1.iy = 0x8C29
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7A)
  mem.write8(0x0003, 0xDB)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8CA3, 0x15)
  mem.write8(0x8CA4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5EE0)
  expect(cpu.r1.bc).toEqual(0xBDEA)
  expect(cpu.r1.de).toEqual(0xD01D)
  expect(cpu.r1.hl).toEqual(0x513F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x690A)
  expect(cpu.r1.iy).toEqual(0x8C29)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbdc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5CFA
  cpu.r1.bc = 0x2E2B
  cpu.r1.de = 0x1D17
  cpu.r1.hl = 0xDBF6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA4F2
  cpu.r1.iy = 0x593A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x64)
  mem.write8(0x0003, 0xDC)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x599E, 0x15)
  mem.write8(0x599F, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5CFA)
  expect(cpu.r1.bc).toEqual(0x2E2B)
  expect(cpu.r1.de).toEqual(0x1D17)
  expect(cpu.r1.hl).toEqual(0x1DF6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA4F2)
  expect(cpu.r1.iy).toEqual(0x593A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbdd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8773
  cpu.r1.bc = 0x70A6
  cpu.r1.de = 0x83CE
  cpu.r1.hl = 0x52B8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x35DA
  cpu.r1.iy = 0x1D94
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x75)
  mem.write8(0x0003, 0xDD)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x1E09, 0x28)
  mem.write8(0x1E0A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8773)
  expect(cpu.r1.bc).toEqual(0x70A6)
  expect(cpu.r1.de).toEqual(0x83CE)
  expect(cpu.r1.hl).toEqual(0x5228)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x35DA)
  expect(cpu.r1.iy).toEqual(0x1D94)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbde', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8310
  cpu.r1.bc = 0xFA01
  cpu.r1.de = 0x6C69
  cpu.r1.hl = 0x252A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5291
  cpu.r1.iy = 0xC9E0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x17)
  mem.write8(0x0003, 0xDE)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC9F7, 0x41)
  mem.write8(0xC9F8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8310)
  expect(cpu.r1.bc).toEqual(0xFA01)
  expect(cpu.r1.de).toEqual(0x6C69)
  expect(cpu.r1.hl).toEqual(0x252A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5291)
  expect(cpu.r1.iy).toEqual(0xC9E0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbdf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x780D
  cpu.r1.bc = 0xA722
  cpu.r1.de = 0xE78E
  cpu.r1.hl = 0x50BA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9D67
  cpu.r1.iy = 0xEAC3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x93)
  mem.write8(0x0003, 0xDF)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xEA56, 0xEF)
  mem.write8(0xEA57, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEF0D)
  expect(cpu.r1.bc).toEqual(0xA722)
  expect(cpu.r1.de).toEqual(0xE78E)
  expect(cpu.r1.hl).toEqual(0x50BA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9D67)
  expect(cpu.r1.iy).toEqual(0xEAC3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x10EF
  cpu.r1.bc = 0x4101
  cpu.r1.de = 0x2CA5
  cpu.r1.hl = 0xF752
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4747
  cpu.r1.iy = 0x1507
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x56)
  mem.write8(0x0003, 0xE0)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x155D, 0xB9)
  mem.write8(0x155E, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x10EF)
  expect(cpu.r1.bc).toEqual(0xB901)
  expect(cpu.r1.de).toEqual(0x2CA5)
  expect(cpu.r1.hl).toEqual(0xF752)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4747)
  expect(cpu.r1.iy).toEqual(0x1507)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE4CB
  cpu.r1.bc = 0x6F72
  cpu.r1.de = 0x1C11
  cpu.r1.hl = 0x1426
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x189B
  cpu.r1.iy = 0x0E0D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD1)
  mem.write8(0x0003, 0xE1)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0DDE, 0x16)
  mem.write8(0x0DDF, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE4CB)
  expect(cpu.r1.bc).toEqual(0x6F16)
  expect(cpu.r1.de).toEqual(0x1C11)
  expect(cpu.r1.hl).toEqual(0x1426)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x189B)
  expect(cpu.r1.iy).toEqual(0x0E0D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x11A9
  cpu.r1.bc = 0xBAE8
  cpu.r1.de = 0x938B
  cpu.r1.hl = 0xBAC4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD8ED
  cpu.r1.iy = 0xE49C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x50)
  mem.write8(0x0003, 0xE2)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xE4EC, 0xC2)
  mem.write8(0xE4ED, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x11A9)
  expect(cpu.r1.bc).toEqual(0xBAE8)
  expect(cpu.r1.de).toEqual(0xD28B)
  expect(cpu.r1.hl).toEqual(0xBAC4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD8ED)
  expect(cpu.r1.iy).toEqual(0xE49C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8832
  cpu.r1.bc = 0x952B
  cpu.r1.de = 0x02B2
  cpu.r1.hl = 0x26EF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFB55
  cpu.r1.iy = 0xADA8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xCA)
  mem.write8(0x0003, 0xE3)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xAD72, 0xBA)
  mem.write8(0xAD73, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8832)
  expect(cpu.r1.bc).toEqual(0x952B)
  expect(cpu.r1.de).toEqual(0x02BA)
  expect(cpu.r1.hl).toEqual(0x26EF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFB55)
  expect(cpu.r1.iy).toEqual(0xADA8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3989
  cpu.r1.bc = 0x4142
  cpu.r1.de = 0x89E2
  cpu.r1.hl = 0x785B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0BF7
  cpu.r1.iy = 0x5474
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x62)
  mem.write8(0x0003, 0xE4)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x54D6, 0x7B)
  mem.write8(0x54D7, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3989)
  expect(cpu.r1.bc).toEqual(0x4142)
  expect(cpu.r1.de).toEqual(0x89E2)
  expect(cpu.r1.hl).toEqual(0x7B5B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0BF7)
  expect(cpu.r1.iy).toEqual(0x5474)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE5C5
  cpu.r1.bc = 0xB86D
  cpu.r1.de = 0x41BB
  cpu.r1.hl = 0x315E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1A78
  cpu.r1.iy = 0xA52D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDA)
  mem.write8(0x0003, 0xE5)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA507, 0x4C)
  mem.write8(0xA508, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE5C5)
  expect(cpu.r1.bc).toEqual(0xB86D)
  expect(cpu.r1.de).toEqual(0x41BB)
  expect(cpu.r1.hl).toEqual(0x315C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1A78)
  expect(cpu.r1.iy).toEqual(0xA52D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFD89
  cpu.r1.bc = 0xD888
  cpu.r1.de = 0x1E2F
  cpu.r1.hl = 0xDDF5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x42F5
  cpu.r1.iy = 0x8B06
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x76)
  mem.write8(0x0003, 0xE6)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x8B7C, 0x45)
  mem.write8(0x8B7D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFD89)
  expect(cpu.r1.bc).toEqual(0xD888)
  expect(cpu.r1.de).toEqual(0x1E2F)
  expect(cpu.r1.hl).toEqual(0xDDF5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x42F5)
  expect(cpu.r1.iy).toEqual(0x8B06)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2025
  cpu.r1.bc = 0xD3E9
  cpu.r1.de = 0xD4B6
  cpu.r1.hl = 0xAA30
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x88BD
  cpu.r1.iy = 0xB597
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x11)
  mem.write8(0x0003, 0xE7)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xB5A8, 0xA6)
  mem.write8(0xB5A9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB625)
  expect(cpu.r1.bc).toEqual(0xD3E9)
  expect(cpu.r1.de).toEqual(0xD4B6)
  expect(cpu.r1.hl).toEqual(0xAA30)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x88BD)
  expect(cpu.r1.iy).toEqual(0xB597)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x514D
  cpu.r1.bc = 0xC2AB
  cpu.r1.de = 0x37B5
  cpu.r1.hl = 0x57DE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA4EC
  cpu.r1.iy = 0x0A77
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xED)
  mem.write8(0x0003, 0xE8)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0A64, 0xD0)
  mem.write8(0x0A65, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x514D)
  expect(cpu.r1.bc).toEqual(0xF0AB)
  expect(cpu.r1.de).toEqual(0x37B5)
  expect(cpu.r1.hl).toEqual(0x57DE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA4EC)
  expect(cpu.r1.iy).toEqual(0x0A77)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbe9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x974E
  cpu.r1.bc = 0xD28E
  cpu.r1.de = 0xD5CB
  cpu.r1.hl = 0x6BD4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x158A
  cpu.r1.iy = 0xA84E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x35)
  mem.write8(0x0003, 0xE9)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xA883, 0x2F)
  mem.write8(0xA884, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x974E)
  expect(cpu.r1.bc).toEqual(0xD22F)
  expect(cpu.r1.de).toEqual(0xD5CB)
  expect(cpu.r1.hl).toEqual(0x6BD4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x158A)
  expect(cpu.r1.iy).toEqual(0xA84E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbea', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3EF4
  cpu.r1.bc = 0x3FC6
  cpu.r1.de = 0x4A44
  cpu.r1.hl = 0xE9A4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC877
  cpu.r1.iy = 0x7593
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x93)
  mem.write8(0x0003, 0xEA)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x7526, 0x1B)
  mem.write8(0x7527, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3EF4)
  expect(cpu.r1.bc).toEqual(0x3FC6)
  expect(cpu.r1.de).toEqual(0x3B44)
  expect(cpu.r1.hl).toEqual(0xE9A4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC877)
  expect(cpu.r1.iy).toEqual(0x7593)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbeb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x798F
  cpu.r1.bc = 0x5E9B
  cpu.r1.de = 0x940E
  cpu.r1.hl = 0x2E52
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD6AD
  cpu.r1.iy = 0x2411
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD0)
  mem.write8(0x0003, 0xEB)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x23E1, 0x47)
  mem.write8(0x23E2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x798F)
  expect(cpu.r1.bc).toEqual(0x5E9B)
  expect(cpu.r1.de).toEqual(0x9467)
  expect(cpu.r1.hl).toEqual(0x2E52)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD6AD)
  expect(cpu.r1.iy).toEqual(0x2411)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbec', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x38A4
  cpu.r1.bc = 0x07C0
  cpu.r1.de = 0x6CEE
  cpu.r1.hl = 0xE715
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF160
  cpu.r1.iy = 0xD2EB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF3)
  mem.write8(0x0003, 0xEC)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xD2DE, 0x49)
  mem.write8(0xD2DF, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x38A4)
  expect(cpu.r1.bc).toEqual(0x07C0)
  expect(cpu.r1.de).toEqual(0x6CEE)
  expect(cpu.r1.hl).toEqual(0x6915)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF160)
  expect(cpu.r1.iy).toEqual(0xD2EB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbed', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE0BC
  cpu.r1.bc = 0x70C1
  cpu.r1.de = 0xDE35
  cpu.r1.hl = 0x81C5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD57F
  cpu.r1.iy = 0x0EAB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x58)
  mem.write8(0x0003, 0xED)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x0F03, 0x10)
  mem.write8(0x0F04, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE0BC)
  expect(cpu.r1.bc).toEqual(0x70C1)
  expect(cpu.r1.de).toEqual(0xDE35)
  expect(cpu.r1.hl).toEqual(0x8130)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD57F)
  expect(cpu.r1.iy).toEqual(0x0EAB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbee', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5FCB
  cpu.r1.bc = 0x9007
  cpu.r1.de = 0x1736
  cpu.r1.hl = 0xACA8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4BAB
  cpu.r1.iy = 0x42BC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x02)
  mem.write8(0x0003, 0xEE)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x42BE, 0xD0)
  mem.write8(0x42BF, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5FCB)
  expect(cpu.r1.bc).toEqual(0x9007)
  expect(cpu.r1.de).toEqual(0x1736)
  expect(cpu.r1.hl).toEqual(0xACA8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4BAB)
  expect(cpu.r1.iy).toEqual(0x42BC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbef', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4EE3
  cpu.r1.bc = 0xD344
  cpu.r1.de = 0xCB5B
  cpu.r1.hl = 0xAEB5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDE5F
  cpu.r1.iy = 0x2272
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x58)
  mem.write8(0x0003, 0xEF)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x22CA, 0x09)
  mem.write8(0x22CB, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x29E3)
  expect(cpu.r1.bc).toEqual(0xD344)
  expect(cpu.r1.de).toEqual(0xCB5B)
  expect(cpu.r1.hl).toEqual(0xAEB5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDE5F)
  expect(cpu.r1.iy).toEqual(0x2272)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1080
  cpu.r1.bc = 0xB270
  cpu.r1.de = 0x1B5B
  cpu.r1.hl = 0xA9B7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE89D
  cpu.r1.iy = 0xEE9E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x45)
  mem.write8(0x0003, 0xF0)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xEEE3, 0x2C)
  mem.write8(0xEEE4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1080)
  expect(cpu.r1.bc).toEqual(0x6C70)
  expect(cpu.r1.de).toEqual(0x1B5B)
  expect(cpu.r1.hl).toEqual(0xA9B7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE89D)
  expect(cpu.r1.iy).toEqual(0xEE9E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1702
  cpu.r1.bc = 0xC43B
  cpu.r1.de = 0xD138
  cpu.r1.hl = 0x316F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8067
  cpu.r1.iy = 0x4783
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2F)
  mem.write8(0x0003, 0xF1)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x47B2, 0xDC)
  mem.write8(0x47B3, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1702)
  expect(cpu.r1.bc).toEqual(0xC4DC)
  expect(cpu.r1.de).toEqual(0xD138)
  expect(cpu.r1.hl).toEqual(0x316F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8067)
  expect(cpu.r1.iy).toEqual(0x4783)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x732A
  cpu.r1.bc = 0x4CD1
  cpu.r1.de = 0x77FE
  cpu.r1.hl = 0x4814
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x42F1
  cpu.r1.iy = 0xEA97
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2C)
  mem.write8(0x0003, 0xF2)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xEAC3, 0x5E)
  mem.write8(0xEAC4, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x732A)
  expect(cpu.r1.bc).toEqual(0x4CD1)
  expect(cpu.r1.de).toEqual(0x5EFE)
  expect(cpu.r1.hl).toEqual(0x4814)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x42F1)
  expect(cpu.r1.iy).toEqual(0xEA97)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6B97
  cpu.r1.bc = 0x59D3
  cpu.r1.de = 0xF546
  cpu.r1.hl = 0x7530
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6670
  cpu.r1.iy = 0x7D90
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x38)
  mem.write8(0x0003, 0xF3)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x7DC8, 0x0C)
  mem.write8(0x7DC9, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6B97)
  expect(cpu.r1.bc).toEqual(0x59D3)
  expect(cpu.r1.de).toEqual(0xF54C)
  expect(cpu.r1.hl).toEqual(0x7530)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6670)
  expect(cpu.r1.iy).toEqual(0x7D90)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7AF0
  cpu.r1.bc = 0xA81F
  cpu.r1.de = 0x5D3A
  cpu.r1.hl = 0x799B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE12B
  cpu.r1.iy = 0x309C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD0)
  mem.write8(0x0003, 0xF4)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x306C, 0x0E)
  mem.write8(0x306D, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7AF0)
  expect(cpu.r1.bc).toEqual(0xA81F)
  expect(cpu.r1.de).toEqual(0x5D3A)
  expect(cpu.r1.hl).toEqual(0x4E9B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE12B)
  expect(cpu.r1.iy).toEqual(0x309C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1370
  cpu.r1.bc = 0xF6B2
  cpu.r1.de = 0xAAA2
  cpu.r1.hl = 0x7F0A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC9F6
  cpu.r1.iy = 0x6B1F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x55)
  mem.write8(0x0003, 0xF5)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x6B74, 0xF8)
  mem.write8(0x6B75, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1370)
  expect(cpu.r1.bc).toEqual(0xF6B2)
  expect(cpu.r1.de).toEqual(0xAAA2)
  expect(cpu.r1.hl).toEqual(0x7FF8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC9F6)
  expect(cpu.r1.iy).toEqual(0x6B1F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7C43
  cpu.r1.bc = 0xFCD1
  cpu.r1.de = 0x34BD
  cpu.r1.hl = 0xF4AB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEF33
  cpu.r1.iy = 0xC61A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x56)
  mem.write8(0x0003, 0xF6)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xC670, 0x5D)
  mem.write8(0xC671, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7C43)
  expect(cpu.r1.bc).toEqual(0xFCD1)
  expect(cpu.r1.de).toEqual(0x34BD)
  expect(cpu.r1.hl).toEqual(0xF4AB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEF33)
  expect(cpu.r1.iy).toEqual(0xC61A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE6DA
  cpu.r1.bc = 0x231A
  cpu.r1.de = 0x7BB1
  cpu.r1.hl = 0x800D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE37E
  cpu.r1.iy = 0x5789
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9E)
  mem.write8(0x0003, 0xF7)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5727, 0x66)
  mem.write8(0x5728, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x66DA)
  expect(cpu.r1.bc).toEqual(0x231A)
  expect(cpu.r1.de).toEqual(0x7BB1)
  expect(cpu.r1.hl).toEqual(0x800D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE37E)
  expect(cpu.r1.iy).toEqual(0x5789)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFA29
  cpu.r1.bc = 0xEE74
  cpu.r1.de = 0xD7C4
  cpu.r1.hl = 0xAFAF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x512C
  cpu.r1.iy = 0xDE7A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x54)
  mem.write8(0x0003, 0xF8)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xDECE, 0x7A)
  mem.write8(0xDECF, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFA29)
  expect(cpu.r1.bc).toEqual(0xFA74)
  expect(cpu.r1.de).toEqual(0xD7C4)
  expect(cpu.r1.hl).toEqual(0xAFAF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x512C)
  expect(cpu.r1.iy).toEqual(0xDE7A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbf9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4662
  cpu.r1.bc = 0xA71B
  cpu.r1.de = 0x5065
  cpu.r1.hl = 0xED06
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x279E
  cpu.r1.iy = 0x99E3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x30)
  mem.write8(0x0003, 0xF9)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x9A13, 0xC6)
  mem.write8(0x9A14, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4662)
  expect(cpu.r1.bc).toEqual(0xA7C6)
  expect(cpu.r1.de).toEqual(0x5065)
  expect(cpu.r1.hl).toEqual(0xED06)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x279E)
  expect(cpu.r1.iy).toEqual(0x99E3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbfa', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9426
  cpu.r1.bc = 0x53EC
  cpu.r1.de = 0x5016
  cpu.r1.hl = 0x6C99
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8B99
  cpu.r1.iy = 0xBD79
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x09)
  mem.write8(0x0003, 0xFA)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xBD82, 0xF4)
  mem.write8(0xBD83, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9426)
  expect(cpu.r1.bc).toEqual(0x53EC)
  expect(cpu.r1.de).toEqual(0xF416)
  expect(cpu.r1.hl).toEqual(0x6C99)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8B99)
  expect(cpu.r1.iy).toEqual(0xBD79)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbfb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5343
  cpu.r1.bc = 0xB212
  cpu.r1.de = 0x09CA
  cpu.r1.hl = 0xE3C6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCD2B
  cpu.r1.iy = 0xF875
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBA)
  mem.write8(0x0003, 0xFB)
  mem.write8(0x0004, 0xFF)
  mem.write8(0xF82F, 0xED)
  mem.write8(0xF830, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5343)
  expect(cpu.r1.bc).toEqual(0xB212)
  expect(cpu.r1.de).toEqual(0x09ED)
  expect(cpu.r1.hl).toEqual(0xE3C6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCD2B)
  expect(cpu.r1.iy).toEqual(0xF875)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbfc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0965
  cpu.r1.bc = 0x4392
  cpu.r1.de = 0xCA25
  cpu.r1.hl = 0x2BAA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF023
  cpu.r1.iy = 0x6623
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x56)
  mem.write8(0x0003, 0xFC)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x6679, 0x65)
  mem.write8(0x667A, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0965)
  expect(cpu.r1.bc).toEqual(0x4392)
  expect(cpu.r1.de).toEqual(0xCA25)
  expect(cpu.r1.hl).toEqual(0xE5AA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF023)
  expect(cpu.r1.iy).toEqual(0x6623)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbfd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1751
  cpu.r1.bc = 0x233C
  cpu.r1.de = 0x6214
  cpu.r1.hl = 0xD119
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC415
  cpu.r1.iy = 0x5D2B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x25)
  mem.write8(0x0003, 0xFD)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x5D50, 0x27)
  mem.write8(0x5D51, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1751)
  expect(cpu.r1.bc).toEqual(0x233C)
  expect(cpu.r1.de).toEqual(0x6214)
  expect(cpu.r1.hl).toEqual(0xD1A7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC415)
  expect(cpu.r1.iy).toEqual(0x5D2B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbfe', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB4CF
  cpu.r1.bc = 0x5639
  cpu.r1.de = 0x677B
  cpu.r1.hl = 0x0CA2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDDC5
  cpu.r1.iy = 0x4E4F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x88)
  mem.write8(0x0003, 0xFE)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x4DD7, 0x4A)
  mem.write8(0x4DD8, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB4CF)
  expect(cpu.r1.bc).toEqual(0x5639)
  expect(cpu.r1.de).toEqual(0x677B)
  expect(cpu.r1.hl).toEqual(0x0CA2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDDC5)
  expect(cpu.r1.iy).toEqual(0x4E4F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

test('Test fdcbff', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF151
  cpu.r1.bc = 0x13DA
  cpu.r1.de = 0x7C56
  cpu.r1.hl = 0xF025
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2B36
  cpu.r1.iy = 0x2AED
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE4)
  mem.write8(0x0003, 0xFF)
  mem.write8(0x0004, 0xFF)
  mem.write8(0x2AD1, 0x97)
  mem.write8(0x2AD2, 0xFF)

  while (cpu.tStates < 23) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9751)
  expect(cpu.r1.bc).toEqual(0x13DA)
  expect(cpu.r1.de).toEqual(0x7C56)
  expect(cpu.r1.hl).toEqual(0xF025)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2B36)
  expect(cpu.r1.iy).toEqual(0x2AED)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(23)
})

const Memory = require("../src/memory")
const Z80 = require("../src/z80")
const { FakePort } = require("../src/port")

test('Test cb00', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDA00
  cpu.r1.bc = 0xE479
  cpu.r1.de = 0x552E
  cpu.r1.hl = 0xA806
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x00)
  mem.write8(0xA806, 0x76)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDA8D)
  expect(cpu.r1.bc).toEqual(0xC979)
  expect(cpu.r1.de).toEqual(0x552E)
  expect(cpu.r1.hl).toEqual(0xA806)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb01', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1000
  cpu.r1.bc = 0xB379
  cpu.r1.de = 0xB480
  cpu.r1.hl = 0xEF65
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x01)
  mem.write8(0xEF65, 0xFB)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x10A0)
  expect(cpu.r1.bc).toEqual(0xB3F2)
  expect(cpu.r1.de).toEqual(0xB480)
  expect(cpu.r1.hl).toEqual(0xEF65)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb02', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2E00
  cpu.r1.bc = 0x9ADF
  cpu.r1.de = 0xAE6E
  cpu.r1.hl = 0xA7F2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x02)
  mem.write8(0xA7F2, 0x4A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2E09)
  expect(cpu.r1.bc).toEqual(0x9ADF)
  expect(cpu.r1.de).toEqual(0x5D6E)
  expect(cpu.r1.hl).toEqual(0xA7F2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb03', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6800
  cpu.r1.bc = 0x9995
  cpu.r1.de = 0xDE3F
  cpu.r1.hl = 0xCA71
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x03)
  mem.write8(0xCA71, 0xE7)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x682C)
  expect(cpu.r1.bc).toEqual(0x9995)
  expect(cpu.r1.de).toEqual(0xDE7E)
  expect(cpu.r1.hl).toEqual(0xCA71)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb04', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8C00
  cpu.r1.bc = 0xBEEA
  cpu.r1.de = 0x0CE4
  cpu.r1.hl = 0x67B0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x04)
  mem.write8(0x67B0, 0xCD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8C88)
  expect(cpu.r1.bc).toEqual(0xBEEA)
  expect(cpu.r1.de).toEqual(0x0CE4)
  expect(cpu.r1.hl).toEqual(0xCEB0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb05', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3600
  cpu.r1.bc = 0xE19F
  cpu.r1.de = 0x78C9
  cpu.r1.hl = 0xCB32
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x05)
  mem.write8(0xCB32, 0x1B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3620)
  expect(cpu.r1.bc).toEqual(0xE19F)
  expect(cpu.r1.de).toEqual(0x78C9)
  expect(cpu.r1.hl).toEqual(0xCB64)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb06', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8A00
  cpu.r1.bc = 0xDB02
  cpu.r1.de = 0x8FB1
  cpu.r1.hl = 0x5B04
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x06)
  mem.write8(0x5B04, 0xD4)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8AAD)
  expect(cpu.r1.bc).toEqual(0xDB02)
  expect(cpu.r1.de).toEqual(0x8FB1)
  expect(cpu.r1.hl).toEqual(0x5B04)
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

test('Test cb07', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6D00
  cpu.r1.bc = 0x19CF
  cpu.r1.de = 0x7259
  cpu.r1.hl = 0xDCAA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x07)
  mem.write8(0xDCAA, 0x8D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDA88)
  expect(cpu.r1.bc).toEqual(0x19CF)
  expect(cpu.r1.de).toEqual(0x7259)
  expect(cpu.r1.hl).toEqual(0xDCAA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb08', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8000
  cpu.r1.bc = 0xCDB5
  cpu.r1.de = 0x818E
  cpu.r1.hl = 0x2EE2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x08)
  mem.write8(0x2EE2, 0x53)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x80A1)
  expect(cpu.r1.bc).toEqual(0xE6B5)
  expect(cpu.r1.de).toEqual(0x818E)
  expect(cpu.r1.hl).toEqual(0x2EE2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb09', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1800
  cpu.r1.bc = 0x125C
  cpu.r1.de = 0xDD97
  cpu.r1.hl = 0x59C6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x09)
  mem.write8(0x59C6, 0x9E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x182C)
  expect(cpu.r1.bc).toEqual(0x122E)
  expect(cpu.r1.de).toEqual(0xDD97)
  expect(cpu.r1.hl).toEqual(0x59C6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb0a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1200
  cpu.r1.bc = 0x3BA1
  cpu.r1.de = 0x7724
  cpu.r1.hl = 0x63AD
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x0A)
  mem.write8(0x63AD, 0x96)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x12AD)
  expect(cpu.r1.bc).toEqual(0x3BA1)
  expect(cpu.r1.de).toEqual(0xBB24)
  expect(cpu.r1.hl).toEqual(0x63AD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb0b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7600
  cpu.r1.bc = 0x2ABF
  cpu.r1.de = 0xB626
  cpu.r1.hl = 0x0289
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x0B)
  mem.write8(0x0289, 0x37)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7600)
  expect(cpu.r1.bc).toEqual(0x2ABF)
  expect(cpu.r1.de).toEqual(0xB613)
  expect(cpu.r1.hl).toEqual(0x0289)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb0c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0E00
  cpu.r1.bc = 0x6FC5
  cpu.r1.de = 0x2F12
  cpu.r1.hl = 0x34D9
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x0C)
  mem.write8(0x34D9, 0x50)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0E08)
  expect(cpu.r1.bc).toEqual(0x6FC5)
  expect(cpu.r1.de).toEqual(0x2F12)
  expect(cpu.r1.hl).toEqual(0x1AD9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb0d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6300
  cpu.r1.bc = 0x95A3
  cpu.r1.de = 0xFCD2
  cpu.r1.hl = 0x519A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x0D)
  mem.write8(0x519A, 0x7A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x630C)
  expect(cpu.r1.bc).toEqual(0x95A3)
  expect(cpu.r1.de).toEqual(0xFCD2)
  expect(cpu.r1.hl).toEqual(0x514D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb0e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFC00
  cpu.r1.bc = 0xADF9
  cpu.r1.de = 0x4925
  cpu.r1.hl = 0x543E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x0E)
  mem.write8(0x543E, 0xD2)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFC2C)
  expect(cpu.r1.bc).toEqual(0xADF9)
  expect(cpu.r1.de).toEqual(0x4925)
  expect(cpu.r1.hl).toEqual(0x543E)
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

test('Test cb0f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC300
  cpu.r1.bc = 0x18F3
  cpu.r1.de = 0x41B8
  cpu.r1.hl = 0x070B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x0F)
  mem.write8(0x070B, 0x86)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE1A5)
  expect(cpu.r1.bc).toEqual(0x18F3)
  expect(cpu.r1.de).toEqual(0x41B8)
  expect(cpu.r1.hl).toEqual(0x070B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb10', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF800
  cpu.r1.bc = 0xDC25
  cpu.r1.de = 0x33B3
  cpu.r1.hl = 0x0D74
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x10)
  mem.write8(0x0D74, 0x3D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF8AD)
  expect(cpu.r1.bc).toEqual(0xB825)
  expect(cpu.r1.de).toEqual(0x33B3)
  expect(cpu.r1.hl).toEqual(0x0D74)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb11', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6500
  cpu.r1.bc = 0xE25C
  cpu.r1.de = 0x4B8A
  cpu.r1.hl = 0xED42
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x11)
  mem.write8(0xED42, 0xB7)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x65AC)
  expect(cpu.r1.bc).toEqual(0xE2B8)
  expect(cpu.r1.de).toEqual(0x4B8A)
  expect(cpu.r1.hl).toEqual(0xED42)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb12', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7700
  cpu.r1.bc = 0x1384
  cpu.r1.de = 0x0F50
  cpu.r1.hl = 0x29C6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x12)
  mem.write8(0x29C6, 0x88)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x770C)
  expect(cpu.r1.bc).toEqual(0x1384)
  expect(cpu.r1.de).toEqual(0x1E50)
  expect(cpu.r1.hl).toEqual(0x29C6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb13', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCE00
  cpu.r1.bc = 0x9F17
  cpu.r1.de = 0xE128
  cpu.r1.hl = 0x3ED7
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x13)
  mem.write8(0x3ED7, 0xEA)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCE04)
  expect(cpu.r1.bc).toEqual(0x9F17)
  expect(cpu.r1.de).toEqual(0xE150)
  expect(cpu.r1.hl).toEqual(0x3ED7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb14', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB200
  cpu.r1.bc = 0x541A
  cpu.r1.de = 0x60C7
  cpu.r1.hl = 0x7C9A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x14)
  mem.write8(0x7C9A, 0x0F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB2A8)
  expect(cpu.r1.bc).toEqual(0x541A)
  expect(cpu.r1.de).toEqual(0x60C7)
  expect(cpu.r1.hl).toEqual(0xF89A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb15', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2D00
  cpu.r1.bc = 0xC1DF
  cpu.r1.de = 0x6EAB
  cpu.r1.hl = 0x03E2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x15)
  mem.write8(0x03E2, 0xBC)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2D81)
  expect(cpu.r1.bc).toEqual(0xC1DF)
  expect(cpu.r1.de).toEqual(0x6EAB)
  expect(cpu.r1.hl).toEqual(0x03C4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb16', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3600
  cpu.r1.bc = 0x3B53
  cpu.r1.de = 0x1A4A
  cpu.r1.hl = 0x684E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x16)
  mem.write8(0x684E, 0xC3)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3681)
  expect(cpu.r1.bc).toEqual(0x3B53)
  expect(cpu.r1.de).toEqual(0x1A4A)
  expect(cpu.r1.hl).toEqual(0x684E)
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

test('Test cb17', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5400
  cpu.r1.bc = 0xD090
  cpu.r1.de = 0xF60D
  cpu.r1.hl = 0x0FA2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x17)
  mem.write8(0x0FA2, 0x23)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA8A8)
  expect(cpu.r1.bc).toEqual(0xD090)
  expect(cpu.r1.de).toEqual(0xF60D)
  expect(cpu.r1.hl).toEqual(0x0FA2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb18', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8600
  cpu.r1.bc = 0xC658
  cpu.r1.de = 0x755F
  cpu.r1.hl = 0x9596
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x18)
  mem.write8(0x9596, 0xB6)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8624)
  expect(cpu.r1.bc).toEqual(0x6358)
  expect(cpu.r1.de).toEqual(0x755F)
  expect(cpu.r1.hl).toEqual(0x9596)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb19', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9600
  cpu.r1.bc = 0xBEB3
  cpu.r1.de = 0x7C22
  cpu.r1.hl = 0x71C8
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x19)
  mem.write8(0x71C8, 0x85)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x960D)
  expect(cpu.r1.bc).toEqual(0xBE59)
  expect(cpu.r1.de).toEqual(0x7C22)
  expect(cpu.r1.hl).toEqual(0x71C8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb1a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3900
  cpu.r1.bc = 0x882F
  cpu.r1.de = 0x543B
  cpu.r1.hl = 0x5279
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x1A)
  mem.write8(0x5279, 0x26)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3928)
  expect(cpu.r1.bc).toEqual(0x882F)
  expect(cpu.r1.de).toEqual(0x2A3B)
  expect(cpu.r1.hl).toEqual(0x5279)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb1b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9E00
  cpu.r1.bc = 0xB338
  cpu.r1.de = 0x876C
  cpu.r1.hl = 0xE8B4
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x1B)
  mem.write8(0xE8B4, 0xB9)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9E24)
  expect(cpu.r1.bc).toEqual(0xB338)
  expect(cpu.r1.de).toEqual(0x8736)
  expect(cpu.r1.hl).toEqual(0xE8B4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb1c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4B00
  cpu.r1.bc = 0xB555
  cpu.r1.de = 0x238F
  cpu.r1.hl = 0x311D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x1C)
  mem.write8(0x311D, 0x11)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4B0D)
  expect(cpu.r1.bc).toEqual(0xB555)
  expect(cpu.r1.de).toEqual(0x238F)
  expect(cpu.r1.hl).toEqual(0x181D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb1d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2100
  cpu.r1.bc = 0x3D7E
  cpu.r1.de = 0x5E39
  cpu.r1.hl = 0xE451
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x1D)
  mem.write8(0xE451, 0x47)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x212D)
  expect(cpu.r1.bc).toEqual(0x3D7E)
  expect(cpu.r1.de).toEqual(0x5E39)
  expect(cpu.r1.hl).toEqual(0xE428)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb1e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5E00
  cpu.r1.bc = 0x66B9
  cpu.r1.de = 0x80DC
  cpu.r1.hl = 0x00EF
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x1E)
  mem.write8(0x00EF, 0x91)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5E0D)
  expect(cpu.r1.bc).toEqual(0x66B9)
  expect(cpu.r1.de).toEqual(0x80DC)
  expect(cpu.r1.hl).toEqual(0x00EF)
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

test('Test cb1f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xED00
  cpu.r1.bc = 0xB838
  cpu.r1.de = 0x8E18
  cpu.r1.hl = 0xACE7
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x1F)
  mem.write8(0xACE7, 0x82)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7621)
  expect(cpu.r1.bc).toEqual(0xB838)
  expect(cpu.r1.de).toEqual(0x8E18)
  expect(cpu.r1.hl).toEqual(0xACE7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb20', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC700
  cpu.r1.bc = 0x0497
  cpu.r1.de = 0xD72B
  cpu.r1.hl = 0xCCB6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x20)
  mem.write8(0xCCB6, 0x1A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC708)
  expect(cpu.r1.bc).toEqual(0x0897)
  expect(cpu.r1.de).toEqual(0xD72B)
  expect(cpu.r1.hl).toEqual(0xCCB6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb21', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2200
  cpu.r1.bc = 0x5CF4
  cpu.r1.de = 0x938E
  cpu.r1.hl = 0x37A8
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x21)
  mem.write8(0x37A8, 0xDD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x22AD)
  expect(cpu.r1.bc).toEqual(0x5CE8)
  expect(cpu.r1.de).toEqual(0x938E)
  expect(cpu.r1.hl).toEqual(0x37A8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb22', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8500
  cpu.r1.bc = 0x0950
  cpu.r1.de = 0xE7E8
  cpu.r1.hl = 0x0641
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x22)
  mem.write8(0x0641, 0x4D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8589)
  expect(cpu.r1.bc).toEqual(0x0950)
  expect(cpu.r1.de).toEqual(0xCEE8)
  expect(cpu.r1.hl).toEqual(0x0641)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb23', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2100
  cpu.r1.bc = 0x2A7C
  cpu.r1.de = 0x37D0
  cpu.r1.hl = 0xAA59
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x23)
  mem.write8(0xAA59, 0xC1)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x21A5)
  expect(cpu.r1.bc).toEqual(0x2A7C)
  expect(cpu.r1.de).toEqual(0x37A0)
  expect(cpu.r1.hl).toEqual(0xAA59)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb24', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFB00
  cpu.r1.bc = 0xB9DE
  cpu.r1.de = 0x7014
  cpu.r1.hl = 0x84B6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x24)
  mem.write8(0x84B6, 0x80)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFB09)
  expect(cpu.r1.bc).toEqual(0xB9DE)
  expect(cpu.r1.de).toEqual(0x7014)
  expect(cpu.r1.hl).toEqual(0x08B6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb25', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1500
  cpu.r1.bc = 0x6BBC
  cpu.r1.de = 0x894E
  cpu.r1.hl = 0x85BC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x25)
  mem.write8(0x85BC, 0xEF)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x152D)
  expect(cpu.r1.bc).toEqual(0x6BBC)
  expect(cpu.r1.de).toEqual(0x894E)
  expect(cpu.r1.hl).toEqual(0x8578)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb26', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0A00
  cpu.r1.bc = 0x372E
  cpu.r1.de = 0xE315
  cpu.r1.hl = 0x283A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x26)
  mem.write8(0x283A, 0xEE)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0A89)
  expect(cpu.r1.bc).toEqual(0x372E)
  expect(cpu.r1.de).toEqual(0xE315)
  expect(cpu.r1.hl).toEqual(0x283A)
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

test('Test cb27', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xBF00
  cpu.r1.bc = 0xBDBA
  cpu.r1.de = 0x67AB
  cpu.r1.hl = 0x5EA2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x27)
  mem.write8(0x5EA2, 0xBD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7E2D)
  expect(cpu.r1.bc).toEqual(0xBDBA)
  expect(cpu.r1.de).toEqual(0x67AB)
  expect(cpu.r1.hl).toEqual(0x5EA2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb28', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC000
  cpu.r1.bc = 0x0435
  cpu.r1.de = 0x3E0F
  cpu.r1.hl = 0x021B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x28)
  mem.write8(0x021B, 0x90)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC000)
  expect(cpu.r1.bc).toEqual(0x0235)
  expect(cpu.r1.de).toEqual(0x3E0F)
  expect(cpu.r1.hl).toEqual(0x021B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb29', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0600
  cpu.r1.bc = 0xF142
  cpu.r1.de = 0x6ADA
  cpu.r1.hl = 0xC306
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x29)
  mem.write8(0xC306, 0x5C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0624)
  expect(cpu.r1.bc).toEqual(0xF121)
  expect(cpu.r1.de).toEqual(0x6ADA)
  expect(cpu.r1.hl).toEqual(0xC306)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb2a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3000
  cpu.r1.bc = 0xEC3A
  cpu.r1.de = 0x7F7D
  cpu.r1.hl = 0x3473
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x2A)
  mem.write8(0x3473, 0x34)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x302D)
  expect(cpu.r1.bc).toEqual(0xEC3A)
  expect(cpu.r1.de).toEqual(0x3F7D)
  expect(cpu.r1.hl).toEqual(0x3473)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb2b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE000
  cpu.r1.bc = 0xCCF0
  cpu.r1.de = 0xBBDA
  cpu.r1.hl = 0xB78A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x2B)
  mem.write8(0xB78A, 0xAB)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE0AC)
  expect(cpu.r1.bc).toEqual(0xCCF0)
  expect(cpu.r1.de).toEqual(0xBBED)
  expect(cpu.r1.hl).toEqual(0xB78A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb2c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5B00
  cpu.r1.bc = 0x25C0
  cpu.r1.de = 0x996D
  cpu.r1.hl = 0x1E7B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x2C)
  mem.write8(0x1E7B, 0x2C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5B0C)
  expect(cpu.r1.bc).toEqual(0x25C0)
  expect(cpu.r1.de).toEqual(0x996D)
  expect(cpu.r1.hl).toEqual(0x0F7B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb2d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5E00
  cpu.r1.bc = 0xC51B
  cpu.r1.de = 0x58E3
  cpu.r1.hl = 0x78EA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x2D)
  mem.write8(0x78EA, 0x85)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5EA4)
  expect(cpu.r1.bc).toEqual(0xC51B)
  expect(cpu.r1.de).toEqual(0x58E3)
  expect(cpu.r1.hl).toEqual(0x78F5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb2e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3900
  cpu.r1.bc = 0xA2CD
  cpu.r1.de = 0x0629
  cpu.r1.hl = 0x24BF
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x2E)
  mem.write8(0x24BF, 0xB5)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3989)
  expect(cpu.r1.bc).toEqual(0xA2CD)
  expect(cpu.r1.de).toEqual(0x0629)
  expect(cpu.r1.hl).toEqual(0x24BF)
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

test('Test cb2f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAA00
  cpu.r1.bc = 0xA194
  cpu.r1.de = 0xD0E3
  cpu.r1.hl = 0x5C65
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x2F)
  mem.write8(0x5C65, 0xC9)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD580)
  expect(cpu.r1.bc).toEqual(0xA194)
  expect(cpu.r1.de).toEqual(0xD0E3)
  expect(cpu.r1.hl).toEqual(0x5C65)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb30', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCD00
  cpu.r1.bc = 0x7A81
  cpu.r1.de = 0xD67B
  cpu.r1.hl = 0x656B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x30)
  mem.write8(0x656B, 0x32)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCDA4)
  expect(cpu.r1.bc).toEqual(0xF581)
  expect(cpu.r1.de).toEqual(0xD67B)
  expect(cpu.r1.hl).toEqual(0x656B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb31', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2800
  cpu.r1.bc = 0xE7FA
  cpu.r1.de = 0x6D8C
  cpu.r1.hl = 0x75A4
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x31)
  mem.write8(0x75A4, 0x0C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x28A5)
  expect(cpu.r1.bc).toEqual(0xE7F5)
  expect(cpu.r1.de).toEqual(0x6D8C)
  expect(cpu.r1.hl).toEqual(0x75A4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb32', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1300
  cpu.r1.bc = 0x3F36
  cpu.r1.de = 0xF608
  cpu.r1.hl = 0x5E56
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x32)
  mem.write8(0x5E56, 0x8D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x13AD)
  expect(cpu.r1.bc).toEqual(0x3F36)
  expect(cpu.r1.de).toEqual(0xED08)
  expect(cpu.r1.hl).toEqual(0x5E56)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb33', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD500
  cpu.r1.bc = 0x9720
  cpu.r1.de = 0x7644
  cpu.r1.hl = 0x038F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x33)
  mem.write8(0x038F, 0xBA)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD588)
  expect(cpu.r1.bc).toEqual(0x9720)
  expect(cpu.r1.de).toEqual(0x7689)
  expect(cpu.r1.hl).toEqual(0x038F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb34', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1200
  cpu.r1.bc = 0x77F6
  cpu.r1.de = 0x0206
  cpu.r1.hl = 0xFB38
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x34)
  mem.write8(0xFB38, 0x07)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x12A1)
  expect(cpu.r1.bc).toEqual(0x77F6)
  expect(cpu.r1.de).toEqual(0x0206)
  expect(cpu.r1.hl).toEqual(0xF738)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb35', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3C00
  cpu.r1.bc = 0xFD68
  cpu.r1.de = 0xEA91
  cpu.r1.hl = 0x7861
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x35)
  mem.write8(0x7861, 0x72)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3C84)
  expect(cpu.r1.bc).toEqual(0xFD68)
  expect(cpu.r1.de).toEqual(0xEA91)
  expect(cpu.r1.hl).toEqual(0x78C3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb36', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8A00
  cpu.r1.bc = 0x1185
  cpu.r1.de = 0x1DDE
  cpu.r1.hl = 0x6D38
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x36)
  mem.write8(0x6D38, 0xF1)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8AA1)
  expect(cpu.r1.bc).toEqual(0x1185)
  expect(cpu.r1.de).toEqual(0x1DDE)
  expect(cpu.r1.hl).toEqual(0x6D38)
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

test('Test cb37', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4300
  cpu.r1.bc = 0xD7BC
  cpu.r1.de = 0x9133
  cpu.r1.hl = 0x6E56
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x37)
  mem.write8(0x6E56, 0xF8)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8784)
  expect(cpu.r1.bc).toEqual(0xD7BC)
  expect(cpu.r1.de).toEqual(0x9133)
  expect(cpu.r1.hl).toEqual(0x6E56)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb38', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDF00
  cpu.r1.bc = 0x7C1B
  cpu.r1.de = 0x9F9F
  cpu.r1.hl = 0x4FF2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x38)
  mem.write8(0x4FF2, 0xAA)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDF28)
  expect(cpu.r1.bc).toEqual(0x3E1B)
  expect(cpu.r1.de).toEqual(0x9F9F)
  expect(cpu.r1.hl).toEqual(0x4FF2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb39', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6600
  cpu.r1.bc = 0xB702
  cpu.r1.de = 0x14F5
  cpu.r1.hl = 0x3C17
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x39)
  mem.write8(0x3C17, 0x61)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6600)
  expect(cpu.r1.bc).toEqual(0xB701)
  expect(cpu.r1.de).toEqual(0x14F5)
  expect(cpu.r1.hl).toEqual(0x3C17)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb3a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD100
  cpu.r1.bc = 0x5C5F
  cpu.r1.de = 0xE42E
  cpu.r1.hl = 0xF1B1
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x3A)
  mem.write8(0xF1B1, 0x6E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD124)
  expect(cpu.r1.bc).toEqual(0x5C5F)
  expect(cpu.r1.de).toEqual(0x722E)
  expect(cpu.r1.hl).toEqual(0xF1B1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb3b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB200
  cpu.r1.bc = 0x38C8
  cpu.r1.de = 0xA560
  cpu.r1.hl = 0x7419
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x3B)
  mem.write8(0x7419, 0x11)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB224)
  expect(cpu.r1.bc).toEqual(0x38C8)
  expect(cpu.r1.de).toEqual(0xA530)
  expect(cpu.r1.hl).toEqual(0x7419)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb3c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7800
  cpu.r1.bc = 0xCFAE
  cpu.r1.de = 0x66D8
  cpu.r1.hl = 0x2AD8
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x3C)
  mem.write8(0x2AD8, 0x8D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7800)
  expect(cpu.r1.bc).toEqual(0xCFAE)
  expect(cpu.r1.de).toEqual(0x66D8)
  expect(cpu.r1.hl).toEqual(0x15D8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb3d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE600
  cpu.r1.bc = 0xDCDA
  cpu.r1.de = 0x06AA
  cpu.r1.hl = 0x46CD
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x3D)
  mem.write8(0x46CD, 0xF9)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE625)
  expect(cpu.r1.bc).toEqual(0xDCDA)
  expect(cpu.r1.de).toEqual(0x06AA)
  expect(cpu.r1.hl).toEqual(0x4666)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb3e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA900
  cpu.r1.bc = 0x6A34
  cpu.r1.de = 0xE8D0
  cpu.r1.hl = 0xA96C
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x3E)
  mem.write8(0xA96C, 0xA0)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA904)
  expect(cpu.r1.bc).toEqual(0x6A34)
  expect(cpu.r1.de).toEqual(0xE8D0)
  expect(cpu.r1.hl).toEqual(0xA96C)
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

test('Test cb3f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF100
  cpu.r1.bc = 0xCEEA
  cpu.r1.de = 0x721E
  cpu.r1.hl = 0x77F0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x3F)
  mem.write8(0x77F0, 0x7C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x782D)
  expect(cpu.r1.bc).toEqual(0xCEEA)
  expect(cpu.r1.de).toEqual(0x721E)
  expect(cpu.r1.hl).toEqual(0x77F0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb40', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9E00
  cpu.r1.bc = 0xBCB2
  cpu.r1.de = 0xEFAA
  cpu.r1.hl = 0x505F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x40)
  mem.write8(0x505F, 0x59)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9E7C)
  expect(cpu.r1.bc).toEqual(0xBCB2)
  expect(cpu.r1.de).toEqual(0xEFAA)
  expect(cpu.r1.hl).toEqual(0x505F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb41', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9E00
  cpu.r1.bc = 0x1B43
  cpu.r1.de = 0x954E
  cpu.r1.hl = 0x7BE9
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x41)
  mem.write8(0x7BE9, 0xF7)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9E10)
  expect(cpu.r1.bc).toEqual(0x1B43)
  expect(cpu.r1.de).toEqual(0x954E)
  expect(cpu.r1.hl).toEqual(0x7BE9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb42', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF200
  cpu.r1.bc = 0xDD12
  cpu.r1.de = 0x7D4F
  cpu.r1.hl = 0x551F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x42)
  mem.write8(0x551F, 0xC9)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF238)
  expect(cpu.r1.bc).toEqual(0xDD12)
  expect(cpu.r1.de).toEqual(0x7D4F)
  expect(cpu.r1.hl).toEqual(0x551F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb43', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAD00
  cpu.r1.bc = 0xC3B3
  cpu.r1.de = 0xF1D0
  cpu.r1.hl = 0xBAB4
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x43)
  mem.write8(0xBAB4, 0x76)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAD54)
  expect(cpu.r1.bc).toEqual(0xC3B3)
  expect(cpu.r1.de).toEqual(0xF1D0)
  expect(cpu.r1.hl).toEqual(0xBAB4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb44', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB700
  cpu.r1.bc = 0xC829
  cpu.r1.de = 0x27E3
  cpu.r1.hl = 0x5B92
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x44)
  mem.write8(0x5B92, 0x78)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB718)
  expect(cpu.r1.bc).toEqual(0xC829)
  expect(cpu.r1.de).toEqual(0x27E3)
  expect(cpu.r1.hl).toEqual(0x5B92)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb45', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7700
  cpu.r1.bc = 0x68EE
  cpu.r1.de = 0x0C77
  cpu.r1.hl = 0x409B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x45)
  mem.write8(0x409B, 0x64)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7718)
  expect(cpu.r1.bc).toEqual(0x68EE)
  expect(cpu.r1.de).toEqual(0x0C77)
  expect(cpu.r1.hl).toEqual(0x409B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb46', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7200
  cpu.r1.bc = 0x7AE3
  cpu.r1.de = 0xA11E
  cpu.r1.hl = 0x6131
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x46)
  mem.write8(0x6131, 0xD5)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7210)
  expect(cpu.r1.bc).toEqual(0x7AE3)
  expect(cpu.r1.de).toEqual(0xA11E)
  expect(cpu.r1.hl).toEqual(0x6131)
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

test('Test cb47_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x47)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF38)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb47', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1000
  cpu.r1.bc = 0xD8CA
  cpu.r1.de = 0xE2C4
  cpu.r1.hl = 0x8A8C
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x47)
  mem.write8(0x8A8C, 0x0E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1054)
  expect(cpu.r1.bc).toEqual(0xD8CA)
  expect(cpu.r1.de).toEqual(0xE2C4)
  expect(cpu.r1.hl).toEqual(0x8A8C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb48', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA900
  cpu.r1.bc = 0x6264
  cpu.r1.de = 0xE833
  cpu.r1.hl = 0x6DE0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x48)
  mem.write8(0x6DE0, 0x8C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA930)
  expect(cpu.r1.bc).toEqual(0x6264)
  expect(cpu.r1.de).toEqual(0xE833)
  expect(cpu.r1.hl).toEqual(0x6DE0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb49', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6C00
  cpu.r1.bc = 0xD0F7
  cpu.r1.de = 0x1DB7
  cpu.r1.hl = 0xA040
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x49)
  mem.write8(0xA040, 0x5F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6C30)
  expect(cpu.r1.bc).toEqual(0xD0F7)
  expect(cpu.r1.de).toEqual(0x1DB7)
  expect(cpu.r1.hl).toEqual(0xA040)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb4a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4F00
  cpu.r1.bc = 0xF04C
  cpu.r1.de = 0x5B29
  cpu.r1.hl = 0x77A4
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x4A)
  mem.write8(0x77A4, 0x96)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4F18)
  expect(cpu.r1.bc).toEqual(0xF04C)
  expect(cpu.r1.de).toEqual(0x5B29)
  expect(cpu.r1.hl).toEqual(0x77A4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb4b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5500
  cpu.r1.bc = 0x9848
  cpu.r1.de = 0x095F
  cpu.r1.hl = 0x40CA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x4B)
  mem.write8(0x40CA, 0x8A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5518)
  expect(cpu.r1.bc).toEqual(0x9848)
  expect(cpu.r1.de).toEqual(0x095F)
  expect(cpu.r1.hl).toEqual(0x40CA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb4c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8800
  cpu.r1.bc = 0x0521
  cpu.r1.de = 0xBF31
  cpu.r1.hl = 0x6D5D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x4C)
  mem.write8(0x6D5D, 0xE7)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x887C)
  expect(cpu.r1.bc).toEqual(0x0521)
  expect(cpu.r1.de).toEqual(0xBF31)
  expect(cpu.r1.hl).toEqual(0x6D5D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb4d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF900
  cpu.r1.bc = 0x27D0
  cpu.r1.de = 0x0F7E
  cpu.r1.hl = 0x158D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x4D)
  mem.write8(0x158D, 0xE0)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF95C)
  expect(cpu.r1.bc).toEqual(0x27D0)
  expect(cpu.r1.de).toEqual(0x0F7E)
  expect(cpu.r1.hl).toEqual(0x158D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb4e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2600
  cpu.r1.bc = 0x9207
  cpu.r1.de = 0x459A
  cpu.r1.hl = 0xADA3
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x4E)
  mem.write8(0xADA3, 0x5B)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2618)
  expect(cpu.r1.bc).toEqual(0x9207)
  expect(cpu.r1.de).toEqual(0x459A)
  expect(cpu.r1.hl).toEqual(0xADA3)
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

test('Test cb4f_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x4F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF38)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb4f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1700
  cpu.r1.bc = 0x2DC1
  cpu.r1.de = 0xACA2
  cpu.r1.hl = 0x0BCC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x4F)
  mem.write8(0x0BCC, 0xA3)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1710)
  expect(cpu.r1.bc).toEqual(0x2DC1)
  expect(cpu.r1.de).toEqual(0xACA2)
  expect(cpu.r1.hl).toEqual(0x0BCC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb50', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2300
  cpu.r1.bc = 0x2749
  cpu.r1.de = 0x1012
  cpu.r1.hl = 0x84D2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x50)
  mem.write8(0x84D2, 0x6A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2330)
  expect(cpu.r1.bc).toEqual(0x2749)
  expect(cpu.r1.de).toEqual(0x1012)
  expect(cpu.r1.hl).toEqual(0x84D2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb51', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2200
  cpu.r1.bc = 0xB7DB
  cpu.r1.de = 0xE19D
  cpu.r1.hl = 0xAAFC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x51)
  mem.write8(0xAAFC, 0xA6)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x225C)
  expect(cpu.r1.bc).toEqual(0xB7DB)
  expect(cpu.r1.de).toEqual(0xE19D)
  expect(cpu.r1.hl).toEqual(0xAAFC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb52', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8B00
  cpu.r1.bc = 0xFF7A
  cpu.r1.de = 0xB0FF
  cpu.r1.hl = 0xAC44
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x52)
  mem.write8(0xAC44, 0x00)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8B74)
  expect(cpu.r1.bc).toEqual(0xFF7A)
  expect(cpu.r1.de).toEqual(0xB0FF)
  expect(cpu.r1.hl).toEqual(0xAC44)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb53', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6000
  cpu.r1.bc = 0x31A1
  cpu.r1.de = 0xA4F4
  cpu.r1.hl = 0x7C75
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x53)
  mem.write8(0x7C75, 0xAB)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6030)
  expect(cpu.r1.bc).toEqual(0x31A1)
  expect(cpu.r1.de).toEqual(0xA4F4)
  expect(cpu.r1.hl).toEqual(0x7C75)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb54', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3800
  cpu.r1.bc = 0x7CCC
  cpu.r1.de = 0x89CC
  cpu.r1.hl = 0x1999
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x54)
  mem.write8(0x1999, 0x98)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x385C)
  expect(cpu.r1.bc).toEqual(0x7CCC)
  expect(cpu.r1.de).toEqual(0x89CC)
  expect(cpu.r1.hl).toEqual(0x1999)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb55', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF900
  cpu.r1.bc = 0x1F79
  cpu.r1.de = 0x19CD
  cpu.r1.hl = 0xFB4B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x55)
  mem.write8(0xFB4B, 0x0B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF95C)
  expect(cpu.r1.bc).toEqual(0x1F79)
  expect(cpu.r1.de).toEqual(0x19CD)
  expect(cpu.r1.hl).toEqual(0xFB4B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb56', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1500
  cpu.r1.bc = 0x2BFE
  cpu.r1.de = 0xE3B5
  cpu.r1.hl = 0xBBF9
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x56)
  mem.write8(0xBBF9, 0x10)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1554)
  expect(cpu.r1.bc).toEqual(0x2BFE)
  expect(cpu.r1.de).toEqual(0xE3B5)
  expect(cpu.r1.hl).toEqual(0xBBF9)
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

test('Test cb57_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x57)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF38)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb57', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6600
  cpu.r1.bc = 0xAF32
  cpu.r1.de = 0x532A
  cpu.r1.hl = 0xDA50
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x57)
  mem.write8(0xDA50, 0x30)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6630)
  expect(cpu.r1.bc).toEqual(0xAF32)
  expect(cpu.r1.de).toEqual(0x532A)
  expect(cpu.r1.hl).toEqual(0xDA50)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb58', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5000
  cpu.r1.bc = 0x1AEE
  cpu.r1.de = 0x2E47
  cpu.r1.hl = 0x1479
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x58)
  mem.write8(0x1479, 0xA0)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5018)
  expect(cpu.r1.bc).toEqual(0x1AEE)
  expect(cpu.r1.de).toEqual(0x2E47)
  expect(cpu.r1.hl).toEqual(0x1479)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb59', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7200
  cpu.r1.bc = 0x5E68
  cpu.r1.de = 0xFF28
  cpu.r1.hl = 0x2075
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x59)
  mem.write8(0x2075, 0xC1)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7238)
  expect(cpu.r1.bc).toEqual(0x5E68)
  expect(cpu.r1.de).toEqual(0xFF28)
  expect(cpu.r1.hl).toEqual(0x2075)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb5a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEB00
  cpu.r1.bc = 0xFEA7
  cpu.r1.de = 0x17D1
  cpu.r1.hl = 0xD99B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x5A)
  mem.write8(0xD99B, 0xE8)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEB54)
  expect(cpu.r1.bc).toEqual(0xFEA7)
  expect(cpu.r1.de).toEqual(0x17D1)
  expect(cpu.r1.hl).toEqual(0xD99B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb5b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6B00
  cpu.r1.bc = 0x6F2C
  cpu.r1.de = 0x3FE3
  cpu.r1.hl = 0x1691
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x5B)
  mem.write8(0x1691, 0xC7)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6B74)
  expect(cpu.r1.bc).toEqual(0x6F2C)
  expect(cpu.r1.de).toEqual(0x3FE3)
  expect(cpu.r1.hl).toEqual(0x1691)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb5c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3300
  cpu.r1.bc = 0xA7E7
  cpu.r1.de = 0x2077
  cpu.r1.hl = 0x13E9
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x5C)
  mem.write8(0x13E9, 0xAE)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3354)
  expect(cpu.r1.bc).toEqual(0xA7E7)
  expect(cpu.r1.de).toEqual(0x2077)
  expect(cpu.r1.hl).toEqual(0x13E9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb5d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC100
  cpu.r1.bc = 0xAFCC
  cpu.r1.de = 0xC8B1
  cpu.r1.hl = 0xEE49
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x5D)
  mem.write8(0xEE49, 0xA6)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC118)
  expect(cpu.r1.bc).toEqual(0xAFCC)
  expect(cpu.r1.de).toEqual(0xC8B1)
  expect(cpu.r1.hl).toEqual(0xEE49)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb5e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3000
  cpu.r1.bc = 0xAD43
  cpu.r1.de = 0x16C1
  cpu.r1.hl = 0x349A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x5E)
  mem.write8(0x349A, 0x3C)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3038)
  expect(cpu.r1.bc).toEqual(0xAD43)
  expect(cpu.r1.de).toEqual(0x16C1)
  expect(cpu.r1.hl).toEqual(0x349A)
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

test('Test cb5f_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x5F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF38)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb5f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8C00
  cpu.r1.bc = 0x1B67
  cpu.r1.de = 0x2314
  cpu.r1.hl = 0x6133
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x5F)
  mem.write8(0x6133, 0x90)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8C18)
  expect(cpu.r1.bc).toEqual(0x1B67)
  expect(cpu.r1.de).toEqual(0x2314)
  expect(cpu.r1.hl).toEqual(0x6133)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb60', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9900
  cpu.r1.bc = 0x34B5
  cpu.r1.de = 0x0FD8
  cpu.r1.hl = 0x5273
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x60)
  mem.write8(0x5273, 0x0A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9930)
  expect(cpu.r1.bc).toEqual(0x34B5)
  expect(cpu.r1.de).toEqual(0x0FD8)
  expect(cpu.r1.hl).toEqual(0x5273)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb61', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD100
  cpu.r1.bc = 0x219F
  cpu.r1.de = 0x3BB4
  cpu.r1.hl = 0x7C44
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x61)
  mem.write8(0x7C44, 0x77)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD118)
  expect(cpu.r1.bc).toEqual(0x219F)
  expect(cpu.r1.de).toEqual(0x3BB4)
  expect(cpu.r1.hl).toEqual(0x7C44)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb62', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAF00
  cpu.r1.bc = 0xBDF8
  cpu.r1.de = 0xC536
  cpu.r1.hl = 0x8CC5
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x62)
  mem.write8(0x8CC5, 0xAF)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAF54)
  expect(cpu.r1.bc).toEqual(0xBDF8)
  expect(cpu.r1.de).toEqual(0xC536)
  expect(cpu.r1.hl).toEqual(0x8CC5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb63', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2A00
  cpu.r1.bc = 0x5E16
  cpu.r1.de = 0xF627
  cpu.r1.hl = 0x84CA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x63)
  mem.write8(0x84CA, 0xE6)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2A74)
  expect(cpu.r1.bc).toEqual(0x5E16)
  expect(cpu.r1.de).toEqual(0xF627)
  expect(cpu.r1.hl).toEqual(0x84CA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb64', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA900
  cpu.r1.bc = 0xA365
  cpu.r1.de = 0xC00B
  cpu.r1.hl = 0xEA94
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x64)
  mem.write8(0xEA94, 0x0C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA97C)
  expect(cpu.r1.bc).toEqual(0xA365)
  expect(cpu.r1.de).toEqual(0xC00B)
  expect(cpu.r1.hl).toEqual(0xEA94)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb65', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1800
  cpu.r1.bc = 0x8D58
  cpu.r1.de = 0x4256
  cpu.r1.hl = 0x427A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x65)
  mem.write8(0x427A, 0xEE)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1838)
  expect(cpu.r1.bc).toEqual(0x8D58)
  expect(cpu.r1.de).toEqual(0x4256)
  expect(cpu.r1.hl).toEqual(0x427A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb66', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4C00
  cpu.r1.bc = 0x3EF7
  cpu.r1.de = 0xE544
  cpu.r1.hl = 0xA44F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x66)
  mem.write8(0xA44F, 0xD2)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4C10)
  expect(cpu.r1.bc).toEqual(0x3EF7)
  expect(cpu.r1.de).toEqual(0xE544)
  expect(cpu.r1.hl).toEqual(0xA44F)
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

test('Test cb67_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x67)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF38)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb67', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8600
  cpu.r1.bc = 0x5E92
  cpu.r1.de = 0x2986
  cpu.r1.hl = 0x394D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x67)
  mem.write8(0x394D, 0x10)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8654)
  expect(cpu.r1.bc).toEqual(0x5E92)
  expect(cpu.r1.de).toEqual(0x2986)
  expect(cpu.r1.hl).toEqual(0x394D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb68', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD700
  cpu.r1.bc = 0x0F6A
  cpu.r1.de = 0x18A6
  cpu.r1.hl = 0xDDD2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x68)
  mem.write8(0xDDD2, 0x16)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD75C)
  expect(cpu.r1.bc).toEqual(0x0F6A)
  expect(cpu.r1.de).toEqual(0x18A6)
  expect(cpu.r1.hl).toEqual(0xDDD2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb69', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDA00
  cpu.r1.bc = 0x691B
  cpu.r1.de = 0x7C79
  cpu.r1.hl = 0x1DBA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x69)
  mem.write8(0x1DBA, 0x8A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDA5C)
  expect(cpu.r1.bc).toEqual(0x691B)
  expect(cpu.r1.de).toEqual(0x7C79)
  expect(cpu.r1.hl).toEqual(0x1DBA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb6a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2200
  cpu.r1.bc = 0x13E8
  cpu.r1.de = 0x86D4
  cpu.r1.hl = 0x4E09
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x6A)
  mem.write8(0x4E09, 0xD5)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2254)
  expect(cpu.r1.bc).toEqual(0x13E8)
  expect(cpu.r1.de).toEqual(0x86D4)
  expect(cpu.r1.hl).toEqual(0x4E09)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb6b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAF00
  cpu.r1.bc = 0x5123
  cpu.r1.de = 0x7635
  cpu.r1.hl = 0x1CA9
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x6B)
  mem.write8(0x1CA9, 0x86)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAF30)
  expect(cpu.r1.bc).toEqual(0x5123)
  expect(cpu.r1.de).toEqual(0x7635)
  expect(cpu.r1.hl).toEqual(0x1CA9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb6c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4300
  cpu.r1.bc = 0xFAA6
  cpu.r1.de = 0xABC2
  cpu.r1.hl = 0x5605
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x6C)
  mem.write8(0x5605, 0x2B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4354)
  expect(cpu.r1.bc).toEqual(0xFAA6)
  expect(cpu.r1.de).toEqual(0xABC2)
  expect(cpu.r1.hl).toEqual(0x5605)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb6d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7F00
  cpu.r1.bc = 0xF099
  cpu.r1.de = 0xD435
  cpu.r1.hl = 0xD9AD
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x6D)
  mem.write8(0xD9AD, 0x4E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7F38)
  expect(cpu.r1.bc).toEqual(0xF099)
  expect(cpu.r1.de).toEqual(0xD435)
  expect(cpu.r1.hl).toEqual(0xD9AD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb6e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4A00
  cpu.r1.bc = 0x08C9
  cpu.r1.de = 0x8177
  cpu.r1.hl = 0xD8BA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x6E)
  mem.write8(0xD8BA, 0x31)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4A30)
  expect(cpu.r1.bc).toEqual(0x08C9)
  expect(cpu.r1.de).toEqual(0x8177)
  expect(cpu.r1.hl).toEqual(0xD8BA)
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

test('Test cb6f_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x6F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF38)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb6f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA100
  cpu.r1.bc = 0x8C80
  cpu.r1.de = 0x4678
  cpu.r1.hl = 0x4D34
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x6F)
  mem.write8(0x4D34, 0x78)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA130)
  expect(cpu.r1.bc).toEqual(0x8C80)
  expect(cpu.r1.de).toEqual(0x4678)
  expect(cpu.r1.hl).toEqual(0x4D34)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb70', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1900
  cpu.r1.bc = 0x958A
  cpu.r1.de = 0x5DAB
  cpu.r1.hl = 0xF913
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x70)
  mem.write8(0xF913, 0xCF)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1954)
  expect(cpu.r1.bc).toEqual(0x958A)
  expect(cpu.r1.de).toEqual(0x5DAB)
  expect(cpu.r1.hl).toEqual(0xF913)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb71', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3D00
  cpu.r1.bc = 0x095E
  cpu.r1.de = 0xD6DF
  cpu.r1.hl = 0x42FE
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x71)
  mem.write8(0x42FE, 0x24)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3D18)
  expect(cpu.r1.bc).toEqual(0x095E)
  expect(cpu.r1.de).toEqual(0xD6DF)
  expect(cpu.r1.hl).toEqual(0x42FE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb72', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA500
  cpu.r1.bc = 0xC0BF
  cpu.r1.de = 0x4C8D
  cpu.r1.hl = 0xAD11
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x72)
  mem.write8(0xAD11, 0x3B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA518)
  expect(cpu.r1.bc).toEqual(0xC0BF)
  expect(cpu.r1.de).toEqual(0x4C8D)
  expect(cpu.r1.hl).toEqual(0xAD11)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb73', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF200
  cpu.r1.bc = 0x49A6
  cpu.r1.de = 0xB279
  cpu.r1.hl = 0x2ECC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x73)
  mem.write8(0x2ECC, 0xE0)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF238)
  expect(cpu.r1.bc).toEqual(0x49A6)
  expect(cpu.r1.de).toEqual(0xB279)
  expect(cpu.r1.hl).toEqual(0x2ECC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb74', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0500
  cpu.r1.bc = 0x445E
  cpu.r1.de = 0x05E9
  cpu.r1.hl = 0x983D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x74)
  mem.write8(0x983D, 0xFA)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x055C)
  expect(cpu.r1.bc).toEqual(0x445E)
  expect(cpu.r1.de).toEqual(0x05E9)
  expect(cpu.r1.hl).toEqual(0x983D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb75', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6B00
  cpu.r1.bc = 0x83C6
  cpu.r1.de = 0x635A
  cpu.r1.hl = 0xD18D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x75)
  mem.write8(0xD18D, 0x11)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6B5C)
  expect(cpu.r1.bc).toEqual(0x83C6)
  expect(cpu.r1.de).toEqual(0x635A)
  expect(cpu.r1.hl).toEqual(0xD18D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb76', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF800
  cpu.r1.bc = 0x3057
  cpu.r1.de = 0x3629
  cpu.r1.hl = 0xBC71
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x76)
  mem.write8(0xBC71, 0x18)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF85C)
  expect(cpu.r1.bc).toEqual(0x3057)
  expect(cpu.r1.de).toEqual(0x3629)
  expect(cpu.r1.hl).toEqual(0xBC71)
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

test('Test cb77_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x77)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFF38)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb77', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9200
  cpu.r1.bc = 0xD6F8
  cpu.r1.de = 0x5100
  cpu.r1.hl = 0x736D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x77)
  mem.write8(0x736D, 0x36)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9254)
  expect(cpu.r1.bc).toEqual(0xD6F8)
  expect(cpu.r1.de).toEqual(0x5100)
  expect(cpu.r1.hl).toEqual(0x736D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb78', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7200
  cpu.r1.bc = 0x1CF8
  cpu.r1.de = 0x8D2B
  cpu.r1.hl = 0xC76A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x78)
  mem.write8(0xC76A, 0x1F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x725C)
  expect(cpu.r1.bc).toEqual(0x1CF8)
  expect(cpu.r1.de).toEqual(0x8D2B)
  expect(cpu.r1.hl).toEqual(0xC76A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb79', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA800
  cpu.r1.bc = 0x809E
  cpu.r1.de = 0x1124
  cpu.r1.hl = 0x39E8
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x79)
  mem.write8(0x39E8, 0x98)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA898)
  expect(cpu.r1.bc).toEqual(0x809E)
  expect(cpu.r1.de).toEqual(0x1124)
  expect(cpu.r1.hl).toEqual(0x39E8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb7a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5800
  cpu.r1.bc = 0x7D24
  cpu.r1.de = 0x63E1
  cpu.r1.hl = 0xD9AF
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x7A)
  mem.write8(0xD9AF, 0xED)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5874)
  expect(cpu.r1.bc).toEqual(0x7D24)
  expect(cpu.r1.de).toEqual(0x63E1)
  expect(cpu.r1.hl).toEqual(0xD9AF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb7b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0300
  cpu.r1.bc = 0x50AB
  cpu.r1.de = 0x05BD
  cpu.r1.hl = 0x6BD0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x7B)
  mem.write8(0x6BD0, 0xA5)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x03B8)
  expect(cpu.r1.bc).toEqual(0x50AB)
  expect(cpu.r1.de).toEqual(0x05BD)
  expect(cpu.r1.hl).toEqual(0x6BD0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb7c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAD00
  cpu.r1.bc = 0xF77B
  cpu.r1.de = 0x55AE
  cpu.r1.hl = 0x063B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x7C)
  mem.write8(0x063B, 0x34)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAD54)
  expect(cpu.r1.bc).toEqual(0xF77B)
  expect(cpu.r1.de).toEqual(0x55AE)
  expect(cpu.r1.hl).toEqual(0x063B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb7d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8200
  cpu.r1.bc = 0xB792
  cpu.r1.de = 0x38CB
  cpu.r1.hl = 0x5F9B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x7D)
  mem.write8(0x5F9B, 0x97)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8298)
  expect(cpu.r1.bc).toEqual(0xB792)
  expect(cpu.r1.de).toEqual(0x38CB)
  expect(cpu.r1.hl).toEqual(0x5F9B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb7e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4200
  cpu.r1.bc = 0x3B91
  cpu.r1.de = 0xF59C
  cpu.r1.hl = 0xA25E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x7E)
  mem.write8(0xA25E, 0xD7)

  while (cpu.tStates < 12) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4290)
  expect(cpu.r1.bc).toEqual(0x3B91)
  expect(cpu.r1.de).toEqual(0xF59C)
  expect(cpu.r1.hl).toEqual(0xA25E)
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

test('Test cb7f_1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFF00
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x7F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFFB8)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb7f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6A00
  cpu.r1.bc = 0x84EC
  cpu.r1.de = 0xCF4E
  cpu.r1.hl = 0x185B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x7F)
  mem.write8(0x185B, 0xF1)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6A7C)
  expect(cpu.r1.bc).toEqual(0x84EC)
  expect(cpu.r1.de).toEqual(0xCF4E)
  expect(cpu.r1.hl).toEqual(0x185B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb80', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8F00
  cpu.r1.bc = 0x702F
  cpu.r1.de = 0x17BD
  cpu.r1.hl = 0xA706
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x80)
  mem.write8(0xA706, 0x0A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8F00)
  expect(cpu.r1.bc).toEqual(0x702F)
  expect(cpu.r1.de).toEqual(0x17BD)
  expect(cpu.r1.hl).toEqual(0xA706)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb81', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAE00
  cpu.r1.bc = 0x947F
  cpu.r1.de = 0x7153
  cpu.r1.hl = 0x6616
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x81)
  mem.write8(0x6616, 0x74)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAE00)
  expect(cpu.r1.bc).toEqual(0x947E)
  expect(cpu.r1.de).toEqual(0x7153)
  expect(cpu.r1.hl).toEqual(0x6616)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb82', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8100
  cpu.r1.bc = 0xBED2
  cpu.r1.de = 0xC719
  cpu.r1.hl = 0x4572
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x82)
  mem.write8(0x4572, 0x2F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8100)
  expect(cpu.r1.bc).toEqual(0xBED2)
  expect(cpu.r1.de).toEqual(0xC619)
  expect(cpu.r1.hl).toEqual(0x4572)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb83', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE600
  cpu.r1.bc = 0x63A2
  cpu.r1.de = 0xCCF7
  cpu.r1.hl = 0xAE9A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x83)
  mem.write8(0xAE9A, 0x16)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE600)
  expect(cpu.r1.bc).toEqual(0x63A2)
  expect(cpu.r1.de).toEqual(0xCCF6)
  expect(cpu.r1.hl).toEqual(0xAE9A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb84', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCE00
  cpu.r1.bc = 0xE0CC
  cpu.r1.de = 0xD305
  cpu.r1.hl = 0xD6C0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x84)
  mem.write8(0xD6C0, 0x72)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCE00)
  expect(cpu.r1.bc).toEqual(0xE0CC)
  expect(cpu.r1.de).toEqual(0xD305)
  expect(cpu.r1.hl).toEqual(0xD6C0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb85', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF300
  cpu.r1.bc = 0xED79
  cpu.r1.de = 0x9DB7
  cpu.r1.hl = 0xDDA0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x85)
  mem.write8(0xDDA0, 0x8A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF300)
  expect(cpu.r1.bc).toEqual(0xED79)
  expect(cpu.r1.de).toEqual(0x9DB7)
  expect(cpu.r1.hl).toEqual(0xDDA0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb86', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2A00
  cpu.r1.bc = 0xB0B9
  cpu.r1.de = 0x9426
  cpu.r1.hl = 0x1B48
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x86)
  mem.write8(0x1B48, 0x62)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2A00)
  expect(cpu.r1.bc).toEqual(0xB0B9)
  expect(cpu.r1.de).toEqual(0x9426)
  expect(cpu.r1.hl).toEqual(0x1B48)
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

test('Test cb87', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1100
  cpu.r1.bc = 0x86DC
  cpu.r1.de = 0x1798
  cpu.r1.hl = 0xDFC5
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x87)
  mem.write8(0xDFC5, 0xDE)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1000)
  expect(cpu.r1.bc).toEqual(0x86DC)
  expect(cpu.r1.de).toEqual(0x1798)
  expect(cpu.r1.hl).toEqual(0xDFC5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb88', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE300
  cpu.r1.bc = 0x8A21
  cpu.r1.de = 0xE33E
  cpu.r1.hl = 0x674D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x88)
  mem.write8(0x674D, 0x5F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE300)
  expect(cpu.r1.bc).toEqual(0x8821)
  expect(cpu.r1.de).toEqual(0xE33E)
  expect(cpu.r1.hl).toEqual(0x674D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb89', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6000
  cpu.r1.bc = 0xD186
  cpu.r1.de = 0xC5B6
  cpu.r1.hl = 0x1BD7
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x89)
  mem.write8(0x1BD7, 0xF2)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6000)
  expect(cpu.r1.bc).toEqual(0xD184)
  expect(cpu.r1.de).toEqual(0xC5B6)
  expect(cpu.r1.hl).toEqual(0x1BD7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb8a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3E00
  cpu.r1.bc = 0x5FCD
  cpu.r1.de = 0x0B38
  cpu.r1.hl = 0xB98E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x8A)
  mem.write8(0xB98E, 0x2F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3E00)
  expect(cpu.r1.bc).toEqual(0x5FCD)
  expect(cpu.r1.de).toEqual(0x0938)
  expect(cpu.r1.hl).toEqual(0xB98E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb8b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6500
  cpu.r1.bc = 0x040E
  cpu.r1.de = 0x103F
  cpu.r1.hl = 0x4A07
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x8B)
  mem.write8(0x4A07, 0x3F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6500)
  expect(cpu.r1.bc).toEqual(0x040E)
  expect(cpu.r1.de).toEqual(0x103D)
  expect(cpu.r1.hl).toEqual(0x4A07)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb8c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF800
  cpu.r1.bc = 0x6D27
  cpu.r1.de = 0x9BDF
  cpu.r1.hl = 0xDAEF
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x8C)
  mem.write8(0xDAEF, 0x0C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF800)
  expect(cpu.r1.bc).toEqual(0x6D27)
  expect(cpu.r1.de).toEqual(0x9BDF)
  expect(cpu.r1.hl).toEqual(0xD8EF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb8d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3E00
  cpu.r1.bc = 0x5469
  cpu.r1.de = 0x2C28
  cpu.r1.hl = 0xBD72
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x8D)
  mem.write8(0xBD72, 0x13)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3E00)
  expect(cpu.r1.bc).toEqual(0x5469)
  expect(cpu.r1.de).toEqual(0x2C28)
  expect(cpu.r1.hl).toEqual(0xBD70)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb8e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1F00
  cpu.r1.bc = 0x140B
  cpu.r1.de = 0xB492
  cpu.r1.hl = 0x63A7
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x8E)
  mem.write8(0x63A7, 0xD4)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1F00)
  expect(cpu.r1.bc).toEqual(0x140B)
  expect(cpu.r1.de).toEqual(0xB492)
  expect(cpu.r1.hl).toEqual(0x63A7)
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

test('Test cb8f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2500
  cpu.r1.bc = 0xC522
  cpu.r1.de = 0xCA46
  cpu.r1.hl = 0x1C1A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x8F)
  mem.write8(0x1C1A, 0x37)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2500)
  expect(cpu.r1.bc).toEqual(0xC522)
  expect(cpu.r1.de).toEqual(0xCA46)
  expect(cpu.r1.hl).toEqual(0x1C1A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb90', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5700
  cpu.r1.bc = 0x595C
  cpu.r1.de = 0x4F0A
  cpu.r1.hl = 0xC73C
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x90)
  mem.write8(0xC73C, 0xA2)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5700)
  expect(cpu.r1.bc).toEqual(0x595C)
  expect(cpu.r1.de).toEqual(0x4F0A)
  expect(cpu.r1.hl).toEqual(0xC73C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb91', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5E00
  cpu.r1.bc = 0x8F26
  cpu.r1.de = 0xA735
  cpu.r1.hl = 0x97E0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x91)
  mem.write8(0x97E0, 0x5E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5E00)
  expect(cpu.r1.bc).toEqual(0x8F22)
  expect(cpu.r1.de).toEqual(0xA735)
  expect(cpu.r1.hl).toEqual(0x97E0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb92', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3300
  cpu.r1.bc = 0x7D9F
  cpu.r1.de = 0x87D0
  cpu.r1.hl = 0x83D0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x92)
  mem.write8(0x83D0, 0x2B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3300)
  expect(cpu.r1.bc).toEqual(0x7D9F)
  expect(cpu.r1.de).toEqual(0x83D0)
  expect(cpu.r1.hl).toEqual(0x83D0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb93', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC200
  cpu.r1.bc = 0x4E05
  cpu.r1.de = 0xB3F8
  cpu.r1.hl = 0x2234
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x93)
  mem.write8(0x2234, 0xA0)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC200)
  expect(cpu.r1.bc).toEqual(0x4E05)
  expect(cpu.r1.de).toEqual(0xB3F8)
  expect(cpu.r1.hl).toEqual(0x2234)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb94', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEE00
  cpu.r1.bc = 0x8F4B
  cpu.r1.de = 0x2831
  cpu.r1.hl = 0xD6A6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x94)
  mem.write8(0xD6A6, 0xD0)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEE00)
  expect(cpu.r1.bc).toEqual(0x8F4B)
  expect(cpu.r1.de).toEqual(0x2831)
  expect(cpu.r1.hl).toEqual(0xD2A6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb95', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3C00
  cpu.r1.bc = 0x6AF2
  cpu.r1.de = 0xB25D
  cpu.r1.hl = 0x36FF
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x95)
  mem.write8(0x36FF, 0xCD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3C00)
  expect(cpu.r1.bc).toEqual(0x6AF2)
  expect(cpu.r1.de).toEqual(0xB25D)
  expect(cpu.r1.hl).toEqual(0x36FB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb96', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7600
  cpu.r1.bc = 0xB027
  cpu.r1.de = 0xD0A5
  cpu.r1.hl = 0x3324
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x96)
  mem.write8(0x3324, 0x21)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7600)
  expect(cpu.r1.bc).toEqual(0xB027)
  expect(cpu.r1.de).toEqual(0xD0A5)
  expect(cpu.r1.hl).toEqual(0x3324)
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

test('Test cb97', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1600
  cpu.r1.bc = 0xAD09
  cpu.r1.de = 0x7902
  cpu.r1.hl = 0x97BC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x97)
  mem.write8(0x97BC, 0x75)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1200)
  expect(cpu.r1.bc).toEqual(0xAD09)
  expect(cpu.r1.de).toEqual(0x7902)
  expect(cpu.r1.hl).toEqual(0x97BC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb98', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3400
  cpu.r1.bc = 0xB61C
  cpu.r1.de = 0x771D
  cpu.r1.hl = 0x5D5E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x98)
  mem.write8(0x5D5E, 0xA4)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3400)
  expect(cpu.r1.bc).toEqual(0xB61C)
  expect(cpu.r1.de).toEqual(0x771D)
  expect(cpu.r1.hl).toEqual(0x5D5E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb99', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5100
  cpu.r1.bc = 0x65BE
  cpu.r1.de = 0x1359
  cpu.r1.hl = 0x8BEC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x99)
  mem.write8(0x8BEC, 0x0B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5100)
  expect(cpu.r1.bc).toEqual(0x65B6)
  expect(cpu.r1.de).toEqual(0x1359)
  expect(cpu.r1.hl).toEqual(0x8BEC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb9a', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6400
  cpu.r1.bc = 0x976D
  cpu.r1.de = 0x4C25
  cpu.r1.hl = 0xDCB2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x9A)
  mem.write8(0xDCB2, 0x09)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6400)
  expect(cpu.r1.bc).toEqual(0x976D)
  expect(cpu.r1.de).toEqual(0x4425)
  expect(cpu.r1.hl).toEqual(0xDCB2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb9b', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA100
  cpu.r1.bc = 0xB58A
  cpu.r1.de = 0xD264
  cpu.r1.hl = 0x2BD6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x9B)
  mem.write8(0x2BD6, 0xD3)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA100)
  expect(cpu.r1.bc).toEqual(0xB58A)
  expect(cpu.r1.de).toEqual(0xD264)
  expect(cpu.r1.hl).toEqual(0x2BD6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb9c', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD800
  cpu.r1.bc = 0x63D6
  cpu.r1.de = 0xAC7B
  cpu.r1.hl = 0xC7A0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x9C)
  mem.write8(0xC7A0, 0x75)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD800)
  expect(cpu.r1.bc).toEqual(0x63D6)
  expect(cpu.r1.de).toEqual(0xAC7B)
  expect(cpu.r1.hl).toEqual(0xC7A0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb9d', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0D00
  cpu.r1.bc = 0xD840
  cpu.r1.de = 0x0810
  cpu.r1.hl = 0x0800
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x9D)
  mem.write8(0x0800, 0xCD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0D00)
  expect(cpu.r1.bc).toEqual(0xD840)
  expect(cpu.r1.de).toEqual(0x0810)
  expect(cpu.r1.hl).toEqual(0x0800)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cb9e', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3B00
  cpu.r1.bc = 0xEBBF
  cpu.r1.de = 0x9434
  cpu.r1.hl = 0x3A65
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x9E)
  mem.write8(0x3A65, 0x2A)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3B00)
  expect(cpu.r1.bc).toEqual(0xEBBF)
  expect(cpu.r1.de).toEqual(0x9434)
  expect(cpu.r1.hl).toEqual(0x3A65)
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

test('Test cb9f', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB200
  cpu.r1.bc = 0xD1DE
  cpu.r1.de = 0xF991
  cpu.r1.hl = 0x72F6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0x9F)
  mem.write8(0x72F6, 0x72)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB200)
  expect(cpu.r1.bc).toEqual(0xD1DE)
  expect(cpu.r1.de).toEqual(0xF991)
  expect(cpu.r1.hl).toEqual(0x72F6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFA00
  cpu.r1.bc = 0xD669
  cpu.r1.de = 0x71E1
  cpu.r1.hl = 0xC80D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA0)
  mem.write8(0xC80D, 0xC0)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFA00)
  expect(cpu.r1.bc).toEqual(0xC669)
  expect(cpu.r1.de).toEqual(0x71E1)
  expect(cpu.r1.hl).toEqual(0xC80D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8200
  cpu.r1.bc = 0x75E4
  cpu.r1.de = 0xA0DE
  cpu.r1.hl = 0xD0BA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA1)
  mem.write8(0xD0BA, 0xBD)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8200)
  expect(cpu.r1.bc).toEqual(0x75E4)
  expect(cpu.r1.de).toEqual(0xA0DE)
  expect(cpu.r1.hl).toEqual(0xD0BA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xDD00
  cpu.r1.bc = 0x2B0D
  cpu.r1.de = 0x5554
  cpu.r1.hl = 0x6FC0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA2)
  mem.write8(0x6FC0, 0x61)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDD00)
  expect(cpu.r1.bc).toEqual(0x2B0D)
  expect(cpu.r1.de).toEqual(0x4554)
  expect(cpu.r1.hl).toEqual(0x6FC0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2200
  cpu.r1.bc = 0x2F0D
  cpu.r1.de = 0x4D2C
  cpu.r1.hl = 0x6666
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA3)
  mem.write8(0x6666, 0x8E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2200)
  expect(cpu.r1.bc).toEqual(0x2F0D)
  expect(cpu.r1.de).toEqual(0x4D2C)
  expect(cpu.r1.hl).toEqual(0x6666)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD600
  cpu.r1.bc = 0xD8ED
  cpu.r1.de = 0x9CD4
  cpu.r1.hl = 0x8BB1
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA4)
  mem.write8(0x8BB1, 0xBB)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD600)
  expect(cpu.r1.bc).toEqual(0xD8ED)
  expect(cpu.r1.de).toEqual(0x9CD4)
  expect(cpu.r1.hl).toEqual(0x8BB1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB400
  cpu.r1.bc = 0xB393
  cpu.r1.de = 0x3E42
  cpu.r1.hl = 0x88CA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA5)
  mem.write8(0x88CA, 0x4F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB400)
  expect(cpu.r1.bc).toEqual(0xB393)
  expect(cpu.r1.de).toEqual(0x3E42)
  expect(cpu.r1.hl).toEqual(0x88CA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0A00
  cpu.r1.bc = 0x4C34
  cpu.r1.de = 0xF5A7
  cpu.r1.hl = 0xE70D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA6)
  mem.write8(0xE70D, 0x27)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0A00)
  expect(cpu.r1.bc).toEqual(0x4C34)
  expect(cpu.r1.de).toEqual(0xF5A7)
  expect(cpu.r1.hl).toEqual(0xE70D)
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

test('Test cba7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4500
  cpu.r1.bc = 0xAF61
  cpu.r1.de = 0x569A
  cpu.r1.hl = 0xC77B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA7)
  mem.write8(0xC77B, 0xFF)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4500)
  expect(cpu.r1.bc).toEqual(0xAF61)
  expect(cpu.r1.de).toEqual(0x569A)
  expect(cpu.r1.hl).toEqual(0xC77B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6400
  cpu.r1.bc = 0xF269
  cpu.r1.de = 0xBAE4
  cpu.r1.hl = 0xC9E7
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA8)
  mem.write8(0xC9E7, 0x46)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6400)
  expect(cpu.r1.bc).toEqual(0xD269)
  expect(cpu.r1.de).toEqual(0xBAE4)
  expect(cpu.r1.hl).toEqual(0xC9E7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cba9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE400
  cpu.r1.bc = 0x7AD4
  cpu.r1.de = 0xBF0A
  cpu.r1.hl = 0xCE0B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xA9)
  mem.write8(0xCE0B, 0x39)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE400)
  expect(cpu.r1.bc).toEqual(0x7AD4)
  expect(cpu.r1.de).toEqual(0xBF0A)
  expect(cpu.r1.hl).toEqual(0xCE0B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbaa', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCD00
  cpu.r1.bc = 0xD249
  cpu.r1.de = 0x4159
  cpu.r1.hl = 0xFED5
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xAA)
  mem.write8(0xFED5, 0xB0)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCD00)
  expect(cpu.r1.bc).toEqual(0xD249)
  expect(cpu.r1.de).toEqual(0x4159)
  expect(cpu.r1.hl).toEqual(0xFED5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbab', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAC00
  cpu.r1.bc = 0x939A
  cpu.r1.de = 0x5D9B
  cpu.r1.hl = 0x0812
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xAB)
  mem.write8(0x0812, 0xF2)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAC00)
  expect(cpu.r1.bc).toEqual(0x939A)
  expect(cpu.r1.de).toEqual(0x5D9B)
  expect(cpu.r1.hl).toEqual(0x0812)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbac', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2400
  cpu.r1.bc = 0x8A7D
  cpu.r1.de = 0x2CAC
  cpu.r1.hl = 0xFFAA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xAC)
  mem.write8(0xFFAA, 0x09)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2400)
  expect(cpu.r1.bc).toEqual(0x8A7D)
  expect(cpu.r1.de).toEqual(0x2CAC)
  expect(cpu.r1.hl).toEqual(0xDFAA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbad', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6F00
  cpu.r1.bc = 0x5FFB
  cpu.r1.de = 0x2360
  cpu.r1.hl = 0xAE15
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xAD)
  mem.write8(0xAE15, 0x30)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6F00)
  expect(cpu.r1.bc).toEqual(0x5FFB)
  expect(cpu.r1.de).toEqual(0x2360)
  expect(cpu.r1.hl).toEqual(0xAE15)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbae', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5A00
  cpu.r1.bc = 0xAA17
  cpu.r1.de = 0x12F3
  cpu.r1.hl = 0x190E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xAE)
  mem.write8(0x190E, 0x66)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5A00)
  expect(cpu.r1.bc).toEqual(0xAA17)
  expect(cpu.r1.de).toEqual(0x12F3)
  expect(cpu.r1.hl).toEqual(0x190E)
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

test('Test cbaf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFC00
  cpu.r1.bc = 0xBB3F
  cpu.r1.de = 0x8BB6
  cpu.r1.hl = 0x5877
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xAF)
  mem.write8(0x5877, 0x62)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xDC00)
  expect(cpu.r1.bc).toEqual(0xBB3F)
  expect(cpu.r1.de).toEqual(0x8BB6)
  expect(cpu.r1.hl).toEqual(0x5877)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB900
  cpu.r1.bc = 0x7A79
  cpu.r1.de = 0x1AAA
  cpu.r1.hl = 0xC3BA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB0)
  mem.write8(0xC3BA, 0x4C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB900)
  expect(cpu.r1.bc).toEqual(0x3A79)
  expect(cpu.r1.de).toEqual(0x1AAA)
  expect(cpu.r1.hl).toEqual(0xC3BA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4900
  cpu.r1.bc = 0x63E4
  cpu.r1.de = 0xA544
  cpu.r1.hl = 0x1190
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB1)
  mem.write8(0x1190, 0xE3)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4900)
  expect(cpu.r1.bc).toEqual(0x63A4)
  expect(cpu.r1.de).toEqual(0xA544)
  expect(cpu.r1.hl).toEqual(0x1190)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4D00
  cpu.r1.bc = 0x2B03
  cpu.r1.de = 0x6B23
  cpu.r1.hl = 0x6FF5
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB2)
  mem.write8(0x6FF5, 0x04)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4D00)
  expect(cpu.r1.bc).toEqual(0x2B03)
  expect(cpu.r1.de).toEqual(0x2B23)
  expect(cpu.r1.hl).toEqual(0x6FF5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8700
  cpu.r1.bc = 0x857A
  cpu.r1.de = 0xE98B
  cpu.r1.hl = 0x5CB1
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB3)
  mem.write8(0x5CB1, 0x43)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8700)
  expect(cpu.r1.bc).toEqual(0x857A)
  expect(cpu.r1.de).toEqual(0xE98B)
  expect(cpu.r1.hl).toEqual(0x5CB1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2B00
  cpu.r1.bc = 0xB73E
  cpu.r1.de = 0x79C9
  cpu.r1.hl = 0xE1BB
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB4)
  mem.write8(0xE1BB, 0x78)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2B00)
  expect(cpu.r1.bc).toEqual(0xB73E)
  expect(cpu.r1.de).toEqual(0x79C9)
  expect(cpu.r1.hl).toEqual(0xA1BB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9B00
  cpu.r1.bc = 0xD879
  cpu.r1.de = 0x2EC9
  cpu.r1.hl = 0x4BBA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB5)
  mem.write8(0x4BBA, 0x70)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9B00)
  expect(cpu.r1.bc).toEqual(0xD879)
  expect(cpu.r1.de).toEqual(0x2EC9)
  expect(cpu.r1.hl).toEqual(0x4BBA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8600
  cpu.r1.bc = 0x89BF
  cpu.r1.de = 0xDE4A
  cpu.r1.hl = 0x4FAB
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB6)
  mem.write8(0x4FAB, 0xA5)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8600)
  expect(cpu.r1.bc).toEqual(0x89BF)
  expect(cpu.r1.de).toEqual(0xDE4A)
  expect(cpu.r1.hl).toEqual(0x4FAB)
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

test('Test cbb7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2200
  cpu.r1.bc = 0xFB8A
  cpu.r1.de = 0x3D6E
  cpu.r1.hl = 0xD4A2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB7)
  mem.write8(0xD4A2, 0xF2)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2200)
  expect(cpu.r1.bc).toEqual(0xFB8A)
  expect(cpu.r1.de).toEqual(0x3D6E)
  expect(cpu.r1.hl).toEqual(0xD4A2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD000
  cpu.r1.bc = 0x37C6
  cpu.r1.de = 0x225A
  cpu.r1.hl = 0xD249
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB8)
  mem.write8(0xD249, 0xC4)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD000)
  expect(cpu.r1.bc).toEqual(0x37C6)
  expect(cpu.r1.de).toEqual(0x225A)
  expect(cpu.r1.hl).toEqual(0xD249)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbb9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA500
  cpu.r1.bc = 0x1B4A
  cpu.r1.de = 0xD584
  cpu.r1.hl = 0x5DEE
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xB9)
  mem.write8(0x5DEE, 0xCC)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA500)
  expect(cpu.r1.bc).toEqual(0x1B4A)
  expect(cpu.r1.de).toEqual(0xD584)
  expect(cpu.r1.hl).toEqual(0x5DEE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbba', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6300
  cpu.r1.bc = 0xA5FE
  cpu.r1.de = 0xF42B
  cpu.r1.hl = 0x34C9
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xBA)
  mem.write8(0x34C9, 0xBC)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6300)
  expect(cpu.r1.bc).toEqual(0xA5FE)
  expect(cpu.r1.de).toEqual(0x742B)
  expect(cpu.r1.hl).toEqual(0x34C9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbbb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1200
  cpu.r1.bc = 0xF661
  cpu.r1.de = 0xAA4F
  cpu.r1.hl = 0xCB30
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xBB)
  mem.write8(0xCB30, 0xF4)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1200)
  expect(cpu.r1.bc).toEqual(0xF661)
  expect(cpu.r1.de).toEqual(0xAA4F)
  expect(cpu.r1.hl).toEqual(0xCB30)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbbc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9800
  cpu.r1.bc = 0xADC3
  cpu.r1.de = 0x0B29
  cpu.r1.hl = 0x7B6E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xBC)
  mem.write8(0x7B6E, 0x45)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9800)
  expect(cpu.r1.bc).toEqual(0xADC3)
  expect(cpu.r1.de).toEqual(0x0B29)
  expect(cpu.r1.hl).toEqual(0x7B6E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbbd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD600
  cpu.r1.bc = 0xA6E1
  cpu.r1.de = 0x8813
  cpu.r1.hl = 0x10B8
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xBD)
  mem.write8(0x10B8, 0x35)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD600)
  expect(cpu.r1.bc).toEqual(0xA6E1)
  expect(cpu.r1.de).toEqual(0x8813)
  expect(cpu.r1.hl).toEqual(0x1038)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbbe', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCA00
  cpu.r1.bc = 0xFF64
  cpu.r1.de = 0x1218
  cpu.r1.hl = 0x77D5
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xBE)
  mem.write8(0x77D5, 0xEA)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCA00)
  expect(cpu.r1.bc).toEqual(0xFF64)
  expect(cpu.r1.de).toEqual(0x1218)
  expect(cpu.r1.hl).toEqual(0x77D5)
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

test('Test cbbf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6800
  cpu.r1.bc = 0x4845
  cpu.r1.de = 0x690A
  cpu.r1.hl = 0x15DE
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xBF)
  mem.write8(0x15DE, 0x1D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6800)
  expect(cpu.r1.bc).toEqual(0x4845)
  expect(cpu.r1.de).toEqual(0x690A)
  expect(cpu.r1.hl).toEqual(0x15DE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE300
  cpu.r1.bc = 0xEF71
  cpu.r1.de = 0xBFFB
  cpu.r1.hl = 0xB3A1
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC0)
  mem.write8(0xB3A1, 0x5C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE300)
  expect(cpu.r1.bc).toEqual(0xEF71)
  expect(cpu.r1.de).toEqual(0xBFFB)
  expect(cpu.r1.hl).toEqual(0xB3A1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3200
  cpu.r1.bc = 0x32A1
  cpu.r1.de = 0x59AB
  cpu.r1.hl = 0x3343
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC1)
  mem.write8(0x3343, 0xAA)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3200)
  expect(cpu.r1.bc).toEqual(0x32A1)
  expect(cpu.r1.de).toEqual(0x59AB)
  expect(cpu.r1.hl).toEqual(0x3343)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC700
  cpu.r1.bc = 0xB159
  cpu.r1.de = 0xC023
  cpu.r1.hl = 0xE1F3
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC2)
  mem.write8(0xE1F3, 0x14)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC700)
  expect(cpu.r1.bc).toEqual(0xB159)
  expect(cpu.r1.de).toEqual(0xC123)
  expect(cpu.r1.hl).toEqual(0xE1F3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0400
  cpu.r1.bc = 0xB463
  cpu.r1.de = 0xC211
  cpu.r1.hl = 0x8F3A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC3)
  mem.write8(0x8F3A, 0x81)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0400)
  expect(cpu.r1.bc).toEqual(0xB463)
  expect(cpu.r1.de).toEqual(0xC211)
  expect(cpu.r1.hl).toEqual(0x8F3A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7E00
  cpu.r1.bc = 0x545A
  cpu.r1.de = 0x6ECF
  cpu.r1.hl = 0x5876
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC4)
  mem.write8(0x5876, 0x9D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7E00)
  expect(cpu.r1.bc).toEqual(0x545A)
  expect(cpu.r1.de).toEqual(0x6ECF)
  expect(cpu.r1.hl).toEqual(0x5976)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x4000
  cpu.r1.bc = 0xC617
  cpu.r1.de = 0x079C
  cpu.r1.hl = 0x4107
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC5)
  mem.write8(0x4107, 0xCC)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x4000)
  expect(cpu.r1.bc).toEqual(0xC617)
  expect(cpu.r1.de).toEqual(0x079C)
  expect(cpu.r1.hl).toEqual(0x4107)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB800
  cpu.r1.bc = 0x0373
  cpu.r1.de = 0xB807
  cpu.r1.hl = 0xF0BE
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC6)
  mem.write8(0xF0BE, 0x9C)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB800)
  expect(cpu.r1.bc).toEqual(0x0373)
  expect(cpu.r1.de).toEqual(0xB807)
  expect(cpu.r1.hl).toEqual(0xF0BE)
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

test('Test cbc7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7700
  cpu.r1.bc = 0x3681
  cpu.r1.de = 0x9B55
  cpu.r1.hl = 0x583F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC7)
  mem.write8(0x583F, 0x58)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7700)
  expect(cpu.r1.bc).toEqual(0x3681)
  expect(cpu.r1.de).toEqual(0x9B55)
  expect(cpu.r1.hl).toEqual(0x583F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7D00
  cpu.r1.bc = 0xA772
  cpu.r1.de = 0x8682
  cpu.r1.hl = 0x7CF3
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC8)
  mem.write8(0x7CF3, 0x75)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7D00)
  expect(cpu.r1.bc).toEqual(0xA772)
  expect(cpu.r1.de).toEqual(0x8682)
  expect(cpu.r1.hl).toEqual(0x7CF3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbc9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x0B00
  cpu.r1.bc = 0x67EE
  cpu.r1.de = 0x30E0
  cpu.r1.hl = 0x72DB
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xC9)
  mem.write8(0x72DB, 0x87)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x0B00)
  expect(cpu.r1.bc).toEqual(0x67EE)
  expect(cpu.r1.de).toEqual(0x30E0)
  expect(cpu.r1.hl).toEqual(0x72DB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbca', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9C00
  cpu.r1.bc = 0x9517
  cpu.r1.de = 0xCFBB
  cpu.r1.hl = 0xFBC7
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xCA)
  mem.write8(0xFBC7, 0x1A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9C00)
  expect(cpu.r1.bc).toEqual(0x9517)
  expect(cpu.r1.de).toEqual(0xCFBB)
  expect(cpu.r1.hl).toEqual(0xFBC7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbcb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xE800
  cpu.r1.bc = 0x0F3D
  cpu.r1.de = 0x336F
  cpu.r1.hl = 0xF70D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xCB)
  mem.write8(0xF70D, 0xA1)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xE800)
  expect(cpu.r1.bc).toEqual(0x0F3D)
  expect(cpu.r1.de).toEqual(0x336F)
  expect(cpu.r1.hl).toEqual(0xF70D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbcc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFB00
  cpu.r1.bc = 0x7981
  cpu.r1.de = 0x0BBB
  cpu.r1.hl = 0x18FD
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xCC)
  mem.write8(0x18FD, 0xFE)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFB00)
  expect(cpu.r1.bc).toEqual(0x7981)
  expect(cpu.r1.de).toEqual(0x0BBB)
  expect(cpu.r1.hl).toEqual(0x1AFD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbcd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5500
  cpu.r1.bc = 0x5E78
  cpu.r1.de = 0xBF34
  cpu.r1.hl = 0x2602
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xCD)
  mem.write8(0x2602, 0x2D)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5500)
  expect(cpu.r1.bc).toEqual(0x5E78)
  expect(cpu.r1.de).toEqual(0xBF34)
  expect(cpu.r1.hl).toEqual(0x2602)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbce', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD500
  cpu.r1.bc = 0xA111
  cpu.r1.de = 0xCB2A
  cpu.r1.hl = 0x8EC6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xCE)
  mem.write8(0x8EC6, 0xBF)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD500)
  expect(cpu.r1.bc).toEqual(0xA111)
  expect(cpu.r1.de).toEqual(0xCB2A)
  expect(cpu.r1.hl).toEqual(0x8EC6)
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

test('Test cbcf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA200
  cpu.r1.bc = 0x6BAF
  cpu.r1.de = 0x98B2
  cpu.r1.hl = 0x98A0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xCF)
  mem.write8(0x98A0, 0xD4)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA200)
  expect(cpu.r1.bc).toEqual(0x6BAF)
  expect(cpu.r1.de).toEqual(0x98B2)
  expect(cpu.r1.hl).toEqual(0x98A0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2300
  cpu.r1.bc = 0x7BCB
  cpu.r1.de = 0x02E7
  cpu.r1.hl = 0x1724
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD0)
  mem.write8(0x1724, 0x30)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2300)
  expect(cpu.r1.bc).toEqual(0x7FCB)
  expect(cpu.r1.de).toEqual(0x02E7)
  expect(cpu.r1.hl).toEqual(0x1724)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5300
  cpu.r1.bc = 0x581F
  cpu.r1.de = 0xB775
  cpu.r1.hl = 0x47F4
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD1)
  mem.write8(0x47F4, 0xC7)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5300)
  expect(cpu.r1.bc).toEqual(0x581F)
  expect(cpu.r1.de).toEqual(0xB775)
  expect(cpu.r1.hl).toEqual(0x47F4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6900
  cpu.r1.bc = 0xC147
  cpu.r1.de = 0xB79C
  cpu.r1.hl = 0x7528
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD2)
  mem.write8(0x7528, 0x4F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6900)
  expect(cpu.r1.bc).toEqual(0xC147)
  expect(cpu.r1.de).toEqual(0xB79C)
  expect(cpu.r1.hl).toEqual(0x7528)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xAE00
  cpu.r1.bc = 0xBBC4
  cpu.r1.de = 0xCE52
  cpu.r1.hl = 0x5FBA
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD3)
  mem.write8(0x5FBA, 0x3A)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xAE00)
  expect(cpu.r1.bc).toEqual(0xBBC4)
  expect(cpu.r1.de).toEqual(0xCE56)
  expect(cpu.r1.hl).toEqual(0x5FBA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD800
  cpu.r1.bc = 0x6E1E
  cpu.r1.de = 0xAF6F
  cpu.r1.hl = 0xBF2E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD4)
  mem.write8(0xBF2E, 0x71)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD800)
  expect(cpu.r1.bc).toEqual(0x6E1E)
  expect(cpu.r1.de).toEqual(0xAF6F)
  expect(cpu.r1.hl).toEqual(0xBF2E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8400
  cpu.r1.bc = 0xA19A
  cpu.r1.de = 0xD2FD
  cpu.r1.hl = 0x8A77
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD5)
  mem.write8(0x8A77, 0x52)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8400)
  expect(cpu.r1.bc).toEqual(0xA19A)
  expect(cpu.r1.de).toEqual(0xD2FD)
  expect(cpu.r1.hl).toEqual(0x8A77)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA900
  cpu.r1.bc = 0xF5F3
  cpu.r1.de = 0x2180
  cpu.r1.hl = 0x6029
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD6)
  mem.write8(0x6029, 0xB7)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA900)
  expect(cpu.r1.bc).toEqual(0xF5F3)
  expect(cpu.r1.de).toEqual(0x2180)
  expect(cpu.r1.hl).toEqual(0x6029)
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

test('Test cbd7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB100
  cpu.r1.bc = 0xC008
  cpu.r1.de = 0x8425
  cpu.r1.hl = 0x290A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD7)
  mem.write8(0x290A, 0x42)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB500)
  expect(cpu.r1.bc).toEqual(0xC008)
  expect(cpu.r1.de).toEqual(0x8425)
  expect(cpu.r1.hl).toEqual(0x290A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8B00
  cpu.r1.bc = 0x09C4
  cpu.r1.de = 0xDDF3
  cpu.r1.hl = 0x6D7E
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD8)
  mem.write8(0x6D7E, 0x6E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8B00)
  expect(cpu.r1.bc).toEqual(0x09C4)
  expect(cpu.r1.de).toEqual(0xDDF3)
  expect(cpu.r1.hl).toEqual(0x6D7E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbd9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3E00
  cpu.r1.bc = 0x3E36
  cpu.r1.de = 0x30EC
  cpu.r1.hl = 0xEFC6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xD9)
  mem.write8(0xEFC6, 0x5B)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3E00)
  expect(cpu.r1.bc).toEqual(0x3E3E)
  expect(cpu.r1.de).toEqual(0x30EC)
  expect(cpu.r1.hl).toEqual(0xEFC6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbda', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD000
  cpu.r1.bc = 0x3E8F
  cpu.r1.de = 0x28FE
  cpu.r1.hl = 0x1C87
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xDA)
  mem.write8(0x1C87, 0xB9)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD000)
  expect(cpu.r1.bc).toEqual(0x3E8F)
  expect(cpu.r1.de).toEqual(0x28FE)
  expect(cpu.r1.hl).toEqual(0x1C87)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbdb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1200
  cpu.r1.bc = 0x977A
  cpu.r1.de = 0x8C49
  cpu.r1.hl = 0xBC48
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xDB)
  mem.write8(0xBC48, 0xEF)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1200)
  expect(cpu.r1.bc).toEqual(0x977A)
  expect(cpu.r1.de).toEqual(0x8C49)
  expect(cpu.r1.hl).toEqual(0xBC48)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbdc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8D00
  cpu.r1.bc = 0x05DE
  cpu.r1.de = 0xF8D3
  cpu.r1.hl = 0xB125
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xDC)
  mem.write8(0xB125, 0x0E)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8D00)
  expect(cpu.r1.bc).toEqual(0x05DE)
  expect(cpu.r1.de).toEqual(0xF8D3)
  expect(cpu.r1.hl).toEqual(0xB925)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbdd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC300
  cpu.r1.bc = 0x08A9
  cpu.r1.de = 0x2BC8
  cpu.r1.hl = 0x5B9F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xDD)
  mem.write8(0x5B9F, 0x94)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC300)
  expect(cpu.r1.bc).toEqual(0x08A9)
  expect(cpu.r1.de).toEqual(0x2BC8)
  expect(cpu.r1.hl).toEqual(0x5B9F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbde', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1900
  cpu.r1.bc = 0x900F
  cpu.r1.de = 0xD572
  cpu.r1.hl = 0xBA03
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xDE)
  mem.write8(0xBA03, 0x93)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1900)
  expect(cpu.r1.bc).toEqual(0x900F)
  expect(cpu.r1.de).toEqual(0xD572)
  expect(cpu.r1.hl).toEqual(0xBA03)
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

test('Test cbdf', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6700
  cpu.r1.bc = 0x2745
  cpu.r1.de = 0x7E3D
  cpu.r1.hl = 0x0FA1
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xDF)
  mem.write8(0x0FA1, 0xC5)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6F00)
  expect(cpu.r1.bc).toEqual(0x2745)
  expect(cpu.r1.de).toEqual(0x7E3D)
  expect(cpu.r1.hl).toEqual(0x0FA1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3E00
  cpu.r1.bc = 0xD633
  cpu.r1.de = 0x9897
  cpu.r1.hl = 0x3744
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE0)
  mem.write8(0x3744, 0x54)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3E00)
  expect(cpu.r1.bc).toEqual(0xD633)
  expect(cpu.r1.de).toEqual(0x9897)
  expect(cpu.r1.hl).toEqual(0x3744)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7D00
  cpu.r1.bc = 0x50A6
  cpu.r1.de = 0x0136
  cpu.r1.hl = 0x5334
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE1)
  mem.write8(0x5334, 0x85)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7D00)
  expect(cpu.r1.bc).toEqual(0x50B6)
  expect(cpu.r1.de).toEqual(0x0136)
  expect(cpu.r1.hl).toEqual(0x5334)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xD400
  cpu.r1.bc = 0x6B45
  cpu.r1.de = 0xA192
  cpu.r1.hl = 0x3A4C
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE2)
  mem.write8(0x3A4C, 0x47)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xD400)
  expect(cpu.r1.bc).toEqual(0x6B45)
  expect(cpu.r1.de).toEqual(0xB192)
  expect(cpu.r1.hl).toEqual(0x3A4C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x3B00
  cpu.r1.bc = 0xD29C
  cpu.r1.de = 0x05E0
  cpu.r1.hl = 0x2E78
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE3)
  mem.write8(0x2E78, 0x48)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x3B00)
  expect(cpu.r1.bc).toEqual(0xD29C)
  expect(cpu.r1.de).toEqual(0x05F0)
  expect(cpu.r1.hl).toEqual(0x2E78)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1E00
  cpu.r1.bc = 0x7D5E
  cpu.r1.de = 0x846D
  cpu.r1.hl = 0x0978
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE4)
  mem.write8(0x0978, 0x84)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1E00)
  expect(cpu.r1.bc).toEqual(0x7D5E)
  expect(cpu.r1.de).toEqual(0x846D)
  expect(cpu.r1.hl).toEqual(0x1978)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCA00
  cpu.r1.bc = 0xDF0D
  cpu.r1.de = 0xD588
  cpu.r1.hl = 0xB48F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE5)
  mem.write8(0xB48F, 0xCF)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCA00)
  expect(cpu.r1.bc).toEqual(0xDF0D)
  expect(cpu.r1.de).toEqual(0xD588)
  expect(cpu.r1.hl).toEqual(0xB49F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xB300
  cpu.r1.bc = 0x52C2
  cpu.r1.de = 0xDBFE
  cpu.r1.hl = 0x9F9B
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE6)
  mem.write8(0x9F9B, 0xF6)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xB300)
  expect(cpu.r1.bc).toEqual(0x52C2)
  expect(cpu.r1.de).toEqual(0xDBFE)
  expect(cpu.r1.hl).toEqual(0x9F9B)
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

test('Test cbe7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8E00
  cpu.r1.bc = 0xCF02
  cpu.r1.de = 0x67EF
  cpu.r1.hl = 0xF2E0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE7)
  mem.write8(0xF2E0, 0xCF)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9E00)
  expect(cpu.r1.bc).toEqual(0xCF02)
  expect(cpu.r1.de).toEqual(0x67EF)
  expect(cpu.r1.hl).toEqual(0xF2E0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7100
  cpu.r1.bc = 0xBB18
  cpu.r1.de = 0x66EC
  cpu.r1.hl = 0x4A05
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE8)
  mem.write8(0x4A05, 0xE6)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7100)
  expect(cpu.r1.bc).toEqual(0xBB18)
  expect(cpu.r1.de).toEqual(0x66EC)
  expect(cpu.r1.hl).toEqual(0x4A05)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbe9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5700
  cpu.r1.bc = 0x2897
  cpu.r1.de = 0x8F2F
  cpu.r1.hl = 0xA4D0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xE9)
  mem.write8(0xA4D0, 0xB2)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5700)
  expect(cpu.r1.bc).toEqual(0x28B7)
  expect(cpu.r1.de).toEqual(0x8F2F)
  expect(cpu.r1.hl).toEqual(0xA4D0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbea', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEC00
  cpu.r1.bc = 0x304A
  cpu.r1.de = 0x60A1
  cpu.r1.hl = 0xF32A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xEA)
  mem.write8(0xF32A, 0x9C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEC00)
  expect(cpu.r1.bc).toEqual(0x304A)
  expect(cpu.r1.de).toEqual(0x60A1)
  expect(cpu.r1.hl).toEqual(0xF32A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbeb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF000
  cpu.r1.bc = 0x532B
  cpu.r1.de = 0xA1BE
  cpu.r1.hl = 0x1A1A
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xEB)
  mem.write8(0x1A1A, 0x21)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF000)
  expect(cpu.r1.bc).toEqual(0x532B)
  expect(cpu.r1.de).toEqual(0xA1BE)
  expect(cpu.r1.hl).toEqual(0x1A1A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbec', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF200
  cpu.r1.bc = 0xF0F3
  cpu.r1.de = 0xA816
  cpu.r1.hl = 0xBA08
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xEC)
  mem.write8(0xBA08, 0x82)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF200)
  expect(cpu.r1.bc).toEqual(0xF0F3)
  expect(cpu.r1.de).toEqual(0xA816)
  expect(cpu.r1.hl).toEqual(0xBA08)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbed', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1300
  cpu.r1.bc = 0x5127
  cpu.r1.de = 0xADAB
  cpu.r1.hl = 0x2DEC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xED)
  mem.write8(0x2DEC, 0xCB)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1300)
  expect(cpu.r1.bc).toEqual(0x5127)
  expect(cpu.r1.de).toEqual(0xADAB)
  expect(cpu.r1.hl).toEqual(0x2DEC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbee', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9000
  cpu.r1.bc = 0xB273
  cpu.r1.de = 0x50AE
  cpu.r1.hl = 0xE90D
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xEE)
  mem.write8(0xE90D, 0xF1)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9000)
  expect(cpu.r1.bc).toEqual(0xB273)
  expect(cpu.r1.de).toEqual(0x50AE)
  expect(cpu.r1.hl).toEqual(0xE90D)
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

test('Test cbef', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x2500
  cpu.r1.bc = 0x4281
  cpu.r1.de = 0xF0D4
  cpu.r1.hl = 0x2C39
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xEF)
  mem.write8(0x2C39, 0xC8)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x2500)
  expect(cpu.r1.bc).toEqual(0x4281)
  expect(cpu.r1.de).toEqual(0xF0D4)
  expect(cpu.r1.hl).toEqual(0x2C39)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf0', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xFB00
  cpu.r1.bc = 0x5802
  cpu.r1.de = 0x0C27
  cpu.r1.hl = 0x6FF5
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF0)
  mem.write8(0x6FF5, 0xF6)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xFB00)
  expect(cpu.r1.bc).toEqual(0x5802)
  expect(cpu.r1.de).toEqual(0x0C27)
  expect(cpu.r1.hl).toEqual(0x6FF5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf1', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5500
  cpu.r1.bc = 0xA103
  cpu.r1.de = 0x3FF5
  cpu.r1.hl = 0x5E1C
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF1)
  mem.write8(0x5E1C, 0x37)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5500)
  expect(cpu.r1.bc).toEqual(0xA143)
  expect(cpu.r1.de).toEqual(0x3FF5)
  expect(cpu.r1.hl).toEqual(0x5E1C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf2', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xF000
  cpu.r1.bc = 0x625A
  cpu.r1.de = 0xAF82
  cpu.r1.hl = 0x9819
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF2)
  mem.write8(0x9819, 0xE4)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF000)
  expect(cpu.r1.bc).toEqual(0x625A)
  expect(cpu.r1.de).toEqual(0xEF82)
  expect(cpu.r1.hl).toEqual(0x9819)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf3', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8600
  cpu.r1.bc = 0xD7BD
  cpu.r1.de = 0x5D86
  cpu.r1.hl = 0x263F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF3)
  mem.write8(0x263F, 0xA1)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8600)
  expect(cpu.r1.bc).toEqual(0xD7BD)
  expect(cpu.r1.de).toEqual(0x5DC6)
  expect(cpu.r1.hl).toEqual(0x263F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf4', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x9400
  cpu.r1.bc = 0x0243
  cpu.r1.de = 0x9EC1
  cpu.r1.hl = 0x75D9
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF4)
  mem.write8(0x75D9, 0x3F)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x9400)
  expect(cpu.r1.bc).toEqual(0x0243)
  expect(cpu.r1.de).toEqual(0x9EC1)
  expect(cpu.r1.hl).toEqual(0x75D9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf5', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xCE00
  cpu.r1.bc = 0x2D42
  cpu.r1.de = 0x5E6A
  cpu.r1.hl = 0x47E6
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF5)
  mem.write8(0x47E6, 0xCE)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xCE00)
  expect(cpu.r1.bc).toEqual(0x2D42)
  expect(cpu.r1.de).toEqual(0x5E6A)
  expect(cpu.r1.hl).toEqual(0x47E6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf6', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7B00
  cpu.r1.bc = 0xC2D7
  cpu.r1.de = 0x4492
  cpu.r1.hl = 0xA9BC
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF6)
  mem.write8(0xA9BC, 0xB1)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x7B00)
  expect(cpu.r1.bc).toEqual(0xC2D7)
  expect(cpu.r1.de).toEqual(0x4492)
  expect(cpu.r1.hl).toEqual(0xA9BC)
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

test('Test cbf7', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x6D00
  cpu.r1.bc = 0xABAF
  cpu.r1.de = 0x5B5D
  cpu.r1.hl = 0x188C
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF7)
  mem.write8(0x188C, 0x6C)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x6D00)
  expect(cpu.r1.bc).toEqual(0xABAF)
  expect(cpu.r1.de).toEqual(0x5B5D)
  expect(cpu.r1.hl).toEqual(0x188C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf8', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xC600
  cpu.r1.bc = 0xB812
  cpu.r1.de = 0xA037
  cpu.r1.hl = 0xD2B0
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF8)
  mem.write8(0xD2B0, 0xCB)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xC600)
  expect(cpu.r1.bc).toEqual(0xB812)
  expect(cpu.r1.de).toEqual(0xA037)
  expect(cpu.r1.hl).toEqual(0xD2B0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbf9', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEF00
  cpu.r1.bc = 0xC5F2
  cpu.r1.de = 0x77A8
  cpu.r1.hl = 0x0730
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xF9)
  mem.write8(0x0730, 0xAE)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEF00)
  expect(cpu.r1.bc).toEqual(0xC5F2)
  expect(cpu.r1.de).toEqual(0x77A8)
  expect(cpu.r1.hl).toEqual(0x0730)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbfa', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x8700
  cpu.r1.bc = 0x1581
  cpu.r1.de = 0x63E3
  cpu.r1.hl = 0xED03
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xFA)
  mem.write8(0xED03, 0x27)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x8700)
  expect(cpu.r1.bc).toEqual(0x1581)
  expect(cpu.r1.de).toEqual(0xE3E3)
  expect(cpu.r1.hl).toEqual(0xED03)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbfb', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xA300
  cpu.r1.bc = 0x7D27
  cpu.r1.de = 0x97C3
  cpu.r1.hl = 0xD1AE
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xFB)
  mem.write8(0xD1AE, 0xF2)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xA300)
  expect(cpu.r1.bc).toEqual(0x7D27)
  expect(cpu.r1.de).toEqual(0x97C3)
  expect(cpu.r1.hl).toEqual(0xD1AE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbfc', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0xEC00
  cpu.r1.bc = 0x060A
  cpu.r1.de = 0x3EF6
  cpu.r1.hl = 0x500F
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xFC)
  mem.write8(0x500F, 0x94)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xEC00)
  expect(cpu.r1.bc).toEqual(0x060A)
  expect(cpu.r1.de).toEqual(0x3EF6)
  expect(cpu.r1.hl).toEqual(0xD00F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbfd', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x1100
  cpu.r1.bc = 0x231A
  cpu.r1.de = 0x8563
  cpu.r1.hl = 0x28C5
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xFD)
  mem.write8(0x28C5, 0xAB)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x1100)
  expect(cpu.r1.bc).toEqual(0x231A)
  expect(cpu.r1.de).toEqual(0x8563)
  expect(cpu.r1.hl).toEqual(0x28C5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

test('Test cbfe', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x5300
  cpu.r1.bc = 0x4948
  cpu.r1.de = 0x89DD
  cpu.r1.hl = 0x3A24
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xFE)
  mem.write8(0x3A24, 0xC3)

  while (cpu.tStates < 15) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0x5300)
  expect(cpu.r1.bc).toEqual(0x4948)
  expect(cpu.r1.de).toEqual(0x89DD)
  expect(cpu.r1.hl).toEqual(0x3A24)
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

test('Test cbff', () => {
  let mem = new Memory()
  let io = new FakePort()
  let cpu = new Z80(mem, io)
  cpu.r1.af = 0x7900
  cpu.r1.bc = 0x799B
  cpu.r1.de = 0x6CF7
  cpu.r1.hl = 0xE3F2
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
  mem.write8(0x0000, 0xCB)
  mem.write8(0x0001, 0xFF)
  mem.write8(0xE3F2, 0x25)

  while (cpu.tStates < 8) {
    cpu.execute()
  }
  
  expect(cpu.r1.af).toEqual(0xF900)
  expect(cpu.r1.bc).toEqual(0x799B)
  expect(cpu.r1.de).toEqual(0x6CF7)
  expect(cpu.r1.hl).toEqual(0xE3F2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
  expect(cpu.tStates).toEqual(8)
})

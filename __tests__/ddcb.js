const Memory = require("../src/memory")
const Z80 = require("../src/z80")

test('Test ddcb00', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3C65
  cpu.r1.bc = 0xF0E4
  cpu.r1.de = 0x09D1
  cpu.r1.hl = 0x646B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1DA1
  cpu.r1.iy = 0xF08F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0D)
  mem.write8(0x0003, 0x00)
  mem.write8(0x1DAE, 0xA1)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3C01)
  expect(cpu.r1.bc).toEqual(0x43E4)
  expect(cpu.r1.de).toEqual(0x09D1)
  expect(cpu.r1.hl).toEqual(0x646B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1DA1)
  expect(cpu.r1.iy).toEqual(0xF08F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb01', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF68F
  cpu.r1.bc = 0xE33B
  cpu.r1.de = 0x2D4A
  cpu.r1.hl = 0x7725
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x28FD
  cpu.r1.iy = 0xF31B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB7)
  mem.write8(0x0003, 0x01)
  mem.write8(0x28B4, 0xE3)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF681)
  expect(cpu.r1.bc).toEqual(0xE3C7)
  expect(cpu.r1.de).toEqual(0x2D4A)
  expect(cpu.r1.hl).toEqual(0x7725)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x28FD)
  expect(cpu.r1.iy).toEqual(0xF31B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb02', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE20C
  cpu.r1.bc = 0x836E
  cpu.r1.de = 0x513A
  cpu.r1.hl = 0xF840
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC796
  cpu.r1.iy = 0xAE9B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x91)
  mem.write8(0x0003, 0x02)
  mem.write8(0xC727, 0x8D)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE20D)
  expect(cpu.r1.bc).toEqual(0x836E)
  expect(cpu.r1.de).toEqual(0x1B3A)
  expect(cpu.r1.hl).toEqual(0xF840)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC796)
  expect(cpu.r1.iy).toEqual(0xAE9B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb03', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6224
  cpu.r1.bc = 0x3571
  cpu.r1.de = 0xC519
  cpu.r1.hl = 0x48DC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x041E
  cpu.r1.iy = 0xC07B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x48)
  mem.write8(0x0003, 0x03)
  mem.write8(0x0466, 0x78)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x62A4)
  expect(cpu.r1.bc).toEqual(0x3571)
  expect(cpu.r1.de).toEqual(0xC5F0)
  expect(cpu.r1.hl).toEqual(0x48DC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x041E)
  expect(cpu.r1.iy).toEqual(0xC07B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb04', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB310
  cpu.r1.bc = 0xBFC4
  cpu.r1.de = 0x64AF
  cpu.r1.hl = 0xD622
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5949
  cpu.r1.iy = 0xA989
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x48)
  mem.write8(0x0003, 0x04)
  mem.write8(0x5991, 0x68)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB380)
  expect(cpu.r1.bc).toEqual(0xBFC4)
  expect(cpu.r1.de).toEqual(0x64AF)
  expect(cpu.r1.hl).toEqual(0xD022)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5949)
  expect(cpu.r1.iy).toEqual(0xA989)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb05', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4954
  cpu.r1.bc = 0xBB04
  cpu.r1.de = 0x56EC
  cpu.r1.hl = 0x9D58
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0077
  cpu.r1.iy = 0x1349
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFF)
  mem.write8(0x0003, 0x05)
  mem.write8(0x0076, 0x95)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x492D)
  expect(cpu.r1.bc).toEqual(0xBB04)
  expect(cpu.r1.de).toEqual(0x56EC)
  expect(cpu.r1.hl).toEqual(0x9D2B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0077)
  expect(cpu.r1.iy).toEqual(0x1349)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb06', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0CF4
  cpu.r1.bc = 0xF636
  cpu.r1.de = 0x90A6
  cpu.r1.hl = 0x6117
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5421
  cpu.r1.iy = 0x90EE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x07)
  mem.write8(0x0003, 0x06)
  mem.write8(0x5428, 0x97)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0C29)
  expect(cpu.r1.bc).toEqual(0xF636)
  expect(cpu.r1.de).toEqual(0x90A6)
  expect(cpu.r1.hl).toEqual(0x6117)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5421)
  expect(cpu.r1.iy).toEqual(0x90EE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb07', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6F4D
  cpu.r1.bc = 0x9CA3
  cpu.r1.de = 0xBDF6
  cpu.r1.hl = 0xED50
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9803
  cpu.r1.iy = 0x55F9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x42)
  mem.write8(0x0003, 0x07)
  mem.write8(0x9845, 0xAE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5D09)
  expect(cpu.r1.bc).toEqual(0x9CA3)
  expect(cpu.r1.de).toEqual(0xBDF6)
  expect(cpu.r1.hl).toEqual(0xED50)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9803)
  expect(cpu.r1.iy).toEqual(0x55F9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb08', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x02F4
  cpu.r1.bc = 0x1C66
  cpu.r1.de = 0x6023
  cpu.r1.hl = 0xAE06
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEF40
  cpu.r1.iy = 0xB006
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0A)
  mem.write8(0x0003, 0x08)
  mem.write8(0xEF4A, 0xDA)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0228)
  expect(cpu.r1.bc).toEqual(0x6D66)
  expect(cpu.r1.de).toEqual(0x6023)
  expect(cpu.r1.hl).toEqual(0xAE06)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEF40)
  expect(cpu.r1.iy).toEqual(0xB006)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb09', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9825
  cpu.r1.bc = 0x9258
  cpu.r1.de = 0x54D5
  cpu.r1.hl = 0x5E1E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9D0B
  cpu.r1.iy = 0x6E58
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3B)
  mem.write8(0x0003, 0x09)
  mem.write8(0x9D46, 0x6F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x98A5)
  expect(cpu.r1.bc).toEqual(0x92B7)
  expect(cpu.r1.de).toEqual(0x54D5)
  expect(cpu.r1.hl).toEqual(0x5E1E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9D0B)
  expect(cpu.r1.iy).toEqual(0x6E58)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb0a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD2DD
  cpu.r1.bc = 0x6AAC
  cpu.r1.de = 0xE789
  cpu.r1.hl = 0x9293
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1FB4
  cpu.r1.iy = 0x2498
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x83)
  mem.write8(0x0003, 0x0A)
  mem.write8(0x1F37, 0x78)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD22C)
  expect(cpu.r1.bc).toEqual(0x6AAC)
  expect(cpu.r1.de).toEqual(0x3C89)
  expect(cpu.r1.hl).toEqual(0x9293)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1FB4)
  expect(cpu.r1.iy).toEqual(0x2498)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb0b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB82C
  cpu.r1.bc = 0xB284
  cpu.r1.de = 0x23F8
  cpu.r1.hl = 0x7E7D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCD09
  cpu.r1.iy = 0x6A03
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFA)
  mem.write8(0x0003, 0x0B)
  mem.write8(0xCD03, 0x92)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB808)
  expect(cpu.r1.bc).toEqual(0xB284)
  expect(cpu.r1.de).toEqual(0x2349)
  expect(cpu.r1.hl).toEqual(0x7E7D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCD09)
  expect(cpu.r1.iy).toEqual(0x6A03)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb0c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDF8B
  cpu.r1.bc = 0xB6CC
  cpu.r1.de = 0xEE8D
  cpu.r1.hl = 0x855A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBF6B
  cpu.r1.iy = 0x9B7D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x79)
  mem.write8(0x0003, 0x0C)
  mem.write8(0xBFE4, 0x0D)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDF81)
  expect(cpu.r1.bc).toEqual(0xB6CC)
  expect(cpu.r1.de).toEqual(0xEE8D)
  expect(cpu.r1.hl).toEqual(0x865A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBF6B)
  expect(cpu.r1.iy).toEqual(0x9B7D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb0d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xBAE3
  cpu.r1.bc = 0xCEEC
  cpu.r1.de = 0xBBAA
  cpu.r1.hl = 0xB65E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x88BD
  cpu.r1.iy = 0x503E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE4)
  mem.write8(0x0003, 0x0D)
  mem.write8(0x88A1, 0x1F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xBA89)
  expect(cpu.r1.bc).toEqual(0xCEEC)
  expect(cpu.r1.de).toEqual(0xBBAA)
  expect(cpu.r1.hl).toEqual(0xB68F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x88BD)
  expect(cpu.r1.iy).toEqual(0x503E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb0e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1C36
  cpu.r1.bc = 0x890B
  cpu.r1.de = 0x7830
  cpu.r1.hl = 0x060C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFD49
  cpu.r1.iy = 0x5D07
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC6)
  mem.write8(0x0003, 0x0E)
  mem.write8(0xFD0F, 0xAD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1C81)
  expect(cpu.r1.bc).toEqual(0x890B)
  expect(cpu.r1.de).toEqual(0x7830)
  expect(cpu.r1.hl).toEqual(0x060C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFD49)
  expect(cpu.r1.iy).toEqual(0x5D07)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb0f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF5A7
  cpu.r1.bc = 0xFAD4
  cpu.r1.de = 0xFA4B
  cpu.r1.hl = 0x9C53
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7447
  cpu.r1.iy = 0x2267
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x57)
  mem.write8(0x0003, 0x0F)
  mem.write8(0x749E, 0xF8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7C28)
  expect(cpu.r1.bc).toEqual(0xFAD4)
  expect(cpu.r1.de).toEqual(0xFA4B)
  expect(cpu.r1.hl).toEqual(0x9C53)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7447)
  expect(cpu.r1.iy).toEqual(0x2267)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb10', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF3AF
  cpu.r1.bc = 0xBA1F
  cpu.r1.de = 0x5387
  cpu.r1.hl = 0x926E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBBA2
  cpu.r1.iy = 0xCA47
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4F)
  mem.write8(0x0003, 0x10)
  mem.write8(0xBBF1, 0x45)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF38C)
  expect(cpu.r1.bc).toEqual(0x8B1F)
  expect(cpu.r1.de).toEqual(0x5387)
  expect(cpu.r1.hl).toEqual(0x926E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBBA2)
  expect(cpu.r1.iy).toEqual(0xCA47)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb11', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2A69
  cpu.r1.bc = 0xD604
  cpu.r1.de = 0xA9AA
  cpu.r1.hl = 0x5B52
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1809
  cpu.r1.iy = 0xD275
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEB)
  mem.write8(0x0003, 0x11)
  mem.write8(0x17F4, 0xD9)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2AA1)
  expect(cpu.r1.bc).toEqual(0xD6B3)
  expect(cpu.r1.de).toEqual(0xA9AA)
  expect(cpu.r1.hl).toEqual(0x5B52)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1809)
  expect(cpu.r1.iy).toEqual(0xD275)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb12', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9287
  cpu.r1.bc = 0xC479
  cpu.r1.de = 0x26D1
  cpu.r1.hl = 0x10CE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC0FB
  cpu.r1.iy = 0x2777
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA6)
  mem.write8(0x0003, 0x12)
  mem.write8(0xC0A1, 0xE2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9285)
  expect(cpu.r1.bc).toEqual(0xC479)
  expect(cpu.r1.de).toEqual(0xC5D1)
  expect(cpu.r1.hl).toEqual(0x10CE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC0FB)
  expect(cpu.r1.iy).toEqual(0x2777)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb13', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA507
  cpu.r1.bc = 0x580A
  cpu.r1.de = 0xA48F
  cpu.r1.hl = 0x11CD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5AC4
  cpu.r1.iy = 0xCCC7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFF)
  mem.write8(0x0003, 0x13)
  mem.write8(0x5AC3, 0xA7)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA509)
  expect(cpu.r1.bc).toEqual(0x580A)
  expect(cpu.r1.de).toEqual(0xA44F)
  expect(cpu.r1.hl).toEqual(0x11CD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5AC4)
  expect(cpu.r1.iy).toEqual(0xCCC7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb14', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x294B
  cpu.r1.bc = 0x5B89
  cpu.r1.de = 0x8467
  cpu.r1.hl = 0x0430
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0977
  cpu.r1.iy = 0xC4E8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDD)
  mem.write8(0x0003, 0x14)
  mem.write8(0x0954, 0x85)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2909)
  expect(cpu.r1.bc).toEqual(0x5B89)
  expect(cpu.r1.de).toEqual(0x8467)
  expect(cpu.r1.hl).toEqual(0x0B30)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0977)
  expect(cpu.r1.iy).toEqual(0xC4E8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb15', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1FD1
  cpu.r1.bc = 0x6D53
  cpu.r1.de = 0x5B7C
  cpu.r1.hl = 0xA134
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEDE9
  cpu.r1.iy = 0xA85C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x07)
  mem.write8(0x0003, 0x15)
  mem.write8(0xEDF0, 0x0E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1F0C)
  expect(cpu.r1.bc).toEqual(0x6D53)
  expect(cpu.r1.de).toEqual(0x5B7C)
  expect(cpu.r1.hl).toEqual(0xA11D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEDE9)
  expect(cpu.r1.iy).toEqual(0xA85C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb16', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDA70
  cpu.r1.bc = 0xA1E4
  cpu.r1.de = 0x00B0
  cpu.r1.hl = 0x92C8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x16BE
  cpu.r1.iy = 0x2C95
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x45)
  mem.write8(0x0003, 0x16)
  mem.write8(0x1703, 0x5B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDAA0)
  expect(cpu.r1.bc).toEqual(0xA1E4)
  expect(cpu.r1.de).toEqual(0x00B0)
  expect(cpu.r1.hl).toEqual(0x92C8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x16BE)
  expect(cpu.r1.iy).toEqual(0x2C95)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb17', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3300
  cpu.r1.bc = 0xCBD1
  cpu.r1.de = 0x4E1A
  cpu.r1.hl = 0xCD27
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB8C9
  cpu.r1.iy = 0xE6D4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1C)
  mem.write8(0x0003, 0x17)
  mem.write8(0xB8E5, 0x7E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFCAC)
  expect(cpu.r1.bc).toEqual(0xCBD1)
  expect(cpu.r1.de).toEqual(0x4E1A)
  expect(cpu.r1.hl).toEqual(0xCD27)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB8C9)
  expect(cpu.r1.iy).toEqual(0xE6D4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb18', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD980
  cpu.r1.bc = 0x4EB5
  cpu.r1.de = 0x9CF9
  cpu.r1.hl = 0xB9F1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA189
  cpu.r1.iy = 0xBD7C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0E)
  mem.write8(0x0003, 0x18)
  mem.write8(0xA197, 0x90)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD90C)
  expect(cpu.r1.bc).toEqual(0x48B5)
  expect(cpu.r1.de).toEqual(0x9CF9)
  expect(cpu.r1.hl).toEqual(0xB9F1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA189)
  expect(cpu.r1.iy).toEqual(0xBD7C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb19', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x23B7
  cpu.r1.bc = 0x595A
  cpu.r1.de = 0xA756
  cpu.r1.hl = 0xCF2E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF0E7
  cpu.r1.iy = 0x26E4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA3)
  mem.write8(0x0003, 0x19)
  mem.write8(0xF08A, 0x37)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2389)
  expect(cpu.r1.bc).toEqual(0x599B)
  expect(cpu.r1.de).toEqual(0xA756)
  expect(cpu.r1.hl).toEqual(0xCF2E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF0E7)
  expect(cpu.r1.iy).toEqual(0x26E4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb1a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8B52
  cpu.r1.bc = 0x7E45
  cpu.r1.de = 0xBD0F
  cpu.r1.hl = 0x37A6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDE61
  cpu.r1.iy = 0x9CD9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAC)
  mem.write8(0x0003, 0x1A)
  mem.write8(0xDE0D, 0xCC)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8B24)
  expect(cpu.r1.bc).toEqual(0x7E45)
  expect(cpu.r1.de).toEqual(0x660F)
  expect(cpu.r1.hl).toEqual(0x37A6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDE61)
  expect(cpu.r1.iy).toEqual(0x9CD9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb1b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5C79
  cpu.r1.bc = 0x1414
  cpu.r1.de = 0x811C
  cpu.r1.hl = 0x5881
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB7C3
  cpu.r1.iy = 0xD14F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x05)
  mem.write8(0x0003, 0x1B)
  mem.write8(0xB7C8, 0x91)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5C89)
  expect(cpu.r1.bc).toEqual(0x1414)
  expect(cpu.r1.de).toEqual(0x81C8)
  expect(cpu.r1.hl).toEqual(0x5881)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB7C3)
  expect(cpu.r1.iy).toEqual(0xD14F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb1c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFAFC
  cpu.r1.bc = 0x6277
  cpu.r1.de = 0x8B67
  cpu.r1.hl = 0xD423
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFEF9
  cpu.r1.iy = 0x4A66
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFF)
  mem.write8(0x0003, 0x1C)
  mem.write8(0xFEF8, 0x61)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFA25)
  expect(cpu.r1.bc).toEqual(0x6277)
  expect(cpu.r1.de).toEqual(0x8B67)
  expect(cpu.r1.hl).toEqual(0x3023)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFEF9)
  expect(cpu.r1.iy).toEqual(0x4A66)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb1d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x76A5
  cpu.r1.bc = 0x324E
  cpu.r1.de = 0xE641
  cpu.r1.hl = 0x58F9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5B63
  cpu.r1.iy = 0xE18B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3A)
  mem.write8(0x0003, 0x1D)
  mem.write8(0x5B9D, 0xF3)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x76AD)
  expect(cpu.r1.bc).toEqual(0x324E)
  expect(cpu.r1.de).toEqual(0xE641)
  expect(cpu.r1.hl).toEqual(0x58F9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5B63)
  expect(cpu.r1.iy).toEqual(0xE18B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb1e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC5D9
  cpu.r1.bc = 0xCD58
  cpu.r1.de = 0x8967
  cpu.r1.hl = 0xF074
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x75B4
  cpu.r1.iy = 0x693A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xCE)
  mem.write8(0x0003, 0x1E)
  mem.write8(0x7582, 0x91)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC589)
  expect(cpu.r1.bc).toEqual(0xCD58)
  expect(cpu.r1.de).toEqual(0x8967)
  expect(cpu.r1.hl).toEqual(0xF074)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x75B4)
  expect(cpu.r1.iy).toEqual(0x693A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb1f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD28F
  cpu.r1.bc = 0x7F6D
  cpu.r1.de = 0x2058
  cpu.r1.hl = 0x63E3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1D9B
  cpu.r1.iy = 0xBABA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA8)
  mem.write8(0x0003, 0x1F)
  mem.write8(0x1D43, 0xB4)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDA88)
  expect(cpu.r1.bc).toEqual(0x7F6D)
  expect(cpu.r1.de).toEqual(0x2058)
  expect(cpu.r1.hl).toEqual(0x63E3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1D9B)
  expect(cpu.r1.iy).toEqual(0xBABA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb20', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4CE5
  cpu.r1.bc = 0x739E
  cpu.r1.de = 0xDC6C
  cpu.r1.hl = 0x18F4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDC39
  cpu.r1.iy = 0x8B0C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE8)
  mem.write8(0x0003, 0x20)
  mem.write8(0xDC21, 0x0E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4C08)
  expect(cpu.r1.bc).toEqual(0x1C9E)
  expect(cpu.r1.de).toEqual(0xDC6C)
  expect(cpu.r1.hl).toEqual(0x18F4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDC39)
  expect(cpu.r1.iy).toEqual(0x8B0C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb21', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD29D
  cpu.r1.bc = 0x66DD
  cpu.r1.de = 0x23EF
  cpu.r1.hl = 0x9096
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3494
  cpu.r1.iy = 0xB6C3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9E)
  mem.write8(0x0003, 0x21)
  mem.write8(0x3432, 0xF7)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD2AD)
  expect(cpu.r1.bc).toEqual(0x66EE)
  expect(cpu.r1.de).toEqual(0x23EF)
  expect(cpu.r1.hl).toEqual(0x9096)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3494)
  expect(cpu.r1.iy).toEqual(0xB6C3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb22', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFB5D
  cpu.r1.bc = 0xE0D0
  cpu.r1.de = 0x7C02
  cpu.r1.hl = 0xB4B7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBD3F
  cpu.r1.iy = 0x385B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x43)
  mem.write8(0x0003, 0x22)
  mem.write8(0xBD82, 0x9F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFB29)
  expect(cpu.r1.bc).toEqual(0xE0D0)
  expect(cpu.r1.de).toEqual(0x3E02)
  expect(cpu.r1.hl).toEqual(0xB4B7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBD3F)
  expect(cpu.r1.iy).toEqual(0x385B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb23', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC359
  cpu.r1.bc = 0x68B6
  cpu.r1.de = 0xDA84
  cpu.r1.hl = 0xB990
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x22DD
  cpu.r1.iy = 0xBD27
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC1)
  mem.write8(0x0003, 0x23)
  mem.write8(0x229E, 0xE0)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC385)
  expect(cpu.r1.bc).toEqual(0x68B6)
  expect(cpu.r1.de).toEqual(0xDAC0)
  expect(cpu.r1.hl).toEqual(0xB990)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x22DD)
  expect(cpu.r1.iy).toEqual(0xBD27)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb24', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xBAF5
  cpu.r1.bc = 0x7B0B
  cpu.r1.de = 0x560B
  cpu.r1.hl = 0x7C33
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x31F1
  cpu.r1.iy = 0xDDBD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE8)
  mem.write8(0x0003, 0x24)
  mem.write8(0x31D9, 0xC3)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xBA81)
  expect(cpu.r1.bc).toEqual(0x7B0B)
  expect(cpu.r1.de).toEqual(0x560B)
  expect(cpu.r1.hl).toEqual(0x8633)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x31F1)
  expect(cpu.r1.iy).toEqual(0xDDBD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb25', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x43BB
  cpu.r1.bc = 0xA21B
  cpu.r1.de = 0x2347
  cpu.r1.hl = 0xAE4A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCC63
  cpu.r1.iy = 0xFC94
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC1)
  mem.write8(0x0003, 0x25)
  mem.write8(0xCC24, 0xEB)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4381)
  expect(cpu.r1.bc).toEqual(0xA21B)
  expect(cpu.r1.de).toEqual(0x2347)
  expect(cpu.r1.hl).toEqual(0xAED6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCC63)
  expect(cpu.r1.iy).toEqual(0xFC94)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb26', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2065
  cpu.r1.bc = 0xFF37
  cpu.r1.de = 0xE41F
  cpu.r1.hl = 0x70E7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6528
  cpu.r1.iy = 0xA0D5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF7)
  mem.write8(0x0003, 0x26)
  mem.write8(0x651F, 0x89)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2005)
  expect(cpu.r1.bc).toEqual(0xFF37)
  expect(cpu.r1.de).toEqual(0xE41F)
  expect(cpu.r1.hl).toEqual(0x70E7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6528)
  expect(cpu.r1.iy).toEqual(0xA0D5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb27', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA806
  cpu.r1.bc = 0x5669
  cpu.r1.de = 0x1BEE
  cpu.r1.hl = 0xF62C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1F69
  cpu.r1.iy = 0x3418
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC3)
  mem.write8(0x0003, 0x27)
  mem.write8(0x1F2C, 0xAC)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5809)
  expect(cpu.r1.bc).toEqual(0x5669)
  expect(cpu.r1.de).toEqual(0x1BEE)
  expect(cpu.r1.hl).toEqual(0xF62C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1F69)
  expect(cpu.r1.iy).toEqual(0x3418)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb28', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7AFD
  cpu.r1.bc = 0x64B8
  cpu.r1.de = 0x51F7
  cpu.r1.hl = 0x7164
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x999B
  cpu.r1.iy = 0x8857
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB6)
  mem.write8(0x0003, 0x28)
  mem.write8(0x9951, 0x24)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7A04)
  expect(cpu.r1.bc).toEqual(0x12B8)
  expect(cpu.r1.de).toEqual(0x51F7)
  expect(cpu.r1.hl).toEqual(0x7164)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x999B)
  expect(cpu.r1.iy).toEqual(0x8857)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb29', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0404
  cpu.r1.bc = 0xB794
  cpu.r1.de = 0x323F
  cpu.r1.hl = 0xFD34
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x20E7
  cpu.r1.iy = 0xC753
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9C)
  mem.write8(0x0003, 0x29)
  mem.write8(0x2083, 0x82)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0480)
  expect(cpu.r1.bc).toEqual(0xB7C1)
  expect(cpu.r1.de).toEqual(0x323F)
  expect(cpu.r1.hl).toEqual(0xFD34)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x20E7)
  expect(cpu.r1.iy).toEqual(0xC753)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb2a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4524
  cpu.r1.bc = 0xAFDE
  cpu.r1.de = 0x0C08
  cpu.r1.hl = 0x75D7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9505
  cpu.r1.iy = 0xB624
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD8)
  mem.write8(0x0003, 0x2A)
  mem.write8(0x94DD, 0x7C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4528)
  expect(cpu.r1.bc).toEqual(0xAFDE)
  expect(cpu.r1.de).toEqual(0x3E08)
  expect(cpu.r1.hl).toEqual(0x75D7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9505)
  expect(cpu.r1.iy).toEqual(0xB624)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb2b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8324
  cpu.r1.bc = 0xE290
  cpu.r1.de = 0x26BE
  cpu.r1.hl = 0x7DDD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB484
  cpu.r1.iy = 0x571C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBD)
  mem.write8(0x0003, 0x2B)
  mem.write8(0xB441, 0x44)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8324)
  expect(cpu.r1.bc).toEqual(0xE290)
  expect(cpu.r1.de).toEqual(0x2622)
  expect(cpu.r1.hl).toEqual(0x7DDD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB484)
  expect(cpu.r1.iy).toEqual(0x571C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb2c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC688
  cpu.r1.bc = 0x0C94
  cpu.r1.de = 0x6E4B
  cpu.r1.hl = 0x7DC7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFE28
  cpu.r1.iy = 0xDC80
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2C)
  mem.write8(0x0003, 0x2C)
  mem.write8(0xFE54, 0x81)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC685)
  expect(cpu.r1.bc).toEqual(0x0C94)
  expect(cpu.r1.de).toEqual(0x6E4B)
  expect(cpu.r1.hl).toEqual(0xC0C7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFE28)
  expect(cpu.r1.iy).toEqual(0xDC80)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb2d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCE28
  cpu.r1.bc = 0xD2AE
  cpu.r1.de = 0xC9BE
  cpu.r1.hl = 0x4236
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB4ED
  cpu.r1.iy = 0x6DE3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9B)
  mem.write8(0x0003, 0x2D)
  mem.write8(0xB488, 0x44)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCE24)
  expect(cpu.r1.bc).toEqual(0xD2AE)
  expect(cpu.r1.de).toEqual(0xC9BE)
  expect(cpu.r1.hl).toEqual(0x4222)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB4ED)
  expect(cpu.r1.iy).toEqual(0x6DE3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb2e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x50B0
  cpu.r1.bc = 0xDE74
  cpu.r1.de = 0xECA8
  cpu.r1.hl = 0x83FF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x69D8
  cpu.r1.iy = 0x75C7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3D)
  mem.write8(0x0003, 0x2E)
  mem.write8(0x6A15, 0x05)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5001)
  expect(cpu.r1.bc).toEqual(0xDE74)
  expect(cpu.r1.de).toEqual(0xECA8)
  expect(cpu.r1.hl).toEqual(0x83FF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x69D8)
  expect(cpu.r1.iy).toEqual(0x75C7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb2f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAEC6
  cpu.r1.bc = 0x759B
  cpu.r1.de = 0x3059
  cpu.r1.hl = 0x01B9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7A30
  cpu.r1.iy = 0xDD56
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD3)
  mem.write8(0x0003, 0x2F)
  mem.write8(0x7A03, 0xF2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF9AC)
  expect(cpu.r1.bc).toEqual(0x759B)
  expect(cpu.r1.de).toEqual(0x3059)
  expect(cpu.r1.hl).toEqual(0x01B9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7A30)
  expect(cpu.r1.iy).toEqual(0xDD56)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb30', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3C89
  cpu.r1.bc = 0x96AD
  cpu.r1.de = 0x9CC7
  cpu.r1.hl = 0xA68C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEEE8
  cpu.r1.iy = 0x5A80
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDF)
  mem.write8(0x0003, 0x30)
  mem.write8(0xEEC7, 0x32)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3C24)
  expect(cpu.r1.bc).toEqual(0x65AD)
  expect(cpu.r1.de).toEqual(0x9CC7)
  expect(cpu.r1.hl).toEqual(0xA68C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEEE8)
  expect(cpu.r1.iy).toEqual(0x5A80)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb31', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xEBF5
  cpu.r1.bc = 0x41E9
  cpu.r1.de = 0x929B
  cpu.r1.hl = 0x7D47
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF22D
  cpu.r1.iy = 0x8943
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x49)
  mem.write8(0x0003, 0x31)
  mem.write8(0xF276, 0xCD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEB89)
  expect(cpu.r1.bc).toEqual(0x419B)
  expect(cpu.r1.de).toEqual(0x929B)
  expect(cpu.r1.hl).toEqual(0x7D47)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF22D)
  expect(cpu.r1.iy).toEqual(0x8943)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb32', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9A1B
  cpu.r1.bc = 0xAA64
  cpu.r1.de = 0x4209
  cpu.r1.hl = 0x01AD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x579F
  cpu.r1.iy = 0xEC4C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE0)
  mem.write8(0x0003, 0x32)
  mem.write8(0x577F, 0xE2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9A85)
  expect(cpu.r1.bc).toEqual(0xAA64)
  expect(cpu.r1.de).toEqual(0xC509)
  expect(cpu.r1.hl).toEqual(0x01AD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x579F)
  expect(cpu.r1.iy).toEqual(0xEC4C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb33', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB8B1
  cpu.r1.bc = 0xB854
  cpu.r1.de = 0x524F
  cpu.r1.hl = 0x9599
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEFAC
  cpu.r1.iy = 0xD9EC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC9)
  mem.write8(0x0003, 0x33)
  mem.write8(0xEF75, 0x0B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB804)
  expect(cpu.r1.bc).toEqual(0xB854)
  expect(cpu.r1.de).toEqual(0x5217)
  expect(cpu.r1.hl).toEqual(0x9599)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEFAC)
  expect(cpu.r1.iy).toEqual(0xD9EC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb34', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCD3C
  cpu.r1.bc = 0x4432
  cpu.r1.de = 0x20D4
  cpu.r1.hl = 0x0B3E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAB48
  cpu.r1.iy = 0xC95F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x49)
  mem.write8(0x0003, 0x34)
  mem.write8(0xAB91, 0xEF)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCD89)
  expect(cpu.r1.bc).toEqual(0x4432)
  expect(cpu.r1.de).toEqual(0x20D4)
  expect(cpu.r1.hl).toEqual(0xDF3E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAB48)
  expect(cpu.r1.iy).toEqual(0xC95F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb35', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDEB1
  cpu.r1.bc = 0xC6FC
  cpu.r1.de = 0x696D
  cpu.r1.hl = 0x150D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEB1A
  cpu.r1.iy = 0x4A12
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB9)
  mem.write8(0x0003, 0x35)
  mem.write8(0xEAD3, 0x8F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDE09)
  expect(cpu.r1.bc).toEqual(0xC6FC)
  expect(cpu.r1.de).toEqual(0x696D)
  expect(cpu.r1.hl).toEqual(0x151F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEB1A)
  expect(cpu.r1.iy).toEqual(0x4A12)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb36', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3D81
  cpu.r1.bc = 0x443B
  cpu.r1.de = 0xFF21
  cpu.r1.hl = 0x63E3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x132E
  cpu.r1.iy = 0xFB39
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB4)
  mem.write8(0x0003, 0x36)
  mem.write8(0x12E2, 0x02)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3D04)
  expect(cpu.r1.bc).toEqual(0x443B)
  expect(cpu.r1.de).toEqual(0xFF21)
  expect(cpu.r1.hl).toEqual(0x63E3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x132E)
  expect(cpu.r1.iy).toEqual(0xFB39)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb37', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x72D9
  cpu.r1.bc = 0xBFC9
  cpu.r1.de = 0xA69A
  cpu.r1.hl = 0xEC0B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5077
  cpu.r1.iy = 0x4E3E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC6)
  mem.write8(0x0003, 0x37)
  mem.write8(0x503D, 0x3D)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7B2C)
  expect(cpu.r1.bc).toEqual(0xBFC9)
  expect(cpu.r1.de).toEqual(0xA69A)
  expect(cpu.r1.hl).toEqual(0xEC0B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5077)
  expect(cpu.r1.iy).toEqual(0x4E3E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb38', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3C64
  cpu.r1.bc = 0xB1EE
  cpu.r1.de = 0x38E1
  cpu.r1.hl = 0xAE9F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF695
  cpu.r1.iy = 0x44B3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8E)
  mem.write8(0x0003, 0x38)
  mem.write8(0xF623, 0x5E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3C28)
  expect(cpu.r1.bc).toEqual(0x2FEE)
  expect(cpu.r1.de).toEqual(0x38E1)
  expect(cpu.r1.hl).toEqual(0xAE9F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF695)
  expect(cpu.r1.iy).toEqual(0x44B3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb39', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x05D6
  cpu.r1.bc = 0x9AAD
  cpu.r1.de = 0xA2DB
  cpu.r1.hl = 0xDF75
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA895
  cpu.r1.iy = 0xE243
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDC)
  mem.write8(0x0003, 0x39)
  mem.write8(0xA871, 0x83)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0505)
  expect(cpu.r1.bc).toEqual(0x9A41)
  expect(cpu.r1.de).toEqual(0xA2DB)
  expect(cpu.r1.hl).toEqual(0xDF75)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA895)
  expect(cpu.r1.iy).toEqual(0xE243)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb3a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0E22
  cpu.r1.bc = 0x0B9F
  cpu.r1.de = 0x873B
  cpu.r1.hl = 0xC01D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2591
  cpu.r1.iy = 0x49C3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0D)
  mem.write8(0x0003, 0x3A)
  mem.write8(0x259E, 0x89)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0E05)
  expect(cpu.r1.bc).toEqual(0x0B9F)
  expect(cpu.r1.de).toEqual(0x443B)
  expect(cpu.r1.hl).toEqual(0xC01D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2591)
  expect(cpu.r1.iy).toEqual(0x49C3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb3b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1BD9
  cpu.r1.bc = 0xC795
  cpu.r1.de = 0xD8AE
  cpu.r1.hl = 0x7CCF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6FED
  cpu.r1.iy = 0x09DC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x20)
  mem.write8(0x0003, 0x3B)
  mem.write8(0x700D, 0xA9)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1B01)
  expect(cpu.r1.bc).toEqual(0xC795)
  expect(cpu.r1.de).toEqual(0xD854)
  expect(cpu.r1.hl).toEqual(0x7CCF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6FED)
  expect(cpu.r1.iy).toEqual(0x09DC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb3c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB651
  cpu.r1.bc = 0xBDF7
  cpu.r1.de = 0xFCA3
  cpu.r1.hl = 0x7529
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF53B
  cpu.r1.iy = 0x018B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE1)
  mem.write8(0x0003, 0x3C)
  mem.write8(0xF51C, 0xD0)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB628)
  expect(cpu.r1.bc).toEqual(0xBDF7)
  expect(cpu.r1.de).toEqual(0xFCA3)
  expect(cpu.r1.hl).toEqual(0x6829)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF53B)
  expect(cpu.r1.iy).toEqual(0x018B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb3d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2A2D
  cpu.r1.bc = 0x6E6E
  cpu.r1.de = 0xCFBD
  cpu.r1.hl = 0x1DB5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0320
  cpu.r1.iy = 0x6AB0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBE)
  mem.write8(0x0003, 0x3D)
  mem.write8(0x02DE, 0x58)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2A28)
  expect(cpu.r1.bc).toEqual(0x6E6E)
  expect(cpu.r1.de).toEqual(0xCFBD)
  expect(cpu.r1.hl).toEqual(0x1D2C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0320)
  expect(cpu.r1.iy).toEqual(0x6AB0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb3e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x39B8
  cpu.r1.bc = 0xB26E
  cpu.r1.de = 0xB670
  cpu.r1.hl = 0xB8A2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x784A
  cpu.r1.iy = 0x7840
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0A)
  mem.write8(0x0003, 0x3E)
  mem.write8(0x7854, 0x5D)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x392D)
  expect(cpu.r1.bc).toEqual(0xB26E)
  expect(cpu.r1.de).toEqual(0xB670)
  expect(cpu.r1.hl).toEqual(0xB8A2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x784A)
  expect(cpu.r1.iy).toEqual(0x7840)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb3f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2A17
  cpu.r1.bc = 0x429D
  cpu.r1.de = 0xD8C0
  cpu.r1.hl = 0xE069
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3488
  cpu.r1.iy = 0x7150
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x31)
  mem.write8(0x0003, 0x3F)
  mem.write8(0x34B9, 0x04)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0x429D)
  expect(cpu.r1.de).toEqual(0xD8C0)
  expect(cpu.r1.hl).toEqual(0xE069)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3488)
  expect(cpu.r1.iy).toEqual(0x7150)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb40', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x119B
  cpu.r1.bc = 0xF6BA
  cpu.r1.de = 0x079E
  cpu.r1.hl = 0x0E41
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8C01
  cpu.r1.iy = 0xCD21
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBD)
  mem.write8(0x0003, 0x40)
  mem.write8(0x8BBE, 0xE7)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1119)
  expect(cpu.r1.bc).toEqual(0xF6BA)
  expect(cpu.r1.de).toEqual(0x079E)
  expect(cpu.r1.hl).toEqual(0x0E41)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8C01)
  expect(cpu.r1.iy).toEqual(0xCD21)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb41', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x22B3
  cpu.r1.bc = 0xC4B0
  cpu.r1.de = 0x575B
  cpu.r1.hl = 0x66B4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCDCF
  cpu.r1.iy = 0xA25C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x52)
  mem.write8(0x0003, 0x41)
  mem.write8(0xCE21, 0x75)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2219)
  expect(cpu.r1.bc).toEqual(0xC4B0)
  expect(cpu.r1.de).toEqual(0x575B)
  expect(cpu.r1.hl).toEqual(0x66B4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCDCF)
  expect(cpu.r1.iy).toEqual(0xA25C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb42', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAF5E
  cpu.r1.bc = 0x7720
  cpu.r1.de = 0xAA95
  cpu.r1.hl = 0x3B0A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF03A
  cpu.r1.iy = 0x856A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x1E)
  mem.write8(0x0003, 0x42)
  mem.write8(0xF058, 0x90)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAF74)
  expect(cpu.r1.bc).toEqual(0x7720)
  expect(cpu.r1.de).toEqual(0xAA95)
  expect(cpu.r1.hl).toEqual(0x3B0A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF03A)
  expect(cpu.r1.iy).toEqual(0x856A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb43', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7FA6
  cpu.r1.bc = 0xB699
  cpu.r1.de = 0x5E71
  cpu.r1.hl = 0x1827
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE8B6
  cpu.r1.iy = 0x96A8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBC)
  mem.write8(0x0003, 0x43)
  mem.write8(0xE872, 0x6B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7F38)
  expect(cpu.r1.bc).toEqual(0xB699)
  expect(cpu.r1.de).toEqual(0x5E71)
  expect(cpu.r1.hl).toEqual(0x1827)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE8B6)
  expect(cpu.r1.iy).toEqual(0x96A8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb44', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5FAA
  cpu.r1.bc = 0xDE05
  cpu.r1.de = 0x12FD
  cpu.r1.hl = 0xF73B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEE0A
  cpu.r1.iy = 0x6634
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE8)
  mem.write8(0x0003, 0x44)
  mem.write8(0xEDF2, 0x62)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5F7C)
  expect(cpu.r1.bc).toEqual(0xDE05)
  expect(cpu.r1.de).toEqual(0x12FD)
  expect(cpu.r1.hl).toEqual(0xF73B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEE0A)
  expect(cpu.r1.iy).toEqual(0x6634)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb45', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xEAC7
  cpu.r1.bc = 0x699C
  cpu.r1.de = 0x47D3
  cpu.r1.hl = 0x89C3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA2BE
  cpu.r1.iy = 0xD81E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x02)
  mem.write8(0x0003, 0x45)
  mem.write8(0xA2C0, 0x55)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEA31)
  expect(cpu.r1.bc).toEqual(0x699C)
  expect(cpu.r1.de).toEqual(0x47D3)
  expect(cpu.r1.hl).toEqual(0x89C3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA2BE)
  expect(cpu.r1.iy).toEqual(0xD81E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb46', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x60DE
  cpu.r1.bc = 0xAC1D
  cpu.r1.de = 0x4173
  cpu.r1.hl = 0xF92A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA39F
  cpu.r1.iy = 0x12E5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE2)
  mem.write8(0x0003, 0x46)
  mem.write8(0xA381, 0xD5)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6030)
  expect(cpu.r1.bc).toEqual(0xAC1D)
  expect(cpu.r1.de).toEqual(0x4173)
  expect(cpu.r1.hl).toEqual(0xF92A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA39F)
  expect(cpu.r1.iy).toEqual(0x12E5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb47', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1B1A
  cpu.r1.bc = 0xF7C0
  cpu.r1.de = 0x22F6
  cpu.r1.hl = 0x5253
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5227
  cpu.r1.iy = 0x919D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7A)
  mem.write8(0x0003, 0x47)
  mem.write8(0x52A1, 0x6A)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1B54)
  expect(cpu.r1.bc).toEqual(0xF7C0)
  expect(cpu.r1.de).toEqual(0x22F6)
  expect(cpu.r1.hl).toEqual(0x5253)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5227)
  expect(cpu.r1.iy).toEqual(0x919D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb48', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x721A
  cpu.r1.bc = 0x4509
  cpu.r1.de = 0xD68F
  cpu.r1.hl = 0x3B3D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2746
  cpu.r1.iy = 0x7F97
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x13)
  mem.write8(0x0003, 0x48)
  mem.write8(0x2759, 0xA8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7274)
  expect(cpu.r1.bc).toEqual(0x4509)
  expect(cpu.r1.de).toEqual(0xD68F)
  expect(cpu.r1.hl).toEqual(0x3B3D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2746)
  expect(cpu.r1.iy).toEqual(0x7F97)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb49', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7FE9
  cpu.r1.bc = 0xDA22
  cpu.r1.de = 0xEA9C
  cpu.r1.hl = 0xF480
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x41C6
  cpu.r1.iy = 0x75A9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x94)
  mem.write8(0x0003, 0x49)
  mem.write8(0x415A, 0x26)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7F11)
  expect(cpu.r1.bc).toEqual(0xDA22)
  expect(cpu.r1.de).toEqual(0xEA9C)
  expect(cpu.r1.hl).toEqual(0xF480)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x41C6)
  expect(cpu.r1.iy).toEqual(0x75A9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb4a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF16D
  cpu.r1.bc = 0xE6C3
  cpu.r1.de = 0x5A42
  cpu.r1.hl = 0x8B21
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBFEB
  cpu.r1.iy = 0xE383
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3B)
  mem.write8(0x0003, 0x4A)
  mem.write8(0xC026, 0xB5)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF155)
  expect(cpu.r1.bc).toEqual(0xE6C3)
  expect(cpu.r1.de).toEqual(0x5A42)
  expect(cpu.r1.hl).toEqual(0x8B21)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBFEB)
  expect(cpu.r1.iy).toEqual(0xE383)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb4b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1050
  cpu.r1.bc = 0x880A
  cpu.r1.de = 0x52B2
  cpu.r1.hl = 0xFB1B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC239
  cpu.r1.iy = 0x6B40
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB0)
  mem.write8(0x0003, 0x4B)
  mem.write8(0xC1E9, 0x18)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1054)
  expect(cpu.r1.bc).toEqual(0x880A)
  expect(cpu.r1.de).toEqual(0x52B2)
  expect(cpu.r1.hl).toEqual(0xFB1B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC239)
  expect(cpu.r1.iy).toEqual(0x6B40)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb4c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0538
  cpu.r1.bc = 0xBC63
  cpu.r1.de = 0xF081
  cpu.r1.hl = 0x0A55
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x874C
  cpu.r1.iy = 0x80A3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x97)
  mem.write8(0x0003, 0x4C)
  mem.write8(0x86E3, 0x63)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0510)
  expect(cpu.r1.bc).toEqual(0xBC63)
  expect(cpu.r1.de).toEqual(0xF081)
  expect(cpu.r1.hl).toEqual(0x0A55)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x874C)
  expect(cpu.r1.iy).toEqual(0x80A3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb4d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7F8C
  cpu.r1.bc = 0x32B4
  cpu.r1.de = 0x03D5
  cpu.r1.hl = 0xEF66
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7D2A
  cpu.r1.iy = 0x03BC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x15)
  mem.write8(0x0003, 0x4D)
  mem.write8(0x7D3F, 0x60)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7F7C)
  expect(cpu.r1.bc).toEqual(0x32B4)
  expect(cpu.r1.de).toEqual(0x03D5)
  expect(cpu.r1.hl).toEqual(0xEF66)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7D2A)
  expect(cpu.r1.iy).toEqual(0x03BC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb4e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7C67
  cpu.r1.bc = 0xFA92
  cpu.r1.de = 0xB4D0
  cpu.r1.hl = 0x9F23
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEADE
  cpu.r1.iy = 0x1785
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB0)
  mem.write8(0x0003, 0x4E)
  mem.write8(0xEA8E, 0x3B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7C39)
  expect(cpu.r1.bc).toEqual(0xFA92)
  expect(cpu.r1.de).toEqual(0xB4D0)
  expect(cpu.r1.hl).toEqual(0x9F23)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEADE)
  expect(cpu.r1.iy).toEqual(0x1785)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb4f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x725C
  cpu.r1.bc = 0x257B
  cpu.r1.de = 0xDB73
  cpu.r1.hl = 0x2478
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x88C0
  cpu.r1.iy = 0xF151
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8B)
  mem.write8(0x0003, 0x4F)
  mem.write8(0x884B, 0x4C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x725C)
  expect(cpu.r1.bc).toEqual(0x257B)
  expect(cpu.r1.de).toEqual(0xDB73)
  expect(cpu.r1.hl).toEqual(0x2478)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x88C0)
  expect(cpu.r1.iy).toEqual(0xF151)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb50', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x35F4
  cpu.r1.bc = 0x8E51
  cpu.r1.de = 0x406C
  cpu.r1.hl = 0x2E3C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDAF2
  cpu.r1.iy = 0x413C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x12)
  mem.write8(0x0003, 0x50)
  mem.write8(0xDB04, 0x00)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x355C)
  expect(cpu.r1.bc).toEqual(0x8E51)
  expect(cpu.r1.de).toEqual(0x406C)
  expect(cpu.r1.hl).toEqual(0x2E3C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDAF2)
  expect(cpu.r1.iy).toEqual(0x413C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb51', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA630
  cpu.r1.bc = 0xBA85
  cpu.r1.de = 0xC88C
  cpu.r1.hl = 0xE86C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x84B2
  cpu.r1.iy = 0xCD8E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x18)
  mem.write8(0x0003, 0x51)
  mem.write8(0x84CA, 0x1C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA610)
  expect(cpu.r1.bc).toEqual(0xBA85)
  expect(cpu.r1.de).toEqual(0xC88C)
  expect(cpu.r1.hl).toEqual(0xE86C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x84B2)
  expect(cpu.r1.iy).toEqual(0xCD8E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb52', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCB88
  cpu.r1.bc = 0x1220
  cpu.r1.de = 0x1103
  cpu.r1.hl = 0xA868
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6156
  cpu.r1.iy = 0xCFAC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x42)
  mem.write8(0x0003, 0x52)
  mem.write8(0x6198, 0x53)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCB74)
  expect(cpu.r1.bc).toEqual(0x1220)
  expect(cpu.r1.de).toEqual(0x1103)
  expect(cpu.r1.hl).toEqual(0xA868)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6156)
  expect(cpu.r1.iy).toEqual(0xCFAC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb53', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5EB3
  cpu.r1.bc = 0x569E
  cpu.r1.de = 0xF76D
  cpu.r1.hl = 0x88C6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAE45
  cpu.r1.iy = 0x623E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE3)
  mem.write8(0x0003, 0x53)
  mem.write8(0xAE28, 0xD6)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5E39)
  expect(cpu.r1.bc).toEqual(0x569E)
  expect(cpu.r1.de).toEqual(0xF76D)
  expect(cpu.r1.hl).toEqual(0x88C6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAE45)
  expect(cpu.r1.iy).toEqual(0x623E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb54', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC3C9
  cpu.r1.bc = 0x76FE
  cpu.r1.de = 0xF1FF
  cpu.r1.hl = 0x416E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEFD5
  cpu.r1.iy = 0x7576
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7D)
  mem.write8(0x0003, 0x54)
  mem.write8(0xF052, 0x5D)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC331)
  expect(cpu.r1.bc).toEqual(0x76FE)
  expect(cpu.r1.de).toEqual(0xF1FF)
  expect(cpu.r1.hl).toEqual(0x416E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEFD5)
  expect(cpu.r1.iy).toEqual(0x7576)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb55', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7068
  cpu.r1.bc = 0xDCD0
  cpu.r1.de = 0x8345
  cpu.r1.hl = 0xD498
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF352
  cpu.r1.iy = 0xA88B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x88)
  mem.write8(0x0003, 0x55)
  mem.write8(0xF2DA, 0x03)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7074)
  expect(cpu.r1.bc).toEqual(0xDCD0)
  expect(cpu.r1.de).toEqual(0x8345)
  expect(cpu.r1.hl).toEqual(0xD498)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF352)
  expect(cpu.r1.iy).toEqual(0xA88B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb56', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9128
  cpu.r1.bc = 0x2CB8
  cpu.r1.de = 0x571C
  cpu.r1.hl = 0xF4FD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6D30
  cpu.r1.iy = 0xAEC2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x57)
  mem.write8(0x0003, 0x56)
  mem.write8(0x6D87, 0x61)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x917C)
  expect(cpu.r1.bc).toEqual(0x2CB8)
  expect(cpu.r1.de).toEqual(0x571C)
  expect(cpu.r1.hl).toEqual(0xF4FD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6D30)
  expect(cpu.r1.iy).toEqual(0xAEC2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb57', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3CA7
  cpu.r1.bc = 0x541A
  cpu.r1.de = 0x027C
  cpu.r1.hl = 0xC0B4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5833
  cpu.r1.iy = 0x160A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x06)
  mem.write8(0x0003, 0x57)
  mem.write8(0x5839, 0x1D)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3C19)
  expect(cpu.r1.bc).toEqual(0x541A)
  expect(cpu.r1.de).toEqual(0x027C)
  expect(cpu.r1.hl).toEqual(0xC0B4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5833)
  expect(cpu.r1.iy).toEqual(0x160A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb58', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC650
  cpu.r1.bc = 0xE1A8
  cpu.r1.de = 0x9D6C
  cpu.r1.hl = 0xBEC3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6A46
  cpu.r1.iy = 0xB66C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x83)
  mem.write8(0x0003, 0x58)
  mem.write8(0x69C9, 0x0F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC638)
  expect(cpu.r1.bc).toEqual(0xE1A8)
  expect(cpu.r1.de).toEqual(0x9D6C)
  expect(cpu.r1.hl).toEqual(0xBEC3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6A46)
  expect(cpu.r1.iy).toEqual(0xB66C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb59', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAD07
  cpu.r1.bc = 0x9BDA
  cpu.r1.de = 0xB7EE
  cpu.r1.hl = 0x63C4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9195
  cpu.r1.iy = 0x9703
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDB)
  mem.write8(0x0003, 0x59)
  mem.write8(0x9170, 0x10)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAD55)
  expect(cpu.r1.bc).toEqual(0x9BDA)
  expect(cpu.r1.de).toEqual(0xB7EE)
  expect(cpu.r1.hl).toEqual(0x63C4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9195)
  expect(cpu.r1.iy).toEqual(0x9703)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb5a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x80C0
  cpu.r1.bc = 0x5105
  cpu.r1.de = 0x36B0
  cpu.r1.hl = 0xA37C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0DE0
  cpu.r1.iy = 0xCE7F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD1)
  mem.write8(0x0003, 0x5A)
  mem.write8(0x0DB1, 0xBE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8018)
  expect(cpu.r1.bc).toEqual(0x5105)
  expect(cpu.r1.de).toEqual(0x36B0)
  expect(cpu.r1.hl).toEqual(0xA37C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0DE0)
  expect(cpu.r1.iy).toEqual(0xCE7F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb5b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2A8D
  cpu.r1.bc = 0x083D
  cpu.r1.de = 0x1409
  cpu.r1.hl = 0x06BA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x62AD
  cpu.r1.iy = 0xBAFF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD5)
  mem.write8(0x0003, 0x5B)
  mem.write8(0x6282, 0x67)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2A75)
  expect(cpu.r1.bc).toEqual(0x083D)
  expect(cpu.r1.de).toEqual(0x1409)
  expect(cpu.r1.hl).toEqual(0x06BA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x62AD)
  expect(cpu.r1.iy).toEqual(0xBAFF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb5c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4CA4
  cpu.r1.bc = 0xE502
  cpu.r1.de = 0xD23C
  cpu.r1.hl = 0x6DA8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9DC6
  cpu.r1.iy = 0x6F04
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5C)
  mem.write8(0x0003, 0x5C)
  mem.write8(0x9E22, 0xC9)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4C18)
  expect(cpu.r1.bc).toEqual(0xE502)
  expect(cpu.r1.de).toEqual(0xD23C)
  expect(cpu.r1.hl).toEqual(0x6DA8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9DC6)
  expect(cpu.r1.iy).toEqual(0x6F04)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb5d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7E39
  cpu.r1.bc = 0x511B
  cpu.r1.de = 0x3CFA
  cpu.r1.hl = 0x60D3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD193
  cpu.r1.iy = 0x3FE9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFF)
  mem.write8(0x0003, 0x5D)
  mem.write8(0xD192, 0x0D)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7E11)
  expect(cpu.r1.bc).toEqual(0x511B)
  expect(cpu.r1.de).toEqual(0x3CFA)
  expect(cpu.r1.hl).toEqual(0x60D3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD193)
  expect(cpu.r1.iy).toEqual(0x3FE9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb5e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCEF1
  cpu.r1.bc = 0x0235
  cpu.r1.de = 0xE2B1
  cpu.r1.hl = 0x7A4C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xED14
  cpu.r1.iy = 0xD0D6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x62)
  mem.write8(0x0003, 0x5E)
  mem.write8(0xED76, 0xA7)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCE7D)
  expect(cpu.r1.bc).toEqual(0x0235)
  expect(cpu.r1.de).toEqual(0xE2B1)
  expect(cpu.r1.hl).toEqual(0x7A4C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xED14)
  expect(cpu.r1.iy).toEqual(0xD0D6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb5f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x094F
  cpu.r1.bc = 0x20A8
  cpu.r1.de = 0x52E1
  cpu.r1.hl = 0xD783
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDF46
  cpu.r1.iy = 0xDA41
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3F)
  mem.write8(0x0003, 0x5F)
  mem.write8(0xDF85, 0x9E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0919)
  expect(cpu.r1.bc).toEqual(0x20A8)
  expect(cpu.r1.de).toEqual(0x52E1)
  expect(cpu.r1.hl).toEqual(0xD783)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDF46)
  expect(cpu.r1.iy).toEqual(0xDA41)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb60', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x42CE
  cpu.r1.bc = 0x0713
  cpu.r1.de = 0xDC90
  cpu.r1.hl = 0x2C89
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x32A2
  cpu.r1.iy = 0xC4D4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x65)
  mem.write8(0x0003, 0x60)
  mem.write8(0x3307, 0x2E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4274)
  expect(cpu.r1.bc).toEqual(0x0713)
  expect(cpu.r1.de).toEqual(0xDC90)
  expect(cpu.r1.hl).toEqual(0x2C89)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x32A2)
  expect(cpu.r1.iy).toEqual(0xC4D4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb61', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1B36
  cpu.r1.bc = 0x1403
  cpu.r1.de = 0x8B9B
  cpu.r1.hl = 0xC221
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x36CB
  cpu.r1.iy = 0x93D4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA8)
  mem.write8(0x0003, 0x61)
  mem.write8(0x3673, 0xBC)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1B30)
  expect(cpu.r1.bc).toEqual(0x1403)
  expect(cpu.r1.de).toEqual(0x8B9B)
  expect(cpu.r1.hl).toEqual(0xC221)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x36CB)
  expect(cpu.r1.iy).toEqual(0x93D4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb62', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x361B
  cpu.r1.bc = 0x4055
  cpu.r1.de = 0x650A
  cpu.r1.hl = 0x3F98
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0ACC
  cpu.r1.iy = 0xA102
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD9)
  mem.write8(0x0003, 0x62)
  mem.write8(0x0AA5, 0xEA)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x365D)
  expect(cpu.r1.bc).toEqual(0x4055)
  expect(cpu.r1.de).toEqual(0x650A)
  expect(cpu.r1.hl).toEqual(0x3F98)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0ACC)
  expect(cpu.r1.iy).toEqual(0xA102)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb63', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6548
  cpu.r1.bc = 0x08DF
  cpu.r1.de = 0x3CEB
  cpu.r1.hl = 0x6D24
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE679
  cpu.r1.iy = 0xF98E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x79)
  mem.write8(0x0003, 0x63)
  mem.write8(0xE6F2, 0x83)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6574)
  expect(cpu.r1.bc).toEqual(0x08DF)
  expect(cpu.r1.de).toEqual(0x3CEB)
  expect(cpu.r1.hl).toEqual(0x6D24)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE679)
  expect(cpu.r1.iy).toEqual(0xF98E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb64', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3C22
  cpu.r1.bc = 0xE2A7
  cpu.r1.de = 0x6DA9
  cpu.r1.hl = 0xC346
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xECFB
  cpu.r1.iy = 0x85B6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x71)
  mem.write8(0x0003, 0x64)
  mem.write8(0xED6C, 0x52)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3C38)
  expect(cpu.r1.bc).toEqual(0xE2A7)
  expect(cpu.r1.de).toEqual(0x6DA9)
  expect(cpu.r1.hl).toEqual(0xC346)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xECFB)
  expect(cpu.r1.iy).toEqual(0x85B6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb65', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x09BD
  cpu.r1.bc = 0x0ABB
  cpu.r1.de = 0x3AFA
  cpu.r1.hl = 0x91F5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7779
  cpu.r1.iy = 0xAEF5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x67)
  mem.write8(0x0003, 0x65)
  mem.write8(0x77E0, 0xF5)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0931)
  expect(cpu.r1.bc).toEqual(0x0ABB)
  expect(cpu.r1.de).toEqual(0x3AFA)
  expect(cpu.r1.hl).toEqual(0x91F5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7779)
  expect(cpu.r1.iy).toEqual(0xAEF5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb66', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCCBC
  cpu.r1.bc = 0xD301
  cpu.r1.de = 0x9B66
  cpu.r1.hl = 0x40FB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEE15
  cpu.r1.iy = 0x0D23
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x63)
  mem.write8(0x0003, 0x66)
  mem.write8(0xEE78, 0x70)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCC38)
  expect(cpu.r1.bc).toEqual(0xD301)
  expect(cpu.r1.de).toEqual(0x9B66)
  expect(cpu.r1.hl).toEqual(0x40FB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEE15)
  expect(cpu.r1.iy).toEqual(0x0D23)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb67', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xECCB
  cpu.r1.bc = 0x342F
  cpu.r1.de = 0xBE3E
  cpu.r1.hl = 0xA79B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEEA1
  cpu.r1.iy = 0xDFAE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD7)
  mem.write8(0x0003, 0x67)
  mem.write8(0xEE78, 0x06)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEC7D)
  expect(cpu.r1.bc).toEqual(0x342F)
  expect(cpu.r1.de).toEqual(0xBE3E)
  expect(cpu.r1.hl).toEqual(0xA79B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEEA1)
  expect(cpu.r1.iy).toEqual(0xDFAE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb68', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8E51
  cpu.r1.bc = 0x0063
  cpu.r1.de = 0x49AD
  cpu.r1.hl = 0xB7D4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE968
  cpu.r1.iy = 0x864E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB1)
  mem.write8(0x0003, 0x68)
  mem.write8(0xE919, 0x20)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8E39)
  expect(cpu.r1.bc).toEqual(0x0063)
  expect(cpu.r1.de).toEqual(0x49AD)
  expect(cpu.r1.hl).toEqual(0xB7D4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE968)
  expect(cpu.r1.iy).toEqual(0x864E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb69', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9F11
  cpu.r1.bc = 0x42B5
  cpu.r1.de = 0x74FE
  cpu.r1.hl = 0x1116
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x33F4
  cpu.r1.iy = 0x46C2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE8)
  mem.write8(0x0003, 0x69)
  mem.write8(0x33DC, 0x4F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9F75)
  expect(cpu.r1.bc).toEqual(0x42B5)
  expect(cpu.r1.de).toEqual(0x74FE)
  expect(cpu.r1.hl).toEqual(0x1116)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x33F4)
  expect(cpu.r1.iy).toEqual(0x46C2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb6a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4632
  cpu.r1.bc = 0x0BD8
  cpu.r1.de = 0x0018
  cpu.r1.hl = 0x1AC3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x86B6
  cpu.r1.iy = 0x1DD2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x33)
  mem.write8(0x0003, 0x6A)
  mem.write8(0x86E9, 0x1C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4654)
  expect(cpu.r1.bc).toEqual(0x0BD8)
  expect(cpu.r1.de).toEqual(0x0018)
  expect(cpu.r1.hl).toEqual(0x1AC3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x86B6)
  expect(cpu.r1.iy).toEqual(0x1DD2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb6b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7A76
  cpu.r1.bc = 0xF79F
  cpu.r1.de = 0xA78E
  cpu.r1.hl = 0xF867
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x187B
  cpu.r1.iy = 0x0023
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x11)
  mem.write8(0x0003, 0x6B)
  mem.write8(0x188C, 0xBC)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7A18)
  expect(cpu.r1.bc).toEqual(0xF79F)
  expect(cpu.r1.de).toEqual(0xA78E)
  expect(cpu.r1.hl).toEqual(0xF867)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x187B)
  expect(cpu.r1.iy).toEqual(0x0023)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb6c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDD91
  cpu.r1.bc = 0x1F1E
  cpu.r1.de = 0xC1E1
  cpu.r1.hl = 0x0EA7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3E21
  cpu.r1.iy = 0xF544
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5E)
  mem.write8(0x0003, 0x6C)
  mem.write8(0x3E7F, 0x2A)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDD39)
  expect(cpu.r1.bc).toEqual(0x1F1E)
  expect(cpu.r1.de).toEqual(0xC1E1)
  expect(cpu.r1.hl).toEqual(0x0EA7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3E21)
  expect(cpu.r1.iy).toEqual(0xF544)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb6d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDEBF
  cpu.r1.bc = 0x9AE4
  cpu.r1.de = 0xFD24
  cpu.r1.hl = 0xB3C2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE314
  cpu.r1.iy = 0xAD84
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDD)
  mem.write8(0x0003, 0x6D)
  mem.write8(0xE2F1, 0x41)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDE75)
  expect(cpu.r1.bc).toEqual(0x9AE4)
  expect(cpu.r1.de).toEqual(0xFD24)
  expect(cpu.r1.hl).toEqual(0xB3C2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE314)
  expect(cpu.r1.iy).toEqual(0xAD84)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb6e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCA75
  cpu.r1.bc = 0x9F16
  cpu.r1.de = 0xC700
  cpu.r1.hl = 0x1DCE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3086
  cpu.r1.iy = 0xD68E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB2)
  mem.write8(0x0003, 0x6E)
  mem.write8(0x3038, 0x3F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCA31)
  expect(cpu.r1.bc).toEqual(0x9F16)
  expect(cpu.r1.de).toEqual(0xC700)
  expect(cpu.r1.hl).toEqual(0x1DCE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3086)
  expect(cpu.r1.iy).toEqual(0xD68E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb6f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD4CD
  cpu.r1.bc = 0x0B39
  cpu.r1.de = 0x3E2E
  cpu.r1.hl = 0xC06E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFC1B
  cpu.r1.iy = 0xD592
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBE)
  mem.write8(0x0003, 0x6F)
  mem.write8(0xFBD9, 0x56)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD47D)
  expect(cpu.r1.bc).toEqual(0x0B39)
  expect(cpu.r1.de).toEqual(0x3E2E)
  expect(cpu.r1.hl).toEqual(0xC06E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFC1B)
  expect(cpu.r1.iy).toEqual(0xD592)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb70', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF901
  cpu.r1.bc = 0x09B8
  cpu.r1.de = 0x43F8
  cpu.r1.hl = 0x2A76
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x042C
  cpu.r1.iy = 0x7F2D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB5)
  mem.write8(0x0003, 0x70)
  mem.write8(0x03E1, 0x74)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF911)
  expect(cpu.r1.bc).toEqual(0x09B8)
  expect(cpu.r1.de).toEqual(0x43F8)
  expect(cpu.r1.hl).toEqual(0x2A76)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x042C)
  expect(cpu.r1.iy).toEqual(0x7F2D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb71', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAC78
  cpu.r1.bc = 0x36AD
  cpu.r1.de = 0x34CB
  cpu.r1.hl = 0xF950
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1B33
  cpu.r1.iy = 0xAA23
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF7)
  mem.write8(0x0003, 0x71)
  mem.write8(0x1B2A, 0x08)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAC5C)
  expect(cpu.r1.bc).toEqual(0x36AD)
  expect(cpu.r1.de).toEqual(0x34CB)
  expect(cpu.r1.hl).toEqual(0xF950)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1B33)
  expect(cpu.r1.iy).toEqual(0xAA23)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb72', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB1B3
  cpu.r1.bc = 0xF1E4
  cpu.r1.de = 0x9984
  cpu.r1.hl = 0xC7FB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCE25
  cpu.r1.iy = 0xC5B6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x22)
  mem.write8(0x0003, 0x72)
  mem.write8(0xCE47, 0x08)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB15D)
  expect(cpu.r1.bc).toEqual(0xF1E4)
  expect(cpu.r1.de).toEqual(0x9984)
  expect(cpu.r1.hl).toEqual(0xC7FB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCE25)
  expect(cpu.r1.iy).toEqual(0xC5B6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb73', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x21BA
  cpu.r1.bc = 0x592D
  cpu.r1.de = 0xF406
  cpu.r1.hl = 0xE21F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6442
  cpu.r1.iy = 0xCF58
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x12)
  mem.write8(0x0003, 0x73)
  mem.write8(0x6454, 0x3C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2174)
  expect(cpu.r1.bc).toEqual(0x592D)
  expect(cpu.r1.de).toEqual(0xF406)
  expect(cpu.r1.hl).toEqual(0xE21F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6442)
  expect(cpu.r1.iy).toEqual(0xCF58)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb74', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6642
  cpu.r1.bc = 0x64C1
  cpu.r1.de = 0xDBE5
  cpu.r1.hl = 0xEB48
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7DC1
  cpu.r1.iy = 0xC1FB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x08)
  mem.write8(0x0003, 0x74)
  mem.write8(0x7DC9, 0xBE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x667C)
  expect(cpu.r1.bc).toEqual(0x64C1)
  expect(cpu.r1.de).toEqual(0xDBE5)
  expect(cpu.r1.hl).toEqual(0xEB48)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7DC1)
  expect(cpu.r1.iy).toEqual(0xC1FB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb75', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8778
  cpu.r1.bc = 0x580E
  cpu.r1.de = 0x00DD
  cpu.r1.hl = 0xF4C6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x60AD
  cpu.r1.iy = 0x9B60
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5B)
  mem.write8(0x0003, 0x75)
  mem.write8(0x6108, 0xCF)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8730)
  expect(cpu.r1.bc).toEqual(0x580E)
  expect(cpu.r1.de).toEqual(0x00DD)
  expect(cpu.r1.hl).toEqual(0xF4C6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x60AD)
  expect(cpu.r1.iy).toEqual(0x9B60)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb76', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x65B8
  cpu.r1.bc = 0x5CC2
  cpu.r1.de = 0x3058
  cpu.r1.hl = 0xE258
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7E8A
  cpu.r1.iy = 0xB296
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x73)
  mem.write8(0x0003, 0x76)
  mem.write8(0x7EFD, 0x1E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x657C)
  expect(cpu.r1.bc).toEqual(0x5CC2)
  expect(cpu.r1.de).toEqual(0x3058)
  expect(cpu.r1.hl).toEqual(0xE258)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7E8A)
  expect(cpu.r1.iy).toEqual(0xB296)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb77', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE3A8
  cpu.r1.bc = 0x47A0
  cpu.r1.de = 0xC510
  cpu.r1.hl = 0xCF0A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0537
  cpu.r1.iy = 0xB242
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7F)
  mem.write8(0x0003, 0x77)
  mem.write8(0x05B6, 0x97)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE354)
  expect(cpu.r1.bc).toEqual(0x47A0)
  expect(cpu.r1.de).toEqual(0xC510)
  expect(cpu.r1.hl).toEqual(0xCF0A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0537)
  expect(cpu.r1.iy).toEqual(0xB242)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb78', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x424F
  cpu.r1.bc = 0x24F6
  cpu.r1.de = 0x1632
  cpu.r1.hl = 0x8A4F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9397
  cpu.r1.iy = 0x846C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x70)
  mem.write8(0x0003, 0x78)
  mem.write8(0x9407, 0x76)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4255)
  expect(cpu.r1.bc).toEqual(0x24F6)
  expect(cpu.r1.de).toEqual(0x1632)
  expect(cpu.r1.hl).toEqual(0x8A4F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9397)
  expect(cpu.r1.iy).toEqual(0x846C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb79', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE6A0
  cpu.r1.bc = 0xEEAA
  cpu.r1.de = 0x41F7
  cpu.r1.hl = 0x5DA2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x41DE
  cpu.r1.iy = 0x4189
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC3)
  mem.write8(0x0003, 0x79)
  mem.write8(0x41A1, 0xB8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE690)
  expect(cpu.r1.bc).toEqual(0xEEAA)
  expect(cpu.r1.de).toEqual(0x41F7)
  expect(cpu.r1.hl).toEqual(0x5DA2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x41DE)
  expect(cpu.r1.iy).toEqual(0x4189)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb7a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCABF
  cpu.r1.bc = 0x56AA
  cpu.r1.de = 0x6A06
  cpu.r1.hl = 0x6CD7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0AA9
  cpu.r1.iy = 0x9812
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3F)
  mem.write8(0x0003, 0x7A)
  mem.write8(0x0AE8, 0xEB)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCA99)
  expect(cpu.r1.bc).toEqual(0x56AA)
  expect(cpu.r1.de).toEqual(0x6A06)
  expect(cpu.r1.hl).toEqual(0x6CD7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0AA9)
  expect(cpu.r1.iy).toEqual(0x9812)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb7b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAE3F
  cpu.r1.bc = 0x0227
  cpu.r1.de = 0x721F
  cpu.r1.hl = 0x52A1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5040
  cpu.r1.iy = 0xB98A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x88)
  mem.write8(0x0003, 0x7B)
  mem.write8(0x4FC8, 0x22)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAE5D)
  expect(cpu.r1.bc).toEqual(0x0227)
  expect(cpu.r1.de).toEqual(0x721F)
  expect(cpu.r1.hl).toEqual(0x52A1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5040)
  expect(cpu.r1.iy).toEqual(0xB98A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb7c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8A80
  cpu.r1.bc = 0xA2F1
  cpu.r1.de = 0x239A
  cpu.r1.hl = 0xD5CC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6883
  cpu.r1.iy = 0xB050
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9E)
  mem.write8(0x0003, 0x7C)
  mem.write8(0x6821, 0x3A)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8A7C)
  expect(cpu.r1.bc).toEqual(0xA2F1)
  expect(cpu.r1.de).toEqual(0x239A)
  expect(cpu.r1.hl).toEqual(0xD5CC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6883)
  expect(cpu.r1.iy).toEqual(0xB050)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb7d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC37F
  cpu.r1.bc = 0xCF33
  cpu.r1.de = 0x1010
  cpu.r1.hl = 0x98E6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB021
  cpu.r1.iy = 0x0356
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x29)
  mem.write8(0x0003, 0x7D)
  mem.write8(0xB04A, 0x2C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC375)
  expect(cpu.r1.bc).toEqual(0xCF33)
  expect(cpu.r1.de).toEqual(0x1010)
  expect(cpu.r1.hl).toEqual(0x98E6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB021)
  expect(cpu.r1.iy).toEqual(0x0356)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb7e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9A25
  cpu.r1.bc = 0x2F6E
  cpu.r1.de = 0x0D0D
  cpu.r1.hl = 0xA83F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCEF0
  cpu.r1.iy = 0x8C15
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4F)
  mem.write8(0x0003, 0x7E)
  mem.write8(0xCF3F, 0xF2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9A99)
  expect(cpu.r1.bc).toEqual(0x2F6E)
  expect(cpu.r1.de).toEqual(0x0D0D)
  expect(cpu.r1.hl).toEqual(0xA83F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCEF0)
  expect(cpu.r1.iy).toEqual(0x8C15)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb7f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x53B9
  cpu.r1.bc = 0x1F4E
  cpu.r1.de = 0x4837
  cpu.r1.hl = 0x21B6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5EC2
  cpu.r1.iy = 0x80C3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x75)
  mem.write8(0x0003, 0x7F)
  mem.write8(0x5F37, 0xA2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5399)
  expect(cpu.r1.bc).toEqual(0x1F4E)
  expect(cpu.r1.de).toEqual(0x4837)
  expect(cpu.r1.hl).toEqual(0x21B6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5EC2)
  expect(cpu.r1.iy).toEqual(0x80C3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb80', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6319
  cpu.r1.bc = 0xBAF9
  cpu.r1.de = 0xC84B
  cpu.r1.hl = 0xBCF2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xACC5
  cpu.r1.iy = 0xA4ED
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x70)
  mem.write8(0x0003, 0x80)
  mem.write8(0xAD35, 0x30)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6319)
  expect(cpu.r1.bc).toEqual(0x30F9)
  expect(cpu.r1.de).toEqual(0xC84B)
  expect(cpu.r1.hl).toEqual(0xBCF2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xACC5)
  expect(cpu.r1.iy).toEqual(0xA4ED)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb81', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFAE1
  cpu.r1.bc = 0x5AE5
  cpu.r1.de = 0x9502
  cpu.r1.hl = 0xDC9B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBDD3
  cpu.r1.iy = 0x1A52
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2A)
  mem.write8(0x0003, 0x81)
  mem.write8(0xBDFD, 0x24)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFAE1)
  expect(cpu.r1.bc).toEqual(0x5A24)
  expect(cpu.r1.de).toEqual(0x9502)
  expect(cpu.r1.hl).toEqual(0xDC9B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBDD3)
  expect(cpu.r1.iy).toEqual(0x1A52)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb82', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDAF6
  cpu.r1.bc = 0x3260
  cpu.r1.de = 0xF1AC
  cpu.r1.hl = 0x1D47
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5E74
  cpu.r1.iy = 0x35E2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9A)
  mem.write8(0x0003, 0x82)
  mem.write8(0x5E0E, 0x51)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDAF6)
  expect(cpu.r1.bc).toEqual(0x3260)
  expect(cpu.r1.de).toEqual(0x50AC)
  expect(cpu.r1.hl).toEqual(0x1D47)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5E74)
  expect(cpu.r1.iy).toEqual(0x35E2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb83', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8E7C
  cpu.r1.bc = 0x5586
  cpu.r1.de = 0x8C92
  cpu.r1.hl = 0xFB00
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3441
  cpu.r1.iy = 0xD365
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0E)
  mem.write8(0x0003, 0x83)
  mem.write8(0x344F, 0x01)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8E7C)
  expect(cpu.r1.bc).toEqual(0x5586)
  expect(cpu.r1.de).toEqual(0x8C00)
  expect(cpu.r1.hl).toEqual(0xFB00)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3441)
  expect(cpu.r1.iy).toEqual(0xD365)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb84', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC1B3
  cpu.r1.bc = 0x4874
  cpu.r1.de = 0xC535
  cpu.r1.hl = 0x0E1C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0123
  cpu.r1.iy = 0xDD28
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x47)
  mem.write8(0x0003, 0x84)
  mem.write8(0x016A, 0xB0)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC1B3)
  expect(cpu.r1.bc).toEqual(0x4874)
  expect(cpu.r1.de).toEqual(0xC535)
  expect(cpu.r1.hl).toEqual(0xB01C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0123)
  expect(cpu.r1.iy).toEqual(0xDD28)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb85', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0928
  cpu.r1.bc = 0xB0DB
  cpu.r1.de = 0x4E07
  cpu.r1.hl = 0xA7B7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0BA3
  cpu.r1.iy = 0xC61C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6C)
  mem.write8(0x0003, 0x85)
  mem.write8(0x0C0F, 0xDE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0928)
  expect(cpu.r1.bc).toEqual(0xB0DB)
  expect(cpu.r1.de).toEqual(0x4E07)
  expect(cpu.r1.hl).toEqual(0xA7DE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0BA3)
  expect(cpu.r1.iy).toEqual(0xC61C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb86', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4515
  cpu.r1.bc = 0xDE09
  cpu.r1.de = 0x3CE7
  cpu.r1.hl = 0x1FDE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x10C5
  cpu.r1.iy = 0x33ED
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x5C)
  mem.write8(0x0003, 0x86)
  mem.write8(0x1121, 0x7C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4515)
  expect(cpu.r1.bc).toEqual(0xDE09)
  expect(cpu.r1.de).toEqual(0x3CE7)
  expect(cpu.r1.hl).toEqual(0x1FDE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x10C5)
  expect(cpu.r1.iy).toEqual(0x33ED)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb87', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD05E
  cpu.r1.bc = 0xA733
  cpu.r1.de = 0xD1DD
  cpu.r1.hl = 0x1603
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEDE6
  cpu.r1.iy = 0xE5FB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x02)
  mem.write8(0x0003, 0x87)
  mem.write8(0xEDE8, 0xC4)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC45E)
  expect(cpu.r1.bc).toEqual(0xA733)
  expect(cpu.r1.de).toEqual(0xD1DD)
  expect(cpu.r1.hl).toEqual(0x1603)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEDE6)
  expect(cpu.r1.iy).toEqual(0xE5FB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb88', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE4FA
  cpu.r1.bc = 0x3325
  cpu.r1.de = 0xC266
  cpu.r1.hl = 0x1B13
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x878E
  cpu.r1.iy = 0xE695
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9B)
  mem.write8(0x0003, 0x88)
  mem.write8(0x8729, 0x7C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE4FA)
  expect(cpu.r1.bc).toEqual(0x7C25)
  expect(cpu.r1.de).toEqual(0xC266)
  expect(cpu.r1.hl).toEqual(0x1B13)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x878E)
  expect(cpu.r1.iy).toEqual(0xE695)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb89', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x933B
  cpu.r1.bc = 0x6FDD
  cpu.r1.de = 0xA3A8
  cpu.r1.hl = 0x2634
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8F3E
  cpu.r1.iy = 0x7727
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2B)
  mem.write8(0x0003, 0x89)
  mem.write8(0x8F69, 0xCF)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x933B)
  expect(cpu.r1.bc).toEqual(0x6FCD)
  expect(cpu.r1.de).toEqual(0xA3A8)
  expect(cpu.r1.hl).toEqual(0x2634)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8F3E)
  expect(cpu.r1.iy).toEqual(0x7727)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb8a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6759
  cpu.r1.bc = 0xAD1E
  cpu.r1.de = 0x5D71
  cpu.r1.hl = 0xCE52
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x39A9
  cpu.r1.iy = 0x38A0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0A)
  mem.write8(0x0003, 0x8A)
  mem.write8(0x39B3, 0xEA)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6759)
  expect(cpu.r1.bc).toEqual(0xAD1E)
  expect(cpu.r1.de).toEqual(0xE871)
  expect(cpu.r1.hl).toEqual(0xCE52)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x39A9)
  expect(cpu.r1.iy).toEqual(0x38A0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb8b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3DA2
  cpu.r1.bc = 0x1833
  cpu.r1.de = 0x03C1
  cpu.r1.hl = 0x07E9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1685
  cpu.r1.iy = 0xD790
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x62)
  mem.write8(0x0003, 0x8B)
  mem.write8(0x16E7, 0x8A)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3DA2)
  expect(cpu.r1.bc).toEqual(0x1833)
  expect(cpu.r1.de).toEqual(0x0388)
  expect(cpu.r1.hl).toEqual(0x07E9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1685)
  expect(cpu.r1.iy).toEqual(0xD790)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb8c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA625
  cpu.r1.bc = 0xED31
  cpu.r1.de = 0x3946
  cpu.r1.hl = 0x32DC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC6A2
  cpu.r1.iy = 0x7AD6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE8)
  mem.write8(0x0003, 0x8C)
  mem.write8(0xC68A, 0x3E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA625)
  expect(cpu.r1.bc).toEqual(0xED31)
  expect(cpu.r1.de).toEqual(0x3946)
  expect(cpu.r1.hl).toEqual(0x3CDC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC6A2)
  expect(cpu.r1.iy).toEqual(0x7AD6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb8d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x016B
  cpu.r1.bc = 0x5802
  cpu.r1.de = 0xA683
  cpu.r1.hl = 0x2549
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x22E6
  cpu.r1.iy = 0x33BB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xCC)
  mem.write8(0x0003, 0x8D)
  mem.write8(0x22B2, 0x9E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x016B)
  expect(cpu.r1.bc).toEqual(0x5802)
  expect(cpu.r1.de).toEqual(0xA683)
  expect(cpu.r1.hl).toEqual(0x259C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x22E6)
  expect(cpu.r1.iy).toEqual(0x33BB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb8e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF4F4
  cpu.r1.bc = 0xF3A8
  cpu.r1.de = 0x2843
  cpu.r1.hl = 0x82CB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD2E8
  cpu.r1.iy = 0xD367
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0A)
  mem.write8(0x0003, 0x8E)
  mem.write8(0xD2F2, 0x03)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF4F4)
  expect(cpu.r1.bc).toEqual(0xF3A8)
  expect(cpu.r1.de).toEqual(0x2843)
  expect(cpu.r1.hl).toEqual(0x82CB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD2E8)
  expect(cpu.r1.iy).toEqual(0xD367)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb8f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6B1A
  cpu.r1.bc = 0x8AE2
  cpu.r1.de = 0x269B
  cpu.r1.hl = 0xCB2F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3FFE
  cpu.r1.iy = 0x75DD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7B)
  mem.write8(0x0003, 0x8F)
  mem.write8(0x4079, 0x96)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x941A)
  expect(cpu.r1.bc).toEqual(0x8AE2)
  expect(cpu.r1.de).toEqual(0x269B)
  expect(cpu.r1.hl).toEqual(0xCB2F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3FFE)
  expect(cpu.r1.iy).toEqual(0x75DD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb90', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC167
  cpu.r1.bc = 0x3DFC
  cpu.r1.de = 0x42E7
  cpu.r1.hl = 0x9E14
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB501
  cpu.r1.iy = 0x84FE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x04)
  mem.write8(0x0003, 0x90)
  mem.write8(0xB505, 0x46)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC167)
  expect(cpu.r1.bc).toEqual(0x42FC)
  expect(cpu.r1.de).toEqual(0x42E7)
  expect(cpu.r1.hl).toEqual(0x9E14)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB501)
  expect(cpu.r1.iy).toEqual(0x84FE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb91', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE85E
  cpu.r1.bc = 0xCC89
  cpu.r1.de = 0xD249
  cpu.r1.hl = 0xEA3B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC987
  cpu.r1.iy = 0xC4D1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x11)
  mem.write8(0x0003, 0x91)
  mem.write8(0xC998, 0x83)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE85E)
  expect(cpu.r1.bc).toEqual(0xCC83)
  expect(cpu.r1.de).toEqual(0xD249)
  expect(cpu.r1.hl).toEqual(0xEA3B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC987)
  expect(cpu.r1.iy).toEqual(0xC4D1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb92', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x28A3
  cpu.r1.bc = 0x85FF
  cpu.r1.de = 0xAB28
  cpu.r1.hl = 0x47A5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9166
  cpu.r1.iy = 0xE755
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4B)
  mem.write8(0x0003, 0x92)
  mem.write8(0x91B1, 0xAA)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x28A3)
  expect(cpu.r1.bc).toEqual(0x85FF)
  expect(cpu.r1.de).toEqual(0xAA28)
  expect(cpu.r1.hl).toEqual(0x47A5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9166)
  expect(cpu.r1.iy).toEqual(0xE755)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb93', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x58AC
  cpu.r1.bc = 0xC88B
  cpu.r1.de = 0x6D24
  cpu.r1.hl = 0xDBDD
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAC2E
  cpu.r1.iy = 0x5199
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x03)
  mem.write8(0x0003, 0x93)
  mem.write8(0xAC31, 0x93)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x58AC)
  expect(cpu.r1.bc).toEqual(0xC88B)
  expect(cpu.r1.de).toEqual(0x6D93)
  expect(cpu.r1.hl).toEqual(0xDBDD)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAC2E)
  expect(cpu.r1.iy).toEqual(0x5199)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb94', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE38D
  cpu.r1.bc = 0x35A5
  cpu.r1.de = 0x8D07
  cpu.r1.hl = 0xBFB8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5E84
  cpu.r1.iy = 0x5F24
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x11)
  mem.write8(0x0003, 0x94)
  mem.write8(0x5E95, 0xB7)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE38D)
  expect(cpu.r1.bc).toEqual(0x35A5)
  expect(cpu.r1.de).toEqual(0x8D07)
  expect(cpu.r1.hl).toEqual(0xB3B8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5E84)
  expect(cpu.r1.iy).toEqual(0x5F24)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb95', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x41F4
  cpu.r1.bc = 0x9536
  cpu.r1.de = 0xDD7D
  cpu.r1.hl = 0x4948
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFB74
  cpu.r1.iy = 0xF17D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE6)
  mem.write8(0x0003, 0x95)
  mem.write8(0xFB5A, 0xC6)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x41F4)
  expect(cpu.r1.bc).toEqual(0x9536)
  expect(cpu.r1.de).toEqual(0xDD7D)
  expect(cpu.r1.hl).toEqual(0x49C2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFB74)
  expect(cpu.r1.iy).toEqual(0xF17D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb96', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4A9E
  cpu.r1.bc = 0x42EF
  cpu.r1.de = 0x32D7
  cpu.r1.hl = 0x18CF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7A81
  cpu.r1.iy = 0xBB1D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD5)
  mem.write8(0x0003, 0x96)
  mem.write8(0x7A56, 0xAE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4A9E)
  expect(cpu.r1.bc).toEqual(0x42EF)
  expect(cpu.r1.de).toEqual(0x32D7)
  expect(cpu.r1.hl).toEqual(0x18CF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7A81)
  expect(cpu.r1.iy).toEqual(0xBB1D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb97', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9AD3
  cpu.r1.bc = 0x89F0
  cpu.r1.de = 0x73C7
  cpu.r1.hl = 0x0B1A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x847C
  cpu.r1.iy = 0x4B86
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x92)
  mem.write8(0x0003, 0x97)
  mem.write8(0x840E, 0x23)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x23D3)
  expect(cpu.r1.bc).toEqual(0x89F0)
  expect(cpu.r1.de).toEqual(0x73C7)
  expect(cpu.r1.hl).toEqual(0x0B1A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x847C)
  expect(cpu.r1.iy).toEqual(0x4B86)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb98', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6E22
  cpu.r1.bc = 0xB9FD
  cpu.r1.de = 0x9FDC
  cpu.r1.hl = 0x3AED
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x041E
  cpu.r1.iy = 0xFD79
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDC)
  mem.write8(0x0003, 0x98)
  mem.write8(0x03FA, 0x58)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6E22)
  expect(cpu.r1.bc).toEqual(0x50FD)
  expect(cpu.r1.de).toEqual(0x9FDC)
  expect(cpu.r1.hl).toEqual(0x3AED)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x041E)
  expect(cpu.r1.iy).toEqual(0xFD79)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb99', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA132
  cpu.r1.bc = 0x3891
  cpu.r1.de = 0x1515
  cpu.r1.hl = 0x2830
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x09FD
  cpu.r1.iy = 0x0473
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6D)
  mem.write8(0x0003, 0x99)
  mem.write8(0x0A6A, 0xCE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA132)
  expect(cpu.r1.bc).toEqual(0x38C6)
  expect(cpu.r1.de).toEqual(0x1515)
  expect(cpu.r1.hl).toEqual(0x2830)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x09FD)
  expect(cpu.r1.iy).toEqual(0x0473)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb9a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x783D
  cpu.r1.bc = 0x8F69
  cpu.r1.de = 0x91C4
  cpu.r1.hl = 0xE38F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x68A8
  cpu.r1.iy = 0x391D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8A)
  mem.write8(0x0003, 0x9A)
  mem.write8(0x6832, 0xA8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x783D)
  expect(cpu.r1.bc).toEqual(0x8F69)
  expect(cpu.r1.de).toEqual(0xA0C4)
  expect(cpu.r1.hl).toEqual(0xE38F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x68A8)
  expect(cpu.r1.iy).toEqual(0x391D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb9b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x955A
  cpu.r1.bc = 0xC7B0
  cpu.r1.de = 0x53B3
  cpu.r1.hl = 0xAEC6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x06EF
  cpu.r1.iy = 0xE991
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x97)
  mem.write8(0x0003, 0x9B)
  mem.write8(0x0686, 0x62)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x955A)
  expect(cpu.r1.bc).toEqual(0xC7B0)
  expect(cpu.r1.de).toEqual(0x5362)
  expect(cpu.r1.hl).toEqual(0xAEC6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x06EF)
  expect(cpu.r1.iy).toEqual(0xE991)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb9c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAF69
  cpu.r1.bc = 0xF896
  cpu.r1.de = 0xE791
  cpu.r1.hl = 0xA2EE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x847B
  cpu.r1.iy = 0x59ED
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x54)
  mem.write8(0x0003, 0x9C)
  mem.write8(0x84CF, 0x1B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAF69)
  expect(cpu.r1.bc).toEqual(0xF896)
  expect(cpu.r1.de).toEqual(0xE791)
  expect(cpu.r1.hl).toEqual(0x13EE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x847B)
  expect(cpu.r1.iy).toEqual(0x59ED)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb9d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7D1E
  cpu.r1.bc = 0x5009
  cpu.r1.de = 0x1248
  cpu.r1.hl = 0x380C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE920
  cpu.r1.iy = 0x4FE6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0F)
  mem.write8(0x0003, 0x9D)
  mem.write8(0xE92F, 0xE8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7D1E)
  expect(cpu.r1.bc).toEqual(0x5009)
  expect(cpu.r1.de).toEqual(0x1248)
  expect(cpu.r1.hl).toEqual(0x38E0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE920)
  expect(cpu.r1.iy).toEqual(0x4FE6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb9e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC207
  cpu.r1.bc = 0xB47C
  cpu.r1.de = 0x0E16
  cpu.r1.hl = 0xE17F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD8BB
  cpu.r1.iy = 0xBB99
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB5)
  mem.write8(0x0003, 0x9E)
  mem.write8(0xD870, 0xEE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC207)
  expect(cpu.r1.bc).toEqual(0xB47C)
  expect(cpu.r1.de).toEqual(0x0E16)
  expect(cpu.r1.hl).toEqual(0xE17F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD8BB)
  expect(cpu.r1.iy).toEqual(0xBB99)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcb9f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC26B
  cpu.r1.bc = 0x7537
  cpu.r1.de = 0x46BB
  cpu.r1.hl = 0x13C0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE63C
  cpu.r1.iy = 0x1D98
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB8)
  mem.write8(0x0003, 0x9F)
  mem.write8(0xE5F4, 0xA6)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA66B)
  expect(cpu.r1.bc).toEqual(0x7537)
  expect(cpu.r1.de).toEqual(0x46BB)
  expect(cpu.r1.hl).toEqual(0x13C0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE63C)
  expect(cpu.r1.iy).toEqual(0x1D98)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0BBE
  cpu.r1.bc = 0x8500
  cpu.r1.de = 0x8609
  cpu.r1.hl = 0x5352
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA2F0
  cpu.r1.iy = 0xDA02
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x02)
  mem.write8(0x0003, 0xA0)
  mem.write8(0xA2F2, 0x39)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0BBE)
  expect(cpu.r1.bc).toEqual(0x2900)
  expect(cpu.r1.de).toEqual(0x8609)
  expect(cpu.r1.hl).toEqual(0x5352)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA2F0)
  expect(cpu.r1.iy).toEqual(0xDA02)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAD0A
  cpu.r1.bc = 0xAA76
  cpu.r1.de = 0x0F2D
  cpu.r1.hl = 0x832C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x45BB
  cpu.r1.iy = 0xA22D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF5)
  mem.write8(0x0003, 0xA1)
  mem.write8(0x45B0, 0xD2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAD0A)
  expect(cpu.r1.bc).toEqual(0xAAC2)
  expect(cpu.r1.de).toEqual(0x0F2D)
  expect(cpu.r1.hl).toEqual(0x832C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x45BB)
  expect(cpu.r1.iy).toEqual(0xA22D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF586
  cpu.r1.bc = 0x4A7D
  cpu.r1.de = 0xA5AB
  cpu.r1.hl = 0x26FC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x628B
  cpu.r1.iy = 0x6C4D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0E)
  mem.write8(0x0003, 0xA2)
  mem.write8(0x6299, 0xA1)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF586)
  expect(cpu.r1.bc).toEqual(0x4A7D)
  expect(cpu.r1.de).toEqual(0xA1AB)
  expect(cpu.r1.hl).toEqual(0x26FC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x628B)
  expect(cpu.r1.iy).toEqual(0x6C4D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDE5B
  cpu.r1.bc = 0xA284
  cpu.r1.de = 0xD40E
  cpu.r1.hl = 0xC92D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x040D
  cpu.r1.iy = 0x12C0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2E)
  mem.write8(0x0003, 0xA3)
  mem.write8(0x043B, 0x04)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDE5B)
  expect(cpu.r1.bc).toEqual(0xA284)
  expect(cpu.r1.de).toEqual(0xD404)
  expect(cpu.r1.hl).toEqual(0xC92D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x040D)
  expect(cpu.r1.iy).toEqual(0x12C0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDFAA
  cpu.r1.bc = 0xAE40
  cpu.r1.de = 0x02C3
  cpu.r1.hl = 0xE0B5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFE4D
  cpu.r1.iy = 0xFAA3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x03)
  mem.write8(0x0003, 0xA4)
  mem.write8(0xFE50, 0x27)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDFAA)
  expect(cpu.r1.bc).toEqual(0xAE40)
  expect(cpu.r1.de).toEqual(0x02C3)
  expect(cpu.r1.hl).toEqual(0x27B5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFE4D)
  expect(cpu.r1.iy).toEqual(0xFAA3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1A15
  cpu.r1.bc = 0x04CB
  cpu.r1.de = 0x4352
  cpu.r1.hl = 0xEE39
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7B27
  cpu.r1.iy = 0x38A0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF6)
  mem.write8(0x0003, 0xA5)
  mem.write8(0x7B1D, 0x6B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1A15)
  expect(cpu.r1.bc).toEqual(0x04CB)
  expect(cpu.r1.de).toEqual(0x4352)
  expect(cpu.r1.hl).toEqual(0xEE6B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7B27)
  expect(cpu.r1.iy).toEqual(0x38A0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5E46
  cpu.r1.bc = 0xB98A
  cpu.r1.de = 0xB822
  cpu.r1.hl = 0x04CA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAE1B
  cpu.r1.iy = 0x8730
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x27)
  mem.write8(0x0003, 0xA6)
  mem.write8(0xAE42, 0x8F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5E46)
  expect(cpu.r1.bc).toEqual(0xB98A)
  expect(cpu.r1.de).toEqual(0xB822)
  expect(cpu.r1.hl).toEqual(0x04CA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAE1B)
  expect(cpu.r1.iy).toEqual(0x8730)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0EED
  cpu.r1.bc = 0x7B11
  cpu.r1.de = 0x8CB0
  cpu.r1.hl = 0xEB3D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5EC8
  cpu.r1.iy = 0x97CF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF2)
  mem.write8(0x0003, 0xA7)
  mem.write8(0x5EBA, 0x87)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x87ED)
  expect(cpu.r1.bc).toEqual(0x7B11)
  expect(cpu.r1.de).toEqual(0x8CB0)
  expect(cpu.r1.hl).toEqual(0xEB3D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5EC8)
  expect(cpu.r1.iy).toEqual(0x97CF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5173
  cpu.r1.bc = 0x3089
  cpu.r1.de = 0x070D
  cpu.r1.hl = 0xE8F9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE84F
  cpu.r1.iy = 0x55F0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD0)
  mem.write8(0x0003, 0xA8)
  mem.write8(0xE81F, 0x7E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5173)
  expect(cpu.r1.bc).toEqual(0x5E89)
  expect(cpu.r1.de).toEqual(0x070D)
  expect(cpu.r1.hl).toEqual(0xE8F9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE84F)
  expect(cpu.r1.iy).toEqual(0x55F0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcba9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4FB8
  cpu.r1.bc = 0xCCB5
  cpu.r1.de = 0x3E9A
  cpu.r1.hl = 0x2673
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0FDD
  cpu.r1.iy = 0xAEF2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9D)
  mem.write8(0x0003, 0xA9)
  mem.write8(0x0F7A, 0x1F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4FB8)
  expect(cpu.r1.bc).toEqual(0xCC1F)
  expect(cpu.r1.de).toEqual(0x3E9A)
  expect(cpu.r1.hl).toEqual(0x2673)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0FDD)
  expect(cpu.r1.iy).toEqual(0xAEF2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbaa', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFE76
  cpu.r1.bc = 0x6F96
  cpu.r1.de = 0x3FEB
  cpu.r1.hl = 0x0B21
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6747
  cpu.r1.iy = 0x07BA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9F)
  mem.write8(0x0003, 0xAA)
  mem.write8(0x66E6, 0x50)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFE76)
  expect(cpu.r1.bc).toEqual(0x6F96)
  expect(cpu.r1.de).toEqual(0x50EB)
  expect(cpu.r1.hl).toEqual(0x0B21)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6747)
  expect(cpu.r1.iy).toEqual(0x07BA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbab', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2EB4
  cpu.r1.bc = 0x36F1
  cpu.r1.de = 0x8F44
  cpu.r1.hl = 0x36AF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6682
  cpu.r1.iy = 0x9D60
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x16)
  mem.write8(0x0003, 0xAB)
  mem.write8(0x6698, 0xEB)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2EB4)
  expect(cpu.r1.bc).toEqual(0x36F1)
  expect(cpu.r1.de).toEqual(0x8FCB)
  expect(cpu.r1.hl).toEqual(0x36AF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6682)
  expect(cpu.r1.iy).toEqual(0x9D60)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbac', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAF32
  cpu.r1.bc = 0x8CA8
  cpu.r1.de = 0x6558
  cpu.r1.hl = 0x06D9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA4DD
  cpu.r1.iy = 0xCD1F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC4)
  mem.write8(0x0003, 0xAC)
  mem.write8(0xA4A1, 0x44)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAF32)
  expect(cpu.r1.bc).toEqual(0x8CA8)
  expect(cpu.r1.de).toEqual(0x6558)
  expect(cpu.r1.hl).toEqual(0x44D9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA4DD)
  expect(cpu.r1.iy).toEqual(0xCD1F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbad', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFCC9
  cpu.r1.bc = 0x69A7
  cpu.r1.de = 0x0EED
  cpu.r1.hl = 0xEAB5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEEF5
  cpu.r1.iy = 0x3ED2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x49)
  mem.write8(0x0003, 0xAD)
  mem.write8(0xEF3E, 0x76)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFCC9)
  expect(cpu.r1.bc).toEqual(0x69A7)
  expect(cpu.r1.de).toEqual(0x0EED)
  expect(cpu.r1.hl).toEqual(0xEA56)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEEF5)
  expect(cpu.r1.iy).toEqual(0x3ED2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbae', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5F7A
  cpu.r1.bc = 0x9C20
  cpu.r1.de = 0xF013
  cpu.r1.hl = 0xC4B7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB306
  cpu.r1.iy = 0x15DD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6E)
  mem.write8(0x0003, 0xAE)
  mem.write8(0xB374, 0x5A)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5F7A)
  expect(cpu.r1.bc).toEqual(0x9C20)
  expect(cpu.r1.de).toEqual(0xF013)
  expect(cpu.r1.hl).toEqual(0xC4B7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB306)
  expect(cpu.r1.iy).toEqual(0x15DD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbaf', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB11E
  cpu.r1.bc = 0x2583
  cpu.r1.de = 0x51FA
  cpu.r1.hl = 0xD427
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3619
  cpu.r1.iy = 0x9CEF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC2)
  mem.write8(0x0003, 0xAF)
  mem.write8(0x35DB, 0x15)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x151E)
  expect(cpu.r1.bc).toEqual(0x2583)
  expect(cpu.r1.de).toEqual(0x51FA)
  expect(cpu.r1.hl).toEqual(0xD427)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3619)
  expect(cpu.r1.iy).toEqual(0x9CEF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF43E
  cpu.r1.bc = 0xCE57
  cpu.r1.de = 0x3BF3
  cpu.r1.hl = 0x0933
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x58D7
  cpu.r1.iy = 0xD89F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x47)
  mem.write8(0x0003, 0xB0)
  mem.write8(0x591E, 0x1E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF43E)
  expect(cpu.r1.bc).toEqual(0x1E57)
  expect(cpu.r1.de).toEqual(0x3BF3)
  expect(cpu.r1.hl).toEqual(0x0933)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x58D7)
  expect(cpu.r1.iy).toEqual(0xD89F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x35EF
  cpu.r1.bc = 0xBBBC
  cpu.r1.de = 0xDB46
  cpu.r1.hl = 0x046C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xADD2
  cpu.r1.iy = 0x2B6E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x86)
  mem.write8(0x0003, 0xB1)
  mem.write8(0xAD58, 0x46)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x35EF)
  expect(cpu.r1.bc).toEqual(0xBB06)
  expect(cpu.r1.de).toEqual(0xDB46)
  expect(cpu.r1.hl).toEqual(0x046C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xADD2)
  expect(cpu.r1.iy).toEqual(0x2B6E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC26C
  cpu.r1.bc = 0xFD32
  cpu.r1.de = 0x9B7F
  cpu.r1.hl = 0xAB6C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE7D0
  cpu.r1.iy = 0x501F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x70)
  mem.write8(0x0003, 0xB2)
  mem.write8(0xE840, 0x48)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC26C)
  expect(cpu.r1.bc).toEqual(0xFD32)
  expect(cpu.r1.de).toEqual(0x087F)
  expect(cpu.r1.hl).toEqual(0xAB6C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE7D0)
  expect(cpu.r1.iy).toEqual(0x501F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x36CA
  cpu.r1.bc = 0xB434
  cpu.r1.de = 0xE212
  cpu.r1.hl = 0xF805
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x53FB
  cpu.r1.iy = 0xB191
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDE)
  mem.write8(0x0003, 0xB3)
  mem.write8(0x53D9, 0x06)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x36CA)
  expect(cpu.r1.bc).toEqual(0xB434)
  expect(cpu.r1.de).toEqual(0xE206)
  expect(cpu.r1.hl).toEqual(0xF805)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x53FB)
  expect(cpu.r1.iy).toEqual(0xB191)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0A1C
  cpu.r1.bc = 0xAB67
  cpu.r1.de = 0x9CA1
  cpu.r1.hl = 0x2F98
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5066
  cpu.r1.iy = 0x320C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6B)
  mem.write8(0x0003, 0xB4)
  mem.write8(0x50D1, 0xDD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0A1C)
  expect(cpu.r1.bc).toEqual(0xAB67)
  expect(cpu.r1.de).toEqual(0x9CA1)
  expect(cpu.r1.hl).toEqual(0x9D98)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5066)
  expect(cpu.r1.iy).toEqual(0x320C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFD6D
  cpu.r1.bc = 0x51C9
  cpu.r1.de = 0x16D6
  cpu.r1.hl = 0x1373
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x146E
  cpu.r1.iy = 0x2148
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEC)
  mem.write8(0x0003, 0xB5)
  mem.write8(0x145A, 0xD6)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFD6D)
  expect(cpu.r1.bc).toEqual(0x51C9)
  expect(cpu.r1.de).toEqual(0x16D6)
  expect(cpu.r1.hl).toEqual(0x1396)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x146E)
  expect(cpu.r1.iy).toEqual(0x2148)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1D0B
  cpu.r1.bc = 0x04E8
  cpu.r1.de = 0x109E
  cpu.r1.hl = 0x1DDE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8772
  cpu.r1.iy = 0x8661
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x15)
  mem.write8(0x0003, 0xB6)
  mem.write8(0x8787, 0x8C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1D0B)
  expect(cpu.r1.bc).toEqual(0x04E8)
  expect(cpu.r1.de).toEqual(0x109E)
  expect(cpu.r1.hl).toEqual(0x1DDE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8772)
  expect(cpu.r1.iy).toEqual(0x8661)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF012
  cpu.r1.bc = 0xB87E
  cpu.r1.de = 0x65BA
  cpu.r1.hl = 0xA5C8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6120
  cpu.r1.iy = 0x789D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD3)
  mem.write8(0x0003, 0xB7)
  mem.write8(0x60F3, 0x54)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1412)
  expect(cpu.r1.bc).toEqual(0xB87E)
  expect(cpu.r1.de).toEqual(0x65BA)
  expect(cpu.r1.hl).toEqual(0xA5C8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6120)
  expect(cpu.r1.iy).toEqual(0x789D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8EAE
  cpu.r1.bc = 0x4A53
  cpu.r1.de = 0xBFA1
  cpu.r1.hl = 0x5E7E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0BF6
  cpu.r1.iy = 0x1E35
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x13)
  mem.write8(0x0003, 0xB8)
  mem.write8(0x0C09, 0x87)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8EAE)
  expect(cpu.r1.bc).toEqual(0x0753)
  expect(cpu.r1.de).toEqual(0xBFA1)
  expect(cpu.r1.hl).toEqual(0x5E7E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0BF6)
  expect(cpu.r1.iy).toEqual(0x1E35)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbb9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5FB7
  cpu.r1.bc = 0xA81E
  cpu.r1.de = 0xE2D2
  cpu.r1.hl = 0x4117
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0564
  cpu.r1.iy = 0x48A1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x56)
  mem.write8(0x0003, 0xB9)
  mem.write8(0x05BA, 0xC8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5FB7)
  expect(cpu.r1.bc).toEqual(0xA848)
  expect(cpu.r1.de).toEqual(0xE2D2)
  expect(cpu.r1.hl).toEqual(0x4117)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0564)
  expect(cpu.r1.iy).toEqual(0x48A1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbba', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7F6A
  cpu.r1.bc = 0x47FE
  cpu.r1.de = 0xCE45
  cpu.r1.hl = 0x75DE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF5E0
  cpu.r1.iy = 0x032C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x86)
  mem.write8(0x0003, 0xBA)
  mem.write8(0xF566, 0x30)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7F6A)
  expect(cpu.r1.bc).toEqual(0x47FE)
  expect(cpu.r1.de).toEqual(0x3045)
  expect(cpu.r1.hl).toEqual(0x75DE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF5E0)
  expect(cpu.r1.iy).toEqual(0x032C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbbb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC7E3
  cpu.r1.bc = 0xE49E
  cpu.r1.de = 0x9EC5
  cpu.r1.hl = 0x07E7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBD31
  cpu.r1.iy = 0x9D5F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEF)
  mem.write8(0x0003, 0xBB)
  mem.write8(0xBD20, 0xC9)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC7E3)
  expect(cpu.r1.bc).toEqual(0xE49E)
  expect(cpu.r1.de).toEqual(0x9E49)
  expect(cpu.r1.hl).toEqual(0x07E7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBD31)
  expect(cpu.r1.iy).toEqual(0x9D5F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbbc', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB430
  cpu.r1.bc = 0x7AC7
  cpu.r1.de = 0xB45F
  cpu.r1.hl = 0xFBF7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x638E
  cpu.r1.iy = 0x3173
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC0)
  mem.write8(0x0003, 0xBC)
  mem.write8(0x634E, 0x28)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB430)
  expect(cpu.r1.bc).toEqual(0x7AC7)
  expect(cpu.r1.de).toEqual(0xB45F)
  expect(cpu.r1.hl).toEqual(0x28F7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x638E)
  expect(cpu.r1.iy).toEqual(0x3173)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbbd', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4E71
  cpu.r1.bc = 0x6FFA
  cpu.r1.de = 0xA3F9
  cpu.r1.hl = 0xA2E5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE3C4
  cpu.r1.iy = 0x02D4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xB9)
  mem.write8(0x0003, 0xBD)
  mem.write8(0xE37D, 0xDD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4E71)
  expect(cpu.r1.bc).toEqual(0x6FFA)
  expect(cpu.r1.de).toEqual(0xA3F9)
  expect(cpu.r1.hl).toEqual(0xA25D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE3C4)
  expect(cpu.r1.iy).toEqual(0x02D4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbbe', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4AF8
  cpu.r1.bc = 0x99A5
  cpu.r1.de = 0xD6FD
  cpu.r1.hl = 0x7A16
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x58D3
  cpu.r1.iy = 0xCE54
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4D)
  mem.write8(0x0003, 0xBE)
  mem.write8(0x5920, 0xE8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4AF8)
  expect(cpu.r1.bc).toEqual(0x99A5)
  expect(cpu.r1.de).toEqual(0xD6FD)
  expect(cpu.r1.hl).toEqual(0x7A16)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x58D3)
  expect(cpu.r1.iy).toEqual(0xCE54)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbbf', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6E31
  cpu.r1.bc = 0x0320
  cpu.r1.de = 0x134B
  cpu.r1.hl = 0x77C3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1734
  cpu.r1.iy = 0xBC2D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x26)
  mem.write8(0x0003, 0xBF)
  mem.write8(0x175A, 0xE2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6231)
  expect(cpu.r1.bc).toEqual(0x0320)
  expect(cpu.r1.de).toEqual(0x134B)
  expect(cpu.r1.hl).toEqual(0x77C3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1734)
  expect(cpu.r1.iy).toEqual(0xBC2D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x75BE
  cpu.r1.bc = 0x2B93
  cpu.r1.de = 0x093D
  cpu.r1.hl = 0x1128
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x792E
  cpu.r1.iy = 0x31F7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x00)
  mem.write8(0x0003, 0xC0)
  mem.write8(0x792E, 0x92)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x75BE)
  expect(cpu.r1.bc).toEqual(0x9393)
  expect(cpu.r1.de).toEqual(0x093D)
  expect(cpu.r1.hl).toEqual(0x1128)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x792E)
  expect(cpu.r1.iy).toEqual(0x31F7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x313F
  cpu.r1.bc = 0x8223
  cpu.r1.de = 0x5FCC
  cpu.r1.hl = 0x42C8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDCCC
  cpu.r1.iy = 0xD87B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF7)
  mem.write8(0x0003, 0xC1)
  mem.write8(0xDCC3, 0x1C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x313F)
  expect(cpu.r1.bc).toEqual(0x821D)
  expect(cpu.r1.de).toEqual(0x5FCC)
  expect(cpu.r1.hl).toEqual(0x42C8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDCCC)
  expect(cpu.r1.iy).toEqual(0xD87B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA7E3
  cpu.r1.bc = 0xBF55
  cpu.r1.de = 0xD27B
  cpu.r1.hl = 0x0A9D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0CFA
  cpu.r1.iy = 0xEA4E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x85)
  mem.write8(0x0003, 0xC2)
  mem.write8(0x0C7F, 0x30)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA7E3)
  expect(cpu.r1.bc).toEqual(0xBF55)
  expect(cpu.r1.de).toEqual(0x317B)
  expect(cpu.r1.hl).toEqual(0x0A9D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0CFA)
  expect(cpu.r1.iy).toEqual(0xEA4E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE076
  cpu.r1.bc = 0x2760
  cpu.r1.de = 0x1EEC
  cpu.r1.hl = 0x9968
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5426
  cpu.r1.iy = 0xA1A0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x32)
  mem.write8(0x0003, 0xC3)
  mem.write8(0x5458, 0xDD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE076)
  expect(cpu.r1.bc).toEqual(0x2760)
  expect(cpu.r1.de).toEqual(0x1EDD)
  expect(cpu.r1.hl).toEqual(0x9968)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5426)
  expect(cpu.r1.iy).toEqual(0xA1A0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA679
  cpu.r1.bc = 0xCC05
  cpu.r1.de = 0x3F4D
  cpu.r1.hl = 0xC899
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7ACD
  cpu.r1.iy = 0x48D7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAE)
  mem.write8(0x0003, 0xC4)
  mem.write8(0x7A7B, 0x27)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA679)
  expect(cpu.r1.bc).toEqual(0xCC05)
  expect(cpu.r1.de).toEqual(0x3F4D)
  expect(cpu.r1.hl).toEqual(0x2799)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7ACD)
  expect(cpu.r1.iy).toEqual(0x48D7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDDFD
  cpu.r1.bc = 0x64D4
  cpu.r1.de = 0x2671
  cpu.r1.hl = 0x35E7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBA99
  cpu.r1.iy = 0xBD98
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9C)
  mem.write8(0x0003, 0xC5)
  mem.write8(0xBA35, 0x20)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDDFD)
  expect(cpu.r1.bc).toEqual(0x64D4)
  expect(cpu.r1.de).toEqual(0x2671)
  expect(cpu.r1.hl).toEqual(0x3521)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBA99)
  expect(cpu.r1.iy).toEqual(0xBD98)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB324
  cpu.r1.bc = 0xDC0C
  cpu.r1.de = 0x1E35
  cpu.r1.hl = 0x8CD5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAB2C
  cpu.r1.iy = 0xB6F3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC4)
  mem.write8(0x0003, 0xC6)
  mem.write8(0xAAF0, 0xB8)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB324)
  expect(cpu.r1.bc).toEqual(0xDC0C)
  expect(cpu.r1.de).toEqual(0x1E35)
  expect(cpu.r1.hl).toEqual(0x8CD5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAB2C)
  expect(cpu.r1.iy).toEqual(0xB6F3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA254
  cpu.r1.bc = 0x9E56
  cpu.r1.de = 0x6828
  cpu.r1.hl = 0x3189
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x64CB
  cpu.r1.iy = 0xDFAD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF8)
  mem.write8(0x0003, 0xC7)
  mem.write8(0x64C3, 0x94)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9554)
  expect(cpu.r1.bc).toEqual(0x9E56)
  expect(cpu.r1.de).toEqual(0x6828)
  expect(cpu.r1.hl).toEqual(0x3189)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x64CB)
  expect(cpu.r1.iy).toEqual(0xDFAD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8ACA
  cpu.r1.bc = 0x139E
  cpu.r1.de = 0xE652
  cpu.r1.hl = 0x248B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6E7A
  cpu.r1.iy = 0x189A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x65)
  mem.write8(0x0003, 0xC8)
  mem.write8(0x6EDF, 0x8F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8ACA)
  expect(cpu.r1.bc).toEqual(0x8F9E)
  expect(cpu.r1.de).toEqual(0xE652)
  expect(cpu.r1.hl).toEqual(0x248B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6E7A)
  expect(cpu.r1.iy).toEqual(0x189A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbc9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF15F
  cpu.r1.bc = 0x856E
  cpu.r1.de = 0xA21F
  cpu.r1.hl = 0x8A59
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB670
  cpu.r1.iy = 0x4F79
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xFB)
  mem.write8(0x0003, 0xC9)
  mem.write8(0xB66B, 0xB9)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF15F)
  expect(cpu.r1.bc).toEqual(0x85BB)
  expect(cpu.r1.de).toEqual(0xA21F)
  expect(cpu.r1.hl).toEqual(0x8A59)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB670)
  expect(cpu.r1.iy).toEqual(0x4F79)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbca', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDFAB
  cpu.r1.bc = 0xA031
  cpu.r1.de = 0x1D78
  cpu.r1.hl = 0xAD3A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA887
  cpu.r1.iy = 0x7334
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8A)
  mem.write8(0x0003, 0xCA)
  mem.write8(0xA811, 0x7E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDFAB)
  expect(cpu.r1.bc).toEqual(0xA031)
  expect(cpu.r1.de).toEqual(0x7E78)
  expect(cpu.r1.hl).toEqual(0xAD3A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA887)
  expect(cpu.r1.iy).toEqual(0x7334)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbcb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xEBD6
  cpu.r1.bc = 0x376E
  cpu.r1.de = 0xC346
  cpu.r1.hl = 0xB10C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA447
  cpu.r1.iy = 0x31D6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA4)
  mem.write8(0x0003, 0xCB)
  mem.write8(0xA3EB, 0x73)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEBD6)
  expect(cpu.r1.bc).toEqual(0x376E)
  expect(cpu.r1.de).toEqual(0xC373)
  expect(cpu.r1.hl).toEqual(0xB10C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA447)
  expect(cpu.r1.iy).toEqual(0x31D6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbcc', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0212
  cpu.r1.bc = 0xDC46
  cpu.r1.de = 0x8F41
  cpu.r1.hl = 0x854E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1F5A
  cpu.r1.iy = 0x07CA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x65)
  mem.write8(0x0003, 0xCC)
  mem.write8(0x1FBF, 0x72)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0212)
  expect(cpu.r1.bc).toEqual(0xDC46)
  expect(cpu.r1.de).toEqual(0x8F41)
  expect(cpu.r1.hl).toEqual(0x724E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1F5A)
  expect(cpu.r1.iy).toEqual(0x07CA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbcd', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3344
  cpu.r1.bc = 0xD73C
  cpu.r1.de = 0xD6B8
  cpu.r1.hl = 0x929D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5376
  cpu.r1.iy = 0x6D3A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE9)
  mem.write8(0x0003, 0xCD)
  mem.write8(0x535F, 0x1C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3344)
  expect(cpu.r1.bc).toEqual(0xD73C)
  expect(cpu.r1.de).toEqual(0xD6B8)
  expect(cpu.r1.hl).toEqual(0x921E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5376)
  expect(cpu.r1.iy).toEqual(0x6D3A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbce', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9E47
  cpu.r1.bc = 0xFC93
  cpu.r1.de = 0x9FFC
  cpu.r1.hl = 0xAACE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0313
  cpu.r1.iy = 0x7F66
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x85)
  mem.write8(0x0003, 0xCE)
  mem.write8(0x0298, 0x10)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9E47)
  expect(cpu.r1.bc).toEqual(0xFC93)
  expect(cpu.r1.de).toEqual(0x9FFC)
  expect(cpu.r1.hl).toEqual(0xAACE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0313)
  expect(cpu.r1.iy).toEqual(0x7F66)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbcf', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x53E8
  cpu.r1.bc = 0xD379
  cpu.r1.de = 0x87D5
  cpu.r1.hl = 0x10B0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC5D0
  cpu.r1.iy = 0x4F7F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xE2)
  mem.write8(0x0003, 0xCF)
  mem.write8(0xC5B2, 0xB5)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB7E8)
  expect(cpu.r1.bc).toEqual(0xD379)
  expect(cpu.r1.de).toEqual(0x87D5)
  expect(cpu.r1.hl).toEqual(0x10B0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC5D0)
  expect(cpu.r1.iy).toEqual(0x4F7F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3278
  cpu.r1.bc = 0x6114
  cpu.r1.de = 0xD25D
  cpu.r1.hl = 0x1CF8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAD43
  cpu.r1.iy = 0x99FC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7F)
  mem.write8(0x0003, 0xD0)
  mem.write8(0xADC2, 0x51)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3278)
  expect(cpu.r1.bc).toEqual(0x5514)
  expect(cpu.r1.de).toEqual(0xD25D)
  expect(cpu.r1.hl).toEqual(0x1CF8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAD43)
  expect(cpu.r1.iy).toEqual(0x99FC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC0B8
  cpu.r1.bc = 0x371A
  cpu.r1.de = 0x6472
  cpu.r1.hl = 0xD92D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x10B2
  cpu.r1.iy = 0x3074
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA6)
  mem.write8(0x0003, 0xD1)
  mem.write8(0x1058, 0x2C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC0B8)
  expect(cpu.r1.bc).toEqual(0x372C)
  expect(cpu.r1.de).toEqual(0x6472)
  expect(cpu.r1.hl).toEqual(0xD92D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x10B2)
  expect(cpu.r1.iy).toEqual(0x3074)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5BB6
  cpu.r1.bc = 0xCAA8
  cpu.r1.de = 0xE0DB
  cpu.r1.hl = 0xAF84
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB9A1
  cpu.r1.iy = 0x7B5F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x9C)
  mem.write8(0x0003, 0xD2)
  mem.write8(0xB93D, 0x9C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5BB6)
  expect(cpu.r1.bc).toEqual(0xCAA8)
  expect(cpu.r1.de).toEqual(0x9CDB)
  expect(cpu.r1.hl).toEqual(0xAF84)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB9A1)
  expect(cpu.r1.iy).toEqual(0x7B5F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDB6A
  cpu.r1.bc = 0x4FE2
  cpu.r1.de = 0x9E52
  cpu.r1.hl = 0xA034
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDA36
  cpu.r1.iy = 0x88A0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBD)
  mem.write8(0x0003, 0xD3)
  mem.write8(0xD9F3, 0x60)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDB6A)
  expect(cpu.r1.bc).toEqual(0x4FE2)
  expect(cpu.r1.de).toEqual(0x9E64)
  expect(cpu.r1.hl).toEqual(0xA034)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDA36)
  expect(cpu.r1.iy).toEqual(0x88A0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCC1C
  cpu.r1.bc = 0xB884
  cpu.r1.de = 0x6AD2
  cpu.r1.hl = 0x1621
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEF26
  cpu.r1.iy = 0x41DE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x58)
  mem.write8(0x0003, 0xD4)
  mem.write8(0xEF7E, 0x5E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCC1C)
  expect(cpu.r1.bc).toEqual(0xB884)
  expect(cpu.r1.de).toEqual(0x6AD2)
  expect(cpu.r1.hl).toEqual(0x5E21)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEF26)
  expect(cpu.r1.iy).toEqual(0x41DE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC41D
  cpu.r1.bc = 0xC8B0
  cpu.r1.de = 0xCACB
  cpu.r1.hl = 0x7687
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8DBC
  cpu.r1.iy = 0xCC25
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x41)
  mem.write8(0x0003, 0xD5)
  mem.write8(0x8DFD, 0x71)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC41D)
  expect(cpu.r1.bc).toEqual(0xC8B0)
  expect(cpu.r1.de).toEqual(0xCACB)
  expect(cpu.r1.hl).toEqual(0x7675)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8DBC)
  expect(cpu.r1.iy).toEqual(0xCC25)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x09EB
  cpu.r1.bc = 0x769D
  cpu.r1.de = 0x7E07
  cpu.r1.hl = 0x51F9
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5F03
  cpu.r1.iy = 0x6280
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEA)
  mem.write8(0x0003, 0xD6)
  mem.write8(0x5EED, 0x73)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x09EB)
  expect(cpu.r1.bc).toEqual(0x769D)
  expect(cpu.r1.de).toEqual(0x7E07)
  expect(cpu.r1.hl).toEqual(0x51F9)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5F03)
  expect(cpu.r1.iy).toEqual(0x6280)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x241B
  cpu.r1.bc = 0xEE10
  cpu.r1.de = 0xC152
  cpu.r1.hl = 0x2F6D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE725
  cpu.r1.iy = 0xC0D7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x80)
  mem.write8(0x0003, 0xD7)
  mem.write8(0xE6A5, 0x60)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x641B)
  expect(cpu.r1.bc).toEqual(0xEE10)
  expect(cpu.r1.de).toEqual(0xC152)
  expect(cpu.r1.hl).toEqual(0x2F6D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE725)
  expect(cpu.r1.iy).toEqual(0xC0D7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE3DC
  cpu.r1.bc = 0x1981
  cpu.r1.de = 0xC97B
  cpu.r1.hl = 0xCB42
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB30F
  cpu.r1.iy = 0xB32A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4C)
  mem.write8(0x0003, 0xD8)
  mem.write8(0xB35B, 0x96)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE3DC)
  expect(cpu.r1.bc).toEqual(0x9E81)
  expect(cpu.r1.de).toEqual(0xC97B)
  expect(cpu.r1.hl).toEqual(0xCB42)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB30F)
  expect(cpu.r1.iy).toEqual(0xB32A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbd9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE9A0
  cpu.r1.bc = 0xA7C7
  cpu.r1.de = 0xA476
  cpu.r1.hl = 0x6057
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2642
  cpu.r1.iy = 0x58A0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x52)
  mem.write8(0x0003, 0xD9)
  mem.write8(0x2694, 0xEF)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE9A0)
  expect(cpu.r1.bc).toEqual(0xA7EF)
  expect(cpu.r1.de).toEqual(0xA476)
  expect(cpu.r1.hl).toEqual(0x6057)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2642)
  expect(cpu.r1.iy).toEqual(0x58A0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbda', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6787
  cpu.r1.bc = 0x26A7
  cpu.r1.de = 0xA194
  cpu.r1.hl = 0x11D3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2D76
  cpu.r1.iy = 0x7F80
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEA)
  mem.write8(0x0003, 0xDA)
  mem.write8(0x2D60, 0x82)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6787)
  expect(cpu.r1.bc).toEqual(0x26A7)
  expect(cpu.r1.de).toEqual(0x8A94)
  expect(cpu.r1.hl).toEqual(0x11D3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2D76)
  expect(cpu.r1.iy).toEqual(0x7F80)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbdb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF986
  cpu.r1.bc = 0x6A4B
  cpu.r1.de = 0x6588
  cpu.r1.hl = 0xD2C8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2B7D
  cpu.r1.iy = 0x5847
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x4D)
  mem.write8(0x0003, 0xDB)
  mem.write8(0x2BCA, 0x10)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF986)
  expect(cpu.r1.bc).toEqual(0x6A4B)
  expect(cpu.r1.de).toEqual(0x6518)
  expect(cpu.r1.hl).toEqual(0xD2C8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2B7D)
  expect(cpu.r1.iy).toEqual(0x5847)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbdc', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4C9E
  cpu.r1.bc = 0xD94D
  cpu.r1.de = 0x9760
  cpu.r1.hl = 0xB707
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7ED4
  cpu.r1.iy = 0x5CC5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD3)
  mem.write8(0x0003, 0xDC)
  mem.write8(0x7EA7, 0x45)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4C9E)
  expect(cpu.r1.bc).toEqual(0xD94D)
  expect(cpu.r1.de).toEqual(0x9760)
  expect(cpu.r1.hl).toEqual(0x4D07)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7ED4)
  expect(cpu.r1.iy).toEqual(0x5CC5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbdd', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4B3B
  cpu.r1.bc = 0xD351
  cpu.r1.de = 0x9BE9
  cpu.r1.hl = 0x2310
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x58C1
  cpu.r1.iy = 0xE430
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x6F)
  mem.write8(0x0003, 0xDD)
  mem.write8(0x5930, 0x20)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4B3B)
  expect(cpu.r1.bc).toEqual(0xD351)
  expect(cpu.r1.de).toEqual(0x9BE9)
  expect(cpu.r1.hl).toEqual(0x2328)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x58C1)
  expect(cpu.r1.iy).toEqual(0xE430)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbde', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3B62
  cpu.r1.bc = 0xCA1E
  cpu.r1.de = 0xA41A
  cpu.r1.hl = 0x227A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x89D2
  cpu.r1.iy = 0x7011
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x14)
  mem.write8(0x0003, 0xDE)
  mem.write8(0x89E6, 0x5E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3B62)
  expect(cpu.r1.bc).toEqual(0xCA1E)
  expect(cpu.r1.de).toEqual(0xA41A)
  expect(cpu.r1.hl).toEqual(0x227A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x89D2)
  expect(cpu.r1.iy).toEqual(0x7011)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbdf', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4C8A
  cpu.r1.bc = 0x5B42
  cpu.r1.de = 0x50DD
  cpu.r1.hl = 0x4BE0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD227
  cpu.r1.iy = 0x4913
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEF)
  mem.write8(0x0003, 0xDF)
  mem.write8(0xD216, 0x72)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7A8A)
  expect(cpu.r1.bc).toEqual(0x5B42)
  expect(cpu.r1.de).toEqual(0x50DD)
  expect(cpu.r1.hl).toEqual(0x4BE0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD227)
  expect(cpu.r1.iy).toEqual(0x4913)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x440A
  cpu.r1.bc = 0x713D
  cpu.r1.de = 0xACFC
  cpu.r1.hl = 0xF762
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1C4B
  cpu.r1.iy = 0xB6BA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x62)
  mem.write8(0x0003, 0xE0)
  mem.write8(0x1CAD, 0x46)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x440A)
  expect(cpu.r1.bc).toEqual(0x563D)
  expect(cpu.r1.de).toEqual(0xACFC)
  expect(cpu.r1.hl).toEqual(0xF762)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1C4B)
  expect(cpu.r1.iy).toEqual(0xB6BA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC219
  cpu.r1.bc = 0xAA6B
  cpu.r1.de = 0xDFBF
  cpu.r1.hl = 0x6F10
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB931
  cpu.r1.iy = 0xD3D6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2E)
  mem.write8(0x0003, 0xE1)
  mem.write8(0xB95F, 0x75)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC219)
  expect(cpu.r1.bc).toEqual(0xAA75)
  expect(cpu.r1.de).toEqual(0xDFBF)
  expect(cpu.r1.hl).toEqual(0x6F10)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB931)
  expect(cpu.r1.iy).toEqual(0xD3D6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x66D7
  cpu.r1.bc = 0xABD0
  cpu.r1.de = 0xCB48
  cpu.r1.hl = 0x8054
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEF50
  cpu.r1.iy = 0x9997
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x85)
  mem.write8(0x0003, 0xE2)
  mem.write8(0xEED5, 0x72)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x66D7)
  expect(cpu.r1.bc).toEqual(0xABD0)
  expect(cpu.r1.de).toEqual(0x7248)
  expect(cpu.r1.hl).toEqual(0x8054)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEF50)
  expect(cpu.r1.iy).toEqual(0x9997)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7013
  cpu.r1.bc = 0xE7ED
  cpu.r1.de = 0x7E1C
  cpu.r1.hl = 0x57FB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7EC6
  cpu.r1.iy = 0x75EB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF4)
  mem.write8(0x0003, 0xE3)
  mem.write8(0x7EBA, 0x34)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7013)
  expect(cpu.r1.bc).toEqual(0xE7ED)
  expect(cpu.r1.de).toEqual(0x7E34)
  expect(cpu.r1.hl).toEqual(0x57FB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7EC6)
  expect(cpu.r1.iy).toEqual(0x75EB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1108
  cpu.r1.bc = 0x6E70
  cpu.r1.de = 0xF0AF
  cpu.r1.hl = 0x2F0C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x95C7
  cpu.r1.iy = 0x6501
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBF)
  mem.write8(0x0003, 0xE4)
  mem.write8(0x9586, 0x34)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1108)
  expect(cpu.r1.bc).toEqual(0x6E70)
  expect(cpu.r1.de).toEqual(0xF0AF)
  expect(cpu.r1.hl).toEqual(0x340C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x95C7)
  expect(cpu.r1.iy).toEqual(0x6501)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x57CC
  cpu.r1.bc = 0x5511
  cpu.r1.de = 0x2696
  cpu.r1.hl = 0xB83D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6AB0
  cpu.r1.iy = 0x0E90
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF2)
  mem.write8(0x0003, 0xE5)
  mem.write8(0x6AA2, 0x2E)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x57CC)
  expect(cpu.r1.bc).toEqual(0x5511)
  expect(cpu.r1.de).toEqual(0x2696)
  expect(cpu.r1.hl).toEqual(0xB83E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6AB0)
  expect(cpu.r1.iy).toEqual(0x0E90)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x207A
  cpu.r1.bc = 0xA441
  cpu.r1.de = 0x1E03
  cpu.r1.hl = 0xAC60
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD866
  cpu.r1.iy = 0x5FDC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x25)
  mem.write8(0x0003, 0xE6)
  mem.write8(0xD88B, 0x4C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x207A)
  expect(cpu.r1.bc).toEqual(0xA441)
  expect(cpu.r1.de).toEqual(0x1E03)
  expect(cpu.r1.hl).toEqual(0xAC60)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD866)
  expect(cpu.r1.iy).toEqual(0x5FDC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC3C5
  cpu.r1.bc = 0x7FA9
  cpu.r1.de = 0x4E07
  cpu.r1.hl = 0xE02D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2A1B
  cpu.r1.iy = 0x55B7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF3)
  mem.write8(0x0003, 0xE7)
  mem.write8(0x2A0E, 0xEB)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFBC5)
  expect(cpu.r1.bc).toEqual(0x7FA9)
  expect(cpu.r1.de).toEqual(0x4E07)
  expect(cpu.r1.hl).toEqual(0xE02D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2A1B)
  expect(cpu.r1.iy).toEqual(0x55B7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6D1C
  cpu.r1.bc = 0xA0C4
  cpu.r1.de = 0x93F0
  cpu.r1.hl = 0xA0B4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4BDA
  cpu.r1.iy = 0x7761
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xF2)
  mem.write8(0x0003, 0xE8)
  mem.write8(0x4BCC, 0xBA)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6D1C)
  expect(cpu.r1.bc).toEqual(0xBAC4)
  expect(cpu.r1.de).toEqual(0x93F0)
  expect(cpu.r1.hl).toEqual(0xA0B4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4BDA)
  expect(cpu.r1.iy).toEqual(0x7761)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbe9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xEBE5
  cpu.r1.bc = 0x0C2C
  cpu.r1.de = 0x1A2A
  cpu.r1.hl = 0x2720
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x72DD
  cpu.r1.iy = 0xA354
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x8A)
  mem.write8(0x0003, 0xE9)
  mem.write8(0x7267, 0x0A)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEBE5)
  expect(cpu.r1.bc).toEqual(0x0C2A)
  expect(cpu.r1.de).toEqual(0x1A2A)
  expect(cpu.r1.hl).toEqual(0x2720)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x72DD)
  expect(cpu.r1.iy).toEqual(0xA354)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbea', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x42D2
  cpu.r1.bc = 0xDA7A
  cpu.r1.de = 0x757F
  cpu.r1.hl = 0x6DA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA7E9
  cpu.r1.iy = 0xB933
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x04)
  mem.write8(0x0003, 0xEA)
  mem.write8(0xA7ED, 0x5F)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x42D2)
  expect(cpu.r1.bc).toEqual(0xDA7A)
  expect(cpu.r1.de).toEqual(0x7F7F)
  expect(cpu.r1.hl).toEqual(0x6DA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA7E9)
  expect(cpu.r1.iy).toEqual(0xB933)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbeb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE945
  cpu.r1.bc = 0x10AA
  cpu.r1.de = 0xF5F8
  cpu.r1.hl = 0x7647
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x16DF
  cpu.r1.iy = 0x93FB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x24)
  mem.write8(0x0003, 0xEB)
  mem.write8(0x1703, 0xF3)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE945)
  expect(cpu.r1.bc).toEqual(0x10AA)
  expect(cpu.r1.de).toEqual(0xF5F3)
  expect(cpu.r1.hl).toEqual(0x7647)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x16DF)
  expect(cpu.r1.iy).toEqual(0x93FB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbec', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7180
  cpu.r1.bc = 0xBC85
  cpu.r1.de = 0x7DD3
  cpu.r1.hl = 0xF467
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDD88
  cpu.r1.iy = 0x6A41
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x60)
  mem.write8(0x0003, 0xEC)
  mem.write8(0xDDE8, 0x00)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7180)
  expect(cpu.r1.bc).toEqual(0xBC85)
  expect(cpu.r1.de).toEqual(0x7DD3)
  expect(cpu.r1.hl).toEqual(0x2067)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDD88)
  expect(cpu.r1.iy).toEqual(0x6A41)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbed', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6B2F
  cpu.r1.bc = 0x9762
  cpu.r1.de = 0x1F0A
  cpu.r1.hl = 0xDB61
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF772
  cpu.r1.iy = 0x33E3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xBE)
  mem.write8(0x0003, 0xED)
  mem.write8(0xF730, 0x6B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6B2F)
  expect(cpu.r1.bc).toEqual(0x9762)
  expect(cpu.r1.de).toEqual(0x1F0A)
  expect(cpu.r1.hl).toEqual(0xDB6B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF772)
  expect(cpu.r1.iy).toEqual(0x33E3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbee', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x79EA
  cpu.r1.bc = 0xDC8A
  cpu.r1.de = 0x7887
  cpu.r1.hl = 0x3BAA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6C28
  cpu.r1.iy = 0xABBC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xDE)
  mem.write8(0x0003, 0xEE)
  mem.write8(0x6C06, 0xBD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x79EA)
  expect(cpu.r1.bc).toEqual(0xDC8A)
  expect(cpu.r1.de).toEqual(0x7887)
  expect(cpu.r1.hl).toEqual(0x3BAA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6C28)
  expect(cpu.r1.iy).toEqual(0xABBC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbef', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x46C3
  cpu.r1.bc = 0x2FC2
  cpu.r1.de = 0x8690
  cpu.r1.hl = 0xA836
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCC68
  cpu.r1.iy = 0xA8CE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x30)
  mem.write8(0x0003, 0xEF)
  mem.write8(0xCC98, 0x11)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x31C3)
  expect(cpu.r1.bc).toEqual(0x2FC2)
  expect(cpu.r1.de).toEqual(0x8690)
  expect(cpu.r1.hl).toEqual(0xA836)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCC68)
  expect(cpu.r1.iy).toEqual(0xA8CE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB330
  cpu.r1.bc = 0x4469
  cpu.r1.de = 0x362B
  cpu.r1.hl = 0xB515
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x13C0
  cpu.r1.iy = 0x6479
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x2F)
  mem.write8(0x0003, 0xF0)
  mem.write8(0x13EF, 0xAD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB330)
  expect(cpu.r1.bc).toEqual(0xED69)
  expect(cpu.r1.de).toEqual(0x362B)
  expect(cpu.r1.hl).toEqual(0xB515)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x13C0)
  expect(cpu.r1.iy).toEqual(0x6479)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x94C0
  cpu.r1.bc = 0x9AB0
  cpu.r1.de = 0xA0FD
  cpu.r1.hl = 0x7C1D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x47BA
  cpu.r1.iy = 0x8C81
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x40)
  mem.write8(0x0003, 0xF1)
  mem.write8(0x47FA, 0x78)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x94C0)
  expect(cpu.r1.bc).toEqual(0x9A78)
  expect(cpu.r1.de).toEqual(0xA0FD)
  expect(cpu.r1.hl).toEqual(0x7C1D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x47BA)
  expect(cpu.r1.iy).toEqual(0x8C81)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5302
  cpu.r1.bc = 0x9204
  cpu.r1.de = 0x20EC
  cpu.r1.hl = 0xD640
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC947
  cpu.r1.iy = 0x4EF1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x0F)
  mem.write8(0x0003, 0xF2)
  mem.write8(0xC956, 0x21)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5302)
  expect(cpu.r1.bc).toEqual(0x9204)
  expect(cpu.r1.de).toEqual(0x61EC)
  expect(cpu.r1.hl).toEqual(0xD640)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC947)
  expect(cpu.r1.iy).toEqual(0x4EF1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9950
  cpu.r1.bc = 0xA3D2
  cpu.r1.de = 0x5058
  cpu.r1.hl = 0x5CCC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1D96
  cpu.r1.iy = 0x7C75
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x06)
  mem.write8(0x0003, 0xF3)
  mem.write8(0x1D9C, 0xE4)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9950)
  expect(cpu.r1.bc).toEqual(0xA3D2)
  expect(cpu.r1.de).toEqual(0x50E4)
  expect(cpu.r1.hl).toEqual(0x5CCC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1D96)
  expect(cpu.r1.iy).toEqual(0x7C75)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3712
  cpu.r1.bc = 0x1F99
  cpu.r1.de = 0x4863
  cpu.r1.hl = 0x47DE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1702
  cpu.r1.iy = 0xC042
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x3B)
  mem.write8(0x0003, 0xF4)
  mem.write8(0x173D, 0xE1)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3712)
  expect(cpu.r1.bc).toEqual(0x1F99)
  expect(cpu.r1.de).toEqual(0x4863)
  expect(cpu.r1.hl).toEqual(0xE1DE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1702)
  expect(cpu.r1.iy).toEqual(0xC042)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD83F
  cpu.r1.bc = 0x1EC9
  cpu.r1.de = 0xD0DA
  cpu.r1.hl = 0x4173
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEB3F
  cpu.r1.iy = 0x1EAD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x64)
  mem.write8(0x0003, 0xF5)
  mem.write8(0xEBA3, 0xC5)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD83F)
  expect(cpu.r1.bc).toEqual(0x1EC9)
  expect(cpu.r1.de).toEqual(0xD0DA)
  expect(cpu.r1.hl).toEqual(0x41C5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEB3F)
  expect(cpu.r1.iy).toEqual(0x1EAD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4D6C
  cpu.r1.bc = 0x93AC
  cpu.r1.de = 0x810D
  cpu.r1.hl = 0xCFE1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDC5A
  cpu.r1.iy = 0xC33C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x7B)
  mem.write8(0x0003, 0xF6)
  mem.write8(0xDCD5, 0xA2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4D6C)
  expect(cpu.r1.bc).toEqual(0x93AC)
  expect(cpu.r1.de).toEqual(0x810D)
  expect(cpu.r1.hl).toEqual(0xCFE1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDC5A)
  expect(cpu.r1.iy).toEqual(0xC33C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFE40
  cpu.r1.bc = 0x7887
  cpu.r1.de = 0xB9DE
  cpu.r1.hl = 0xC013
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x301E
  cpu.r1.iy = 0x9710
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xC3)
  mem.write8(0x0003, 0xF7)
  mem.write8(0x2FE1, 0xA9)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE940)
  expect(cpu.r1.bc).toEqual(0x7887)
  expect(cpu.r1.de).toEqual(0xB9DE)
  expect(cpu.r1.hl).toEqual(0xC013)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x301E)
  expect(cpu.r1.iy).toEqual(0x9710)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8278
  cpu.r1.bc = 0x21A4
  cpu.r1.de = 0x1E5C
  cpu.r1.hl = 0x4952
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x427F
  cpu.r1.iy = 0x41E1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x59)
  mem.write8(0x0003, 0xF8)
  mem.write8(0x42D8, 0x28)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8278)
  expect(cpu.r1.bc).toEqual(0xA8A4)
  expect(cpu.r1.de).toEqual(0x1E5C)
  expect(cpu.r1.hl).toEqual(0x4952)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x427F)
  expect(cpu.r1.iy).toEqual(0x41E1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbf9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB2DF
  cpu.r1.bc = 0xE9B8
  cpu.r1.de = 0x56C3
  cpu.r1.hl = 0x16FF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD88F
  cpu.r1.iy = 0x0BAB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x55)
  mem.write8(0x0003, 0xF9)
  mem.write8(0xD8E4, 0x14)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB2DF)
  expect(cpu.r1.bc).toEqual(0xE994)
  expect(cpu.r1.de).toEqual(0x56C3)
  expect(cpu.r1.hl).toEqual(0x16FF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD88F)
  expect(cpu.r1.iy).toEqual(0x0BAB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbfa', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x01F1
  cpu.r1.bc = 0xBC0D
  cpu.r1.de = 0xD476
  cpu.r1.hl = 0x1510
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9420
  cpu.r1.iy = 0x93A3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x74)
  mem.write8(0x0003, 0xFA)
  mem.write8(0x9494, 0xFE)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x01F1)
  expect(cpu.r1.bc).toEqual(0xBC0D)
  expect(cpu.r1.de).toEqual(0xFE76)
  expect(cpu.r1.hl).toEqual(0x1510)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9420)
  expect(cpu.r1.iy).toEqual(0x93A3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbfb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x709B
  cpu.r1.bc = 0x14EB
  cpu.r1.de = 0xEC1C
  cpu.r1.hl = 0xB844
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3453
  cpu.r1.iy = 0xF2B0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xAF)
  mem.write8(0x0003, 0xFB)
  mem.write8(0x3402, 0x02)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x709B)
  expect(cpu.r1.bc).toEqual(0x14EB)
  expect(cpu.r1.de).toEqual(0xEC82)
  expect(cpu.r1.hl).toEqual(0xB844)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3453)
  expect(cpu.r1.iy).toEqual(0xF2B0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbfc', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6C89
  cpu.r1.bc = 0xA96E
  cpu.r1.de = 0xD27B
  cpu.r1.hl = 0xD6A7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6139
  cpu.r1.iy = 0xB4C1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xA1)
  mem.write8(0x0003, 0xFC)
  mem.write8(0x60DA, 0x10)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6C89)
  expect(cpu.r1.bc).toEqual(0xA96E)
  expect(cpu.r1.de).toEqual(0xD27B)
  expect(cpu.r1.hl).toEqual(0x90A7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6139)
  expect(cpu.r1.iy).toEqual(0xB4C1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbfd', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFB3F
  cpu.r1.bc = 0x83F6
  cpu.r1.de = 0x2094
  cpu.r1.hl = 0x3349
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3ED0
  cpu.r1.iy = 0x6F0E
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0x28)
  mem.write8(0x0003, 0xFD)
  mem.write8(0x3EF8, 0xC2)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFB3F)
  expect(cpu.r1.bc).toEqual(0x83F6)
  expect(cpu.r1.de).toEqual(0x2094)
  expect(cpu.r1.hl).toEqual(0x33C2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3ED0)
  expect(cpu.r1.iy).toEqual(0x6F0E)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbfe', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFC42
  cpu.r1.bc = 0x50B7
  cpu.r1.de = 0xE98D
  cpu.r1.hl = 0x3E45
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x41B5
  cpu.r1.iy = 0x3410
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xEC)
  mem.write8(0x0003, 0xFE)
  mem.write8(0x41A1, 0xA1)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFC42)
  expect(cpu.r1.bc).toEqual(0x50B7)
  expect(cpu.r1.de).toEqual(0xE98D)
  expect(cpu.r1.hl).toEqual(0x3E45)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x41B5)
  expect(cpu.r1.iy).toEqual(0x3410)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddcbff', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE666
  cpu.r1.bc = 0x94D2
  cpu.r1.de = 0xAC90
  cpu.r1.hl = 0x8F45
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0655
  cpu.r1.iy = 0xBA29
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xCB)
  mem.write8(0x0002, 0xD3)
  mem.write8(0x0003, 0xFF)
  mem.write8(0x0628, 0x2B)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAB66)
  expect(cpu.r1.bc).toEqual(0x94D2)
  expect(cpu.r1.de).toEqual(0xAC90)
  expect(cpu.r1.hl).toEqual(0x8F45)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0655)
  expect(cpu.r1.iy).toEqual(0xBA29)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

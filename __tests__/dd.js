const Memory = require("../src/memory")
const Z80 = require("../src/z80")

test('Test dd00', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
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
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x00)
  mem.write8(0x0002, 0x00)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
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
  expect(cpu.r).toEqual(0x03)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd09', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0D05
  cpu.r1.bc = 0x1426
  cpu.r1.de = 0x53CE
  cpu.r1.hl = 0x41E3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9EC0
  cpu.r1.iy = 0x5C89
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x09)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0D34)
  expect(cpu.r1.bc).toEqual(0x1426)
  expect(cpu.r1.de).toEqual(0x53CE)
  expect(cpu.r1.hl).toEqual(0x41E3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB2E6)
  expect(cpu.r1.iy).toEqual(0x5C89)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd19', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1911
  cpu.r1.bc = 0x0E0B
  cpu.r1.de = 0x2724
  cpu.r1.hl = 0xBE62
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x824F
  cpu.r1.iy = 0x760B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x19)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1928)
  expect(cpu.r1.bc).toEqual(0x0E0B)
  expect(cpu.r1.de).toEqual(0x2724)
  expect(cpu.r1.hl).toEqual(0xBE62)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA973)
  expect(cpu.r1.iy).toEqual(0x760B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd21', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC935
  cpu.r1.bc = 0x4353
  cpu.r1.de = 0xBD22
  cpu.r1.hl = 0x94D5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDADE
  cpu.r1.iy = 0xAAD6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x21)
  mem.write8(0x0002, 0xF2)
  mem.write8(0x0003, 0x7C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC935)
  expect(cpu.r1.bc).toEqual(0x4353)
  expect(cpu.r1.de).toEqual(0xBD22)
  expect(cpu.r1.hl).toEqual(0x94D5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7CF2)
  expect(cpu.r1.iy).toEqual(0xAAD6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd22', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5B1D
  cpu.r1.bc = 0x45A1
  cpu.r1.de = 0x6DE8
  cpu.r1.hl = 0x39D3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEBE7
  cpu.r1.iy = 0x05B0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x22)
  mem.write8(0x0002, 0x4F)
  mem.write8(0x0003, 0xAD)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5B1D)
  expect(cpu.r1.bc).toEqual(0x45A1)
  expect(cpu.r1.de).toEqual(0x6DE8)
  expect(cpu.r1.hl).toEqual(0x39D3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEBE7)
  expect(cpu.r1.iy).toEqual(0x05B0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd23', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9095
  cpu.r1.bc = 0xAC3C
  cpu.r1.de = 0x4D90
  cpu.r1.hl = 0x379B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD50B
  cpu.r1.iy = 0xA157
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x23)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9095)
  expect(cpu.r1.bc).toEqual(0xAC3C)
  expect(cpu.r1.de).toEqual(0x4D90)
  expect(cpu.r1.hl).toEqual(0x379B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD50C)
  expect(cpu.r1.iy).toEqual(0xA157)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd24', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0698
  cpu.r1.bc = 0xDCD0
  cpu.r1.de = 0xA31B
  cpu.r1.hl = 0xD527
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8CDA
  cpu.r1.iy = 0xB096
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x24)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0688)
  expect(cpu.r1.bc).toEqual(0xDCD0)
  expect(cpu.r1.de).toEqual(0xA31B)
  expect(cpu.r1.hl).toEqual(0xD527)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8DDA)
  expect(cpu.r1.iy).toEqual(0xB096)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd25', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5ACC
  cpu.r1.bc = 0x206B
  cpu.r1.de = 0xED10
  cpu.r1.hl = 0x6EAB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBB3C
  cpu.r1.iy = 0x5EBD
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x25)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5AAA)
  expect(cpu.r1.bc).toEqual(0x206B)
  expect(cpu.r1.de).toEqual(0xED10)
  expect(cpu.r1.hl).toEqual(0x6EAB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBA3C)
  expect(cpu.r1.iy).toEqual(0x5EBD)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd26', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9522
  cpu.r1.bc = 0xEDE0
  cpu.r1.de = 0xA352
  cpu.r1.hl = 0xADEA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5F40
  cpu.r1.iy = 0x82E1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x26)
  mem.write8(0x0002, 0xAD)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9522)
  expect(cpu.r1.bc).toEqual(0xEDE0)
  expect(cpu.r1.de).toEqual(0xA352)
  expect(cpu.r1.hl).toEqual(0xADEA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAD40)
  expect(cpu.r1.iy).toEqual(0x82E1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd29', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAC80
  cpu.r1.bc = 0x0F0E
  cpu.r1.de = 0x72C8
  cpu.r1.hl = 0x1F2A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5195
  cpu.r1.iy = 0x7D8A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x29)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xACA0)
  expect(cpu.r1.bc).toEqual(0x0F0E)
  expect(cpu.r1.de).toEqual(0x72C8)
  expect(cpu.r1.hl).toEqual(0x1F2A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA32A)
  expect(cpu.r1.iy).toEqual(0x7D8A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd2a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3D36
  cpu.r1.bc = 0xB24E
  cpu.r1.de = 0xBDBC
  cpu.r1.hl = 0xCA4E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBA65
  cpu.r1.iy = 0xE7CE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x2A)
  mem.write8(0x0002, 0xBC)
  mem.write8(0x0003, 0x40)
  mem.write8(0x40BC, 0xB5)
  mem.write8(0x40BD, 0x30)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3D36)
  expect(cpu.r1.bc).toEqual(0xB24E)
  expect(cpu.r1.de).toEqual(0xBDBC)
  expect(cpu.r1.hl).toEqual(0xCA4E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x30B5)
  expect(cpu.r1.iy).toEqual(0xE7CE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd2b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAD4B
  cpu.r1.bc = 0xD5E6
  cpu.r1.de = 0x9377
  cpu.r1.hl = 0xF132
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7A17
  cpu.r1.iy = 0x2188
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x2B)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAD4B)
  expect(cpu.r1.bc).toEqual(0xD5E6)
  expect(cpu.r1.de).toEqual(0x9377)
  expect(cpu.r1.hl).toEqual(0xF132)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7A16)
  expect(cpu.r1.iy).toEqual(0x2188)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd2c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8838
  cpu.r1.bc = 0xF2F3
  cpu.r1.de = 0xD277
  cpu.r1.hl = 0x9153
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC62F
  cpu.r1.iy = 0xB002
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x2C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8830)
  expect(cpu.r1.bc).toEqual(0xF2F3)
  expect(cpu.r1.de).toEqual(0xD277)
  expect(cpu.r1.hl).toEqual(0x9153)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC630)
  expect(cpu.r1.iy).toEqual(0xB002)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd2d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x39BC
  cpu.r1.bc = 0xB23C
  cpu.r1.de = 0x6E11
  cpu.r1.hl = 0x5A49
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0267
  cpu.r1.iy = 0xAB03
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x2D)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3922)
  expect(cpu.r1.bc).toEqual(0xB23C)
  expect(cpu.r1.de).toEqual(0x6E11)
  expect(cpu.r1.hl).toEqual(0x5A49)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0266)
  expect(cpu.r1.iy).toEqual(0xAB03)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd2e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9ACA
  cpu.r1.bc = 0xA04A
  cpu.r1.de = 0xB49F
  cpu.r1.hl = 0xA4A6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBD90
  cpu.r1.iy = 0x38A1
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x2E)
  mem.write8(0x0002, 0x1C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9ACA)
  expect(cpu.r1.bc).toEqual(0xA04A)
  expect(cpu.r1.de).toEqual(0xB49F)
  expect(cpu.r1.hl).toEqual(0xA4A6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBD1C)
  expect(cpu.r1.iy).toEqual(0x38A1)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd34', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8304
  cpu.r1.bc = 0xD1FC
  cpu.r1.de = 0xB80B
  cpu.r1.hl = 0x8082
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xDEA9
  cpu.r1.iy = 0x6FD8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x34)
  mem.write8(0x0002, 0xE6)
  mem.write8(0xDE8F, 0x57)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8308)
  expect(cpu.r1.bc).toEqual(0xD1FC)
  expect(cpu.r1.de).toEqual(0xB80B)
  expect(cpu.r1.hl).toEqual(0x8082)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xDEA9)
  expect(cpu.r1.iy).toEqual(0x6FD8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd35', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8681
  cpu.r1.bc = 0x4641
  cpu.r1.de = 0x1EF6
  cpu.r1.hl = 0x10AB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC733
  cpu.r1.iy = 0x8EC4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x35)
  mem.write8(0x0002, 0x60)
  mem.write8(0xC793, 0xF7)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x86A3)
  expect(cpu.r1.bc).toEqual(0x4641)
  expect(cpu.r1.de).toEqual(0x1EF6)
  expect(cpu.r1.hl).toEqual(0x10AB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC733)
  expect(cpu.r1.iy).toEqual(0x8EC4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd36', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x76DC
  cpu.r1.bc = 0x2530
  cpu.r1.de = 0x5158
  cpu.r1.hl = 0x877D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB5C6
  cpu.r1.iy = 0x8D3C
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x36)
  mem.write8(0x0002, 0x35)
  mem.write8(0x0003, 0xB5)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x76DC)
  expect(cpu.r1.bc).toEqual(0x2530)
  expect(cpu.r1.de).toEqual(0x5158)
  expect(cpu.r1.hl).toEqual(0x877D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB5C6)
  expect(cpu.r1.iy).toEqual(0x8D3C)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd39', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x875B
  cpu.r1.bc = 0xA334
  cpu.r1.de = 0xD79D
  cpu.r1.hl = 0x59E4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB11A
  cpu.r1.iy = 0x4C88
  cpu.sp = 0xFA4A
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x39)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8769)
  expect(cpu.r1.bc).toEqual(0xA334)
  expect(cpu.r1.de).toEqual(0xD79D)
  expect(cpu.r1.hl).toEqual(0x59E4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAB64)
  expect(cpu.r1.iy).toEqual(0x4C88)
  expect(cpu.sp).toEqual(0xFA4A)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd44', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB37E
  cpu.r1.bc = 0xCBB0
  cpu.r1.de = 0x36E8
  cpu.r1.hl = 0x3F45
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2702
  cpu.r1.iy = 0xB3B9
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x44)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xB37E)
  expect(cpu.r1.bc).toEqual(0x27B0)
  expect(cpu.r1.de).toEqual(0x36E8)
  expect(cpu.r1.hl).toEqual(0x3F45)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2702)
  expect(cpu.r1.iy).toEqual(0xB3B9)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd45', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4E10
  cpu.r1.bc = 0x5C6D
  cpu.r1.de = 0xD11D
  cpu.r1.hl = 0x1736
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7298
  cpu.r1.iy = 0x2D10
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x45)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4E10)
  expect(cpu.r1.bc).toEqual(0x986D)
  expect(cpu.r1.de).toEqual(0xD11D)
  expect(cpu.r1.hl).toEqual(0x1736)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7298)
  expect(cpu.r1.iy).toEqual(0x2D10)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd46', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC758
  cpu.r1.bc = 0xBF29
  cpu.r1.de = 0x66F2
  cpu.r1.hl = 0x29EF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5CC7
  cpu.r1.iy = 0x407D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x46)
  mem.write8(0x0002, 0x68)
  mem.write8(0x5D2F, 0x8D)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC758)
  expect(cpu.r1.bc).toEqual(0x8D29)
  expect(cpu.r1.de).toEqual(0x66F2)
  expect(cpu.r1.hl).toEqual(0x29EF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5CC7)
  expect(cpu.r1.iy).toEqual(0x407D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd4c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE15C
  cpu.r1.bc = 0x75EC
  cpu.r1.de = 0x7531
  cpu.r1.hl = 0xAE9E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3ED8
  cpu.r1.iy = 0x03B7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x4C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE15C)
  expect(cpu.r1.bc).toEqual(0x753E)
  expect(cpu.r1.de).toEqual(0x7531)
  expect(cpu.r1.hl).toEqual(0xAE9E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3ED8)
  expect(cpu.r1.iy).toEqual(0x03B7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd4d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x469E
  cpu.r1.bc = 0x7864
  cpu.r1.de = 0x6A5A
  cpu.r1.hl = 0x00E2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA1AA
  cpu.r1.iy = 0x0D6F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x4D)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x469E)
  expect(cpu.r1.bc).toEqual(0x78AA)
  expect(cpu.r1.de).toEqual(0x6A5A)
  expect(cpu.r1.hl).toEqual(0x00E2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA1AA)
  expect(cpu.r1.iy).toEqual(0x0D6F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd4e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7BF7
  cpu.r1.bc = 0x6605
  cpu.r1.de = 0x8D55
  cpu.r1.hl = 0xDEF2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD94B
  cpu.r1.iy = 0x17FB
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x4E)
  mem.write8(0x0002, 0x2E)
  mem.write8(0xD979, 0x76)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7BF7)
  expect(cpu.r1.bc).toEqual(0x6676)
  expect(cpu.r1.de).toEqual(0x8D55)
  expect(cpu.r1.hl).toEqual(0xDEF2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD94B)
  expect(cpu.r1.iy).toEqual(0x17FB)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd54', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8376
  cpu.r1.bc = 0x0D13
  cpu.r1.de = 0xC767
  cpu.r1.hl = 0x3119
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x4B6D
  cpu.r1.iy = 0x030B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x54)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8376)
  expect(cpu.r1.bc).toEqual(0x0D13)
  expect(cpu.r1.de).toEqual(0x4B67)
  expect(cpu.r1.hl).toEqual(0x3119)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4B6D)
  expect(cpu.r1.iy).toEqual(0x030B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd55', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFF78
  cpu.r1.bc = 0x85E3
  cpu.r1.de = 0x566B
  cpu.r1.hl = 0x8F3A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD7D7
  cpu.r1.iy = 0x4E0B
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x55)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFF78)
  expect(cpu.r1.bc).toEqual(0x85E3)
  expect(cpu.r1.de).toEqual(0xD76B)
  expect(cpu.r1.hl).toEqual(0x8F3A)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD7D7)
  expect(cpu.r1.iy).toEqual(0x4E0B)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd56', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x97B3
  cpu.r1.bc = 0xB617
  cpu.r1.de = 0xBB50
  cpu.r1.hl = 0x81D1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA306
  cpu.r1.iy = 0x7A49
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x56)
  mem.write8(0x0002, 0xF4)
  mem.write8(0xA2FA, 0xDE)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x97B3)
  expect(cpu.r1.bc).toEqual(0xB617)
  expect(cpu.r1.de).toEqual(0xDE50)
  expect(cpu.r1.hl).toEqual(0x81D1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA306)
  expect(cpu.r1.iy).toEqual(0x7A49)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd5c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xAF82
  cpu.r1.bc = 0x24BF
  cpu.r1.de = 0x2793
  cpu.r1.hl = 0xF925
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xF9A3
  cpu.r1.iy = 0x0B82
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x5C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAF82)
  expect(cpu.r1.bc).toEqual(0x24BF)
  expect(cpu.r1.de).toEqual(0x27F9)
  expect(cpu.r1.hl).toEqual(0xF925)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xF9A3)
  expect(cpu.r1.iy).toEqual(0x0B82)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd5d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x36CB
  cpu.r1.bc = 0x97A9
  cpu.r1.de = 0x400D
  cpu.r1.hl = 0x30FE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3340
  cpu.r1.iy = 0xB3ED
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x5D)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x36CB)
  expect(cpu.r1.bc).toEqual(0x97A9)
  expect(cpu.r1.de).toEqual(0x4040)
  expect(cpu.r1.hl).toEqual(0x30FE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3340)
  expect(cpu.r1.iy).toEqual(0xB3ED)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd5e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA220
  cpu.r1.bc = 0x389D
  cpu.r1.de = 0x2FF8
  cpu.r1.hl = 0x368C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8D32
  cpu.r1.iy = 0x3512
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x5E)
  mem.write8(0x0002, 0x8F)
  mem.write8(0x8CC1, 0xCE)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA220)
  expect(cpu.r1.bc).toEqual(0x389D)
  expect(cpu.r1.de).toEqual(0x2FCE)
  expect(cpu.r1.hl).toEqual(0x368C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8D32)
  expect(cpu.r1.iy).toEqual(0x3512)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd60', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2392
  cpu.r1.bc = 0x7F6A
  cpu.r1.de = 0x3DC0
  cpu.r1.hl = 0xCEFB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x44A0
  cpu.r1.iy = 0xC424
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x60)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2392)
  expect(cpu.r1.bc).toEqual(0x7F6A)
  expect(cpu.r1.de).toEqual(0x3DC0)
  expect(cpu.r1.hl).toEqual(0xCEFB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7FA0)
  expect(cpu.r1.iy).toEqual(0xC424)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd61', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x76ED
  cpu.r1.bc = 0x268C
  cpu.r1.de = 0xD5C8
  cpu.r1.hl = 0xBAB0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB650
  cpu.r1.iy = 0x0A93
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x61)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x76ED)
  expect(cpu.r1.bc).toEqual(0x268C)
  expect(cpu.r1.de).toEqual(0xD5C8)
  expect(cpu.r1.hl).toEqual(0xBAB0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8C50)
  expect(cpu.r1.iy).toEqual(0x0A93)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd62', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4C6F
  cpu.r1.bc = 0xB482
  cpu.r1.de = 0xFEF4
  cpu.r1.hl = 0x62E7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6E25
  cpu.r1.iy = 0x9655
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x62)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4C6F)
  expect(cpu.r1.bc).toEqual(0xB482)
  expect(cpu.r1.de).toEqual(0xFEF4)
  expect(cpu.r1.hl).toEqual(0x62E7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFE25)
  expect(cpu.r1.iy).toEqual(0x9655)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd63', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6E9A
  cpu.r1.bc = 0x5499
  cpu.r1.de = 0x3C8F
  cpu.r1.hl = 0x1F64
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBF35
  cpu.r1.iy = 0x0DF7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x63)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6E9A)
  expect(cpu.r1.bc).toEqual(0x5499)
  expect(cpu.r1.de).toEqual(0x3C8F)
  expect(cpu.r1.hl).toEqual(0x1F64)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8F35)
  expect(cpu.r1.iy).toEqual(0x0DF7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd64', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x47F6
  cpu.r1.bc = 0x1B7A
  cpu.r1.de = 0xA55E
  cpu.r1.hl = 0x2FC2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xEFC7
  cpu.r1.iy = 0xACA0
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x64)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x47F6)
  expect(cpu.r1.bc).toEqual(0x1B7A)
  expect(cpu.r1.de).toEqual(0xA55E)
  expect(cpu.r1.hl).toEqual(0x2FC2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xEFC7)
  expect(cpu.r1.iy).toEqual(0xACA0)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd65', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD786
  cpu.r1.bc = 0x7D1D
  cpu.r1.de = 0xB659
  cpu.r1.hl = 0x77E8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x58FA
  cpu.r1.iy = 0x006D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x65)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD786)
  expect(cpu.r1.bc).toEqual(0x7D1D)
  expect(cpu.r1.de).toEqual(0xB659)
  expect(cpu.r1.hl).toEqual(0x77E8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFAFA)
  expect(cpu.r1.iy).toEqual(0x006D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd66', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x84C2
  cpu.r1.bc = 0x79B1
  cpu.r1.de = 0xCA4A
  cpu.r1.hl = 0xAAA0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xCE5D
  cpu.r1.iy = 0xDD2D
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x66)
  mem.write8(0x0002, 0xB5)
  mem.write8(0xCE12, 0x03)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x84C2)
  expect(cpu.r1.bc).toEqual(0x79B1)
  expect(cpu.r1.de).toEqual(0xCA4A)
  expect(cpu.r1.hl).toEqual(0x03A0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xCE5D)
  expect(cpu.r1.iy).toEqual(0xDD2D)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd67', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x967C
  cpu.r1.bc = 0x511E
  cpu.r1.de = 0x336D
  cpu.r1.hl = 0x40F6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x66E7
  cpu.r1.iy = 0x5BE2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x67)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x967C)
  expect(cpu.r1.bc).toEqual(0x511E)
  expect(cpu.r1.de).toEqual(0x336D)
  expect(cpu.r1.hl).toEqual(0x40F6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x96E7)
  expect(cpu.r1.iy).toEqual(0x5BE2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd68', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4A9D
  cpu.r1.bc = 0xEFA8
  cpu.r1.de = 0xFEBD
  cpu.r1.hl = 0x07E4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5FD8
  cpu.r1.iy = 0xB23F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x68)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4A9D)
  expect(cpu.r1.bc).toEqual(0xEFA8)
  expect(cpu.r1.de).toEqual(0xFEBD)
  expect(cpu.r1.hl).toEqual(0x07E4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5FEF)
  expect(cpu.r1.iy).toEqual(0xB23F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd69', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6466
  cpu.r1.bc = 0x2142
  cpu.r1.de = 0x2523
  cpu.r1.hl = 0x82B3
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x6479
  cpu.r1.iy = 0x04A7
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x69)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6466)
  expect(cpu.r1.bc).toEqual(0x2142)
  expect(cpu.r1.de).toEqual(0x2523)
  expect(cpu.r1.hl).toEqual(0x82B3)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x6442)
  expect(cpu.r1.iy).toEqual(0x04A7)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd6a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x401F
  cpu.r1.bc = 0x61F1
  cpu.r1.de = 0x4B08
  cpu.r1.hl = 0xFA88
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC37F
  cpu.r1.iy = 0xD8F6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x6A)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x401F)
  expect(cpu.r1.bc).toEqual(0x61F1)
  expect(cpu.r1.de).toEqual(0x4B08)
  expect(cpu.r1.hl).toEqual(0xFA88)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC34B)
  expect(cpu.r1.iy).toEqual(0xD8F6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd6b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6DC7
  cpu.r1.bc = 0xE2AE
  cpu.r1.de = 0x40BD
  cpu.r1.hl = 0xF3C0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2290
  cpu.r1.iy = 0x2749
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x6B)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6DC7)
  expect(cpu.r1.bc).toEqual(0xE2AE)
  expect(cpu.r1.de).toEqual(0x40BD)
  expect(cpu.r1.hl).toEqual(0xF3C0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x22BD)
  expect(cpu.r1.iy).toEqual(0x2749)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd6c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3939
  cpu.r1.bc = 0x90DA
  cpu.r1.de = 0x62DC
  cpu.r1.hl = 0x7C31
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x412F
  cpu.r1.iy = 0x7211
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x6C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3939)
  expect(cpu.r1.bc).toEqual(0x90DA)
  expect(cpu.r1.de).toEqual(0x62DC)
  expect(cpu.r1.hl).toEqual(0x7C31)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x4141)
  expect(cpu.r1.iy).toEqual(0x7211)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd6d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3964
  cpu.r1.bc = 0xFF3F
  cpu.r1.de = 0x23D4
  cpu.r1.hl = 0xC7C7
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9B70
  cpu.r1.iy = 0x20C6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x6D)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3964)
  expect(cpu.r1.bc).toEqual(0xFF3F)
  expect(cpu.r1.de).toEqual(0x23D4)
  expect(cpu.r1.hl).toEqual(0xC7C7)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9B70)
  expect(cpu.r1.iy).toEqual(0x20C6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd6e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x223F
  cpu.r1.bc = 0xF661
  cpu.r1.de = 0xB61C
  cpu.r1.hl = 0x0F53
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC648
  cpu.r1.iy = 0xFAE8
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x6E)
  mem.write8(0x0002, 0x2C)
  mem.write8(0xC674, 0x6B)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x223F)
  expect(cpu.r1.bc).toEqual(0xF661)
  expect(cpu.r1.de).toEqual(0xB61C)
  expect(cpu.r1.hl).toEqual(0x0F6B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC648)
  expect(cpu.r1.iy).toEqual(0xFAE8)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd6f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6E84
  cpu.r1.bc = 0x9CD4
  cpu.r1.de = 0xA293
  cpu.r1.hl = 0x647D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0D0B
  cpu.r1.iy = 0x4A56
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x6F)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6E84)
  expect(cpu.r1.bc).toEqual(0x9CD4)
  expect(cpu.r1.de).toEqual(0xA293)
  expect(cpu.r1.hl).toEqual(0x647D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0D6E)
  expect(cpu.r1.iy).toEqual(0x4A56)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd70', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xD09F
  cpu.r1.bc = 0xFE00
  cpu.r1.de = 0x231E
  cpu.r1.hl = 0x31EC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x05FA
  cpu.r1.iy = 0xEA92
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x70)
  mem.write8(0x0002, 0xF6)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD09F)
  expect(cpu.r1.bc).toEqual(0xFE00)
  expect(cpu.r1.de).toEqual(0x231E)
  expect(cpu.r1.hl).toEqual(0x31EC)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x05FA)
  expect(cpu.r1.iy).toEqual(0xEA92)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd71', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xEBEE
  cpu.r1.bc = 0x151C
  cpu.r1.de = 0x05C7
  cpu.r1.hl = 0xEE08
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x3722
  cpu.r1.iy = 0x2EC6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x71)
  mem.write8(0x0002, 0x23)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEBEE)
  expect(cpu.r1.bc).toEqual(0x151C)
  expect(cpu.r1.de).toEqual(0x05C7)
  expect(cpu.r1.hl).toEqual(0xEE08)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3722)
  expect(cpu.r1.iy).toEqual(0x2EC6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd72', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x80C9
  cpu.r1.bc = 0xAC1E
  cpu.r1.de = 0x63BD
  cpu.r1.hl = 0x828B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8DFF
  cpu.r1.iy = 0x94EF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x72)
  mem.write8(0x0002, 0x93)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x80C9)
  expect(cpu.r1.bc).toEqual(0xAC1E)
  expect(cpu.r1.de).toEqual(0x63BD)
  expect(cpu.r1.hl).toEqual(0x828B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8DFF)
  expect(cpu.r1.iy).toEqual(0x94EF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd73', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8F3E
  cpu.r1.bc = 0xB5A3
  cpu.r1.de = 0x07DE
  cpu.r1.hl = 0x0B0C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x79C6
  cpu.r1.iy = 0xAE79
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x73)
  mem.write8(0x0002, 0x57)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8F3E)
  expect(cpu.r1.bc).toEqual(0xB5A3)
  expect(cpu.r1.de).toEqual(0x07DE)
  expect(cpu.r1.hl).toEqual(0x0B0C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x79C6)
  expect(cpu.r1.iy).toEqual(0xAE79)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd74', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4AE0
  cpu.r1.bc = 0x49C5
  cpu.r1.de = 0x3DEB
  cpu.r1.hl = 0x0125
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5910
  cpu.r1.iy = 0x429A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x74)
  mem.write8(0x0002, 0xB9)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4AE0)
  expect(cpu.r1.bc).toEqual(0x49C5)
  expect(cpu.r1.de).toEqual(0x3DEB)
  expect(cpu.r1.hl).toEqual(0x0125)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x5910)
  expect(cpu.r1.iy).toEqual(0x429A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd75', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5772
  cpu.r1.bc = 0xE833
  cpu.r1.de = 0xB63E
  cpu.r1.hl = 0x734F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAE4C
  cpu.r1.iy = 0xE8C2
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x75)
  mem.write8(0x0002, 0x30)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5772)
  expect(cpu.r1.bc).toEqual(0xE833)
  expect(cpu.r1.de).toEqual(0xB63E)
  expect(cpu.r1.hl).toEqual(0x734F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAE4C)
  expect(cpu.r1.iy).toEqual(0xE8C2)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd77', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDC56
  cpu.r1.bc = 0xD893
  cpu.r1.de = 0x4116
  cpu.r1.hl = 0xF2D2
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xA181
  cpu.r1.iy = 0x3157
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x77)
  mem.write8(0x0002, 0x8C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDC56)
  expect(cpu.r1.bc).toEqual(0xD893)
  expect(cpu.r1.de).toEqual(0x4116)
  expect(cpu.r1.hl).toEqual(0xF2D2)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xA181)
  expect(cpu.r1.iy).toEqual(0x3157)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd7c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7558
  cpu.r1.bc = 0x7705
  cpu.r1.de = 0xAC92
  cpu.r1.hl = 0xA6A1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x8CDE
  cpu.r1.iy = 0x7507
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x7C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8C58)
  expect(cpu.r1.bc).toEqual(0x7705)
  expect(cpu.r1.de).toEqual(0xAC92)
  expect(cpu.r1.hl).toEqual(0xA6A1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x8CDE)
  expect(cpu.r1.iy).toEqual(0x7507)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd7d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6C18
  cpu.r1.bc = 0x93FB
  cpu.r1.de = 0x6BDD
  cpu.r1.hl = 0x3A10
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD7CB
  cpu.r1.iy = 0xC0F6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x7D)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCB18)
  expect(cpu.r1.bc).toEqual(0x93FB)
  expect(cpu.r1.de).toEqual(0x6BDD)
  expect(cpu.r1.hl).toEqual(0x3A10)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD7CB)
  expect(cpu.r1.iy).toEqual(0xC0F6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd7e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6A66
  cpu.r1.bc = 0x1F77
  cpu.r1.de = 0x6220
  cpu.r1.hl = 0x0C40
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x1CF4
  cpu.r1.iy = 0x1A1F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x7E)
  mem.write8(0x0002, 0xBC)
  mem.write8(0x1CB0, 0x57)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5766)
  expect(cpu.r1.bc).toEqual(0x1F77)
  expect(cpu.r1.de).toEqual(0x6220)
  expect(cpu.r1.hl).toEqual(0x0C40)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x1CF4)
  expect(cpu.r1.iy).toEqual(0x1A1F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd84', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2E47
  cpu.r1.bc = 0x1DE8
  cpu.r1.de = 0xB8B9
  cpu.r1.hl = 0x78A6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9F1D
  cpu.r1.iy = 0xB11F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x84)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCD98)
  expect(cpu.r1.bc).toEqual(0x1DE8)
  expect(cpu.r1.de).toEqual(0xB8B9)
  expect(cpu.r1.hl).toEqual(0x78A6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9F1D)
  expect(cpu.r1.iy).toEqual(0xB11F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd85', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB27A
  cpu.r1.bc = 0xB1FF
  cpu.r1.de = 0x8D7B
  cpu.r1.hl = 0x40C0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB513
  cpu.r1.iy = 0x0688
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x85)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC580)
  expect(cpu.r1.bc).toEqual(0xB1FF)
  expect(cpu.r1.de).toEqual(0x8D7B)
  expect(cpu.r1.hl).toEqual(0x40C0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB513)
  expect(cpu.r1.iy).toEqual(0x0688)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd86', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4EFA
  cpu.r1.bc = 0xD085
  cpu.r1.de = 0x5BAC
  cpu.r1.hl = 0xE364
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB5B5
  cpu.r1.iy = 0xFE3A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x86)
  mem.write8(0x0002, 0xC1)
  mem.write8(0xB576, 0x5B)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA9BC)
  expect(cpu.r1.bc).toEqual(0xD085)
  expect(cpu.r1.de).toEqual(0x5BAC)
  expect(cpu.r1.hl).toEqual(0xE364)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB5B5)
  expect(cpu.r1.iy).toEqual(0xFE3A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd8c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xBC63
  cpu.r1.bc = 0x8FDC
  cpu.r1.de = 0xEA8F
  cpu.r1.hl = 0x9734
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0EB3
  cpu.r1.iy = 0x1B54
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x8C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCB98)
  expect(cpu.r1.bc).toEqual(0x8FDC)
  expect(cpu.r1.de).toEqual(0xEA8F)
  expect(cpu.r1.hl).toEqual(0x9734)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0EB3)
  expect(cpu.r1.iy).toEqual(0x1B54)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd8d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xB61F
  cpu.r1.bc = 0x1C81
  cpu.r1.de = 0xB6FB
  cpu.r1.hl = 0xD6E5
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x09BE
  cpu.r1.iy = 0xA736
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x8D)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7535)
  expect(cpu.r1.bc).toEqual(0x1C81)
  expect(cpu.r1.de).toEqual(0xB6FB)
  expect(cpu.r1.hl).toEqual(0xD6E5)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x09BE)
  expect(cpu.r1.iy).toEqual(0xA736)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd8e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4ED4
  cpu.r1.bc = 0x182D
  cpu.r1.de = 0xAB17
  cpu.r1.hl = 0x94AE
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBB97
  cpu.r1.iy = 0x87DA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x8E)
  mem.write8(0x0002, 0x25)
  mem.write8(0xBBBC, 0x32)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8094)
  expect(cpu.r1.bc).toEqual(0x182D)
  expect(cpu.r1.de).toEqual(0xAB17)
  expect(cpu.r1.hl).toEqual(0x94AE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBB97)
  expect(cpu.r1.iy).toEqual(0x87DA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd94', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7EF1
  cpu.r1.bc = 0x9EFE
  cpu.r1.de = 0x6EA1
  cpu.r1.hl = 0xFC55
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0A09
  cpu.r1.iy = 0x89C5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x94)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7422)
  expect(cpu.r1.bc).toEqual(0x9EFE)
  expect(cpu.r1.de).toEqual(0x6EA1)
  expect(cpu.r1.hl).toEqual(0xFC55)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0A09)
  expect(cpu.r1.iy).toEqual(0x89C5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd95', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x2920
  cpu.r1.bc = 0x59AB
  cpu.r1.de = 0x428C
  cpu.r1.hl = 0x3A94
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x44FD
  cpu.r1.iy = 0xF243
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x95)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2C3B)
  expect(cpu.r1.bc).toEqual(0x59AB)
  expect(cpu.r1.de).toEqual(0x428C)
  expect(cpu.r1.hl).toEqual(0x3A94)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x44FD)
  expect(cpu.r1.iy).toEqual(0xF243)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd96', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9B76
  cpu.r1.bc = 0x461F
  cpu.r1.de = 0xCED7
  cpu.r1.hl = 0xDB3F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2C66
  cpu.r1.iy = 0x9DBF
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x96)
  mem.write8(0x0002, 0x5F)
  mem.write8(0x2CC5, 0x49)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5206)
  expect(cpu.r1.bc).toEqual(0x461F)
  expect(cpu.r1.de).toEqual(0xCED7)
  expect(cpu.r1.hl).toEqual(0xDB3F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2C66)
  expect(cpu.r1.iy).toEqual(0x9DBF)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd9c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFAF4
  cpu.r1.bc = 0x670E
  cpu.r1.de = 0xAFCC
  cpu.r1.hl = 0x8B34
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x285F
  cpu.r1.iy = 0x1CAA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x9C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD282)
  expect(cpu.r1.bc).toEqual(0x670E)
  expect(cpu.r1.de).toEqual(0xAFCC)
  expect(cpu.r1.hl).toEqual(0x8B34)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x285F)
  expect(cpu.r1.iy).toEqual(0x1CAA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd9d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF827
  cpu.r1.bc = 0x0CDB
  cpu.r1.de = 0xDF32
  cpu.r1.hl = 0xD0E4
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9B12
  cpu.r1.iy = 0x7D07
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x9D)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE5A2)
  expect(cpu.r1.bc).toEqual(0x0CDB)
  expect(cpu.r1.de).toEqual(0xDF32)
  expect(cpu.r1.hl).toEqual(0xD0E4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9B12)
  expect(cpu.r1.iy).toEqual(0x7D07)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dd9e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x938E
  cpu.r1.bc = 0xF9C5
  cpu.r1.de = 0xCBC4
  cpu.r1.hl = 0xCA21
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB4CC
  cpu.r1.iy = 0x46FA
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0x9E)
  mem.write8(0x0002, 0x14)
  mem.write8(0xB4E0, 0xB5)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDE9B)
  expect(cpu.r1.bc).toEqual(0xF9C5)
  expect(cpu.r1.de).toEqual(0xCBC4)
  expect(cpu.r1.hl).toEqual(0xCA21)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB4CC)
  expect(cpu.r1.iy).toEqual(0x46FA)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dda4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x52F5
  cpu.r1.bc = 0xBA53
  cpu.r1.de = 0xACFC
  cpu.r1.hl = 0x9481
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x2F8B
  cpu.r1.iy = 0xEDF6
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xA4)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0210)
  expect(cpu.r1.bc).toEqual(0xBA53)
  expect(cpu.r1.de).toEqual(0xACFC)
  expect(cpu.r1.hl).toEqual(0x9481)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x2F8B)
  expect(cpu.r1.iy).toEqual(0xEDF6)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dda5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xBAAF
  cpu.r1.bc = 0xA675
  cpu.r1.de = 0xD757
  cpu.r1.hl = 0xF1DB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xFDEF
  cpu.r1.iy = 0xD8CE
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xA5)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xAABC)
  expect(cpu.r1.bc).toEqual(0xA675)
  expect(cpu.r1.de).toEqual(0xD757)
  expect(cpu.r1.hl).toEqual(0xF1DB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xFDEF)
  expect(cpu.r1.iy).toEqual(0xD8CE)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dda6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1DA4
  cpu.r1.bc = 0x20C4
  cpu.r1.de = 0xEBC3
  cpu.r1.hl = 0xDA8D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x7E95
  cpu.r1.iy = 0x5E8A
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xA6)
  mem.write8(0x0002, 0x41)
  mem.write8(0x7ED6, 0xC7)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0514)
  expect(cpu.r1.bc).toEqual(0x20C4)
  expect(cpu.r1.de).toEqual(0xEBC3)
  expect(cpu.r1.hl).toEqual(0xDA8D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x7E95)
  expect(cpu.r1.iy).toEqual(0x5E8A)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddac', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xEF15
  cpu.r1.bc = 0x2A7C
  cpu.r1.de = 0x17E5
  cpu.r1.hl = 0x3F6E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xAFFA
  cpu.r1.iy = 0xA0B5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xAC)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4000)
  expect(cpu.r1.bc).toEqual(0x2A7C)
  expect(cpu.r1.de).toEqual(0x17E5)
  expect(cpu.r1.hl).toEqual(0x3F6E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xAFFA)
  expect(cpu.r1.iy).toEqual(0xA0B5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddad', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xBA2E
  cpu.r1.bc = 0x6BA1
  cpu.r1.de = 0xEF1B
  cpu.r1.hl = 0x5713
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBA38
  cpu.r1.iy = 0xA708
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xAD)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8284)
  expect(cpu.r1.bc).toEqual(0x6BA1)
  expect(cpu.r1.de).toEqual(0xEF1B)
  expect(cpu.r1.hl).toEqual(0x5713)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBA38)
  expect(cpu.r1.iy).toEqual(0xA708)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddae', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8009
  cpu.r1.bc = 0x3AD6
  cpu.r1.de = 0xA721
  cpu.r1.hl = 0x2100
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xE909
  cpu.r1.iy = 0x87B4
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xAE)
  mem.write8(0x0002, 0x72)
  mem.write8(0xE97B, 0xC3)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4300)
  expect(cpu.r1.bc).toEqual(0x3AD6)
  expect(cpu.r1.de).toEqual(0xA721)
  expect(cpu.r1.hl).toEqual(0x2100)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xE909)
  expect(cpu.r1.iy).toEqual(0x87B4)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddb4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1CCD
  cpu.r1.bc = 0x29AA
  cpu.r1.de = 0x2E82
  cpu.r1.hl = 0x4DC8
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9C04
  cpu.r1.iy = 0x8BE3
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xB4)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9C8C)
  expect(cpu.r1.bc).toEqual(0x29AA)
  expect(cpu.r1.de).toEqual(0x2E82)
  expect(cpu.r1.hl).toEqual(0x4DC8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9C04)
  expect(cpu.r1.iy).toEqual(0x8BE3)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddb5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x46B4
  cpu.r1.bc = 0xFC93
  cpu.r1.de = 0x7A06
  cpu.r1.hl = 0x0518
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0AC5
  cpu.r1.iy = 0x4150
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xB5)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC780)
  expect(cpu.r1.bc).toEqual(0xFC93)
  expect(cpu.r1.de).toEqual(0x7A06)
  expect(cpu.r1.hl).toEqual(0x0518)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0AC5)
  expect(cpu.r1.iy).toEqual(0x4150)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddb6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5017
  cpu.r1.bc = 0xAB81
  cpu.r1.de = 0x4287
  cpu.r1.hl = 0x5EE1
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xC66F
  cpu.r1.iy = 0xD6CC
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xB6)
  mem.write8(0x0002, 0x31)
  mem.write8(0xC6A0, 0x1C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5C0C)
  expect(cpu.r1.bc).toEqual(0xAB81)
  expect(cpu.r1.de).toEqual(0x4287)
  expect(cpu.r1.hl).toEqual(0x5EE1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xC66F)
  expect(cpu.r1.iy).toEqual(0xD6CC)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddbc', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x53E0
  cpu.r1.bc = 0xAA98
  cpu.r1.de = 0xF7D7
  cpu.r1.hl = 0xFA0C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBE7A
  cpu.r1.iy = 0xA41F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xBC)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x53BF)
  expect(cpu.r1.bc).toEqual(0xAA98)
  expect(cpu.r1.de).toEqual(0xF7D7)
  expect(cpu.r1.hl).toEqual(0xFA0C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBE7A)
  expect(cpu.r1.iy).toEqual(0xA41F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddbd', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDC83
  cpu.r1.bc = 0x80CE
  cpu.r1.de = 0x5D2F
  cpu.r1.hl = 0xE999
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBB41
  cpu.r1.iy = 0xA24F
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xBD)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDC82)
  expect(cpu.r1.bc).toEqual(0x80CE)
  expect(cpu.r1.de).toEqual(0x5D2F)
  expect(cpu.r1.hl).toEqual(0xE999)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xBB41)
  expect(cpu.r1.iy).toEqual(0xA24F)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddbe', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9838
  cpu.r1.bc = 0xBFD5
  cpu.r1.de = 0xA299
  cpu.r1.hl = 0xD34B
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x9332
  cpu.r1.iy = 0xB1D5
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xBE)
  mem.write8(0x0002, 0x48)
  mem.write8(0x937A, 0x5B)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x981E)
  expect(cpu.r1.bc).toEqual(0xBFD5)
  expect(cpu.r1.de).toEqual(0xA299)
  expect(cpu.r1.hl).toEqual(0xD34B)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x9332)
  expect(cpu.r1.iy).toEqual(0xB1D5)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dde1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8A15
  cpu.r1.bc = 0x6BF0
  cpu.r1.de = 0x0106
  cpu.r1.hl = 0x3DD0
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x5DA4
  cpu.r1.iy = 0x8716
  cpu.sp = 0x595F
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xE1)
  mem.write8(0x595F, 0x9A)
  mem.write8(0x5960, 0x09)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8A15)
  expect(cpu.r1.bc).toEqual(0x6BF0)
  expect(cpu.r1.de).toEqual(0x0106)
  expect(cpu.r1.hl).toEqual(0x3DD0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x099A)
  expect(cpu.r1.iy).toEqual(0x8716)
  expect(cpu.sp).toEqual(0x5961)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dde3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x068E
  cpu.r1.bc = 0x58E6
  cpu.r1.de = 0x2713
  cpu.r1.hl = 0x500F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xBE05
  cpu.r1.iy = 0x4308
  cpu.sp = 0x57BD
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xE3)
  mem.write8(0x57BD, 0x15)
  mem.write8(0x57BE, 0x3F)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x068E)
  expect(cpu.r1.bc).toEqual(0x58E6)
  expect(cpu.r1.de).toEqual(0x2713)
  expect(cpu.r1.hl).toEqual(0x500F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x3F15)
  expect(cpu.r1.iy).toEqual(0x4308)
  expect(cpu.sp).toEqual(0x57BD)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dde5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7462
  cpu.r1.bc = 0x9B6C
  cpu.r1.de = 0xBFE5
  cpu.r1.hl = 0x0330
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xB282
  cpu.r1.iy = 0xE272
  cpu.sp = 0x0761
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xE5)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7462)
  expect(cpu.r1.bc).toEqual(0x9B6C)
  expect(cpu.r1.de).toEqual(0xBFE5)
  expect(cpu.r1.hl).toEqual(0x0330)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xB282)
  expect(cpu.r1.iy).toEqual(0xE272)
  expect(cpu.sp).toEqual(0x075F)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test dde9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x75A7
  cpu.r1.bc = 0x139B
  cpu.r1.de = 0xF9A3
  cpu.r1.hl = 0x94BB
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x64F0
  cpu.r1.iy = 0x3433
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xE9)

  while (cpu.pc !== 0x25840) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x75A7)
  expect(cpu.r1.bc).toEqual(0x139B)
  expect(cpu.r1.de).toEqual(0xF9A3)
  expect(cpu.r1.hl).toEqual(0x94BB)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x64F0)
  expect(cpu.r1.iy).toEqual(0x3433)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddf9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8709
  cpu.r1.bc = 0x15DD
  cpu.r1.de = 0x7FA6
  cpu.r1.hl = 0x3C5C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0xD3A7
  cpu.r1.iy = 0x1D7B
  cpu.sp = 0xF67C
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xF9)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x8709)
  expect(cpu.r1.bc).toEqual(0x15DD)
  expect(cpu.r1.de).toEqual(0x7FA6)
  expect(cpu.r1.hl).toEqual(0x3C5C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0xD3A7)
  expect(cpu.r1.iy).toEqual(0x1D7B)
  expect(cpu.sp).toEqual(0xD3A7)
  expect(cpu.r).toEqual(0x02)
  expect(cpu.i).toEqual(0x00)
})

test('Test ddfd00', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
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
  mem.write8(0x0000, 0xDD)
  mem.write8(0x0001, 0xFD)
  mem.write8(0x0002, 0x00)
  mem.write8(0x0003, 0x00)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
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
  expect(cpu.r).toEqual(0x04)
  expect(cpu.i).toEqual(0x00)
})

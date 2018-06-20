const Memory = require("../src/memory")
const Z80 = require("../src/z80")

test('Test 10', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0800
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
  mem.write8(0x0000, 0x00)
  mem.write8(0x0001, 0x10)
  mem.write8(0x0002, 0xFD)
  mem.write8(0x0003, 0x0C)

  while (cpu.pc !== 0x4) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0001)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x11)
  expect(cpu.i).toEqual(0x00)
})

test('Test 11', () => {
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
  mem.write8(0x0000, 0x11)
  mem.write8(0x0001, 0x9A)
  mem.write8(0x0002, 0xBC)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xBC9A)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 12', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5600
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x8000
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
  mem.write8(0x0000, 0x12)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5600)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x8000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 13', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0xDEF0
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
  mem.write8(0x0000, 0x13)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xDEF1)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 14', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x2700
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
  mem.write8(0x0000, 0x14)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0028)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x2800)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 15', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x1000
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
  mem.write8(0x0000, 0x15)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x001A)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0F00)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 16', () => {
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
  mem.write8(0x0000, 0x16)
  mem.write8(0x0001, 0x12)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x1200)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 17', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0801
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
  mem.write8(0x0000, 0x17)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1100)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 18', () => {
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
  mem.write8(0x0000, 0x18)
  mem.write8(0x0001, 0x40)

  while (cpu.pc !== 0x66) {
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 19', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x3456
  cpu.r1.hl = 0x789A
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x19)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0028)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x3456)
  expect(cpu.r1.hl).toEqual(0xACF0)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 21', () => {
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
  mem.write8(0x0000, 0x21)
  mem.write8(0x0001, 0x28)
  mem.write8(0x0002, 0xED)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xED28)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 22', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0xC64C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x22)
  mem.write8(0x0001, 0xB0)
  mem.write8(0x0002, 0xC3)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xC64C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 23', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x9C4E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x23)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x9C4F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 24', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x7200
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x24)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0020)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7300)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 25', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0xA500
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x25)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00A2)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xA400)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 26', () => {
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
  mem.write8(0x0000, 0x26)
  mem.write8(0x0001, 0x3A)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x3A00)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 27', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x1F00
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
  mem.write8(0x0000, 0x27)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2530)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 29', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0xCDFA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x29)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0019)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x9BF4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 31', () => {
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
  mem.write8(0x0000, 0x31)
  mem.write8(0x0001, 0xD4)
  mem.write8(0x0002, 0x61)

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
  expect(cpu.sp).toEqual(0x61D4)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 32', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0E00
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
  mem.write8(0x0000, 0x32)
  mem.write8(0x0001, 0xAC)
  mem.write8(0x0002, 0xAD)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0E00)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 33', () => {
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
  cpu.sp = 0xA55A
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x33)

  while (cpu.pc !== 0x1) {
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
  expect(cpu.sp).toEqual(0xA55B)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 34', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0xFE1D
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x34)
  mem.write8(0xFE1D, 0xFD)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00A8)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xFE1D)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 35', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x470C
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x35)
  mem.write8(0x470C, 0x82)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0082)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x470C)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 36', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x7D29
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x36)
  mem.write8(0x0001, 0x7C)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x7D29)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 37', () => {
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
  mem.write8(0x0000, 0x37)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0001)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 39', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x1AEF
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xC534
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x29)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0030)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x35DE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xC534)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 40', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x40)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 41', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x41)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0x9898)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 42', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x42)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0x9098)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 43', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x43)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xD898)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 44', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x44)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xA198)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 45', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x45)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0x6998)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 46', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x46)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0x5098)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 47', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x47)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0x0298)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 48', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x48)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCFCF)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 49', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x49)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 50', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x50)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0xCFD8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 51', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x51)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x98D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 52', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x52)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 53', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x53)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0xD8D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 54', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x54)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0xA1D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 55', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x55)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x69D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 56', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x56)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x50D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 57', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x57)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x02D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 58', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x58)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90CF)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 59', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x59)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x9098)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 60', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x60)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xCF69)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 61', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x61)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0x9869)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 62', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x62)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0x9069)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 63', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x63)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xD869)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 64', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x64)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 65', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x65)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0x6969)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 66', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x66)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0x5069)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 67', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x67)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0x0269)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 68', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x68)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA1CF)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 69', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x69)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA198)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 70', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x70)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 71', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x71)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 72', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x72)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 73', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x73)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 74', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x74)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 75', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x75)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 76', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x76)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 77', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x77)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 78', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x78)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCF00)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 79', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x79)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9800)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 80', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x80)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0411)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 81', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x81)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3031)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 82', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x82)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1501)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 83', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x83)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0211)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 84', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x84)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD191)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 85', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x85)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9B89)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 86', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x86)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3E29)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 87', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x87)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEAA9)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 88', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x88)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0411)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 89', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x89)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3031)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 90', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x90)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE6B2)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 91', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x91)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xBABA)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 92', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x92)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD582)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 93', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x93)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE8BA)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 94', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x94)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x191A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 95', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x95)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4F1A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 96', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x96)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xACBA)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 97', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x97)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0042)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 98', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x98)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE6B2)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 99', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x99)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xBABA)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 00', () => {
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
  mem.write8(0x0000, 0x00)

  while (cpu.pc !== 0x1) {
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 01', () => {
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
  mem.write8(0x0000, 0x01)
  mem.write8(0x0001, 0x12)
  mem.write8(0x0002, 0x34)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x3412)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 02', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x5600
  cpu.r1.bc = 0x0001
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
  mem.write8(0x0000, 0x02)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5600)
  expect(cpu.r1.bc).toEqual(0x0001)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 03', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x789A
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
  mem.write8(0x0000, 0x03)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x789B)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 04', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0xFF00
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
  mem.write8(0x0000, 0x04)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0050)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 05', () => {
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
  mem.write8(0x0000, 0x05)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00BA)
  expect(cpu.r1.bc).toEqual(0xFF00)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 06', () => {
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
  mem.write8(0x0000, 0x06)
  mem.write8(0x0001, 0xBC)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0xBC00)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 07', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8800
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
  mem.write8(0x0000, 0x07)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1101)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 08', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xDEF0
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x1234
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x08)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1234)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0xDEF0)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 09', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x5678
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x9ABC
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x09)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0030)
  expect(cpu.r1.bc).toEqual(0x5678)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xF134)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 0a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0001
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
  mem.write8(0x0000, 0x0A)
  mem.write8(0x0001, 0xDE)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xDE00)
  expect(cpu.r1.bc).toEqual(0x0001)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 0b', () => {
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
  mem.write8(0x0000, 0x0B)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0xFFFF)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 0c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x007F
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
  mem.write8(0x0000, 0x0C)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0094)
  expect(cpu.r1.bc).toEqual(0x0080)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 0d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0080
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
  mem.write8(0x0000, 0x0D)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x003E)
  expect(cpu.r1.bc).toEqual(0x007F)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 0e', () => {
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
  mem.write8(0x0000, 0x0E)
  mem.write8(0x0001, 0xF0)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x00F0)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 0f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4100
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
  mem.write8(0x0000, 0x0F)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA021)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 1a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x8000
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
  mem.write8(0x0000, 0x1A)
  mem.write8(0x8000, 0x13)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1300)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x8000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 1b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0xE5D4
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
  mem.write8(0x0000, 0x1B)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xE5D3)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 1c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x00AA
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
  mem.write8(0x0000, 0x1C)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00A8)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x00AB)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 1d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x00AA
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
  mem.write8(0x0000, 0x1D)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00AA)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x00A9)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 1e', () => {
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
  mem.write8(0x0000, 0x1E)
  mem.write8(0x0001, 0xEF)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x00EF)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 1f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x01C4
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
  mem.write8(0x0000, 0x1F)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00C5)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 20_1', () => {
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
  mem.write8(0x0000, 0x20)
  mem.write8(0x0001, 0x40)

  while (cpu.pc !== 0x66) {
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 20_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0040
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
  mem.write8(0x0000, 0x20)
  mem.write8(0x0001, 0x40)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0040)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 27_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x9A02
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
  mem.write8(0x0000, 0x27)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3423)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 28_1', () => {
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
  mem.write8(0x0000, 0x28)
  mem.write8(0x0001, 0x8E)

  while (cpu.pc !== 0x2) {
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 28_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0040
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
  mem.write8(0x0000, 0x28)
  mem.write8(0x0001, 0x8E)

  while (cpu.pc !== 0x65424) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0040)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 2a', () => {
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
  mem.write8(0x0000, 0x2A)
  mem.write8(0x0001, 0x45)
  mem.write8(0x0002, 0xAC)
  mem.write8(0xAC45, 0xC4)
  mem.write8(0xAC46, 0xDE)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xDEC4)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 2b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x9E66
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x2B)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x9E65)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 2c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0026
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x2C)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0020)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0027)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 2d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0032
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x2D)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0022)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0031)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 2e', () => {
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
  mem.write8(0x0000, 0x2E)
  mem.write8(0x0001, 0x18)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0018)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 2f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x8900
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
  mem.write8(0x0000, 0x2F)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7632)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 30_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0036
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
  mem.write8(0x0000, 0x30)
  mem.write8(0x0001, 0x50)

  while (cpu.pc !== 0x82) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0036)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 30_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0037
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
  mem.write8(0x0000, 0x30)
  mem.write8(0x0001, 0x50)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0037)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 37_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x00FF
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
  mem.write8(0x0000, 0x37)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00C5)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 37_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
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
  mem.write8(0x0000, 0x37)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFF29)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 37_3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xFFFF
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
  mem.write8(0x0000, 0x37)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFFED)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 38_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x00B2
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
  mem.write8(0x0000, 0x38)
  mem.write8(0x0001, 0x66)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00B2)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 38_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x00B3
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
  mem.write8(0x0000, 0x38)
  mem.write8(0x0001, 0x66)

  while (cpu.pc !== 0x104) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00B3)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 3a', () => {
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
  mem.write8(0x0000, 0x3A)
  mem.write8(0x0001, 0x52)
  mem.write8(0x0002, 0x99)
  mem.write8(0x9952, 0x28)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2800)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 3b', () => {
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
  cpu.sp = 0x9D36
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x3B)

  while (cpu.pc !== 0x1) {
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
  expect(cpu.sp).toEqual(0x9D35)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 3c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCF00
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
  mem.write8(0x0000, 0x3C)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD090)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 3d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xEA00
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
  mem.write8(0x0000, 0x3D)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE9AA)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 3e', () => {
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
  mem.write8(0x0000, 0x3E)
  mem.write8(0x0001, 0xD6)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD600)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 3f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x005B
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
  mem.write8(0x0000, 0x3F)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0050)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 4a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x4A)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF90)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 4b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x4B)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCFD8)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 4c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x4C)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCFA1)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 4d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x4D)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF69)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 4e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x4E)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF50)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 4f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x4F)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF02)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 5a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x5A)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x9090)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 5b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x5B)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 5c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x5C)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90A1)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 5d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x5D)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x9069)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 5e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x5E)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x9050)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 5f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x5F)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x9002)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 6a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x6A)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA190)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 6b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x6B)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA1D8)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 6c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x6C)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA1A1)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 6d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x6D)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 6e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x6E)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA150)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 6f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x6F)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA102)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 7a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x7A)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9000)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 7b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x7B)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD800)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 7c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x7C)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA100)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 7d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x7D)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6900)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 7e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x7E)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5000)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 7f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0200
  cpu.r1.bc = 0xCF98
  cpu.r1.de = 0x90D8
  cpu.r1.hl = 0xA169
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x7F)
  mem.write8(0xA169, 0x50)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0200)
  expect(cpu.r1.bc).toEqual(0xCF98)
  expect(cpu.r1.de).toEqual(0x90D8)
  expect(cpu.r1.hl).toEqual(0xA169)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 8a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x8A)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1501)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 8b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x8B)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0211)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 8c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x8C)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD191)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 8d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x8D)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x9B89)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 8e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x8E)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3E29)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 8f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x8F)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEAA9)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 9a', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x9A)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD582)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 9b', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x9B)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE8BA)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 9c', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x9C)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x191A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 9d', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x9D)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4F1A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 9e', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x9E)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xACBA)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test 9f', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0x9F)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0042)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA0)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0514)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA1)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3130)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA2)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2030)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA3)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0514)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA4)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD494)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA5)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA4B0)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA6)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4114)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA7)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF5B4)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA8)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFAAC)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test a9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xA9)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xCE88)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test aa', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xAA)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xD580)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ab', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xAB)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF8A8)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ac', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xAC)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x2928)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ad', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xAD)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5304)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ae', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xAE)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xBCA8)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test af', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xAF)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0044)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b0', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB0)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFFAC)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB1)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFFAC)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB2)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF5A4)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB3)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFDA8)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b4', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB4)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFDA8)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB5)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF7A0)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB6)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xFDA8)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b7', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB7)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF5A4)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b8', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB8)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF59A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test b9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xB9)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF5BA)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ba', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xBA)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF5A2)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test bb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xBB)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF59A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test bc', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xBC)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF51A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test bd', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xBD)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF532)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test be', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xBE)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF59A)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test bf', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xF500
  cpu.r1.bc = 0x0F3B
  cpu.r1.de = 0x200D
  cpu.r1.hl = 0xDCA6
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xBF)
  mem.write8(0xDCA6, 0x49)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xF562)
  expect(cpu.r1.bc).toEqual(0x0F3B)
  expect(cpu.r1.de).toEqual(0x200D)
  expect(cpu.r1.hl).toEqual(0xDCA6)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c0_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c0_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x00D8
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00D8)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c1', () => {
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
  cpu.sp = 0x4143
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC1)
  mem.write8(0x4143, 0xCE)
  mem.write8(0x4144, 0xE8)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0xE8CE)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x4145)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c2_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xC2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c2_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x00C7
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
  mem.write8(0x0000, 0xC2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00C7)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c3', () => {
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
  mem.write8(0x0000, 0xC3)
  mem.write8(0x0001, 0xED)
  mem.write8(0x0002, 0x7C)

  while (cpu.pc !== 0x31981) {
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c4_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c4_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x004E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x004E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x53E3
  cpu.r1.bc = 0x1459
  cpu.r1.de = 0x775F
  cpu.r1.hl = 0x1A2F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xEC12
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC5)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x53E3)
  expect(cpu.r1.bc).toEqual(0x1459)
  expect(cpu.r1.de).toEqual(0x775F)
  expect(cpu.r1.hl).toEqual(0x1A2F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xEC10)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xCA00
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
  mem.write8(0x0000, 0xC6)
  mem.write8(0x0001, 0x6F)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x3939)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c7', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xC7)

  while (cpu.pc !== 0x0) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c8_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c8_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x00D8
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00D8)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test c9', () => {
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
  cpu.sp = 0x887E
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xC9)
  mem.write8(0x887E, 0x36)
  mem.write8(0x887F, 0x11)

  while (cpu.pc !== 0x4406) {
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
  expect(cpu.sp).toEqual(0x8880)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ca_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xCA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ca_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x00C7
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
  mem.write8(0x0000, 0xCA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x00C7)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test cc_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x004E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xCC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x004E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test cc_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xCC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test cd', () => {
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
  cpu.sp = 0xB07D
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xCD)
  mem.write8(0x0001, 0x5D)
  mem.write8(0x0002, 0x3A)

  while (cpu.pc !== 0x14941) {
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
  expect(cpu.sp).toEqual(0xB07B)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ce', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x60F5
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
  mem.write8(0x0000, 0xCE)
  mem.write8(0x0001, 0xB2)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x1301)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test cf', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xCF)

  while (cpu.pc !== 0x8) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d0_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d0_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0099
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0099)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d1', () => {
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
  cpu.sp = 0x4143
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD1)
  mem.write8(0x4143, 0xCE)
  mem.write8(0x4144, 0xE8)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0xE8CE)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x4145)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d2_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0086
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
  mem.write8(0x0000, 0xD2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0086)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d2_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xD2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d3_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA200
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
  mem.write8(0x0000, 0xD3)
  mem.write8(0x0001, 0xED)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA200)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d3_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4200
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
  mem.write8(0x0000, 0xD3)
  mem.write8(0x0001, 0xEC)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4200)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d3_3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4200
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
  mem.write8(0x0000, 0xD3)
  mem.write8(0x0001, 0xED)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4200)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xA200
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
  mem.write8(0x0000, 0xD3)
  mem.write8(0x0001, 0xEC)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA200)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d4_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d4_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000F
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000F)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x53E3
  cpu.r1.bc = 0x1459
  cpu.r1.de = 0x775F
  cpu.r1.hl = 0x1A2F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xEC12
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD5)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x53E3)
  expect(cpu.r1.bc).toEqual(0x1459)
  expect(cpu.r1.de).toEqual(0x775F)
  expect(cpu.r1.hl).toEqual(0x1A2F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xEC10)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3900
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
  mem.write8(0x0000, 0xD6)
  mem.write8(0x0001, 0xDF)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x5A1B)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d7', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xD7)

  while (cpu.pc !== 0x16) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d8_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d8_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0099
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0099)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test d9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x4D94
  cpu.r1.bc = 0xE07A
  cpu.r1.de = 0xE35B
  cpu.r1.hl = 0x9D64
  cpu.r2.af = 0x1A64
  cpu.r2.bc = 0xC930
  cpu.r2.de = 0x3D01
  cpu.r2.hl = 0x7D02
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xD9)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4D94)
  expect(cpu.r1.bc).toEqual(0xC930)
  expect(cpu.r1.de).toEqual(0x3D01)
  expect(cpu.r1.hl).toEqual(0x7D02)
  expect(cpu.r2.af).toEqual(0x1A64)
  expect(cpu.r2.bc).toEqual(0xE07A)
  expect(cpu.r2.de).toEqual(0xE35B)
  expect(cpu.r2.hl).toEqual(0x9D64)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test da_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xDA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test da_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0086
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
  mem.write8(0x0000, 0xDA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0086)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test db_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC100
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
  mem.write8(0x0000, 0xDB)
  mem.write8(0x0001, 0xE3)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC100)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test db_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7100
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
  mem.write8(0x0000, 0xDB)
  mem.write8(0x0001, 0xE2)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7100)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test db_3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7100
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
  mem.write8(0x0000, 0xDB)
  mem.write8(0x0001, 0xE3)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x7100)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test db', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xC100
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
  mem.write8(0x0000, 0xDB)
  mem.write8(0x0001, 0xE2)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xC100)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test dc_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000F
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000F)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test dc_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xDC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test de', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0xE78D
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
  mem.write8(0x0000, 0xDE)
  mem.write8(0x0001, 0xA1)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4502)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test df', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xDF)

  while (cpu.pc !== 0x24) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e0_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e0_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x009C
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x009C)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e1', () => {
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
  cpu.sp = 0x4143
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE1)
  mem.write8(0x4143, 0xCE)
  mem.write8(0x4144, 0xE8)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xE8CE)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x4145)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e2_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0083
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
  mem.write8(0x0000, 0xE2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0083)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e2_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xE2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e3', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x4D22
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0373
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE3)
  mem.write8(0x0373, 0x8E)
  mem.write8(0x0374, 0xE1)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xE18E)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0373)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e4_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000A
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000A)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e4_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x53E3
  cpu.r1.bc = 0x1459
  cpu.r1.de = 0x775F
  cpu.r1.hl = 0x1A2F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xEC12
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE5)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x53E3)
  expect(cpu.r1.bc).toEqual(0x1459)
  expect(cpu.r1.de).toEqual(0x775F)
  expect(cpu.r1.hl).toEqual(0x1A2F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xEC10)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x7500
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
  mem.write8(0x0000, 0xE6)
  mem.write8(0x0001, 0x49)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x4114)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e7', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xE7)

  while (cpu.pc !== 0x32) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e8_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e8_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x009C
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x009C)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test e9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0xCABA
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xE9)

  while (cpu.pc !== 0x51898) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xCABA)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ea_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xEA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ea_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0083
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
  mem.write8(0x0000, 0xEA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0083)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test eb', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0xB879
  cpu.r1.hl = 0x942E
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xEB)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x942E)
  expect(cpu.r1.hl).toEqual(0xB879)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x0000)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ec_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xEC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ec_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000A
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xEC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000A)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ee', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x3E00
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
  mem.write8(0x0000, 0xEE)
  mem.write8(0x0001, 0xD0)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xEEAC)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ef', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xEF)

  while (cpu.pc !== 0x40) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f0_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0018
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0018)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f0_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF0)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f1', () => {
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
  cpu.sp = 0x4143
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF1)
  mem.write8(0x4143, 0xCE)
  mem.write8(0x4144, 0xE8)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xE8CE)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x4145)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f2_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0007
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
  mem.write8(0x0000, 0xF2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0007)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f2_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xF2)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f3', () => {
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
  mem.write8(0x0000, 0xF3)

  while (cpu.pc !== 0x1) {
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f4_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f4_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x008E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF4)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x008E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f5', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x53E3
  cpu.r1.bc = 0x1459
  cpu.r1.de = 0x775F
  cpu.r1.hl = 0x1A2F
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0xEC12
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF5)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x53E3)
  expect(cpu.r1.bc).toEqual(0x1459)
  expect(cpu.r1.de).toEqual(0x775F)
  expect(cpu.r1.hl).toEqual(0x1A2F)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xEC10)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f6', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0600
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
  mem.write8(0x0000, 0xF6)
  mem.write8(0x0001, 0xA7)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0xA7A0)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f7', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xF7)

  while (cpu.pc !== 0x48) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f8_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0018
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0018)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F7)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f8_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0098
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x43F7
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF8)
  mem.write8(0x43F7, 0xE9)
  mem.write8(0x43F8, 0xAF)

  while (cpu.pc !== 0x45033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0098)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x43F9)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test f9', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0000
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0xCE32
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x0000
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xF9)

  while (cpu.pc !== 0x1) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0000)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0xCE32)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0xCE32)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test fa_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0087
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
  mem.write8(0x0000, 0xFA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x57627) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0087)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test fa_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x0007
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
  mem.write8(0x0000, 0xFA)
  mem.write8(0x0001, 0x1B)
  mem.write8(0x0002, 0xE1)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x0007)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test fb', () => {
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
  mem.write8(0x0000, 0xFB)

  while (cpu.pc !== 0x1) {
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test fc_1', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x008E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x40033) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x008E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5696)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test fc_2', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x000E
  cpu.r1.bc = 0x0000
  cpu.r1.de = 0x0000
  cpu.r1.hl = 0x0000
  cpu.r2.af = 0x0000
  cpu.r2.bc = 0x0000
  cpu.r2.de = 0x0000
  cpu.r2.hl = 0x0000
  cpu.r1.ix = 0x0000
  cpu.r1.iy = 0x0000
  cpu.sp = 0x5698
  cpu.pc = 0x0000
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x0000, 0xFC)
  mem.write8(0x0001, 0x61)
  mem.write8(0x0002, 0x9C)

  while (cpu.pc !== 0x3) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x000E)
  expect(cpu.r1.bc).toEqual(0x0000)
  expect(cpu.r1.de).toEqual(0x0000)
  expect(cpu.r1.hl).toEqual(0x0000)
  expect(cpu.r2.af).toEqual(0x0000)
  expect(cpu.r2.bc).toEqual(0x0000)
  expect(cpu.r2.de).toEqual(0x0000)
  expect(cpu.r2.hl).toEqual(0x0000)
  expect(cpu.r1.ix).toEqual(0x0000)
  expect(cpu.r1.iy).toEqual(0x0000)
  expect(cpu.sp).toEqual(0x5698)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test fe', () => {
  let mem = new Memory()
  let cpu = new Z80(mem)
  cpu.r1.af = 0x6900
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
  mem.write8(0x0000, 0xFE)
  mem.write8(0x0001, 0x82)

  while (cpu.pc !== 0x2) {
    cpu.execInstruction()
  }
  
  expect(cpu.r1.af).toEqual(0x6987)
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
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

test('Test ff', () => {
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
  cpu.sp = 0x5507
  cpu.pc = 0x6D33
  cpu.i = 0x00
  cpu.r = 0x00
  mem.write8(0x6D33, 0xFF)

  while (cpu.pc !== 0x56) {
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
  expect(cpu.sp).toEqual(0x5505)
  expect(cpu.r).toEqual(0x01)
  expect(cpu.i).toEqual(0x00)
})

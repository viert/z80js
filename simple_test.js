const Z80 = require('./src/z80')
const Memory = require('./src/memory')

let mem = new Memory()
let cpu = new Z80(mem, true)
cpu.r1.af = 0x0f82
cpu.r1.bc = 0x3198
cpu.r1.de = 0x87e3
cpu.r1.hl = 0x7c1c
cpu.r2.af = 0x0000
cpu.r2.bc = 0x0000
cpu.r2.de = 0x0000
cpu.r2.hl = 0x0000
cpu.r1.ix = 0x1bb4
cpu.r1.iy = 0xeb1a
cpu.sp = 0x0000
cpu.pc = 0x0000
cpu.i = 0x00
cpu.r = 0x00
mem.write8(0x0000, 0xfd)
mem.write8(0x0001, 0x2a)
mem.write8(0x0002, 0x91)
mem.write8(0x0003, 0xf9)
mem.write8(0xf991, 0x92)
mem.write8(0xf992, 0xbf)

while (cpu.pc !== 0x0004) {
  console.log(cpu.disassemble())
  cpu.execInstruction()
}
cpu.dump()

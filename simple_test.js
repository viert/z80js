const Z80 = require('./src/z80')
const Memory = require('./src/memory')

let mem = new Memory()
let cpu = new Z80(mem, true)
cpu.r1.af = 0x0000
cpu.r1.bc = 0x0000
cpu.r1.de = 0x0000
cpu.r1.hl = 0x0000
cpu.r2.af = 0x0000
cpu.r2.bc = 0x0000
cpu.r2.de = 0x0000
cpu.r2.hl = 0x0000
cpu.r1.ix = 0xca81
cpu.r1.iy = 0x92b9
cpu.sp = 0x0000
cpu.pc = 0x00
cpu.i = 0x00
cpu.r = 0x00
mem.write8(0x0000, 0x16)
mem.write8(0x0001, 0x12)

while (cpu.pc !== 0x0002) {
  cpu.execInstruction()
}
cpu.dump()

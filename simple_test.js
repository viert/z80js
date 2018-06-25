const Z80 = require('./src/z80')
const Memory = require('./src/memory')

let mem = new Memory()
let cpu = new Z80(mem, true)
cpu.r1.af = 0x0200
cpu.r1.bc = 0xcf98
cpu.r1.de = 0x90d8
cpu.r1.hl = 0xa169
cpu.r2.af = 0x0000
cpu.r2.bc = 0x0000
cpu.r2.de = 0x0000
cpu.r2.hl = 0x0000
cpu.r1.ix = 0x0000
cpu.r1.iy = 0x0000
cpu.sp = 0x0000
cpu.pc = 0x0000
cpu.i = 0x00
cpu.r = 0x00
mem.write8(0x0000, 0x4e)
mem.write8(0xa169, 0x50)

console.log('INITIAL')
cpu.dump()
console.log('')

while (cpu.tStates < 4) {
  console.log(cpu.disassemble().dasm)
  cpu.execute()
  cpu.dump()
}

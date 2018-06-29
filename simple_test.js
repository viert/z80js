const Z80 = require('./dist/z80bundle')
const Memory = require('./src/memory')
const { FakePort } = require('./src/port')

let mem = new Memory()
let io = new FakePort()
let cpu = new Z80(mem, io, true)
cpu.r1.af = 0xff00
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
mem.write8(0x0000, 0xcb)
mem.write8(0x0001, 0x7f)

console.log('INITIAL')
cpu.dump()
console.log('')

while (cpu.tStates < 8) {
  console.log(cpu.disassemble().dasm)
  cpu.execute()
  cpu.dump()
}

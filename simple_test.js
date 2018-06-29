const Z80 = require('./dist/z80bundle')
const Memory = require('./src/memory')
const { FakePort } = require('./src/port')

let mem = new Memory()
let io = new FakePort()
let cpu = new Z80(mem, io, true)
cpu.r1.af = 0xac80
cpu.r1.bc = 0x0f0e
cpu.r1.de = 0x72c8
cpu.r1.hl = 0x1f2a
cpu.r2.af = 0x0000
cpu.r2.bc = 0x0000
cpu.r2.de = 0x0000
cpu.r2.hl = 0x0000
cpu.r1.ix = 0x5195
cpu.r1.iy = 0x7d8a
cpu.sp = 0x0000
cpu.pc = 0x0000
cpu.i = 0x00
cpu.r = 0x00
mem.write8(0x0000, 0xdd)
mem.write8(0x0001, 0x29)

console.log('INITIAL')
cpu.dump()
console.log('')

while (cpu.tStates < 15) {
  console.log(cpu.disassemble().dasm)
  cpu.execute()
  cpu.dump()
}

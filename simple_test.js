const Z80 = require('./dist/z80bundle')
const Memory = require('./src/memory')
const { FakePort } = require('./src/port')

let mem = new Memory()
let io = new FakePort()
let cpu = new Z80(mem, io, true)
cpu.r1.af = 0x4efa
cpu.r1.bc = 0xd085
cpu.r1.de = 0x5bac
cpu.r1.hl = 0xe364
cpu.r2.af = 0x0000
cpu.r2.bc = 0x0000
cpu.r2.de = 0x0000
cpu.r2.hl = 0x0000
cpu.r1.ix = 0xb5b5
cpu.r1.iy = 0xfe3a
cpu.sp = 0x0000
cpu.pc = 0x0000
cpu.i = 0x00
cpu.r = 0x00
mem.write8(0x0000, 0xdd)
mem.write8(0x0001, 0x86)
mem.write8(0x0002, 0xc1)
mem.write8(0xb576, 0x5b)

console.log('INITIAL')
cpu.dump()
console.log('')

while (cpu.tStates < 19) {
  console.log(cpu.disassemble().dasm)
  cpu.execute()
  cpu.dump()
}

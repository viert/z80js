# z80js

z80js is a Javascript Z80 disassembler and program debugger.

It's highly inspired by libz80 C library by Gabriel Gambetta but apart from my complete Go port
https://github.com/viert/z80 this one is done from scratch with more accurate timings, smarter
code generation and designed to pass well-known z80 fuse tests (included).

All officially documented Z80 instructions http://www.zilog.com/manage_directlink.php?filepath=docs/z80/um0080&extn=.pdf are implemented and passing tests.

z80js is designed to work in browsers and being developed to become a part of http://t.z80online.net online Z80 assembler/debugger

### Building

- `git clone`
- `npm i` to install dependencies
- `npm run build` to build dist/z80bundle.js

### Using the library

z80bundle exports Z80 class which can be instantiated like `let cpu = new Z80(mem, port, debug)`

`mem` has to be a memory instance with methods `read8(addr)` and `write8(addr, value)` reading and writing data
from/to memory correspondingly. An example memory class can be found in `src/memory.js` and is absolutely ready to go
memory class used in tests.

`port` is an I/O device instance capable to read and write data from/to devices. Must have `ioread(port)` and `iowrite(port, data)` methods. An example class can be found in `src/port.js` however this one simulates a single device responding with
data being passed via the high byte of a port, i.e. if you read from a port 0xFE34, it will return FE. This is basically how fuse tests are testing port instructions.

`debug` is a boolean to switch the debug mode on and off. In debug mode the library logs a lot of debug data during running commands.

After creating a cpu instance just run `cpu.execute()` - this will run a single cpu instruction located where PC register points.

`cpu.disassemble(addr)` disassembles an instruction by address `addr`. If no argument is given, the next instruction is being disassembled (i.e. addr equals cpu's PC register). For convenience `disassemble` method returns an object with fields
`dasm` containing the disassembled code string and `nextAddr` for you to know what the address of the following instruction is.

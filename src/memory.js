class Memory {
  constructor() {
    let buf = new ArrayBuffer(65536)
    this.data = new Uint8Array(buf)
  }

  read8(addr) {
    if (addr > 65535) {
      addr = addr % 65536
    }
    return this.data[addr]
  }
  write8(addr, val) {
    if (addr > 65535) {
      addr = addr % 65536
    }
    this.data[addr] = val
  }
}

module.exports = Memory

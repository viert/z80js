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
  read16(addr) {
    return this.read8(addr) + (this.read8(addr + 1) << 8)
  }

  write8(addr, val) {
    if (addr > 65535) {
      addr = addr % 65536
    }
    this.data[addr] = val
  }

  write16(addr, val) {
    let high = (val & 0xff00) >> 8
    let low = val & 0xff
    this.write8(addr, low)
    this.write8(addr + 1, high)
  }
}

module.exports = Memory

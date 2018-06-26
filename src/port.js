const { unsigned8 } = require('./utils')

class FakePort {
  read(addr) {
    return unsigned8(addr >> 8)
  }

  write(addr, value) {
    return
  }
}

module.exports = {
  FakePort: FakePort
}

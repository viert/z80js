const _convertBuffer = new ArrayBuffer(2)
const _ui8 = new Uint8Array(_convertBuffer)
const _i8 = new Int8Array(_convertBuffer)
const _ui16 = new Uint16Array(_convertBuffer)

const unot8 = (val) => {
  _ui8[0] = ~val
  return _ui8[0]
}

const unsigned8 = (val) => {
  _ui8[0] = val
  return _ui8[0]
}

const signed8 = (val) => {
  _i8[0] = val
  return _i8[0]
}

const unsigned16 = (val) => {
  _ui16[0] = val
  return _ui16[0]
}

const usum8 = (val1, val2) => {
  _ui8[0] = val1
  _ui8[0] += val2
  return _ui8[0]
}

const hex = (val, len) => {
  val = val.toString(16).toUpperCase()
  while (val.length < len) {
    val = '0' + val
  }
  return val
}

const hex8 = (val) => hex(val, 2)
const hex16 = (val) => hex(val, 4)

module.exports = {
  unot8: unot8,
  unsigned8: unsigned8,
  signed8: signed8,
  unsigned16: unsigned16,
  hex8: hex8,
  hex16: hex16,
  usum8: usum8
}

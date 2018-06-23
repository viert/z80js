let args = process.argv
if (args.length < 3) {
  console.error('Usage: microtest <testname>')
} else {
  let testName = 'Test ' + args[args.length - 1]
  global.test = function(name, func) {
    if (name === testName) {
      func()
    }
  }
  global.expect = function() {
    return { toEqual: function() {} }
  }

  require('./__tests__/main.js')
}

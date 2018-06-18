const NotImplemented = function(error) {
  if (!(this instanceof NotImplemented)) {
    return new NotImplemented(error)
  }
  this.error = error
}

module.exports = {
  NotImplemented: NotImplemented
}

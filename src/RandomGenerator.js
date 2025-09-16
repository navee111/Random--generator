class randomGenerator {
  constructor () {
    this.passwordGenerator = new passwordGenerator ()

  }
  generatePassword (length, options) {
    return this.passwordGenerator.generatorSecure(length, options)
  }
  // latter: To do add generateName.
}
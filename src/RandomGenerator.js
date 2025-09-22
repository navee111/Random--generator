import passwordGenerator from './passwordGenerator.js'
import NameGenerator from './NameGenerator.js'


class randomGenerator {
  constructor () {
    this.passwordGenerator = new passwordGenerator ()
    this.nameGenerator = new NameGenerator()
    
  }
  generatePassword (length, options) {
    return this.passwordGenerator.generateSecure(length, options)
  }
  validatePasswordStrength (password) {
    return this.passwordGenerator.validatePasswordStrength(password)
  }
  // Name generation methods
  generateName (type = 'full', gender = 'any') {
    if (type === 'first') return this.nameGenerator.generateFirstName(gender)
    if (type === 'last') return this.nameGenerator.generateLastName()
      return this.nameGenerator.generateFullName(gender)
  }
  generateUsername (style = 'modern', maxLength = 15) {
    return this.nameGenerator.generateUsername(style, maxLength)
  }
  generateBusinessName (industry = 'general') {
    return this.nameGenerator.generateBusinessName(industry)
  }
}
export default randomGenerator
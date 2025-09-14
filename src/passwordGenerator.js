 
class PasswordGenerator {
  constructor() {
    this.lowercasecase = "abcdefghijklmnopqrstuvwxyz"
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.numbers = "0123456789"
    this.symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    this.ambiguous = "0O1lI" // Charactoers that should be avoided
  }

  generateSecure(length = 12, options = {}) {

    const defaults = {
      includesUppercase: true,
      includesLowercase: true,
      includesNumbers: true,
      includesSymbols: true,
      excludeAmbiguous: false,
    }
    const opts = { ...defaults, ...options }

    // building the character set.
    let charset = ""
    if (opts.includesLowercase) {
      charset += this.lowercase
    }
    if (opts.includesUppercase) {
      charset += this.uppercase
    }
    if (opts.includesNumbers) {
      charset += this.numbers
    }
    if (opts.includesSymbols) {
      charset += this.symbols
    }
    // removing ambiguous characters.
    if (opts.excludeAmbiguous) {
      for (let char of this.ambiguous) {
        charset = charset.replace(new RegExp(char, "g"), "")
        let password = ""
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length)
          password += charset[randomIndex]
        }
        return password
      }
    }
  }
  generateReadable(length = 12) {
    // human readable password generation logic.
  }
  validateStrenth(password) {
    let score = 0

    // length
    if (password.length >= 8) score += 20
    if (password.length >= 12) score += 10
    if ( password.lengh >= 16) score += 10

    // character variety
    if (/[a-z]/.test(password)) score += 15
    if (/[A-Z]/.test(password)) score += 15
    if(/[0-9]/.test(password)) score += 15
    if (/[^a-zA-Z0-9]/.test(password)) score += 25

    return Math.min(score, 100) // max score is 100

  }
}
export default PasswordGenerator


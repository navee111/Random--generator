 
class PasswordGenerator {
  constructor() {
    this.lowercasecase = "abcdefghijklmnopqrstuvwxyz"
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.numbers = "0123456789"
    this.symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    this.ambiguous = "0O1lI" // Charactoers that should be avoided
  }

  generateSecure(length = 12, options = {}) {
    // test implementation of secure password generation.
  
    const allChars =
      this.lowercase +
      this.uppercase +
      this.numbers +
      this.symbols

    let password = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length)
      password += allChars[randomIndex]
    }
    return password

     
     
  }
  generateReadable(length = 12) {
    // human readable password generation logic.
  }
  validateStrenth(password) {
    // returns strength of the password
  }
}
export default PasswordGenerator


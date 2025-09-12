class PasswordGenerator {

  constructor() {
    this.lowercasecase = 'abcdefghijklmnopqrstuvwxyz'
    this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.numbers = '0123456789'
    this.symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    this.ambiguous = '0O1lI' // Charactoers that should be avoided
  }

  generateSecure(length = 12, options = {}) {
     // main password generation logic.
  }
  generateReadable(lenght =12) {
   // human readable password generation logic.
  }
  validateStrenth(password){
  // returns strength of the password


  }
} 


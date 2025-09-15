 
class PasswordGenerator {
  constructor() {
    this.lowercase = "abcdefghijklmnopqrstuvwxyz"
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.numbers = "0123456789"
    this.symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    this.ambiguous = "0O1lI" // Characters that should be avoided.
  }
generateSecure(length = 12, options = {}) {
  const defaults = {
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeAmbiguous: false
  }
  
  const opts = { ...defaults, ...options }
  
  // Build character set based on options.
  let charset = ''
  if (opts.includeLowercase) charset += this.lowercase
  if (opts.includeUppercase) charset += this.uppercase
  if (opts.includeNumbers) charset += this.numbers
  if (opts.includeSymbols) charset += this.symbols
  
  // Remove ambiguous characters if requested.
  if (opts.excludeAmbiguous) {
    const ambiguous = '0O1lI'
    for (let char of ambiguous) {
      charset = charset.replace(new RegExp(char, 'g'), '')
    }
  }
  
  
  if (charset === '') {
    charset = this.lowercase // fallback
  }
  
  // Generate password
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }
  
  return password
}
  
  generateReadable(length = 12) {
    // human readable password generation logic.
  }

  validateStrength(password) {
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


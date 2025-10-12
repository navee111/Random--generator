/**
 * A robust password generator class that provides secure password generation
 * with customizable options and password strength validation.
 * 
 * @class PasswordGenerator
 * @example
 * const generator = new PasswordGenerator();
 * const password = generator.generateSecure(16, { excludeAmbiguous: true });
 * const strength = generator.validateStrength(password);
 */
class PasswordGenerator {
  /**
   * Creates an instance of PasswordGenerator.
   * Initializes character sets for password generation.
   * 
   * @constructor
   */
  constructor() {
    /** @type {string} Lowercase letters character set */
    this.lowercase = "abcdefghijklmnopqrstuvwxyz"
    /** @type {string} Uppercase letters character set */
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    /** @type {string} Numeric characters character set */
    this.numbers = "0123456789"
    /** @type {string} Special symbols character set */
    this.symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    /** @type {string} Ambiguous characters that should be avoided */
    this.ambiguous = "0O1lI" // Characters that should be avoided.
  }
/**
 * Generates a secure password with customizable character sets and options.
 * 
 * @param {number} [length=12] - The desired length of the password
 * @param {Object} [options={}] - Configuration options for password generation
 * @param {boolean} [options.includeUppercase=true] - Include uppercase letters (A-Z)
 * @param {boolean} [options.includeLowercase=true] - Include lowercase letters (a-z)
 * @param {boolean} [options.includeNumbers=true] - Include numeric digits (0-9)
 * @param {boolean} [options.includeSymbols=true] - Include special symbols (!@#$...)
 * @param {boolean} [options.excludeAmbiguous=false] - Exclude ambiguous characters (0, O, 1, l, I)
 * @returns {string} The generated secure password
 * @example
 * // Generate a 16-character password with all character types
 * const password = generator.generateSecure(16);
 * 
 * // Generate a password without symbols and ambiguous characters
 * const simplePassword = generator.generateSecure(12, {
 *   includeSymbols: false,
 *   excludeAmbiguous: true
 * });
 */
generateSecure(length = 12, options = {}) {
  const opts = this.#mergeOptions(options)
  let charset = this.#buildCharacterSet(opts)
  if (opts.excludeAmbiguous) {
    charset = this.#removeAmbiguousCharacters(charset)
  }
   return this.#generateFromCharset(charset, length)
}
  #mergeOptions(options) {
    const defaults = {
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
      excludeAmbiguous: false
    }
    return { ...defaults, ...options }
  }
  
  #buildCharacterSet(opts) {
    let charset = ''
    if (opts.includeLowercase) charset += this.lowercase
    if (opts.includeUppercase) charset += this.uppercase
    if (opts.includeNumbers) charset += this.numbers
    if (opts.includeSymbols) charset += this.symbols
    
    // Fallback if no character types selected
    if (charset === '') {
      throw new Error('at least one character type must be selected')
    }
    
    return charset
  }
  
  // Remove ambiguous characters if requested.
 #removeAmbiguousCharacters(charset) {
    let result = charset
    for (let char of this.ambiguous) {
      result = result.replace(new RegExp(char, 'g'), '')
    }
    return result
  }
  #generateFromCharset(charset, length) {
    let password = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      password += charset[randomIndex]
    }
    return password
  }
  
  /**
   * Generates a human-readable password using dictionary words and patterns.
   * This method is currently under development.
   * 
   * @param {number} [length=12] - The desired approximate length of the password
   * @returns {string|undefined} The generated readable password (implementation pending)
   * @todo Complete the implementation of readable password generation
   * @example
   * const readablePassword = generator.generateReadable(12);
   */
  generateReadable(length = 12) {
    // human readable password generation logic.
  }

  /**
   * Validates the strength of a given password and returns a numerical score.
   * The scoring system evaluates length and character variety.
   * 
   * @param {string} password - The password to validate
   * @returns {number} Password strength score (0-100)
   * @example
   * const score = generator.validateStrength('MyP@ssw0rd123');
   * if (score >= 80) {
   *   console.log('Strong password');
   * } else if (score >= 60) {
   *   console.log('Medium strength password');
   * } else {
   *   console.log('Weak password');
   * }
   * 
   * @description
   * Scoring breakdown:
   * - Length 8+: +20 points
   * - Length 12+: +10 additional points  
   * - Length 16+: +10 additional points
   * - Lowercase letters: +15 points
   * - Uppercase letters: +15 points
   * - Numbers: +15 points
   * - Special characters: +25 points
   * Maximum score: 100 points
   */
  validateStrength(password) {
    let score = 0

    score += this.#calculateLengthScore(password.length)
    score += this.#calculateVarietyScore(password)

    return Math.min(score, 100)
  }
  #calculateLengthScore(length) {
    let score = 0
    if (length >= 8) score += 20
    if (length >= 12) score += 10
    if (length >= 16) score += 10
    return score

  }
  #calculateVarietyScore(password) {
    let score = 0 
    if (/[a-z]/.test(password)) score += 15
    if (/[A-Z]/.test(password)) score += 15
    if (/[0-9]/.test(password)) score += 15
    if (/[^A-Za-z0-9]/.test(password)) score += 25
    return score
  }
}
 export default PasswordGenerator
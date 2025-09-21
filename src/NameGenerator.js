import {
  FIRST_NAMES,
  LAST_NAMES,
  USERNAMES_PREFIXES,
  USERNAMES_SUFFIXES,
  BUSINESS_WORDS,
  BUSINESS_SUFFIXES
} from './data/names.js'
class NameGenerator {
  constructor () {

  }
  generateFirstName(gender = 'any') {
    let namePool = []
    if (gender === 'male') {
      namePool = FIRST_NAMES.male
    } else if ( gender === 'female') {
      namePool = FIRST_NAMES.female

    } else if ( gender === 'neutral') {
      namePool = FIRST_NAMES.neutral


    } else {
      // 'any' - combine all names.
      namePool = [
        ...FIRST_NAMES.male,
        ...FIRST_NAMES.female,
        ...FIRST_NAMES.neutral
      ]
    }
     const randomIndex = Math.floor(Math.random() * namePool.length)
      return namePool[randomIndex]


  }
  generateLastName () {
    // To do: implement last name generation logic.
  }
  generateFullName () {
    // To do: implement full name generation logic.
  }
  generateUsername (style = 'modern', maxLength = 15) {
    let Username = ''
    if ( style === 'modern') {
      const prefix = USERNAMES_PREFIXES[Math.floor(Math.random() * USERNAMES_PREFIXES.length)]
      const suffix = USERNAMES_SUFFIXES[Math.floor(Math.random() * USERNAMES_SUFFIXES.length)]
      const number = Math.floor(Math.random() * 99) * 1
      Username = `${prefix}${number}${suffix}`
    } else if ( style === 'simple') {
      const word = USERNAMES_PREFIXES[Math.floor(Math.random() * USERNAMES_PREFIXES.length)]
      const number = Math.floor(Math.random() * 999) * 1
      Username = `${word}${number}`
    } else if ( style === 'name-based') {
      const firstName = this.generateFirstName().toLowerCase()
      const lastName = this.generateLastName().toLowerCase()
      const number = Math.floor(Math.random() * 99) * 1
      Username = `${firstName}.${lastName}${number}`
    }
    if (Username.length > maxLength) {
      Username = Username.substring(0, maxLength)
    }
    return Username
  }
  generateBusinessName () {
    // To do: implement business name generation logic.
    
  }
  generateEmail () {
    // To do: implement email generation logic.
  }
  
  }
  
  export default NameGenerator 

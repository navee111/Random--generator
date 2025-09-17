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
  generateUsername () {
    // To do: implement username generation logic.
  }
  generateBusinessName () {
    // To do: implement business name generation logic.
    
  }
  generateEmail () {
    // To do: implement email generation logic.
  }
  
  }
  
  export default NameGenerator 

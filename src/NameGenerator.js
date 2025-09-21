import {
  FIRST_NAMES,
  LAST_NAMES,
  USERNAME_PREFIXES,
  USERNAME_SUFFIXES,
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
  const randomIndex = Math.floor(Math.random() * LAST_NAMES.length)
  return LAST_NAMES[randomIndex]
}
  generateFullName () {
    const firstName = this.generateFirstName()
    const lastName = this.generateLastName()
    return `${firstName} ${lastName}`
  }
  generateUsername (style = 'modern', maxLength = 15) {
    let Username = ''
    if ( style === 'modern') {
      const prefix = USERNAME_PREFIXES[Math.floor(Math.random() * USERNAME_PREFIXES.length)]
      const suffix = USERNAME_SUFFIXES[Math.floor(Math.random() * USERNAME_SUFFIXES.length)]
      const number = Math.floor(Math.random() * 99) * 1
      Username = `${prefix}${number}${suffix}`
    } else if ( style === 'simple') {
      const word = USERNAME_PREFIXES[Math.floor(Math.random() * USERNAME_PREFIXES.length)]
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
  generateBusinessName ( industry = 'general') {
     //console.log('BUSINESS_WORDS:', BUSINESS_WORDS)
    //console.log('industry parameter:', industry)
    let wordPool = []

    if ( industry === 'tech') {
      wordPool = BUSINESS_WORDS.tech
    } else if ( industry === 'creative') {
      wordPool = BUSINESS_WORDS.creative
    } else if ( industry === 'business') {
      wordPool = BUSINESS_WORDS.business
    } else {
      // 'general' - combine all words.
      wordPool = [
        ...BUSINESS_WORDS.tech,
        ...BUSINESS_WORDS.creative,
        ...BUSINESS_WORDS.business
      ]
    }
    //console.log('wordPool:', wordPool)
  //console.log('wordPool length:', wordPool.length)

    const word = wordPool[Math.floor(Math.random() * wordPool.length)]
    console.log('selected word:', word)
      const suffix = BUSINESS_SUFFIXES[Math.floor(Math.random() * BUSINESS_SUFFIXES.length)]    
    return `${word} ${suffix}`
  }
  generateEmail () {
    // To do: implement email generation logic.
    }
  }
  
  export default NameGenerator

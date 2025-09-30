// test-app/test.js
import PasswordGenerator from '../src/passwordGenerator.js'
import NameGenerator from '../src/NameGenerator.js'
import RandomGenerator from '../src/RandomGenerator.js'

 /*describe('passwordGenerator', () => {
  // const passGen = new PasswordGenerator() // Removed duplicate declaration
test('generates password of correct length', () => {
    for (let i = 0; i < 10; i++) {
      const pwd = passGen.generateSecure(12)
      console.log(pwd)
      expect(typeof pwd).toBe('string')
      expect(pwd.length).toBe(12)
    }
})
describe('NameGenerator', () => {
  const nameGen = new NameGenerator()
  
  test('generates full names', () => {
    for (let i = 0; i < 5; i++) {
      const fullName = nameGen.generateFullName()
      console.log(fullName)
      expect(typeof fullName).toBe('string')
      expect(fullName.split(' ').length).toBe(2)
    }
  })
}) */


const passGen = new PasswordGenerator()
const nameGen = new NameGenerator()
const generator = new RandomGenerator()

console.log('Testing Password Generator:')
for (let i = 0; i < 10; i++) {
  console.log(passGen.generateSecure(12))
}

console.log('\nTesting Password Strength:')
const testPasswords = ['123456', 'password123', passGen.generateSecure(16)]
testPasswords.forEach(pwd => {
  console.log(`"${pwd}" = strength: ${passGen.validateStrength(pwd)}/100`)

})

console.log('\nTesting password options:')
console.log('numbers only:', passGen.generateSecure(8,{
  includeUppercase: false,
  includeLowercase: false,
  includeSymbols: false
}))

console.log('no symbols:', passGen.generateSecure (12,{
  includeSymbols: false

}))
console.log('latters only:', passGen.generateSecure(12,({
  includeNumbers: false,
  includeSymbols: false

})))
console.log('no ambiguous:', passGen.generateSecure(12,{
  excludeAmbiguous: true
}))
console.log ('\nTesting Name Generator:')
console.log ('first names:')
console.log ('Male:', nameGen.generateFirstName('male'))
console.log ('Female:', nameGen.generateFirstName('female'))
console.log ('Neutral:', nameGen.generateFirstName('neutral'))
console.log ('Any:', nameGen.generateFullName())

console.log ('\nFull Names:')
for (let i = 0; i < 5; i++) {
  console.log (nameGen.generateFullName())
}
console.log ('\nUsernames:')
console.log ('Modern:', nameGen.generateUsername('modern'))
console.log ('Simple:', nameGen.generateUsername('simple'))
console.log ('Name-based:', nameGen.generateUsername('name-based'))

console.log ('\nBusiness Names:')
console.log ('Tech:', nameGen.generateBusinessName('tech'))
console.log ('Creative:', nameGen.generateBusinessName('creative'))
console.log ('General:', nameGen.generateBusinessName('general'))

function testPasswordGeneration() {
  console.log('Testing Password Generator:')
  // existing tests
}try {
  console.log('Password:', generator.generatePassword(12))
} catch (error) {
  console.error('Error:', error.message)
}console.log('\n=== MAIN INTERFACE TESTS ===')
console.log('Password:', generator.generatePassword(12))
console.log('Name:', generator.generateName())
console.log('Username:', generator.generateUsername())
console.log('Business:', generator.generateBusinessName('tech'))
//})

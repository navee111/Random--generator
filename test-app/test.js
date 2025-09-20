// test-app/test.js
import PasswordGenerator from '../src/passwordGenerator.js'
import NameGenerator from '../src/NameGenerator.js'

const passGen = new PasswordGenerator()
const nameGen = new NameGenerator()

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

console.log ('\Full Names:')
for (let i = 0; i < 5; i++) {
  console.log (nameGen.generateFullName())
}
// To do: add more tests for last names, usernames, business names, etc.



// test-app/test.js
import PasswordGenerator from '../src/passwordGenerator.js'

const passGen = new PasswordGenerator()

console.log('Testing Password Generator:')
for (let i = 0; i < 10; i++) {
  console.log(passGen.generateSecure(12))
}

console.log('\nTesting Password Strength:')
const testPasswords = ['123456', 'password123', passGen.generateSecure(16)]
testPasswords.forEach(pwd => {
  console.log(`"${pwd}" = strength: ${passGen.validateStrenth(pwd)}/100`)

})

console.log('\nTesting password options:')
console.log('numbers only:', passGen.generatorSecure(8,{
  includeUppercase: false,
  includeLowercase: false,
  includeSymbols: false
}))
// To Do: Add more tests for different options and edge cases.
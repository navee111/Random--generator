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

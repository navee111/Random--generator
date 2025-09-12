// test-app/test.js
import PasswordGenerator from '../src/passwordGenerator.js'

const passGen = new PasswordGenerator()

console.log('Testing Password Generator:')
for (let i = 0; i < 10; i++) {
  console.log(passGen.generateSecure(12))
}
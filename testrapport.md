**Test Report Random Generator Module**
**Testing Method** 
Manual testing:  using console ouput verication and visual inspection.
Automated testing : jest test framework. 
**Test Environment**
Node.js v23.7.0, ES6 modules, npm test script using jest. 

**Password Generate Test**

**What was tested**
Basic password generation. 
**How was tested**
generated 10 passwords with default settings (12 characters)
**Test result** 
**pass**: - All passwords were mixed. letters, numbers, and symbols.
**Example**. --> {
r!Y{8itEX>(6
>R|a-*&wN7eQ
BD&pO4IC-dIh ) }

**What was tested**
Password length control
**How was tested** 
Generated passwords of lengths 12, 16, and 24 characters. 
**Test result**
**pass**: - All passwords matched requested length. 
**Code Example** below
```js 
generateSecure(length = 12, options = {}) { 

}
``` 
**password example** --> uYH&?B<V}S56

**What was tested**
Numbers-only passwords, No symbols (letters and numbers), latters only
**How was tested**
set options to exclude uppercase, lowercase, and sybols.
set includeSymbols to fales
set includenumbers and includeSymbols to false.
**Test result**
**pass** generated as it expected
**Example** --> numbers only: 71407025, No symbols: pKXIUCa5a22z, latters only: XqIzULvOwZoI

**What was tested**
Exclud ambiguous characters
**How was tested**
set excludesAmbiguous to true
**Test result**
**pass** 
generated passwords without 0.O,1,I,l characters. 

**Password Strength Validations Test**
**What was tested**
Week password detection, Medium strength, Strong Password. 
**How was tested**
Tested "1,2,3,4,5,6" (Week)
Tested "Password123" (medium)
Tested "passGen.generateSecure(16)"
**Test result**
**pass**
**Example** below 
Testing Password Strength:
"123456" = strength: 15/100
"password123" = strength: 50/100
"Uz)V,@6?t6+Q(8oY" = strength: 100/100 

**What was tested**
Male, female, gender-netural, any gender, fullName. name generation
How was tested
Called generateFirstName('male'), called generateFirstName('female'), Called generateFirstName('any') or generateFirstName(), Called generateFullName
**Test result**
pass: Generated valid male names from dataset.
pass: Generted valid female names from dataset.
pass: Generated neutral names correctly.
pass: Returned names from the combined dataset.
pass: Generated realistic combinations of first + last names.
Example --> male "Anton", "David", "lukas"
Example --> female "Mary", "Lina", "Susan"
Example --> gender-natural "Tylor", "Jordan", "Morgan"
Example --> Any gender "Paul", "Jennifer", "Chris"
Example --> FullName "Paul Miller", "Linda Rodriguez", "Jennifer Williams"

**What was tested**
Name format consistency
How was tested
Checked all outputs for "FirstName LastName" pattern.
Test result
pass: All names followed correct formatting.

**Automated Jest Tests**
Password Generator:
generates password of correct length
Name Generator:
generates full names correctly
Summary: 2 automated tests passed, 0 failed.


**What was tested**
Name diversity
**How was tested**
Generated 5 different full names.
Test result
pass: No duplicates, good distribution.
**Example** --> "Robert Johnson", "Emily Davis", "James Brown"


**Overall Test Results**
Total Manual Test Cases: 25
Total Automated Test Cases: 2
Pass Rate: 100%
Test Environment Details: Node.js v23.7.0, ES6 modules, Jest 29.7.0

**Recommendations for Future Testing**
Implement more automated Jest tests for all generator functions.
Add statistical randomness tests for password and name generation.
Test edge cases like empty input, very long passwords, or invalid options.
# Reflection - Random Generator Module

## 1. Table Reflection – Naming (Chapter 2)

| **Name** | **Explanation** | **Reflection and Clean Code Rules** |
|-----------|------------------|-------------------------------------|
| `PasswordGenerator` | Main class for creating secure passwords. | **Rule – Class Names:** Should be a *noun* that describes what it represents. My name clearly shows what the class does. Example of a bad name: `PasswordMaker` (too informal). |
| `generateSecure()` | Method that creates strong passwords. | **Rule – Method Names:** Should be *verbs*. “generate” tells exactly what happens. It also follows **Intention-Revealing Names**, because the reader knows this creates a secure password. Example: `makePassword()` would be less professional. |
| `validateStrength()` | Checks how strong a password is and returns a score. | **Rule – Use Problem Domain Names:** The word “strength” is common in security and easy to understand. It avoids confusion, which follows **Avoid Disinformation**. Example of unclear name: `checkPower()`. |
| `generateBusinessName()` | Creates business names based on industry. | **Rule – Consistent Vocabulary:** I use “generate” in all creation functions (`generateFullName`, `generateUsername`, etc.), which follows **Use One Word per Concept**. This keeps the code consistent. |
| `maxLength` | A variable that sets the maximum length of usernames. | **Rule – Meaningful Names:** The name clearly explains its purpose. I could improve it by adding context in complex scopes, like `usernameMaxLength`. |



## 2. chapter reflection - naming ( chapter 2 )


This chapter taught me that **good naming is like writing readable documentation**.  
In my module, I focused on **clarity and consistency**. For example, I always start methods that create data with the word **“generate”** (`generateName`, `generatePassword`, `generateUsername`). 

I followed the rule **Use Intention-Revealing Names**, because my names show what the code does without reading the logic, and add comment to explain it.  
I also used **Avoid Disinformation** by not adding words that confuse readers. For example, I avoided names like `NameWizard` or `SuperGenerator` because they sounds like they are fun but they don’t really tells what the code does. 

Something I can improve is **adding context** for some internal variables. For example, instead of `namePool`, maybe its good to use `firstNamePool` and it would be much more specific.  
The main lesson is that **names are not only labels** – they communicate purpose and design decisions.



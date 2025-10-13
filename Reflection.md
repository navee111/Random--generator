# Reflection - Random Generator Module

## Chapter 2 – Naming

### Table of Public Interface Identifiers

| Name | Explanation | Reflection (Clean Code) |
|------|--------------|--------------------------|
| **PasswordGenerator** | Main class responsible for generating passwords | **Class Names** – Uses a clear noun describing what it represents. **Intention-Revealing** – Instantly communicates its role without guessing. |
| **generateSecure()** | Creates secure passwords with configurable options | **Method Names** – Verb form that describes an action. **Meaningful Distinction** – Clear difference from other generate methods like `generateBusinessName()`. |
| **validateStrength()** | Checks password strength and returns a score | **Problem Domain Names** – “Strength” is meaningful in the context of security. Avoids abstraction like `check()`. |
| **includeUppercase** | Boolean option to include uppercase letters | **Searchable** – Full, descriptive name with no abbreviations. Adds contextual meaning to password configuration. |
| **generateBusinessName()** | Generates business names based on industry type | **Verb + Context** – Clear action and purpose. Avoids ambiguity like `createName()` which could mean many things. |

---

## Chapter 2 Reflection – Naming

Good names act as self-documentation and reduce the need for comments.

### 1. Intention-Revealing Names
According to *Clean Code*, names should tell you **why something exists**, **what it does**, and **how it is used**.

For example:  
  `generateSecure(length, options)` clearly tells us that it generates a secure password.  
  A bad name like `gen(l, o)` hides meaning and forces readers to mentally decode its purpose.

---

### 2. Avoid Disinformation
Names should not mislead. I corrected one such case:

  `lowercasecase` -->   `includeLowercase`

This avoids confusion and keeps naming consistent with `includeUppercase`, maintaining one word per concept.

---

### 3. Consistency and Vocabulary
I use the verb **generate** consistently across methods (`generateSecure`, `generateUsername`, `generateBusinessName`).

This follows the *Clean Code* principle **“Pick one word per concept.”**

If I used both *generate* and *create*, it would imply two subtly different behaviors — which could mislead users.

---

### 4. Avoid Cute or Abstract Names
Names like `PasswordWizard` or `NameFactory` sound clever but add no clarity.

Instead, I use simple, professional, and descriptive names aligned with both the **solution domain** (software terms like charset, regex) and the **problem domain** (security, naming).

---

### 5. Example of Alternative Naming
Instead of `generateSecure()`, an alternative could be `generatePassword()` — but since there are multiple password-related methods, `generateSecure()` gives better context.

For `validateStrength()`, I could have chosen `assessPasswordQuality()` — but that’s less conventional in programming, so I kept `validateStrength()` to match industry vocabulary.

---

**Overall**, my naming now communicates intent clearly, avoids ambiguity, and aligns with *Clean Code* standards of readability and maintainability.

---

## Chapter 3 – Functions

### Longest Methods (Before Refactoring)

| Method | Lines | Reflection |
|---------|-------|-------------|
| **generateSecure()** | 18 | Did too many things — merging options, building charset, filtering characters, generating password. |
| **generateBusinessName()** | 16 | Combined selection logic and string building — could be separated. |
| **generateUsername()** | 15 | Contained multiple style branches — improved with helper methods. |
| **validateStrength()** | 14 | Focused and testable — a good example of single responsibility. |

---

### Komplettering: Refactoring of Long Methods

After feedback, I refactored my long methods into smaller, focused helper methods following the **“Do One Thing”** principle from *Clean Code*.

#### Example: Improvement of `generateSecure()`
Originally, this method had 18 lines and handled multiple tasks.  
Now it’s split into clear private methods:

- `#mergeOptions()` – handles only options merging  
- `#buildCharacterSet()` – builds the character set  
- `#removeAmbiguousCharacters()` – filters ambiguous characters  
- `#generateFromCharset()` – generates the final random string  

This aligns with Robert C. Martin’s definition:  
> “Functions should do one thing, do it well, and do it only.”

Each helper method is now **3–8 lines long** and has a single, well-defined responsibility.

---

### Use of Private Methods (#)
Using JavaScript’s `#` syntax encapsulates implementation details and hides internal logic from users.

This improves **encapsulation**, simplifies the **public interface**, and enforces **information hiding** — key ideas in *Clean Code* and object-oriented design.

---

### DRY Principle
I introduced a new helper method `#getRandomElement(array)` to remove repeated code used across several places.

This follows the **Don’t Repeat Yourself (DRY)** principle and improves maintainability.

---

## Chapter 3 Reflection – Functions

### 1. Small and Focused Functions
Before refactoring, several methods exceeded 15 lines.  
Now, each method performs a single action.

For example:
- `generateSecure()` now delegates sub-tasks to private helpers.
- `generateUsername()` now calls small helpers like `#generateModernUsername()` and `#truncateToMaxLength()`.

---

### 2. Few Arguments
Most methods are **monadic or dyadic (1–2 arguments)**.  
This makes them easier to test and use, in line with *Clean Code’s* recommendation to *“keep function signatures simple.”*

---

### 3. No Side Effects
All methods are **pure functions** — they don’t mutate external state or rely on hidden dependencies.  
This improves **testability and reliability**.

---

### 4. Command–Query Separation
Each method either performs an **action** or **returns a value** — never both.

Example:  
- `generateSecure()` --> returns a password *(query)*  
- `validateStrength()` --> analyzes a password *(query)*

None perform hidden actions, which follows the **CQS** principle.


# Step by Step Solution

`````javascript

const alphabetNumberOfCharacters = 26

export const isPangram = str => {

  if (!str) {
    return false
  }

  const strLetters = new Set(str.toLowerCase().match(/[a-z]/g))

  return strLetters.size === alphabetNumberOfCharacters

}
`````

* Define the number of characters in the alphabet and put in the global scope so we don't have to redefine it every time we run the function

* If string doesn't exist return false

* Declare a variable 'strLetters' that creates a 'new Set()'
  * 'new Set()' is an ES6 feature
    * It's an **abstract data type** which contains **only distinct** elements / objects without the *need of being allocated orderly by index*
  * str.toLowerCase()
    * lets you deal with uppercase characters
  * .match(/[a-z]/g))
    * regex to make sure what goes in the 'new Set' are just the characters of the alphabet

* .size
  * A accessor property that returns the number of (unique) elements in a Set object


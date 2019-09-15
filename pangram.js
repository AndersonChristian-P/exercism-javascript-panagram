const alphabetNumberOfCharacters = 26

export const isPangram = str => {

  if (!str) {
    return false
  }

  const strLetters = new Set(str.toLowerCase().match(/[a-z]/g))

  return strLetters.size === alphabetNumberOfCharacters ? true : false

};
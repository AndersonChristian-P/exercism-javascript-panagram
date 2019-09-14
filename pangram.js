let alphabetNumberOfCharacters = 26

export const isPangram = str => {

  if (!str) {
    return false
  }

  const strLetters = new Set(str.toLowerCase().match(/[a-z]/g))

  if (strLetters.size === alphabetNumberOfCharacters) {
    return true
  } else {
    return false
  }

};
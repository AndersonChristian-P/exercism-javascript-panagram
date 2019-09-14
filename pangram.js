import { arrowFunctionExpression } from "@babel/types";

export const isPangram = str => {
  let strToArr = str.split("")

  let arr2 = []

  for (let i = 0; i < strToArr.length; i++) {
    if (!arr2.includes(strToArr[i])) {
      arr2.push(strToArr[i])
    }
  }

  if (arr2.length === 26) {
    return true
  } else {
    return false
  }

};

// step 1 - define the alphabet
// step 2 - loop through the alphabet, if the letter does not exist in arr2 push it into arr2
// step 3 - if arr2 equals 26 return true

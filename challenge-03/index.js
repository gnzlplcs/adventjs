function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  if (letter.includes('[')||letter.includes(']')||letter.includes('{')||letter.includes('}')||letter.includes('()')) {
    return false
  } else if (letter.includes('(')&&!letter.includes(')')) {
    return false
  } else {
    if (letter.indexOf('(') > letter.indexOf(')')) {
      return false
    } else {
      return true
    }
  }

}

console.log(isValid("bici coche (balón bici coche"));
console.log(isValid("peluche (bici [coche) bici coche balón"));
console.log(isValid("(peluche {) bici"));
console.log(isValid("() bici"));
console.log(isValid("bici coche (balón) bici coche peluche"));
console.log(isValid("(muñeca) consola bici"));

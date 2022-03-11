const carta = "bici coche balón _playstation bici coche peluche";

// split array
const splitArr = (arr) => {
  let trimmed = arr.trim();
  let splitted = trimmed.split(' ');
  return splitted;
}

// filter bad gifts
const rightGifts = arr => arr.filter(el => !el.startsWith('_'));

// reducer function
const reducer = arr => arr.reduce((obj, item) => {
  !obj[item] ? obj[item] = 1 : obj[item] += 1;
  return obj;
}, {});

function listGifts(letter) {
  // ¡Tú puedes!
  let readyArr = splitArr(letter);
  let giftsArr = rightGifts(readyArr);
  let result = reducer(giftsArr);
  return result;
}

const regalos = listGifts(carta);

console.log(regalos);

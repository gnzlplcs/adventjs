const carta = 'bici coche balón _playstation bici coche peluche'

// function listGifts(letter) {
//   // ¡Tú puedes!
//   return {};
// }

// const regalos = listGifts(carta);

// console.log(regalos);

// split string and filter elements start with '_'
let arr = carta.split(' ');
let rightGifts = arr.filter(el => !el.startsWith('_'))

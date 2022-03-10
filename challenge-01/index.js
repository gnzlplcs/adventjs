const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

// función que filtra el key color
const isRed = el => el.color === 'rojo';

// función que filtra el key name
const filterName = el => {
  let name = el.name.toLowerCase();
  return name.includes('n') && name.includes('a') ? true : false;
}

// función principal
function contarOvejas(ovejas) {
  // aquí tu magia
  let redSheep = ovejas.filter(isRed);
  let sheep = redSheep.filter(filterName);
  return sheep;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const isRed = el => el.color === 'rojo';

let redSheep = ovejas.filter(isRed)

const filterName = el => {
  let name = el.name.toLowerCase();
  return name.includes('n') && name.includes('a') ? true : false;
}

let sheep = redSheep.filter(filterName)
console.log(sheep);
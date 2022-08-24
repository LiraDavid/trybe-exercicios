let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// exercise 1
console.log("Bem-vinda, " + info.personagem)


// exercise 2
info.recorrente = 'Sim'

console.log(info)


// exercise 3
for (let key in info) {
  console.log(key)
}


// exercise 4
for (let key in info) {
  console.log(info[key])
}

// exercise 5
// let info = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };


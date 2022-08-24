/*
var fatorial = 5;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);
*/

/*
let word = 'tryber';
let invercao = word.split("").reverse().join("")
console.log(invercao)
*/


let string = "tryber"
let resultado

for (let i = string.length-1; i > 0; i--) {
    resultado += string[i]
}

console.log(resultado)
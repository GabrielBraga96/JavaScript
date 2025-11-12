/*
    String - Textos
*/

const texto1 = "primeiro texto"
const texto2 = 'segundo texto'
const texto3 = `crase
pode
texto
quebrado` //template literals / template string

console.log(texto1)
console.log(texto2)
console.log(texto3)

//Numeros

const number1 = 32
const number2 = 15.57
const number3 = 2*2
const number4 = 4/2
const number5 = 3-1
const number6 = 1+1

//Boolean

true
false

//Objetos

const Gabriel = {
    name: "Gabriel",
    age: 28,
    address: {
        street: "Rua dos bobos",
        number: 9587,
        city: "Votorantim",
        state: "SP",
        country: "Brasil",
    }
}

Gabriel.address.country = "EUA"

//null & undefined

const user = {
    nome:"Gabriel",
    idade:"28",
    nomeDaConjuge: null
}

//array

const users = [
    {name: "Gabriel", age:"28"},
    {name: "Rafaelly", age:"18"},
]

users[1].name = "Aline"

console.log(users[1].name)
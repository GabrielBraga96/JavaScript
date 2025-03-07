/*  if = faça isso
    else = faça aquilo outro

    operadores de comparação
    >  maior que
    <  menor que
    == igual que
*/

const notaDoAluno = 3
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
    // o que executa caso for VERDADEIRO
    console.log("parabéns, voce passou de ano")
} else {
    // se for FALSO executa else
    console.log("voce foi reprovado")
}

const senhaDoUsuario = 1234567
const senhaDigitada = 1234567

if (senhaDoUsuario == senhaDigitada){
    console.log("seja bem-vindo, voce esta logado")
} else {
    console.log("senha incorreta")
}
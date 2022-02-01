// LET E VAR

//Let tem escopo de bloco{...bloco}
//Var só tem escopo de função

const verdadeira = true;
let nome = 'Marlon'; // criando
var nome2 = 'Porto'; // criando

if (verdadeira) {
    let nome = 'Marlon'; //criando
    var nome2 = 'rogério';//redeclarando

    if (verdadeira){
        var nome2 = 'Ronaldo';//redeclarando
        let nome = 'outra coisa';
    }
}
console.log(nome, nome2);
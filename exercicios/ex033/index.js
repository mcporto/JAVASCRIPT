const pessoa = {
    nome: 'Marlon',
    sobrenome: 'Porto',
    idade: 28,
    endereco: {
        rua: 'Av Brasil',
        numero: 320  
    }
};
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO DE OBJETOS
const { nome, sobrenome, idade, endereco:{rua,numero} } = pessoa;
console.log(nome, idade, rua,numero);
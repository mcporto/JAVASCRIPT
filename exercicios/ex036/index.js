const frutas = ['Pera', 'Maçã', 'Uva'];
// For IN -> lÊ os indices ou chaves do objeto
const pessoa = {
    nome: 'Marlon',
    sobrenome:'Porto',
    idade: 28
};
for (let chaves in pessoa){
    console.log(chaves,pessoa[chaves]);
}

/*for (let chaves in pessoa){
    console.log(chaves);
}*/


/*for (let i in frutas) {
    console.log(frutas[i]);
}*/







/*for (let i = 0; i < frutas.length; i++){
console.log(frutas[i]);
}*/
// i - index

/*for (
    let i = 0; 
    i <= 5; 
    i++ // pular de 10 em 10 (i += 10)
    ){
    console.log(`Linha ${i}`);
}
*/
//    3 passos para montar um (for)
//   variavel condição incremento
for (let i = 0; i <=10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i,par);
}

//-----------------------------------
// com arrays
const frutas = ['Maçã','Uva','Morango'];

for(let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}

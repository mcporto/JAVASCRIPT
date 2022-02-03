// ...rest(pega o resto)  ...spread(espaalha)

//desestruturação arrays
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres, resto);

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const numero = [
  //   0           1          2
//   0  1  2    0  1  2    0  1  2
    [1, 2, 3], [4 ,5 ,6], [7, 8, 9]
];
const [lista1, lista2, lista3] = numero;
console.log(lista2[0]);

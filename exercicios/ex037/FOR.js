//fixação (for)

// For classico - Geralmente com iteráveis(arrays ou strings)

// For in - Retorna o indice ou chave(string, array ou objetos)

// For of - Retorna o valor em si (iteraveis, arrays ou strings)

const nomes = ['Marlon', 'Cabral', 'Porto'];

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('######');

for (let i in nomes){
    console.log(nomes[i]);
}

console.log('######');

for (let valor of nomes){
    console.log(valor);
}

console.log('######');

nomes.forEach(function(valor,indice,array){
    console.log(valor, indice, array);
});
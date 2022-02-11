//EXERCICIOS LOGICA 1

function maiorNumero(x,y){
    // operação ternaria(bem simples o codigo)
    return x > y ? x : y;

    //classico
    /*if (x > y){
        return x;
    }else{
        return y;
    }*/

}

// com ARROW FUNCTION
const maiorNumero2 = (x,y) => x > y ? x : y;

console.log('O maior numero é:',maiorNumero2(5,6));
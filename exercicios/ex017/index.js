//FUNÇÕES

/*function saudacao(){
    console.log('Bom dia!');
}
saudacao();*/

/*function saudacao(nome){
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('Marlon');
console.log(variavel);*/

/*function soma(x=1,y=1){
    const resultado = x+y;
    return resultado;
}
const resultado = soma(4,2);
console.log(resultado);*/

//funçao dentro da variavel

//1modo
/*const raiz = function(n){
    return n**0.5;
};*/

//2modo
const raiz = n => n**0.5;

console.log(raiz(9));

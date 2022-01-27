/*
operadores logicos
&& -> AND -> E // todas as expressoes precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO //ex: (!false) estou negando que é falso. vai me retornar verdadeiro
*/
const usuario = 'Marlon';
const senha = '12345';
//                           true                false
const vaiLogar = usuario ==='Marlon' && senha=== '123456';
console.log(!false);
const nome='Marlon';
const sobrenome='Porto';
const idade= 28;
const peso= 105;
const altura= 1.81;
let imc= peso / (altura*altura);
let anoNasc= 2021 - idade;

console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg.');//posso separar as var por (,).

console.log('Tem '+altura+'m de altura, e seu imc é de '+imc+'.');//posso separar as var por (+).

console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}.`);
//posso separar as var por ${}.

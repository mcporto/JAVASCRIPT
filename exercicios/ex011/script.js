let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro numero:');

num1 = Number(num1);
num2 = Number(num2);

const soma = num1 + num2;

alert('A soma dos numeros é: '+ soma);/*ideal é fazer desse jeito criando uma variavel*/

/* posso fazer assim  tbm, sem criar variavel soma */
alert(`A soma dos numeros é: ${num1+num2}`);
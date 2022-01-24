/*
Operadores Aritméticos
+ - * /
% módulo
** potenciação
++ incremento
-- decremento

operadores de atribuição
+=
-=
*=
/=
**=
ex:*/
let contador = 2;
contador += 2;
contador += 2;
contador *= 2;
console.log(contador);
/* resultado 12  ..foi atribuindo o numero ao contador.*/

/*NaN Not a Number*/

let num1 = 10;
let num2 = Number('2');/*ParseInt(inteiros) ParseFloat(decimais) e Number(forma mais simples (reais))*/
console.log(num1 + num2);
console.log(typeof num2);
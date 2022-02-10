//while e do while
/*let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}*/

function random(min,max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

//while primeiro checa a condição
while (rand !== 10){
    rand = random(min,max);
    console.log(rand);
}
console.log('#########');

//do while primeiro executa o codigo e depois checa a condição
do{
    rand = random(min,max);
    console.log(rand);
} while(rand !== 10);
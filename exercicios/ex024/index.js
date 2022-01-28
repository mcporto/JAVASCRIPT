
//IF pode ser usado sozinho.

//Sempre que utilizo a palavra else, preciso de um if antes.

//Eu posso ter varios else ifs na checagem.

//Só posso ter um else na checagem

//Podemos usar condições sem else if, utilizalndo apenas if e else.

const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}
else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}
else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
}
else{
    console.log('Olá');
}
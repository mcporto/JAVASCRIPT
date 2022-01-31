// switch/case

const data = new Date('2022-02-4');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana){
    case 0:
    diaSemanaTexto = 'Domingo';
    break;// para parar nessa opção caso bata com nesse caso. senao vai embora direto.
    case 1:
    diaSemanaTexto = 'Segunda';
    break;
    case 2:
    diaSemanaTexto = 'Terça';
    break;
    case 3:
    diaSemanaTexto = 'Quarta';
    break;
    case 4:
    diaSemanaTexto = 'Quinta';
    break;
    case 5:
    diaSemanaTexto = 'Sexta';
    break;
    case 6:
    diaSemanaTexto = 'Sabado';
    break;
    default:// Seria tipo um else(senao)
        diaSemanaTexto = '';
        break;
}
console.log(diaSemana,diaSemanaTexto);
//operação ternaria -  ((?) valor p/true and (:) valor p/ false)

/*if (pontuacaoUsuario >= 1000) {
    console.log('Usuario vip');
}else {
    console.log('Usuario normal');
}*/

// Posso substituir os if elses por (? :) como no exemplo abaixo

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

console.log(nivelUsuario);
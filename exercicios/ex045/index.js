try {
    //É EXECUTADA QUANDO NAO HÁ ERROS
} catch(e){
    // É EXECUTADA QUANDO HÁ ERROS
} finally{
    // SEMPRE EXECUTADO
}

/*------------------*/
function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratar erro
    // console.log(e);
}finally {
    console.log('Tenha um bom dia.');
}
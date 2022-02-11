//EXERCICIOS LOGICA 2

const ePaisagem = (largura, altura) =>{
    if (largura > altura){
        return ('Paisagem')
    }else{
        return ('Retrato')};
};

const ePaisagem2 = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem2(720,1080)); 
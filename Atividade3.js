const Listadepecas = ['pecas de teste','AB','peca B'];
const pesodapecaemgramas = 50;
console.log ('quantidade de caracteres');
if (Listadepecas.legth <= 10){
    console.log('as peças pode ser casatradas');
}
console.log('quantidade de caracteres')
for (let index = 0; index < Listadepecas.legth; index++){
    const pecaatual = Listadepecas[index];
    if (pecaatual.legth < 3){
        console.log(pecaatual + 'a peça possui nome inferior a 3 caracteres e não pode ser resgistrada');
    }
    else {
        console.log(pecaatual = ':a peça pode ser cadastrada');
    }
}
console.log (pesodapecaemgramas + ' peso da peça')
if (pesodapecaemgramas >=100){
    console.log('peso suficiente');
}
else {
    console.log('valor insuficiente');
}

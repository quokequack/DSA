
const lista = [1,2,3,4,5,6];
const alvo = 10;

let esquerda = lista[0];
let direita = lista.length - 1;

while(esquerda < direita){
    const soma = lista[esquerda] + lista[direita];
    if(soma === alvo){
        console.log(lista[esquerda], lista[direita]);
        break;
    } else if(soma < alvo){
        console.log("Foi pra direita");
        esquerda++;
    } else if(soma > alvo){
        console.log("Foi pra esquerda");
        direita--;
    }
}

let steps = 0;

function binarySearch(arr: number[], alvo: number): number {
    let left = 0;
    let right = arr.length - 1;


    while(left <= right){
        steps++;
        const middle = Math.floor((left + right) / 2);

        if(arr[middle] === alvo){
            return middle;
        }

        if (arr[middle] < alvo) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}


const numeros = [1, 3, 5, 7, 9, 11, 13];
const resultado = binarySearch(numeros, 7);
if(resultado === -1){
    console.log("Não encontrado");
} else {
    console.log("Resultado: '" + resultado + "' em " + steps + " passo(s).");
}

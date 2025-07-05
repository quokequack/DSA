function diagonalDifference(arr: number[][]): number {
    
    const tamanhoArray: number = arr.length;
    let somaDiagonal1: number = 0;
    let somaDiagonal2: number = 0;
    
    for(let i: number = 0; i < arr.length; i++){
        somaDiagonal1 += arr[i][i];
        somaDiagonal2 += arr[i][tamanhoArray - 1 - i];
    }
    
    let diferenca = somaDiagonal1 - somaDiagonal2;
    return Math.abs(diferenca);
}

const array = [[1,4,5],[3,7,8],[4,6,29]];
console.log(diagonalDifference(array));
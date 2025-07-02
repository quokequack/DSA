

function binarySearch(array: number[], target: number){
    let right = array.length - 1;
    let left = 0;

    while(left <= right){
        const middle = Math.floor((left + right) / 2);
        if(array[middle] === target){
            return middle; 
        }

        if(array[middle] < target){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}


function exponencialSearch(array: number[], target: number): number {

    if(array[0] == target){
        return 0;
    }
    
    let bound = 1;

    while(bound < array.length && array[bound] < target){
        bound *= 2;
    }

    if(array[bound] == target){
        console.log(`verificando se ${array[bound]} é igual a ${target}`);
        return bound;
    }

    const left = Math.floor(bound / 2);
    const right = Math.min(bound, array.length - 1);
    
    const indexInSubarray = binarySearch(array.slice(left, right + 1), target);
    
    if (indexInSubarray === -1) return -1;

    return left + indexInSubarray;
}

const array = [1,2,3,5,6,7,4,12,8,9,13,10,11,14,18,16,17,15];
array.sort(function(a, b){
    return a - b;
});

console.log("Encontrou o elemento no índice: " + exponencialSearch(array, 7));
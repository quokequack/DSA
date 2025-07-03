

function maxSum(numbers: number[], window: number): number {

    let pointer = 0;
    let maxSum = 0;
    let windowSum = 0;

    while(pointer < window){
        windowSum += numbers[pointer];
        pointer++;
    }

    maxSum = windowSum;

    const firstWindow = numbers.slice(0, window);
    console.log(`Window: [${firstWindow.join(', ')}] → Soma: ${windowSum}`);

    for(pointer = window; pointer < numbers.length; pointer++){
        const windowItems = numbers.slice(pointer - window + 1, pointer + 1);

        console.log(`Window: [${windowItems.join(', ')}] → Soma: ${windowSum}`);

        windowSum += numbers[pointer] - numbers[pointer - window];
        if(windowSum > maxSum){
            maxSum = windowSum;
        }
    }
    return maxSum;
}

const array: number[] = [2, 1, 5, 1, 3, 2];

console.log(maxSum(array, 2));


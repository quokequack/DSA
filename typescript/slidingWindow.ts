
function maxSumSubarray(array: number[], k: number): number {
    if(array.length < k) return -1;

    let maxSum = 0;
    let windowSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += array[i];
    }
    maxSum = windowSum;

    for(let i = k; i < array.length; i++){
        windowSum += array[i] - array[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));

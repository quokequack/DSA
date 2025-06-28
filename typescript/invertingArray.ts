const numbers = [1,3,5,6,8,2];

let left = 0;
let right = numbers.length - 1;

while(left < right){
    const temporary = numbers[left];
    numbers[left] = numbers[right];
    numbers[right] = temporary;
    left++;
    right--;
}

console.log(numbers);
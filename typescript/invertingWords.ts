
const phrase = "Happy Together is Wong Kar Wai's best movie";

const words = phrase.split(" ");
let left = 0;
let right = words.length - 1;

while(left < right){
    let temporary = words[left];
    words[left] = words[right];
    words[right] = temporary;

    left++;
    right--;
}

console.log(words.join(" "));
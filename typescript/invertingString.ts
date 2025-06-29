const phrase = "Happy Together is Wong Kar Wai's best movie";

const chars = phrase.split("");
let left = 0;
let right = chars.length - 1;

while (left < right){
    let temporary = chars[left];
    chars[left] = chars[right];
    chars[right] = temporary;

    left++;
    right--;
}

console.log(chars.join(""))

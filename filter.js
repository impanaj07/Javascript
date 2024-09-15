let numbers = [1,2,3,4,5,6,7];
let evenNums=numbers.filter(isEven);
let oddNums= numbers.filter(isOdd);
console.log(evenNums);
function isEven(element){
    return element % 2===0;
}
function isOdd(element){
    return element % 2 !== 0;
}

//example two
const age = [16,17,18,18,19,20,60];
const adults =age.filter(isAdult);
const children =age.filter(isChild);
console.log(adults);
function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}
//example 3
const words =["apple","orange","banana","kiwi","pomegranate","coconut"];
const shortWords=words.filter(getShortWords);
console.log(shortWords);
function getShortWords(element){
    return element.length <= 6;
}
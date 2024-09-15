let numbers = [1,2,3,4,5];
numbers.forEach(double);
function double(element,index,array){
    array[index]= element*2;
}
let fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(capitalize);
fruits.forEach(upperCase);
fruits.forEach(display);
function display(element){
    console.log(element);
}
function upperCase(element,index,array){
    array[index]=element.toUpperCase();
}
function lowerCase(element,index,array){
    array[index]=element.toLowerCase();
}
function capitalize(element, index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
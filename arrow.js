const hello =(name,age) =>{console.log(`Hello ${name}`)
console.log(`you are ${age} years old`)};
//method 1 using callback
setTimeout(hello,3000);
function hello(){
    console.log("Hello");
}
//method2 function exp
setTimeout(function (){
    console.log("Hello");
},3000);
//method3 using arrow
setTimeout(() => console.log("Hello"),3000);
//() defines parameters

//using arrow functions for map filter and reduce
const numbers =[1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element,2));
const cubes =numbers.map((element)=>Math.pow(element,3));
const evenNums=numbers.filter((element)=>element % 2===0);
const oddNums=numbers.filter((element)=>element %2 !==0);
const total=numbers.reduce((accumulator,element)=>accumulator+element);
console.log(squares);
console.log(cubes);
//(parameters)=> code 
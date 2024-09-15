const prices= [5,30,10,25,15,20];
const total =prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);
function sum(accumulator,element){
    return accumulator+element;
}//the value returned becomes the value of the accumulator

const grades=[75,50,90,80,65,95];
const maximum=grades.reduce(getMax);
console.log(maximum);
function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
}
//example
const numbers =[1,2,3,4,5,6];
const squares = numbers.map(function (element){
    return Math.pow(element,2);
});
console.log(squares);
const cubes =numbers.map(function(element){
    return Math.pow(element,3)
});
console.log(cubes);
    const evenNumbs=numbers.filter(function(element){
        return element %2 ===0;
    });
    const oddNums=numbers.filter(function(element){
        return element % 2!==0;
    });
    const totals = numbers.reduce(function(accumulator,element){
        return accumulator+element;
    })


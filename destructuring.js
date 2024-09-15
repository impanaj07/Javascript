//eg1
let a =1;
let b=5;
[a,b]=[b,a];
console.log(a);
console.log(b);
//eg2
const colors=["red","green","blue","black","white"];
[colors[0],colors[4]]=[colors[4],colors[0]];
console.log(colors);
//eg3 Assign array elements to variables
const [firstColor,secondColor,thirdColor, ...extraColors]=colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
//eg4 Extract values from objects 
const person1 ={
    firstName:"Spongebob",
    lastName:"SquarePants",
    age:30,
    job:"Fry cook",
}
const person2={
    firstName:"Patrick",
    lastName:"Star",
    age:34,
}
const {firstName,lastName,age,job}=person1
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); 

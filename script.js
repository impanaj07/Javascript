//-->   BASICS
//printing something to the console we use console.log method
console.log('Hello World');
//we use the window.allert to display a allert message
window.alert('This is an alert')
//this is used to change the text content of the html element 
document.getElementById("myH1").textContent="Hello";



//-->VARIABLE
let x;
x =200;
console.log(x);
let age=21;
let price=10.99;
let gpa=9.85;
let firstName="Impana";
let favoriteFood="pizza";
//string can also contain numbers
console.log(typeof firstName)
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
//boolean
let online=true;
console.log(`i am online : ${online}`);
let forSale=true;
let isStudent=true;
console.log(`Is this car for sale: ${forSale}`);
document.getElementById("p1").textContent=`your name is ${firstName}`;
document.getElementById("p2").textContent=age;
document.getElementById("p3").textContent=isStudent;
//operators
let student =30;
// student=student+1;
// student=student-1;
// student=student*2;
// student=student/2;
//exponent operator
student=student**2;
let extraStudent=student % 3;
console.log(student);
//increment or decrement
student++;
student--;
//operator precedance
/* 1.parenthesis()
2.exponents
3.multiplication divison and modulo
4.addition and subtraction*/
let username;
document.getElementById("mySubmit").onclick=function()
{
 username=document.getElementById("myText").value;
 document.getElementById("myH1").textContent=`Hello ${username}`

}
let agee=25;
let hasLicense=false;
if(agee>= 18)
{
console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("you do not have your license yet")
    }
}
else{
    console.log("You must be 18+ to enter this site")
}



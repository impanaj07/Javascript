const person1 ={
    firstName:"SpongeBob",
    lastName:"Squarepants",
    age:30,
    isEmployed:true,
    sayHello:function(){
        console.log("Hi I am Spongebob")
    },
    eat:function(){
        console.log("I am eating a krabby patty")
    },
}
const person2 ={
    firstName:"Patrick",
    lastName:"Star",
    age:42,
    isEmployed:false,
    sayHello:function(){
        console.log("Hi I am Patrick")
    },
    eat:() =>console.log("i am eating chicken"),
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

//example
const persoon={
    name: "Spongebob",
    favFood :"hamburgers",
    sayHello: function(){
        console.log(`hi! I am ${this.name}`)
    }
}
persoon.sayHello();
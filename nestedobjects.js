const person={
fullName:"Sponge Squarepants",
age:30,
isStudent:true,
hobbies: ["karate","jellyfishing","cooking"],
address:{
    street:"124 conct st.",
    city:"BB",
    country:"Int.Water"
}
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.country);
for(const property in person.address){
    console.log(person.address[person])
}
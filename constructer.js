function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){console.log(`You drive the ${this.model}`)}
}
const car1 =new Car("Ford","Mustang",2024,"red");
const car2=new Car("Chevrolet","Camaro",2025,"blue");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

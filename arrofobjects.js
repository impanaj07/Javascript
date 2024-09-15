const fruits = [{name:"apple",color:"red",calories:95},//array of objects 
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:290}];
    console.log(fruits[0].name);
    fruits.push({name:"grapes",color:"purple",caloreis:"234"})
    //----------forEach()----------
    fruits.forEach(fruit=>console.log(fruit.color));
    //----------map()--------------
    //run each element in an array through a function and return in an array
    const fruitNames =fruits.map(fruit =>fruit.name);
    const fruitColors=fruits.map(fruit =>fruit.color);
    console.log(fruitNames);
    //---------filter()----------
    const yellowFruits=fruits.filter(fruit=> fruit.color==="yellow");
    console.log(yellowFruits);
    const lowCalFruits=fruits.filter(fruit =>fruit.calories >100);
    //----------reduce()----------
    const maxFruit=fruits.reduce((max,fruit)=>
         fruit.caloreis>max.caloreis?
    fruit :max);
    const minFruit=fruits.reduce((max,fruit)=>
        fruit.caloreis<max.caloreis?
   fruit :max);
    console.log(maxFruit);




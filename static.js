class MathUtil{
    static PI= 3.14159;
    static getDiameter(radius){
        return radius*2;
    }
    static getcircumferrence(radius){
        return 2*this.PI*radius;
}
static getArea(radius){
    return this.PI* radius *radius;
}
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(7));
//anything declared static belongs to the class itself
console.log(MathUtil.getcircumferrence(8));
console.log(MathUtil.getArea(7));
class User{
    
    static userCount = 0;

    constructor(username){
        this.username=username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount}`)
    }
    ssyHello(){
        console.log(`Hello,my username is ${this.username}`);
    }
}
const user1=new User("SpongeBob");
const user2=new User("Patrick");
const user3=new User("Sandy");
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(user1.userCount);
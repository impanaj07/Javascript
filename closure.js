function createGame(){
    let score =0;
    function increaseScore(points){
        score+= points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
}
return {increaseScore,decreaseScore,getScore}
}
const game =createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore}`);
//for securiy reasons we enclose all of this inside of a closure 
//inner function has access to the variables and scope of the outer function
//allow for private variables and state maintainance 
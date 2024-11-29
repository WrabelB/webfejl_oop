function Player(nickname){

    this.name = nickname;
    this.playedMatch = 0;

}
const gomszab = new Player('gomszab');
console.log(gomszab);

Player.prototype.play = function(){

    this.playedMatch ++;
    console.log(this.name + "has played");
}

Player.prototype.getTierLevel = function(){

    if(this.playedMatch <= 3)
    {
        return "A";
    }
    else if(this.playedMatch >= 3 && this.playedMatch <=6)
    {
        return "B";
    }
    else
    {
        return "C";
    }

    
}
console.log(getTierLevel());
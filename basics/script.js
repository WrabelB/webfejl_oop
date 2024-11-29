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




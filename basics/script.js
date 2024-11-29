/*function Player(nickname){

    this.name = nickname;
    this.playedMatch = 0;

}

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
console.log(getTierLevel());*/

class Players {
    constructor(nickname) {
        this.name = nickname;
        this.playedMatch = 0;
    }

    play(){
        this.playedMatch ++;
        console.log(this.name + "has played");
    }

    getTierLevel(){
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
}



const gomszab = new Players('gomszab');
console.log(gomszab);

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

function Person(name){

    this.name = name;

}

Person.prototype.getName = function(){

    return this.name;
}

function Student(name, school){
    
    this.school = school;
    Person.call(this, name);
}

Object.setPrototypeOf(Student.prototype, Person.prototype);


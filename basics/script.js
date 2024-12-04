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

class Person { 
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}


class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
}

const ember = new Person('József Kalman');
const tanulo = new Student('Futykos Bela', 'BMSZC Bolyai');
console.log(tanulo.name, tanulo.school);
ember.getName();

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    ilyenHangotAdKi() {
        console.log(`${this.name ? this.name : 'Az allat'} ilyen hangja van: ${this.voice}`);
    }
}

class Bird extends Animal {
    constructor(name, voice) {
        super(name, voice);
    }

    csinalVmit() {
        console.log(`${this.name ? this.name : 'A golya'} sokat repul.`);
    }
}

class Mammal extends Animal {
    constructor(name, voice) {
        super(name, voice);
    }

    megy() {
        console.log(`${this.name ? this.name : 'Emlosok'} altalaban a foldon jarnak`);
    }
}

const rigo = new Bird('Rigocska', 'füty füty füty füty');
const kutya = new Mammal('Hulk', 'VAU VAU');

rigo.makeSound();
rigo.fly();

kutya.makeSound();
kutya.walk();


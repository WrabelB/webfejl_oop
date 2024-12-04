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

/*HAZI INNENTOL, RENDESEN MEGOLDVA*/

class HaziPerson {
    constructor(name) {
        this.name = name;
    }
    nameGetter(){
        return this.name
    }
}

class HaziStudent extends HaziPerson{
    constructor(name, school){
        super(name)  //a super az os osztalynak a name-jere utal. Netrol van nezve.
        this.school = school;
    }
    schoolGetter(){ 
        return this.school;
    }
        
}

class Animal {  //Letrehozzuk az Os osztalyt, Allatok
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}

// Letrehozom a Bird osztalyt, feladathoz hiven


class Bird extends Animal { //Bird osztaly, orokli az Animal osztalyt
    constructor(name, sound) {
        super(name, sound);
    }
    fly() { //Function a Bird classon belul, kiirja hogy repul.
        console.log("Flying");
    }
}

// Letrehozom a Mammal osztalyt feladathoz hiven!

class Mammal extends Animal { //Mammal osztaly orokli az Animal osztaly tulajdonsagait
    constructor(name, sound) {
        super(name, sound);
    }
    walk() { //Function a Mammalon belul. Kiirja hogy setal
        console.log("Walking");
    }
}

// Feltoltjuk adattal, meghivjuk a class-ainkat. 

//Eloszor a Bird class-t. Mivel az van elol ezzel kezdem, de szerintem tokmindegy
const rigo = new Bird("Rigo","Csip csip");
// Johet a Mammal, kutya lett mar mas megint nem jutott eszembe, my bad. Majdnem balnat irtam, mert azt tudom hogy emlos, de rajottem az nem setal...
const kutya = new Mammal("Kutya","Vau Vau");



//Hala a csodas F12-nem, latjuk hogy mit dobnak vissza a kulonbozo ertekeink.
console.log(rigo);
// Kiirja hgy repul.
rigo.fly();
// Kiirja hogy csip csip
rigo.makeSound();

// Nemirom le megegyszer a fentit, ugyan az ervenyesul itt is!
console.log(kutya);

kutya.walk();

kutya.makeSound();

'use strict'

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    toEat(value){
        if (this.stomach.length < 10 && typeof value === 'string'){
            this.stomach.push(value);
        } else {
            return `${this.name} stomach is full or the given value is not enough.`
        }
    }
    poop(){
        this.stomach.length = 0;
    }
    toString(){
        return `${this.name}, ${this.age}`;
    }
}

class Baby extends Person{
    constructor(name, age, favToy){
        super(name, age);
        this.favToy = favToy;
    }
    play(){
        return `Playing with ${this.favToy}.`
    }
}

let baby = new Baby("Arman", 22, 'car');
console.log(baby.toEat("some food"));
console.log(baby.stomach);
console.log(baby.play());
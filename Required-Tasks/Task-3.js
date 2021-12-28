'use strict'

function Person(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.toEat = function(value){
        if (this.stomach.length < 10 && typeof value === 'string'){
            this.stomach.push(value);
        } else {
            return `${this.name} stomach is full or the given value is not enough.`
        }
    }
    this.poop = function(){
        this.stomach.length = 0;
    }
    this.toString = function(){
        return `${this.name}, ${this.age}`;
    }
}

let human = new Person('Arman', 22);

console.log(human.toString());
console.log(human.stomach);
for (let i=0; i<15; i++){
    human.toEat('some food');
};
console.log(human.stomach);
console.log(human.poop());
console.log(human.stomach);
'use strict'

// Create functions for the Calculator class that can do the following:
// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

class calculator{
    constructor(){}
    add(...args){
        return args.reduce((a,b)=>{return a+b});
    }
    substract(...args){
        return args.reduce((a,b)=>{return a-b});
    }
    multiplY(...args){
        return args.reduce((a,b)=>{return a*b});
    }
    devide(...args){
        return args.reduce((a,b)=>{return a/b});
    }
}

let calc = new calculator();

console.log(calc.add(10, 5));
console.log(calc.substract(10, 5));
console.log(calc.multiplY(10, 5));
console.log(calc.devide(10, 5));
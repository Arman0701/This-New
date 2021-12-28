'use strict'

function Car(model, MPG){
    this.model = model;
    this.MPG = MPG;
    this.tank = 0;
    this.odometer = 0;
    this.fill = function(gallons){
        this.tank += gallons;
    }
    this.drive = function(distance){
        this.odometer += distance;
        this.tank -= distance * MPG;
        if (this.tank === 0) return `I ran out of fuel at ${this.odometer} miles!`;
    }
}

let car1 = new Car('Bmw', 5);
console.log(car1.fill(1000));
console.log(car1.tank);
console.log(car1.odometer);
console.log(car1.drive(100));
console.log(car1.tank);
console.log(car1.odometer);
console.log(car1.drive(100));
console.log(car1.tank);
console.log(car1.odometer);
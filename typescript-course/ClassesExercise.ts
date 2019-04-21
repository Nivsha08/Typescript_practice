// Exercise 1 - How was your TypeScript Class?
class Car {
    private name: string;
    private acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }
 
    getName = (): string => this.name;
    getAcceleration = (): number => this.acceleration;

    honk = (): void => {
        console.log("Toooooooooot!");
    };
 
    accelerate = (speed: number) : void => {
        this.acceleration += speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.getName());
car.accelerate(10);
console.log(car.getAcceleration());
 
// Exercise 2 - Two objects, based on each other ...
class Shape {
    public width: number = 0;
    public length: number = 0;
}

class Rectangle extends Shape {
    calcSize = (): number => {
        return this.width * this. length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 12;

console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = ""

    get firstName() {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value.length > 3 ? value : "";
    }
};

const person = new Person();

console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
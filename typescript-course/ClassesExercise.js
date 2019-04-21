"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        var _this = this;
        this.acceleration = 0;
        this.getName = function () { return _this.name; };
        this.getAcceleration = function () { return _this.acceleration; };
        this.honk = function () {
            console.log("Toooooooooot!");
        };
        this.accelerate = function (speed) {
            _this.acceleration += speed;
        };
        this.name = name;
    }
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.getName());
car.accelerate(10);
console.log(car.getAcceleration());
// Exercise 2 - Two objects, based on each other ...
var Shape = /** @class */ (function () {
    function Shape() {
        this.width = 0;
        this.length = 0;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calcSize = function () {
            return _this.width * _this.length;
        };
        return _this;
    }
    return Rectangle;
}(Shape));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 12;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.length > 3 ? value : "";
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
;
var person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);

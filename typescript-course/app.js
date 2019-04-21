"use strict";
// TYPESCRIPT TYPES MODULE
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
var Computer = /** @class */ (function () {
    function Computer() {
        var _this = this;
        this.lastResult = null;
        this.updateLastResult = function (result) {
            _this.lastResult = result;
        };
        this.multiply = function (x, y) {
            var result = x * y;
            _this.updateLastResult(result);
            return result;
        };
        this.add = function (x, y) {
            var result = x + y;
            _this.updateLastResult(result);
            return result;
        };
    }
    return Computer;
}());
var calculator = new Computer();
var userData = {
    name: "Niv",
    age: 25
};
var multiplier = {
    values: [1, 2, 3, 4, 5, 6],
    sumValues: function () {
        return this.values.reduce(function (total, num) { return total + num; }, 0);
    }
};
// ES6 CLASSES MODULE
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Sedan"] = 0] = "Sedan";
    VehicleType[VehicleType["Hatchback"] = 1] = "Hatchback";
    VehicleType[VehicleType["Van"] = 2] = "Van";
    VehicleType[VehicleType["Minivan"] = 3] = "Minivan";
    VehicleType[VehicleType["Truck"] = 4] = "Truck";
    VehicleType[VehicleType["Bike"] = 5] = "Bike";
})(VehicleType || (VehicleType = {}));
;
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Gray"] = 3] = "Gray";
    Color[Color["Black"] = 4] = "Black";
    Color[Color["White"] = 5] = "White";
    Color[Color["Silver"] = 6] = "Silver";
    Color[Color["Yellow"] = 7] = "Yellow";
})(Color || (Color = {}));
;
var MyCar = /** @class */ (function () {
    function MyCar(brand, type, color) {
        this.brand = brand;
        this.type = type;
        this.color = color;
    }
    return MyCar;
}());
var MazdaModels;
(function (MazdaModels) {
    MazdaModels[MazdaModels["Three"] = 0] = "Three";
    MazdaModels[MazdaModels["Six"] = 1] = "Six";
    MazdaModels[MazdaModels["Two"] = 2] = "Two";
    MazdaModels[MazdaModels["Lantis"] = 3] = "Lantis";
    MazdaModels[MazdaModels["SX5"] = 4] = "SX5";
    MazdaModels[MazdaModels["MX5"] = 5] = "MX5";
})(MazdaModels || (MazdaModels = {}));
var Mazda = /** @class */ (function (_super) {
    __extends(Mazda, _super);
    function Mazda(model, productionYear) {
        var _this = _super.call(this, "Mazda", VehicleType.Sedan, Color.Gray) || this;
        _this.model = model;
        _this.productionYear = productionYear;
        return _this;
    }
    return Mazda;
}(MyCar));
var myMyCar = new MyCar("Mazda", VehicleType.Sedan, Color.Gray);
console.log(myMyCar);
var myMazda = new Mazda(MazdaModels.Three, 2013);
console.log(myMazda);

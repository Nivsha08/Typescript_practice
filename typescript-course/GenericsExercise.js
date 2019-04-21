"use strict";
var MyMap = /** @class */ (function () {
    function MyMap() {
        var _this = this;
        this.map = {};
        this.setItem = function (key, item) {
            _this.map[key] = item;
        };
        this.getItem = function (key) {
            return _this.map[key] ? _this.map[key] : null;
        };
        this.clear = function () {
            _this.map = {};
        };
        this.printMap = function () {
            Object.keys(_this.map).forEach(function (key) {
                console.log(key + ": " + _this.map[key]);
            });
        };
    }
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();

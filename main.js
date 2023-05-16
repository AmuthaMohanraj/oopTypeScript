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
exports.__esModule = true;
var message = "hi welcome mohanr.ai";
console.log(message);
var a = 1234;
a = 1;
a = 'hai';
var b = 23;
b = 1.2;
b = 87777777777777777777;
var c = 'mohanraj';
var d = true;
d = false;
var e;
var f;
var g;
var arr = [1, 2, 3, 4, 5, 6];
var arrsrt = ['j', 'd'];
var multitype;
multitype = 1;
multitype = 'hai';
var object = {
    name: 'mohanraj',
    age: 21
};
console.log(object.name);
function fun(a, b) {
    return a + b;
}
function strinFun(a) {
    return a.toLowerCase();
}
function changeStringFun(a) {
    return a.toLowerCase();
}
console.log(changeStringFun('kjll'));
function optionalFunction(a, b) {
    return a.toLowerCase() + b;
}
console.log(optionalFunction('kjll', 'hkjkljkl'));
function optionalFunction2(a, b) {
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
console.log(optionalFunction('kjll'));
function defaultFunction(name) {
    if (name === void 0) { name = 'seshika'; }
    return name;
}
defaultFunction('seshika Arumugam');
function fun1(point) {
    return point.x + point.y;
}
var p = {
    x: 2,
    y: 4
};
console.log(fun1(p));
var p1 = {
    x: 21,
    y: 18,
    z: 4
};
function fun2(point) {
    return point.x + point.y;
}
console.log(fun2(p1));
var Greater = /** @class */ (function () {
    function Greater(message) {
        this.greeting = message;
    }
    Greater.prototype.greet = function () {
        return "hello" + this.greeting;
    };
    return Greater;
}());
var car = /** @class */ (function () {
    function car(engine) {
        console.log(this.engine = engine);
    }
    return car;
}());
var car1 = /** @class */ (function () {
    function car1(engine) {
        this.engine = engine;
        console.log(engine);
    }
    return car1;
}());
var myCar = new car("V8"); // Creating an object of the car class
var myCar1 = new car1("c1"); // Creating an object of the car class
var Car2 = /** @class */ (function () {
    function Car2(engine) {
        this.engine = engine;
    }
    Car2.prototype.start = function () {
        return "started" + this.engine;
    };
    Car2.prototype.stop = function () {
        return "stopped" + this.engine;
    };
    return Car2;
}());
var mycar2 = new Car2('honda');
//properties
var Car4 = /** @class */ (function () {
    function Car4(engine) {
        this.enginer = engine;
        console.log(this.enginer);
    }
    Object.defineProperty(Car4.prototype, "enginer", {
        get: function () {
            console.log('inside a get');
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'supply an engine!';
            this._engine = value;
            console.log('inside a set');
        },
        enumerable: true,
        configurable: true
    });
    return Car4;
}());
var u = new Car4('KN');
var v = new Car4('honda');
v.enginer = 'BMW';
//inhertence
var Engine = /** @class */ (function () {
    function Engine(type, hp) {
        this.type = type;
        this.hp = hp;
    }
    return Engine;
}());
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
var engobj = new Engine('vfx', 234);
var flights = /** @class */ (function () {
    function flights(engine) {
        this.engine = engine;
        this.engine = engine;
    }
    flights.prototype.start = function (message) {
        console.log(this.engine + message);
    };
    flights.prototype.intermediater = function (message) {
        console.log(this.engine + message);
    };
    flights.prototype.stop = function (message) {
        console.log(this.engine + message);
    };
    return flights;
}());
var h = new flights('jkjklj\t');
h.start('engine is started');
// h.intermediater('intermediater level');
h.stop('engine is stopped');

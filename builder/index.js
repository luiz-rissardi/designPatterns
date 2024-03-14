//desig pattern build => create a instance of objetcts step by step
var tshirtObjetcSymbol = Symbol();
var tshirtWithStampObjetcSymbol = Symbol();
var Tshirt = /** @class */ (function () {
    function Tshirt() {
        this[tshirtObjetcSymbol] = {};
    }
    Tshirt.prototype.addColor = function (color) {
        this[tshirtObjetcSymbol]["color"] = color;
        return this;
    };
    Tshirt.prototype.setSize = function (size) {
        if (size === void 0) { size = "M"; }
        this[tshirtObjetcSymbol]["size"] = size;
        return this;
    };
    Tshirt.prototype.setMarca = function (marca) {
        this[tshirtObjetcSymbol]["marca"] = marca;
        return this;
    };
    Tshirt.prototype.setPrice = function (price) {
        if (price === void 0) { price = 40; }
        this[tshirtObjetcSymbol]["price"] = price;
        return this;
    };
    Tshirt.prototype.build = function () {
        return this[tshirtObjetcSymbol];
    };
    return Tshirt;
}());
var TshirtWithStamp = /** @class */ (function () {
    function TshirtWithStamp(tshirt) {
        this[tshirtWithStampObjetcSymbol] = tshirt;
    }
    TshirtWithStamp.prototype.addStamp = function () {
        this[tshirtWithStampObjetcSymbol]["stamp"] = true;
        this[tshirtWithStampObjetcSymbol]["price"] += 10;
        return this;
    };
    TshirtWithStamp.prototype.build = function () {
        return this[tshirtWithStampObjetcSymbol];
    };
    return TshirtWithStamp;
}());
var tshirt = new Tshirt()
    .setSize()
    .setPrice()
    .setMarca("nike")
    .build();
var withStamp = new TshirtWithStamp(tshirt).addStamp().build();
console.log(withStamp);

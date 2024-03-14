//desig pattern build => create a instance of objetcts step by step
const tshirtObjetcSymbol = Symbol();
const tshirtWithStampObjetcSymbol = Symbol();

class Tshirt {


    constructor() {
        this[tshirtObjetcSymbol] = {};
    }

    addColor(color) {
        this[tshirtObjetcSymbol]["color"] = color;
        return this;
    }

    setSize(size = "M") {
        this[tshirtObjetcSymbol]["size"] = size;
        return this;
    }

    setMarca(marca) {
        this[tshirtObjetcSymbol]["marca"] = marca;
        return this;
    }

    setPrice(price = 40) {
        this[tshirtObjetcSymbol]["price"] = price;
        return this;
    }

    build() {
        return this[tshirtObjetcSymbol]
    }
}

class TshirtWithStamp{
    constructor(tshirt){
        this[tshirtWithStampObjetcSymbol] = tshirt;
    }

    addStamp(){
        this[tshirtWithStampObjetcSymbol]["stamp"] = true;
        this[tshirtWithStampObjetcSymbol]["price"] += 10;
        return this;
    }

    build(){
        return this[tshirtWithStampObjetcSymbol]
    }
}

const tshirt = new Tshirt()
    .setSize()
    .setPrice()
    .setMarca("nike")
    .build();

const withStamp = new TshirtWithStamp(tshirt).addStamp().build()


console.log(withStamp);

import { MeatProtocol } from "./protocols.js";


export class ProductMeat implements MeatProtocol{

    name:string;
    price:number;
    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}

export class Rice extends ProductMeat{}
export class Bean extends ProductMeat{}
export class Potato extends ProductMeat{}

export class Drink extends ProductMeat{}
export class Stranberry extends ProductMeat{}
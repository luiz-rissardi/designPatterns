export class ProductMeat {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
export class Rice extends ProductMeat {
}
export class Bean extends ProductMeat {
}
export class Potato extends ProductMeat {
}
export class Drink extends ProductMeat {
}
export class Stranberry extends ProductMeat {
}

import { ProductDecorator } from "./productDecorator.protocol.js";

export class TshirtWithStampDecorator extends ProductDecorator {

    getName(): string {
        return this.product.getName() + " Stamp"
    }

    getPrice(): number {
        return this.product.getPrice() + 14.20
    }
}

export class TshirtCustomizeDecorator extends ProductDecorator{

    getName(): string {
        return this.product.getName() + " customize"
    }

    getPrice(): number {
        return this.product.getPrice() + 50
    }
}
import { ProductDecorator } from "./productDecorator.protocol.js";
export class TshirtWithStampDecorator extends ProductDecorator {
    getName() {
        return this.product.getName() + " Stamp";
    }
    getPrice() {
        return this.product.getPrice() + 14.20;
    }
}
export class TshirtCustomizeDecorator extends ProductDecorator {
    getName() {
        return this.product.getName() + " customize";
    }
    getPrice() {
        return this.product.getPrice() + 50;
    }
}

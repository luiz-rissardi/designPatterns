export class ProductDecorator {
    constructor(product) {
        this.product = product;
    }
    getPrice() {
        return this.product.getPrice();
    }
    getName() {
        return this.product.getName();
    }
}

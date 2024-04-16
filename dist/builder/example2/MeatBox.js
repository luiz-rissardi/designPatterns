export class MeatBox {
    constructor() {
        this.childrens = [];
    }
    setMeats(...meats) {
        meats.forEach(meat => this.childrens.push(meat));
    }
    reset() {
        this.childrens.length = 0;
    }
    getPrice() {
        return this.childrens.reduce((acc, children) => acc += children.getPrice(), 0);
    }
}

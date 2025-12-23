// nesse primeiro exemplo veremos a composição de proutos em uma lista 
class Product {
    constructor(price, quantity, name) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.id = Math.floor(Math.random() * 10000 + 1);
    }
    findTotalPrice() {
        return this.price * this.quantity;
    }
}
class ProductList {
    constructor() {
        this.productList = new Map();
    }
    add(product) {
        this.productList.set(product.id, product);
    }
    remove(product) {
        this.productList.delete(product.id);
    }
    getTotalPriceOfList() {
        let totalPrice = 0;
        this.productList.forEach(product => {
            totalPrice += product.findTotalPrice();
        });
        return totalPrice;
    }
}
// a relação dele é de somente 1 lista pra varias produtos
const product1 = new Product(30, 3, "cachorro quente");
const product2 = new Product(10.20, 3, "quentão");
const product3 = new Product(4.50, 3, "coxinha");
const productList = new ProductList();
productList.add(product1);
productList.add(product2);
productList.add(product3);
console.log(product1);
export {};

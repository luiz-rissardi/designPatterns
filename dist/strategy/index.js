import { DiscountPerHundrentPrice } from "./strategies.js";
class ShoopingCart {
    constructor(DiscountStrategy) {
        this.products = new Map();
        this.dicountStrategy = DiscountStrategy;
    }
    addProduct(product) {
        this.products.set(product.id, product);
    }
    removeProduct(product) {
        this.products.delete(product.id);
    }
    getAmmount() {
        let ammount = 0;
        this.products.forEach(product => {
            ammount += product.price * product.quantity;
        });
        return ammount;
    }
    getAmmoutWithDiscount() {
        const totalAmmound = this.getAmmount();
        return this.dicountStrategy.execDiscount(totalAmmound);
    }
}
// aqui temos duas estratégias de descontos diferentes 
// uma para descontar 2% da evnda acada 100 de preço, ou seja 200 == 4% de desconto
// outro para descontar os mesmos 2% porem caso o total for acima de 100, mas somente 2% bruto sem 
// acada 100 de preço 
const discountStrategy = new DiscountPerHundrentPrice(0.2); // 20%
const shoppingCart = new ShoopingCart(discountStrategy);
const product = {
    productName: "pipoca",
    price: 5.90,
    quantity: 8,
    id: 90
};
const product1 = {
    productName: "pipoca",
    price: 10,
    quantity: 8,
    id: 91
};
const product2 = {
    productName: "pipoca",
    price: 45,
    quantity: 2,
    id: 92
};
shoppingCart.addProduct(product);
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
console.log(shoppingCart.getAmmoutWithDiscount());

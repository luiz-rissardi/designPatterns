// agora veremos compo compor grandes obejtos dentro de grandes objetos ainda usando o 
// exemplo de produtos

abstract class ProductComposite {
    abstract getPrice(): number;
    add(...products: ProductComposite[]): void { };
    remove(product: ProductComposite): void { };
}

class ProductLeaf extends ProductComposite {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        super();
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getPrice(): number {
        return this.price * this.quantity;
    };
}

class ProductContainer extends ProductComposite {

    private Childrens: ProductComposite[] = [];

    getPrice(): number {
        return this.Childrens.reduce((acc, el) => acc + el.getPrice(), 0);
    }

    add(...products: ProductComposite[]): void {
        products.forEach(product => {
            this.Childrens.push(product);
        })
    }

    remove(product: ProductComposite): void {
        const indexOfOProduct = this.Childrens.indexOf(product);
        if (indexOfOProduct !== -1) this.Childrens.slice(indexOfOProduct, 1)
    }

}

// container de carro
const bmw = new ProductLeaf("bmw",40000,2);
const polo = new ProductLeaf("polo",10000,5);
const mercedes = new ProductLeaf("mercedes",35500,1);
const carsContainer = new ProductContainer()
carsContainer.add(bmw,polo,mercedes);

// container de comida
const beef = new ProductLeaf("beef",30,80);
const milk = new ProductLeaf("milk",5,190);
const chocolate = new ProductLeaf("chocolate",12.50, 23);
const foodContainer = new ProductContainer();
foodContainer.add(milk,beef,chocolate);

console.log(foodContainer.getPrice());
// container geral que engloba outros container;

const masterContainer = new ProductContainer();
masterContainer.add(foodContainer,carsContainer);

console.log(masterContainer.getPrice());
import { ProductProtocol } from "./porduct.protocol.js";

export class Tshirt implements ProductProtocol{
    name: string = "camiseta";
    price: number = 30.50;

    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    
}
import { BoxMeatProtocol, MeatProtocol } from "./protocols.js";

export class MeatBox implements BoxMeatProtocol{
    private childrens: MeatProtocol[] = [];

    setMeats(...meats:MeatProtocol[]){
        meats.forEach(meat => this.childrens.push(meat))
    }

    reset(){
        this.childrens.length = 0;
    }

    getPrice() {
        return this.childrens.reduce((acc,children) => acc += children.getPrice(),0)
    }
}
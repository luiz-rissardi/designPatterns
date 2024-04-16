import { MeatBox } from "./MeatBox.js";
import { Rice, Bean, Stranberry, Drink, Potato } from "./meats.js";
export class MeatBuilder {
    constructor() {
        this.boxMeat = new MeatBox();
    }
    makeMeat() {
        const rice = new Rice("arroz", 5);
        const potato = new Potato("batata", 7);
        const bean = new Bean("feijão", 3);
        this.boxMeat.setMeats(rice, bean, potato);
        return this;
    }
    makeDrink() {
        const drink = new Drink("cachaça", 13);
        this.boxMeat.setMeats(drink);
        return this;
    }
    makeStranberry() {
        const stranberry = new Stranberry("moranguinho", 300);
        this.boxMeat.setMeats(stranberry);
        return this;
    }
    reset() {
        this.boxMeat.reset();
        return this;
    }
    build() {
        return this.boxMeat;
    }
}

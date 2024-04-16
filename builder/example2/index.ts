import { MeatBuilder } from "./MeatBuilders.js"

const builder = new MeatBuilder();

const result = builder.makeMeat().makeDrink().build();
console.log(result.getPrice());
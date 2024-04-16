import { MeatBuilder } from "./MeatBuilders.js";
const builder = new MeatBuilder();
const result = builder.makeMeat().makeDrink().makeStranberry().build();
console.log(result.getPrice());

import { Tshirt } from "./product.js";
import { TshirtCustomizeDecorator, TshirtWithStampDecorator } from "./ProductsDecorators.js";
const tshirt = new Tshirt();
const tshirtWithStamp = new TshirtWithStampDecorator(tshirt);
const customizeTshirt = new TshirtCustomizeDecorator(tshirtWithStamp);
console.log(tshirt.getPrice());
console.log(tshirtWithStamp.getPrice());
console.log(customizeTshirt.getName(), customizeTshirt.getPrice());



import { Factory } from "./factories.js";


const factory = Factory.makeFactory(null);

const tshirt = factory.makeTshirt();

console.log(tshirt);
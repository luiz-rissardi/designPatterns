import { FashionTshirt, SocialTshirt, Tshirt } from "../abstractFactory/abstractFactoryEx.js";


abstract class AbstractFactory{
    abstract makeTshirt():Tshirt
}

export class AbstractFactoryNormalTshirt extends AbstractFactory{
    makeTshirt(): Tshirt {
        return new Tshirt("red");
    }
}

export class AbstractFactorySocialTshirt extends AbstractFactory{
    makeTshirt(): Tshirt {
        // example: get a status of the client to decide;
        return new SocialTshirt("white");
    }
}

export class AbstractFactoryFashionTshirt extends AbstractFactory{
    makeTshirt(): Tshirt {
        // example: get a status of the client to decide;
        return new FashionTshirt("red");
    }
}


export class Factory{
    static makeFactory(type:string){
        switch(type){
            case "social":{
                return new AbstractFactorySocialTshirt()
            }
            case "fashion":{
                return new AbstractFactoryFashionTshirt()
            }
            default:{
                return new AbstractFactoryNormalTshirt();
            }
        }
    }
}
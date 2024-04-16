

export interface MeatProtocol{
    getPrice():number;
    price:number;
    name:string;
}

export interface builderProtocol{
    makeMeat():this;
    makeDrink():this;
    makeStranberry():this;
    reset():this;
    build():unknown;
}

export interface BoxMeatProtocol{
    getPrice():number;
    setMeats(...meats:MeatProtocol[]):void;
    reset():void;
}
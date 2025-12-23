

export class Tshirt {
    protected price: number;
    protected is_Fashion: boolean;
    color: string;
    size: string;
    mark: string;

    constructor(color: string) {
        this.mark = "normal";
        this.price = 40;
        this.size = "M"
        this.color = color
        this.is_Fashion = false;
    }


    getPrice(): number {
        return this.price;
    };

    protected isFashion() {
        return this.is_Fashion;
    }
}


export class FashionTshirt extends Tshirt {

    private TAX_FASHION_PERCENT = 10

    constructor(color: string) {
        super(color);
        this.mark = "fashionMAX";
        this.price = 100;
        this.size = "G"
        this.color = color
        this.is_Fashion = true;
    }

    getPrice(): number {
        if (this.is_Fashion) {
            return this.price + ((this.price / 100) * this.TAX_FASHION_PERCENT);
        }
        else {
            return this.price;
        }
    }
}

export class SocialTshirt extends Tshirt{
    private TAX_SOCIAL_PERCENT = 10

    constructor(color: string) {
        super(color);
        this.mark = "socialMax";
        this.price = 200 + this.TAX_SOCIAL_PERCENT;
        this.size = "M"
        this.color = color
        this.is_Fashion = false;
    }
}










function buyTshirt() {

}


buyTshirt();
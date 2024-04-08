
export interface DiscountStrategy {
    execDiscount(totaAmmount: number): number;
}

export interface DiscountPerQuantity extends DiscountStrategy {
    percentOfDiscount: number;
}

export interface DiscountPerPrice extends DiscountStrategy {
    percentOfDiscount: number;
}

export class DiscountPerHundrentPrice implements DiscountPerPrice {
    percentOfDiscount: number;

    constructor(percentOfDiscountPerHundrend: number) {
        this.percentOfDiscount = percentOfDiscountPerHundrend
    }

    execDiscount(totaAmmount: number): number {
        const totalPercentDiscount = Number((totaAmmount / 100).toFixed(0)) * this.percentOfDiscount;
        if (totaAmmount > 100) {
            return totaAmmount - (totaAmmount * totalPercentDiscount)
        }
        return totaAmmount

    }

}

export class DiscountPer100Quantity implements DiscountPerQuantity {
    percentOfDiscount: number;

    constructor(percentOfDiscount: number) {
        this.percentOfDiscount = percentOfDiscount;
    }

    execDiscount(totaAmmount: number): number {
        if (totaAmmount >= 100) {
            return totaAmmount - (totaAmmount * this.percentOfDiscount);
        }
        return totaAmmount;
    }
}
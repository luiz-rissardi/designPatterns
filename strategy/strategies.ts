
export interface DiscountStrategy {
    percentOfDiscount: number;
    execDiscount(totaAmmount: number): number;
}


export class DiscountPerHundrentPrice implements DiscountStrategy {
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

export class DiscountPer100Quantity implements DiscountStrategy {
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

export class DisocuntPerWeekend implements DiscountStrategy {

    percentOfDiscount: number;

    constructor(percentOfDisocunt: number) {
        this.percentOfDiscount = percentOfDisocunt
    }

    execDiscount(totaAmmount: number): number {
        return totaAmmount - (totaAmmount * this.percentOfDiscount)
    }
}

export class DiscountPerHundrentPrice {
    constructor(percentOfDiscountPerHundrend) {
        this.percentOfDiscount = percentOfDiscountPerHundrend;
    }
    execDiscount(totaAmmount) {
        const totalPercentDiscount = Number((totaAmmount / 100).toFixed(0)) * this.percentOfDiscount;
        if (totaAmmount > 100) {
            return totaAmmount - (totaAmmount * totalPercentDiscount);
        }
        return totaAmmount;
    }
}
export class DiscountPer100Quantity {
    constructor(percentOfDiscount) {
        this.percentOfDiscount = percentOfDiscount;
    }
    execDiscount(totaAmmount) {
        if (totaAmmount >= 100) {
            return totaAmmount - (totaAmmount * this.percentOfDiscount);
        }
        return totaAmmount;
    }
}

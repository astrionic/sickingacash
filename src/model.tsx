export enum ProductType {
    DRINK = 'DRINK',
    FOOD = 'FOOD',
}

export enum AgeRestriction {
    EIGHTEEN_PLUS = 'EIGHTEEN_PLUS',
    SIXTEEN_PLUS = 'SIXTEEN_PLUS',
    NONE = 'NONE',
}

export enum Deposit {
    NONE = 'NONE',
    CUP = 'Becher',
    MUG = 'Mule',
    BOTTLE = 'Flasche',
}

export class Product {
    name: string;
    primaryColor: string;
    type: ProductType;
    price: number;
    depot: Deposit;
    ageRestriction: AgeRestriction = AgeRestriction.NONE;

    constructor(name: string, primaryColor: string, type: ProductType, price: number, depot: Deposit, ageRestriction: AgeRestriction = AgeRestriction.NONE) {
        this.name = name;
        this.primaryColor = primaryColor;
        this.type = type;
        this.price = price;
        this.depot = depot;
        this.ageRestriction = ageRestriction;
    }

    getDepositCost(): number {
        return getDepositPrice(this.depot);
    }

    getPrimaryColor(): string {
        return this.primaryColor;
    }

    getSecondaryColor(): string {
        return '#000000';
    }
}

export function getDepositPrice(deposit: Deposit): number {
    switch (deposit) {
        case Deposit.CUP:
            return 5;
        case Deposit.MUG:
            return 10;
        case Deposit.BOTTLE:
            return 10;
        default:
            return 0;
    }
}

export const allProducts: Product[] = [
    new Product("Softdrink", '#ffffff',ProductType.DRINK, 5, Deposit.NONE, AgeRestriction.NONE),
    new Product("Sonnwendig (alkoholfrei)", '#cfefff',ProductType.DRINK, 4, Deposit.NONE, AgeRestriction.NONE),
    new Product("Moscht (alkoholfrei)", '#cfefff',ProductType.DRINK, 5, Deposit.NONE, AgeRestriction.NONE),
    new Product("Köhlerbier offen", '#cfefff', ProductType.DRINK, 6, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Köhlerbier", '#cfefff', ProductType.DRINK, 5, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Moscht", '#cfefff',ProductType.DRINK, 5, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Wein", '#ffcfcf', ProductType.DRINK, 16, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Burger", '#ffcfef',ProductType.FOOD, 12, Deposit.NONE, AgeRestriction.NONE),
    new Product("Wurst", '#ffcfef',ProductType.FOOD, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Pommes Frites", '#ffcfef',ProductType.FOOD, 4, Deposit.NONE, AgeRestriction.NONE),
];


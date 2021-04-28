interface Item {
    name: string;
    rarity: string;
    quantity: number;
    description: string;
}

interface Sword extends Item {
    damage: number;
    durability: number;
}


interface Chest {
    name: string;
    rarity: string;
    content: Item[];
}

function doubleItem<T extends Item>(item: T): T[] {
    return [item, item];
}

function addItemsToChest<T extends Item, C extends Chest>(items: T[], chest: C): Chest {
    let newContent = chest.content.concat(items);
    chest.content = newContent;
    return chest;
}

let potion = {
    name: 'Health Potion',
    rarity: 'Common',
    quantity: 2,
    description: 'It restores hp'
}

let twoPotionsStacks = doubleItem<Item>(potion);

let twoSwords = doubleItem<Sword>({
    name: 'Geralt Sword',
    rarity: 'Rare',
    quantity: 1,
    description: 'Ultra rare sword',
    damage: 1000,
    durability: 100,
});

let sword = {
    name: 'Geralt Sword',
    rarity: 'Rare',
    quantity: 1,
    description: 'Ultra rare sword',
    damage: 1000,
    durability: 100,
}

let rareChest = {
    name: 'Geralt Sack',
    rarity: "Rare",
    content: []
}

//console.log(addItemsToChest([potion, sword], rareChest));

type horror = "horror";
type thriller = "thriller";

function getFascinateMovie(movie: horror | thriller): void {
    console.log(movie);
}

getFascinateMovie("horror");


enum ErrorCode {
    NOT_FOUND = 404,
    STATUS = 200,
}

let errorCode = ErrorCode.NOT_FOUND;
console.log(errorCode);
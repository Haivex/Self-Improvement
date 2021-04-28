function doubleItem(item) {
    return [item, item];
}
function addItemsToChest(items, chest) {
    var newContent = chest.content.concat(items);
    chest.content = newContent;
    return chest;
}
var potion = {
    name: 'Health Potion',
    rarity: 'Common',
    quantity: 2,
    description: 'It restores hp'
};
var twoPotionsStacks = doubleItem(potion);
var twoSwords = doubleItem({
    name: 'Geralt Sword',
    rarity: 'Rare',
    quantity: 1,
    description: 'Ultra rare sword',
    damage: 1000,
    durability: 100
});
var sword = {
    name: 'Geralt Sword',
    rarity: 'Rare',
    quantity: 1,
    description: 'Ultra rare sword',
    damage: 1000,
    durability: 100
};
var rareChest = {
    name: 'Geralt Sack',
    rarity: "Rare",
    content: []
};
function getFascinateMovie(movie) {
    console.log(movie);
}
getFascinateMovie("horror");
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    ErrorCode[ErrorCode["STATUS"] = 200] = "STATUS";
})(ErrorCode || (ErrorCode = {}));
var errorCode = ErrorCode.NOT_FOUND;
console.log(errorCode);

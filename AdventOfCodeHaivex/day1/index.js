async function getNumber() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let dataArray = dataText.split('\n');
    dataArray = dataArray.map((element) => {
        return Number(element);
    })
    let foundedNumber = [];
    
    dataArray.some((element, index, array) => {
        if(array.includes(2020 - element)) {
            foundedNumber.push(element, 2020 - element);
            return true;
        }
        return false;
    })

    console.log("Liczby: ", foundedNumber[0], foundedNumber[1]);
    console.log("Iloczyn: ", foundedNumber[0] * foundedNumber[1]);

}

getNumber();

async function getNumbers() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let dataArray = dataText.split('\n');
    dataArray = dataArray.map((element) => {
        return Number(element);
    })
    dataArray = dataArray.sort((a, b) => a - b);
    console.log(dataArray);
    let foundedNumbers = [];
    let sum = 0;
    
    dataArray.forEach((element1, index, array) => {
        dataArray.forEach((element2, index, array) => {
            if(array.includes(2020 - element1 - element2)) {
                console.log("Liczby:", element1, element2, 2020 - element1 - element2);
                console.log("Iloczyn: ", element1 * element2 * (2020 - element1 - element2));
            }
        })
    })

    console.log(foundedNumbers);
}

getNumbers();

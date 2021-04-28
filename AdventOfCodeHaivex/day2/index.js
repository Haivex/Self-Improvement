async function getValidPasswords() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    const maxNumberReg = /(?<=-)\d+/i;
    const minNumberReg = /^\d{1,}/i;
    const letterToFind = /(\w)(?::)/i;

    const wordForSearching = /(\w{1,})$/mi;

    let dataArray = dataText.split('\n');
    await dataArray.pop();

    let arrayOfObjects = dataArray.map((str, index, array) => {

        let max = str.match(maxNumberReg)[0];
        let min = str.match(minNumberReg)[0];
        let foundedLetter = str.match(letterToFind)[1];
        let word = str.match(wordForSearching)[1];

        let repetitionsReg = new RegExp(foundedLetter, "g");

        let letterRepetitions = word.match(repetitionsReg);

        try {
            letterRepetitions = letterRepetitions.length;
        }
        catch {
            letterRepetitions = 0;
        }

        return {
            min: min,
            max: max,
            foundedLetter: foundedLetter,
            word: word,
            letterRepetitions: letterRepetitions,
            isValid: (letterRepetitions >= min && letterRepetitions <= max) ? true : false
        }
    })

    console.log(arrayOfObjects.filter((el) => {
        return el.isValid == true;
    }).length);

}

getValidPasswords();

async function getValidPasswords2() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    const maxNumberReg = /(?<=-)\d+/i;
    const minNumberReg = /^\d{1,}/i;
    const letterToFind = /(\w)(?::)/i;

    const wordForSearching = /(\w{1,})$/mi;

    let dataArray = dataText.split('\n');
    await dataArray.pop();

    let arrayOfObjects = dataArray.map((str, index, array) => {

        let max = str.match(maxNumberReg)[0] - 1;
        let min = str.match(minNumberReg)[0] - 1;
        let foundedLetter = str.match(letterToFind)[1];
        let word = str.match(wordForSearching)[1];

        let valid = false;

        if(word[min] == foundedLetter && word[max] != foundedLetter) {
            valid = true;
        }
        else if (word[min] != foundedLetter && word[max] == foundedLetter) {
            valid = true;
        }
        else {
            valid = false;
        }

        return {
            min: min,
            max: max,
            foundedLetter: foundedLetter,
            word: word,
            isValid: valid
        }
    })

    console.log(arrayOfObjects.filter((el) => {
        return el.isValid == true;
    }).length);

}


getValidPasswords2();
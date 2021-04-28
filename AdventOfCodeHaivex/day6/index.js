async function getCustoms() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let regex = /\n{2,}/;

    let dataArray = dataText.split(regex);
    //console.log(dataArray);

    dataWithoutEnters = dataArray.map((el) => {
        return el.replace(/\n/gmi ,'');
    })

    //console.log(dataWithoutEnters);

    let repetitions = []
    dataWithoutEnters.forEach((el) => {
        let uniqueFounded = 0;
        let uniqueLetters = []
        let stringArrays = el.split('');
        stringArrays.forEach((letter) => {
            if(!uniqueLetters.includes(letter)) {
                uniqueLetters.push(letter);
                uniqueFounded++;
            }
        })
        repetitions.push(uniqueFounded);
    })
    //console.log(repetitions);

    let sum = 0;
    repetitions.forEach((el) => {
        sum += el;
    })
    console.log(sum);
}

//getCustoms();

async function getCustoms2() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let regex = /\n{2,}/;

    let dataArray = dataText.split(regex);

    dataWithoutEnters = dataArray.map((el) => {
        return el.split(/\n/gmi);
    })

    console.log(dataWithoutEnters);

    let repetitions = []

    dataWithoutEnters.forEach((el) => {
        let uniqueFounded = 0;
        let isFounded = false;
        let uniqueLetters = []

            let stringArrays = el[0].split('');
            stringArrays.forEach((letter) => {
                if(!uniqueLetters.includes(letter)) {
                    uniqueLetters.push(letter);
                }
            })
        uniqueLetters.forEach((uniqueLetter) => {
            isFounded = el.every((word) => {
                return word.includes(uniqueLetter);
        })
        if(isFounded) {
            uniqueFounded++;
        }
        })
        //console.log(uniqueFounded);
        repetitions.push(uniqueFounded);
    })
    console.log(repetitions);
    let sum = 0;
    repetitions.forEach((el) => {
        sum += el;
    })
    console.log(sum);
    //ucielo mi jedna liczbe 3289 zamiast 3290
}

getCustoms2();
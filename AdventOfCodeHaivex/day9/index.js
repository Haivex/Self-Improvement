// async function getNumbers() {
//     let res = await fetch('input.txt');
//     let dataText = await res.text();

//     let regex = /\n/;

//     let dataArray = dataText.split(regex);
//     //console.log(dataArray);

//     dataArray = dataArray.map((el) => {
//         return Number(el);
//     })

//     let isFounded = true;
//     let currentIndex = 25;
//     while(isFounded) {
//         isFounded = false;
//         let beforeElemenets = dataArray.slice(currentIndex - 25, currentIndex);
//         let currentItem = dataArray[currentIndex];
//         //console.log(beforeElemenets);

//         beforeElemenets.forEach((el) => {
//             if(beforeElemenets.includes(currentItem - el)) {
//                 isFounded = true;
//             }
//         })

//         if(!isFounded) {
//             console.log(dataArray[currentIndex]);
//             console.log(currentIndex);
//         }
//         currentIndex++;
//     }

//     console.log(dataArray);

// }

//getNumbers();

async function getNumbers2() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let regex = /\n/;

    let dataArray = dataText.split(regex);
    //console.log(dataArray);

    dataArray = dataArray.map((el) => {
        return Number(el);
    })

    let isFoundedBad = true;
    let startedIndex = 502;
    let currentIndex = 502;
    let numberFromPartOne = 25918798;
    let numbers = [];
    let sum = 0;
    while(isFoundedBad) {
        currentIndex--
        let currentNumber = dataArray[currentIndex];
        sum += currentNumber;
        numbers.push(currentNumber);

        if(sum == numberFromPartOne) {
            console.log(numbers);
            isFoundedBad = false;
        }
        if(sum > numberFromPartOne) {
            sum = 0;
            numbers = [];
            startedIndex--;
            currentIndex = startedIndex;
        }
    }

    console.log(Math.max(...numbers));
    console.log(Math.min(...numbers));
    console.log(Math.min(...numbers) + Math.max(...numbers));
}

getNumbers2();

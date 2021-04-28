function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log(num);
}

function AddAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

//void nie zwraca nic
//undefined musi zwrocic

//let combineValues: Function; wezmie kazda funkcje
let combineValues: (a: number, b: number) => number; //bez parametrow bylyby erory
combineValues= add;
//combineValues = printResult;

combineValues(1, 2);

// AddAndHandle(1, 3, (result, dsadsa) => { error za duzo parametrow
//     console.log(result);
// })


AddAndHandle(1, 3, (result) => {
    console.log(result);
})

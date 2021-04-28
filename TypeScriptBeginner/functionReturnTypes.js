"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
function AddAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
//void nie zwraca nic
//undefined musi zwrocic
//let combineValues: Function; wezmie kazda funkcje
var combineValues; //bez parametrow bylyby erory
combineValues = add;
//combineValues = printResult;
combineValues(1, 2);
// AddAndHandle(1, 3, (result, dsadsa) => { error za duzo parametrow
//     console.log(result);
// })
AddAndHandle(1, 3, function (result) {
    console.log(result);
});

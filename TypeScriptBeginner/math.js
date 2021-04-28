"use strict";
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var button = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});

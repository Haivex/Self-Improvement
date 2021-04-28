"use strict";
// //Literal type (see resultType)
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultType: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultType === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   // if(resultType === 'as-number') {
//   //     return +result
//   // }
//   // else {
//   //     return result;
//   // }
// }
// const combinedAges = combine(30, 29, "as-number");
// const combinedStringAges = combine("30", "29", "as-number");
// const combineNames = combine("Max", "Anna", "as-text");

'use strict'

let myOuterFruit = "apple";

function printFruitNames() {
  let myInnerFruit = "pear";
  console.log('a fruit defined in function scope:', myInnerFruit);
  console.log('a fruit defined in global scope:', myOuterFruit);
}

printFruitNames();

console.log("outside a function, I can't access variables from that function's scope:", myInnerFruit); // causes an error! comment out this line to fix

console.log("outside a function, I can still access variables from the global scope", myOuterFruit);
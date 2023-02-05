/* 
    call - used to make function call on an object literal, if the object has a this keyword inside,
    this represents the object used in the call. call is a function method. 
    arguments to the function are passed as arguments to the call method.
    apply - similar to call but takes arguments to the function as a list and the object as first parameter
    bind - this gives a variable the ability to call a function using the object passed to the bind as 'this' in the function
*/



const obj = {
  num: 100,
};

// Setting "num" on globalThis to show how it is NOT used.
globalThis.num = 42;

// A simple traditional function to operate on "this"
const add = function (a, b, c) {
  return this.num + a + b + c;
};
  
/*
  With arrow functions, since our add function is essentially created on the globalThis (global) scope,
  it will assume this is the globalThis
*/

console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106

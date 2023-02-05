'use strict';

// const obj = {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c() {
//       console.log(this.i, this);
//     },
//   };
  
//   obj.b(); // logs undefined, Window { /* … */ } (or the global object)
//   obj.c(); // logs 10, Object { /* … */ }


const obj = {
  a: 10,
};

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});

const a = obj.b; // logs undefined, Window { /*` … */ } (or the global object)
console.log(a);


/* arrow functions are auto bound when used with classes as methods */

class C {
    a = 1;
    autoBoundMethod = () => {
      console.log(this.a);
    }
  }
  
const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// If it were a normal method, it should be undefined in this case

/* the equivalent of normal method */
class D {
    a = 1;
    constructor() {
      this.method = this.method.bind(this);
    }
    method() {
      console.log(this.a);
    }
  }

const d = new D();
d.method(); // 1
const { method } = d;
method(); // 1


const obj_ = {
    count: 10,
    doSomethingLater() {
      // The method syntax binds "this" to the "obj" context.
      setTimeout(() => {
        // Since the arrow function doesn't have its own binding and
        // setTimeout (as a function call) doesn't create a binding
        // itself, the "obj" context of the outer method is used.
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
obj_.doSomethingLater(); // logs 11

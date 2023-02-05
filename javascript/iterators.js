const customIterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        if (count < 10) {
          count++;
          return {
            done: false, value: "Nothing"
          };
        } else {
          return {
            done: true, value: "Iterable finished"
          };
        }
      }
    }
  }
}

for (let i of customIterable) {
  console.log(i);
}

console.log(i);
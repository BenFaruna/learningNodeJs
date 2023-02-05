let arr = [1, 2, 3, 4, 5, 6];

// arr = arr.filter((int) => int % 2 == 0);
// console.log(arr);

function reduceArr (int) {
  return int.then((result) => result * 2);
}

arr = arr.reduce(reduceArr, initialValue=Promise.resolve(1));

setTimeout(() => console.log(arr), 1000)

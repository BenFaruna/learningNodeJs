const arr = new ArrayBuffer(16);

const arrView = new Int32Array(arr);

for (let i=0; i < arrView.length; i++) {
  arrView[i] = i * 2;
  console.log(arrView[i]);
}

const int16View = new Int16Array(arr);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}

int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${arrView[0]}`);

console.log(arrView, int16View);

console.log(arrView.byteOffset);

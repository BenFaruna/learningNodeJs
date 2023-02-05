const letters = new Set();

letters.add('a');
letters.add('b');
letters.add('c');
letters.add('d');
letters.add('e');

console.log(letters);

for (const l of letters.entries()) {
  console.log(l);
}

const funcs = {
  hello: function hello (user) { return `Hello ${user}`; },

  func_in_func: function funcInFunc () { return new Map(); }
};

const a = funcs.hello;
console.log(a('Benjamin'));

const b = funcs.func_in_func();

b.set('Me', 'Benjamin');
b.set('You', 'Human');
b.set('They', 'Society');
b.set('Them', 'Group');

b.forEach((v, k) => {
  console.log(v, k);
});

for (const m of b) {
  console.log(m[0]);
}

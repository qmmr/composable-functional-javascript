// const nextCharFromNumberString = str =>
// String.fromCharCode(parseInt(str.trim()) + 1);
const nextCharFromNumberString = str =>
  [str]
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i));
const result = nextCharFromNumberString(' 64');
console.log(result);

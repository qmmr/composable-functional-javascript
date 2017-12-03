// const nextCharFromNumberString = str =>
// String.fromCharCode(parseInt(str.trim()) + 1);

// const nextCharFromNumberString = str =>
//   [str]
//     .map(s => s.trim())
//     .map(s => parseInt(s))
//     .map(i => i + 1)
//     .map(i => String.fromCharCode(i));
// const result = nextCharFromNumberString(' 64');
// console.log(result);

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  insepect: () => `Box(${x})`,
});

// const moneyToFloat = str =>
//   parseFloat(str.replace(/\$/g, ''))

const moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r));

const percentToFloat = str =>
  Box(str.replace(/\%/g, ''))
    .map(replaced => parseFloat(replaced))
    .map(number => number * 0.01);

const applyDiscount = (price, discount) =>
  moneyToFloat(price).fold(cost =>
    percentToFloat(discount).fold(savings => cost - cost * savings)
  );

const result = applyDiscount('$10.00', '20%');
console.log(result);

// create your loops here.
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log('whileLoop1 output: ', whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i * 2);
    i++;
  }
  return array;
}
console.log('whileLoop2 output: ', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forLoop1 output: ', forLoop1());

function forLoop2() {
  for (let i = 0; i <= 100; i++) {
    console.log('Time till explosion: ', 100 - i);
  }
}
forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (const property in object) {
    array.push(`${property}`);
  }
  return array;
}
console.log('forInLoop1 output: ', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
console.log('forInLoop2 output: ', forInLoop2(object));

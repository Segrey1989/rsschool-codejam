module.exports = function sumOfOther(arr) {
  const array = [];
  if (arr.length) {
    const sum = arr.reduce((x, ac) => ac + x);
    arr.map(x => array.push(sum - x));
  }
  return array;
};

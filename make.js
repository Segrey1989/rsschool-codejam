module.exports = function make() {
  const arr = [];
  return (function f() {
    const args = [...arguments];
    for (let i of args) {
      if (typeof i === "function")
        return i(...arr); 
      if(arr.length < 2)
        arr.push(i);
      else {
        arr[0]+= arr[1];
        arr[1] = i;
      }
    } 
    return f;
  }(...arguments));
};

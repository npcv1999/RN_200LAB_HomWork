const a = { name: "Vinh", age: 21, abc: "123", a: { b: "qwe" } };
const b = { name: "Vinh", age: 21, abc: "123", a: { b: "qwe" } };

function isObject(object) {
  return object != null && typeof object === "object";
}

const isEqual = (param1, param2) => {
  const keys1 = Object.keys(param1);
  const keys2 = Object.keys(param2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of (keys1, keys2)) {
    const val1 = param1[key];
    const val2 = param2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (val1 !== val2 && !areObjects) ||
      (areObjects && !isEqual(val1, val2))
    ) {
      return false;
    }
  }
  return true;
};
console.log(isEqual(a, b));

const a = {
  name: "Vinh",
  age: 22,
  info: {
    from: "TG",
    phone: "0123456789",
  },
  favorite: {
    film: "Avengers",
    eat: "rice",
  },
};
//DEEPCLONE
const DeepClone = (object) => {
  let b = {};
  for (let key in object) {
    if (typeof object[key] === "object") {
      b[key] = { ...object[key] };
    } else {
      b[key] = object[key];
    }
  }
  b.favorite.eat = "noodle";
  return b;
};
console.log("a", a);
console.log("deepclone of a", DeepClone(a));

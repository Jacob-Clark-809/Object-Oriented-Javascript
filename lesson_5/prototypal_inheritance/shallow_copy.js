function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
  let keys = Object.getOwnPropertyNames(object);

  for (let index = 0; index < keys.length; index += 1) {
    newObj[keys[index]] = object[keys[index]];
  }

  return newObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
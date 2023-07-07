function createObject(obj) {
  if (!(createObject.prototype === obj)) {
    createObject.prototype = obj;
    return new createObject(obj);
  }
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
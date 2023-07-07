let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // log 2 to console, return new Foo object.

foo.bar(); // log 2 to console.
Foo(); // log 2 to console, assign a and bar to global object.

obj = {};
Foo.call(obj); // log 2 to console, assign a and bar to obj
obj.bar(); // log 2 to console

console.log(this.a); // log 2 to console due to line 16

/* Total output:
2
2
2
2
2
2
*/

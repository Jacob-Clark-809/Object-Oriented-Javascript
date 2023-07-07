let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());

/*
This will result in a typeError. The prototype of ninja is the initial object
which Ninja.prototype pointed to and had value {}. Since we reassign rather than
mutate on line 8 this object is unchanged and so ninja.swingSword returns
undefined.
*/
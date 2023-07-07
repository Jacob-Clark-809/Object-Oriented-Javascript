let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/*
This will log true. The swingSword method is assinged to the prototype
after ninja is initialized, however this does not matter as ninja contains
a referennce to the prototype object. Therefore, any changes after
initialization still apply. The swingSword method returns the value of
this.swung. Because we invoked the method with ninja as the calling object,
the value of this is ninja. the swung property of ninja was set to true
during the constructor invocation on line 6. Hence, this is what is output.
*/
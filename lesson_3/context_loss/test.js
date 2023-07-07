let foo = {
  a: 0,
  incrementA() {
    let increment = function() {
      let oneDeeper = function oneDeeper() {
        this.a += 1;
      }.bind(this);

      oneDeeper();
    }.bind(this);

    increment();
    increment();
    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);

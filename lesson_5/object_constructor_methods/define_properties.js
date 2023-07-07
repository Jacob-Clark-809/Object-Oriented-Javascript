function newPerson(name) {
  if (!(this instanceof newPerson)) {
    return new newPerson(name);
  }

  this.name = name;
  Object.defineProperties(this, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false,
    },
  });
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley
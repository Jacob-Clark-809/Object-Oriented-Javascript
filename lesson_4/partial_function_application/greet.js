function greet(greeting, name) {
  greeting = capitalize(greeting);
  name = capitalize(name);

  console.log(greeting + ', ' + name + '!');
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function partial(primary, arg1) {
  return function(arg2) {
    primary(arg1, arg2);
  };
}

greet('howdy', 'Joe');
greet('good morning', 'Sue');

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
sayHi('Sarah');

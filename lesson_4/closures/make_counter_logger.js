function makeCounterLogger(initial) {
  return function(final) {
    if (initial < final) {
      for (let current = initial; current <= final; current += 1) {
        console.log(current);
      }
    } else {
      for (let current = initial; current >= final; current -= 1) {
        console.log(current);
      }
    }
  };
}

let countLog = makeCounterLogger(5);
countLog(8);
countLog(2);

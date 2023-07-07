function countdown(top) {
  (function() {
    for (let current = top; current >= 0; current -= 1) {
      console.log(current);
    }

    console.log('Done!');
  })();
}

countdown(7);
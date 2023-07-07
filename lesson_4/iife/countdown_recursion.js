function countdown(count) {
  (function(n) {
    function go(n) {
      console.log(n);
      if (n === 0) {
        console.log('Done!');
        return;
      }

      go(n-1);
    }

    go(n);
  })(count);
}

countdown(7);
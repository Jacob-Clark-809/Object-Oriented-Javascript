function makeMultipleLister(root) {
  return function() {
    for (let current = root; current < 100; current += root) {
      console.log(current);
    }
  };
}

let lister = makeMultipleLister(13);
lister();

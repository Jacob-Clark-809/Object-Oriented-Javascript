function itemMakerMaker() {
  let id = -1;
  return function(name, stock, price) {
    id += 1;
    return {
      id,
      name,
      stock,
      price,
      setPrice(newPrice) {
        if (newPrice < 0) {
          console.log('Price must be greater than or equal to 0.');
          return;
        }

        this.price = newPrice;
      },
      describe() {
        console.log('Name: ' + this.name);
        console.log('ID: ' + this.id);
        console.log('Price: $' + this.price);
        console.log('Stock: ' + this.stock);
      },
    };
  };
}

let makeItem = itemMakerMaker();

let scissors = makeItem('Scissors', 8, 10);
let drill = makeItem('Cordless Drill', 15, 45);

scissors.setPrice(100);
scissors.describe();
drill.describe();
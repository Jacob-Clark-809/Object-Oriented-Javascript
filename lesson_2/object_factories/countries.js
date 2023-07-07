function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      let visitMessage;
      if (this.visited) {
        visitMessage = 'I have visited ' + this.name + '.';
      } else {
        visitMessage = "I haven't visited " + this.name + '.';
      }
      return this.name + ' is located in ' + this.continent + '. ' + visitMessage;
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

console.log(canada.getDescription());
canada.visitCountry();
console.log(canada.getDescription());
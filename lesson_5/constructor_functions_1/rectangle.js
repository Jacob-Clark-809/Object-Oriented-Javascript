let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area(); // this in RECTANGLE is undefined, need to use
  this.perimeter = RECTANGLE.perimeter(); // .call(this) to give right context
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area); // outputs NaN
console.log(rect1.perimeter); // outpus NaN
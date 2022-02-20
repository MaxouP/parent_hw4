const r = Number(prompt("Enter the circle radius:"));

class Circle {
  constructor(radius) {
    this.radius = radius
  }
  circumference() {
    return 2 * this.radius * Math.PI;
  }
  
  area() {
    return this.radius * this.radius * Math.PI;
  }
}

let circle = new Circle(r);

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

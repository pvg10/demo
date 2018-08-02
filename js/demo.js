/*
Arrow function:Arrow functions have a short syntax compared to function expressions.
*/
const add = (a, b) => {
    console.log(a + b);
}
add(10, 12);
/*
Destructuring:
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/
var arr = ['one', 'two', 'three'];
var [one, two, three] = arr;
console.log(one , two , three, 'arr');
/*
Spread Operator:
*/
console.log(...arr);
var arr2 = [...arr,'four'];
console.log(arr2, 'arr2');
//let, var, const
var x = 1
let y = 2
if (x === 1) {
  var x = 100
  let y = 200
  console.log(x, 'var');
  console.log(y, 'let');
}
console.log(x, 'var');
console.log(y, 'let');
const z = 5;
//We cannot reassign value in const.
console.log(z, 'const');
class Area {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  //Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    console.log('calcArea');
    return this.height * this.width;
  }
}
const square = new Area(20, 30);
console.log(square.area, 'area');

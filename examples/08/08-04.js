function setup() {
  createCanvas(800, 300);
  sayHello();
}

function draw() {
  background(220);
}

function sayHello() {
  var message = "Hello World!";
  console.log(message);
}

console.log(message); // this line will throw an error

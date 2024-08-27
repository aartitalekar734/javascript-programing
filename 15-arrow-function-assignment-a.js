let show = () => {
  console.log("Good Morning,Today is Monday");
};
show();

let mult = (n1, n2, n3 = 1) => {
  console.log(`multiplication is: ${n1 * n2 * n3}`);
};
mult(5, 5, 2);
console.log("Using default value");

mult(10, 4);

console.log("Addition Function");
let add = (n1, n2, n3, n4, n5) => {
  return n1 + n2 + n3 + n4 + n5;
};
let result = add(100, 100, 200, 349, 756);
console.log("Addition of given number is:", result);
let result1 = add("I am", " learning", " ES6", " features", " in depth");
console.log("Addition of given number is:", result1);

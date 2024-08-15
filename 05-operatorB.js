console.log("===============grater number====================");

function graterNumber(num1, num2) {
  console.log(`Given Number are:${num1} and ${num2}`);
  var n3 = num1 >= num2 ? num1 : num2;
  console.log("grater number is:", n3);
  console.log("===========================");
}
graterNumber(10, -10);
graterNumber(800, 899);
console.log("==============Even or odd number==================");

function isEvenOrOddNum(num) {
  console.log("Given Number is:", num);
  var n1 = num % 2 == 0 ? true : false;
  return n1;
}
var n2 = isEvenOrOddNum(29);
console.log(`Is given Number is even:${n2}`);
var n2 = isEvenOrOddNum(44);
console.log(`Is given Number is even:${n2}`);
var n2 = isEvenOrOddNum(0);
console.log(`Is given Number is even:${n2}`);
var n2 = isEvenOrOddNum(101);
console.log(`Is given Number is even:${n2}`);
console.log(
  "=================Check word length is even or odd============================="
);
function wordLength(num) {
  console.log(`Given String is:"${num}"`);

  var length = num.length;
  var result = length % 2 == 0 ? true : false;
  return result;
}
var isCheck = wordLength("javaScript");
console.log("Given word length value is EVEN:", isCheck);
var isCheck = wordLength("Developer");
console.log("Given word length value is EVEN:", isCheck);
var isCheck = wordLength("Google");
console.log("Given word length value is EVEN:", isCheck);

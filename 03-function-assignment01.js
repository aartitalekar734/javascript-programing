console.log("=======1: function without parameter and return type=========");
function withoutpara() {
  console.log("This is without parameterised function");
}
withoutpara();
function withoutreturn() {
  console.log("This is without return type function");
}
withoutreturn();

console.log("==========2:Parameterised function===========");

function personaldtls(firstName, lastName, collegeName) {
  console.log("my firstName is:", firstName);
  console.log("my lastName is:", lastName);
  console.log("my collegeName is:", collegeName);
}
personaldtls("Aarti", "Talekar", "Agasti College Akole");
console.log("======3:additionFunction===============");

function addThreeValues(a, b, c) {
  var result = a + b + c;
  console.log("parameter are:", a, b, c);

  console.log("Addition of this Three number is:", result);
}
addThreeValues(10, 20, 30);
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "  Good", "  Morning");

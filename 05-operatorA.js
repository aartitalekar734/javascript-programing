function squareOfWorldLength(sentence) {
  console.log(`Given sentence is:"${sentence}"`);
  var result = sentence.split(" ");
  var length = result.length;
  console.log("length of given string word is:", length);
  var square = length * length;
  return square;
}

var result = squareOfWorldLength("JavaScript a");
console.log(`Square of given word length is:${result}`);

var result = squareOfWorldLength("GoogleChrome");
console.log(`Square of given word length is:${result}`);

var result = squareOfWorldLength("Developer Smart web");
console.log(`Square of given word length is:${result}`);
console.log("======================divide()================");

function divideStringWorld() {
  var num1 = "I am angular developer";
  console.log("given string is:", num1);

  var result = num1.length;
  console.log("String length is:", result);

  var word = num1.split(" ");
  var wordLength = word.length;
  console.log("Length of String word are:", wordLength);
  var result1 = result / wordLength;
  console.log(
    "output After dividing to string length by string word is:",
    result1
  );
  var result2 = result * wordLength;
  console.log("multiplication by string length and string world is:", result2);
}
divideStringWorld();

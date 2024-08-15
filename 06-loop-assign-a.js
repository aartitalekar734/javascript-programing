var word = "Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index);
  if (char == "e") {
    count++;
  }
}
console.log(`Count of char e is : ${count}`);

console.log(`======= Sum of 1 to 5 number is===============`);
var sum = 0;
for (let index = 1; index <= 5; index++) {
  sum = sum + index;
}
console.log(`${sum}`);

console.log(`======= Sum of cube of numbers from 1 to 5 ===============`);
var sumOfCube = 0;
for (let index = 1; index <= 5; index++) {
  sumOfCube = sumOfCube + index * index * index;
}
console.log(`Sum of cube is: ${sumOfCube}`);
console.log("=======Count the total numbers of small and capital vowels======");
var string1 = "I am Very good IT Developer";
var count = 0;
var string2 = "aeiou";
for (var i = 0; i <= string1.length - 1; i++) {
  var char = string1.charAt(i);
  var char1 = char.toLowerCase();
  if (string2.includes(char1)) {
    count++;
  }
}
console.log(`Total number of vowels are ${count}`);

console.log("=========odd  positioned characters================");

function oddPositionedChars(string) {
  for (var i = 0; i <= string.length - 1; i++) {
    if (i % 2 == 1 && string.charAt(i) != " ") {
      console.log(`odd numbering is:${i} and string is:${string.charAt(i)}`);
    }
  }
}
oddPositionedChars("Hard work always pay back");
console.log("=============================");

oddPositionedChars("Soon i will be UI IT champ");

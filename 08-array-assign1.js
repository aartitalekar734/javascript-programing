const fruit = ["Banana", "orange", "apple", "mango", "water melon"];
console.log("Array is:", fruit);

console.log("======1 st and last element of an array=======");
console.log("1st element is:", fruit[0]);
console.log("Last element is:", fruit[fruit.length - 1]);
console.log("===========adding papaya to 0 index");
const fruit1 = ["Banana", "orange", "apple", "mango", "water melon"];
console.log(fruit1);

fruit1.unshift("papaya");
console.log(fruit1);
console.log("==========remove mango================================");
const fruit2 = ["Banana", "orange", "apple", "mango", "water melon"];
console.log(fruit2);

fruit2.splice(3, 1);
console.log(fruit2);
console.log("==========insert pineapple at last====================");
const fruit3 = ["Banana", "orange", "apple", "mango", "water melon"];
console.log(fruit3);

fruit3.push("pineapple");
console.log(fruit3);
console.log(
  "===========insert element dragon fruit before water melon============="
);
const fruit4 = ["Banana", "orange", "apple", "mango", "water melon"];
console.log(fruit4);

fruit4.splice(4, 0, "dragon fruit");
console.log(fruit4);
console.log(
  "===========replace an element orange with kiwi==================="
);
const fruit5 = ["Banana", "orange", "apple", "mango", "water melon"];
console.log(fruit5);

fruit5.splice(1, 1, "kiwi");
console.log(fruit5);
console.log("==========log the element from index 1 to 4=============");

const fruit6 = ["Banana", "orange", "apple", "mango", "water melon"];
console.log(fruit6);

console.log(fruit6.slice(1, 4));
console.log("=======log last 3 element on console===========");
const fruit7 = ["Banana", "orange", "mango", "water melon"];
console.log(fruit7);

console.log(
  `${fruit7[fruit7.length - 3]}, ${fruit7[fruit7.length - 2]},${
    fruit7[fruit7.length - 1]
  }`
);

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log("length of an array is:", arrayNumbers.length);

console.log("=============== 1st and last number=====================");
console.log("First number is:", arrayNumbers[0]);
console.log("last  number is:", arrayNumbers[arrayNumbers.length - 1]);
console.log("===========log the 3rd last element using length property=======");

console.log(arrayNumbers[arrayNumbers.length - 3]);
console.log(
  "===============for of loop(even number example)============================="
);
const arrayNumbers1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers1);

for (const element of arrayNumbers1) {
  if (element % 2 == 0) {
    console.log(element);
  }
}
console.log("=====for of loop(odd number example)=========");
const arrayNumbers2 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers2);

for (const element of arrayNumbers2) {
  if (element % 2 == 1) {
    console.log(element);
  }
}
console.log("=====for of loop(find number which are multiple by 5)=========");
const arrayNumbers3 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers3);

for (const element of arrayNumbers3) {
  if (element % 5 == 0) {
    console.log(element);
  }
}
console.log("=========check 115 is available in array==========");
const arrayNumbers4 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers4);
console.log(arrayNumbers4.includes(114));
console.log("=========check 23 is available in array==========");
const arrayNumbers5 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers5);
console.log(arrayNumbers5.includes(23));
console.log("==========insert number 55 66 at 3rd index======");

const arrayNumbers6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers6);
const result = arrayNumbers6.splice(3, 0, 55, 66);
console.log(result);
console.log(arrayNumbers6);
console.log("==========delete 3 number starting from index 4======");

const arrayNumbers7 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers7);
const result1 = arrayNumbers7.splice(3, 4, 11, 29, 9, 60);
console.log(result1);
console.log(arrayNumbers7);
console.log("find all the even positioned element");
const arrayNumbers8 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const element of arrayNumbers8) {
  if (element % 2 == 0) {
    console.log(element);
  }
}
  console.log("find all the odd positioned element");
  const arrayNumbers9 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
  for (const element of arrayNumbers9) {
    if (element % 2 == 1) {
      console.log(element);
    }
  }
  console.log("find sum of all array element");
  const arrayNumbers10=[20,31,40,25,23,11,29,9,60,2,11];
  let sum=0;
  for (const element of arrayNumbers8) 
      {
        sum=sum+element;
      
           }
console.log("sum of array element is:",sum);

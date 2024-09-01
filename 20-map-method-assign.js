const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("=========Adding 10 into Each element========");
console.log(arrayNumbers);

const result = arrayNumbers.map((element) => {
  return element + 10;
});
console.log(result);
console.log("========cube of each array element===========");
console.log(arrayNumbers);

const result1 = arrayNumbers.map((element) => {
  return element * element * element;
});
console.log(result1);
console.log("==============Adding index value============");

let newArray=arrayNumbers.map((element, index) => {
    return element+index;
    
    
    
});
console.log(newArray);




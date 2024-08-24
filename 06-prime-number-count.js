function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}

const array = [3, 9, 7, 6, 19, 29, 53];
let count = 0;
for (const element of array) {
  var result = isPrime(element);
  if (result == true) {
    console.log(`${element} is prime number`);

    count++;
  }
}
console.log(`Total prime numbers from given array [${array}] are:${count}`);

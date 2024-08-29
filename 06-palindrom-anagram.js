console.log("==================palindrome=============");

function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    console.log(`${str} is palindrome`);
  } else {
    console.log(`${str} is not palindrome`);
  }
}

isPalindrome("dad");

isPalindrome("madam");
isPalindrome("121");

isPalindrome("111");

isPalindrome("499");

console.log("==========================anagram=============");
function isAnagram(str1, str2) {
  let n1 = str1.split("").sort().join(" ");
  let n2 = str2.split("").sort().join(" ");

  for (let i = 0; i < n1.length; i++) {
    if (n1.length === n2.length) {
      if (n1[i] === n2[i]) {
        console.log(`strings ${str1} and ${str2} are  anagram`);
        break;
      } else {
        console.log(`strings ${str1} and ${str2} are not anagram`);
      }
    } else {
      console.log(`${n1}and ${n2} are not equal in length`);
    }
    break;
  }
}
isAnagram("silent", "listen");
isAnagram("hello", "world");
isAnagram("such", "much");

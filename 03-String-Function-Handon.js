var sentence = "   Hey you are doing good, keep it up   ";
console.log(`given string is:${sentence}`);
console.log("=====================================================");

console.log("Length of given string is:", sentence.length);
console.log("========================================================");

var result = sentence.trim();
console.log(
  `After Removing leading and trailing spaces string will be:${result}, "String length is":${result.length}`
);
console.log(
  "=========================================================================="
);

var a = sentence.length - result.length;
console.log("Total number of extra spaces removed are:", a);
console.log(
  "==========================================================================="
);

console.log(
  ` After triming character at first position is:${result.charAt(
    0
  )} ,character at last position is:${result.charAt(result.length - 1)}`
);
console.log(
  "==========================================================================================="
);

var split1 = result.split(" ");
console.log(split1);

console.log(
  `Total Number of words in trimmed string are: ${split1.length}, & "String is:" ${split1}`
);
console.log(
  "===================================================================================================="
);

console.log(
  `index of the word good in trimmed string are :${result.indexOf("good")}`
);
console.log("=======================================================");

console.log(
  "Substring of trim string starting from index 22 is:",
  result.substring(22)
);

console.log(
  "=========================================================================="
);
console.log(`does the trim string ends with "up"? ${result.endsWith("up")}`);
console.log("================================================================");

console.log(
  `does the trim string starts with "hey" ${result.startsWith("Hey")}`
);

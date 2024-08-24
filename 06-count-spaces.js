function spaceCount(string1){
    let count=0;
    for (let i = 0; i < string1.length; i++) {
        
        if(string1[i]==" "){
            count++;
        }
        
    }
return count;
}
let result=spaceCount("Revision is the mother of success");
console.log(`Total number of white spaces from string "Revision is the mother of success" are: ${result}`);

let result1=spaceCount("JavaScript is the language of internet world");
console.log(`Total number of white spaces from string "JavaScript is the language of internet world" are: ${result1}`);

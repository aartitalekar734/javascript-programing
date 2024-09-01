const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
 arrayNumbers.forEach((element,index)=>{
    
    console.log(element,index);
    
})
console.log("=======positive numbers=============");

arrayNumbers.forEach((element)=>{
if(element>=0){
    console.log(element);
    
}
})
console.log("=======Negative numbers=======");
const result1=[];
arrayNumbers.forEach((element,index)=>{
    if(element<0){
        result1.push(element)
        
    }
});
console.log(result1);

console.log("======even numbers==============");

arrayNumbers.forEach((element)=>{
    if(element%2==0){
        console.log(element);
        
    }
});
console.log("============sum of all numbers=========");
let result=0;
arrayNumbers.forEach((element)=>{
result=result+element;


});


console.log(result);

console.log("============Even index array value==============");
arrayNumbers.forEach((element,index)=>{
    if(index%2==0){
console.log(element);

    }
    
    
})








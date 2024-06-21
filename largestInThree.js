// Largest in Three Number 

function largestInThree(num1, num2, num3){
  
  /*  Logic : Using Math.max
    const largest =  Math.max(num1,num2,num3);
    console.log(`Largest = ${largest}`);

  */  
 
   // Logic : Using if-else statements
   if(num1>num2 &&num1>num3){
     console.log(`Largest = ${num1}`);
   }
   else if(num2>num3){
    console.log(`Largest = ${num2}`);
   }
   else{
    console.log(`Largest = ${num3}`);
   }     

}
largestInThree(34,67,89);
largestInThree(134,67,89);
largestInThree(34,467,89);
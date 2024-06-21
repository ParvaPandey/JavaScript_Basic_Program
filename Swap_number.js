function swapTwoNumber(num1 , num2){
    console.log(`Before swapping Number1 : ${num1} , Number2 : ${num2}`);
    
    [num1 , num2] = [num2 , num1];    // method : 1 > using array destructuring

    // let num3;                     // method : 2 > using third variable 
    // num3 = num1;
    // num1 = num2;
    // num2 = num3;
    
    console.log(`After swapping Number1 : ${num1} , Number2 : ${num2}`);
 }
 
 swapTwoNumber(45,67);
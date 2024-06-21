// Javascript program to find sum of first n natural numbers. 
      
         function sumOfFirstNaturalNumber(num){
          let sum = 0;
          for(let i = 1; i <= num; i++){
            sum =sum + i; 
          }
          console.log("Sum of first n natural numbers = ", sum);
         }
        
        sumOfFirstNaturalNumber(5); 
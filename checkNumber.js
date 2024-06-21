// 	JavaScript Program to Check if a number is Positive, Negative, or Zero
       
function checkingANumber(number){
    if (typeof number !== 'number' || isNaN(number)) {
        console.log("Not a valid number:", number);
    }
     else if (number == 0) {
        console.log("Number is Zero:", number);
    }
     else if (number > 0) {
        console.log("Number is Positive:", number);
    }
     else {
        console.log("Number is Negative:", number);
    }
}

checkingANumber(56);
checkingANumber("565ty");
checkingANumber(0);
checkingANumber(900000);
checkingANumber(-100);
checkingANumber(0);

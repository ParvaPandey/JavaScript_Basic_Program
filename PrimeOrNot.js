function PrimeOrNot(num) {
    if (num <= 1) {
        console.log(`${num} is not Prime`);
        return;
    }

    let flag = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log(`${num} is Prime`);
    } else {
        console.log(`${num} is not Prime`);
    }
}

PrimeOrNot(45);  // 45 is not Prime
PrimeOrNot(2);   // 2 is Prime
PrimeOrNot(12);  // 12 is not Prime
PrimeOrNot(11);  // 11 is Prime

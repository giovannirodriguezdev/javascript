function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

// 1.
let a = 5;

while (a <= 100) {
  console.log(a);
  a += 5;
}

// 2.
let b = 100;

while (b >= -100) {
    console.log(b);
    b--;
}

// 3.
let num = 0;
let c = 0;

while (c < 5000) {
  if (c % 2 === 0) {
    num += 3;  
  } else {
    num -= 1;
  }
  c++;
}

console.log(num);

// 4.
let d = getRandomNumber();
  
while (d % 11 !== 0) {
    console.log(d); 
    d = getRandomNumber();  
}
  
console.log(`Found a number divisible by 11: ${d}`);
  
// A Dice has 1 to 6
n = Math.random(); // generate a random number.
// The Math.random() function returns a random floating-point(decimal point), in the range 0 to less than 1 (0 to5) with approximately uniform distribution over that range — which you can then scale to your desired range.
n = n * 6; //making the number greater than 1 which will generate 0 to 5
n = Math.floor(n) + 1; // Math.floor() cuts off the decimal point while +1 adds 1 to the value of n.
console.log(n);

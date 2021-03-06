/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number'){
    console.log("please insert a number");
    return;
  }
  for (var i=n-1; i>1; i--){
  	if (n%i === 0){
  		return false;
  	}
  }
  return true;
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

var primeSieve = function(start, end) {
	var primeArr = []
	if (typeof start !== 'number' || typeof end !== 'number'){
      console.log("please insert two numbers");
      return;
  }
  for (i=start; i<=end; i++){
		if(primeTester(i)){
			primeArr.push(i);
		}
	}
  console.log("prime numbers between " + start + " and " + end + " : " + primeArr)
  return primeArr; 
};

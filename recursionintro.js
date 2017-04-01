//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
  //base
  if(arr.length === 1 ) {
    return arr[0];
  }
  //
  return [arr[arr.length-1]].concat(recursiveReverse(arr.slice(0,arr.length-1)));
}

console.log(recursiveReverse([1,2,3,4,5]));

/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

function grd(num1, num2) {
  if (Math.max(num1, num2) % Math.min(num1, num2) === 0) {
    return Math.min(num1, num2);
  }

  return grd( (Math.max(num1, num2) % Math.min(num1, num2)), Math.max(num1, num2) );
}

console.log(grd(794, 45798656));

// sum all numbers in a range
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
}

// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

// Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.

function convertToF(celsius) {
  let fahrenheit = (9 / 5) * celsius + 32;
  return fahrenheit;
}
// console.log(convertToF(100));
convertToF(30);
// Basic Algorithm Scripting: Reverse a String

function reverseString(str) {
  let word = str.split('');
  let reverseWord = word.reverse();
  let combine = reverseWord.join('');
  // console.log('TCL: reverseString -> reverseWord', combine);
  return (str = combine);
}
console.log(
  // 'TCL: reverseString -> reverseString(str)',
  reverseString('how are you today')
);
reverseString('how are you today');

// Basic Algorithm Scripting: Factorialize a Number

function factorialize(num) {
  if(num <= 0 || 1){
    return 1}
else{
  num = 
  // for (let i = 0; i < num; i++) {
   
  // }
  return num* factorial(num-1)
};
}

factorialize(5);
// console.log("TCL: factorialize(5);", factorialize(5);)
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} ​

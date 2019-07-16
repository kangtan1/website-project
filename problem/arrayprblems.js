// print reverse the array values
function reverse(array) {
  // create a for loop with decrement values
  for (let i = array.length - 1; i >= 0; i--) {
    //pass the loop value into the arry augument
    console.log(array[i]);
  }
}

// write a funtion that check the value of the array
function uniform(arr) {
  let newarr = arr[0];
  for (let i = 1; (i = arr.length); i++) {
    if (arr[i] !== newarr) {
      return false;
    } else {
      return true;
    }
  }
}

// write a funciton that sum the number in the array
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

//find the max valur in the array
function max(arr) {
  let max = arrr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

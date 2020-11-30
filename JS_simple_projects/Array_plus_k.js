//Brutal force


//another solution
const findPair = (array, k) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return false;
}


//another solution
function matchSum(arr, k){
  for( var i=0; i < arr.length; i++ ){
    for(var j= i+1; j < arr.length; j++){
       if (arr[i] + arr[j] === k){
        return true;
      }
     }
    }
    return false;
  }

var myArray = [3,4,1,2];

function bubbleSort(arr){
  var isSwapped = false;
  var count = 0;

  while(!isSwapped) {
    isSorted = false;
    count++;
    for(var i = 0; i < arr.length; i++){
      var curr = arr[i];
      var next = arr[i + 1];
      var moves = 0;
      if (curr > next) {
        arr[i] = next;
        arr[i + 1] = curr;
        moves++;
      }
    }
    if (moves === 0){
      isSorted = true;
    }
  }
  return count;
};
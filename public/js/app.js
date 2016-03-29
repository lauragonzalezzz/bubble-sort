function bubbleSort(arr){
  var bubbledArr = arr;
  var isSwapped = false;
  var count = 0;

  while(!isSwapped) {
    isSorted = false;
    for(var i = 0; i < bubbledArr.length -1; i++){
      var curr = bubbledArr[i];
      var next = bubbledArr[i + 1];
      var moves = 0;
      if (curr > next) {
        bubbledArr[i] = next;
        bubbledArr[i + 1] = curr;
        moves++
        count += moves;
      }
    }
    if (moves === 0){
      isSwapped = true;
    }
  }
  return count;
};

Array.prototype.bubbleSort = function(arr){
  console.log('this',this);
  var bubbledArr = arr;
  var isSwapped = false;

  while(!isSwapped) {
    isSorted = false;
    for(var i = 0; i < bubbledArr.length -1; i++){
      var curr = bubbledArr[i];
      var next = bubbledArr[i + 1];
      var moves = 0;
      if (curr > next) {
        bubbledArr[i] = next;
        bubbledArr[i + 1] = curr;
        moves++
      }
    }
    if (moves === 0){
      isSwapped = true;
    }
  }
  return bubbledArr;
};

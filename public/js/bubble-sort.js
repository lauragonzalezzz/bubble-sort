// Regular function

function bubbleSort(arr){
  var bubbledArr = arr;
  var isSwapped = false;
  var count = 0;

  while(!isSwapped) {
    isSwapped = false;
      var moves = 0;
    for(var i = 0; i < bubbledArr.length -1; i++){
      var curr = bubbledArr[i];
      var next = bubbledArr[i + 1];
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
  return bubbledArr;
};

// Array method function

Array.prototype.bubbleSort = function(){
  var isSwapped = false;

  while(!isSwapped) {
    isSorted = false;
      var moves = 0;
    for(var i = 0; i < this.length -1; i++){
      var curr = this[i];
      var next = this[i + 1];
      if (curr > next) {
        this[i] = next;
        this[i + 1] = curr;
        moves++
      }
    }
    if (moves === 0){
      isSwapped = true;
    }
  }
  return this;
};

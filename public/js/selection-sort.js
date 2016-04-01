function selectionSort(arr){

// i is the initial minimum number position
// smallest is the percieved smallest number
  for(var i = 0; i < arr.length - 1; i++) {
    var smallest = i;

  // comp is the index of the value the 'smallest' value is compared against
    for (var comp = i + 1; comp < arr.length; comp++){
      if (arr[comp] < arr[smallest]) {
        smallest = comp;
      }; //Ends if statement 1
    }; //Ends for loop 2

  // switch the smallest number to the first index
    if (smallest !== i) {
      var limbo = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = limbo;
    };  //Ends if statement 2
  }; //Ends for loop 1

  return arr;
}; //Ends selection sort

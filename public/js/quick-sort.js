function quickSort(arr){

    var pivot = arr[0];
    var leftArr = [];
    var rightArr = [];

// Base Case
    if (arr.length === 1){
      return arr;
    };
// Recurse
    for (var i = 1; i < arr.length; i++){
      if (arr[i] < pivot){
        leftArr.push(arr[i]);
      }
      else {
        rightArr.push(arr[i]);
      };
    };
    leftArr = quickSort(leftArr);
    rightArr = quickSort(rightArr);

    return leftArr.concat(pivot, rightArr);

}; //End of quickSort

console.log(quickSort([2,1,5,3,1,7,0]));
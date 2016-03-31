function quickSort(arr){

    var pivot = arr[0];
    var leftArr = [];
    var rightArr = [];
    if (arr.length === 0) {
      return [];
    }
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

console.log(quickSort([3,2,1]));
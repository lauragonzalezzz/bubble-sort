function mergeSort(arr){

// Base Case
  if (arr.length === 0){
    return [];
  }
  if (arr.length === 1){
    return arr;
  };

// Declare Variable Arrays
  var leftArr = [];
  var rightArr = [];

// Iterate
  for (var i = 0; i < arr.length; i++){
    if (i % 2 === 0) {
      leftArr.push(arr[i]);
    }
    else {
      rightArr.push(arr[i]);
    };
  };
// Recurse and Sort Left and Right Arrays
  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

// Run arrMerge Function on Left and Right Arrays, return
  return arrMerge(leftArr, rightArr);

}; //End of Merge Sort


function arrMerge(left, right){
  var result = [];
console.log('left',left);
console.log('right',right);
  while (left.length > 0 && right.length > 0){
    if (left[0] <= right[0]){
      var lshifted = left.shift();
      result.push(lshifted);
    }
    else {
      var rshifted = right.shift();
      result.push(rshifted);
    };
  };

  while (left.length > 0){
    var l2shifted = left.shift();
    result.push(l2shifted);
  };
  while (right.length > 0){
    var r2shifted = right.shift();
    result.push(r2shifted);
  };
  console.log('result',result);
  return result;

};
mergeSort([123,1,45,15,454,12,1,0]);
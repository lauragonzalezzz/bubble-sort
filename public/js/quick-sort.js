function quickSort(arr){

    var pivot = arr[0];
    var leftArr = [];
    var rightArr = [];
    if (arr.length === 1){
      return arr;
    };

    for (var i = 0; i < arr.length; i++){
      if (arr[i] < pivot){
      leftArr.push(arr[i]);
      }
      else {
        rightArr.push(arr[i]);
      };
    }
    quickSort(leftArr);
    console.log('leftArr',leftArr);
    leftArr.concat(pivot);
    console.log('leftArr',leftArr);
    quickSort(rightArr);

  // leftArr.concat(pivot);
  return leftArr.concat(rightArr);

}; //End of quickSort
console.log(quickSort([3,3,1,2,4]));

// name pivot
// separate pivot into own array
// compare original array to pivot, if less, leftArr, if equal or more, rightArr
//
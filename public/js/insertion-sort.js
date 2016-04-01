function insertionSort(arr){

  for(var i = 1; i < arr.length; i++) {
    curr = arr[i];
    prev = i - 1;

    while (prev >= 0 && arr[prev] > curr){
      arr[prev+1] = arr[prev];
      prev--;
    };
    arr[prev+1] = curr;
  };
  return arr;
} //End of Insertion Sort
var myArray = [4,3,2,1];

var contentDiv = document.getElementById('content');
var arrayOutput = document.createElement('div');
arrayOutput.innerHTML = bubbleSort(myArray);
contentDiv.appendChild(arrayOutput);

var sortButton = document.createElement('button');
sortButton.innerHTML = 'Sort';
contentDiv.appendChild(sortButton);

var barsDiv = document.getElementById('barsDiv');
function createArrayBars(arr){
  for (var i = 0; i < arr.length; i++) {
    var indvBar = document.createElement('div');
    indvBar.classList.add('indvBar');
    indvBar.innerHTML = arr[i];
    barsDiv.appendChild(indvBar);

  }
};
createArrayBars(myArray);


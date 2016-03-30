var myArray = [4,3,2,1,5,6];

var contentDiv = document.getElementById('content');
var arrayOutput = document.createElement('div');

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

// arrayOutput.innerHTML = bubbleSort(myArray);
// contentDiv.appendChild(arrayOutput);

setInterval(function(){
  bubbleSort(myArray);
}, 1000);
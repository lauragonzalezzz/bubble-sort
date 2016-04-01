var myArray = [9,3,2,8,5,6,4,10,7,1];

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
    indvBar.style.height = arr[i]*75 + "px";
    barsDiv.appendChild(indvBar);
  }
};
// createArrayBars(myArray);

// arrayOutput.innerHTML = bubbleSort(myArray);
// contentDiv.appendChild(arrayOutput);
bubbleSort(myArray);
// setInterval(function(){
//   bubbleSort(myArray);
// }, 5000);
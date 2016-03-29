var fs = require('fs');
var vm = require('vm');
var chai = require('chai');
var functionsFile = fs.readFileSync(process.cwd() + '/public/js/app.js');
vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL

var expect = chai.expect;
var should = chai.should();

describe('Bubble Sort', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function');
  });

  it('should return a number', function(){
    var myArr = [3,2,1];
    expect(bubbleSort(myArr)).to.be.a('number');
  });

  it('should return the necessary moves to sort', function(){
    var myArr2 = [4,3,2,1];
    expect(bubbleSort(myArr2)).to.equal(5);

    var myArr3 = [5,1,4,7];
    expect(bubbleSort(myArr3)).to.equal(2);

    var myArr4 = [10,9,21,35,17];
    expect(bubbleSort(myArr4)).to.equal(3);
  });

});

describe('Extra Bubble Sort', function() {

  it('should be a method on the Array class', function(){
    expect(Array.prototype).to.have.property('bubbleSort').that.is.a('function');
  });

    it('should return a new array', function(){
      var myArr5 = [5,4,3,2,1];
      expect(Array.prototype.bubbleSort(myArr5)).to.deep.equal([1,2,3,4,5]);
  });

});
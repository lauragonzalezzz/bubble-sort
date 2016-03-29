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
    expect(bubbleSort([3,2,1])).to.be.a('number');
  });

});
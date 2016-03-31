var fs = require('fs');
var vm = require('vm');
var chai = require('chai');
var functionsFile = fs.readFileSync(process.cwd() + '/public/js/quick-sort.js');
vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL

var expect = chai.expect;
var should = chai.should();

describe('Quick Sort', function(){

  it('should be a function', function(){
    expect(quickSort).to.be.a('function');
  });

  it('should return an array', function(){
    expect(quickSort([3,2,4])).to.be.an('array');
  });

  it('should return a sorted array', function(){
    expect(quickSort([5,4,3,67,3])).to.deep.equal([3,3,4,5,67]);
  });
});
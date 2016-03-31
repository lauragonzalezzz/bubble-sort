

describe('Bubble Sort', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function');
  });

  it('should return an array', function(){
    var myArr = [3,2,1];
    expect(bubbleSort(myArr)).to.be.an('array');
  });

  it('should return the sorted array', function(){
    var myArr2 = [4,3,2,1];
    expect(bubbleSort(myArr2)).to.deep.equal([1,2,3,4]);

    var myArr3 = [5,1,4,7];
    expect(bubbleSort(myArr3)).to.deep.equal([1,4,5,7]);

    var myArr4 = [10,9,21,35,17];
    expect(bubbleSort(myArr4)).to.deep.equal([9,10,17,21,35]);
  });

});

describe('Extra Bubble Sort', function() {

  it('should be a method on the Array class', function(){
    expect(Array.prototype).to.have.property('bubbleSort').that.is.a('function');
  });

  it('should return a new array', function(){
    var myArr5 = [5,4,3,2,1];
    expect(myArr5.bubbleSort()).to.deep.equal([1,2,3,4,5]);
  });

  it('should be called directly as an array method', function(){
    var am = [3,2,1];
    expect(am.bubbleSort()).to.deep.equal([1,2,3]);
  });

});
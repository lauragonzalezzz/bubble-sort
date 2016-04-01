describe('Insertion Sort', function(){

  it('should be a function', function(){
    expect(insertionSort).to.be.a('function');
  });

  it('should return an array', function(){
    expect(insertionSort([3,2,4])).to.be.an('array');
  });

  it('should return a sorted array', function(){
    expect(insertionSort([5,4,3,67,3])).to.deep.equal([3,3,4,5,67]);
    expect(insertionSort([1,2,3,4,5,6,7,8,9])).to.deep.equal([1,2,3,4,5,6,7,8,9]);
    expect(insertionSort([654,0,123456,1])).to.deep.equal([0,1,654,123456]);
    expect(insertionSort([0,-1,3])).to.deep.equal([-1,0,3]);
  });
});
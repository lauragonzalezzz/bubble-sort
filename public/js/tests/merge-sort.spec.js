describe('Merge Sort', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function');
  });

  it('should return an array', function(){
    expect(mergeSort([3,2,4])).to.be.an('array');
  });

  // it('should return a sorted array', function(){
  //   expect(quickSort([5,4,3,67,3])).to.deep.equal([3,3,4,5,67]);
  // });
});
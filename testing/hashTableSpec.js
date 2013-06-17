// Create your tests for the hashTable here...
describe("#hashTable", function(){
  var hasht = makeHash();
  beforeEach(function(){
    hasht.insert('poop', 5);
    hasht.insert('seven', 'ten');
    hasht.insert('five', 5);
  });
  it('should return the value when searched by key', function(){
    var ret = hasht.retrieve('seven');
    //the hashtable is wrong
    expect(ret.key).toEqual('five');
  });
});
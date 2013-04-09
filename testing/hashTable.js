var makeHash = function(){
  var storage = [];
  var max = 4;
  var storedItems = 0;
  var resize = function(){
    var oldStorage = storage;
    max = max * 2;
    storage = [];
    _(oldStorage).each(function(newStorage, collisions){
      collisions && _(collisions).each(function(item){
        hashTable.set(item.key, item.value);
      });
    });
  };
  var hashTable = {
    insert: function(key, val){
      storedItems++;
      max / 4 < storedItems && resize();
      var index = hash(key, max);
      storage[index] = storage[index] || [];
      storage[index].push({key:key, val:val});
    },
    retrieve: function(key){
      return _.reduce(storage[hash(key, max)], function(result, item){
        return item.key === key ? item.value : result;
      });
    }
  };
  return hashTable;
};

var hash = function(key, max){
  return _.reduce(key, function(hash, letter){
    letter = letter.charCodeAt(0);
    return (Math.pow(hash, letter) + letter) % max;
  });
}

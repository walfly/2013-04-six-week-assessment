/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
	var storage = [];
	this.add = function(item){
		storage.push(item);
	}
  this.remove = function(){
    return storage.shift(item);
  }
};
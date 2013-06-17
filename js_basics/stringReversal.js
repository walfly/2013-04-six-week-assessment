/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var strRev = function(string){
	var arr = string.split(""),
		  retArr = [],
      i;
  for(i = arr.length-1; i >= 0; i --){
    retArr.push(arr[i]);
  }
  return retArr.join("");
};

var everyOdd = function(number){
  //assumed between did not include the number itself
  var retNum = 0
  for(var i = 0; i < number; i ++){
    if(i%2 !== 0){
      retNum += i;
    }
  }
  return retNum;
}
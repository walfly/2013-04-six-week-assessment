/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var reccursPrint = function(array){
  console.log(array.shift());
  if(array.length){
    reccursPrint(array);
  }
}
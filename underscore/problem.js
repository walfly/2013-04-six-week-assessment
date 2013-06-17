/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var isArray = function(obj){
  return toString.call(obj) == '[object Array]'
}

var each = function(obj, cb){
  if(isArray(obj)){
    for(var i = 0; i < obj.length; i ++){
      cb.call(obj[i], i, obj);
    }
  }else if(typeof(obj) === 'string'){
    var str = obj.split("");
    for(var i = 0; i < str.length; i ++){
      cb.call(str[i], i, obj);
    }
  } else if(typeof(obj) === 'object'){
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        cb.call(obj[key], key, obj);
      }
    }
  }
}

var filter = function(obj, cb){
  var retArr = [];
  each(obj, function(item){
    if (cb(item)){
      retArr.push(item);
    }
  });
  return retArr;
}
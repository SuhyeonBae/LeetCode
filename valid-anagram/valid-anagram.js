/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();
    for(let str of s){
      if(mapS.has(str)){
        mapS.set(str, mapS.get(str)+1);
      } else {
        mapS.set(str, 1);
      }
    }
  
    for(let str of t){
      if(mapT.has(str)){
        mapT.set(str, mapT.get(str)+1);
      } else {
        mapT.set(str, 1);
      }
    }
  
  if(s.length === t.length) {
    for(let str of s){
      if(!mapT.has(str) || mapS.get(str) !== mapT.get(str)){
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
  
};
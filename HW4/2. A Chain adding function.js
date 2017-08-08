function add(leftNumber){
  var totalFn = function(rightNumber) {
    return add(leftNumber + rightNumber);
  };
  
   totalFn.valueOf = function () {
     return leftNumber;
   };

  return totalFn;
}
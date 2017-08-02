var numberFun = function(number){
     return function(p){
       if (p  === undefined) { return number; }  else { return p(number); }
     };
};

var zero = numberFun(0);
var one = numberFun(1);
var two = numberFun(2);
var three = numberFun(3);
var four = numberFun(4);
var five = numberFun(5);
var six = numberFun(6);
var seven = numberFun(7);
var eight = numberFun(8);
var nine = numberFun(9);

function times(p) {
  return function(l) {
    return l * p; 
  };
}

function plus(p) {
  return function(l) {
    return l + p; 
  };
}

function minus(p) {
  return function(l) {
    return l - p; 
  };
}

function dividedBy(p) {
  return function(l) {
    return l / p; 
  };
}

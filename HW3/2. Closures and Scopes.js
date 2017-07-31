function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
  (function () { 
      var currentElement = i;
      var mapCurrentElement = function() { return currentElement;};
      callbacks.push(mapCurrentElement);
    }());
  }
  
  return callbacks;
}
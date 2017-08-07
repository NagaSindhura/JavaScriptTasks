var totalWeight = 0 , instances =0;
var Cat = (function () {
  return function ( name, weight) { 
    if (arguments.length < 2) {
      throw new Error('Both name and weight sould be specified.');
    }
  
     Object.defineProperty(this, 'weight', {
       get: function() { return weight ; },
       set: function(w) {  totalWeight -= weight - w;
                         weight = w; }                         
      });
      
      Object.defineProperty( Cat , "name" , {
       set: function() {return name; },
       get: function(n) {name = n }                          
      });
  
     totalWeight += weight;
     instances++;
   }
  }());

  Object.defineProperty( Cat , "averageWeight" , {
     get: function() { return function() { return totalWeight/instances  }
}});
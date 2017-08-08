function compose(...args) {
  return function (a) { 
    if(args.length == 0) { 
      return a;
    }
  
    var k = 0;
    for(var i = args.length -1 ; i > -1 ; i--) {
      k = k ==0 ? args[i](a) :  args[i](k);
      console.log(k);
    }
    
    return k;
  }
}
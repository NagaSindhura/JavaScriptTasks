function cache(func) {
   let cache = {};
    return function () {
        var key = JSON.stringify(arguments);
        
         if (key in cache) {
           return cache[key];
         }
        
        return cache[key] = func.apply(null,arguments);
    };
}
Array.prototype.square = function() {
    return this.map(function(num) { return num * num ;});
}

Array.prototype.cube = function() {
    return this.map(function(num) { return num * num * num ;});
}

Array.prototype.sum = function() {
    var sum = 0; 
    this.forEach(function(num) { sum =sum + num;});
    
    return sum;
}

Array.prototype.average = function() {
    return this.sum() / this.length;
}

Array.prototype.even = function() {
    return this.filter(function(num) {return num %2 == 0});
}

Array.prototype.odd = function() {
    return this.filter(function(num) {return num %2 == 1});
}
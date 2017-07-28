
function zero(p) {
	return operation(0, p);
}

function one(p) {
	return operation(1, p);
}

function two(p) {
	return operation(2, p);
}

function three(p) {
	return operation(3, p);
}

function four(p) {
	return operation(4, p);
}

function five(p)
{
	return operation(5, p);
}

function six(p) {
	return operation(6, p);
}

function seven(p) {
	return operation(7, p);
}

function eight(p) {
	return operation(8, p);
}

function nine(p) {
	return operation(9, p);
}

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


function operation(n, p)
{
	if (p === undefined) {
		return n;
	} 
	else {
		return p(n);
	}
}
function getMiddle(s) {
	var len = s.length;
	var evenOrOddLength = function() {
		return len % 2 == 0 ? 2: 1;
	}
  
	return s.substr(getMiddleIndex(len), evenOrOddLength());
}

function getMiddleIndex(l) {
	return l %2 == 0? (l/2) - 1 : (l -1 ) /2 ;
}

function UserException(message) {
   this.message = message + " is invalid";
   this.name = 'TypeError';
}

function IsNumeric(number) {
    return (number - 0) == number && (''+number).trim().length > 0;
}

function prefill(n, v) {
  try {
    if(IsNumeric(n) && n % 1 === 0 ){
      return Array(parseInt(n)).fill(v);
    }
  }
  catch(exception) {
    throw new UserException( n );
  }

  throw new UserException( n );
}
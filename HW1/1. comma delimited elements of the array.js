
CONST DELIMITER = ',';

function CommaDelimitedArray(array){
  var output = '';

  for(var i=0; i<array.length;i++)
  {
   output = output + (array.length-1 == i ? array[i]  : array[i] + DELIMITER);
  }

  return output;
}
function basic_op(operation, value1, value2)
{
  switch(operation)
  {
  case '+' : return value1 + value2;
  case '-' : return value1 - value2;
  case '*' : return value1 * value2;
  case '/' : return value1 / value2;
  return null;
  }
}
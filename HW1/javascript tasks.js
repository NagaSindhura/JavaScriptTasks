const PHONE_PRICE = 100;
const accessory_price = 20;
const spending_threshold =  150;
const bank_account_balance = 500;
const TAX_RATE = 0.18;

var price;
function printPhoneDetails()
{
console.log("$" + price.toFixed(2));
}

if ( PHONE_PRICE <= spending_threshold )
{
var need_accessory = prompt("Do you need accesories too!");
price = PHONE_PRICE  ;
if(need_accessory  === 'Yes') 
{
price  += accessory_price;
}

price = price + ( price * TAX_RATE );
}


printPhoneDetails();

-----------------------------------------------
var number1 = prompt("lease enter a number");
var num = Number(number1);

function oppositeNumber()
{
return num*-1;
}

console.log(oppositeNumber());
-----------------------------------------------
function basicOp(operation, value1, value2)
{
  // Code
  switch(operation)
  {
  case '+' : return value1 + value2;
  case '-' : return value1 - value2;
  case '*' : return value1 * value2;
  case '/' : return value1 / value2;
  return null;
  }
}
-----------------------------------------------
const RENT_DAY = 40;
function rentalCarCost(d) {
  // Your solution here
   return (( d * RENT_DAY) - getDiscount(d));
  }
  
  function getDiscount(days)
  {
  return days >= 7 ? 50 : ((days >=3 && days <7) ? 20 : 0);
  }
  

-----------------------------------------------

function printArray(array){
  //show me the code!
  var output = '';
  for(var i=0; i<array.length;i++)
  {
   output = output + (array.length-1 == i ? array[i]  : array[i] + ',');
  }
 //console.log(output);
 //console.log(array.join());
  
  return output;
  
}
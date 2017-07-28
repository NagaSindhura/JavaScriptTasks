 const RENT_DAY = 40;

 function rentalCarCost(d) {
     return (( d * RENT_DAY) - getDiscount(d));
  }
  
  function getDiscount(days) {
     return days >= 7 ? 50 : ((days >=3 && days <7) ? 20 : 0);
  }
  
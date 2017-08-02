function partitionOn(pred, items) {
  var trueArr = items.filter(pred);
  var falseArr = items.filter(e => !pred(e));
  items.length = 0;
  items.push.apply(items, falseArr.concat(trueArr));

  return falseArr.length ;
}

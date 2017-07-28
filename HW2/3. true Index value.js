function partitionOn(pred, items) {
  return items.map(pred).sort().indexOf(true) ;
}
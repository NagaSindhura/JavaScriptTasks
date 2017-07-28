function countWords(str) {
   
  if( !str || !str.trim()) {
    return 0;
  }
  
  return wordsSplit().length;

  function wordsSplit() {
    return str.replace(/?+/g , ' ').replace(/\s\s+/g, ' ').trim().split(' ');
  }
}
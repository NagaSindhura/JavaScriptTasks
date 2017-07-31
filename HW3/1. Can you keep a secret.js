function createSecretHolder(secret) {

  var obj = {
    hideYext : secret,
    setSecret :  function(secret2) {
                   this.hideYext = secret2 || secret 
                 },
    getSecret :  function() { 
                   return this.hideYext ; 
                 }
  };

  return obj;
}
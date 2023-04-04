const validator = {
  isValid: function(card){
    let sum = 0,
      alt = false,
      i = card.length-1,
      num;
    while (i >=0){
      num = parseInt(card.charAt(i), 10);
      if (isNaN(num)){
        return false;
      }
      if (alt) {
        num*=2;
        if (num > 9){
          num = (num %10) + 1;
        }
      }
      alt = !alt;
      sum += num;
      i--;
    }
    if (sum % 10 === 0) {
      return true;
    } else{
      return false
    }
  },
  maskify: function(card){
    if (card.length<=4){
      return card
    }else{
      const last4 = card.slice(-4);
      const mask = "#".repeat(card.length - 4) + last4
      return mask
    }
  }
}
export default validator;

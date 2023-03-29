const validator = function (card){
  // Para operar se define e inicializa una varible
  let number = 0;
  if (card ===null || (isNaN(card) === true) ) {
    alert('Tarjeta no valida');
    return validator(card);
  }
  for (let j = 0; j < card.length; j++) {
    if (isNaN(card.charAt(j)) === true);
    number++}
  if (number >0){
    alert('Solo se puede ingresar números para la tarjeta');
    return validator(card);
  }
  let sum = 0,
    alt = false,
    i = card.length-1,
    num;
  if (card.lenght < 13 || card.lenght > 19) {
    alert('Revise el número de tarjeta');
    return validator(card);
  }
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
  if (sum % 10 === 0 && sum!==0){
    return alert('Gracias por tu compra');
  } else{
    return alert('Tarjeta inválda');
  }
};

export default validator;

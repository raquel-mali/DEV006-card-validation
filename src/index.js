import validator from './validator.js';
document.querySelector("#validate").addEventListener("click", ()=>{
  const card=document.querySelector("#card")
  console.log(card.value)
  if (card.length < 13 || card.length >19) {
    alert('Revise el número de tarjeta');
  }
  if (validator.isValid(card.value)) {
    const resultMask = validator.maskify(card.value);
    card.value = resultMask;
    alert("Tu tarjeta "+resultMask+'. Gracias por tu compra');
  } else{
    const resultMask = validator.maskify(card.value);
    card.value = resultMask;
    alert('Tarjeta '+resultMask+' inválida');
  }
});

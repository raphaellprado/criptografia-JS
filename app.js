function cripto(text) {
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");    
    return text;
}
function decripto(text) {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");    
    return text;
}  
  // COMO USAR:
  const textoOriginal = "Texto Criptografado";
  const textoCriptografado = cripto(textoOriginal);
  const textoDescriptografado = decripto(textoCriptografado)
  console.log("Texto original:", textoOriginal);
  console.log("Texto criptografado:", textoCriptografado);
  console.log("Texto descriptografado:", textoDescriptografado);
/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
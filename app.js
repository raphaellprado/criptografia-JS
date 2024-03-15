function cripto() {
  let input = document.getElementById("cryto1").value;
  input = input.replace(/e/g, "enter");
  input = input.replace(/i/g, "imes");
  input = input.replace(/a/g, "ai");
  input = input.replace(/o/g, "ober");
  input = input.replace(/u/g, "ufat");    
  document.getElementById("descryto1").value = input;

}
function decripto() {
  let output = document.getElementById('descryto1').value;
  output = output.replace(/enter/g, "e");
  output = output.replace(/imes/g, "i");
  output = output.replace(/ai/g, "a");
  output = output.replace(/ober/g, "o");
  output = output.replace(/ufat/g, "u");    
  document.getElementById("descryto1").value = output;
}  
/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
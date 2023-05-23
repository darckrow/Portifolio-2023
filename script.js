const textoElemento = document.getElementById("texto");
const texto = "Olá, me chamo Ramon Matheus,\n Desenvolvedor Front-end.";
let index = 0;

function escreverTexto() {
  textoElemento.textContent += texto[index];
  if (texto[index] === "\n") {
    textoElemento.innerHTML += "<br>";
  }
  index++;
  
  if (index < texto.length) {
    setTimeout(escreverTexto, 100);
  
  }
}
escreverTexto();

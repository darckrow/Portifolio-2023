const textoElemento = document.getElementById("aboutsm");
const aboutsm = "Olá, me chamo Ramon Matheus,\n Desenvolvedor Front-end.";
let index = 0;

function escreverTexto() {
  textoElemento.textContent += aboutsm[index];
  if (aboutsm[index] === "\n") {
    textoElemento.innerHTML += "<br>";
  }
  index++;
  
  if (index < aboutsm.length) {
    setTimeout(escreverTexto, 100);
  
  }
}
escreverTexto();
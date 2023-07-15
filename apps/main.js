const entrada = document.querySelector("#entrada");
const botao = document.querySelector("#botao");
const containerCodigos = document.querySelector('#container-codigos');

const valorMinimoPermitido = 1;
const valorMaximoPermitido = 9999;
const codigoDoLote = 100000 + Math.round(Math.random() * 89999) + "";

let codigoDeBarra = geraCodigoDeBarra();
let listaCodigos = [];

botao.addEventListener("click", () => {
  const quantidadeDeCodigos = entrada.value;

  if (verificaSeENumero(quantidadeDeCodigos)) {
    alert("Valor inválido. Por favor digite um número");
  } else {

    if (verificaNumeroMinEMax(quantidadeDeCodigos)) {
      alert(`Valor não permitido! O valor tem que estar entre ${valorMinimoPermitido} e ${valorMaximoPermitido}`);
    } else {

      for (let i = 1; i <= quantidadeDeCodigos; i++) {
        criaParagrafo();
        listaCodigos.push(codigoDeBarra);
        codigoDeBarra = parseInt(codigoDeBarra) + 1;
      }
    }
  }
  entrada.value = "";
});

function criaParagrafo() {
  const paragrafo = document.createElement("p");
  paragrafo.classList.add("paragrafo");
  containerCodigos.appendChild(paragrafo);
  
  paragrafo.innerHTML = codigoDeBarra;
}

function geraCodigoDeBarra() {
  const codigoNacional = "789";
  let codigoDaQuantidade = "0001";
  return codigoNacional + codigoDoLote + codigoDaQuantidade;
}

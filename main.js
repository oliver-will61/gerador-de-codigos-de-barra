const entrada = document.querySelector("#entrada");
const botao = document.querySelector("#botao");

const codigoDoLote = 10000 + Math.round(Math.random()*8999)+"";
let codigoDebarra = geraCodigoDeBarra();

botao.addEventListener("click", () => {

    let quantidadeDeCodigos = entrada.value;

    const valorMinimo = 1;
    const valorMaximo = 9999;

    if(quantidadeDeCodigos > valorMaximo || quantidadeDeCodigos < valorMinimo) {
        alert (`Valor não permitido! O valor tem que estar entre ${valorMinimo} e ${valorMaximo}`);
        entrada.value = 1;
    } else {
        for (let i=1; i<= quantidadeDeCodigos; i++){
            criaParagrafo();
            codigoDebarra = parseInt(codigoDebarra) + 1;
        }    
    }
})

function criaParagrafo(){

    const containerCodigos = document.querySelector('#container-codigos'); 

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("paragrafo");
    containerCodigos.appendChild(paragrafo);
    
    paragrafo.innerHTML = codigoDebarra + "0" 
}

function geraCodigoDeBarra(){
    const codigoNacional = "789";
    let codigoDaQuantidade = "0001";
    return codigoNacional + codigoDoLote + codigoDaQuantidade;
}


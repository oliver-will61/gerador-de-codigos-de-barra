const botao = document.querySelector("#botao");
const codigoDoLote = 10 + Math.round(Math.random()*89)+"";
let codigoDebarra = geraCodigoDeBarra();
console.log(codigoDebarra);

botao.addEventListener("click", () => {
    criaParagrafo();
    codigoDebarra = parseInt(codigoDebarra) + 1;
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
    const codigoDaEmpresa ="5849"; 
    let codigoDaQuantidade = "000";
    return codigoNacional + codigoDaEmpresa + codigoDoLote + codigoDaQuantidade;
}




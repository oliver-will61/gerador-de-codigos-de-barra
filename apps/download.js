const botaoDownload = document.querySelector("#botao-download"); 

botaoDownload.addEventListener("click", () => {
    salvarLista(listaCodigos); 
})

function salvarLista(listaCodigos) {
    const texto = listaCodigos.join("\n");
    const nomeArquivo = "codigos_de_barra.txt";
    download(texto, nomeArquivo);
  }
  
  function download(texto, nomeArquivo) {
      const linkDownload = document.createElement("a");
      const conteudoArquivo = new Blob([texto], { type: "text/plain" });
      linkDownload.href = URL.createObjectURL(conteudoArquivo);
      linkDownload.download = nomeArquivo;
      linkDownload.click();
      URL.revokeObjectURL(linkDownload.href);
    }
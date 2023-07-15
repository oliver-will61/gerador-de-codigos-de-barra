function verificaNumeroMinEMax(quantidadeDeCodigos) {
    return quantidadeDeCodigos > valorMaximoPermitido || quantidadeDeCodigos < valorMinimoPermitido;
  }
  
  function verificaSeENumero(quantidadeDeCodigos) {
    return isNaN(quantidadeDeCodigos) === true;
  }
  
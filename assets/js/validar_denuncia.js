/** ===== INICIO DA DENUNCIA ===== */
let den_referencia = document.querySelector("#denuncia_referencia");
let den_estado = document.querySelector("#denuncia_estado");
let den_municipio = document.querySelector("#denuncia_municipio");
let den_nResidencia = document.querySelector("#denuncia_nResidencia");
let den_bairro = document.querySelector("#denuncia_bairro");
let den_descricao = document.querySelector("#denuncia_descricao");
let den_imagem = document.querySelector("#denuncia_imagem");
let botao = document.querySelector("#enviar");

document.querySelector("#denuncia").addEventListener("submit", (event) => {
  // Ponto de referencia 
  if (den_referencia.value.length < 10) {
    den_referencia.classList.add("erroFormulario");
    document.querySelector("#valida_den_referencia").classList.add("exibido");
    botao.style.background = "red";
    den_referencia.focus();
    event.preventDefault();
    return;
  } else {
    den_referencia.classList.remove("erroFormulario");
    document.querySelector("#valida_den_referencia").classList.remove("exibido");
  }

  // Estado
  if (den_estado.value.length < 5) {
    den_estado.classList.add("erroFormulario");
    document.querySelector("#valida_den_estado").classList.add("exibido");
    botao.style.background = "red";
    den_estado.focus();
    event.preventDefault();
    return;
  } else {
    den_estado.classList.remove("erroFormulario");
    document.querySelector("#valida_den_estado").classList.remove("exibido");
  }

  // Municipio
  if (den_municipio.value.length < 5) {
    den_municipio.classList.add("erroFormulario");
    document.querySelector("#valida_den_municipio").classList.add("exibido");
    botao.style.background = "red";
    den_municipio.focus();
    event.preventDefault();
    return;
  } else {
    den_municipio.classList.remove("erroFormulario");
    document.querySelector("#valida_den_municipio").classList.remove("exibido");
  }

  // Numero residencia
  if (den_nResidencia.value.length < 2) {
    den_nResidencia.classList.add("erroFormulario");
    document.querySelector("#valida_den_nResidencia").classList.add("exibido");
    botao.style.background = "red";
    den_nResidencia.focus();
    event.preventDefault();
    return;
  } else {
    den_nResidencia.classList.remove("erroFormulario");
    document.querySelector("#valida_den_nResidencia").classList.remove("exibido");
  }

  // Bairro
  if (den_bairro.value.length < 10) {
    den_bairro.classList.add("erroFormulario");
    document.querySelector("#valida_den_bairro").classList.add("exibido");
    botao.style.background = "red";
    den_bairro.focus();
    event.preventDefault();
    return;
  } else {
    den_bairro.classList.remove("erroFormulario");
    document.querySelector("#valida_den_bairro").classList.remove("exibido");
  }

  // Descricao 
  if (den_descricao.value.length < 10) {
    den_descricao.classList.add("erroFormulario");
    document.querySelector("#valida_den_descricao").classList.add("exibido");
    botao.style.background = "red";
    den_descricao.focus();
    event.preventDefault();
    return;
  } else {
    den_descricao.classList.remove("erroFormulario");
    document.querySelector("#valida_den_descricao").classList.remove("exibido");
  }

  // Imagem

  if (den_imagem.files && den_imagem.files[0]) {
    den_imagem.classList.remove("erroFormulario");
    document.querySelector("#valida_den_imagem").classList.remove("exibido");
    botao.style.background = "red";
  } else {
    den_imagem.classList.add("erroFormulario");
    document.querySelector("#valida_den_imagem").classList.add("exibido");
    event.preventDefault();
    return;
  }
});


// Muda Referencia
den_referencia.addEventListener("mouseover", () => {
  den_referencia.style.background = "rgba(173, 216, 230, 0.75)";
  den_referencia.placeholder = "Exemplo (Ao lado de um poste de luz com a lâmpada queimada)";
});

den_referencia.addEventListener("mouseout", () => {
  den_referencia.style.background = "white";
  den_referencia.placeholder = ""
});

// Muda Estado
den_estado.addEventListener("mouseover", () => {
  den_estado.style.background = "rgba(173, 216, 230, 0.75)";
  den_estado.placeholder = "Insira o Estado em que esta a fonte do mosquito vista";
});

den_estado.addEventListener("mouseout", () => {
  den_estado.style.background = "white";
  den_estado.placeholder = ""
});

// Muda Municipio
den_municipio.addEventListener("mouseover", () => {
  den_municipio.style.background = "rgba(173, 216, 230, 0.75)";
  den_municipio.placeholder = "Insira o Município em que esta a fonte do mosquito vista";
});

den_municipio.addEventListener("mouseout", () => {
  den_municipio.style.background = "white";
  den_municipio.placeholder = "";
});

// Muda Numero da Residencia
den_nResidencia.addEventListener("mouseover", () => {
  den_nResidencia.style.background = "rgba(173, 216, 230, 0.75)";
  den_nResidencia.placeholder = "Insira o número da residência mais perto do local";
});

den_nResidencia.addEventListener("mouseout", () => {
  den_nResidencia.style.background = "white";
  den_nResidencia.placeholder = "";
});

// Muda Bairro
den_bairro.addEventListener("mouseover", () => {
  den_bairro.style.background = "rgba(173, 216, 230, 0.75)";
  den_bairro.placeholder = "Insira o Bairo em que esta a fonte do mosquito vista";
});

den_bairro.addEventListener("mouseout", () => {
  den_bairro.style.background = "white";
  den_bairro.placeholder = "";
});

// Muda Descricao
den_descricao.addEventListener("mouseover", () => {
  den_descricao.style.background = "rgba(173, 216, 230, 0.75)";
  den_descricao.placeholder = "Descreva como é o foco de dengue em que foi visto. Exemplo (Uma piscina com água verde, já estando turva e parada.)";
});

den_descricao.addEventListener("mouseout", () => {
  den_descricao.style.background = "white";
  den_descricao.placeholder = "";
});

// Muda Imagem
den_imagem.addEventListener("mouseover", () => {
  den_imagem.style.background = "rgba(173, 216, 230, 0.75)";
});

den_imagem.addEventListener("mouseout", () => {
  den_imagem.style.background = "white";
});


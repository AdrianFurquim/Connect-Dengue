/** ===== INICIO DA DENUNCIA ===== */
let den_referencia = document.querySelector("#denuncia_referencia");
let den_estado = document.querySelector("#denuncia_estado");
let den_municipio = document.querySelector("#denuncia_municipio");
let den_numResidencia = document.querySelector("#denuncia_numResidencia");
let den_bairro = document.querySelector("#denuncia_bairro");
let den_descricao = document.querySelector("#denuncia_descricao");
let den_imagem = document.querySelector("#denuncia_imagem");

// Muda Referencia
den_referencia.addEventListener("mouseover", () => {
  den_referencia.style.background = "rgba(173, 216, 230, 0.75)";
  den_referencia.placeholder = "Exemplo (Ao lado de um poste de luz com a lâmpada queimada)";
});

den_referencia.addEventListener("mouseout", () => {
  den_referencia.style.background = "white";
  den_referencia.placeholder = "(Opcional)"
});

// Muda Estado
den_estado.addEventListener("mouseover", () => {
  den_estado.style.background = "rgba(173, 216, 230, 0.75)";
  den_estado.placeholder = "Insira o Estado em que esta a fonte do mosquito vista";
});

den_estado.addEventListener("mouseout", () => {
  den_estado.style.background = "white";
  den_estado.placeholder = "(Opcional)"
});

// Muda Municipio
den_municipio.addEventListener("mouseover", () => {
  den_municipio.style.background = "rgba(173, 216, 230, 0.75)";
  den_municipio.placeholder = "Insira o Município em que esta a fonte do mosquito vista";
});

den_municipio.addEventListener("mouseout", () => {
  den_municipio.style.background = "white";
  den_municipio.placeholder = "(Opcional)";
});

// Muda Numero da Residencia
den_numResidencia.addEventListener("mouseover", () => {
  den_numResidencia.style.background = "rgba(173, 216, 230, 0.75)";
  den_numResidencia.placeholder = "Insira o número da residência mais perto do local";
});

den_numResidencia.addEventListener("mouseout", () => {
  den_numResidencia.style.background = "white";
  den_numResidencia.placeholder = "(Opcional)";
});

// Muda Bairro
den_bairro.addEventListener("mouseover", () => {
  den_bairro.style.background = "rgba(173, 216, 230, 0.75)";
  den_bairro.placeholder = "Insira o Bairo em que esta a fonte do mosquito vista";
});

den_bairro.addEventListener("mouseout", () => {
  den_bairro.style.background = "white";
  den_bairro.placeholder = "(Opcional)";
});

// Muda Descricao
den_descricao.addEventListener("mouseover", () => {
  den_descricao.style.background = "rgba(173, 216, 230, 0.75)";
  den_descricao.placeholder = "Descreva como é o foco de dengue em que foi visto. Exemplo (Uma piscina com água verde, já estando turva e parada.)";
});

den_descricao.addEventListener("mouseout", () => {
  den_descricao.style.background = "white";
  den_descricao.placeholder = "(Um terreno baldio com pneus cheios de água, com uma piscina cheia e com a água de cor verde)";
});

// Muda Imagem
den_imagem.addEventListener("mouseover", () => {
  den_imagem.style.background = "rgba(173, 216, 230, 0.75)";
});

den_imagem.addEventListener("mouseout", () => {
  den_imagem.style.background = "white";
});


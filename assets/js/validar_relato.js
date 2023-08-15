
let nome = document.querySelector("#nome");
let persona = document.querySelectorAll(".anonimo");
let estado = document.querySelector("#estados");
let relato = document.querySelector("#relato");
let botao = document.querySelector("#enviar");

    // Validacao da Criacao de Relatos

document.querySelector("#criarRelato").addEventListener("submit", (event)=>{
    
    // Nome
    if(nome.value.length < 3){
        nome.classList.add("erroFormulario");
        document.querySelector("#valida_rel_nome").classList.add("exibido");
        nome.focus();
        botao.style.background = "red";
        event.preventDefault();
        return;
    }else{
        nome.classList.remove("erroFormulario");
        document.querySelector("#valida_rel_nome").classList.remove("exibido");
    }

    // Persona
    if (persona[0].checked == false && persona[1].checked == false && persona[2].checked == false) {
        document.querySelector("#valida_rel_persona").classList.add("exibido");
        botao.style.background = "red";
        event.preventDefault();
        return;
        
    }else{
        document.querySelector("#valida_rel_persona").classList.remove("exibido");
    }

    // Relato
    if(relato.value.length < 3){
        relato.classList.add("erroFormulario");
        document.querySelector("#valida_rel_relato").classList.add("exibido");
        botao.style.background = "red";
        relato.focus();
        event.preventDefault();
        return;
    }else{
        relato.classList.remove("erroFormulario");
        document.querySelector("#valida_rel_relato").classList.remove("exibido");
    }
    botao.style.background = "green"
});

// ===== mudar nome =====
nome.addEventListener("mouseover", ()=>{
    nome.style.background = "rgba(173, 216, 230, 0.75)";
    nome.placeholder = "Insira seu nome";
});

nome.addEventListener("mouseout", ()=>{
    nome.style.background = "white";
    nome.placeholder = "";
});

// ===== mudar estado =====
estado.addEventListener("mouseover", ()=>{
    estado.style.background = "rgba(173, 216, 230, 0.75)";
});

estado.addEventListener("mouseout", ()=>{
    estado.style.background = "white";
});

// ===== mudar relato =====
relato.addEventListener("mouseover", ()=>{
    relato.style.background = "rgba(173, 216, 230, 0.75)";
    relato.placeholder = "Insira seu relato. Exemplo (Certa vez acabei contraindo dengue, ficando em estado grave...)";
});

relato.addEventListener("mouseout", ()=>{
    relato.style.background = "white";
    relato.placeholder = "";
});
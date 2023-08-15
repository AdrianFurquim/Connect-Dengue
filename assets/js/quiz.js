let escolha = 0;
document.querySelector("#enviar").addEventListener("click", () => {

    pergunta1 = document.getElementsByName('per1');
    pergunta2 = document.getElementsByName('per2');
    pergunta3 = document.getElementsByName('per3');
    pergunta4 = document.getElementsByName('per4');
    pergunta5 = document.getElementsByName('per5');

    resQuiz = document.getElementById('resQuiz')

    let pontuacao = 0

    if (pergunta1[0].checked) {
        document.getElementById('errado-p1r1').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta1[1].checked) {
        document.getElementById('correto1').style.background = 'rgba(115, 190, 115, 0.342)';
        pontuacao++;
    } else if (pergunta1[2].checked) {
        document.getElementById('errado-p1r2').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta1[3].checked) {
        document.getElementById('errado-p1r3').style.background = 'rgba(219, 80, 80, 0.521)';
    } else {
        document.querySelector("#validar_resposta_quiz").classList.add("exibido");
        document.querySelector("#enviar").style.background = "red";
        window.location.href = "#bordinha-quiz"
        return;
    }

    if (pergunta2[0].checked) {
        document.getElementById('errado-p2r1').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta2[1].checked) {
        document.getElementById('errado-p2r2').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta2[2].checked) {
        document.getElementById('correto2').style.background = 'rgba(115, 190, 115, 0.342)';
        pontuacao++
    } else if (pergunta2[3].checked) {
        document.getElementById('errado-p2r3').style.background = 'rgba(219, 80, 80, 0.521)';
    } else {
        document.querySelector("#validar_resposta_quiz").classList.add("exibido");
        document.querySelector("#enviar").style.background = "red";
        window.location.href = "#questao2"
        return;
    }

    if (pergunta3[0].checked) {
        document.getElementById('errado-p3r1').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta3[1].checked) {
        document.getElementById('correto3').style.background = 'rgba(115, 190, 115, 0.342)';
        pontuacao++
    }
    else if (pergunta3[2].checked) {
        document.getElementById('errado-p3r2').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta3[3].checked) {
        document.getElementById('errado-p3r3').style.background = 'rgba(219, 80, 80, 0.521)';
    } else {
        document.querySelector("#validar_resposta_quiz").classList.add("exibido");
        document.querySelector("#enviar").style.background = "red";
        window.location.href = "#questao3"
        return;
    }

    if (pergunta4[0].checked) {
        document.getElementById('errado-p4r1').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta4[1].checked) {
        document.getElementById('errado-p4r2').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta4[2].checked) {
        document.getElementById('errado-p4r3').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta4[3].checked) {
        document.getElementById('correto4').style.background = 'rgba(115, 190, 115, 0.342)';
        pontuacao++;
    } else {
        document.querySelector("#validar_resposta_quiz").classList.add("exibido");
        document.querySelector("#enviar").style.background = "red";
        window.location.href = "#questao4"
        return;
    }

    if (pergunta5[0].checked) {
        document.getElementById('errado-p5r1').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta5[1].checked) {
        document.getElementById('errado-p5r2').style.background = 'rgba(219, 80, 80, 0.521)';
    } else if (pergunta5[2].checked) {
        document.getElementById('correto5').style.background = 'rgba(115, 190, 115, 0.342)';
        pontuacao++;
    } else if (pergunta5[3].checked) {
        document.getElementById('errado-p5r3').style.background = 'rgba(219, 80, 80, 0.521)';
    } else {
        document.querySelector("#validar_resposta_quiz").classList.add("exibido");
        document.querySelector("#enviar").style.background = "red";
        window.location.href = "#questao5"
        return;
    }

    document.getElementById('correto1').style.background = 'rgba(115, 190, 115, 0.342)';
    document.getElementById('correto2').style.background = 'rgba(115, 190, 115, 0.342)';
    document.getElementById('correto3').style.background = 'rgba(115, 190, 115, 0.342)';
    document.getElementById('correto4').style.background = 'rgba(115, 190, 115, 0.342)';
    document.getElementById('correto5').style.background = 'rgba(115, 190, 115, 0.342)';

    if (pontuacao >= 4) {
        resQuiz.innerHTML = `<h1> ${pontuacao} de 5 </h1> <br> Parabéns, você foi perfeito!`;
    } else if (pontuacao == 3) {
        resQuiz.innerHTML = `<h1> ${pontuacao} de 5 </h1> <br> Parabéns!`;
    } else {
        resQuiz.innerHTML = `<h1> ${pontuacao} de 5 </h1> <br> O que vale é o aprendizado, Parabéns!`;
    }
    resQuiz.innerHTML += "<br> <a href='index.html'><div id='botaoQuiz'>Voltar</div></a>"
    resQuiz.innerHTML += "<br> <a href='quiz.html'><div id='botaoQuiz'>Fazer novamente</div></a>"
    escolha++;
});

let quest1 = document.querySelector("#correto1");
let quest2 = document.querySelector("#correto2");
let quest3 = document.querySelector("#correto3");
let quest4 = document.querySelector("#correto4");
let quest5 = document.querySelector("#correto5");
let quest6 = document.querySelector("#errado-p1r1");
let quest7 = document.querySelector("#errado-p1r2");
let quest8 = document.querySelector("#errado-p1r3");
let quest9 = document.querySelector("#errado-p2r1");
let quest10 = document.querySelector("#errado-p2r2");
let quest11 = document.querySelector("#errado-p2r3");
let quest12 = document.querySelector("#errado-p3r1");
let quest13 = document.querySelector("#errado-p3r2");
let quest14 = document.querySelector("#errado-p3r3");
let quest15 = document.querySelector("#errado-p4r1");
let quest16 = document.querySelector("#errado-p4r2");
let quest17 = document.querySelector("#errado-p4r3");
let quest18 = document.querySelector("#errado-p5r1");
let quest19 = document.querySelector("#errado-p5r2");
let quest20 = document.querySelector("#errado-p5r3");


quest1.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest1.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest1.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest1.style.background = "transparent";
    }
});

quest2.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest2.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest2.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest2.style.background = "transparent";
    }
});

quest3.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest3.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest3.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest3.style.background = "transparent";
    }
});

quest4.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest4.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest4.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest4.style.background = "transparent";
    }
});

quest5.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest5.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest5.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest5.style.background = "transparent";
    }
});

quest6.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest6.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest6.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest6.style.background = "transparent";
    }
});

quest7.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest7.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest7.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest7.style.background = "transparent";
    }
});

quest8.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest8.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest8.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest8.style.background = "transparent";
    }
});

quest9.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest9.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest9.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest9.style.background = "transparent";
    }
});

quest10.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest10.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest10.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest10.style.background = "transparent";
    }
});

quest11.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest11.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest11.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest11.style.background = "transparent";
    }
});

quest12.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest12.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest12.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest12.style.background = "transparent";
    }
});

quest13.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest13.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest13.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest13.style.background = "transparent";
    }
});

quest14.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest14.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest14.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest14.style.background = "transparent";
    }
});

quest15.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest15.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest15.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest15.style.background = "transparent";
    }
});

quest16.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest16.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest16.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest16.style.background = "transparent";
    }
});

quest17.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest17.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest17.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest17.style.background = "transparent";
    }
});

quest18.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest18.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest18.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest18.style.background = "transparent";
    }
});

quest19.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest19.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest19.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest19.style.background = "transparent";
    }
});

quest20.addEventListener("mouseover", () => {
    if (escolha != 1) {
        quest20.style.background = "rgba(210, 210, 210, 0.75)";
    }
});

quest20.addEventListener("mouseout", () => {
    if (escolha != 1) {
        quest20.style.background = "transparent";
    }
});
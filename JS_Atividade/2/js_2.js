const botao = document.getElementById("trocar_cor");
const paragrafo = document.getElementById("texto-dio");
const imagem = document.getElementById("imagem-dinamica"); 

// --- Configurando imagens ----
const urlDio = "/JS_Atividade/2/DioBrando.webp";

const urlZaWarudo = "/JS_Atividade/2/ZaWarudo.gif";

// Eventos do bot�o ZaWarudo
botao.addEventListener("click", function() {
    paragrafo.textContent = "Za Warudo, pare o tempo e mude de cor!";
    paragrafo.classList.add("amarelo");

    imagem.classList.add("esmaecer");

    setTimeout(function() {
        imagem.src = urlZaWarudo; // Vai carregar o link da internet com a imagem do ZaWarudo
        imagem.classList.remove("esmaecer");
    }, 500);

    setTimeout(function() {
        imagem.classList.add("esmaecer");

        setTimeout(function() {
            imagem.src = urlDio // Vai voltar para a imagem do DioBrando
            imagem.classList.remove("esmaecer");

            paragrafo.textContent = "Eu sou DioBrando o maior vilão de JoJo Bizarre Adventures";
            paragrafo.classList.remove("amarelo");
        }, 500);

    }, 4000);

});
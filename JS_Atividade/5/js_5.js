// Elementos pegos do HTML
const btnLocalizar = document.getElementById("btn-localizar");
const statusRadar = document.getElementById("status-radar");
const coordenadasTexto = document.getElementById("coordenadas");

// Evento do bot�o
btnLocalizar.addEventListener("click", function() {
    
    // Verifica se o navegador do usuário suporta Geolocalização
    if (!navigator.geolocation) {
        statusRadar.textContent = "A geolocalizaçãoo não é suportada pelo seu navegador.";
        return;
    }

    statusRadar.textContent = "Buscando sinal do satélite... (Permita o acesso no seu navegador)";
    coordenadasTexto.textContent = "";

    // Pegando informações do usuário, no caso a sua localização
    // getCurrentPosition pede 2 funções: uma para o Sucesso e outra para o Erro
    navigator.geolocation.getCurrentPosition(aoSucesso, aoErro);
});

// Conseguiu pegar a localização do usuário
function aoSucesso(posicao) {

    // Extrai latitude e longitude
    const latitude = posicao.coords.latitude;
    const longitude = posicao.coords.longitude;

    statusRadar.textContent = "Coordenadas capturadas com sucesso!";

    // URL correta do Google Maps
    const linkCompleto = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Exibe informações na tela
    coordenadasTexto.innerHTML = `
        Latitude: ${latitude} | Longitude: ${longitude} <br><br>
        
        <a href="${linkCompleto}" target="_blank">
            🗺️ Ver sua localização no Google Maps
        </a>
    `;
}

// Não conseguiu pegar a localizaçãoo do usuário. | Adicionado por IA, não consegui fazer sozinho.
function aoErro(erro) {
    // O navegador retorna códigos numéricos para cada tipo de erro
    switch(erro.code) {
        case erro.PERMISSION_DENIED:
            statusRadar.textContent = "Usuário negou a permissão de Geolocalização.";
            break;
        case erro.POSITION_UNAVAILABLE:
            statusRadar.textContent = "Informações de localização indisponíveis.";
            break;
        case erro.TIMEOUT:
            statusRadar.textContent = "A requisição expirou antes de obter a localização.";
            break;
        default:
            statusRadar.textContent = "Ocorreu um erro desconhecido ao buscar localização.";
            break;
    }
}

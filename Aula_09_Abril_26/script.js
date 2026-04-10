// DOM é a "ponte" que permite ao JavaScript ler e alterar o que está na tua página HTML.  

// Quando o navegador carrega o teu ficheiro HTML, ele transforma tudo (tags, textos, atributos) 
// numa árvore de objetos. No JavaScript, o DOM é representado pelo objeto global document.

// O BOM (Browser Object Model)  é o conjunto de objetos que permite ao JavaScript "falar" com o navegador, 
// para além do conteúdo da página em si.

// Enquanto o DOM foca no que está dentro do documento (o HTML), o BOM foca em tudo o que está fora
// (a janela, o histórico, a barra de endereços, o ecrã do utilizador).

document.getElementById("titulo").innerText = "Olá Mundo!";

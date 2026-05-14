// Elementos que vem do HTML
const botaoRecrutar = document.getElementById("btn-recrutar");
const inputAliado = document.getElementById("input-aliado");
const listaGangue = document.getElementById("lista-gangue");

// Evento do botão
botaoRecrutar.addEventListener("click", function() {
    
    // Salva o nome que o usuário digitou
    const nomeAliado = inputAliado.value;

    // VALIDAÇÃO DE SEGURANÇA: Se o usuário não digitar nada, para a execução aqui
    if (nomeAliado.trim() === "") {
        alert("Por favor, digite o nome de um aliado válido!");
        return; 
    }

    // Criação da lista
    const novoItem = document.createElement("li");

    // Preenchendo a lista criada
    novoItem.textContent = nomeAliado;

    // Appendando os nomes na nossa lista
    listaGangue.appendChild(novoItem);

    // Adição de truque feito pela IA para limpar o campo e focar no mesmo campo após adicionar um nome
    inputAliado.value = "";
    inputAliado.focus();
});

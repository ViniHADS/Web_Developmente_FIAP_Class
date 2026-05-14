// Elementos que vem do HTML
const botaoCalcular = document.getElementById("btn-calcular");
const inputAtaque = document.getElementById("input-ataque"); 
const inputVelocidade = document.getElementById("input-velocidade");
const spanResultado = document.getElementById("resultado-calculo");

botaoCalcular.addEventListener("click", function() {
    
    // Leitura dos valores e conversão
    // Pegamos o .value que foi digitado pelo usuário e transformamos em número real 
    const valorAtaque = Number(inputAtaque.value);
    const valorVelocidade = Number(inputVelocidade.value);

    // CÁLCULO
    // Somamos as duas constantes númericas criadas
    const poderTotal = valorAtaque + valorVelocidade;

    // EXIBIÇÃO DO RESULTADO NA TELA
    // Mudamos o texto de dentro do span para o valor da nossa soma!
    spanResultado.textContent = poderTotal;
})
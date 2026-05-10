const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    let peso = parseFloat(document.getElementById("txtPeso").value);
    let altura = parseFloat(document.getElementById("txtAltura").value.replace(",", "."));

    // Bloco de validação para verificar se os valores de peso e altura são válidos, ou seja maior que zero e se são números.
    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        alert("Por favor Sr(a), digite valores válidos para peso e altura.");
        return;

    }

    // Bloco de validação para verificar se os valores de peso e altura estão dentro de uma faixa realista.
    if (peso > 500 || altura > 3) {
        alert("Valores fora da realidade, não existe um ser vivo com esse peso e altura, preste atenção e re-insira os valores.");
        return
    }

    let imc = peso / (altura * altura); // Cálculo do IMC, onde o peso é dividido pela altura ao quadrado.
    let status = ""; // Variável que guarda o valor do status, que se encontra no código HTML no bloco das listas, para mostrar o status do IMC calculado.
    let idDestaque = ""; // Variável que guarda o valor da idDestaque, que se encontra no código HTML no bloco das listas.
    let classeCor = ""; // Variável que guarda o valor da classeCor, que se encontra no código CSS, para destacar a faixa do IMC com suas respectivas cores.

    // Refatorado o bloco de código if else.
        
    if (imc < 18.5) {
        status = "Abaixo do peso";
        idDestaque = "cat1";
        classeCor = "bg-yellow";
    }else if (imc < 25) {
        status = "Peso normal";
        idDestaque = "cat2";
        classeCor = "bg-green";
    }else if (imc < 30) {
        status = "Sobrepeso";
        idDestaque = "cat3";
        classeCor = "bg-skin"
    }else if (imc < 35) {
        status = "Obesidade grau I";
        idDestaque = "cat4";
        classeCor = "bg-orange";
    }else if (imc < 40) {
        status = "Obesidade grau II";
        idDestaque = "cat5";
        classeCor = "bg-red";
    }else{
        status = "Obesidade grau III";
        idDestaque = "cat6";
        classeCor = "bg-darkred";
    }
    // Bloco de código para remover as classes de destaque das faixas, para que apenas a faixa correspondente ao status do IMC calculado seja destacada.
    document.querySelectorAll('.faixa') .forEach(item => {
        item.classList.remove('bg-yellow', 'bg-green', 'bg-skin', 'bg-orange', 'bg-red', 'bg-darkred');
    })
    
    // Bloco de código para adicionar a classe de destaque à faixa correspondente ao status do IMC calculado.
    if (idDestaque) {
        document.getElementById(idDestaque).classList.add(classeCor);
    }
    
    // Bloco do código para mostrar o resultado do IMC calculado e o seu status correspondente.
    document.getElementById("resultado").innerHTML = 
    "Seu IMC é: <b> " + imc.toFixed(2) + " </b> - " + "seu status é: <b>" + status + "</b>";

    // Bloco adicionado para mostrar o resultado do IMC calculado e o seu status correspondente utilizado.
    document.getElementById("resultado").innerHTML = `IMC = ${imc.toFixed(1)}`;
    document.getElementById("status-texto").innerText = `Status: ${status}`;
});
function calcularRaizes() {
    const numeros =[25,36,40]
    const raizes = numeros.map(num => Math.sqrt(num));
    const resultadoDiv = document.createElement('div');
    resultadoDiv.innerHTML = '<strong>Raizes quadradas:</strong> ${raizes.join(',')};
    document.getElementById('conteudo').appendChild(resultadoDiv);
}

const BotaoRaiz = document.createElement('button;')
BotaoRaiz.textContent = 'Calcular Raízes Quadradas';
BotaoRaiz.onclick = calcularRaizes;
document.getElementById('conteudo').appendChild(botaoRaiz);

function calcularRaizes() {
    const texto = "este texto foi inserido dinamicamente!";
    const divMensagem = document.createElement('div');
    Divmensagem.innerHTML = texto;
    document.getElementById('conteudo').appendChild(divMensagem);
}

const Botaoescrever = document.createElement('button;')
BotaoRaiz.textContent = 'Calcular Raízes Quadradas';
BotaoRaiz.onclick = calcularRaizes;
document.getElementById('conteudo').appendChild(botaoEscrever);

// Função para capturar texto digitado
function capturarTexto() {
    const inputTexto = document.getElementById('inputTexto');
    const texto = inputTexto.value;
    const divSaida = document.createElement('div');
    divSaida.innerHTML = <strong>Texto capturado:</strong> ${texto};
    document.getElementById('conteudo').appendChild(divSaida);
}

// Exibir campo de entrada e botão
const inputTexto = document.createElement('input');
inputTexto.type = 'text';
inputTexto.id = 'inputTexto';
inputTexto.placeholder = 'Digite algo aqui';
document.getElementById('conteudo').appendChild(inputTexto);

const botaoCapturar = document.createElement('button');
botaoCapturar.textContent = 'Exibir Texto Digitado';
botaoCapturar.onclick = capturarTexto;
document.getElementById('conteudo').appendChild(botaoCapturar);

// Função para escrever números de 1 a n
function escreverNumeros() {
    const n = parseInt(prompt("Digite um número:"));
    if (isNaN(n)) {
        alert("Por favor, digite um número válido.");
        return;
    }
    const numeros = Array.from({ length: n }, (_, i) => i + 1).join(', ');
    const divNumeros = document.createElement('div');
    divNumeros.innerHTML = <strong>Números de 1 a ${n}:</strong> ${numeros};
    document.getElementById('conteudo').appendChild(divNumeros);
}

// Exibir botão para numerar
const botaoNumerar = document.createElement('button');
botaoNumerar.textContent = 'Escrever de 1 a n';
botaoNumerar.onclick = escreverNumeros;
document.getElementById('conteudo').appendChild(botaoNumerar);
// // passo 1 - cancelar o envio automático do formulario e evitar o recarregamento da pagina

// const peso = document.querySelector("#valor-peso");
// const altura = document.querySelector("#valor-altura");
// const form = document.querySelector("#form");
// const resultado = document.querySelector(".resultado");

// function calcularIMC (event) {
//     event.preventDefault();

//     // condições para o programa começar a rodar -> sem essas condições nem inicializa
//     if ((peso.value < 5.5 || peso.value > 595) || (altura.value < 0.60 || altura.value > 2.51)){
//         resultado.innerHTML = `<p class="valor-errado">Altura ou Peso fora do padrão Humano</p>`;
//         return;
//     }

//     const imc = peso.value/ (altura.value * altura.value);

//     if(isNaN(peso.value) || isNaN(altura.value)){
//         resultado.innerHTML = `<p class="valor-errado">Por favor, digite um número!</p>`;
//     } else if (imc >= 18.5 && imc <= 24.9) {
//         resultado.innerHTML = `<p class="peso-bom">Peso Normal</p>`;
//     } else if (imc < 18.5) {
//         resultado.innerHTML = `<p class="valor-errado">Abaixo do peso</p>`;
//     } else if (imc >= 25 && imc <= 29.9) {
//         resultado.innerHTML = `<p class="regular">Sobrepeso</p>`
//     } else if (imc >= 30 && imc <= 34.9) {
//         resultado.innerHTML = `<p class="valor-errado">Obesidade grau 1</p>`;
//     } else if (imc >= 35 && imc <= 39.9) {
//         resultado.innerHTML = `<p class="valor-errado">Obesidade grau 2</p>`;
//     } else if (imc >= 40) {
//         resultado.innerHTML = `<p class="valor-errado">Obesidade grau 3</p>`;
//     }

// }

// form.addEventListener('submit', calcularIMC);

const form = document.querySelector("#form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputAltura = e.target.querySelector('#valor-altura');
    const inputPeso = e.target.querySelector("#valor-peso");
    console.log(inputPeso);

    const peso = Number(inputPeso.value);
    console.log(peso)
    const altura = Number(inputAltura.value);

    if(isNaN(peso)){
        setResultado('Peso Inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é: ${imc} (${nivelImc})`;

    setResultado(msg, true);

});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'] // array

    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >=34.9) {
        return nivel[4];
    } else if (imc >=29.9) {
        return nivel[3];
    } else if (imc >=24.9) {
        return nivel[2]
    } else if (imc >=18.5) {
        return nivel[1];
    } else if (imc , 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;

    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = '';

    const a = criaP();

    if (isValid) {
        a.classList.add('paragrafo-resultado');
    } else {
        a.classList.add('bad');
    }

    a.innerHTML = msg;
    resultado.appendChild(a);
}
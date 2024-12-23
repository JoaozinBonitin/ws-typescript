//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
// funções executadas imediatamente apos a sua criação

// function qualquerCoisa(){
//     console.log(123456)
// }
// qualquerCoisa();


// tudo que estiver dentro da função abaixo será executado imediatamente
(function (idade, peso, altura){
    // console.log(123456)
    // const nome = 'Luiz';
    // console.log(nome);

    const  sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;  
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

const nome = 'Qualquer coisa';
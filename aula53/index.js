//closures - 

function retornaFuncao(){
    const nome = 'Luiz';
    return function () {
        return nome; // capacidade de lembrar do seu escopo léxico --> closure
    };
}

const funcao = retornaFuncao();
console.log (funcao);
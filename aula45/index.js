// try{
//     // É executada quando não há erros
//     console.log("Abrir um arquivo");
//     console.log("Manipulei o arquivo e gerou um erro");
//     console.log("Fechei o arquivo");
// } catch (e) {
//     // É executada quando não há erros
//     console.log("Tratando o erro");
// } finally {
//     // Sempre é executado
//     console.log("Eu sempre sou executado");
// }

function retornaHora (data) {
    if (data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date.");
        
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // tratando o erro
    //console.log(e)
} finally {
    console.log("Tenha um Bom dia.");
}
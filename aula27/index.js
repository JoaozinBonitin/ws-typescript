//? : -> operador ternário -> (condição) ? 'verdadeira' : 'falsa';

// if (pontuacaoUsiario >= 1000) {
//     console.log("Usuario VIP");
// } else {
//     console.log('Usuário normal');
// }

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
// console.log(nivelUsuario);

const corUsuario = null;
const corPadrão = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrão);






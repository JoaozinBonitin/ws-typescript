/**
 * && -> false && true -> false
 * ||
 * 
 * FALSY
 * false 
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

// function falaOi() {
//     return 'Oi';
// }

// const vaiExecutar = undefined;

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true);

const corUsuario = null;
const corPadrão = corUsuario || 'preto';

console.log(corPadrão);


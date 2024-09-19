// funcao construtora -> começa com a primeira letra maiúscula
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp Unix 

// const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, M, s, ms
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // dia da semana começa do 0 -> 0 = domingo, 6 = sabado
// console.log(data.toDateString());

function formataData (data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
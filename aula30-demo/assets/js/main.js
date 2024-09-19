
// const diaDaSemana = data.getDay();
// const diaDoMes = data.getDate(); 
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = data.getHours();
// const minuto = data.getMinutes();

// resultado.innerHTML = `${getWeekDay(diaDaSemana)}, ${diaDoMes} de ${getMonth(mes)} de ${ano} <br> ${hora}:${minuto}`

// function getWeekDay (weekday) {
//     let weekdayText;

//     switch(weekday) {
//         case 0:
//             weekdayText = 'Domingo';
//             return weekdayText;
//         case 1: 
//             weekdayText = 'Segunda-feira';
//             return weekdayText;
//         case 2: 
//             weekdayText = 'Terça-feira';
//             return weekdayText;
//         case 3: 
//             weekdayText = 'Quarta-feira';
//             return weekdayText;   
//         case 4: 
//             weekdayText = 'Quinta-feira';
//             return weekdayText;   
//         case 5: 
//             weekdayText = 'Sexta-feira';
//             return weekdayText;   
//         case 6: 
//             weekdayText = 'Sábado';
//             return weekdayText;                  
//     }
// }

// function getMonth(month) {
    //     let monthName;
    
    //     switch (month) {
        //         case 0:
        //             monthName = 'Janeiro';
        //             return monthName;  
        //         case 1:
        //             monthName = 'Fevereiro';
        //             return monthName; 
        //         case 2:
        //             monthName = 'Março';
        //             return monthName; 
        //         case 3:
        //             monthName = 'Abril';
        //             return monthName; 
        //         case 4:
        //             monthName = 'Maio';
        //             return monthName; 
        //         case 5:
        //             monthName = 'Junho';
        //             return monthName; 
        //         case 6:
        //             monthName = 'Julho';
        //             return monthName; 
        //         case 7:
//             monthName = 'Agosto';
//             return monthName; 
//         case 8:
//             monthName = 'Setembro';
//             return monthName; 
//         case 9:
//             monthName = 'Outubro';
//             return monthName; 
//         case 10:
//             monthName = 'Novembro';
//             return monthName; 
//         case 11:
//             monthName = 'Dezembro';
//             return monthName;            
//     }
// }

const resultado = document.querySelector(".resultado");
const data = new Date();
var option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}
resultado.innerHTML = data.toLocaleDateString("pt-br", option);
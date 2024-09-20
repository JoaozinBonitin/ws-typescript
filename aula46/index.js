function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}

// function funcaoDoInterval(params) {
//     console.log(mostrarHora());
// }

// setInterval(funcaoDoInterval, 1000);

const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log("Olá Mundo!");
}, 5000)
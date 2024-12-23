// Fazctory functions -> funções que retornam objetos

function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        altura: a,
        peso: p,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        fala: function(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}`;
        },

        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.85, 80);
console.log(p1.fala('falando sobre js'));
console.log(p1.nomeCompleto);
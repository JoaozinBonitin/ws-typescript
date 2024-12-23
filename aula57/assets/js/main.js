function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        clearDisplay() {
            this.display.value = '';
        },
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida');
                    return
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta invalida, acesse o console para mais informações!');
                console.log('Calculator error: ', e);
            }
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },
        inicia() {
            this.cliqueiBotoes();
            this.pressionaEnter();
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },
        cliqueiBotoes() {
            document.addEventListener('click', function(e){
                const el = e.target;
                console.log('cliquei em: ', el);

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                };
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                };
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                };
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                
            }.bind(this));
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
        
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();
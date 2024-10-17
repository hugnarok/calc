function criaCalculador() {
    
    return {
        display: document.querySelector('.display'),

        clearDysplay(){
            this.display.value = ''
        },

        delOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calcula(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                console.log(conta);

                if (!conta) {
                    alert('Conta invalida');
                    this.clearDysplay();
                    return;
                }

                this.display.value = String(conta) ;
            }catch(e) {
                    alert('Conta invalida');
                    this.clearDysplay();
                    return;
            }
        },

        inicia(){
            this.cliqueBotoes();
        },
        cliqueBotoes(){
            document.addEventListener('click', (e) => {
               const el = e.target;
               
               if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
               }

               if (el.classList.contains('btn-clear')) {
                    this.clearDysplay();
               }

               if (el.classList.contains('btn-del')) {
                    this.delOne();
               }
               if (el.classList.contains('btn-eq')) {
                    this.calcula();
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === '/')  {
                    this.display.value += '/';
                }
                if (e.key === 'Enter')  {
                    this.calcula();
                }
                if (e.key === 'Backspace')  {
                    this.delOne();
                }
            })

        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}


function main() {
    const calculadora = criaCalculador();
    calculadora.inicia();    
}

main();
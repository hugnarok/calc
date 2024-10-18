//calculadora com função construtora 
function CriaCalculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () =>{
        this.clickBotao();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', (e) => {
            console.log(e);
            if(e.key === 'Enter'){
                this.realizaConta();
            }
        });
    };

    this.clickBotao = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDysplay();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
            if (el.classList.contains('btn-del')) this.del();
        });
    }

    this.clearDysplay = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.btnParaDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);
            console.log(conta);
            
            if(!conta){ 
                alert('conta invalida');
                this.clearDysplay();
                return;
            }

            this.display.value = conta;
        }catch(e){
            alert('conta invalida');
            this.clearDysplay();
            return;
        }
    }
}

function main() {
    const calc = new CriaCalculadora();
    calc.inicia();
}

main();
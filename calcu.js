const calculator = {
    displaynumber : '0',
    operator : null,
    firstnumber : null,
    waitingforsecondnumber : false,
}

function updateDisplay() {
    document.querySelector('#displaynumber').innerText = calculator.displaynumber;
}

function  clearCalculator() {
    calculator.displaynumber = '0';
    calculator.operator = null;
    calculator.firstnumber = null;
    calculator.waitingforsecondnumber = false;
}

function  inputDigit(digit) {
    if(calculator.displaynumber === '0'){
        calculator.displaynumber = digit;
    }else {
        calculator.displaynumber += digit;

    }
}

function inverseNumber () {
    if (calculator.displaynumber === '0') {
        return;
    }
    calculator.displaynumber = calculator.displaynumber * -1;
}

function handleOperator (operator) {
    if (!calculator.waitingforsecondnumber) {
        calculator.operator = operator;
        calculator.waitingforsecondnumber = true;
        calculator.firstnumber = calculator.displaynumber;

        calculator.displaynumber = '0';

    } else {
        alert('operator sudah di gunakan');
    }

}

function  performCalculation() {
    if (calculator.firstnumber == null || calculator.operator == null) {
        alert ('anda belum  menetapkan operator');
        return;
    }

    let result = 0;
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstnumber) + parseInt(calculator.displaynumber);

    } else {
        result = parseInt(calculator.firstnumber) - parseInt(calculator.displaynumber);

    }

    calculator.displaynumber = result;
}




const buttons = document.querySelectorAll('.button') 

for(const button of buttons) {
    button.addEventListener('click' , function (event){
        const target = event.target;


        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
        if (target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }


        inputDigit(target.innerText);
        updateDisplay();
    })
}
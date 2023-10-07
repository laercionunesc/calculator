function updateDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 9) return;
    
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function clearDisplay(){
    var display = document.getElementById('display');

    display.value = '0';
}

let operator = '';
let val1 = 0;
function updateOperator(btn){
    const display = document.getElementById('display');
    operator = btn.value;
    val1 = parseInt(display.value);
    display.value = 0;
}

function calculateOperation(){
    const display = document.getElementById('display');
    const val2 = parseInt(display.value);
    console.log(val1+operator+val2);
    val1 = eval(val1+operator+val2);
    display.value = val1;
    operator = '';
}

function manipulateKeyboard(){
    if(/[0-9]/.test(event.key))
        updateDisplay({value:event.key});

    if(/[\*\+\/-]/.test(event.key))
        updateOperator({value:event.key});

    var unicode = event.charCode ? event.charCode : event.keyCode;
    if(unicode === 13)
        calculateOperation()
}
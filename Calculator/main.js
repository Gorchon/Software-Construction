let currentOperation = '';
let num1 = '';
let num2 = '';
let operationSet = false;

function appendNumber(number) {
    if(operationSet) {
        num2 += number;
    } else {
        num1 += number;
    }
    updateDisplay();
}

function setOperation(operator) {
    if(currentOperation !== '') return;
    currentOperation = operator;
    operationSet = true;
    updateDisplay();
}

function calculate() {
    if(num1 === '' || num2 === '' || currentOperation === '') return;
    let result;
    switch(currentOperation) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2); 
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if(num2 === '0') {
                alert('Cannot divide by zero');
                clearAll();
                return;
            }
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }
    alert(`Result: ${result}`);
    clearAll();
}

function updateDisplay() {
    document.getElementById('display').value = `${num1} ${currentOperation} ${num2}`; 
}

function clearDisplay() {
    clearAll();
    updateDisplay();
}

function clearAll() {
    num1 = '';
    num2 = '';
    currentOperation = '';
    operationSet = false;
}

document.getElementById('display').value = '0';

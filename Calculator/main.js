let currentOperation = '';
let num1 = '';
let num2 = '';
let operationSet = false;
let history = []; // To store the history of results

function appendNumber(number) {
    if (operationSet) {
        num2 += number;
    } else {
        num1 += number;
    }
    updateDisplay();
}

function setOperation(operator) {
    if (currentOperation !== '') return;
    currentOperation = operator;
    operationSet = true;
    updateDisplay();
}

function calculate() {
    if (num1 === '' || num2 === '' || currentOperation === '') return;
    let result;
    switch (currentOperation) {
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
            if (num2 === '0') {
                alert('Cannot divide by zero');
                clearAll();
                return;
            }
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case 'pow':
            result = Math.pow(parseFloat(num1), parseFloat(num2));
            break;
    }
    addToHistory(currentOperation, result); // Add to history
    alert(`Result: ${result}`);
    clearAll();
}

function addToHistory(operation, result) {
    history.push(`${num1} ${operation} ${num2} = ${result}`);
}

function showHistory() {
    alert(history.join('\n'));
}

function deleteLastEntry() {
    if (operationSet && num2 !== '') { //if operation is set and num2 is not empty 
        num2 = num2.slice(0, -1); // Remove the last character
    } else if (!operationSet && num1 !== '') { //if operation is not set and num1 is not empty
        num1 = num1.slice(0, -1);
    }
    updateDisplay();
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

// Initialize the display on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('display').value = '0';
});

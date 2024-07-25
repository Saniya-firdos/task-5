let displayValue = '0';
let operator = null;
let firstOperand = null;

function updateDisplay() {
    document.getElementById('result').textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) calculateResult();
    firstOperand = parseFloat(displayValue);
    operator = op;
    displayValue = '0';
}

function calculateResult() {
    if (operator === null || firstOperand === null) return;
    
    const secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                displayValue = 'Error';
                updateDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
    }

    displayValue = result.toString();
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function deleteLast() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}


updateDisplay();
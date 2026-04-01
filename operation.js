let display = document.getElementById('display');
let currentValue = '';

function appendNumber(num) {
    // Prevent multiple decimal points
    if (num === '.' && currentValue.includes('.')) {
        return;
    }
    
    // Prevent leading zeros
    if (currentValue === '0' && num !== '.') {
        currentValue = num.toString();
    } else {
        currentValue += num.toString();
    }
    
    updateDisplay();
}

function appendOperator(op) {
    if (currentValue === '') return;
    
    // Replace consecutive operators
    if (['+', '-', '*', '/', '%'].includes(currentValue[currentValue.length - 1])) {
        currentValue = currentValue.slice(0, -1) + op;
    } else {
        currentValue += op;
    }
    
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    updateDisplay();
}

function deleteDigit() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (currentValue === '') return;
    
    try {
        // Prevent division by zero with more explicit check
        if (currentValue.includes('/0') && !currentValue.includes('/0.')) {
            display.value = 'Error: Division by 0';
            currentValue = '';
            return;
        }
        
        // Evaluate the expression
        let result = eval(currentValue);
        
        // Check for invalid results
        if (!isFinite(result)) {
            display.value = 'Error';
            currentValue = '';
            return;
        }
        
        // Round to avoid floating point precision issues
        result = Math.round(result * 100000000) / 100000000;
        
        display.value = result;
        currentValue = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentValue = '';
    }
}

function updateDisplay() {
    display.value = currentValue || '0';
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteDigit();
    } else if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    } else if (key === '%') {
        appendOperator('%');
    }
});
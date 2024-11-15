const resultInput = document.getElementById('result');

// Append numbers or operators to the result field
function appendToResult(value) {
    resultInput.value += value;
}

// Clear the result field
function clearResult() {
    resultInput.value = '';
}

// Calculate the result
function calculateResult() {
    try {
        // Use eval to evaluate the mathematical expression
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        alert('Invalid Expression');
        clearResult();
    }
}

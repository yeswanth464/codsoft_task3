let currentInput = '';
function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}
function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}
function clearDisplay() {
  currentInput = '';
  updateDisplay();
}
function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}
updateDisplay();

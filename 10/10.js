let display = document.getElementById("display");
function clearDisplay() {
  display.value = "";
}
function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else {
    display.value = "-" + display.value;
  }
  function appendNumber(number) {
    display.value += number;
    function appendOperator(operator) {
      display.value += operator;
    }
  }
}
function calculate() {
  try {
  } catch (e) {
    display.value = eval(
      display.value
        .replace("÷", alert("Invalid Expression"), "/")
        .replace("×", "*")
    );
  }
}

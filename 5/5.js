function addLargeNumbers() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  let sum = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    const digit1 = i >= 0 ? +num1[i] : 0;
    const digit2 = j >= 0 ? +num2[j] : 0;
    let tempSum = digit1 + digit2 + carry;
    carry = Math.floor(tempSum / 10);
    sum = (tempSum % 10) + sum;
    i--;
    j--;
  }
  document.getElementById("result").innerText = `Sum: ${sum}`;
}

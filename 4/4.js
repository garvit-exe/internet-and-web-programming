function capitalize() {
  // Get the input string value
  let inputString = document.getElementById("inputString").value;

  // Capitalize the first letter of each word
  let capitalizedString = inputString
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  // Display the capitalized string in the output div
  document.getElementById("output").textContent = capitalizedString;
}

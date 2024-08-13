document.getElementById("openWindowButton").addEventListener("click", () => {
  // Open a new window with specified dimensions and location bar
  const newWindow = window.open(
    "https://www.google.com", // URL of the page to display
    "exampleWindow", // Name of the window
    "width=200,height=200,location=yes" // Specifications
  );
  // Resize the window (optional)
  newWindow.resizeTo(400, 400); // Resize the window to 400x400
});

function validateForm() {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value.trim();

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phone === "" ||
    dob === "" ||
    gender === "" ||
    address === ""
  ) {
    alert("All fields marked as required must be filled out.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validatePhone(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}

function validateEmail(email) {
  // Basic email validation pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validatePhone(phone) {
  // Basic phone number validation pattern (for 10-digit numbers)
  const pattern = /^[0-9]{10}$/;
  return pattern.test(phone);
}

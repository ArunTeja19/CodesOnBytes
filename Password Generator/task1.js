function generatePassword() {
  var length = document.getElementById("length").value;
  var charset = "abcdefghijklmnopqrstuvwxyz";

  if (document.getElementById("uppercase").checked) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("numbers").checked) {
      charset += "0123456789";
  }
  if (document.getElementById("special").checked) {
      charset += "!@#$%^&*()_-+=";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
  }

  document.getElementById("password").value = password;

  // Additional feedback to the user
  displayStrength(password);
}

function displayStrength(password) {
  var strengthMessage = "";
  var strengthColor = "";

  if (password.length < 8) {
      strengthMessage = "Weak: Too short";
      strengthColor = "#e74c3c";
  } else if (password.length < 12) {
      strengthMessage = "Moderate: Keep going";
      strengthColor = "#f39c12";
  } else {
      strengthMessage = "Strong: Great job!";
      strengthColor = "#2ecc71";
  }

  document.getElementById("strength-message").innerText = strengthMessage;
  document.getElementById("strength-message").style.color = strengthColor;
}

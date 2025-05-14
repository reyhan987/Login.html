document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (email && password) {
      document.getElementById("successMessage").textContent = "Success!";
    } else {
      document.getElementById("successMessage").textContent = "";
      alert("Please fill in all fields.");
    }
  });
  
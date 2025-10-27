// Handle Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (localStorage.getItem(phone)) {
      alert("User already exists with this phone number!");
      return;
    }

    const user = { name, phone, password };
    localStorage.setItem(phone, JSON.stringify(user));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  });
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginName = document.getElementById('loginName').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;

    let userFound = false;

    // Check all users
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const user = JSON.parse(localStorage.getItem(key));

      if ((user.name === loginName || user.phone === loginName) && user.password === loginPassword) {
        userFound = true;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html";
        break;
      }
    }

    if (!userFound) {
      alert("Invalid credentials! Please try again.");
    }
  });
}

// Temporary storage for users (simulating a database)
const users = [];

document.getElementById("register-form").onsubmit = (e) => {
  e.preventDefault();

  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  // Check if the email already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    alert("Email is already registered.");
    return;
  }

  // Register the new user
  users.push({ username, email, password });
  alert("User registered successfully!");
  document.getElementById("register-form").reset(); // Reset the form
};

document.getElementById("login-form").onsubmit = (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Check if the user exists and password matches
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    alert("Login successful! Welcome " + user.username);
  } else {
    alert("Invalid credentials. Please try again.");
  }
};

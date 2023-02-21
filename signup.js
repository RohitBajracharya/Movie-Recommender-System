const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  if(username.length<3){
    alert('Username must be at least 3 character');
    return;
  }
  if (!emailRegex.test(email)) {
    alert('invalid email');
    return;
  }
  
  form.submit();
  alert('SignUp successful');
});

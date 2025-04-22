// your code goes here
// script.js
const toggleBtn = document.getElementById('toggleTheme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌗';
});

// script.js

// Select the button and body
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load the saved theme from localStorage (or default to 'light-mode')
const savedTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(savedTheme);

// Update the button text based on the saved theme
toggleButton.textContent = savedTheme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

// Add event listener for theme toggle
toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    // Switch to dark mode
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark-mode'); // Save to localStorage
  } else {
    // Switch to light mode
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light-mode'); // Save to localStorage
  }
});

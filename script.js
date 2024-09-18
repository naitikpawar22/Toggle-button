const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    toggle.checked = savedTheme === 'dark-mode';
}

// Toggle between dark and light mode
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toogle');

    // State
    const theme = localStorage.getItem('theme');

    //On mount(something that happens when the page finishes its initial load)
    theme && document.body.classList.add(theme);

    //Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if(document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme','light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    };

// Events
themeToggleBtns.forEach(btn => 
    btn.addEventListener('click', handleThemeToggle)
);
};

export default darkMode;
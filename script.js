function toggleMode() {
    const body = document.getElementById('body');
    const btn  = document.getElementById('theme-btn');
 
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        btn.textContent = '☾ Dark';
    } else {
        body.classList.replace('light', 'dark');
        btn.textContent = '☀ Light';
    }
 
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}
 
(function () {
    const saved = localStorage.getItem('theme');
    const body  = document.getElementById('body');
    const btn   = document.getElementById('theme-btn');
 
    if (saved === 'light') {
        body.classList.replace('dark', 'light');
        btn.textContent = '☾ Dark';
    }
})();

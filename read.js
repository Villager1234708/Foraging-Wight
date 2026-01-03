document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('fetchBtn');
    const input = document.getElementById('playerName');
    const result = document.getElementById('result');

    if (!btn || !input || !result) return;

    btn.addEventListener('click', () => {
        if (input.value && input.value.trim() !== '') {
            result.style.display = '';
            result.textContent = `Results for ${input.value.trim()}`;
        } else {
            result.style.display = 'none';
            result.textContent = '';
        }
    });

    
});

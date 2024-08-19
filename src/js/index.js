function copyPixKey() {
    const pixKeyInput = document.getElementById('pix-key');
    pixKeyInput.select();
    pixKeyInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(pixKeyInput.value)
        .then(() => {
            alert('Chave PIX copiada para a área de transferência!');
        })
        .catch(err => {
            console.error('Erro ao copiar a chave PIX: ', err);
        });
}

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (document.body.classList.contains('dark-theme')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
});

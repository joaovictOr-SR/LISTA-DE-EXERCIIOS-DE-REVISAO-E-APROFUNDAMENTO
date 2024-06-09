// João Victor Santos Ruas

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('errorMessage');
    
    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Todos os campos devem ser preenchidos.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Aqui você pode adicionar o código para enviar o formulário, por exemplo, via AJAX.
        alert('Formulário enviado com sucesso!');
        document.getElementById('contactForm').reset();
    }
});

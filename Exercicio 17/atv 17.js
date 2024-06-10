// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'user';
    const validPassword = '12345678';

    function isLoggedIn() {
        return localStorage.getItem('loggedIn') === 'true';
    }

    function showLoggedInMessage() {
        document.querySelector('.container').innerHTML = `
            <h1>Bem-vindo, ${validUsername}!</h1>
            <button id="logout-button">Sair</button>
        `;
        document.getElementById('logout-button').addEventListener('click', logout);
    }

    function login(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === validUsername && password === validPassword) {
            localStorage.setItem('loggedIn', 'true');
            showLoggedInMessage();
        } else {
            errorMessage.textContent = 'Usuário ou senha inválidos.';
        }
    }

    function logout() {
        localStorage.removeItem('loggedIn');
        location.reload();
    }

    if (isLoggedIn()) {
        showLoggedInMessage();
    } else {
        loginForm.addEventListener('submit', login);
    }
});

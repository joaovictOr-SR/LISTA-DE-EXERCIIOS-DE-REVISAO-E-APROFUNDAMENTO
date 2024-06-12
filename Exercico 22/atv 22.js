// João Victor Santos Ruas

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const cardNumberError = document.getElementById('cardNumberError');
    const expirationDateError = document.getElementById('expirationDateError');
    const cvvError = document.getElementById('cvvError');
    const message = document.getElementById('message');


    nameError.textContent = '';
    emailError.textContent = '';
    cardNumberError.textContent = '';
    expirationDateError.textContent = '';
    cvvError.textContent = '';
    message.textContent = '';

    
    if (name === '') {
        nameError.textContent = 'Por favor, insira seu nome.';
        return;
    }

    if (email === '') {
        emailError.textContent = 'Por favor, insira seu email.';
        return;
    }

    if (cardNumber === '' || cardNumber.length !== 16 || isNaN(cardNumber)) {
        cardNumberError.textContent = 'Por favor, insira um número de cartão válido.';
        return;
    }

    if (expirationDate === '' || !expirationDate.match(/^\d{2}\/\d{2}$/)) {
        expirationDateError.textContent = 'Por favor, insira uma data de expiração válida (MM/YY).';
        return;
    }

    if (cvv === '' || cvv.length !== 3 || isNaN(cvv)) {
        cvvError.textContent = 'Por favor, insira um CVV válido.';
        return;
    }



    alert ("Pagamento bem sucedido")
});

// João Victor Santos Ruas

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    const isVisible = answer.classList.contains('show');

    if (isVisible) {
        answer.classList.remove('show');
        arrow.classList.remove('rotate');
    } else {
        answer.classList.add('show');
        arrow.classList.add('rotate');
    }
}


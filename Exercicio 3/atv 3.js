// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('#lista li');
    
    items.forEach(item => {
        item.addEventListener('click', () => {

            items.forEach(i => i.classList.remove('highlight'));

            item.classList.add('highlight');
        });
    });
});
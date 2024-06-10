// João Victor Santos Ruas

function filtrarImagens(categoria) {
    const imagens = document.querySelectorAll('.imagem');
    imagens.forEach(imagem => {
        if (categoria === 'todos' || imagem.classList.contains(categoria)) {
            imagem.style.display = 'block';
        } else {
            imagem.style.display = 'none';
        }
    });
}

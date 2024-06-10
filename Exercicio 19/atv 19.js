// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const previewContainer = document.getElementById('preview');
        previewContainer.innerHTML = ''; // Limpa quaisquer visualizações existentes

        const files = event.target.files;
        for (const file of files) {
            const fileReader = new FileReader();
            fileReader.addEventListener('load', function(e) {
                const previewElement = document.createElement('div');
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    previewElement.appendChild(img);
                } else {
                    const span = document.createElement('span');
                    span.textContent = file.name;
                    previewElement.appendChild(span);
                }
                previewContainer.appendChild(previewElement);
            });
            fileReader.readAsDataURL(file);
        }
    });

    document.getElementById('uploadForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
    
        const formData = new FormData();
        const files = document.getElementById('fileInput').files;
        for (const file of files) {
            formData.append('files[]', file);
        }

        // Exibe a imagem na parte inferior
        const imageContainer = document.getElementById('imageContainer');
        const img = document.createElement('img');
        img.src = window.URL.createObjectURL(files[0]);
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
    });
});


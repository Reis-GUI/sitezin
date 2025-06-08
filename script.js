 document.addEventListener('DOMContentLoaded', function() {
            const galleryContainer = document.getElementById('galleryContainer');
            const modal = document.getElementById('myModal');
            const modalImage = document.getElementById('modalImage');
            const closeModal = document.getElementById('closeModal');
            const captionText = document.getElementById('caption');
            const prevButton = document.getElementById('prevButton');
            const nextButton = document.getElementById('nextButton');

            let currentImageIndex = 0;

            // Lista de imagens (substitua pelos URLs das suas imagens)
            // Adicione um 'alt' para acessibilidade e legenda
            const images = [
                { src: './fotos/foto1.jpg', alt: 'Eu' },
                { src: 'https://via.placeholder.com/600x400/00FF00/FFFFFF?Text=Imagem+2', alt: 'Não' },
                { src: 'https://via.placeholder.com/600x400/0000FF/FFFFFF?Text=Imagem+3', alt: 'Consigo' },
                { src: 'https://via.placeholder.com/600x400/FFFF00/000000?Text=Imagem+4', alt: 'Viver' },
                { src: './fotos/foto5.jpg', alt: 'Sem' },
                { src: 'https://via.placeholder.com/600x400/00FFFF/000000?Text=Imagem+6', alt: 'Você.' },
                { src: 'https://via.placeholder.com/600x400/00FFFF/000000?Text=Imagem+6', alt: 'Te' },
                { src: './fotos/foto8.jpg', alt: 'Amo' },
                { src: './fotos/foto9.jpg', alt: 'Mais' },
                { src: './fotos/foto10.jpg', alt: 'Que' },
                { src: 'https://via.placeholder.com/600x400/00FFFF/000000?Text=Imagem+6', alt: 'Tudo' },
                { src: 'https://via.placeholder.com/600x400/00FFFF/000000?Text=Imagem+6', alt: '❤' }
            ];

            // Criar miniaturas
            images.forEach((imgData, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = imgData.src.replace('600x400', '150x150'); // Usar versão menor para miniatura, se disponível
                imgElement.alt = imgData.alt;
                imgElement.classList.add('thumbnail');
                imgElement.dataset.index = index; // Guardar o índice da imagem
                galleryContainer.appendChild(imgElement);

                // Evento de clique na miniatura
                imgElement.addEventListener('click', function() {
                    currentImageIndex = parseInt(this.dataset.index);
                    openModal(currentImageIndex);
                });
            });

            function openModal(index) {
                modal.style.display = "block";
                modalImage.src = images[index].src;
                captionText.textContent = images[index].alt;
                currentImageIndex = index;
            }

            // Fechar o modal
            closeModal.onclick = function() {
                modal.style.display = "none";
            }

            // Fechar o modal clicando fora da imagem (opcional)
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            // Navegação
            prevButton.onclick = function() {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                openModal(currentImageIndex);
            }

            nextButton.onclick = function() {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                openModal(currentImageIndex);
            }

            // Navegação com teclas de seta (opcional)
            document.addEventListener('keydown', function(event) {
                if (modal.style.display === "block") {
                    if (event.key === "ArrowLeft") {
                        prevButton.click();
                    } else if (event.key === "ArrowRight") {
                        nextButton.click();
                    } else if (event.key === "Escape") {
                        closeModal.click();
                    }
                }
            });
        });
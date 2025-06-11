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
                { src: './fotos/foto2.jpg', alt: 'Não' },
                { src: './fotos/foto3.jpg', alt: 'Consigo' },
                { src: './fotos/foto4.jpg', alt: 'Viver' },
                { src: './fotos/foto5.jpg', alt: 'Sem' },
                { src: './fotos/foto6.jpg', alt: 'Você.' },
                { src: './fotos/foto7.jpg', alt: 'Te' },
                { src: './fotos/foto8.jpg', alt: 'Amo' },
                { src: './fotos/foto9.jpg', alt: 'Mais' },
                { src: './fotos/foto10.jpg', alt: 'Que' },
                { src: './fotos/foto11.jpg', alt: 'Tudo' },
                { src: './fotos/foto12-18.jpg', alt: '❤' },
                { src: './fotos/foto13.jpg', alt: '❤' },
                { src: './fotos/foto14.jpg', alt: '❤' },
                { src: './fotos/foto15.jpg', alt: '❤' },
                { src: './fotos/foto16.jpg', alt: '❤' },
                { src: './fotos/foto17.jpg', alt: '❤' },
                { src: './fotos/foto12.jpg', alt: '❤' },
                { src: './fotos/foto19.jpg', alt: '❤' },
                { src: './fotos/foto20.jpg', alt: '❤' },
                { src: './fotos/foto21.jpg', alt: '❤' },
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
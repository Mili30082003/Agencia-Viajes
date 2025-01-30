// Seleccionar los elementos del DOM
const backBtn = document.querySelector('.backBtn');
const nextBtn = document.querySelector('.nextBtn');
const productContainer = document.querySelector('.product-container');

// Agregar los event listeners para el desplazamiento
backBtn.addEventListener('click', () => {
    productContainer.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    productContainer.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
});


document.querySelectorAll('.modal-trigger').forEach(img => {
    img.addEventListener('click', function() {
      document.getElementById('modalImage').src = this.src;
    });
  });
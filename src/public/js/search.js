document.addEventListener('DOMContentLoaded', () => {
    const buscardorInput = document.getElementById('buscador');
    buscardorInput.addEventListener('keyup', handleSearch);
  });
  
  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productSections = document.getElementsByClassName('productList');
  
    for (let i = 0; i < productSections.length; i++) {
      const productName = productSections[i].querySelector('.productText').textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        productSections[i].style.display = 'flex'; // Mostrar sección si coincide
      } else {
        productSections[i].style.display = 'none'; // Ocultar sección si no coincide
      }
    }
  }
  
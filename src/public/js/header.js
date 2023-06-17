

// Obtener los elementos <h3> por su id
var miPerfil = document.getElementById('mi-perfil');
var editarProducto = document.getElementById('editar-producto');
var cerrarSesion = document.getElementById('cerrar-sesion');

// Agregar eventos de clic a los elementos <h3>
miPerfil.addEventListener('click', function() {
  window.location.href = '/users/profile'; // Redirigir a la página de "Mi Perfil"
});

editarProducto.addEventListener('click', function() {
  window.location.href = '/products/indexProduct'; // Redirigir a la página de "Editar un Producto"
});

cerrarSesion.addEventListener('click', function() {
  window.location.href = '/users/logout'; // Redirigir a la página de "Cerrar Sesión"
});


document.getElementById("showIcon").addEventListener("click", function() {
  var hiddenIcons = document.getElementById("hiddenIcons");
  hiddenIcons.classList.toggle("hidden");
});
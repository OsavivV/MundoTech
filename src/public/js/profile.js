
const infoProfiledb = document.querySelector('.infoProfiledb');
const infoProfiledbHidden = document.querySelector('.infoProfiledb-hidden');


infoProfiledbHidden.style.display = 'none';


const buttonAdmP = document.querySelector('#buttonAdmP');
buttonAdmP.addEventListener('click', function() {

  infoProfiledbHidden.style.display = 'block';


  infoProfiledb.style.display = 'none';
});


const volverButton = document.querySelector('#volver');
volverButton.addEventListener('click', function() {

  infoProfiledb.style.display = 'block';


  infoProfiledbHidden.style.display = 'none';
});




// Obtén una referencia a los elementos HTML
const infoBillingDb = document.querySelector('.infoBillingDb');
const infoBillingDbHidden = document.querySelector('.infoBillingDb-hidden');
const buttonAdmB = document.getElementById('buttonAdmB');
const volverRbutton = document.getElementById('volveR');

// Oculta infoBillingDb-hidden inicialmente
infoBillingDbHidden.style.display = 'none';

// Agrega el evento click al botón "Editar"
buttonAdmB.addEventListener('click', function() {
  // Muestra infoBillingDb-hidden
  infoBillingDbHidden.style.display = 'block';
  // Oculta infoBillingDb
  infoBillingDb.style.display = 'none';
});

// Agrega el evento click al botón "Volver"
volverRbutton.addEventListener('click', function() {
  // Muestra infoBillingDb
  infoBillingDb.style.display = 'block';
  // Oculta infoBillingDb-hidden
  infoBillingDbHidden.style.display = 'none';
});

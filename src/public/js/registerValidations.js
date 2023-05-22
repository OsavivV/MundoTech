const validateForm = document.querySelector('form.forms_form_signUp');

validateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const allErrorLabels = document.querySelectorAll('.error-message');
  allErrorLabels.forEach(element => {
    element.innerHTML = " ";
  });

  const errors = [];

  function singUpValidations(name, message) {
    if (!validateForm[name].value) {
      errors.push({ name, message });
      validateForm[name].classList.add('is-invalid');
    } else {
      validateForm[name].classList.remove('is-invalid');
      validateForm[name].classList.add('is-valid');
    }
  }


  singUpValidations('firstName', '*Tienes que escribir un nombre*');
  singUpValidations('lastName', '*Tienes que escribir un apellido*');
  singUpValidations('email', '*Tienes que escribir un correo electrónico*');
  singUpValidations('password', '*Tienes que escribir una contraseña*');

  errors.forEach(error => {
    const errorLabel = document.getElementById(error.name + 'Error');
    errorLabel.innerHTML = error.message;
  });


  if (errors.length === 0) {
    validateForm.submit(); // Envío directo del formulario
  }

});


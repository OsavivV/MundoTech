
// ---------------validations 


const validateForms = document.querySelector('form.forms_form')


validateForms.addEventListener('submit', (e) => {
    e.preventDefault();

    const allErrorLabels = document.querySelectorAll('.forms_field-input');
    allErrorLabels.forEach(element => {
        element.innerHTML = " " ;
    });


const errors = [];

function frontValidations (name, message) {
    if (validateForms [name].value) {
        !errors.push({name, message});
        validateForms[name].classList.add('is-invalid');
    } else {
        validateForms[name].classList.remove('is-invalid');
        validateForms[name].classList.add('is-valid');
    }
}

    frontValidations('firstName', '*Tienes que escribir un nombre*');
    frontValidations('lastName', '*Tienes que escribir un apellido*');
    frontValidations('email', '*Tienes que escribir un correo electrónico*');
    frontValidations('password', '*Tienes que escribir una contraseña*', );

errors.forEach(error => {
    const errorLabel = document.getElementById('isRegisterError' + error.name);
    errorLabel.innerHTML = error.message;
});

if (errors.length === 0) {
    validateForms.submit();
}

})


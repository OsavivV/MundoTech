const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

      const urlParams = new URLSearchParams(window.location.search);
      const form = urlParams.get("form") || document.getElementById('isRegisterError')?.value;
      switch (form) {
        case "register":
          userForms.classList.remove('bounceRight')
          userForms.classList.add('bounceLeft')
          break;
  
        // case "login":
        //   userForms.classList.remove('bounceRight')
        //   userForms.classList.add('bounceLeft')
        //   break;  
      
        default:
          userForms.classList.remove('bounceLeft')
          userForms.classList.add('bounceRight')
          break;
      } 
  


/*** Clickear bottom registrarme */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
})

/*** Clickear bottom logearme */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
})


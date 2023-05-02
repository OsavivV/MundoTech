let menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.fa-bars');

burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('mostrar2');
    });

    menu.addEventListener('mouseleave', () =>{
        menu.classList.toggle('mostrar2');
    })

// evento al primer icono llamado mobile

let mobile = document.querySelector('.mobile');
const icon = document.querySelector('.fa-mobile-button');

    icon.addEventListener('click', () => {
        mobile.classList.toggle('mostrar');
    });

    mobile.addEventListener('mouseover', () =>{
        mobile.classList.toggle('mostrar');
    })

// evento al segundo icono llamado desktop 

let desktop = document.querySelector('.desktop');
const icon2 = document.querySelector('.fa-desktop');
    
    icon2.addEventListener('click', () => {
        desktop.classList.toggle('mostrar');
    });
    
    desktop.addEventListener('mouseover', () =>{
        desktop.classList.toggle('mostrar');
    })

// evento al tercer icono llamado accesories

let accesories = document.querySelector('.accesories');
const icono3 = document.querySelector('.fa-headphones');
        
    icono3.addEventListener('click', () => {
        accesories.classList.toggle('mostrar');
    });
        
    accesories.addEventListener('mouseover', () =>{
        accesories.classList.toggle('mostrar');
    })
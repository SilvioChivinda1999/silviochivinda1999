const navSlide = () =>{
     const burger = document.querySelector('.burger');
     const nav = document.querySelector('.main-menu');
     const  navlinks = document.querySelectorAll('.main-menu li');  
    burger.addEventListener('click',()  => {
           //toggle nav 
        nav.classList.toggle('main-menu-active');
           //animete links
        navlinks.forEach((link, index)  => {
        /*  link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.3}s`;   */
            if (link.style.animation ){
            link.style.animation = '';
            }  else {

              link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }   
     });
     //buger animation
        burger.classList.toggle('toggle');

    });
 
}
navSlide();
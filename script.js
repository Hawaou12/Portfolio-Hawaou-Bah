//icon navbar
let menuIcon = document.querySelector('#menu'); 
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//section scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar
            navLinks.forEach(links => { 
                links.classList.remove('active'); 
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); 
            });
        //  activé les  sections d'animations
        sec.classList.add('row-animation');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('row-animation');
        }
    });

    //header
    let header = document.querySelector('header'); 

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar  links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footers = document.querySelector('.footers');

    footers.classList.toggle('row-animation', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

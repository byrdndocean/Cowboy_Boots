let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

}

// Boxicons.com
// <i class='bx bx-x'></i>

// CSS file
    // .navbar.open {
    //     top: 100%;
    // }

// https://www.w3schools.com/howto/howto_js_toggle_class.asp


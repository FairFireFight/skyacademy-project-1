/*
app.js

Sulaiman Jamal Al-Asad
September 1st 2024
-------------------------------------------
this javascript file is to be loaded 
and executed on every page in this project.

Contents:
    1. Global function declarations
    2. Preload checks
    3. Navbar loader 
*/


// 1. Global function declarations ========================

/*
*   
**/
async function getComponent(path) {
    path = 'components/' + path;

    const response = await fetch(path);
    const data = await response.text();
    return data;
}

// 2. Preload checks ======================================
if (!window.location.host) {
    alert('ERROR:\nYou are currently viewing this page through the file:/// scheme\nIn order for the page to function correctly, you must open it through a localhost.\nThis is because the JS "fetch()" function only works with http:// scheme.')
}


// 3. Navbar Loader =======================================
// Load navbar into element with id #navbar 
const navbar = document.getElementById('navbar');

if (navbar) {
    getComponent('navbar.html').then(component => {
        navbar.innerHTML = component;
    }).then(() => {
        // Set current page's nav link font to bold
        const navLinks = document.querySelectorAll('.sk-nav-link');
        const path = window.location.pathname.toLowerCase();
    
        // Pesky edge case (default route)
        if (path === '/') {
            navLinks[0].classList.add('sk-nav-active');
            return;
        }
    
        for (let i = 0; i <= navLinks.length; i++) {
            if (path === navLinks[i].getAttribute('href').toLowerCase()) {
                navLinks[i].classList.add('sk-nav-active');
            }
        }
    });
}



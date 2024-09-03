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

// Gets the contents of a file in the components directory
async function getComponent(component) {
    component = 'components/' + component;

    const response = await fetch(component);
    const data = await response.text();
    return data;
}

// search through the names array from service provider
function searchNames(search) {
    const lowerCaseSearchTerm = search.toLowerCase();

    // no search term returns all
    if (!search) {
        return names;
    }

    return names.filter(name => 
        name.toLowerCase().includes(lowerCaseSearchTerm)
    );
}

// 2. Preload checks ======================================
if (!window.location.host) {
    alert('ERROR:\nYou are currently viewing this page through the file:/// scheme\nIn order for the page to function correctly, you must open it through a localhost.\nThis is because the JS "fetch()" function only works with the http:// scheme.');
}

// 3. Navbar Loader =======================================
// Load navbar into element with id #navbar 
const navbar = document.getElementById('navbar');

// verify that the navbar loaded first
if (navbar) {
    getComponent('navbar.html').then(component => {
        navbar.innerHTML = component;
    }).then(() => {
        // Set current page's nav link font to bold
        const navLinks = document.querySelectorAll('.sk-nav-link');
        const path = window.location.pathname.toLowerCase();

        let found = false;
        for (let i = 0; i < navLinks.length; i++) {
            if (path === navLinks[i].getAttribute('href').toLowerCase()) {
                navLinks[i].classList.add('sk-nav-active');
                found = true;
                break;
            }
        }

        // default to home page
        if (!found) {
            navLinks[0].classList.add('sk-nav-active');
        }
    });
}



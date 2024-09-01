/*
app.js

Sulaiman Jamal Al-Asad
September 1st 2024
-------------------------------------------
this javascript file is to be loaded 
and executed on every page in this project.

Contents:
    1. Global function declarations
    2. Navbar loader 
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

// 2. Navbar Loader =======================================
// Load navbar into element with id #navbar 
const navbar = document.getElementById('navbar');

getComponent('navbar.html').then(component => {
    navbar.innerHTML = component;
});

// Set current page's nav link font to bold
// TODO
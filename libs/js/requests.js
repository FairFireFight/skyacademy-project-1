/*
app.js

Sulaiman Jamal Al-Asad
September 3rd 2024
-------------------------------------------
JS unique to the requests.html page

Contents:
    1. loading requests
*/

// 1. Loading requests ====================================
const requestsContainer = document.getElementById('requestsContainer');

getComponent('request-card-responsive.html').then(component => {
    for (let i = 0; i < 12; i++) {
        // replace all wildcards with the name fetched from service provider
        card = component.replace(/\[name\]/g, names[i]);
    
        // add it to the container
        requestsContainer.innerHTML += card;
    }
});
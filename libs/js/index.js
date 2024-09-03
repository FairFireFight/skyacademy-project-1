/*
index.js

Sulaiman Jamal Al-Asad
September 2nd 2024
-------------------------------------------
JS unique to the index.html page

Contents:
    1. Vacation requests Loader
*/

// 1. Vacation requests Loader ============================
const requestsContainer = document.getElementById('requestsContainer');

// generate 4 cards
getComponent('request-card-slim.html').then(component => {
    for (let i = 0; i < 4; i++) {
        // replace all wildcards with the name fetched from service provider
        card = component.replace(/\[name\]/g, names[i]);
    
        // add it to the container
        requestsContainer.innerHTML += card;
    }
});
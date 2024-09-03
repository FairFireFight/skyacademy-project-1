/*
app.js

Sulaiman Jamal Al-Asad
September 3rd 2024
-------------------------------------------
JS unique to the requests.html page

Contents:
    1. loading requests
*/

const requestsContainer = document.getElementById('requestsContainer');

getComponent('request-card-responsive.html').then(component => {
    requestsContainer.innerHTML += component;
});
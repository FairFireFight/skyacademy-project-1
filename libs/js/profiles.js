/*
profiles.js

Sulaiman Jamal Al-Asad
September 2nd 2024
-------------------------------------------
JS unique to the profiles.html page

Contents:
    1. Leave history loader
*/

// 1. Leave History loader ================================
const leaveHistoryContainer = document.getElementById('leaveHistoryContainer');

// generate 6 history cards
getComponent('leave-history-card.html').then(component => {
    for (let i = 0; i < 6; i++) {
        // replace all wildcards with the type fetched from service provider
        card = component.replace(/\[type\]/g, leaveTypes[i]);
    
        // add it to the container
        leaveHistoryContainer.innerHTML += card;
    }
});

getComponent('request-card-profile.html').then(component => {
    for (let i = 0; i < 2; i++) {
        // replace all wildcards with the name fetched from service provider
        card = component.replace(/\[name\]/g, 'Mike Doe');
    
        // add it to the container
        requestsContainer.innerHTML += card;
    }
});
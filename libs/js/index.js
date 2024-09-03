/*
index.js

Sulaiman Jamal Al-Asad
September 2nd 2024
-------------------------------------------
JS unique to the index.html page

Contents:
    1. Functions
    2. Vacation requests Loader
*/

// 1. Functions ===========================================
function searchBox(e) {
    let result = searchNames(e.value);
    
    // get top 4 results
    result = result.slice(0, 4);

    generateCards(result);
}

function generateCards(list) {
    const requestsContainer = document.getElementById('requestsContainer');

    getComponent('request-card-slim.html').then(component => {
        let cards = '';

        for (let i = 0; i < Math.min(4, list.length); i++) {
            // replace all wildcards with the name fetched from service provider
            let card = component.replace(/\[name\]/g, list[i]);
        
            // add it to the container
            cards += card;
        }

        requestsContainer.innerHTML = cards;
    });

}

// 2. Vacation requests Loader ============================
generateCards(names);
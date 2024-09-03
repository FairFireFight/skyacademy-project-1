/*
app.js

Sulaiman Jamal Al-Asad
September 3rd 2024
-------------------------------------------
JS unique to the requests.html page

Contents:
    1. functions
    2. loading requests
*/

// 1. Functions ===========================================
// handles checkboxes for each card individually
function selectCard(e) {
    const requestId = 'request-' + e.id.substring(e.id.indexOf('-') + 1, e.id.length);
    const requestCard = document.getElementById(requestId);

    if (e.checked) {
        requestCard.classList.add('selected');
    } else {
        requestCard.classList.remove('selected');
    }
}

// handles select all checkbox
function selectAll(e) {
    const requestCards = document.getElementsByClassName('sk-request');
    const checkBoxes = document.getElementsByClassName('sk-request-checkbox');

    for (let i = 0; i < requestCards.length; i++) {
        if (e.checked) {
            requestCards[i].classList.add('selected');
        } else {
            requestCards[i].classList.remove('selected');
        }

        checkBoxes[i].checked = e.checked;
    }
}


// 2. Loading requests ====================================
const requestsContainer = document.getElementById('requestsContainer');

getComponent('request-card-responsive.html').then(component => {
    for (let i = 0; i < 12; i++) {
        // replace all wildcards
        card = component.replace(/\[name\]/g, names[i]);
        card = card.replace(/\[id\]/g, i);
    
        // add it to the container
        requestsContainer.innerHTML += card;
    }
});
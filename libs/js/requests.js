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
const ITEMS_PER_PAGE = 12;

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

// paginate requests and generate pagination controls
function paginate(list, page) {
    page--; // 0 index the page
    let pageNames = [];

    for (let i = page * ITEMS_PER_PAGE; i < (page * ITEMS_PER_PAGE) + ITEMS_PER_PAGE; i++) {
        if (list[i]) {
            pageNames.push(list[i]);
        } else {
            break; // no more names left, last page
        }
    }

    // generate pagination ======================
    const pagination = document.getElementById('pagination');

    // create a base URL to attach to each pagination link
    const url = `/requests.html?${search ? 'q=' + search + '&' : ''}p=`

    pagination.innerHTML += `<a href="${url + (page - 1)}"><i class="fa-solid fa-chevron-left fa-sm"></i></a>`;

    for (let i = 1; i <= Math.ceil(list.length / ITEMS_PER_PAGE); i++) {
        pagination.innerHTML += `<a ${i == page ? "class='current'" : ''} href="${url + i}">${i}</a>`;
    }

    pagination.innerHTML += `<a href="${url + (page + 1)}"><i class="fa-solid fa-chevron-right fa-sm"></i></a>`;

    return pageNames;
}

// generates cards
function generateCards(list) {
    const requestsContainer = document.getElementById('requestsContainer');

    getComponent('request-card-responsive.html').then((component) => {
        let cards = ''

        for (let i = 0; i < list.length; i++) {
            // replace all wildcards
            let card = component.replace(/\[name\]/g, list[i]);
            card = card.replace(/\[id\]/g, i);
        
            cards += card;
        }
        
        requestsContainer.innerHTML = cards;
    });
}

// 2. Loading requests ====================================
// get page number from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const page = urlParams.get('p') ?? 1;
const search = urlParams.get('q') ?? '';

generateCards(paginate(searchNames(search), page));
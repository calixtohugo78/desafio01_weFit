const $ = document.querySelector.bind(document);

const html = {

    // Menu:
    menuList: $('.btn-group-vertical'),

    // Header:
    headerCard: $('.jumbotron'),
    headerCardBrn: $('.jumbotron > a'),

    // Cards:
    cardWrapper: $('.container .row:nth-of-type(3)'),
    cardList: [...$('.container .row:nth-of-type(3)').children],
    cardAnimalBtn: $('.container .row:nth-of-type(3) div:nth-of-type(2) .card .card-body a'),

    // List:
    ulList: $('.list-group'),
    activeLi: $('.active'),

}


// Menu alteration:

html.menuList.classList.replace("btn-group-vertical", "btn-group-horizontal")

// Header alteration:

html.headerCard.classList.add("bg-secondary", "text-white", "text-right");
html.headerCardBrn.classList.replace("btn-primary", "btn-success");

// Card Alteration:


html.cardAnimalBtn.classList.replace("btn-primary", "btn-success")

let item00unOrder = html.cardList[0];
let item01unOrder = html.cardList[1];
let item02unOrder = html.cardList[2];
let item03unOrder = html.cardList[3];
let item04unOrder = html.cardList[4];

const createNewCardList = (item00, item01, item02, item03, item04) => {

    let newArrayCard = [item00, item04, item01, item03, item02];

    html.cardList.forEach(item => {
        item.remove();
    })

    newArrayCard.forEach(el => {
        html.cardWrapper.appendChild(el)
    })

}

createNewCardList(item00unOrder, item01unOrder, item02unOrder, item03unOrder, item04unOrder)

// List alteration:

html.activeLi.classList.remove('active');

const insertLi = (text) => {

    let listItem = document.createElement('li');
    listItem.innerText = text;
    listItem.classList.add('list-group-item');
    
    if(text === 'Quarto Item'){
        listItem.classList.add('active');
    }

    html.ulList.appendChild(listItem)

}

insertLi("Quarto Item");
insertLi("Quinto Item");


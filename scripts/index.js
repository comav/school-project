//Splide carousel

new Splide('.splide').mount();

//vanta.js

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    let nav = document.getElementById('nav');
    if (prevScrollPos > currentScrollPos) {
        nav.style.top = "0px";
    } else {
        nav.style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
})

//functions

function notReady () {
    alert('Цей функціонал недоступний');
}

function joinUs () {
    let memberData = {};
    let name = prompt("Будь ласка, введіть ваше ім'я");
    if (name === null ) {
        return;
    } else {
        let contact = prompt("Введіть ваший номер телефону або адресу E-Mail");
        memberData.name = name;
        memberData.contact = contact;
    }
    
}
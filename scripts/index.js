//Splide carousel

new Splide('.splide').mount();

//vanta.js

VANTA.TOPOLOGY({
    el: ".forest",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00c97f,
    backgroundColor: 0x00
  })

//functions

function notReady () {
    alert('Цей функціонал недоступний');
}

function joinUs () {
    let memberData = {};
    let name = prompt("Будь ласка, введіть ваше ім'я");
    let contact = prompt("Введіть ваший номер телефону або адресу E-Mail");
    memberData.name = name;
    memberData.contact = contact;
    
}
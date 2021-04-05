//Splide carousel

new Splide('.splide').mount();

//anime.js animations

anime({
    targets: '.leaf1',
    translateX: 1200,
    translateY: [randomY(1), randomY(1), randomY(1), randomY(1)],
    rotate: [0, randomDeg()],
    delay: 1500,
    direction: 'normal',
    loop: true,
    easing: 'linear',
    opacity: [0.5, 1, 0],
    duration: 5000
})

anime({
    targets: '.leaf2',
    translateX: 1200,
    translateY: [randomY(2), randomY(2), randomY(2), randomY(2), randomY(2)],
    rotate: [0, randomDeg()],
    delay: 3000,
    direction: 'normal',
    loop: true,
    easing: 'linear',
    opacity: [0.5, 1, 0],
    duration: 5000
})

anime({
    targets: '.leaf3',
    translateX: 1200,
    translateY: [100, -55, 34],
    rotate: [0, randomDeg()],
    delay: 1000,
    direction: 'normal',
    loop: true,
    easing: 'linear',
    opacity: [0, 1, 0],
    duration: 5000
})

//functions

function randomY(leafNum) {
    if (leafNum == 1) {
        return Math.floor(Math.random() * (100 - 50 + 1)) + 100;
    } if (leafNum == 2) {
        return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    } if (leafNum == 3) {
        return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    } else {
        console.error(`There's no leaf $(leafNum)`);
    }
}

function randomDeg() {
    return Math.floor(Math.random() * (360 - (-360) + 1)) + (-360);
}
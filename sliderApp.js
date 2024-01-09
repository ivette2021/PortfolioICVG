let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let overlay = document.querySelector('.overlay');
let active = 0;
let lenghtItems = items.length -1;

next.onclick = function(){
    if (active + 1 > lenghtItems) {
        active =0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if (active -1 <0) {
        active = lenghtItems;
    }else{
        active = active -1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

let lastActiveDot= document.querySelector('.slider .dots li.active');
lastActiveDot.classList.remove('active');
dots[active].classList.add('active');
}

dots.forEach((li,key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    });
});
// Agregamos eventos para cambiar el display de la overlay
items.forEach((item) => {
    item.addEventListener('mouseover', function () {
        overlay.style.display = 'flex';
    });

    item.addEventListener('mouseout', function () {
        overlay.style.display = 'none';
    });
});

//eventos para pausar y reanudar el slider cuando el ratón está sobre la imagen
list.addEventListener('mouseover', function () {
    clearInterval(refreshSlider);
});

list.addEventListener('mouseout', function () {
    refreshSlider = setInterval(() => {
        next.click();
    }, 5000);
});
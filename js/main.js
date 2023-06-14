// slider
let doc = document
let offset = 0

let sliderLine = doc.querySelector('.slider')
let second = doc.querySelector('.top').addEventListener("click", function() {
    offset = offset + 634;
    if (offset > 1902) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'
});
doc.querySelector('.bottom').addEventListener('click', function (){
    offset = offset - 634;
    if (offset < 0) {
        offset = 1902;
    }
    sliderLine.style.left = -offset + 'px';
});

function slider (slide) {
    if (slide.keyCode === 37) {
        offset = offset + 634;
        if (offset > 1902) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px'
    }
    else if (slide.keyCode === 39) {
        offset = offset - 634;
    if (offset < 0) {
        offset = 1902;
    }
    sliderLine.style.left = -offset + 'px';
    }
}

doc.addEventListener('keyup', slider);

// modalka

let btn = doc.querySelector('.btn_m')
let modalka = doc.querySelector('.modalka')
let exe = doc.querySelector('.exe')


btn.onclick = () => {
    modalka.style.display = "inline"
}
exe.onclick = () => {
    modalka.style.display = "none"
}



// keypress modalaka

function handleKeyUp (event) {
    if (event.keyCode === 81) {
        modalka.style.display = "inline"
    }
    else if (event.keyCode === 27) {
        modalka.style.display = "none"
    }
}
doc.addEventListener('keyup', handleKeyUp);

// burger menu

let btnSpan = document.querySelector('.span')
let menu = document.querySelector('.menu_1')

btnSpan.addEventListener('click', function(){
    menu.classList.add('active')
})

// burger menu spans

let btnSpan2 = document.querySelector('.span2')

function sp(sp1, sp2) {
    sp1.classList.toggle("span_none")
    sp2.classList.toggle("span_none")
}
btnSpan.onclick = () => {
    sp(btnSpan2, btnSpan)
}
btnSpan2.onclick = () => {
    sp(btnSpan, btnSpan2)
    menu.classList.remove('active')
}

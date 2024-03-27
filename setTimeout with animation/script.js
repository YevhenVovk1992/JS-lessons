'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('.btn');
let timerId,
    pos = 0;

function moveBox() {
    const moveTime = setInterval(frame, 50);

    function frame () {
        if (pos == 300) {
            clearInterval(moveTime);
        } else {
            pos++;
            box.style.left = pos + 'px';
            box.style.top = pos + 'px';
    
        }
    }
}

btn.addEventListener('click', moveBox);
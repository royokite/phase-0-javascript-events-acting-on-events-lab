// Acting on events lab!

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftInt = dodger.style.left.replace('px', '');
    const left = parseInt(leftInt, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftInt = dodger.style.left.replace('px', '');
    const left = parseInt(leftInt, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key==='ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key==='ArrowRight') {
        moveDodgerRight();
    }
})

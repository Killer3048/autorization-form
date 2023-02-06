const flyingObjects = document.querySelectorAll('.flying-object');
const line = document.querySelector('.change-line');
const lineWhite = document.querySelector('.change-line_type_white');
const lineBlack = document.querySelector('.change-line_type_black');



flyingObjects.forEach((object, index) => {
    const randomDelay = Math.random() * 10;
    const randomDuration = 10;
    const randomStartX = Math.random() * 100;
    object.style.animationDelay = `${randomDelay}s`;
    object.style.animationDuration = `${randomDuration}s`;
    object.style.left = `${randomStartX}%`;
    object.style.top = `${100}%`;

    object.addEventListener('animationend', (event) => {
        const randomStartX = Math.random() * 100;
        object.style.left = `${randomStartX}%`;
        object.style.top = `${100}%`;
    });
});

function changeColorLine() {
    lineWhite.classList.toggle('change-line_type_white-value');
    lineBlack.classList.toggle('change-line_type_black-value');
}

line.addEventListener('click', changeColorLine)
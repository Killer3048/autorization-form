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

line.addEventListener('click', changeColorLine);



const cursor = document.querySelector(".cursor");
const buttons = document.querySelectorAll("button");


document.addEventListener("mousemove", e => {
    cursor.style.opacity = '1';
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

document.addEventListener("mouseenter", e => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "INPUT") {
        cursor.style.backgroundColor = "#00ff00";
        cursor.style.width = "30px";
        cursor.style.height = "30px";
    } else {
        cursor.style.backgroundColor = getComputedStyle(e.target).backgroundColor;
        cursor.style.width = "20px";
        cursor.style.height = "20px";
    }
});

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        cursor.style.backgroundColor = "red";
    });
    button.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "#00ff00";
    });
});
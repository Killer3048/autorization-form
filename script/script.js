const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const flyingObjects = document.querySelectorAll('.flying-object');
const line = document.querySelector('.change-line');
const lineWhite = document.querySelector('.change-line_type_white');
const lineBlack = document.querySelector('.change-line_type_black');
const cursor = document.querySelector(".cursor");
const buttons = document.querySelectorAll("button");
const body = document.querySelector('*')




flyingObjects.forEach((object) => {
    const randomDelay = Math.random() * 10;
    object.style.animationDelay = `${randomDelay}s`;
    if (!isSafari) {
        object.style.WebkitAnimationDelay = `${randomDelay}s`;
    }
    object.style.animationDuration = "10s";
    if (!isSafari) {
        object.style.WebkitAnimationDuration = "10s";
    }
    object.style.left = `${Math.random() * 100}%`;
    object.style.top = `100%`;

    object.addEventListener('animationend', () => {
        object.style.left = `${Math.random() * 100}%`;
        object.style.top = `100%`
    });
});


function changeColorLine() {
    lineWhite.classList.toggle('change-line_type_white-value');
    lineBlack.classList.toggle('change-line_type_black-value')

}
line.addEventListener('click', changeColorLine);

if (isSafari) {
    cursor.style.cursor = 'default';
    cursor.style.pointerEvents = 'none';
    body.style.cursor = 'pointer';
} else {

    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.pageY}px`;
        cursor.style.left = `${e.pageX}px`;
    });

    document.addEventListener("mouseenter", (e) => {
        cursor.style.opacity = '1';
        if (e.target.tagName === "BUTTON" || e.target.tagName === "INPUT") {
            cursor.style.width = "30px";
            cursor.style.height = "30px";
        } else if (e.target instanceof Element) {
            cursor.style.backgroundColor = getComputedStyle(e.target).backgroundColor;
            cursor.style.width = "20px";
            cursor.style.height = "20px";
        }
    });


    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = '0';
    });

    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            cursor.style.backgroundColor = "red";
        });
        button.addEventListener("mouseleave", () => {
            cursor.style.backgroundColor = "#00ff00";
        });
    });
};
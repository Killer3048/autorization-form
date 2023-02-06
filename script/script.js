const flyingObjects = document.querySelectorAll('.flying-object');

flyingObjects.forEach((object, index) => {
    const randomDelay = Math.random() * 10; // Random delay between 0-10 seconds
    const randomDuration = 10; // All objects will have the same duration of 10 seconds
    const randomStartX = Math.random() * 100;
    object.style.animationDelay = `${randomDelay}s`;
    object.style.animationDuration = `${randomDuration}s`;
    object.style.left = `${randomStartX}%`;
    object.style.top = `${100}%`;

    object.addEventListener("animationend", (event) => {
        const randomStartX = Math.random() * 100;
        object.style.left = `${randomStartX}%`;
        object.style.top = `${100}%`;
    });
});
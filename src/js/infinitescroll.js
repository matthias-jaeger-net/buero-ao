/* 
 * Title: Infinite scrolling  
 * Author: Matthias Jäger
 */

/** Measure dimensions of the wrapper */
const container = document.getElementById("invisibleContainer");
const containerHeight = container.offsetHeight;
const containerMid = containerHeight * 0.5 - window.innerHeight * 0.5;

let scrollDirection;

/** Measure dimensions */
window.scrollTo(0, containerMid);

window.addEventListener("wheel", event => {
    console.log(window.scrollY + " : " + (containerHeight - window.innerHeight) + " : " + event.deltaY);

    if (event.deltaY > 0) {
        scrollDirection = 1;
    } else {
        scrollDirection = -1;
    }

    if (scrollY == 0 && scrollDirection == -1) {
        window.scrollTo(0, containerHeight - window.innerHeight - 1);
        console.log("hurra");
    }

    if (window.scrollY >= (containerHeight - window.innerHeight)) {
        window.scrollTo(0, 0);
    }

});
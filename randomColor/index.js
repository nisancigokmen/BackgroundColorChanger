/*Random color and rgb(max,max,max) number */

const randomColorBtn = document.querySelector("button");
const titleTag = document.querySelector("h2");
randomColorBtn.addEventListener("click", function() {
    /*  max --> rgb( 255 , 255 , 255) */

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${b},${g})`;

    document.body.style.backgroundColor = newColor;
    titleTag.innerText = newColor;


});
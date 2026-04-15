// Switch to app screen 
const slider = document.getElementById("mySlider");

slider.addEventListener('change', (e) => {
    const {value} = e.target;
    const label = document.getElementById("label");
    if (value > 70) {
        label.innerText = "";
        displayAppScreen();
    } else {
        label.innerText = "Slide To Unlock";
    }
})

const displayAppScreen = () => {
    // hide home screen
    document.querySelector(".homeScreen").remove();
    
    // show app screen
    document.querySelector(".appScreen").style.display = "block";
}


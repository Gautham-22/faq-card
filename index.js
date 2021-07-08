let downArrows = document.querySelectorAll("#down-arrow");

downArrows.forEach((downArrow) => {
    downArrow.addEventListener("click",function(e) {
        downArrow.classList.toggle("up-arrow");
        let clickedDiv = e.target.parentElement.parentElement;  // selecting parent div which contains ques and ans
        clickedDiv.children[1].classList.toggle("display");     // displaying corresponding ans 
        clickedDiv.children[0].classList.toggle("ques__dark");            // changing style of question
        console.log(clickedDiv.children[0]);
    })
})

let illustrationBox = `<img src="./images/illustration-box-desktop.svg" alt="illustration-box-desktop" id="illustration-box-desktop">`;

// handles layout when the page loads
if(window.innerWidth >= 800) {   
    desktopLayout();
}

// handles layout when browser window size changes during browsing 
window.addEventListener("resize",() => {
    if(window.innerWidth >= 800) {   
        desktopLayout();
    }else {
        mobileLayout();
    }
})



function desktopLayout() {
    document.getElementById("illustration").src = "./images/illustration-woman-online-desktop.svg" ;
    document.getElementById("pattern").src = "./images/bg-pattern-desktop.svg";
    if(!document.getElementById("illustration-box-desktop")) {
        document.querySelector("body").insertAdjacentHTML("beforebegin",illustrationBox) ;
    }
}

function mobileLayout() {
    document.getElementById("illustration").src = "./images/illustration-woman-online-mobile.svg" ;
    document.getElementById("pattern").src = "./images/bg-pattern-mobile.svg";
    if(document.getElementById("illustration-box-desktop")) {
        document.getElementById("illustration-box-desktop").remove();
    }
}
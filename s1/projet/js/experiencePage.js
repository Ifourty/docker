export function experiencePage(){
    var firstTime = true
    document.addEventListener("scroll", (value) => {
        var scrollValue = value.target.scrollingElement.scrollTop;
        if(scrollValue >= 1400 && firstTime){
            firstTime = false;
            startAnimationTitle(0);
            startAnimationEvent(0);
        }
        
    })
}


function startAnimationTitle(letter){
    var letterTitles = document.getElementById("titleExperience").getElementsByClassName("letterE");
    if(letter > letterTitles.length - 1){
        var sep = document.getElementById("separatorE");
        sep.style.transform = "translateX(0vh)";
        sep.style.opacity = 1;
        return;
    }
    var letterT = letterTitles[letter];
    letterT.style.transform = "translateX(0vh)";
    letterT.style.opacity = 1;
    setTimeout(() => {
        startAnimationTitle(letter+1);
    }, 50);
}

function startAnimationEvent(event){
    var events = document.getElementsByClassName("event");
    if(event > events.length - 1){
        return;
    }
    var eventT = events[event];
    eventT.style.maxHeight = "100vh";

    setTimeout(() => {
        eventT.style.opacity = 1;
        startAnimationEvent(event+1);
    }, 400);
}
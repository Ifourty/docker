export function aboutPage(){
    var firstTime = true
    document.addEventListener("scroll", (value) => {
        var scrollValue = value.target.scrollingElement.scrollTop;
        if(scrollValue >=300 && firstTime){
            firstTime = false;
            document.getElementById("imgEnzo").style.opacity = 1;
            startAnimationTitle(1);
            startAnimationText(1);
        }
        
    })

}

function startAnimationText(i){
    var word = document.getElementById("word"+i);
    if(word == null){
        return;
    } else{
        word.style.opacity = 1;
        setTimeout(() => {
            startAnimationText(i+1);
        }, 25);
    }
}

function startAnimationTitle(letter){
    var letterTitles = document.getElementById("titlePropos").getElementsByClassName("letterT");
    if(letter > letterTitles.length){
        var sep = document.getElementById("separatorT");
        sep.style.transform = "translateX(0vh)";
        sep.style.opacity = 1;
        return;
    }
    var letterT = letterTitles[letterTitles.length - letter];
    letterT.style.transform = "translateX(0vh)";
    letterT.style.opacity = 1;
    setTimeout(() => {
        startAnimationTitle(letter+1);
    }, 50);
}
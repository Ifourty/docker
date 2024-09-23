export function projetsPage(){
    var firstTime = true
    document.addEventListener("scroll", (value) => {
        var scrollValue = value.target.scrollingElement.scrollTop;
        if(scrollValue >= 2500 && firstTime){
            firstTime = false;
            startAnimationTitle(1);
            startAnimationProjet();
        }
        
    })
    var projects = document.getElementsByClassName("projet");
    
    for (var i = 0; i < projects.length; i++) {
        projects[i].addEventListener("mousemove", function(event) {
            var rect = this.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            var lightEffect = "radial-gradient(circle at " + x + "px " + y + "px, var(--cardColor), transparent)";
            this.style.backgroundImage = lightEffect;
        });
    }
}

function startAnimationTitle(letter){
    var letterTitles = document.getElementById("titleProjets").getElementsByClassName("letterP");
    if(letter > letterTitles.length){
        var sep = document.getElementById("separatorP");
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

function startAnimationProjet(){
    var projects = document.getElementsByClassName("projet");
    projects[0].style.opacity = 1;
    projects[0].style.transform = "translate(0vh, 0vh)";
    setTimeout(() => {
        projects[1].style.opacity = 1;
        projects[1].style.transform = "translate(0vh, 0vh)";
        setTimeout(() => {
            projects[2].style.opacity = 1;
            projects[2].style.transform = "translate(0vh, 0vh)";
            setTimeout(() => {
                projects[3].style.opacity = 1;
                projects[3].style.transform = "translate(0vh, 0vh)";
                setTimeout(() => {
                    projects[5].style.opacity = 1;
                    projects[5].style.transform = "translate(0vh, 0vh)";
                    setTimeout(() => {
                        projects[4].style.opacity = 1;
                        projects[4].style.transform = "translate(0vh, 0vh)";
                    }, 400);
                }, 400);
            }, 400);
        }, 100);
    }, 400);
}
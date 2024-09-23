export function homePage(){
    var pres = document.getElementById("presentation-container");
    var backgroundCircle = document.getElementById("background")
    var presTxt = document.getElementById("presentation")
    var propos = document.getElementById("propos")
    document.addEventListener("scroll", (value) => {
        var scrollValue = value.target.scrollingElement.scrollTop;
        if(scrollValue <= 600 & scrollValue >= 0){
            pres.style.opacity = 1 - scrollValue / 400;
            let backgroundSize = 34.375 + scrollValue / 20;
            backgroundCircle.style.width = backgroundSize + "rem";
            backgroundCircle.style.height = backgroundSize + "rem";
            backgroundCircle.style.transform = `translateY(-${scrollValue/2}px)`;
            presTxt.style.transform = `translateY(${scrollValue/2 *-1}px)`;
            // propos.style.transform = `translateY(${scrollValue/2 *-1}px)`;
        } else{
            if(scrollValue > 600){
                pres.style.opacity = 0;
            }
        }
        
    })

    var contactme = document.getElementById("contactme");
    contactme.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    })

    var navli = document.getElementsByClassName("navli");
    for(var i = 0; i < navli.length; i++){
        let index = i;
        navli[i].addEventListener("mouseenter", () => {
            navli[index].style.transform = "scale(1.1)";
        })
        navli[i].addEventListener("mouseleave", () => {
            navli[index].style.transform = "scale(1)";
        })
        switch (index) {
            case 0:
                navli[index].addEventListener("click", () => {
                    document.getElementById("home").scrollIntoView({behavior: "smooth"});
                })
                break;
            case 1:
                navli[index].addEventListener("click", () => {
                    document.getElementById("propos").scrollIntoView({behavior: "smooth"});
                })
                break;
            case 2:
                navli[index].addEventListener("click", () => {
                    document.getElementById("experiences").scrollIntoView({behavior: "smooth"});
                })
                break;
            case 3:
                navli[index].addEventListener("click", () => {
                    document.getElementById("projets").scrollIntoView({behavior: "smooth"});
                })
                break;
            case 4:
                navli[index].addEventListener("click", () => {
                    document.getElementById("competences").scrollIntoView({behavior: "smooth"});
                })
                break;
            case 5:
                navli[index].addEventListener("click", () => {
                    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
                })
                break;
        }
    }
}
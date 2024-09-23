export function contactPage(){
    var firstTime = true
    document.addEventListener("scroll", (value) => {
        var scrollValue = value.target.scrollingElement.scrollTop;
        var section = document.getElementById("contact");
        if(scrollValue >= section.offsetTop - 500 && firstTime){
            firstTime = false;
            startAnimationTitle(1);
            startAnimationContact(0);
        }
        
    })
}

function startAnimationTitle(letter){
    var letterTitles = document.getElementById("titleContact").getElementsByClassName("letterCo");
    if(letter > letterTitles.length){
        var sep = document.getElementById("separatorCo");
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

function startAnimationContact(index){
    var contacts = document.getElementsByClassName("contactItem");
    if(index >= contacts.length){
        return;
    }
    var contact = contacts[index];
    contact.style.opacity = 1;
    contact.style.transform = "translateX(0vh)";
    setTimeout(() => {
        startAnimationContact(index+1);
    }, 300);
}

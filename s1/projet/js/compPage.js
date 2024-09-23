var selected = null;
var change = false;
export function compPage(){
    var firstTime = true
    document.addEventListener("scroll", (value) => {
        var scrollValue = value.target.scrollingElement.scrollTop;
        var section = document.getElementById("competences");
        if(scrollValue >= section.offsetTop - 200 && firstTime){
            firstTime = false;
            startAnimationTitle(0);
            startAnimationCardComp(0);
            startAnimationChoice(0);
        }
        
    })
    choiceHandler();
}



function startAnimationTitle(letter){
    var letterTitles = document.getElementById("titleCompetences").getElementsByClassName("letterC");
    if(letter > letterTitles.length - 1){
        var sep = document.getElementById("separatorC");
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

function choiceHandler(){
    var choices = document.getElementsByClassName("choice");
    selected = choices[0];
    for (var i = 0; i < choices.length; i++) {
        let index = i;
        choices[i].addEventListener("click", function(){
            if(selected == choices[index] || change){
                return;
            }
            change = true;
            selected.classList.remove("selected");
            selected.style.transform = "translateX(0vh)";
            selected = choices[index];
            selected.classList.add("selected");
            selected.style.transform = "translateX(-20vh)";
            hideCardItem(0, index);
        });
    }

}

function hideCardItem(index, indexNext){
    var cardComp = document.getElementById("cardComp");
    if(index > cardComp.children.length - 1){
        setTimeout(() => {
            showNewCard(indexNext);
        }, 300);
        return;
    }
    cardComp.children[index].style.opacity = 0;
    cardComp.children[index].style.transform = "translateX(-5vh)";
    setTimeout(() => {
        hideCardItem(index+1, indexNext);
    }, 50);
}

function showNewCard(indexNext){
    var cardComp = document.getElementById("cardComp");
    cardComp.innerHTML = document.getElementById("card" + (indexNext+1)).innerHTML;
    var cardItems = cardComp.children;
    for (var i = 0; i < cardItems.length; i++) {
        cardItems[i].style.opacity = 0;
    }
    setTimeout(() => {
        showNewCardItem(0);
    }, 100);
}

function showNewCardItem(index){
    var cardComp = document.getElementById("cardComp");
    if(index > cardComp.children.length - 1){
        cardComp.children[index-1].style.opacity = 1;
        cardComp.children[index-1].style.transform = "translateX(0vh)";
        change = false;
        return;
    }
    cardComp.children[index].style.transform = "translateX(20vh)";
    if(index != 0){
        cardComp.children[index-1].style.opacity = 1;
        cardComp.children[index-1].style.transform = "translateX(0vh)";
    }
    setTimeout(() => {
        showNewCardItem(index+1);
    }, 200);
}

function startAnimationCardComp(index){
    var cardComp = document.getElementById("cardComp");
    if(index == 0){
        cardComp.style.opacity = 1;
    }
    if(index > cardComp.children.length - 1){
        return;
    }
    cardComp.children[index].style.opacity = 1;
    cardComp.children[index].style.transform = "translateX(0vh)";
    setTimeout(() => {
        startAnimationCardComp(index+1);
    }, 200);
}

function startAnimationChoice(index){
    var choices = document.getElementsByClassName("choice");
    if(index == 0){
        selected = choices[0];
        selected.classList.add("selected");
    }
    if(index > choices.length - 1){
        return;
    }
    choices[index].style.opacity = 1;
    choices[index].style.transform = index == 0 ? "translateX(-20vh)" : "translateX(0vh)";
    setTimeout(() => {
        startAnimationChoice(index+1);
    }, 200);
}
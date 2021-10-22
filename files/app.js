const button = document.querySelector("#button");
const container = document.querySelector("#container");
const form = document.querySelector("#inputContainer");
const topicField = document.querySelector(".topic");
const falseLetters = document.querySelector(".falseLetters");
const show = document.querySelector("#show");
const newGame = document.querySelector("#newGame");
const random = document.querySelector("#random");
const randomLettersButton = document.querySelector("#randomNumbers");
const appear = document.querySelector(".appear");
const alertDivParent = document.querySelector(".alertDivParent");

const audioRandom = document.querySelector("#audioRandom");
const audioRandomEnd = document.querySelector("#audioRandomEnd");

var mySlogan
var newValue;
var spAmount = 2000;
var spUncovered = 0;
var angle = 0;
var words = 0;
var numbers = [];
var list;
function getInputValue(){
    document.body.style.overflow = "visible";
    document.querySelector(".bottomContainer").classList.remove("scale");
    newSlogan.play();
    var slogan = document.querySelector("#slogan").value;
    var topic = document.querySelector("#topic").value;
    mySlogan = slogan.split("");
    spAmount = spAmount-2000;
    mySlogan.forEach(letter => {
        if (letter == " " ){
            words++
        }
    });
    for(var i=0; i<=words; i++){
        var word = document.createElement("div");
        word.className = "word word"+i;
        container.appendChild(word);


    }
        words=0;
    mySlogan.forEach(letter => {
        i++;
        if (letter == " "){
            words++
        } else {
            var word = document.querySelector(".word"+words);
            var newLetter = document.createElement("p");
            newLetter.className = "Key"+letter.toUpperCase()+" box";
            word.appendChild(newLetter);
            newLetter.appendChild(document.createTextNode(letter.toUpperCase()));

            if(letter.toUpperCase() == "B" ||
                letter.toUpperCase() == "C" ||
                letter.toUpperCase() == "Ć" ||
                letter.toUpperCase() == "D" || 
                letter.toUpperCase() == "F" || 
                letter.toUpperCase() == "G" || 
                letter.toUpperCase() == "H" || 
                letter.toUpperCase() == "J" || 
                letter.toUpperCase() == "K" || 
                letter.toUpperCase() == "L" || 
                letter.toUpperCase() == "Ł" || 
                letter.toUpperCase() == "M" || 
                letter.toUpperCase() == "N" ||
                letter.toUpperCase() == "Ń" || 
                letter.toUpperCase() == "P" ||
                letter.toUpperCase() == "R" || 
                letter.toUpperCase() == "S" || 
                letter.toUpperCase() == "Ś" || 
                letter.toUpperCase() == "T" ||
                letter.toUpperCase() == "W" || 
                letter.toUpperCase() == "Z" || 
                letter.toUpperCase() == "Ź" || 
                letter.toUpperCase() == "Ż" ){
                spAmount++
            }
        }

    

    });

    var letters = document.querySelectorAll(".box");

    console.log(letters)

    letters.forEach(letter => {
        if(letter.classList[0] == "Key,"){
            letter.style.color = "black";
        }
        if(letter.classList[0] == "Key."){
            letter.style.color = "black";
        }
        if(letter.classList[0] == "Key-"){
            letter.style.color = "black";
        }
    });



    form.style.display="none";
    container.style.opacity= "1";
    container.style.transform= "scale(1)";
    // show.style.opacity= "1";
    // newGame.style.opacity= "1";
    // randomLettersButton.style.opacity= "1";
    // appear.style.opacity= "1";
    document.querySelector(".bottomContainer").style.opacity = "1";
    document.querySelector(".title").style.transform = "scale(0)";

    document.querySelector(".title").style.opacity = "0";
    document.querySelector(".title").style.textShadow = "none";
    document.querySelector(".title").style.fontSize = "50px";
    topicField.appendChild(document.createTextNode(topic));
    topicField.style.opacity = "1";

    for(var i=0; i < mySlogan.length; i++){
        var list= document.getElementsByClassName("box");
        if(list[i].classList[0] == "KeyB" || 
        list[i].classList[0] == "KeyC" || 
        list[i].classList[0] == "KeyĆ" || 
        list[i].classList[0] == "KeyD" || 
        list[i].classList[0] == "KeyF" || 
        list[i].classList[0] == "KeyG" || 
        list[i].classList[0] == "KeyH" || 
        list[i].classList[0] == "KeyJ" || 
        list[i].classList[0] == "KeyK" || 
        list[i].classList[0] == "KeyL" || 
        list[i].classList[0] == "KeyŁ" || 
        list[i].classList[0] == "KeyM" || 
        list[i].classList[0] == "KeyN" || 
        list[i].classList[0] == "KeyŃ" || 
        list[i].classList[0] == "KeyP" || 
        list[i].classList[0] == "KeyR" || 
        list[i].classList[0] == "KeyS" || 
        list[i].classList[0] == "KeyŚ" || 
        list[i].classList[0] == "KeyT" || 
        list[i].classList[0] == "KeyZ" || 
        list[i].classList[0] == "KeyŹ" || 
        list[i].classList[0] == "KeyŻ" || 
        list[i].classList[0] == "KeyW"){
            list[i].classList.add("sp");
        }else{
            list[i].classList.add("sm");
        }
    }



};


function showSlogan(){
    audioFinal.play();
    var list= document.getElementsByClassName("box");
    for (var i = 0; i < list.length; i++){
        var div = list[i];
        div.style.backgroundColor = "white";
        div.style.color = "black";

    }
}




function logKey(e) {

    var correctArray=[];
    var y = 0;
    list= document.getElementsByClassName("box");
    var z = 0;
    i++;
    spUncovered = 0;


    for(var i = 0; i < list.length; i++){


        if("Key"+e.key.toUpperCase() == list[i].classList[0]){
            correctArray.push(i);
            var div = list[i];
            div.classList.add("uncover");

        } else {
                 z++
                 if (z == list.length && e.key != "Escape"){
                    var falseLetter = document.createElement("p");
                    falseLetter.className = "falseLetter";
                    falseLetters.appendChild(falseLetter);
                    falseLetter.appendChild(document.createTextNode(e.key.toUpperCase()));
                    audio.play();
                }
            }
        if(list[i].classList[2] == "sp" && list[i].classList[3] == "uncover"){
            spUncovered++;
            }
        if(list[i].classList[3] == "uncover"){
            y++
        }
        if(spUncovered == spAmount){
            setTimeout(function(){
                alertDivParent.classList.add("alertDiv");
                alertDivParent.innerHTML = "Nie ma spółgłosek";
            }, 200)
            
        }
    }

    for (let i = 0; i < correctArray.length; i++){       
        setTimeout(function () {   
            console.log(i)
            console.log(correctArray.length)
           list[correctArray[i]].classList.add("uncoverAdded");
           audioTrue.play();
           setTimeout(() => {
            audioTrue.pause();
            audioTrue.currentTime = 0
           }, 400);
           if(correctArray.length == i+1){
            console.log("jest")
            setTimeout(() => {
                for (let i = 0; i < correctArray.length; i++){       
                    setTimeout(function () {
                        if(localStorage.getItem("autoDisplay") != "false"){
                            list[correctArray[i]].classList.add("clicked");
                        }
                    }, i*700)
                    }
            }, 1000);
           }
        }, i*500)
    }




}



function randomLet(){
    var list= document.getElementsByClassName("box");
    for(var t=0; t<list.length; t++){
        numbers.push(t)
    }
    audioRandom.play();
    function tick() {
      
        var numbersRandom = numbers[Math.floor(Math.random() * numbers.length)];

        numbers.splice(numbers.indexOf(numbersRandom), 1);
        list[numbersRandom].style.backgroundColor = "white";
        list[numbersRandom].style.color = "black";

  





        setTimeout(tick, 1000);
        }

        tick();

    }

function escape(e){
    if(e.key === "Escape"){
        numbers = [];
        audioRandom.pause();
        audioRandom.currentTime = 0;
        audioRandomEnd.play();
    }
}

function reloadPage(){
    window.location.reload();
}

function fortuneWheel() {
    const fields = [50, 100, 150, 200, 250, 300,"BANKRUT","BANKRUT","STOP","NIESPODZIANKA",50, 100, 150, 200, 250, 300];
    const randomField = fields[Math.floor(Math.random() * fields.length)];
    random.innerHTML = ("losuje...");
    random.style.backgroundColor = "lightgreen";

    // angle=angle+1080;
    random.classList.add("scaling");
    setTimeout(function(){
        if(randomField == "NIESPODZIANKA"){
            random.style.fontSize = "20px";
        }else{
            random.style.fontSize = "32px";
        }
        random.innerHTML = randomField;
        if(randomField == "BANKRUT"){
            random.style.backgroundColor="red";
        }
    },1500);
    setTimeout(function(){
        random.classList.remove("scaling");
        random.style.backgroundColor = "";
    },4000);
}


button.addEventListener("click", getInputValue);
show.addEventListener("click", showSlogan);
newGame.addEventListener("click", reloadPage);
random.addEventListener("click", fortuneWheel);
document.addEventListener('keypress', logKey);
randomLettersButton.addEventListener("click", randomLet);
document.addEventListener("keydown", escape);



container.addEventListener("click", function(e){
    if(e.target.classList[3] == "uncover"){
        e.target.classList.add("clicked");
    }
})
document.addEventListener("keypress", function(e){
    console.log(e.key);
    if(e.key == "Enter"){
        getInputValue();
    }
    if(e.key == "-"){
        if(localStorage.getItem("autoDisplay") == "false"){
            localStorage.removeItem("autoDisplay")
        } else {
            localStorage.setItem("autoDisplay", "false")
        }
    }




})
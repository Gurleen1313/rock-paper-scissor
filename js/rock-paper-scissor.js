const options = document.querySelectorAll(".options");
// let ch = document.getElementById("chance");
// if (ch == '0') {
//     alert("GAME OVER, CLICK RESET TO PLAY AGAIN");
//     document.getElementById("res").innerHTML = "YOU WIN!";
// }
function resetgame() {
    document.getElementById("chance").innerHTML = 3;
    document.getElementById("play").innerHTML = 0;
    document.getElementById("com").innerHTML = 0;
    document.getElementById("res").innerHTML=" ";
    chances = 3;
    comp = 0;
    us = 0;

}

function checkresults(player, computer) {
    if (player > computer) {
        document.getElementById("res").innerHTML="YOU WIN!";
    }
    else if(player==computer){
        document.getElementById("res").innerHTML="IT'S A TIE!";
    }
    else{
        document.getElementById("res").innerHTML="COMPUTER WIN'S!";
    }
    //resetgame();
}

options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.textContent;
        console.log(pInput);
        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];
        compareInputs(pInput, cInput);

    });
});
var chances = 3;
var comp = 0, us = 0;
function compareInputs(pInput, cInput) {
    if(chances>0)
    {
    const currentMatch = `${pInput} vs ${cInput}`;

    if (cInput == pInput) {
        //alert(`${currentMatch} is a Tie`);
        document.getElementById("chance").innerHTML = chances;
        document.getElementById("play").innerHTML = us;
        document.getElementById("com").innerHTML = comp;
        document.getElementById("res").innerHTML=`${currentMatch} = IT'S A TIE FOR THIS ROUND!`;
        return;
    }

    //rock
    if (pInput == "Rock") {
        if (cInput == "Scissors") {
            document.getElementById("res").innerHTML=`${currentMatch} = YOU WIN THIS ROUND`;
           // alert(`${currentMatch} = YOU WIN THIS ROUND`);
            us++;
            document.getElementById("play").innerHTML = us;
            document.getElementById("com").innerHTML = comp;

        }
        else {
            document.getElementById("res").innerHTML=`${currentMatch} = COMPUTER WIN'S THIS ROUND`;
            //alert(`${currentMatch} = COMPUTER WINS THIS ROUND`);
            comp++;
            document.getElementById("play").innerHTML = us;
            document.getElementById("com").innerHTML = comp;
        }
        chances--;
        document.getElementById("chance").innerHTML = chances;
    }
    //paper
    else if (pInput == "Paper") {
        if (cInput == "Rock") {
            document.getElementById("res").innerHTML=`${currentMatch} = YOU WIN THIS ROUND`;
            //alert(`${currentMatch} = YOU WIN THIS ROUND`);
            us++;
            document.getElementById("play").innerHTML = us;
            document.getElementById("com").innerHTML = comp;
        }
        else {
            document.getElementById("res").innerHTML=`${currentMatch} = COMPUTER WIN'S THIS ROUND`;
            //alert(`${currentMatch} = COMPUTER WINS THIS ROUND`);
            comp++;
            document.getElementById("play").innerHTML = us;
            document.getElementById("com").innerHTML = comp;
        }
        chances--;
        document.getElementById("chance").innerHTML = chances;
    }
    //scissors
    else if (pInput == "Scissors") {
        if (cInput == "Paper") {
            document.getElementById("res").innerHTML=`${currentMatch} = YOU WIN THIS ROUND`;
            us++;
            document.getElementById("play").innerHTML = us;
            document.getElementById("com").innerHTML = comp;
        }
        else {
            document.getElementById("res").innerHTML=`${currentMatch} = COMPUTER WIN'S THIS ROUND`;
            //alert(`${currentMatch} = COMPUTER WINS THIS ROUND`);
            comp++;
            document.getElementById("play").innerHTML = us;
            document.getElementById("com").innerHTML = comp;
        }
        chances--;
        document.getElementById("chance").innerHTML = chances;
    }
    if (chances == 0) {
        checkresults(us, comp);
    }
}
    else if (chances == 0) {
        document.getElementById("res").innerHTML="RESET ! THIS GAME ENDED."
    }
}
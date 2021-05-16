// var initbutton = document.querySelector("#idbtn");
var timerEl = document.getElementById('countdown');
var body = document.body


var initbutton = document.createElement("button");
body.appendChild(initbutton);
initbutton.textContent = ("Commence the Journey");
initbutton.setAttribute('style', 'display: block; margin: auto; border-width: 3px; border-radius: 5px;');


// infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');

initbutton.onclick = function () {
 
body.removeChild(initbutton);

//timer  
    var timeLeft = 60;
    function countdown() {
      
        var timeInterval = setInterval(function() {
          if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
          } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
          } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
         
          }
        }, 1000);
      }
countdown()

//score count
var scoreEl = document.createElement ("h3")
var scoreDivEl = document.createElement ("div")
var score = 0;
body.appendChild(scoreDivEl)
scoreDivEl.appendChild(scoreEl)
scoreEl.textContent = 'Your Score = '; 



function question1 () {
//question 1 
var divEl = document.createElement ("div");
var h2El = document.createElement ("h2");
h2El.textContent = "Which of the following is NOT a wizard in the LOTR universe?";
divEl.appendChild(h2El);

//button answers
var optionsEl = document.createElement ("ol");
var btn1 = document.createElement ("button");
var btn2 = document.createElement ("button");
var btn3 = document.createElement ("button");
var btn4 = document.createElement ("button");
btn1.textContent = "Mithrandir";
btn2.textContent = "Blue wizard";
btn3.textContent = "Radagast";
btn4.textContent = "Dumbledore";
//where buttun answers go
body.appendChild(divEl);
divEl.appendChild(optionsEl);
optionsEl.appendChild(btn1);
optionsEl.appendChild(btn2);
optionsEl.appendChild(btn3);
optionsEl.appendChild(btn4);

//what button answers do 
btn1.addEventListener('click', function() {
    body.removeChild(divEl);
    timeLeft -= 8 ;
    question2 ();
});
btn2.addEventListener('click', function() {
    body.removeChild(divEl);
    timeLeft -= 8 ;
    question2 ();
});
btn3.addEventListener('click', function() {
    body.removeChild(divEl);
    timeLeft -= 8 ;
    question2 ();
});
btn4.addEventListener('click', function() {
    body.removeChild(divEl);
    score = score + 10;
    scoreEl.textContent = 'Your Score = ' + score ; 
    question2 ();
});
}
question1 ();


                    function question2 () {
                        //question
                        var divEl = document.createElement ("div");
                        var h2El = document.createElement ("h2");
                        h2El.textContent = "What was the name of Sauron's master?";
                        divEl.appendChild(h2El);
                        
                        //button answers
                        var optionsEl = document.createElement ("ol");
                        var btn1 = document.createElement ("button");
                        var btn2 = document.createElement ("button");
                        var btn3 = document.createElement ("button");
                        var btn4 = document.createElement ("button");
                        btn1.textContent = "Melkor";
                        btn2.textContent = "Saruman";
                        btn3.textContent = "Illuvatar";
                        btn4.textContent = "Manwe";
                        //where buttun answers go
                        body.appendChild(divEl);
                        divEl.appendChild(optionsEl);
                        optionsEl.appendChild(btn1);
                        optionsEl.appendChild(btn2);
                        optionsEl.appendChild(btn3);
                        optionsEl.appendChild(btn4);
                        
                        //what button answers do 
                        btn1.addEventListener('click', function() {
                            body.removeChild(divEl);
                            score = score + 10;
                            scoreEl.textContent = 'Your Score = ' + score ; 
                        });
                        btn2.addEventListener('click', function() {
                            body.removeChild(divEl);
                            timeLeft -= 8 ;});
                        btn3.addEventListener('click', function() {
                            body.removeChild(divEl);
                            timeLeft -= 8 ;});
                        btn4.addEventListener('click', function() {
                            body.removeChild(divEl);
                            score = score + 10;
                        });
                        }
                        

                        
                        console.log(score);
                    }
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
var timeLeft = 10;
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
            finished ()
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
scoreEl.textContent = 'Your Score = ' + score; 

// var answer = 0
// if (answer = "yes") {
//     var answerDiv = document.createElement ("div");
// var answerH1 = document.createElement ("h1");
// body.appendChild(answerDiv);
// answerDiv.appendChild(answerH1);
// answerH1.textContent = "Correct!"
// }
// else if (answer = "no"){
//     var answerDiv = document.createElement ("div");
//     var answerH1 = document.createElement ("h1");
//     body.appendChild(answerDiv);
//     answerDiv.appendChild(answerH1);
//     answerH1.textContent = "Incorrect!"
// }




function question1 () {
    var divEl = document.createElement ("div");
    var h2El = document.createElement ("h2");
    var optionsEl = document.createElement ("ol");
    var btn1 = document.createElement ("button");
    var btn2 = document.createElement ("button");
    var btn3 = document.createElement ("button");
    var btn4 = document.createElement ("button");
    //question 1 
    h2El.textContent = "Which of the following is NOT a wizard in the LOTR universe?";
    divEl.appendChild(h2El);
    
    //button answers
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
    if (timeLeft === 0) {
        body.removeChild(divEl);
    }
    else {
        body.removeChild(divEl);
        timeLeft -= 8 ;
        question2 ();
        }  
});
btn2.addEventListener('click', function() {
    if (timeLeft === 0) {
        body.removeChild(divEl);
    }   
    else {
        body.removeChild(divEl);
        timeLeft -= 8 ;
        question2 ();
        }
});
btn3.addEventListener('click', function() {
    if (timeLeft === 0) {
        body.removeChild(divEl);
    }   
    else {
        body.removeChild(divEl);
        timeLeft -= 8 ;
        question2 ();
        }
});
btn4.addEventListener('click', function() {
    if (timeLeft === 0) {
        body.removeChild(divEl);
    }   
    else {
        body.removeChild(divEl);
    score = score + 10;
    scoreEl.textContent = 'Your Score = ' + score ; 
    question2 ();
        }
    
    
    
    
});

}
question1 ();


                    function question2 () {
                        // score = 0
                        //question
                        var divEl = document.createElement ("div");
                        var h2El = document.createElement ("h2");
                        h2El.textContent = "What was the name of Sauron's master?";
                        divEl.appendChild(h2El);
                        
                        // button answers
                        var optionsEl = document.createElement ("ol");
                        var btn1 = document.createElement ("button");
                        var btn2 = document.createElement ("button");
                        var btn3 = document.createElement ("button");
                        var btn4 = document.createElement ("button");
                        btn1.textContent = "Morgoth";
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
                            if (timeLeft === 0) {
                                body.removeChild(divEl);
                            }   
                            else {
                                body.removeChild(divEl);
                            score = score + 10;
                            scoreEl.textContent = 'Your Score = ' + score ; 
                            question3 ();
                                }
                        });
                        btn2.addEventListener('click', function() {
                            if (timeLeft === 0) {
                                body.removeChild(divEl);
                            }
                            else {
                                body.removeChild(divEl);
                                timeLeft -= 8 ;
                                question3 ();
                                }  
                        });
                        btn3.addEventListener('click', function() {
                            if (timeLeft === 0) {
                                body.removeChild(divEl);
                            }
                            else {
                                body.removeChild(divEl);
                                timeLeft -= 8 ;
                                question3 ();
                                }  
                        });
                        btn4.addEventListener('click', function() {
                            if (timeLeft === 0) {
                                body.removeChild(divEl);
                            }
                            else {
                                body.removeChild(divEl);
                                timeLeft -= 8 ;
                                question3 ();
                                }  
                        });
                        }
                        
        function question3 () {
            //question 1 
            var divEl = document.createElement ("div");
            var h2El = document.createElement ("h2");
            h2El.textContent = "What is the only place that the ring can be destroyed?";
            divEl.appendChild(h2El);
            
            // button answers
            var optionsEl = document.createElement ("ol");
            var btn1 = document.createElement ("button");
            var btn2 = document.createElement ("button");
            var btn3 = document.createElement ("button");
            var btn4 = document.createElement ("button");
            btn1.textContent = "The Shire";
            btn2.textContent = "The misty mountains";
            btn3.textContent = "Mount Doom";
            btn4.textContent = "Osgiliath";
            //where buttun answers go
            body.appendChild(divEl);
            divEl.appendChild(optionsEl);
            optionsEl.appendChild(btn1);
            optionsEl.appendChild(btn2);
            optionsEl.appendChild(btn3);
            optionsEl.appendChild(btn4);
            
            //what button answers do 
            btn1.addEventListener('click', function() {
                if (timeLeft === 0) {
                    body.removeChild(divEl);
                }
                else {
                    body.removeChild(divEl);
                    timeLeft -= 8 ;
                    question4 ();
                    }  
            });
            btn2.addEventListener('click', function() {
                if (timeLeft === 0) {
                    body.removeChild(divEl);
                }
                else {
                    body.removeChild(divEl);
                    timeLeft -= 8 ;
                    question4 ();
                    }  
            });
            btn3.addEventListener('click', function() {
                if (timeLeft === 0) {
                    body.removeChild(divEl);
                }   
                else {
                    body.removeChild(divEl);
                score = score + 10;
                scoreEl.textContent = 'Your Score = ' + score ; 
                question4 ();
                    }
            });
            btn4.addEventListener('click', function() {
                if (timeLeft === 0) {
                    body.removeChild(divEl);
                }
                else {
                    body.removeChild(divEl);
                    timeLeft -= 8 ;
                    question4 ();
                    }  
            });
            }

                                function question4 () {
                                    //question 1 
                                    var divEl = document.createElement ("div");
                                    var h2El = document.createElement ("h2");
                                    h2El.textContent = "How many special rings were given to elven kings?";
                                    divEl.appendChild(h2El);
                                    
                                    // button answers
                                    var optionsEl = document.createElement ("ol");
                                    var btn1 = document.createElement ("button");
                                    var btn2 = document.createElement ("button");
                                    var btn3 = document.createElement ("button");
                                    var btn4 = document.createElement ("button");
                                    btn1.textContent = "7";
                                    btn2.textContent = "3";
                                    btn3.textContent = "9";
                                    btn4.textContent = "4";
                                    //where buttun answers go
                                    body.appendChild(divEl);
                                    divEl.appendChild(optionsEl);
                                    optionsEl.appendChild(btn1);
                                    optionsEl.appendChild(btn2);
                                    optionsEl.appendChild(btn3);
                                    optionsEl.appendChild(btn4);
                                    
                                    //what button answers do 
                                    btn1.addEventListener('click', function() {
                                        if (timeLeft === 0) {
                                            body.removeChild(divEl);
                                        }
                                        else {
                                            body.removeChild(divEl);
                                            timeLeft -= 8 ;
                                            question5 ();
                                            }  
                                    });
                                    btn2.addEventListener('click', function() {
                                        if (timeLeft === 0) {
                                            body.removeChild(divEl);
                                        }   
                                        else {
                                            body.removeChild(divEl);
                                        score = score + 10;
                                        scoreEl.textContent = 'Your Score = ' + score ; 
                                        question5 ();
                                            }
                                    });
                                    btn3.addEventListener('click', function() {
                                        if (timeLeft === 0) {
                                            body.removeChild(divEl);
                                        }
                                        else {
                                            body.removeChild(divEl);
                                            timeLeft -= 8 ;
                                            question5 ();
                                            }  
                                    });
                                    btn4.addEventListener('click', function() {
                                        if (timeLeft === 0) {
                                            body.removeChild(divEl);
                                        }
                                        else {
                                            body.removeChild(divEl);
                                            timeLeft -= 8 ;
                                            question5 ();
                                            }  
                                    });
                                    } 
                                    
                function question5 () {
                    // question 1 
                    var divEl = document.createElement ("div");
                    var h2El = document.createElement ("h2");
                    h2El.textContent = "Who was the oldest, most badass elf in Middle Earth at the time the fellowship began?";
                    divEl.appendChild(h2El);
                    
                    //button answers
                    var optionsEl = document.createElement ("ol");
                    var btn1 = document.createElement ("button");
                    var btn2 = document.createElement ("button");
                    var btn3 = document.createElement ("button");
                    var btn4 = document.createElement ("button");
                    btn1.textContent = "The lady Galadriel";
                    btn2.textContent = "Elrond King of Rivendell";
                    btn3.textContent = "Prince Legolas";
                    btn4.textContent = "Thranduil the Elvenking";
                    //where buttun answers go
                    body.appendChild(divEl);
                    divEl.appendChild(optionsEl);
                    optionsEl.appendChild(btn1);
                    optionsEl.appendChild(btn2);
                    optionsEl.appendChild(btn3);
                    optionsEl.appendChild(btn4);
                    
                    //what button answers do 
                    btn1.addEventListener('click', function() {
                        if (timeLeft === 0) {
                            body.removeChild(divEl);
                        }   
                        else {
                            body.removeChild(divEl);
                        score = score + 10;
                        scoreEl.textContent = 'Your Score = ' + score ; 
                        question6 ();
                            }
                    });
                    btn2.addEventListener('click', function() {
                        if (timeLeft === 0) {
                            body.removeChild(divEl);
                        }
                        else {
                            body.removeChild(divEl);
                            timeLeft -= 8 ;
                            question6 ();
                            }  
                    });
                    btn3.addEventListener('click', function() {
                        if (timeLeft === 0) {
                            body.removeChild(divEl);
                        }
                        else {
                            body.removeChild(divEl);
                            timeLeft -= 8 ;
                            question6 ();
                            }  
                    });
                    btn4.addEventListener('click', function() {
                        if (timeLeft === 0) {
                            body.removeChild(divEl);
                        }
                        else {
                            body.removeChild(divEl);
                            timeLeft -= 8 ;
                            question6 ();
                            }  
                    });
                    } 
                    
                                        function question6 () {
                                            //question 1 
                                            var divEl = document.createElement ("div");
                                            var h2El = document.createElement ("h2");
                                            h2El.textContent = "Who was Frodo's best friend and most trusted companion?";
                                            divEl.appendChild(h2El);
                                            
                                            //button answers
                                            var optionsEl = document.createElement ("ol");
                                            var btn1 = document.createElement ("button");
                                            var btn2 = document.createElement ("button");
                                            var btn3 = document.createElement ("button");
                                            var btn4 = document.createElement ("button");
                                            btn1.textContent = "Merry";
                                            btn2.textContent = "Pipin";
                                            btn3.textContent = "Samwise";
                                            btn4.textContent = "Gandalf";
                                            //where buttun answers go
                                            body.appendChild(divEl);
                                            divEl.appendChild(optionsEl);
                                            optionsEl.appendChild(btn1);
                                            optionsEl.appendChild(btn2);
                                            optionsEl.appendChild(btn3);
                                            optionsEl.appendChild(btn4);
                                            
                                            //what button answers do 
                                            btn1.addEventListener('click', function() {
                                                timeLeft = 0 ;
                                                body.removeChild(divEl);
                                                   
                                            });
                                            btn2.addEventListener('click', function() {
                                                timeLeft = 0 ;
                                                body.removeChild(divEl);
                                                
                                            });
                                            btn3.addEventListener('click', function() {
                                                
                                                if (timeLeft === 0) {
                                                    body.removeChild(divEl);
                                                }
                                                else {
                                                    score = score + 10;
                                                scoreEl.textContent = 'Your Score = ' + score ; 
                                                timeLeft = 0 ;   
                                                body.removeChild(divEl);
                                                    }  
                                                
                                            });
                                            btn4.addEventListener('click', function() {
                                                timeLeft = 0 ;
                                                body.removeChild(divEl);
                                                                                            
                                            });
                                            } 


function finished () {

    var divFinEl = document.createElement ("div");
    var h2El = document.createElement ("h2");
    h2El.textContent = "You have finished your journey. Check out your score!";
    divFinEl.appendChild(h2El);
    body.appendChild(divFinEl);
     
}
}
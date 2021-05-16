var initbutton = document.querySelector("#idbtn");
var timerEl = document.getElementById('countdown');
var body = document.body

initbutton.onclick = function () {

    function countdown() {
        var timeLeft = 60;
      
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

function question1 () {
//question
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
btn4.addEventListener('click', function() {
    window.alert("that is correct!")
    return question1(); 
//add a point to score
  });
  btn4.addEventListener('click', function() {
    window.alert("that is correct!")
//subtract time to timer
  });
  btn1.addEventListener('click', function() {
    window.alert("that is wrong!")
//subtract time to timer
  });
  btn2.addEventListener('click', function() {
    window.alert("that is wrong!")
//subtract time to timer
  });
  btn3.addEventListener('click', function() {
    window.alert("that is wrong!")
//subtract time to timer
  });

}
question1 ();

// window.alert ("the previous question is over? Maybe?")

}
var initbutton = document.querySelector("#idbtn");
var timerEl = document.getElementById('countdown');


initbutton.onclick = function () {

    window.alert("The button was pressed");



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
            displayMessage();
          }
        }, 1000);
      }
countdown()



}
const referenceText = document.getElementById("referenceText")
const inputVal = document.getElementById("inputVal")


inputVal.addEventListener('input', () => {
    const letters_array = referenceText.querySelectorAll('span')
    const arrayVal = inputVal.value.split('')
    let tempVar = true
    letters_array.forEach((characterSpan, index) => {
        const character = arrayVal[index]
        if (character == null) 
            // IF IT DOESN'T EXIST
            {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            tempVar = false
        } else if (character === characterSpan.innerText) 
            // IF IT IS CORRECT
            {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            
          } else 
            // IF IT IS WRONG
             {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            tempVar = false
        }
        startTimer()
    })

    if (tempVar) {stopTimer()}
})

// TIMER FUNCTIONS

const timer = document.getElementById('timer');

var sec = 0;
var msec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    timer.classList.add("time-stopped")
  }
}

function timerCycle() {
    if (stoptime == false) {
    msec = parseInt(msec);
    sec = parseInt(sec);

    msec = msec + 1;

    if (msec == 100) {
      sec = sec + 1;
      msec = 0;
    }

    if (msec < 10 || msec == 0) {
      msec = '0' + msec;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }

    timer.innerHTML = sec + ':' + msec;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00';
}

// TAB TO RESTART

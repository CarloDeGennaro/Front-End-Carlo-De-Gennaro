var sfondo = ['red', 'yellow','green','orange'];
var i = 0;
var timeInterval;
var riprendiEsecuzione;

document.getElementById("sfondoBody").onload = function () {
  timeInterval=window.setInterval(colori, 15000);
};

function colori() {
if (i === sfondo.length) {
  i = 0;
  document.getElementById("sfondoBody").style.backgroundColor = sfondo[i];
    }
  else
    {
  document.getElementById("sfondoBody").style.backgroundColor = sfondo[i];
  i++;
  }
}

document.getElementById("stop").addEventListener("click", function () {
clearInterval(timeInterval);
var temp = document.getElementById("sfondoBody").style.backgroundColor;
document.getElementById("sfondoBody").style.backgroundColor = temp;
riprendiEsecuzione=i;
});

document.getElementById("play").addEventListener("click", function () {
timeInterval=window.setInterval(colori, 15000);
});

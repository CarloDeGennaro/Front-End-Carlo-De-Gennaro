document.getElementById("eseguiOperazione").addEventListener("click", function () {

  var n = document.getElementById("valore").value;
  quadrati=new Array();
  for (var i = 1; i <= n; i++) {
    quadrati[i] = i*i;
  }
document.getElementById("quadrati").innerHTML = quadrati;
});

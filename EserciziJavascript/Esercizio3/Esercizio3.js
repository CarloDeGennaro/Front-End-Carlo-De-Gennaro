var add = document.getElementById("addizione");
var sottrai = document.getElementById("sottrazione");
var moltiplica = document.getElementById("moltiplicazione");
var dividi = document.getElementById("divisione");

add.addEventListener("click", function () {
var ele1 = parseInt(document.getElementById("elemento1").value);
var ele2 = parseInt(document.getElementById("elemento2").value);
var res = ele1 + ele2;
document.getElementById("risultato").innerText = res;
});

sottrai.addEventListener("click", function () {
var ele1 = parseInt(document.getElementById("elemento1").value);
var ele2 = parseInt(document.getElementById("elemento2").value);
var res = ele1 - ele2;
document.getElementById("risultato").innerText = res;
});

moltiplica.addEventListener("click", function () {
var ele1 = parseInt(document.getElementById("elemento1").value);
var ele2 = parseInt(document.getElementById("elemento2").value);
var res = ele1 * ele2;
document.getElementById("risultato").innerText = res;
});

dividi.addEventListener("click", function () {
var ele1 = parseFloat(document.getElementById("elemento1").value);
var ele2 = parseFloat(document.getElementById("elemento2").value);
var res = ele1 / ele2;
document.getElementById("risultato").innerText = res;
});

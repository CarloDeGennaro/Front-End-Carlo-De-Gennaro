const $ = require('jquery');
/*
var nascondi = document.getElementById("spanid"); //al click su span id
nascondi.addEventListener("click",  function () {
    document.getElementById("finepagina").style.display='none'; //nascondi cookie
});
*/
$(document).ready(() => {


$.ajax({
  url: "prova.json",
  method: "GET",
  dataType: 'json',
  success: function(result) {
  for(var i=0; i< result.length; i++){
      $('#provaAjax').append("<p>" + result[i].text + "<p>");     
  }
  },
  error: function() {
    console.log('error');
  }

});
});

$('#spanid').on('click', () => {
  $('#cookie').hide();
});


/*
$('.grandespan').on('click', event => {
  $(event.currentTarget).addClass('grandespan2')
}).on('click', event => {
  $(event.currentTarget).removeClass('grandespan2')
});
*/

$('.grandespan').on('click', event => {
  $(event.currentTarget).toggleClass('grandespan2');
});
/*
var like1 = document.getElementById("like1");
console.log("like1");
var like2 = document.getElementById("like2");
var like3 = document.getElementById("like3");
var like4 = document.getElementById("like4");
like1.addEventListener("click", function (){
  if (like1.className === "grandespan") {
      like1.className = "grandespan2";
      }
else
      {
       like1.className = "grandespan";
      }
});
like2.addEventListener("click", function (){
  if (like2.className === "grandespan") {
      like2.className = "grandespan2";
      }
else
      {
       like2.className = "grandespan";
      }
});
like3.addEventListener("click", function (){
  if (like3.className === "grandespan") {
      like3.className = "grandespan2";
      }
else
      {
       like3.className = "grandespan";
      }
});
like4.addEventListener("click", function (){
  if (like4.className === "grandespan") {
      like4.className = "grandespan2";
      }
else
      {
       like4.className = "grandespan";
      }
});
*/

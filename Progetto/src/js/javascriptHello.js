const $ = require('jquery');
/*
var nascondi = document.getElementById("spanid"); //al click su span id
nascondi.addEventListener("click",  function () {
    document.getElementById("finepagina").style.display='none'; //nascondi cookie
});
*/



const Mustache = require('Mustache');
doAjax();


function doAjax(){
  $.ajax({
    url: 'articoli.json',
    method: 'GET',
    dataType: "json",
    success: function(result) {
      //  $.each(result, function(key, value) {
      var template = $('#template').html();
      //console.log(template);
      var rendered = Mustache.render(template, result);
      //console.log('il renderizzato:');
      //    console.log(rendered);
      $('#articoli').html(rendered);
    },
      error: function(error){
      console.log("Errore insuccesso chiamata:");
      console.log(error);
    }
  });
};

//chiamata ajax per i 4 articoli

/*
  $.ajax({
      url: 'src/articoli.json',
      method: 'GET',
      dataType: 'json',
      success: function(result){



        $('#articolo1').append("<h3>" + result[0].text + "</h3>");

        /*
        $('#articolo1').append("<img src=" + result[1].text + ">");
        $('#articolo1').append("<span class="+"'label label-primary'"+">" + result[2].text + "</span>");
        $('#articolo1').append("<p>" + result[3].text + "</p>");
        $('#art1').append("<span class="+"'like btn btn-light'>"+ result[4].text +"</span>");

        $('#articolo2').append("<h3>" + result[4].text + "</h3>");
        $('#articolo2').append("<img src=" + result[5].text + ">");
        $('#articolo2').append("<span class="+"'label label-primary'"+">" + result[6].text + "</span>");
        $('#articolo2').append("<p>" + result[7].text + "</p>");


        $('#articolo3').append("<h3>" + result[8].text + "</h3>");
        $('#articolo3').append("<img src=" + result[9].text + ">");
        $('#articolo3').append("<span class="+"'label label-primary'"+">" + result[10].text + "</span>");
        $('#articolo3').append("<p>" + result[11].text + "</p>");


        $('#articolo4').append("<h3>" + result[12].text + "</h3>");
        $('#articolo4').append("<img src=" + result[13].text + ">");
        $('#articolo4').append("<span class="+"'label label-primary'"+">" + result[14].text + "</span>");
        $('#articolo4').append("<p>" + result[15].text + "</p>");


        },
        error: function(result){
          console.log('error');
       }
  });
*/


$('#spanid').on('click', () => {
  $('#cookie').hide();
});


/*alternativa a toggleClass
$('.grandespan').on('click', event => {
  $(event.currentTarget).addClass('grandespan2')
}).on('click', event => {
  $(event.currentTarget).removeClass('grandespan2')
});
*/

$(document).ajaxComplete(function(){
$('.grandespan').on('click', event => {
  $(event.currentTarget).toggleClass('grandespan2');
});
});
/*codice javascript
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

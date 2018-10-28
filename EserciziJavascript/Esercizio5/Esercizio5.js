var autorizzati = ["Mario Rossi", "Roberto Bianchi", "Ciro Verdi"];
document.getElementById("verifica").addEventListener("click", function () {

    var nome = document.getElementById("utente").value;
    var trovato = 0;
    for (var i = 0; i < autorizzati.length; i++) {
        if (nome.toString() === autorizzati[i])
        {
            trovato = 1;
        }
    }
    if (trovato == 1) {
        document.getElementById("result").innerHTML = "Utente autorizzato";
        }
    else
        {
        document.getElementById("result").innerHTML = "Non hai i privilegi per accedere";
        }
});

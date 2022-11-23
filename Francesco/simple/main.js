function agganciaEvento(selettore, evento) {
  //funzione globale per agganciare un evento ad un selettore tramite js
  $(selettore).on(evento, function (e) {
    if (e.keyCode === 13) {
      checkInput();
    } else {
      scrivi(".testo", e.key);
    }
  });
}

function scrivi(selettore, html) {
  //metodo semplice per scrivere su html
  $(selettore).html(html);
}
function checkInput() {
  var $input1 = $("#input");
  var $input2 = $("#input2");
  var $classeTesto = $(".testo");
  var valore1 = $input1.val();
  $input2.val(valore1);
  var valore2 = $input2.val();

  if (valore1 === valore2) {
    $classeTesto.text("I valori sono uguali");
  } else {
    $classeTesto.html('<h1 class="test">I valori sono differenti</h1>');
  }
}
function metodiVari() {
  var $input1 = $("#input");
  var $input2 = $("#input2");
  var valore = $input1.val(); //  ritorno di valore
  var id = $input1.attr("id");
  var rel = $("link").attr("rel"); // attributi, ottenimento e cambio del valore
  $("link").attr("rel", valore);
  $input1.addClass("test"); //aggiunta e rimozione delle classi di stile
  $input1.removeClass("test");
  $("#test").data("personale"); //ritorna il valore dell'oggetto jquery relativo all'elemento html selezionato
  $("#test").data("personale", "valoreRelativoJQUERY");
  $("#test").attr("data-personale", "valoreEffettivoHTML"); //cambia valore all'interno del dom...
  //ci è utile nel caso possiamo sfruttare il foglio di stile ed il css
  $("#test").attr("data-colore", "yellow"); // in combinazione con il foglio css posso cambiarne il colore
}
//evento di caricamento del DOCUMENT ovvero di tutta la pagina html renderizzata
$(document).ready(function () {
  var $classTest = $(".test"); //class css
  var $test = $("#test");

  // $("#input2").on("keyup", function (e) {
  //   checkInput();
  // });
  agganciaEvento("#input", "keyup");
  agganciaEvento("#input2", "keyup");
});

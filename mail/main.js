// mail autorizzate
var autorizzati = ["admin", "gigi@gigio.com", "gianni@gianno.com", "asdrubale@sanchez.com"];

// inserimento mail utente
var utente = prompt("Inserisci la tua email");

// variabili per dichiarazione
var autorizzato = "Benvenuto!";
var nonautorizzato = "Accesso negato";

// dichiarazione per mail non autorizzata
document.getElementById("dichiarazione").innerHTML = nonautorizzato;

// confronto tra mail e array e stampa del messaggio di benvenuto
for (var i = 0; i < autorizzati.length; i++) {
  if(autorizzati[i] == utente){
  document.getElementById("dichiarazione").innerHTML = autorizzato;
  }
}

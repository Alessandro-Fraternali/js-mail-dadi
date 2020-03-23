// mail autorizzate
var autorizzati = ["gigi@gigio.com", "gianni@gianno.com", "asdrubale@sanchez.com"];
var controllo

// inserimento mail utente
var a = prompt("Inserisci la tua email");

// controllo della mail
for (var i = 0; i < autorizzati.length; i++) {
  controllo = autorizzati[i];
  if(controllo == a){
    alert("Benvenuto");
  }else {
    alert("Accesso negato")
  }
}

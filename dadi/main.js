// alert di benvenuto
alert("Benvenuto. Decidi se usare il dado rosso o quello blu, poi premi ok")

// simulazione dei dadi
var dr = Math.floor(Math.random() * 6) + 1;
var db = Math.floor(Math.random() * 6) + 1;

// stampa dei numeri selezionati
document.getElementById("p").innerHTML =dr;
document.getElementById("s").innerHTML =db;

// dichiarazione del vincitore
if (db > dr) {
  document.getElementById("dichiarazione").innerHTML ="Il dado BLU vince!";
} else if (dr > db){
  document.getElementById("dichiarazione").innerHTML ="Il dado ROSSO vince!";
} else if (dr == db) {
  document.getElementById("dichiarazione").innerHTML ="Parità!";
}

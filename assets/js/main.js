// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var km = parseInt(prompt("Quanti Km vuoi percorrere?"));
var eta = parseInt(prompt("Qual è la tua età?"));

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo = 0.21;
var prezzoXkm = (prezzo * km);
console.log(prezzoXkm);

//va applicato uno sconto del 20 % per i minorenni
//va applicato uno sconto del 40 % per gli over 65.
if (eta < 18) {
    var prezzo20 = (20 * prezzoXkm);
    prezzo20 = (prezzo20 / 100);
    var prezzofinale = (prezzoXkm - prezzo20);
    prezzofinale = prezzofinale.toFixed(2);
    console.log(prezzofinale);
}

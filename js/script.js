// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  // creo l'oggetto studente con le chiavi richieste
  var studente = {
    "nome": "Mirko",
    "cognome": "Guerra",
    "età": 27
  };

  // grazie al for in, attraverso l'oggetto e stampo tutte le chiavi e i rispettivi valori
  for (var key in studente) {
    console.log(key + " studente: " + studente[key]);
  }

});

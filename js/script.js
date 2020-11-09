// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

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

  // creo un array di oggetti, i cui oggetti sono studenti
  var studenti = [
    {
      "nome": "Mirko",
      "cognome": "Guerra",
      "età": 27
    },
    {
      "nome": "Marco",
      "cognome": "Rossi",
      "età": 35
    },
    {
      "nome": "Matteo",
      "cognome": "Verdi",
      "età": 55
    },
    {
      "nome": "Luca",
      "cognome": "Bianchi",
      "età": 40
    },
  ];

  // ciclo su tutti gli studenti
  for (var i = 0; i < studenti.length; i++) {
    // attraverso ogni studente che ho ciclato, stampo nome e cognome
    for (var key in studenti[i]) {
      // escludo l'età dalla stampa
      if (key != "età") {
      console.log(key + ": " + studenti[i][key]);
      }
    }
  }

});

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  console.log("PUNTO 1");

  // creo l'oggetto studente con le chiavi richieste
  var studente = {
    "nome": "Mirko",
    "cognome": "Guerra",
    "età": 27
  };

  // grazie al for in, attraverso l'oggetto e stampo tutte le chiavi e i rispettivi valori
  for (var key in studente) {
    console.log(key + " studente: " + studente[key]);
    $(".punto-uno").append(key + " studente: " + studente[key] + "<br>");
  }

  console.log("PUNTO 2");

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
      $(".punto-due").append(key + ": " + studenti[i][key] + "<br>");
      }
    }
  }

  console.log("PUNTO 3");
  
  // dichiaro le variabili relative agli input dell'utente utente
  var nomeNuovoStudente = prompt("Inserisci il tuo nome");
  var cognomeNuovoStudente = prompt("Inserisci il tuo cognome");
  var etaNuovoStudente = parseInt(prompt("Inserisci la tua età"));

  // inizializzo un oggetto con 3 chiavi il cui valore sarà inserito dall'utente secondo quanto detto qui sopra, nella definizione delle 3 variabili soprastanti
  var nuovoStudente = {
    "nome": nomeNuovoStudente,
    "cognome": cognomeNuovoStudente,
    "età": etaNuovoStudente
  };

  // aggiungo i dati dell'utente, che compongono l'oggetto nuovoStudente, all'array contenente i vari studenti
  studenti.push(nuovoStudente);

  // verifico che l'array sia stato correttamente integrato rifacendo la stampa di nome, cognome e età di tutti gli elementi dell'array

  // ciclo su tutti gli studenti
  for (var i = 0; i < studenti.length; i++) {
    // attraverso ogni studente che ho ciclato, stampo nome, cognome ed età
    for (var key in studenti[i]) {
    console.log(key + ": " + studenti[i][key]);
    $(".punto-tre").append(key + ": " + studenti[i][key] + "<br>");
    }
  }

});

let temperatura = Number(prompt("inserisci la temperatura:"));

if(temperatura < 20){
console.log(" non ci sono piu le mezze stagioni");
}
else if(temperatura >= 30){
console.log(" lu mare,lu sole, lu ientu");
}
else if(temperatura < 30){
console.log("mi dia una peroni sudata");
}
else if(temperatura < 0){
console.log("non è tanto il freddo quanto l'umidita");
}
else if(temperatura < -10){
console.log("copriti...ancora ti raffreddi");
}

let descrizione;

switch (true){
  case temperatura < 20:
    descrizione = 'non ci sono piu le mezze stagioni'
    break;

  case temperatura >= 30:
    descrizione = 'lu mare,lu sole, lu ientu'
    break;

  case temperatura < 30:
    descrizione = 'mi dia una peroni sudata'
    break;

  case temperatura < 0:
    descrizione = "non è tanto il freddo quanto l'umidita"
    break;

  case temperatura < -10:
   descrizione = 'copriti...ancora ti raffreddi'
    break;
    default : 
    descrizione = 'lu mare,lu sole, lu ientu'
    
    console.log(descrizione);

}

let opzione;
let continuare = true;

do {
    opzione = prompt(" Seleziona una bevanda : \ n1 - Acqua \ n2 - Coca cola \ n3 - Birra");

 switch (opzione){
    case "1" :
    case "Acqua" :
    case "acqua" :
    console.log(" è stata selezionata l'acqua");
    continuare = false;
    break;

    case "2" :
    case "Coca cola" :
    case "coca cola" :
    console.log(" è stata selezionata coca cola");
    continuare = false;
    break;

    case "3" :
    case "Birra" :
    case "birra" :
    console.log(" è stata selezionata birra");
    continuare = false;
    break;
    default:
        console.log("Opzione non valida. Per favore riprova.");
        break;

 }
}
 while(continuare)
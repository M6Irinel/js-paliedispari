
// chiediamo una parola al utente tramite prompt
const parola_Utente = prompt('Inserisci qui per favore, una parola PALINDROMA');


// creaiamo una funzione che dice se la parola del utente e una parola PALINDROMA
function controlloParola(parola) {
    // restituendo true o false
    return parola.split("").reverse().join("") === parola;
}


// facciamo un controlli per mandare a schermo la nostra risposta al utente nella console
if(controlloParola(parola_Utente)){
    console.log(`La tua parola "${parola_Utente}" è una parola Palindroma`);
}else {
    console.log(`La tua parola "${parola_Utente}" NON è una parola Palindroma`);
}

// prendiamo elementi dal DOM
const DOM_TEXT_UTENTE = document.querySelector('input[type="text"]');
const DOM_BUTTON = document.querySelector('#control_button');
const DOM_PARAGRAPH = document.querySelector('#paragraph');


// creaiamo una funzione che dice se la parola del utente e una parola PALINDROMA
function controlloParola(parola) {
    // creaiamo una nuova varibile con la stringa sistemata e pronta per il controllo
    parola = parola.replaceAll(/\W/g ,'').trim().toLowerCase();
    // restituendo true o false
    return parola.replaceAll(' ', '').split('').reverse().join('') === parola;
}


// ascoltiamo l'evento del click sul pulsante
DOM_BUTTON.addEventListener('click', ()=>{

    // SE le lettere della parola del utente e maggiore di 2
    if(DOM_TEXT_UTENTE.value.trim().length > 2){

        // salviamo il valore del utente in una variabile facile da capire
        const parola_Utente = DOM_TEXT_UTENTE.value.trim();

        // SE la funzione al ritorno da true
        if(controlloParola(parola_Utente)){

            // stampiamo nell'elemento del DOM la seguente stringa
            DOM_PARAGRAPH.innerHTML = `La tua stringa "<span>${parola_Utente}</span>" è una stringa Palindroma. <span id='success'>COMPLIMENTI!</span>`;
        }
        // ALTRIMENTI: da false
        else {
            
            // stampiamo nell'elemento del DOM la seguente stringa
            DOM_PARAGRAPH.innerHTML = `La tua stringa "<span>${parola_Utente}</span>" <span>NON</span> è una stringa Palindroma. <span id='outcome'>Controlla altre</span>`;
        }

        return;
    }
    
    // SE la parola inserita e diversa da ''
    if(DOM_TEXT_UTENTE.value.trim() !== ''){

        // stampiamo nell'elemento del DOM la seguente stringa
        DOM_PARAGRAPH.innerHTML = `<span class='text-danger'>ATTENZIONE</span>: Inserisci abbastanza lettere per avere una stringa. Minimo 3 lettere`;
    
        return;
    }

    // ALTRIMANTI: avvertire l'utente della compilazione
    DOM_PARAGRAPH.innerHTML = `<span class='text-danger'>ATTENZIONE</span>: Non hai inserito ancora nessuna stringa`;

    return;
});
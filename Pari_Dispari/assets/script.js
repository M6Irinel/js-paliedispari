
// prendiamo elementi dal DOM
const DOM_PARI = document.querySelector('.buttons_Pari');
const DOM_DISPARI = document.querySelector('.buttons_Dispari');
const DOM_INPUT_NUMBER = document.querySelector('input[type="number"]');
const DOM_BUTTON_GoGame = document.querySelector('#GoGame');
const DOM_P_STATO_DEL_ESITO = document.querySelector('#stato_del_esito');
const DOM_PARAGRAPH_ALERT = document.querySelector('#allertParaghaph');


// salviamo il nostro esito in valori booleani: se è pari = true altrimenti se è dispari = false
let isPari;


// creiamo gli ascoltatori di eventi
DOM_PARI.addEventListener('click', () => {
    // facciamo la variabile in true
    isPari = true;
    // stampiamo nel elemento
    DOM_P_STATO_DEL_ESITO.innerHTML = 'PARI';
});

DOM_DISPARI.addEventListener('click', () => {
    // facciamo la variabile in false
    isPari = false;
    // stampiamo nel elemento
    DOM_P_STATO_DEL_ESITO.innerHTML = 'DISPARI';
});

// al click del pulsante gioca chiama la funzione pricipale
DOM_BUTTON_GoGame.addEventListener('click', GoGame);


// la funzione principale che fa andare il gioco di pari o dispari
function GoGame() {
    // SE la scelta del player è stata fatta
    if (isPari !== undefined) {
        // SE il numero e tra il 1 e 5
        if (DOM_INPUT_NUMBER.value > 0 && DOM_INPUT_NUMBER.value < 6) {

            // salviamo i vari valore dentro alle costanti
            const numberPlayer = parseInt(DOM_INPUT_NUMBER.value);
            const numberPC = Math.floor(Math.random() * 5) + 1;
            const total = numberPC + numberPlayer;

            // SE la shelta e stata = pari
            if (isPari === (total % 2 === 0)) {
                // chiama la funzione della vittoria
                win(numberPlayer, numberPC);
                return;
            }

            // SE la schelta e stata = dispari
            if (!isPari === (total % 2 === 1)) {
                // chiama la funzione della vittoria
                win(numberPlayer, numberPC);
                return;
            }

            // ALTRIMENTI: chiama la funzione della perdita
            lost(numberPlayer, numberPC);
            return;
        }

        // ALRIMENTI: manda messaggio al giocatore
        DOM_PARAGRAPH_ALERT.innerHTML = 'ATTENZIONE: Il numero inserito non e un numero tra 1 e 5';
        return;
    }
    
    // ALRIMENTI: manda messaggio al giocatore
    DOM_PARAGRAPH_ALERT.innerHTML = 'ATTENZIONE: Non hai schelto tra Pari o Dispari';
}


// una funzione per la vittoria che chiede vari parametri
function win(player, PC) {
    DOM_PARAGRAPH_ALERT.innerHTML = `Tu hai inserito ${player} è il PC ha messo ${PC} = ${player + PC} quindi hai <span class='win'>VINTO</span>!`;
}


// una funzione per la perdita che chiede vari parametri
function lost(player, PC) {
    DOM_PARAGRAPH_ALERT.innerHTML = `Tu hai inserito ${player} è il PC ha messo ${PC} = ${player + PC} per ciò hai <span class='lost'>PERSO</span>!`;
}

//PALINDROMA
//data una parola, una stringa, controllo da quanti caratteri è composta.
//Se numero dispari, considero il numero - 1 e controllo la metà di (numero -1) caratteri a sinistra e a destra verificando se sono uguali. Se è vero allora la parola è palindroma.
//Se numero pari allora considero la metà del numero di caratteri a sinistra e a destra verificando se sono uguali. Se è vero allora la parola è palindroma.
//Prima però elimino eventuali spazi a dx e sx, verifico che si tratti di una stringa e cerco di capire se vi sono più parole a comporla cercando eventuali spazi.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PARI O DISPARI
//dato un numero, questo viene sommato ad un numero random e restituisce un risultato. Si verifica se il risultato sia pari o dispari e quindi se l'utente avendo scelto una di queste due opzioni all'inizio, abbia vinto o no.

const parola = prompt("Inserisci una parola: ");

palindroma(parola);

const tuaScelta = prompt("Scegli se pari o dispari: ");
const numero = parseInt(prompt("Adesso scegli un numero intero: "));

parioDispari(tuaScelta, numero);


function palindroma(valore){

    valore.trim();

    if (typeof(valore) === "string" && valore.search(" ") === -1) {

        const lung = valore.length;

        if (lung % 2 !== 0){

            let num = (lung - 1)/2;

            for (i = 0, j = lung - 1; i < num && j > num; i++, j-- ) {
                
                if (valore[i] === valore[j]){
                    risultato = valore + " è un palindromo!";
                    
                } else {
                    risultato = valore + " non è palindromo!";
                    
                }
            }
            alert(risultato);


        } else {

            let num = lung/2;

            for (i = 0, j = lung - 1; i <= num && j >= num; i++, j-- ) {
                
                if (valore[i] === valore[j]){
                    risultato = valore + " è un palindromo!";
                    
                } else {
                    risultato = valore + " non è palindromo!";
                    
                }
            }
            alert(risultato);
        }
    }

}


function parioDispari(scelta, parametro) {

    if (typeof(parametro) === "number" && scelta === "pari" || typeof(parametro) === "number" && scelta === "dispari") {

        let parametro2 = Math.floor(Math.random() * 10);

        const risultato = parametro + parametro2;

        if (risultato % 2 === 0) {
            opzione = "pari";
        } else {
            opzione = "dispari";
        }
        
        if (scelta === opzione) {
            alert(`Ho sommato il tuo numero con ${parametro2}. Il risultato è ${risultato} quindi numero ${opzione} e quindi hai vinto!`)
        } else {
            alert(`Ho sommato il tuo numero con ${parametro2}. Il risultato è ${risultato} quindi numero ${opzione} e quindi hai perso!`)
        }
    }
    else {
        alert("Errore, riprova")
    }
    
}
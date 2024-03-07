/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  return l1 * l2;
};
console.log(area(30, 15));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (n1 !== n2) {
    console.log(n1 + n2);
  } else {
    console.log((n1 + n2) * 3);
  }
};
crazySum(8, 8); // in questo caso la somma dei due parametri viene moltiplicati per tre poichè sono uguali
crazySum(8, 6); // in questo caso i due parametri vengono solo sommati

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  if (n1 <= 19) {
    return Math.abs(n1 - 19);
  } else {
    return Math.abs(n1 - 19) * 3;
  }
};
console.log(crazyDiff(15)); // 15 è minore di 19 quindi calcola la differenza fra i due numeri
console.log(crazyDiff(19)); // 19 è uguale a 19 quindi viene comunque calcolata la differenza, che è 0
console.log(crazyDiff(22)); // 22 è maggiore di 19 quindi il risultato della differenza viene moltiplicato per 3

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(23)); //true
console.log(boundary(100)); //true
console.log(boundary(400)); //true
console.log(boundary(420)); //false
console.log(boundary(15)); //false

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (inputWord) {
  if (inputWord.startsWith("EPICODE")) {
    return inputWord;
  } else {
    return "EPICODE " + inputWord;
  }
};
console.log(epify("dobbiamo aggiungere una parola"));
console.log(epify("EPICODE è già qui"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n1) {
  if (n1 % 3 === 0 || n1 % 7 === 0) {
    console.log("divisible");
  }
  // if else(n1 % 7 === 0) {
  // console.log("divisible by 7");}
  else {
    console.log("not divisible");
  }
};
check3and7(6); //divisible
check3and7(5); //not divisible
check3and7(70); //divisible
check3and7(8); //not divisible

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (parola) {
  return parola.split("").reverse().join("");
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// x

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (nome) {
  let nuovaStringa = nome.substring(1).slice(0, -1);
  console.log(nuovaStringa);
};
cutString("mirko");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom",
  che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let numeriCasuali = [];
  for (let i = 0; i < n; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 10));
  }
  console.log(numeriCasuali);
};
giveMeRandom(15);

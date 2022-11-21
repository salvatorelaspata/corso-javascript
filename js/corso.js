// console.log('corso.js');
// console.warn('attenzione');
// console.error('errore');
// console.info('informazione');
// Commento singole linea
/* 
    Commento multi linea
*/
// Variabili e Costanti - var, let, const
const nome = 'Corso'; // nome del corso
let a;
// console.log('aaaaaaaa', a);
let numero = 10; // numero di partecipanti
// console.log(numero);
numero = 11;
var b;
// console.log('bbbbbbbb', b);
var numero2 = 12;
// console.log(nome, numero, numero2);
var numero2 = 13;
numero2 = 13;
// console.log(numero2);

// Tipi di Dati
// Stringhe
const aa = 'Corso';
const bb = 'di';
const cc = `JAVASPRIZ`;
let nCorso = aa + ' ' + bb + ' blablabla ' + cc;
let nCorso2 = `${aa} ${bb} blablabla ${cc}`;
// console.log(nCorso);
// console.log(nCorso2);
// Numeri
const n1 = 10;
const n2 = 20;
const n3 = 30.5;
// console.log(n1, n2, n3);
const n4 = 10 + 20;
const n5 = n1 + n2 + n3;
// console.log(n4, n5);
let ciao = '1';
let numeretto = 10;
// console.log(numeretto + ciao);
let num = Number(12);
// Math

// Booleani
const vero = true;
const falso = false;
// console.log('typeof di before falso --> ', typeof falso);
// console.log('typeof di after falso --> ', typeof falso);
// console.log(vero, falso);

// typeof - restituisce il tipo di dato
// console.log('typeof di vero --> ', typeof vero);
// console.log('typeof di numeretto --> ', typeof numeretto);
// console.log('typeof di n3 --> ', typeof n3);
// console.log('typeof di nCorso2 --> ', typeof nCorso2);
// instaceof - restituisce true se il dato è di quel tipo
// console.log(vero instanceof Boolean);

let und = null;
console.log('typeof di und --> ', typeof und, und);
und = 'ciao';
console.log('typeof di und --> ', typeof und, und);
und = 123;
console.log('typeof di und --> ', typeof und, und);

// // Condizioni
const aaaaa = '10';
const bbbbb = 10;
if (aaaaa !== bbbbb) {
    // GT
    console.log('!==');
} else if (aaaaa != bbbbb) {
    // GE
    console.log('!=');
} else {
    console.log('');
}

if (!aaaaa) console.log('la variabile a non è definita');
else console.log('la variabile a è definita');

// // Operatore ternario
// condizione ? valore se vero : valore se falso
!aaaaa
    ? console.log('la variabile a non è definita')
    : console.log('la variabile a è definita');

// !aaaaa
//     ? console.log('la variabile a non è definita')
//     : !bbbbbb
//     ? console.log('la variabile b non è definita')
//     : console.log('le variabili non sono definite');

if (aaaaa != null && aaaaa != undefined) {
    console.log('la variabile a è definita');
} else {
    console.log('la variabile a non è definita');
}

let n = 1;
console.log('n --> ', n);
n++;
n += 1;
console.log('n --> ', n);

// if (condizione) {
//     console.log('condizione vera');
// }
// if (condizione2) {
//     console.log('condizione2 vera');
// }

const num1 = 30;
const num2 = 10;
const num3 = 30;
const num4 = 30;
// && - AND
// per soddisfare la condizione tutti i valori devono essere true
if (num1 === num2 && num2 === num3 && num3 === num1) {
    // num1 === num2 e num2 === num3
    console.log('&& sono uguali');
} else {
    console.log('&& sono diversi');
}
// || - OR
// per soddisfare la condizione ALMENO UN VALORE deve essere true
if (num1 === num2 || num2 === num3 || num3 === num1) {
    // num1 === num2 e num2 === num3
    console.log('|| sono uguali');
} else {
    console.log('|| sono diversi');
}

if (num1 === num4 || (num1 === num2 && num1 === num3)) {
    console.log('nested - sono uguali');
} else {
    console.log('nested - non sono uguali');
}

let arra = ['asd'];
console.log(arra);
if (arra.length) {
    console.log('array pieno');
} else {
    console.log('array vuoto');
}

// Condizione switch
let valore = '3';
switch (valore) {
    case '1':
        console.log('il valore è uno');
        break;
    case '2':
        console.log('il valore è due');
        break;
    default:
        console.log('default');
        break;
}

// oggetti
const oggetto = {
    name: 'Salvatore',
    surname: 'La Spata',
    task: 11,
    compito: {
        name: 'compito',
        titolo: 'importante',
    },
};
console.log(oggetto);
console.log(oggetto.name);
console.log(oggetto['name']);
console.log(oggetto.compito);
console.log(oggetto.compito.name);
console.log(Object.keys(oggetto));

const obj = Object();
obj.name = 'antani';
obj.surname = 'ciccio';
console.log(obj);
const obj1 = Object.freeze(obj);
obj.name = 'pippo';
obj1.name = 'pippo';
console.log(obj);
console.log(obj1);

// array (l'indice parte da 0) mentre gli elementi sono il numero di elementi
const ar = [];
ar.push('ciao');
ar.push('ciao1111');
ar.push('ciao11112222');
ar.push(1);
ar.push(false);
ar.push({ name: 'ciao' });
console.log(ar);
console.log(Array.isArray(ar));

// debugger;

// cicli --- break - continue
// for(inizializzazione; condizione; incremento)
for (let i = 0; i < ar.length; i++) {
    if (typeof ar[i] === 'boolean') break;
    ar[i] += ' - ' + i;
    console.log(ar[i]);
}

// let wA = 0;
// while (wA < 10) {
//     console.log('while --> ', wA);
//     // chiamata
//     wA++;
// }

// do while
// let dA = 0;
// do {
//     console.log('do while --> ', dA);
//     dA++;
// } while (dA < 10);

// let mille = 0;

// while (true) {
//     mille++;
//     // ciclo infinito
//     if (mille % 2 !== 0) {
//         continue;
//     }
//     console.log('mille --> ', mille);
//     // console.log('while true');
//     if (mille === 100) break;
// }

// funzioni
/**
 * @param {number} a numero
 * @param {number} b numero
 * @returns number somma
 */
function somma(a, b) {
    return a + b;
}

const somma1 = (a, b) => {
    return a + b;
};

console.log(somma('asd', 'asd'));
console.log(somma(123, 321));
console.log(somma1(321, 321));

// console.log('corso.js');
// console.warn('attenzione');
// console.error('errore');
// console.info('informazione');
// Commento singole linea
/* 
    Commento multi linea
*/
// Variabili e Costanti - var, let, const
const nome = 'Corso' // nome del corso
let a
// console.log('aaaaaaaa', a);
let numero = 10 // numero di partecipanti
// console.log(numero);
numero = 11
var b
// console.log('bbbbbbbb', b);
var numero2 = 12
// console.log(nome, numero, numero2);
var numero2 = 13
numero2 = 13
// console.log(numero2);

// Tipi di Dati
// Stringhe
const aa = 'Corso'
const bb = 'di'
const cc = `JAVASPRIZ`
let nCorso = aa + ' ' + bb + ' blablabla ' + cc
let nCorso2 = `${aa} ${bb} blablabla ${cc}`
// console.log(nCorso);
// console.log(nCorso2);
// Numeri
const n1 = 10
const n2 = 20
const n3 = 30.5
// console.log(n1, n2, n3);
const n4 = 10 + 20
const n5 = n1 + n2 + n3
// console.log(n4, n5);
let ciao = '1'
let numeretto = 10
// console.log(numeretto + ciao);
let num = Number(12)
// Math

// Booleani
const vero = true
const falso = false
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

let und = null
console.log('typeof di und --> ', typeof und, und)
und = 'ciao'
console.log('typeof di und --> ', typeof und, und)
und = 123
console.log('typeof di und --> ', typeof und, und)

// // Condizioni
const aaaaa = '10'
const bbbbb = 10
if (aaaaa !== bbbbb) {
  // GT
  console.log('!==')
} else if (aaaaa != bbbbb) {
  // GE
  console.log('!=')
} else {
  console.log('')
}

if (!aaaaa) console.log('la variabile a non è definita')
else console.log('la variabile a è definita')

// // Operatore ternario
// condizione ? valore se vero : valore se falso
!aaaaa
  ? console.log('la variabile a non è definita')
  : console.log('la variabile a è definita')

// !aaaaa
//     ? console.log('la variabile a non è definita')
//     : !bbbbbb
//     ? console.log('la variabile b non è definita')
//     : console.log('le variabili non sono definite');

if (aaaaa != null && aaaaa != undefined) {
  console.log('la variabile a è definita')
} else {
  console.log('la variabile a non è definita')
}

let n = 1
console.log('n --> ', n)
n++
n += 1
console.log('n --> ', n)

// if (condizione) {
//     console.log('condizione vera');
// }
// if (condizione2) {
//     console.log('condizione2 vera');
// }

const num1 = 30
const num2 = 10
const num3 = 30
const num4 = 30
// && - AND
// per soddisfare la condizione tutti i valori devono essere true
if (num1 === num2 && num2 === num3 && num3 === num1) {
  // num1 === num2 e num2 === num3
  console.log('&& sono uguali')
} else {
  console.log('&& sono diversi')
}
// || - OR
// per soddisfare la condizione ALMENO UN VALORE deve essere true
if (num1 === num2 || num2 === num3 || num3 === num1) {
  // num1 === num2 e num2 === num3
  console.log('|| sono uguali')
} else {
  console.log('|| sono diversi')
}

if (num1 === num4 || (num1 === num2 && num1 === num3)) {
  console.log('nested - sono uguali')
} else {
  console.log('nested - non sono uguali')
}

let arra = ['asd']
console.log(arra)
if (arra.length) {
  console.log('array pieno')
} else {
  console.log('array vuoto')
}

// Condizione switch
let valore = '3'
switch (valore) {
  case 'somma':
  case 'add':
    console.log('il valore è uno')
    break
  case '2':
    console.log('il valore è due')
    break
  default:
    console.log('default')
    break
}

// oggetti
const oggetto = {
  name: 'Salvatore',
  surname: 'La Spata',
  task: 11,
  funzione: function () {
    console.log('funzione')
  },
}

oggetto.funzione()

console.log(oggetto)
console.log(oggetto.name)
console.log(oggetto.compito)
console.log(Object.keys(oggetto))

const obj = Object()
obj.name = 'antani'
obj.surname = 'ciccio'
console.log(obj)
const obj1 = Object.freeze(obj)
obj.name = 'pippo'
obj1.name = 'pippo'
console.log(obj)
console.log(obj1)

// array (l'indice parte da 0) mentre gli elementi sono il numero di elementi
const ar = []
ar.push('ciao')
ar.push('ciao1111')
ar.push('ciao11112222')
ar.push(1)
ar.push(false)
ar.push({ name: 'ciao' })
console.log(ar)
console.log(Array.isArray(ar))

// debugger;

// cicli --- break - continue
// for(inizializzazione; condizione; incremento)
for (let i = 0; i < ar.length; i++) {
  if (typeof ar[i] === 'boolean') break
  ar[i] += ' - ' + i
  console.log(ar[i])
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
  return a + b
  //  return [a, b]
  // return {a: a ,b: b}
}
// const c = somma(1,2)
// const a = c.a
// const b = c.b
// const {a, b} = somma(1, 2)

// const d = somma(1, 2)
// const f = d[0]
// const g = d[1]

// const [f, g] = somma(1, 2)

const somma1 = (a, b, c) => {
  function somma(a, b) {
    return a + b
  }
  switch (c) {
    case 'somma':
      return somma(a, b)
    case 'sottrazione':
      return a - b
  }
}
console.log(somma('asd', 'asd', 'sdf'))
console.log(somma(123, 321))
console.log(somma1(undefined, 321, 11))

// ... destrutturazione
const funzione = (...args) => {
  const a = 'antani'
  console.log(Array.isArray(args))

  return args
}

console.log(funzione(1, 2, 3, 'asd', true, {}))
console.log(funzione(1, {}))

// Infinity e NaN
console.log(1 / 0)
console.log(1 / 'asd')
console.log(1 / '0')
console.log(1 / 0 === Infinity)

const persona = {
  name: 'Salvatore',
  surname: 'La Spata',
  citta: 'Caltagirone',
  saluta: function () {
    return `${this.name} ${this.surname} viene da ${this.citta}`
  },
}
const ritornoSaluta = persona.saluta()
console.log(ritornoSaluta)

// destrutturazione oggetti
const personizzazione = {
  nomePersona: 'Salvatore',
  surname: 'La Spata',
  citta: 'Caltagirone',
}
// renaming e assigning default variables
var { nomePersonaa: nomeee = 'asda', surname, citta } = personizzazione
console.log('d', nomeee, surname, citta)

const arrayPersone = ['mario rossi', 'giuseppe verdi']

const [persona1, persona2] = arrayPersone
console.log(persona1, persona2)
console.log(arrayPersone[0], arrayPersone[1])

// studenti: { nome: string, cognome: string, eta: number }

const aula = {
  id: 1,
  nome: 'Aula 1',
  studenti: [
    {
      nome: 'Salvatore',
      cognome: 'La Spata',
      eta: 30,
    },
    {
      nome: 'Mario',
      cognome: 'Rossi',
      eta: 20,
    },
    {
      nome: 'Giuseppe',
      cognome: 'Verdi',
      eta: 25,
    },
  ],
}

const studenti1 = aula.studenti
const { studenti } = aula
console.log(studenti1)
console.log(studenti)
// array.forEach((element, index, array) => {
studenti.forEach((elemen, index, array) => {
  console.log('*****', elemen, index, array)
})

// sort
const studentiOrdinati = studenti.sort(function (a, b) {
  return b.eta - a.eta
})

console.log('studenti ordinati', studentiOrdinati)
// la funzione map ritorna un nuovo array composto dal return della funzione
const studentiManipolati = studenti.map(function (studente) {
  return studente.nome + ' ' + studente.cognome
})

// indexOf
const indiceSls = studentiManipolati.indexOf('Mario Rossii')
if (indiceSls !== -1) {
  console.log('trovato', indiceSls)
} else {
  console.log('non trovato', indiceSls)
}

console.log(studentiManipolati)
console.log(studentiManipolati.reverse())
// filtere.log(studentiFiltrati)

const funzioneAnonima = function (studente) {
  return studente.eta > 20 && studente.nome.startsWith('S')
}
// query --  ritorna un array
const studentiFiltrati = studenti.filter(funzioneAnonima)
console.log(studentiFiltrati)

// read -- ritorna un elemento
const studenteFind = studenti.find(studente => {
  return studente.eta > 20 && studente.nome.startsWith('S')
})

console.log(studenteFind)

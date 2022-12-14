// console.log('CORSO AVANZATO')

// foreach
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayJSon = [
  {nome: 'Mario', cognome: 'Rossi'},
  {nome: 'Luca', cognome: 'Verdi'},
  {nome: 'Gianni', cognome: 'Marroni'},
  {nome: 'Maria', cognome: 'Gialli'},
  {nome: 'Valeria', cognome: 'Gialli'}
]

//filter - restituisce un array in base al predicato presente nella callback
arrayNomiFilter = arrayJSon.filter(persona => persona.nome.substring(0, 3) === 'Mar' && (persona.cognome.substring(0,3) === 'Ros' || persona.cognome.substring(0,3) === 'Gia'))

//find - se trova un item in un'array , restituisce il primo item che trova in base al predicato presente nella callback, altrimenti undefined
oNomiFind = arrayJSon.find(persona => persona.nome.substring(0, 3) === 'Mar' && persona.cognome.substring(0,3) === 'Ros')

//find - se trova un item in un'array , restituisce il primo item che trova in base al predicato presente nella callback, altrimenti restituisce -1
iIndexNomiFindIndex = arrayJSon.findIndex(persona => persona.nome.substring(0, 3) === 'Mar' && persona.cognome.substring(0,3) === 'Gia')

//sort su stringhe - riordina elementi di un array in base al predicato presente nella callback
aSortedArrayNomi = arrayJSon.sort((personaA, personaB) =>  ('' + personaA.cognome).localeCompare(personaB.cognome))

//sort su numeri - dal più grande al più piccolo
aSortedNumbers = array.sort((a,b) => b - a)

//sort su numeri - dal piccolo al più grande
aSorteNumbers2 = aSortedNumbers.sort((a,b) => a - b)

//reduce su numeri - calcolo somma
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 //valore iniziale della somma
)

//reduce per raggruppamento per property (esempio: cognome)
const groupBy = (items, key) => items.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [
      ...(result[item[key]] || []),
      item,
    ],
  }), 
  {},
)
const groupByCognome = groupBy(arrayJSon, "cognome")

//esempio di join 
const concArray = array.join('')

// ci permette di ciclare il contenuto dell'array
// parametri callback: valore, indice, array
array.forEach(function (element, index) {
  element = element + 1
  // console.log('element --> ', element)
  // console.log('index --> ', index)
})
// console.log(array)

// map
// ci permette di ciclare il contenuto dell'array ritornado un nuove
// array con i valori modificati dal return della callback
const arrayMap = array.map((element, index) => {
  return { [index]: element }
})
arrayMap[1] = 'antani'
// console.log(arrayMap)
// console.log(array)

const arrayFilter = array.filter((item) => item % 2 === 0)

// reference --- deep copy --- shallow copy
const arrayReferenziato = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayReferenziato2 = JSON.parse(JSON.stringify(arrayReferenziato))
// [].concat(arrayReferenziato)

arrayReferenziato2[0] = 'antani'

// console.log(arrayReferenziato)
// console.log(arrayReferenziato2)

const oggetto = {
  name: 'Salvatore',
  surname: 'La Spata',
  task: 11,
}
// console.log(oggetto)
const oggetto2 = oggetto
// JSON.parse(JSON.stringify(oggetto))
// Object.assign({}, oggetto)

// Object.freeze(oggetto)

oggetto2.name = 'antani'

// console.log(oggetto)
// console.log(oggetto2)

const f1 = a => ({ a: a })
const f2 = a => {
  return { a: a }
}
// fetch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // console.log(response.json())
    return response.json()
  })
  .then(json => {
    // console.log(json)
  })
  .catch(error => {
    // console.log('error --> ', error)
  })

const f3 = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response.status)
    const json = await response.json()
    // console.log(json)
  } catch (error) {
    // console.log('error --> ', error)
  }
}
f3()

const f4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, 2000)
  })
}

f4()
  .then(a => {
    //console.log('.then', a)
  })
  .catch(e => {
    //console.log('.catch', e)
  })

const get = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
}

const getJQuery = () => {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    success: function (data) {
      console.log('JQUERY', data)
    },
    error: function (error) {
      console.log('JQUERY', error)
    },
  })
}

get()
getJQuery()

const post = () => {
  // new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'corso javascript',
      body: 'come se non ci fosse un domani',
      userId: 1,
    }),
  })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      // resolve(json)
    })
    .catch(e => {
      console.log(e)
      // reject(e)
    })
  // })
}

const postJQuery = () => {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    data: {
      title: 'corso javascript',
      body: 'come se non ci fosse un domani',
      userId: 1,
    },
    success: function (data) {
      console.log('JQUERY POST', data)
    },
    error: function (error) {
      console.log('JQUERY POST', error)
    },
  })
}

post()
postJQuery()

const fA = (a, b, c) => {
  console.log(a, b, c)
}
const fB = obj => {
  const { a, b, c } = obj
  console.log(a, b, c)
}
const fC = ({ a, b, c }) => {
  console.log(a, b, c)
}

fA('a', null, 'c')
fB({ a: 'a', c: 'c' })
fC({ b: false, c: new Date() })

// jquery
// sintassi $(selettore).metodo()
// # --> id           = document.getElementById()
// . --> class        = document.getElementsByClassName()
// tag-name --> tag   = document.getElementsByTagName()
$(document).ready(function () {
  $('.paragrafo').css('border', '3px solid red')
  $('.paragrafo').click(e => {
    console.log(e)
    const { currentTarget } = e
    const oCurrentTarget = $(currentTarget) // oggetto jquery
    oCurrentTarget.css('background-color', 'green')
  })

  const formatDate = date => {
    const gg = date.getDate()
  }

  // date
  const date = new Date()
  const stampaData = d => {
    console.log(d, d < data)
  }

  const mesi = [
    'gennaio',
    'febbraio',
    'marzo',
    'aprile',
    'maggio',
    'giugno',
    'luglio',
    'agosto',
    'settembre',
    'ottobre',
    'novembre',
    'dicembre',
  ]

  const data = new Date(2019, 11, 25)
  stampaData(date)

  const formatData = data => {
    const gg = data.getDate()
    const mm = data.getMonth()
    const yyyy = data.getFullYear()
    const hh = data.getHours()
    const min = data.getMinutes()
    const sec = data.getSeconds()
    return `${gg}/${mesi[mm]}/${yyyy} ${hh}:${min}:${sec}` // stringa formattata
  }
  const intervallo = setInterval(() => {
    const data = new Date()
    stampaData(formatData(data))
  }, 1000)

  setTimeout(() => {
    // esegue una volta
    // aspetta 10000 millisecondi per eseguire il contenuto della callback
    clearInterval(intervallo)
  }, 10000)
})

// Naming convention
// camelCase -- descrivere le variabili come se fossero delle frasi
const nomeVariabile = 'valore'
const codiceFiscale = 'valore'
const dataDiNascita = 'valore'
const dataNascita = 'valore'
const variabilileCheDescriveQualcosa = 'valore'
// Upper camel case
const NomeVariabile = 'valore'

const sNome = 'Salvatore'
const nEta = 30
const fSaluta = () => {
  console.log('ciao')
}

const oPersona = {
  nome: 'Salvatore',
  eta: 30,
  saluta: () => {
    console.log('ciao')
  },
}
// l'undescore per le variabili che non vengono usate
// oppure che le variabili siano private
const _nome = 'Salvatore'
const _eta = 30
new Promise((resolve, _) => {
  // ...
  try {
    resolve('ok')
  } catch (e) {
    resolve(e)
  }
})


const getJQueryPromise = (sUrl) => {
  return new Promise((resolve, reject) => {
      $.ajax({
        url: sUrl,
        method: 'GET',
        success: function (data) {
          resolve(data)
        },
        error: function (error) {
          resolve(error)
        },
      })
  })
}

const callDbPromise = async function () {
  Promise.all([getJQueryPromise('https://jsonplaceholder.typicode.com/posts'), 
              getJQueryPromise('https://jsonplaceholder.typicode.com/users')])
         .then(res => {
            console.log(res)
         })
} ()


const prova = function () {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    success: function (dataPosts) {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function (dataUsers) {
           console.log(dataPosts)
           console.log(dataUsers)
        },
        error: function (error) {
          
        },
      })
    },
    error: function (error) {
      
    },
  })
} 

const getData = (sUrl) => {
  return new Promise((resolve, reject ) => {
    $.ajax({
      url: sUrl,
      method: 'GET',
      success: function (data) {
        resolve(data)
      },
      error: function (error) {
        reject(error)
      },
    })
  })
  
}

const provaPromiseAll = async () => {
     var dataPosts =  await getData('https://jsonplaceholder.typicode.com/posts')
     var dataUsers =  await getData('https://jsonplaceholder.typicode.com/users')
     
     console.log(dataPosts)
     console.log(dataUsers)

    Promise.all([getData('https://jsonplaceholder.typicode.com/posts'),
                getData('https://jsonplaceholder.typicode.com/users')])
            .then((res) => {
              console.log(res[0])
              console.log(res[1])
            })
            .catch(res => {
            })
}

provaPromiseAll()


const promiseProva = () => {
  new Promise((resolve, reject) =>  {
     resolve(1)
  })
  .then(res => {
    console.log(res * 2)
    return res * 2
  })
  .then(res => {
    console.log(res * 2)
  })
}
promiseProva()
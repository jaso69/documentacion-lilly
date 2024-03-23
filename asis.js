const resol = document.querySelector('#resp')
const preg = document.querySelector('#preg')
const loading = document.querySelector('#loading')
const pregunta = document.querySelector('#pregunta')
const boton = document.querySelector('#boton')
let prompt = {}
let question = ''
let message = []
let url;

boton.addEventListener('click', (event) => {
    event.preventDefault();
    resol.innerHTML = ''
    const p = String(pregunta.value)
    if(p.length < 1) return
    resol.value = ''
    question = p
    preg.innerHTML = question 
    pregunta.value = ''
    prompt = {prompt: p}
    loading.innerHTML = 'Un momento....'
    url = 'https://jaweb.es:3000/api/gpt?prompt=' + p
    Nuevo(prompt)
})

const respuesta = (resp) => {
    message.push({question : resp})
    loading.innerHTML = ''
    //preg.innerHTML = question + ' ' + '?'
    if(resp.message){
        resol.innerHTML = resp.message;
    } else {
        resol.innerHTML = 'Lamentamos no poder responder en este momento, pruebe en unos minutos.'
    }

}

const inicio = () => {
    //return
    const p = 'Hola'
    prompt = {prompt: p}
    loading.innerHTML = 'Un momento....'
    url = 'https://jaweb.es:3000/api/gpt?prompt=' + p
    Nuevo(prompt)
}


async function Nuevo (prompt){
    const data = await fetch( url, 
        {   method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify( prompt ) 
        })
    const resp = await data.json()
    respuesta(resp)
}

inicio()


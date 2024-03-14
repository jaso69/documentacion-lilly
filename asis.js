
const label = document.querySelector('#resp')
const preg = document.querySelector('#preg')
const loading = document.querySelector('#preg')
const pregunta = document.querySelector('#pregunta')
const boton = document.querySelector('#boton')
let prompt = {}
let url;
boton.addEventListener('click', () => {
    const p = String(pregunta.value)
    preg.innerHTML = p
    pregunta.value = ''
    if(p.length < 1) return
    prompt = {prompt: p}
    loading.innerHTML = 'Un momento....'
    url = 'http://194.164.166.107/api/gpt?prompt=' + p
    Nuevo(prompt)
})

const respuesta = (resp) => {
    loading.innerHTML = ''
    label.innerHTML = resp.message;
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


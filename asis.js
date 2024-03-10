
const label = document.querySelector('#resp')
const pregunta = document.querySelector('#pregunta')
const boton = document.querySelector('#boton')
const url = 'https://openai-rpg.vercel.app/gpt/check'
let prompt = {}

boton.addEventListener('click', () => {
    const p = String(pregunta.value)
    pregunta.value = ''
    if(p.length < 1) return
    prompt = {prompt: p}
    Nuevo(prompt)
})

const respuesta = (resp) => {
    label.innerHTML = resp.message;
}


async function Nuevo (prompt){
    const data = await fetch( url, 
        {   method: 'POST',
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}, 
            body: JSON.stringify( prompt ) 
        })
    const resp = await data.json()
    respuesta(resp)
}


const userText = 'Lilly'
const passText = '123456'

const user = document.querySelector('#user')
const pass = document.querySelector('#pass')
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    if (userText === user.value && passText === pass.value) {
        window.localStorage.setItem('login', 'ok')
        window.location.replace('./index.html')
    }
})

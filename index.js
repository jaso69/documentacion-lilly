const auditorioButton = document.querySelector('#auditorio')
const m32rButton = document.querySelector('#m32r')

const auditorioImg = document.querySelector('#auditorioImg')
const m32rImg = document.querySelector('#m32rImg')

m32rButton.addEventListener('mouseover', () => {
    m32rImg.classList.remove('cerrar')
    m32rImg.classList.add('abrir') 
})

m32rButton.addEventListener('mouseout', () => {
    m32rImg.classList.remove('abrir')
    m32rImg.classList.add('cerrar')  
})

auditorioButton.addEventListener('mouseover', () => {
    auditorioImg.classList.remove('cerrar')
    auditorioImg.classList.add('abrir') 
})

auditorioButton.addEventListener('mouseout', () => {
    auditorioImg.classList.remove('abrir')
    auditorioImg.classList.add('cerrar')  
})
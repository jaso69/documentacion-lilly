const auditorioButton = document.querySelector('#auditorio')

const auditorioImg = document.querySelector('#auditorioImg')

auditorioButton.addEventListener('mouseover', () => {
    auditorioImg.classList.remove('cerrar')
    auditorioImg.classList.add('abrir') 
})

auditorioButton.addEventListener('mouseout', () => {
    auditorioImg.classList.remove('abrir')
    auditorioImg.classList.add('cerrar')  
})
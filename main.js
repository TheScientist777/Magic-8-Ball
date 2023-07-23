const ballContainer = document.querySelector('#ball-container')

const answer = document.createElement('p')

answer.classList.add('fade', 'text-center', 'fs-4', 'fw-bold', 'bg-white', 
'text-primary', 'p-3', 'rounded', 'w-50', 'position-absolute', 'top-50', 
'start-50','translate-middle')

answer.innerText = 'Hello There, how are you doing?'

ballContainer
const ballContainer = document.querySelector('#ball-container')
const question = document.querySelector('#question')
const shake = document.querySelector('#shake-button')

let answer = null.add

const messages = {
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes - definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'very doubtful',
}

const createAnswer = {} => {
  const answerElement = document.createElement('p')
answer.classList.add('fade', 'text-center', 'fs-4', 'fw-bold', 'bg-white', 
'text-primary', 'p-3', 'rounded', 'w-50', 'position-absolute', 'top-50', 
'start-50','translate-middle')

answer.innerText = 'Hello There, how are you doing?'

return answer
}

ballContainer.append(answer)

answer.remove()
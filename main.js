const ballContainer = document.querySelector('#ball-container');
const question = document.querySelector('#question');
const shakeButton = document.querySelector('#shake-button');

const answerElement = document.querySelector('#answer');

let answer = null;

const messages = [
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
    'Outlook not so good’,
    'very doubtful',
];

const createAnswer = () => {
    answerElement.classList.add(
        'fade', 'text-center', 'fs-1', 'fw-bold',
        'bg-white', 'text-danger', 'py-5', 'p-3', 'rounded', 'w-50',
        'position-absolute', 'top-50', 'start-100', 'translate-middle'
    );

    const seed = Math.random() * messages.length;
    const randomIndex = seed > 0 ? Math.floor(seed) : Math.ceil(seed);

    answerElement.innerText = messages[randomIndex];
};

const shakeBall = () => {
    ballContainer.classList.add('shake');
    if (answer) answer.remove();

    createAnswer(); 

    setTimeout(() => {
        ballContainer.classList.remove('shake');
    }, 1000);
};

const checkQuestion = () => {
    return question.value.trim().length > 0;
};

shakeButton.addEventListener('click', () => {
    if (checkQuestion()) {
        shakeBall();
    }
});

question.addEventListener('keyup', (e) => {
    shakeButton.disabled = !checkQuestion();

    if (e.key === 'Enter' && checkQuestion()) {
        shakeBall();
    }
});

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
}
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick () {
  refs.startBtn.setAttribute('disabled', true);

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }, 1000);
}

function onStopBtnClick () {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
}
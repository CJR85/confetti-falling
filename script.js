let btn = document.querySelector('.btn'),
  popup = document.querySelector('.popup'),
  close = document.querySelector('.close'),
  confe = document.querySelector('#my-canvas');
btn.onclick = function () {
  popup.classList.add('active');
  confe.classList.add('active');
};
close.onclick = function () {
  popup.classList.remove('active');
};

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

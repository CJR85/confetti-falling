let btn = document.querySelector('.btn'),
  popup = document.querySelector('.popup'),
  close = document.querySelector('.close');
btn.onclick = function () {
  popup.classList.add('active');
};
close.onclick = function () {
  popup.classList.remove('active');
};

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;//stop running if keypress does not return audio file
  audio.currentTime = 0;//play audio from start after each press
  audio.play();

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);//get key pressed
  console.log(key.classList);
  key.classList.add('playing')
});

const keys = Array.from(document.querySelectorAll('.key'));

function removeTransition(e) {
  this.classList.remove('playing'); 
}


keys.forEach(key => key.addEventListener('transitionend', removeTransition));

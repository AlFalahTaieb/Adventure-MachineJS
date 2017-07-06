
window.addEventListener('keydown', function (e){
console.log(e.keyCode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
// console.log(audio);
// console.log(e)
if(!audio) return;//STOP
audio.currentTime=0; //Replay :D
// console.log(key);
audio.play();
key.classList.add('playing');

});

function removeTransition(e){
 
 if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
     console.log(e.propertyName)
  }


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));




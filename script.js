//--- retrieve all sounds from html and convert to javascript objects
const eString = new Audio("guitarSounds/1st_String_E_64kb.mp3");
const bString = new Audio("guitarSounds/2nd_String_B__64kb.mp3");
const gString = new Audio("guitarSounds/3rd_String_G_64kb.mp3");
const dString = new Audio("guitarSounds/4th_String_D_64kb.mp3");
const aString = new Audio("guitarSounds/5th_String_A_64kb.mp3");
const eSTring = new Audio ("guitarSounds/6th_String_E_64kb.mp3");
const cChord = new Audio ("guitarSounds/C_64kb.mp3");
const dChord = new Audio ("guitarSounds/C_64kb.mp3");
const dmChord = new Audio("guitarSounds/D_64kb.mp3");
const eChord = new Audio ("guitarSounds/Dm_64kb.mp3");

//--change the playback to be 4 times faster --
eString.playbackRate = 4;
bString.playbackRate = 4;
gString.playbackRate = 4;
aString.playbackRate = 4;
eString.playbackRate = 4;
eSTring.playbackRate = 4;
cChord.playbackRate = 4;
dChord.playbackRate = 4;
dmChord.playbackRate = 4;
eChord.playbackRate = 4;


//retrieve all home key codes for click events
const A_HOME_KEY = 65;
const S_HOME_KEY = 83;
const D_HOME_KEY = 68;
const F_HOME_KEY = 70;
const G_HOME_KEY = 71;
const H_HOME_KEY = 72;
const J_HOME_KEY = 74;
const K_HOME_KEY = 91;
const L_HOME_KEY = 76;
const SEMICOLON_HOME_KEY = 186;

//retrieve all

const aKey = document.getElementById('a');

function animateLetter(e) {
    aKey.style.cssText = "border: 2px solid yellow;";
}

document.addEventListener("keydown", (e) => {
  if(e.keyCode === A_HOME_KEY) {
    eString.play();
    animateLetter(e);
  }
});

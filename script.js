"use strict";

var library = [
  "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
  "Nitwit! Blubber! Oddment! Tweak!",
  "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
  "Killing is not so easy as the innocent believe.",
  "Alas! Earwax!",
  "Age is foolish and forgetful when it underestimates youth.",
  "After all, to the well-organized mind, death is but the next great adventure.",
  "Do not pity the dead, Harry. Pity the living, and, above all, those who live without love.",
  "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
  "It does not do to dwell on dreams and forget to live.",
  "It is important to fight and fight again, and keep fighting, for only then can evil be kept at bay though never quite eradicated.",
  "It is our choices that show what we truly are, far more than our abilities.",
  "It’s the unknown we fear when we look upon death and darkness, nothing more."
  ]

var x = -1;
function getQuote() {
  var y = x;
  x = Math.floor(Math.random()*library.length);
  if (x === y) {
      getQuote();
    }
  document.getElementById("quote").innerHTML = '"'+library[x]+'"';
}

function tweet(){
  var url = ("https://twitter.com/intent/tweet?text="+'"'+library[x]+'" -Dumbledore');
  window.open(url);
}

getQuote();

document.getElementById("another").addEventListener("click", getQuote);
document.getElementById("tweet").addEventListener("click", tweet);

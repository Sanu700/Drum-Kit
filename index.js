var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Preload sounds to reduce latency
const sounds = {
  w: new Audio("sounds/tom-1.mp3"),
  a: new Audio("sounds/tom-2.mp3"),
  s: new Audio("sounds/tom-3.mp3"),
  d: new Audio("sounds/tom-4.mp3"),
  j: new Audio("sounds/crash.mp3"),
  k: new Audio("sounds/snare.mp3"),
  l: new Audio("sounds/kick-bass.mp3")
};

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  if (sounds[key]) {
    sounds[key].currentTime = 0; // Reset sound for quick replay
    sounds[key].play();
  } else {
    console.log("Key not mapped: " + key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

// Add a help message for first-time users
window.addEventListener("load", function () {
  setTimeout(function () {
    alert("Welcome to the Drum Kit! Press the keys or click the buttons to play sounds.");
  }, 500);
});

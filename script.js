const words = ["DEVELOPER", "FULL STACK ENGINEER", "ML ENTHUSIAST"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  const currentWord = words[currentWordIndex];
  const currentText = currentWord.substring(0, currentCharIndex);
  typewriter.textContent = currentText;

  if (!isDeleting && currentCharIndex < currentWord.length) {
    currentCharIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(typeEffect, 80);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();

const myCuteWords = [
    "snuggle",
    "butterfly",
    "rainbow",
    "giggle",
    "sparkle",
    "sunshine",
    "cupcake",
    "honeybee",
    "fluffy",
    "panda"
];

function myGenerateWord() {
    const myRandomIndex = Math.floor(Math.random() * myCuteWords.length);
    const myWordElement = document.getElementById('myWord');
    myWordElement.classList.remove('fadeIn');
    void myWordElement.offsetWidth; 
    myWordElement.classList.add('fadeIn');
    myWordElement.textContent = `You are my ${myCuteWords[myRandomIndex]}!`;
    myCreateConfetti();
}

function myCreateConfetti() {
    const myConfettiCount = 100;
    for (let myI = 0; myI < myConfettiCount; myI++) {
        const myConfetti = document.createElement('div');
        myConfetti.classList.add('confetti');
        myConfetti.style.backgroundColor = myRandomColor();
        myConfetti.style.left = `${Math.random() * 100}vw`;
        myConfetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(myConfetti);
        myRemoveConfetti(myConfetti);
    }
}

function myRandomColor() {
    const myColors = ['#ff69b4', '#ff1493', '#FFD700', '#00FF7F', '#00CED1', '#1E90FF', '#FF4500'];
    return myColors[Math.floor(Math.random() * myColors.length)];
}

function myRemoveConfetti(myConfetti) {
    setTimeout(() => {
        myConfetti.remove();
    }, 5000);
}
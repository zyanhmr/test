const messages = [
    "Yakin Mas gamau?",
    "Masa sih gamauu??",
    "Betulan nihhh???",
    "Pweaaaseee :((",
    "Kalau mas gamau, nanti adek sedih lohh",
    "Adek sedih banget nih nanti...",
    "Yaudah deh adek ga maksa lagi :(",
    "Becandaa, Cepet Iya in!! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}
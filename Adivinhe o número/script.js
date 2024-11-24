let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const retryButton = document.getElementById('retryButton');
    let guess = parseInt(guessInput.value);

    if (!guess) {
        message.textContent = "Por favor, insira um número válido!";
        return;
    }

    attempts--;
    
    if (guess === secretNumber) {
        message.textContent = `Parabéns! Você acertou o número ${secretNumber}!`;
        attemptsDisplay.textContent = "";
        guessInput.disabled = true;
        retryButton.style.display = "block"; // Mostra o botão "Tentar Novamente"
    } else if (attempts === 0) {
        message.textContent = `Fim de jogo! O número correto era ${secretNumber}.`;
        attemptsDisplay.textContent = "";
        guessInput.disabled = true;
        retryButton.style.display = "block"; // Mostra o botão "Tentar Novamente"
    } else {
        if (guess < secretNumber) {
            message.textContent = "O número é maior!";
        } else {
            message.textContent = "O número é menor!";
        }
        attemptsDisplay.textContent = `Tentativas restantes: ${attempts}`;
    }
}

function restartGame() {
    // Reinicia as variáveis
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;

    // Reseta o campo de entrada e as mensagens
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = 'Tentativas restantes: 5';
    document.getElementById('retryButton').style.display = "none"; // Esconde o botão
}

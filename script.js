document.addEventListener("DOMContentLoaded", function () {
  const playerChoices = document.querySelectorAll(".choices button");
  const playerChoiceDisplay = document.getElementById("player-choice");
  const enemyChoiceDisplay = document.getElementById("enemy-choice");
  const resultDisplay = document.getElementById("result");
  let winSound = new Audio(
    "https://www.101soundboards.com/storage/board_sounds_rendered/122910.mp3"
  );
  let loseSound = new Audio(
    "https://www.101soundboards.com/storage/board_sounds_rendered/483121.mp3"
  );
  let tieSound = new Audio(
    "https://www.101soundboards.com/storage/board_sounds_rendered/477709.mp3"
  );
  let pScoreShow = 0;
  let eScoreShow = 0;


  function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  playerChoices.forEach(function (button) {
    button.addEventListener("click", function () {
      const playerChoice = button.id;
      const enemyChoice = computerChoice();
      const result = winLose(playerChoice, enemyChoice);

      playerChoiceDisplay.textContent = playerChoice;
      enemyChoiceDisplay.textContent = enemyChoice;
      resultDisplay.textContent = result;
    });
  });

  function winLose(player, enemy) {
    if (player === enemy) {
      tieSound.play();
      return "You Tied!";
    }
    if (
      (player === "rock" && enemy === "scissors") ||
      (player === "paper" && enemy === "rock") ||
      (player === "scissors" && enemy === "paper")
    ) {
      winSound.play();
      pScoreShow++;
      document.getElementById("pScoreShow").textContent = pScoreShow;
    return "You Win!";
    } else {
      loseSound.play();
      eScoreShow++;
      document.getElementById("eScoreShow").textContent = eScoreShow;
      return "You Lose!";
    }
  }
});

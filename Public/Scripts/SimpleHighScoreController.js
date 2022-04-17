// SimpleHighScoreController.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: A simple example of saving a high score with the persistent storage system

var currentScore = 0;
var highScore = 0;
var indeksSoal = 1;

// Define the key which the persistent storage system will use to save the data to
const highScoreKey = "hs_template_high_score";

// Get the data associated with the key from the persistent storage system
var persistentStorageSystem = global.persistentStorageSystem.store;
highScore = persistentStorageSystem.getFloat(highScoreKey) || 0;

// Update the high score label
updateHighScoreText();

// Script API interface
script.api.incrementScore = incrementScore;
script.api.endGame = endGame;


function updateScoreText() {
   
    setHighScore();
    
    script.scoreText.text = currentScore.toString();
    script.indeksSoalText.text = indeksSoal.toString();
}

function updateHighScoreText() {
    script.highScoreText.text = highScore.toString();
}

function incrementScore() {
    if(indeksSoal == 2 || indeksSoal == 3 || indeksSoal == 6){
        currentScore++;
    }
  
    indeksSoal++
    updateScoreText();
}

function setHighScore() {
    if (currentScore > highScore) {
        highScore = currentScore;

        // Set the data associated with the key from the persistent storage system
        persistentStorageSystem.putFloat(highScoreKey, currentScore);

        // Update the high score text since its been updated
        updateHighScoreText();
    }
}

function endGame() {
    
    if(indeksSoal == 1 || indeksSoal == 4 || indeksSoal == 5 || indeksSoal == 7){
        currentScore++;
    }
  
    indeksSoal++
    updateScoreText();
}
const covers = document.querySelectorAll('.cover');
let revealedSections = 0;

covers.forEach(cover => {
    cover.addEventListener('click', function() {
        this.classList.add('revealed');
        revealedSections++;
    });
});

function checkGuess() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    const correctAnswer = "john doe"; // Replace this with the correct answer for each team/level
    const message = document.getElementById('message');

    if (guess === correctAnswer.toLowerCase()) {
        message.textContent = "Correct! You guessed it!";
        message.style.color = "green";
        revealAll();
    } else {
        message.textContent = "Incorrect, try again!";
        message.style.color = "red";
    }
}



function revealAll() {
    // Hide all covers
    const covers = document.querySelectorAll('.cover');
    covers.forEach(cover => {
        cover.classList.add('fade-out'); // Trigger fade-out animation
        setTimeout(() => {
            cover.style.display = 'none'; // Remove cover after fade-out
        }, 1000); // Wait for the animation to finish (1 second)
    });

    // Show the celebrity name
    const celebrityName = document.getElementById('celebrity-name');
    celebrityName.style.display = 'block';

    // Show the Next Level button
    const nextLevelBtn = document.getElementById('next-level-btn');
    nextLevelBtn.style.display = 'block';
}

function goToNextLevel(currentLevel) {
    const teamNumber = 1; // Update this for each team level page
    const nextLevel = currentLevel + 1; // Increment the current level
    const nextLevelUrl = `team${teamNumber}-level${nextLevel}.html`; // Construct the next level URL
    window.location.href = nextLevelUrl; // Redirect to the next level page
}

function goToTeamSelection() {
    window.location.href = 'index.html'; 
}
// 1. Game State Variables
let targetLegend = null;
let guesses = 0;
const maxGuesses = 8;
let hasWon = false;

// Wait for the page to load, then setup the game
document.addEventListener('DOMContentLoaded', () => {
    // Ensure 'legends' array exists from your script.js
    if (typeof legends === 'undefined' || legends.length === 0) {
        document.getElementById('guess-container').innerHTML = "<p style='color:red;'>Error: Could not load legends data. Make sure script.js is linked correctly.</p>";
        return;
    }

    // Pick a random target legend
    targetLegend = legends[Math.floor(Math.random() * legends.length)];
    
    // Developer Cheat Code (Uncomment to see the answer in the console)
    // console.log("Target is:", targetLegend.name);

    // Populate the datalist for the search bar autocomplete
    const dataList = document.getElementById('legend-names');
    legends.forEach(l => {
        let option = document.createElement('option');
        option.value = l.name;
        dataList.appendChild(option);
    });

    // Allow pressing "Enter" to submit
    document.getElementById('brawldle-guess').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') makeGuess();
    });
});

// 2. The Main Guess Function
window.makeGuess = () => {
    if (hasWon || guesses >= maxGuesses) return;

    const inputField = document.getElementById('brawldle-guess');
    const guessName = inputField.value.trim();

    // Find the legend in your data
    const guessedLegend = legends.find(l => l.name.toLowerCase() === guessName.toLowerCase());

    if (!guessedLegend) {
        alert("Legend not found! Check your spelling.");
        return;
    }

    // Process the guess
    guesses++;
    renderGuess(guessedLegend);
    inputField.value = ""; // Clear input

    // Check Win/Loss Condition
    if (guessedLegend.id === targetLegend.id) {
        hasWon = true;
        setTimeout(() => alert(`You won in ${guesses} guesses! The legend was ${targetLegend.name}.`), 500);
    } else if (guesses >= maxGuesses) {
        setTimeout(() => alert(`Game Over! The correct legend was ${targetLegend.name}.`), 500);
    }
};

// 3. Render the Guess Row
function renderGuess(guess) {
    const container = document.getElementById('guess-container');
    
    // Create a new row using your CSS grid
    const row = document.createElement('div');
    row.className = 'brawldle-grid';
    row.style.marginTop = "10px";

    // 1. Name
    row.appendChild(createBox(guess.name, guess.id === targetLegend.id ? 'correct' : 'wrong'));

    // 2. Gender
    const genderMatch = (guess.gender || "N/A") === (targetLegend.gender || "N/A");
    row.appendChild(createBox(guess.gender || "N/A", genderMatch ? 'correct' : 'wrong'));

    // 3. Weapon 1
    let w1Status = 'wrong';
    if (guess.weapons[0] === targetLegend.weapons[0]) {
        w1Status = 'correct'; // Exact slot
    } else if (targetLegend.weapons.includes(guess.weapons[0])) {
        w1Status = 'partial'; // Wrong slot, but target has it
    }
    row.appendChild(createBox(guess.weapons[0], w1Status));

    // 4. Weapon 2
    let w2Status = 'wrong';
    if (guess.weapons[1] === targetLegend.weapons[1]) {
        w2Status = 'correct'; // Exact slot
    } else if (targetLegend.weapons.includes(guess.weapons[1])) {
        w2Status = 'partial'; // Wrong slot, but target has it
    }
    row.appendChild(createBox(guess.weapons[1], w2Status));

    // 5. Highest Stat
    const statMatch = (guess.highestStat || "N/A") === (targetLegend.highestStat || "N/A");
    row.appendChild(createBox(guess.highestStat || "N/A", statMatch ? 'correct' : 'wrong'));

    // 6. Origin
    const originMatch = (guess.origin || "N/A") === (targetLegend.origin || "N/A");
    row.appendChild(createBox(guess.origin || "N/A", originMatch ? 'correct' : 'wrong'));

    // 7. Hobby
    const hobbyMatch = (guess.hobby || "N/A") === (targetLegend.hobby || "N/A");
    row.appendChild(createBox(guess.hobby || "N/A", hobbyMatch ? 'correct' : 'wrong'));

    // 8. Year Added (With higher/lower arrows)
    const guessYear = guess.yearAdded || 0;
    const targetYear = targetLegend.yearAdded || 0;
    let yearStatus = 'wrong';
    let yearText = guessYear;

    if (guessYear === targetYear) {
        yearStatus = 'correct';
    } else if (guessYear > targetYear) {
        yearText = `${guessYear} ⬇️`; // Target is older
    } else {
        yearText = `${guessYear} ⬆️`; // Target is newer
    }
    row.appendChild(createBox(yearText, yearStatus));

    // Add the row to the screen (top of the list)
    container.insertBefore(row, container.firstChild);
}

// Helper to generate the HTML squares
function createBox(text, statusClass) {
    const box = document.createElement('div');
    box.className = `guess-box ${statusClass}`;
    box.innerText = text;
    return box;
}

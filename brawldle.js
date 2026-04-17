// 1. Game State Variables
let targetLegend = null;
let guesses = []; // This will store the actual objects of legends guessed
let hasWon = false;

document.addEventListener('DOMContentLoaded', () => {
    // --- DAILY SEED LOGIC ---
    // This picks the same legend for everyone based on the date
    const today = new Date().setHours(0, 0, 0, 0);
    const seed = today % legends.length; 
    targetLegend = legends[seed];

    // --- CUSTOM DROPDOWN LOGIC ---
    const input = document.getElementById('brawldle-guess');
    const dropdown = document.getElementById('custom-dropdown');

    input.addEventListener('input', () => {
        const val = input.value.toLowerCase();
        dropdown.innerHTML = ''; // Clear previous items
        
        if (val.length > 0) {
            // Filter legends that start with the typed letter(s)
            const matches = legends.filter(l => l.name.toLowerCase().startsWith(val));
            
            if (matches.length > 0) {
                dropdown.style.display = 'block';
                matches.forEach(legend => {
                    const item = document.createElement('div');
                    item.className = 'dropdown-item';
                    item.innerText = legend.name;
                    
                    // When user clicks a name in the list
                    item.onclick = () => {
                        input.value = legend.name;
                        dropdown.style.display = 'none';
                        makeGuess(); // Auto-submit when clicked
                    };
                    dropdown.appendChild(item);
                });
            } else {
                dropdown.style.display = 'none';
            }
        } else {
            dropdown.style.display = 'none';
        }
        loadProgress();
    });

    // Close dropdown if user clicks anywhere else
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            dropdown.style.display = 'none';
        }
    });
});

// 2. The Main Guess Function
window.makeGuess = () => {
    if (hasWon || guesses.length >= 8) return;

    const input = document.getElementById('brawldle-guess');
    const guessName = input.value.trim();
    const guess = legends.find(l => l.name.toLowerCase() === guessName.toLowerCase());

    if (!guess) return alert("Legend not found!");
    if (guesses.some(g => g.id === guess.id)) return alert("Already guessed!");

    guesses.push(guess);
    renderGuessRow(guess);
    input.value = ""; // Clear search bar

    saveProgress();

    // Check Win/Loss
    if (guess.id === targetLegend.id) {
        hasWon = true;
        setTimeout(() => showResultModal(true), 3500); // Wait for animation
    } else if (guesses.length >= 8) {
        setTimeout(() => showResultModal(false), 3500);
    }
};

// 3. Render the Guess Row (The "Wordle" visual)
function renderGuessRow(guess) {
    const container = document.getElementById('guess-container');
    const row = document.createElement('div');
    row.className = 'brawldle-grid';

    const compare = (v1, v2) => v1 === v2 ? 'correct' : 'wrong';

    // Build the data for the 8 boxes
    const results = [
        { text: `<img src="${guess.image}" class="legend-icon">`, status: compare(guess.id, targetLegend.id) },
        { text: guess.gender, status: compare(guess.gender, targetLegend.gender) },
        { text: guess.weapons[0], status: getWeaponStatus(guess.weapons[0], 0) },
        { text: guess.weapons[1], status: getWeaponStatus(guess.weapons[1], 1) },
        { text: guess.highestStat, status: compare(guess.highestStat, targetLegend.highestStat) },
        { text: guess.origin, status: compare(guess.origin, targetLegend.origin) },
        { text: guess.hobby, status: compare(guess.hobby, targetLegend.hobby) },
        { text: getYearText(guess.yearAdded), status: compare(guess.yearAdded, targetLegend.yearAdded) }
    ];

    results.forEach((res, i) => {
        const box = document.createElement('div');
        box.className = 'guess-box';
        box.innerHTML = res.text;
        row.appendChild(box);

        // SLOW FLIP ANIMATION
        setTimeout(() => {
            box.classList.add(res.status);
            box.style.transform = "rotateX(360deg)";
        }, i * 400); // Staggered delay
    });

    container.insertBefore(row, container.firstChild);
}

// 4. Logic Helpers
function getWeaponStatus(weapon, index) {
    if (targetLegend.weapons[index] === weapon) return 'correct';
    if (targetLegend.weapons.includes(weapon)) return 'partial';
    return 'wrong';
}

function getYearText(year) {
    if (year === targetLegend.yearAdded) return year;
    return year > targetLegend.yearAdded ? `${year} ⬇️` : `${year} ⬆️`;
}

// 5. Modal & Sharing Logic
function showResultModal(isWin) {
    const modal = document.getElementById('modal-overlay');
    document.getElementById('modal-title').innerText = isWin ? "GGs! You got it!" : "Unlucky!";
    document.getElementById('modal-info').innerText = `The legend was ${targetLegend.name}`;
    modal.style.display = 'flex';
}

window.copyResults = () => {
    let emojiText = `Brawldle ${new Date().toLocaleDateString()}\n${guesses.length}/8\n\n`;
    
    // This builds the emoji grid for sharing
    guesses.forEach(g => {
        let rowEmojis = "";
        // Simple logic: check if the property matches the target
        rowEmojis += g.id === targetLegend.id ? "🟩" : "⬛";
        rowEmojis += g.gender === targetLegend.gender ? "🟩" : "⬛";
        // Weapons (Correct slot = Green, Wrong slot = Yellow)
        rowEmojis += targetLegend.weapons[0] === g.weapons[0] ? "🟩" : (targetLegend.weapons.includes(g.weapons[0]) ? "🟨" : "⬛");
        rowEmojis += targetLegend.weapons[1] === g.weapons[1] ? "🟩" : (targetLegend.weapons.includes(g.weapons[1]) ? "🟨" : "⬛");
        rowEmojis += g.highestStat === targetLegend.highestStat ? "🟩" : "⬛";
        rowEmojis += g.origin === targetLegend.origin ? "🟩" : "⬛";
        rowEmojis += g.hobby === targetLegend.hobby ? "🟩" : "⬛";
        rowEmojis += g.yearAdded === targetLegend.yearAdded ? "🟩" : "⬛";
        
        emojiText += rowEmojis + "\n";
    });

    navigator.clipboard.writeText(emojiText + "\nPlay here: " + window.location.href);
    alert("Result copied to clipboard! Paste it to your friends!");
};
function saveProgress() {
    const gameState = {
        date: new Date().toLocaleDateString(),
        guesses: guesses, // This stores the array of legend objects
        hasWon: hasWon
    };
    localStorage.setItem('brawldle_progress', JSON.stringify(gameState));
}

function loadProgress() {
    const savedData = localStorage.getItem('brawldle_progress');
    
    if (savedData) {
        const state = JSON.parse(savedData);
        const today = new Date().toLocaleDateString();

        // Only load if the save is from today
        if (state.date === today) {
            hasWon = state.hasWon;
            // Loop through saved guesses and re-render them
            state.guesses.forEach(guess => {
                guesses.push(guess);
                renderGuessRow(guess);
            });

            // If they already won or lost, show the modal immediately
            if (hasWon || guesses.length >= 8) {
                showResultModal(hasWon);
            }
        } else {
            // It's a new day! Clear the old save
            localStorage.removeItem('brawldle_progress');
        }
    }
}

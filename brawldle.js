let targetLegend = null;
let guesses = [];
let hasWon = false;

document.addEventListener('DOMContentLoaded', () => {
    // 1. DAILY SEED LOGIC 
    // This makes the "Target" the same for everyone today
    const today = new Date().setHours(0, 0, 0, 0);
    const seed = today % legends.length; 
    targetLegend = legends[seed];

    // Setup autocomplete
    const dataList = document.getElementById('legend-names');
    legends.forEach(l => {
        let option = document.createElement('option');
        option.value = l.name;
        dataList.appendChild(option);
    });
});

window.makeGuess = () => {
    if (hasWon || guesses.length >= 8) return;

    const input = document.getElementById('brawldle-guess');
    const guess = legends.find(l => l.name.toLowerCase() === input.value.toLowerCase());

    if (!guess) return alert("Legend not found!");
    if (guesses.some(g => g.id === guess.id)) return alert("Already guessed!");

    guesses.push(guess);
    renderGuessRow(guess);
    input.value = "";

    if (guess.id === targetLegend.id) {
        hasWon = true;
        showResultModal(true);
    } else if (guesses.length >= 8) {
        showResultModal(false);
    }
};

function renderGuessRow(guess) {
    const container = document.getElementById('guess-container');
    const row = document.createElement('div');
    row.className = 'brawldle-grid';

    // Helper to compare values
    const compare = (val1, val2) => val1 === val2 ? 'correct' : 'wrong';

    // Define categories
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

        // Animate the "flip"
        setTimeout(() => {
            box.classList.add(res.status);
            box.style.transform = "rotateX(360deg)";
        }, i * 400);
    });

    container.insertBefore(row, container.firstChild);
}

// Logic for Weapon Partial Matches (Yellow)
function getWeaponStatus(weapon, index) {
    if (targetLegend.weapons[index] === weapon) return 'correct';
    if (targetLegend.weapons.includes(weapon)) return 'partial';
    return 'wrong';
}

function getYearText(year) {
    if (year === targetLegend.yearAdded) return year;
    return year > targetLegend.yearAdded ? `${year} ⬇️` : `${year} ⬆️`;
}

// 3. SHAREABLE RESULTS & MODAL
function showResultModal(isWin) {
    const modal = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    title.innerText = isWin ? "GGs! You found it!" : "Better luck next time!";
    
    document.getElementById('modal-info').innerText = `The legend was ${targetLegend.name}`;
    modal.style.display = 'flex';
}

window.copyResults = () => {
    let emojiGrid = `Brawldle ${new Date().toLocaleDateString()} ${guesses.length}/8\n`;
    // Logic to generate 🟩🟨⬛ emojis based on 'guesses' array could go here!
    navigator.clipboard.writeText(emojiGrid + "Check it out at: " + window.location.href);
    alert("Copied to clipboard!");
};

var time = 600;
function updateTime() {
    if (time > 0) time -= 1;
    else window.location.href = "leaderboard.html";
    minutes = parseInt(time / 60);
    seconds = time % 60;
    const timer = document.getElementById("timer");
    timer.textContent = `Timer: ${("0" + minutes).slice(-2)}:${(
        "0" + seconds
    ).slice(-2)}`;
}
setInterval(updateTime, 1000);

var score = 0;

var q1Answered = false;
function checkQ1Finished() {
    const scoreElement = document.getElementById("score");
    if (!q1Answered) {
        const a = document.getElementById("q1a");
        const b = document.getElementById("q1b");
        const answer = document.getElementById("q1Answer");

        if (a.checked) {
            answer.textContent = "Correct";
            q1Answered = true;
            score += 50;
        } else if (b.checked) {
            answer.textContent = "Incorrect";
            q1Answered = true;
        } else {
            alert("Please select an answer.");
        }
    }
    if (q1Answered && q2Answered)
        scoreElement.textContent = `Score: ${score}`;
}

var q2Answered = false;
function checkQ2Finished() {
    const scoreElement = document.getElementById("score");
    if (!q2Answered) {
        const a = document.getElementById("q2a");
        const b = document.getElementById("q2b");
        const answer = document.getElementById("q2Answer");

        if (a.checked && b.checked) {
            answer.textContent = "Correct";
            q2Answered = true;
            score += 50;
        } else if (a.checked || b.checked) {
            answer.textContent = "Incorrect";
            q2Answered = true;
            score += 25;
        } else {
            alert("Please select an answer.");
        }
    }

    if (q1Answered && q2Answered)
        scoreElement.textContent = `Score: ${score}`;
}


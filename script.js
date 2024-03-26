document.getElementById('submit').addEventListener('click', function() {
    var selectedChoice = document.querySelector('input[name="choice"]:checked').value;
    var resultText = "Incorrect. AI, while advanced, is not the same as a human.";
    if(selectedChoice === "No") {
        resultText = "Correct! AI, despite its advancements, is not the same as a human.";
    }
    document.getElementById('result').innerText = resultText;
});

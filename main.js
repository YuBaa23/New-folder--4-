// Declare a global variable to store the random number
var randomNumber;
var input = document.getElementById("inp");
// Generate the random number when the page loads
window.onload = function () {
  // Generate a random number between 1 and 100
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random number generated:", randomNumber);
  input.focus();
};

// Function to check the user's number
function checkNumber() {
  var userNumber = parseInt(input.value);
  var chancesElement = document.querySelector(".chances");
  var chances = parseInt(chancesElement.textContent);
  var button = document.querySelector(".btn");
  var lowHieight = document.querySelector(".lowHieight");

  if (chances  > 0) {
    if (userNumber === randomNumber) {
      lowHieight.style.display = "flex";
      lowHieight.innerHTML = "you won the game ";
      lowHieight.style.color = "blue";
      lowHieight.style.fontSize = "20px";
      input.value = "";
      chancesElement.textContent = 7;
    } else {
      if (userNumber > randomNumber) {
        lowHieight.style.display = "flex";
        lowHieight.innerHTML = "your guess is height !";
        lowHieight.style.fontSize = "small";
        lowHieight.style.color = "red";
      } else if (userNumber < randomNumber) {
        lowHieight.style.display = "flex";
        lowHieight.innerHTML = "your guess is low !";
        lowHieight.style.fontSize = "small";
        lowHieight.style.color = "red";
      } else {
        lowHieight.style.display = "flex";
        lowHieight.innerHTML = "Please enter a number !";
        lowHieight.style.fontSize = "small";
        lowHieight.style.color = "red";
      }
      if (lowHieight.innerHTML !== "Please enter a number !") {
        chancesElement.textContent = chances - 1;
      }
    }
  } else {
    lowHieight.style.display = "flex";
    lowHieight.innerHTML = "You've run out of chances! ";
    lowHieight.style.fontSize = "small";
    lowHieight.style.color = "red";
    input.value = "";
    chancesElement.textContent = 7;

    // Change button inner HTML to "Restart"
    button.innerHTML = "Restart";

    // Add event listener to button to reload the game
    button.addEventListener("click", restartGame);
  }
}   
// Function to restart the game
function restartGame() {
  // Reload the page
  location.reload();
}

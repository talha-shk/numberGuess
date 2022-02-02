var min = window.sessionStorage.getItem("value1");
var max = window.sessionStorage.getItem("value2");
var val3 = window.sessionStorage.getItem("iterate");
var min_elem = document.getElementById("min");
var max_elem = document.getElementById("max");
var it = document.getElementById("iteration");
min_elem.innerHTML = min;
max_elem.innerHTML = max;
it.innerHTML = val3;
// copy codee -----------

var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var answer =
  Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) +
  parseInt(min);
console.log("answer", answer);

var no_of_guesses = 0;
var guessed_nums = [];

function play() {
  if (no_of_guesses < parseInt(val3)) {
    var user_guess = document.getElementById("inp").value;
    if (user_guess < parseInt(min) || user_guess > parseInt(max)) {
      alert("Input value is out of range");
    } else {
      guessed_nums.push(user_guess);
      no_of_guesses += 1;

      if (user_guess < answer) {
        msg1.textContent = "Your guess is too low.";
        msg2.textContent = "No. of guesses: " + no_of_guesses;
        // msg3.textContent = "Guessed numbers are: " + guessed_nums;
      } else if (user_guess > answer) {
        msg1.textContent = "Your guess is too high.";
        msg2.textContent = "No. of guesses: " + no_of_guesses;
        // msg3.textContent = "Guessed numbers are: " + guessed_nums;
      } else if (user_guess == answer) {
        msg1.textContent = "Hurray! You win!";
        msg1.style.color = "green";
        msg2.textContent = "The number was: " + answer;
        // msg3.textContent =
        //   "You guessed it in " + no_of_guesses + " guesses";
        document.getElementById("btn").style.display = "none";
        document.getElementById("btn2").style.display = "block";
      }
    }
  } else {
    // alert("Exceed");
    document.getElementById("inp").disabled = true;
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn2").style.display = "block";
    msg3.textContent =
      "maximum number of iterations has been exceeded, Please try again";
    msg3.style.color = "red";
    msg1.style.display = "none";
    msg2.style.display = "none";
  }
}
function Again() {
  window.location = "index.html";
  window.sessionStorage.removeItem("value1");
  window.sessionStorage.removeItem("value2");
  window.sessionStorage.removeItem("iterate");
}
var remove = document.getElementById("inp");
remove.addEventListener("keyup", function () {
  document.getElementById("mid").style.display = "none";
});

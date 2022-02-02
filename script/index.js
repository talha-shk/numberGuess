document.getElementById("btn").onclick = function () {
  var number1 = document.getElementById("inp1").value;
  var number2 = document.getElementById("inp2").value;
  var iterate = document.getElementById("inp3").value;
  if (number1 === "" || number2 === "" || iterate === "") {
    alert("Values mising");
  } else {
    window.sessionStorage.setItem("value1", number1);
    window.sessionStorage.setItem("value2", number2);
    window.sessionStorage.setItem("iterate", iterate);
    location.href = "game.html";
  }
};

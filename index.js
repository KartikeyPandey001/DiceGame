var num2 = Math.floor(Math.random() * 6 + 1);
var num1 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img1").setAttribute("src", `./dice${num1}.png`);
document.querySelector(".img2").setAttribute("src", `./dice${num2}.png`);
if (num2 > num1) {
  document.querySelector("h2").innerHTML = "Player 2 wins	&#128681";
} else if (num1 > num2) {
  document.querySelector("h2").innerHTML = "Player 1 wins	&#128681";
} else {
  document.querySelector("h2").innerHTML = "Draw &#129309";
}
document.addEventListener("DOMContentLoaded", function () {
  const refreshButton = document.getElementById("refreshButton");

  refreshButton.addEventListener("click", function () {
    location.reload(); // This line will refresh the page
  });
});

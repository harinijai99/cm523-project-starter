/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const start = document.getElementById("start");

start.addEventListener('click', showMessage);

function showMessage() {
  window.alert(["Hope this helped! Always remember it's a bad day not a bad life!"]);
}

const end = document.getElementById("end");

end.addEventListener('click', showText);

function showText() {
  window.alert(["If these tactics were'nt sufficient we have more resources for you. You got this!"]);
}
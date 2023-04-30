/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


/* const begin = document.getElementById("begin");
/*let name = window.prompt("Enter your name");

begin.addEventListener('click', prompt("Enter your name")); */

/*const userInput = document.getElementById("name");*/
/* const start = document.getElementById("start"); */


/*const start = document.getElementById("start"); 

start.addEventListener('click', showMessage);

/*function showMessage() {
  window.alert(["Hope this helped! Always remember it's a bad day not a bad life!"]);
} */

/*function showMessage() {
  let inputText = document.getElementById("name"); 
  alert(inputText.value);
}

const end = document.getElementById("end");

end.addEventListener('click', showText);

function showText() {
  window.alert(["If these tactics were'nt sufficient we have more resources for you. You got this!"]);
} */

try
{
begin.addEventListener('click',getValue);
}
catch 
{

}
try
{
start.addEventListener('click', Start);
}
catch {

}
try
{
end.addEventListener('click', End);
}
catch {}

function getName() {
  let value = document.getElementById("name").value;
  return value; 
}

function getValue() {
  myValue = getName(); 
  localStorage.setItem("name", myValue);
}


function Start() {
    let userName = localStorage.getItem("name");
    alert(`${userName} hope you have a good day!`);
   
    //window.location.href("Location")
  }

  function End() {
    let userName = localStorage.getItem("name");
    alert(`Sorry, ${userName} If these tactics were'nt sufficient we have more resources for you. You got this!`);
   /* window.alert(["If these tactics were'nt sufficient we have more resources for you. You got this!"]);*/
  }

  let total = 0

document.querySelector('input').addEventListener('keyup', function() {
    fiftyPercent()
    thirtyPercent()
    twentyPercent()
})

function fiftyPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    total = income * .5
    document.querySelector('#fifty').innerText = "$" + total
}

function thirtyPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    total = income * .3
    document.querySelector('#thirty').innerText = "$" + total
}

function twentyPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    total = income * .2
    document.querySelector('#twenty').innerText = "$" + total
}


/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

//Reference Message prompt:
// https://www.atatus.com/blog/what-is-javascript-localstorage-a-complete-guide-for-beginners/#:~:text=setItem%20%28%29%3A%20This%20method%20is%20used%20to%20add,used%20to%20clear%20out%20all%20of%20the%20storage. 
// https://www.w3schools.com/jsref/jsref_try_catch.asp 

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
    alert(`Hey ${userName} always remember that better days are ahead! Hope these resources helped!`);
   
    
  }

  function End() {
    let userName = localStorage.getItem("name");
    alert(`Sorry, ${userName} If these tactics were'nt sufficient we have more resources for you. You got this!`);
  } 


  // 50/30/20 CALCULATOR 
  // References
  // https://codepen.io/tae918/pen/PoOVzxp 

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


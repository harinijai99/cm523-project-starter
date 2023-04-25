/* QUIZ */

/* Questions */

  const Questions = [{
    id: 0,
    q: "When do mental health symptoms begin in most Americans? ",
    a: [{ text: "Ages 14 - 18", isCorrect: false },
        { text: "Ages 18 - 22", isCorrect: true },
        { text: "Ages 22 - 25", isCorrect: false },
        { text: "Ages 25 and above", isCorrect: false }
    ]

},
{
    id: 1,
    q: " Which mental disorder was reported to affect student academics the most",
    a: [{ text: "Depression", isCorrect: false, isSelected: false },
        { text: "Anxiety", isCorrect: false },
        { text: "Eating disorder", isCorrect: false},
        { text: "ADHD", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What percentage of college students in America use resources or services to address mental health issues?",
    a: [{ text: "10% - 20 %", isCorrect: false },
        { text: "20% - 30%", isCorrect: true },
        { text: "30% - 40%", isCorrect: false },
        { text: "40% - 50%", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What was reported as the most common cause of anxiety among college students",
    a: [{ text: "Pressure to achieve", isCorrect: true },
        { text: "Adapting to change", isCorrect: false },
        { text: "Lack of sleep", isCorrect: false },
        { text: "Low self-esteem ", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What do you think was reported as, the most common mental health symptom brought on during the pandemic",
    a: [{ text: "Isolation", isCorrect: false },
        { text: "Stress/Anxiety", isCorrect: true },
        { text: "Depression", isCorrect: false },
        { text: "Fear", isCorrect: false }
    ]

},
{
    id: 5,
    q: "In which year did a majority of college students in America face issues relating to mental health?",
    a: [{ text: "2019", isCorrect: false },
        { text: "2022", isCorrect: false },
        { text: "2020", isCorrect: false },
        { text: "2021", isCorrect: true }
    ]

}

];
/* Option selection */

let start = true;

function answer(id) {

let result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");


question.innerText = Questions[id].q;

const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');



op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

let selected = "";


op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#E11D74";
    op2.style.backgroundColor = "#fadede";
    op3.style.backgroundColor = "#fadede";
    op4.style.backgroundColor = "#fadede";
    selected = op1.value;
});


op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#fadede";
    op2.style.backgroundColor = "#E11D74";
    op3.style.backgroundColor = "#fadede";
    op4.style.backgroundColor = "#fadede";
    selected = op2.value;
});


op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#fadede";
    op2.style.backgroundColor = "#fadede";
    op3.style.backgroundColor = "#E11D74";
    op4.style.backgroundColor = "#fadede";
    selected = op3.value;
});


op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#fadede";
    op2.style.backgroundColor = "#fadede";
    op3.style.backgroundColor = "#fadede";
    op4.style.backgroundColor = "#E11D74";
    selected = op4.value;
});

/* Evaluation */

const evaluate = document.getElementsByClassName("evaluate");


evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "You are right!";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Oh no, that ain't right!";
        result[0].style.color = "red";
    }
});
}

if (start) {
answer("0");
}

/* Next button */

const next = document.getElementsByClassName('next')[0];
let id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 5) {
    id++;
    answer(id);
    console.log(id);
}

}); 


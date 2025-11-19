const container = document.querySelector(".container");
const questioncontainer = document.querySelector(".questioncontainer");
const btnn = document.querySelector(".btnn");
const btns = document.querySelectorAll(".btn");
const optionscontainer = document.querySelector(".optionscontainer");
const resultscheck = document.querySelector(".resultscheck");
const submit = document.querySelector(".submit");

const user = [
  {
    question: "How many hours are in a day?",
    options: ["12", "24", "36", "48"],
    answer: "24",
  },
  {
    question: "What color do you get when you mix red and blue?",
    options: ["Green","Brown", "Orange", "Purpule"],
    answer: "Purpule",
  },
  {
    question: "what is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Artic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "How many sides does a triangle have?",
    options:["2", "3", "4", "6"] ,
    answer: "3",
  },
   {
    question: "Which planet is closest to the Sun?",
    options: ["venus", "Earth", "Mecury", "Mars"],
    answer: "Mecury",
  },
   {
    question: "How many days are in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
   {
    question: "Which animal is known as the 'king of the jungle'?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    answer: "Lion",
  },
   {
    question: "What is 5 + 7?",
    options:["10", "12", "13", "15"] ,
    answer: "12",
  },
   {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
   {
    question: "What is the capital of France?" ,
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris" ,
  }
];

btns.forEach((button, i) => {
  button.addEventListener("click", () => display(i));
});

 let score = 0;

function display(index) {
  resultscheck.innerHTML = "";
  const ques = user[index].question;
  questioncontainer.textContent = ques;

  optionscontainer.innerHTML = "";
  const options = user[index].options;
  options.forEach((option) => {
    const optionbtn = document.createElement("button");
    optionscontainer.appendChild(optionbtn);
    optionbtn.textContent = option;
    optionbtn.classList.add("option-btn");
    optionbtn.addEventListener("click", () => {
      const ans = user[index].answer;
      if (option === ans) {
        const para = document.createElement("p");
        para.classList.add("para");
        resultscheck.innerHTML = "";
        para.textContent += "Correct";
        resultscheck.appendChild(para);
        score++
      } else {
        const para = document.createElement("p");
        para.classList.add("para");
        resultscheck.innerHTML = "";
        para.textContent += "Wrong";
        resultscheck.appendChild(para);
      }
    });
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault(); 
  clear();
});

function clear() {
  container.innerHTML = "";
  const tryagain = document.createElement("div");
  tryagain.classList.add("final-score");

  const title = document.createElement("h2");
  title.textContent = "Quiz Challenge"
  tryagain.appendChild(title);

  const resultsEl = document.createElement("h3");
  resultsEl.textContent = ` Your score : ${score}/10`;
  tryagain.appendChild(resultsEl)
  resultsEl.classList.add("results")

   const restart = document.createElement('button');
   restart.textContent = 'Play again';
   restart.addEventListener('click', () => location.reload());
   tryagain.appendChild(restart);
   restart.classList.add("restart");

    container.appendChild(tryagain)
}


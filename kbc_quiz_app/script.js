const csMcq = [
  {
    id: 1,
    question: "Which one is the brain of the computer?",
    options: ["CPU", "RAM", "Hard Disk", "GPU"],
    answer: "CPU"
  },
  {
    id: 2,
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    id: 3,
    question: "What is the binary representation of the decimal number 5?",
    options: ["101", "110", "111", "100"],
    answer: "101"
  },
  {
    id: 4,
    question: "Which of the following is NOT an operating system?",
    options: ["Linux", "Windows", "Oracle", "macOS"],
    answer: "Oracle"
  },
  {
    id: 5,
    question: "Which time complexity is the fastest?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(1)"
  }
];


let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const scoreBox = document.getElementById("scoreBox");


const startBtn = document.getElementById("startBtn");
const startInfo = document.getElementById("startInfo");
startBtn.addEventListener("click", startQuiz);

function startQuiz(){
  startBtn.remove();
  startInfo.remove();

  const q = csMcq[currentQuestion];
  question.textContent = q.question;
  options.innerHTML = "";

  q.options.forEach( option => {
    const btn = document.createElement("button");
    btn.textContent = option;

     btn.onclick = () => {
      if (option === q.answer) {
        score++;
      }

       nextQuestion();
    };
    options.appendChild(btn)
  })

  
  
}

function nextQuestion(){
currentQuestion++;
   
  if (currentQuestion < csMcq.length) {
    startQuiz()
  } else {
    showScore();
  }
}


function showScore() {
  document.getElementById("quiz-container").classList.add("hide");
  scoreBox.classList.remove("hide");

  scoreBox.textContent = `Your Score: ${score} / ${csMcq.length}`;
}





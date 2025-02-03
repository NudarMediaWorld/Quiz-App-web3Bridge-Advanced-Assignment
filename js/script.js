// Selecting all required elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let timeValue = 15;
let queCount = 0;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restartQuizBtn = resultBox.querySelector(".buttons .restart");
const quitQuizBtn = resultBox.querySelector(".buttons .quit");
const nextBtn = document.querySelector("footer .next_btn");
const bottomQuesCounter = document.querySelector("footer .total_que");

// Show info box when start button is clicked
startBtn.onclick = () => {
  infoBox.classList.add("activeInfo");
};

// Hide info box when exit button is clicked
exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
};

// Start quiz when continue button is clicked
continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  initializeQuiz();
};

// Restart quiz when restart button is clicked
restartQuizBtn.onclick = () => {
  resultBox.classList.remove("activeResult");
  quizBox.classList.add("activeQuiz");
  resetQuiz();
  initializeQuiz();
};

// Reload page when quit button is clicked
quitQuizBtn.onclick = () => {
  window.location.reload();
};

// Show next question when next button is clicked
nextBtn.onclick = () => {
  if (queCount < randomizedQuestions.length - 1) {
    queCount++;
    updateQuiz();
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

// Initialize the quiz with the first question and timers
function initializeQuiz() {
  randomizeQuestions(questions); // Shuffle questions and options before starting
  showQuestions(queCount);
  queCounter();
  startTimer(timeValue);
  startTimerLine(widthValue);
}

// Reset quiz variables
function resetQuiz() {
  timeValue = 15;
  queCount = 0;
  userScore = 0;
  widthValue = 0;
}

// Update the quiz with the next question and reset timers
function updateQuiz() {
  showQuestions(queCount);
  queCounter();
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Time Left";
  nextBtn.classList.remove("show");
}

// Show questions and options
function showQuestions(index) {
  const queText = document.querySelector(".que_text");
  let queTag = `<span>${randomizedQuestions[index].question}</span>`;
  let optionTag = randomizedQuestions[index].options
    .map(option => `<div class="option"><span>${option}</span></div>`)
    .join("");
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;

  optionList.querySelectorAll(".option").forEach(option => {
    option.onclick = () => optionSelected(option);
  });
}

// Handle option selection
function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = randomizedQuestions[queCount].answer;
  let allOptions = optionList.children.length;

  if (userAns === correctAns) {
    userScore++;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    highlightCorrectAnswer(correctAns);
  }

  disableOptions();
  nextBtn.classList.add("show");
}

// Highlight the correct answer
function highlightCorrectAnswer(correctAns) {
  for (let i = 0; i < optionList.children.length; i++) {
    if (optionList.children[i].textContent === correctAns) {
      optionList.children[i].classList.add("correct");
      optionList.children[i].insertAdjacentHTML("beforeend", tickIconTag);
    }
  }
}

// Disable all options
function disableOptions() {
  for (let i = 0; i < optionList.children.length; i++) {
    optionList.children[i].classList.add("disabled");
  }
}

// Show result box
function showResult() {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  const scoreText = resultBox.querySelector(".score_text");
  let scoreTag = "";

  if (userScore > 40) {
    scoreTag = `<span>and congrats! 🎉, You got <p>${userScore}</p> out of <p>${randomizedQuestions.length}</p></span>`;
  } else if (userScore > 1) {
    scoreTag = `<span>and nice 😎, You got <p>${userScore}</p> out of <p>${randomizedQuestions.length}</p></span>`;
  } else {
    scoreTag = `<span>and sorry 😐, You got only <p>${userScore}</p> out of <p>${randomizedQuestions.length}</p></span>`;
  }

  scoreText.innerHTML = scoreTag;
}

// Start the timer for the quiz
function startTimer(time) {
  counter = setInterval(() => {
    timeCount.textContent = time > 9 ? time : `0${time}`;
    time--;
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Time Off";
      highlightCorrectAnswer(randomizedQuestions[queCount].answer);
      disableOptions();
      nextBtn.classList.add("show");
    }
  }, 1000);
}

function startTimerLine(time) {
  const totalTime = 550; // Total time for the timer in milliseconds
  counterLine = setInterval(() => {
    time += 1;
    let progressPercentage = (time / totalTime) * 100;
    timeLine.style.width = `${progressPercentage}%`;
    if (time >= totalTime) {
      clearInterval(counterLine);
    }
  }, 29);
}

// Update the question counter
function queCounter() {
  let totalQueCounTag = `<span><p>${queCount + 1}</p> of <p>${randomizedQuestions.length}</p> Questions</span>`;
  bottomQuesCounter.innerHTML = totalQueCounTag;
}

// Tick and cross icons
const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Function to randomize questions and their options
function randomizeQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  questions.forEach(q => {
    for (let i = q.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
    }
  });
  return questions;
}

// Randomize questions and store them in a new array
const randomizedQuestions = randomizeQuestions([...questions]);

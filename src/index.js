const setForm = document.querySelector(".set-num");
const guessForm = document.querySelector(".guess-num");
const userPickNum = document.querySelector(".guess-num input");
const answer = document.querySelector(".answer-num");

const ANSWER_NUM = "answerNum";

function setNumber(e) {
  e.preventDefault();
  const userRange = parseInt(setForm.querySelector("input").value);

  //   범위가 음수 또는 0 이하인지 확인
  if (userRange <= 0 || isNaN(userRange)) {
    alert("범위는 1 이상의 양수여야 하는디...");
    return;
  }

  //   유저가 선택한 범위 로컬 스토리지에 저장
  localStorage.setItem(ANSWER_NUM, userRange);

  //   0~유저가 선택한 범위까지 랜덤 숫자 생성
  const randomAnswer = Math.floor(Math.random() * userRange + 1);
  answerNumber(randomAnswer);
}

function guessNumber(e) {
  e.preventDefault();
  const userRange = parseInt(localStorage.getItem(ANSWER_NUM));
  const userPick = parseInt(userPickNum.value);

  if (isNaN(userPick) || userPick <= 0 || userPick > userRange) {
    alert("유효한 숫자를 입력하셈");
    return;
  }

  const randomAnswer = Math.floor(Math.random() * userRange + 1);
  answerNumber(randomAnswer, userPick);
  answer.classList.add("show");
}

function answerNumber(randomAnswer, userPick) {
  // 결과 표시
  const answerResult = answer.querySelector("b");
  answerResult.innerText = `당신이 선택한 정답은 ${userPick}, 정답은 ${randomAnswer}이에용!`;

  const result = answer.querySelector("h4");
  if (userPick === randomAnswer) {
    result.innerText = "이겼다!!!^0^/🥳🥳🥳";
  } else {
    result.innerText = "졌다😥😥😥";
  }
}

setForm.addEventListener("input", setNumber);
guessForm.addEventListener("submit", guessNumber);

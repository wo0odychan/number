let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let guessCount = 1;
      let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "해본 숫자 : ";
        // 카운트가 첫 턴인지 (guessCount === 1) ture라면 "해본 숫자 : " fales라면 카만히
    }
guesses.textContent += userGuess + " ";
if (userGuess === randomNumber) {
    lastResult.textContent = "어케 맞춤?";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
    // 유저의 선택이 랜덤넘버와 일치 시 "축하해요"가 나오고 업앤다운 박스는 사라지기
} else if (guessCount === 10) {
    lastResult.textContent = "게임오버!!! 다시해!";
    lowOrHi.textContent = "";
    setGameOver();
    // else if (만약) 카운트가 10번 다 사용했다면 "게임오버"가 나오고 업앤다운 박스 사라지기
} else {
    lastResult.textContent = "난 틀렸대 실패작이래";
    lastResult.style.backgroundColor = "red";
    //10턴 안되었고 틀렸을 때에 나오는 텍스트
    if (userGuess < randomNumber) {
        lowOrHi.textContent = "너무 낮아요 ('-')/";
        // 만약 유저의 선택이 랜덤넘버 보다 낮을 때 나오는 텍스트
    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "너무 높아요 /(._.)"
        // 만약 유저의 선택이 랜덤넘버 보다 높을 때 나오는 텍스트
    }

}
guessCount++; // 턴 카운트는 증가
guessField.value = "";  
guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);
// 선택을 클릭할때 위에 설정해둔 checkGuess 코드를 불러오기


function setGameOver() {
    guessField.disable = true;
    guessSubmit.disable = true;
    // disable 속성을 true로 설정해 비활성화 시키기! 
    resetButton = document.createElement('button');
    // resetButton 을 버튼으로 만들어
    resetButton.textContent = "새게임 하실?";
    // 텍스트도 집어넣은걸
    document.body.appendChild(resetButton);
    // 우리 html body의 맨 마지막에 넣기
    resetButton.addEventListener('click', resetGame);
    // 그리고 누르면 '리셋게임'이 활성화
};

function resetGame () {
    guessCount = 1; 
    // 턴 카운트를 다시 1로
const resetParas = document.querySelectorAll('.resultParas p');
for (const resetPara of resetParas)
 {
    resetPara.textContent = "";
}
// resultParas 안에 있는 모든걸 지우기
//  ** for...of 반복문: 반복은 프로그래밍에 있어서 매우 중요한 개념. 
// 특정 조건을 만족할 때까지 하나의 코드 조각을 계속 실행할 수 있게 함

resetButton.parentNode.removeChild(resetButton);
// 리셋버튼 사라지게 하기

guessField.disable = false;
guessSubmit.disable = false;
guessField.value = "";
guessField.focus();
// 비활성화 한것들 다시 활성화 시키기
lastResult.style.backgroundColor = "white";
// 배경 색 넣은거 하얗게
randomNumber = Math.floor(Math.random() * 100) + 1;
// 다른 번호로 재설정
}




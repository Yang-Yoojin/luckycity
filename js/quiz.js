// 겨울철 재난 안전 사고 대응 퀴즈 데이터
const quizzes = {
    coldwave: [
      {
        question: "한파 시 집 안에서 가장 중요한 대처 방법은?",
        options: ["난방기구 끄기", "창문 열어 환기", "틈새 막기", "물을 마시지 않기"],
        answer: 2,
      },
      {
        question: "한파 경보 시 외출 시 가장 적절한 복장은?",
        options: ["얇은 옷 여러 겹", "단일 두꺼운 옷", "장갑과 모자 없이 가볍게", "운동복"],
        answer: 0,
      },
    ],
    heavysnow: [
      {
        question: "폭설이 내릴 때 운전 시 가장 중요한 준비물은?",
        options: ["여분의 연료", "스노우 체인", "비상약", "스마트폰"],
        answer: 1,
      },
      {
        question: "폭설 시 외출이 불가피할 경우 가장 적절한 행동은?",
        options: ["가볍게 뛰기", "천천히 걸으며 넘어지지 않기", "도로 한가운데로 걷기", "얼음 위로 걷기"],
        answer: 1,
      },
    ],
    snowaccidents: [
      {
        question: "눈길에 미끄러졌을 때 가장 먼저 해야 할 일은?",
        options: ["일어서기", "걷기 연습", "도움 요청", "물기를 닦고 상처 확인"],
        answer: 3,
      },
      {
        question: "눈길에서 미끄러지지 않기 위한 최선의 신발은?",
        options: ["밑창이 매끄러운 신발", "스니커즈", "미끄럼 방지 신발", "샌들"],
        answer: 2,
      },
    ],
  };
  
  let currentQuiz = []; // 현재 퀴즈 데이터 저장
  let questionIndex = 0;
  let score = 0;
  
  // 퀴즈 주제 선택
  function selectQuiz(quizName) {
    currentQuiz = quizzes[quizName];
    questionIndex = 0;
    score = 0; // 점수 초기화
    displayQuestion();
  }
  
  // 질문 표시
  function displayQuestion() {
    if (!currentQuiz || currentQuiz.length === 0) {
      alert("퀴즈 데이터가 없습니다.");
      return;
    }
  
    const quiz = currentQuiz[questionIndex];
    document.getElementById("quizQuestion").textContent = quiz.question;
    const options = document.querySelectorAll(".option-btn");
    options.forEach((button, index) => {
      button.textContent = quiz.options[index];
      button.disabled = false; // 선택 버튼 활성화
    });
  }
  
  // 정답 선택
  function selectAnswer(selectedIndex) {
    const quiz = currentQuiz[questionIndex];
    const options = document.querySelectorAll(".option-btn");
  
    // 버튼 비활성화로 중복 선택 방지
    options.forEach((button) => (button.disabled = true));
  
    if (selectedIndex === quiz.answer) {
      score++; // 정답이면 점수 증가
      alert("정답입니다!");
    } else {
      alert(`틀렸습니다. 정답은 "${quiz.options[quiz.answer]}"입니다.`);
    }
  }
  
  // 다음 질문
  function nextQuestion() {
    if (questionIndex < currentQuiz.length - 1) {
      questionIndex++;
      displayQuestion();
    } else {
      displayScore(); // 점수 표시
    }
  }
  
  // 점수 표시
  function displayScore() {
    const totalQuestions = currentQuiz.length;
    alert(`퀴즈 완료! 점수: ${score}/${totalQuestions} (${((score / totalQuestions) * 100).toFixed(2)}%)`);
  }
  
  // 첫 번째 질문 표시
  window.onload = () => selectQuiz("coldwave"); // 기본 퀴즈 설정
  
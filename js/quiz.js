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
    {
      question: "폭설로 고립될 위험이 있는 상황에서 적절한 대처법은?",
      options: ["가족이나 지인에게 현재 위치를 알린다.", "이동 중 도로 상황은 무시한다.", "고립을 피하려고 무리하게 움직인다.", "차량에 비상용품을 두지 않는다."],
      answer: 0,
    },
    {
      question: "폭설로 인해 정전이 발생했을때 가장 적절한 대처법은?",
      options: ["비상용 랜턴이나 양초를 준비한다.", "전기 사용을 늘려 빠르게 전력을 회복하려 한다.", "난방이 없으니 문을 열어 통풍을 시킨다.", "냉장고 문을 자주 열어 필요한 음식을 꺼낸다."],
      answer: 0,
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
    {
      question: "빙판길을 걸을 때 가장 위험한 행동은?",
      options: ["천천히 걷기", "양손 자유롭게 하기", "보행 중 휴대전화 사용", "응달 지역 피하기"],
      answer: 2,
    },
    {
      question: "겨울철 빙판길에서 보폭은 어떻게 해야 안전한가?",
      options: ["평소보다 넓게", "평소보다 좁게", "평소와 동일하게", "상관없다"],
      answer: 1,
    },
  ],
  winterhike: [
    {
      question: "겨울철 산행을 계획할 때 가장 먼저 확인해야 할 사항은 무엇인가요?",
      options: ["산행 경로의 명소 위치", "날씨와 기온 예보", "산행 동반자의 체력 수준", "산행 후 맛집 정보"],
      answer: 1,
    },
    {
      question: "겨울 산행 시 적절한 복장으로 가장 중요한 것은 무엇일까요?",
      options: ["통풍이 잘되는 얇은 여름옷", "보온성이 높은 겹겹이 착용 가능한 옷", "무거운 옷 한 벌만 입는다.", "스타일이 좋은 옷을 선택한다."],
      answer: 1,
    },
    {
      question: "겨울 산행 중 저체온증이 의심될 때 가장 먼저 해야 할 일은 무엇일까요?",
      options: ["그대로 계속 산행을 이어간다.", "환자를 따뜻한 곳으로 옮기고 보온을 강화한다.", "눈을 녹여 마시도록 한다.", "주변에 도움을 요청하지 않는다."],
      answer: 1,
    },
    {
      question: "겨울 산행 중 눈길에서 미끄럼 사고를 예방하려면 가장 적절한 방법은 무엇인가요?",
      options: ["빠르게 걸어서 추위를 이긴다.", "아이젠이나 스패츠를 착용한다.", "하산할 때 가급적 뛰어내린다.", "손을 주머니에 넣고 걷는다."],
      answer: 1,
    },
    {
      question: "겨울 산행 전 필수로 준비해야 할 물품으로 적합하지 않은 것은 무엇일까요?",
      options: ["등산용 스틱", "충분한 물과 간식", "보온병에 담은 따뜻한 음료", "여름용 얇은 모자"],
      answer: 3,
    },
    {
      question: "겨울 산행 중 길을 잃었을 때 가장 올바른 행동은 무엇인가요?",
      options: ["산속에서 계속 이동해 빠져나온다.", "안전한 장소에서 구조를 요청하고 기다린다.", "도움을 요청하지 않고 스스로 해결하려 한다.", "체온 보호를 무시한다."],
      answer: 1,
    },
  ],
  blackice: [
    {
      question: "겨울철 블랙아이스 사고를 예방하기 위해 가장 중요한 것은 무엇인가요?",
      options: ["감속 운전과 차간 거리 유지", "차량 주차", "블랙아이스 위에서 급출발", "스노우 체인 제거"],
      answer: 0,
    },
    {
      question: "빙판길에서 갑작스러운 급브레이크 대신 무엇을 사용해야 하나요?",
      options: ["엔진 브레이크", "핸드브레이크", "급정지", "차량 비상등"],
      answer: 0,
    },
    {
      question: "블랙아이스 위에서 차량이 미끄러질 때 핸들을 어떻게 해야 하나요?",
      options: ["차체가 미끄러지는 방향으로 돌림", "반대 방향으로 돌림", "빠르게 중앙으로 돌림", "핸들을 고정"],
      answer: 0,
    },
    {
      question: "블랙아이스 사고 시 브레이크 사용법은?",
      options: ["여러 번 나눠서 밟는다.", "한 번에 깊게 밟는다.", "브레이크를 사용하지 않는다.", "브레이크 대신 엑셀을 밟는다."],
      answer: 0,
    },
    {
      question: "결빙구간에서 타이어가 미끄러질 때 브레이크를 강하게 밟으면 어떤 일이 발생할 수 있나요?",
      options: ["차량이 멈춘다.", "차량이 더 심하게 미끄러진다.", "차량이 자동으로 안정화된다.", "차량 속도가 빨라진다."],
      answer: 1,
    },
  ],
  electricity: [
    {
      question: "전선의 표면이 손상되었을 때 해야하는 일은?",
      options: ["절연테이프를 붙이거나 제품을 변경한다.", "투명한 박스 테이프로 붙여 사용한다.", "물 묻은 손으로 연결한다.", "무시하고 계속 사용한다."],
      answer: 0,
    },
    {
      question: "전기 안전사고를 예방하기 위한 행동으로 적절한 것은?",
      options: ["전기 제품의 전원 코드가 과열되지 않도록 한다.", "전기 제품을 장시간 사용하고 바로 끄지 않는다.", "전자기기를 주기적으로 물로 닦아준다.", "모든 전자 제품을 동시에 켠다."],
      answer: 0,
    },
    {
      question: "전기 안전사고를 예방하기 위한 행동으로 적절하지 않은 것은?",
      options: ["겨울은 춥기 때문에 전기매트를 끄지않고 계속 사용한다.", "먼지가 뭉치지는 않았는지 주기적으로 확인한다.", "소비전력이 높은 전자기기들은 하나의 멀티 콘센트에 꼽지 않는다.", "쓰지않는 전자제품은 꺼놓는다."],
      answer: 0,
    },
    {
      question: "겨울철 전기 사용 수칙으로 옳지 않은 것은?",
      options: ["건조한 겨울철에 가습기를 사용할 때는 콘센트와 가까이 두는 것이 좋다.", "눈이 녹으면 전선관으로 물이 들어오지는 않았는지 배전 설비를 확인해야 한다.", "전기매트는 돌돌 말아 보관한다.", "온열기구의 장시간 사용은 금해야한다."],
      answer: 0,
    },
    {
      question: "다음중 옳은 설명을 고르시오",
      options: ["전기장판은 안전하기 때문에 라텍스 메트리스 위에 올려놓고 사용해도 된다.", "한번에 많은 것을 충전해야 할때는 문어발 콘센트를 여러개 이어서 사용해도 된다.", "인터넷을 이용해 해외에서 구입한 전자제품은 바로 콘센트에 꽂아 사용해도 된다.", "전자제품 설명서를 읽고 안전수칙을 잘 지킨다."],
      answer: 3,
    },
  ],
  gasFire: [
    {
      question: "가스 누수의 확인이 가능한 방법은?",
      options: ["가스 누수 탐지기", "두꺼비집", "전기 계량기", "수도꼭지"],
      answer: 0,
    },
    {
      question: "가스안전사고를 예방하기 위한 안전 수칙으로 맞지 않는 것은?",
      options: ["가스 기기는 한번 설치하면 영구적이고 안전하기 때문에 신경쓰지 않아도 된다.", "가스 배관에 이상이 있을 경우 즉시 전문가에게 점검을 의뢰한다.", "가스 기기의 사용 후 밸브를 반드시 잠근다.", "가스 기기 근처에서 불꽃을 만들지 않는다."],
      answer: 0,
    },
    {
      question: "가스에 대한 설명으로 옳은 것은?",
      options: ["가스를 이용한 기기가 있는 곳은 꾸준히 환기를 시킨다.", "가스는 무색무취에 인체에 해롭지 않다.", "집에서 가스 냄새가 나는것은 정상적인 일이다.", "가스보일러는 전기보일러보다 안전하기 때문에 관리하지 않아도 된다."],
      answer: 0,
    },
    {
      question: "가스에 대한 설명으로 옳지 않은것은?",
      options: ["가스보일러나 가스레인지 주위에 라이터나 성냥등을 두어도 괜찮다.", "가스가 누출되지는 않았는지 냄새로 확인한다.", "LPG는 무거워서 바닥에 가라앉는다.", "LNG는 가볍기 때문에 천정쪽으로 올라간다."],
      answer: 0,
    },
    {
      question: "다음중 옳은 설명을 고르시오",
      options: ["가스가 들어있는 통은 튼튼하기 때문에 망치로 때려도 된다.", "가스 냄새가 난다면 라이터를 켜서 확인한다.", "환기를 시키기 위해 문을 열면 찬 바람이 들어오기 때문에 겨울철에는 환기를 시키지 않아도 된다.", "주기적으로 가스 안전점검을 받는다."],
      answer: 3,
    },
  ],
};

let currentQuiz = [];
let questionIndex = 0;
let score = 0;

// 퀴즈 주제 선택 및 랜덤화
function selectQuiz(quizName) {
  currentQuiz = quizzes[quizName];
  questionIndex = 0;
  score = 0; // 점수 초기화
  shuffleArray(currentQuiz); // 퀴즈를 랜덤 순서로 섞음
  displayQuestion();
}

// 질문 표시
function displayQuestion() {
  if (!currentQuiz || currentQuiz.length === 0) {
    alert("퀴즈 데이터가 없습니다.");
    return;
  }

  if (questionIndex >= currentQuiz.length) {
    displayScore(); // 모든 문제를 푼 후 점수 표시
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
  questionIndex++;
  displayQuestion();
}

// 점수 표시
function displayScore() {
  const totalQuestions = currentQuiz.length;
  alert(`퀴즈 완료! 점수: ${score}/${totalQuestions} (${((score / totalQuestions) * 100).toFixed(2)}%)`);
}

// 배열을 랜덤으로 섞는 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // 요소 위치를 교환
  }
}

// 첫 번째 질문 표시 (기본 설정)
window.onload = () => selectQuiz("winterhike"); // 기본 퀴즈를 설정

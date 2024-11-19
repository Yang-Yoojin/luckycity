// 검색 기능
function search() {
  const query = document.querySelector('.search-bar input').value.trim();
  if (!query) {
    alert("검색어를 입력하세요."); // 검색어가 비어있을 때 경고 메시지
    return;
  }
  window.location.href = `search-results.html?query=${encodeURIComponent(query)}`; // 검색 결과 페이지로 이동
}

// 로그인 기능
function login(event) {
  event.preventDefault(); // 폼 기본 동작(페이지 새로고침) 방지
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  if (!username || !password) {
    alert("아이디와 비밀번호를 입력하세요."); // 입력값 검증
    return;
  }
  alert("로그인되었습니다."); // 성공 메시지
  window.location.href = 'index.html'; // 메인 페이지로 이동
}

// 회원가입 기능
function signup(event) {
  event.preventDefault(); // 폼 기본 동작(페이지 새로고침) 방지
  const username = document.getElementById("signup-username").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  if (!username || !email) {
    alert("모든 필드를 입력하세요."); // 입력값 검증
    return;
  }
  alert("회원가입이 완료되었습니다."); // 성공 메시지
  window.location.href = 'login.html'; // 로그인 페이지로 이동
}

// 질문 목록에 새 질문 추가
function submitQuestion(event) {
  event.preventDefault(); // 폼 기본 동작(페이지 새로고침) 방지

  const title = document.getElementById("questionTitle").value.trim();
  const content = document.getElementById("questionContent").value.trim();

  if (!title || !content) {
    alert("제목과 내용을 입력하세요."); // 입력값 검증
    return;
  }

  const questionList = document.getElementById("questions"); // 질문 목록 가져오기
  const newQuestion = document.createElement("li"); // 새 질문 요소 생성

  // 현재 시간 추가
  const timestamp = new Date().toLocaleString(); // 현재 날짜와 시간 가져오기
  newQuestion.innerHTML = `<strong>${title}</strong><p>${content}</p><small>${timestamp}</small>`; // 질문 내용 추가
  questionList.appendChild(newQuestion); // 질문 목록에 추가

  // 입력 필드 초기화
  document.getElementById("questionTitle").value = '';
  document.getElementById("questionContent").value = '';
}

// 지역별 기상청 URL 매핑
const regionData = {
  "서울": "https://www.weather.go.kr/w/weather/forecast/short-term.do?stnId=108",
  "부산": "https://www.weather.go.kr/w/weather/forecast/short-term.do?stnId=159",
  "대구": "https://www.weather.go.kr/w/weather/forecast/short-term.do?stnId=143",
  "인천": "https://www.weather.go.kr/w/weather/forecast/short-term.do?stnId=112",
  "광주": "https://www.weather.go.kr/w/weather/forecast/short-term.do?stnId=156",
};

// 날씨 검색 기능
function searchWeather() {
  const locationInput = document.getElementById("location-input").value.trim(); // 사용자 입력값 가져오기
  const iframe = document.getElementById("weather-iframe"); // 날씨 iframe 요소 가져오기

  if (regionData[locationInput]) {
    // 지역에 해당하는 URL로 아이프레임 업데이트
    iframe.src = regionData[locationInput];
  } else {
    // 잘못된 지역 입력 시 기본 페이지로 설정
    alert("해당 지역의 정보를 찾을 수 없습니다. 기본 페이지로 이동합니다.");
    iframe.src = "https://www.weather.go.kr/w/index.do"; // 기본 URL 설정
  }
}

// 지역 자동완성 기능 (추가 옵션)
document.getElementById("location-input").addEventListener("input", function () {
  const inputValue = this.value.trim().toLowerCase(); // 입력값 소문자로 변환
  const suggestions = Object.keys(regionData).filter(region =>
    region.toLowerCase().startsWith(inputValue) // 입력값으로 시작하는 지역 필터링
  );

  // 추천 지역 콘솔 출력 (드롭다운 구현 가능)
  console.log("추천 지역:", suggestions);
});

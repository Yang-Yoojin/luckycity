function search() {
    const query = document.querySelector('.search-bar input').value;
    window.location.href = `search-results.html?query=${query}`;
  }
  
  function login(event) {
    event.preventDefault();
    alert('로그인되었습니다.');
    window.location.href = 'index.html';
  }
  
  function signup(event) {
    event.preventDefault();
    alert('회원가입이 완료되었습니다.');
    window.location.href = 'login.html';
  }

  // 질문 목록을 동적 추가 함수
  function submitQuestion(event) {
  event.preventDefault();

  // 제목과 내용 가져오기
  const title = document.getElementById("questionTitle").value;
  const content = document.getElementById("questionContent").value;

  // 새로운 질문 요소 생성
  const questionList = document.getElementById("questions");
  const questionItem = document.createElement("li");
  questionItem.innerHTML = `<strong>${title}</strong><p>${content}</p>`;
  questionList.appendChild(questionItem);

  // 입력 필드 초기화
  document.getElementById("questionTitle").value = '';
  document.getElementById("questionContent").value = '';
}

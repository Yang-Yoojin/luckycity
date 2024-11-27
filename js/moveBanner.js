let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  // 모든 슬라이드에서 active 클래스를 제거
  slides.forEach(slide => slide.classList.remove("active"));

  // 다음 슬라이드에 active 클래스 추가
  slideIndex = (slideIndex + 1) % slides.length; // 순환하도록 설정
  slides[slideIndex].classList.add("active");
}

// 일정 시간마다 슬라이드 변경 (3초 간격)
setInterval(showSlides, 3000);
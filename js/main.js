const keywordGroups = [
  { keywords: ["등산", "산","산행","moutain"], mappedValue: "겨울 산행" },
  { keywords: ["눈","눈밭","snow"], mappedValue: "폭설" },

  { keywords: ["전기","전기 사고"], mappedValue: "전기 안전사고" },
  { keywords: ["불","가스","가스 사고","화재"], mappedValue: "가스 안전사고" },
  
  { keywords: ["화재","전기","도로","도로 얼음","도로 미끄러움","눈길운전"], mappedValue: "블랙아이스" },
  { keywords: ["낙상","낙상 사고","미끄러움","빙판","눈길"], mappedValue: "빙판길" },

  { keywords: ["추움","추워"], mappedValue: "한파" },
];

function getMappedQuery(query) {
  // 배열에서 검색어에 해당하는 매핑 값을 찾음
  for (const group of keywordGroups) {
    if (group.keywords.includes(query)) {
      return group.mappedValue; // 매핑된 값 반환
    }
  }
  return query; // 매핑되지 않은 경우 원래 검색어 반환
}

// 검색 기능
function search() {
  let query = document.querySelector('.search-bar input').value.trim();
  if (!query) {
    alert("검색어를 입력하세요."); // 검색어가 비어있을 때 경고 메시지
    return;
  }
  // 키워드 맵핑 적용
  query = getMappedQuery(query);
  
  const results = searchData[query];
  
  if(!results){
    alert("아직 준비되지 못한 키워드입니다.")
    return;  
  }

const params = new URLSearchParams({
  query: query, // 검색어 전달
  results: JSON.stringify(results) // 검색 결과를 직렬화하여 전달
});
window.location.href = `search-results.html?${params.toString()}`;
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


// 검색 데이터
const searchData = {
  "폭설": {
    items: [
      { 
        type: "text", 
        title: "도로 주행 행동요령", 
        content: "도로가 미끄럽기 때문에 저속주행을 하고, 차간 거리를 충분히 유지하세요.\n급제동은 삼가해주세요.\n겨울용 타이어나 체인을 미리 준비해주세요." 
      },
      { 
        type: "text", 
        title: "정전 발생 행동요령", 
        content: "미리 비상용 랜턴, 양초, 보조 배터리 등을 준비해주세요.\n전력 회복이 더뎌질 수 있으니 전기 사용을 최소화해주세요.\n냉장고 내부 온도를 유지할 수 있도록 냉장고 문은 자주 열지말아주세요." 
      },
      { 
        type: "text", 
        title: "고립상황 대처", 
        content: "현재 위치를 가족이나 지인에게 알리고 연락이 닿지 않을 경우구조 요청을 하세요.\n이동이 필요하다면 도로 상황을 확인하고 안전한 경로로 이동하세요.\n차량에는 담요, 식량, 물, 랜턴 배터리 등과 같은비상용품을 구비해두세요." 
      },
      { 
        type: "text", 
        title: "제설 작업", 
        content: "집 앞, 건물 주변의 눈을 치워 미끄러짐 사고를 예방하세요.\n제설 작업 중에는 적절한 보온 장비를 착용하여 저체온증을 방지하세요.\n염화칼슘이나 모래를 활용하여 미끄러움을 방지할 수 있어요." 
      },
      { 
        type: "link", 
        title: "기상 정보 확인", 
        content: "지역 방송이나 기상정보를 지속적으로 확인해 상황변화에 대비하세요." ,
        link: "https://www.weather.go.kr/"
      },
      { 
        type: "video", 
        title: "폭설 애니메이션", 
        link: "video/snowFalls.mp4",
        content: "집 앞에 쌓인 눈을 치우던 곰에게 무슨 일이..?!", 
        videoPage: "educationVideo.html"
      },
      { 
        type: "quiz", 
        title: "퀴즈", 
        content: "관련 퀴즈를 풀어보아요", 
        link: "quiztest.html?quiz=heavysnow" 
      }
    ]
  },
  "겨울 산행": {
    items: [
      { 
        type: "text", 
        title: "산행 전 준비", 
        content: "기상청이나 관련 앱을 통해 산행 당일의 날씨를 확인하세요. 폭설, 강풍, 한파 등이 예상되면 산행을 '연기'하세요.\n자신과 일행의 체력에 맞는 경로를 선택하시고 산행 계획을 가족이나 친구에게 알려주세요." 
      },

      { 
        type: "text", 
        title: "적절한 복장과 필수 준비물", 
        content: "보온성이 높은 옷을 겹겹이 착용해주세요. 땀이 날 경우 쉽게 벗고 입을 수 있도록 하는 것이 중요합니다.\n아이젠이나 스패츠와같은 눈길 미끄럼 방지 장비를 착용하세요.\n두꺼운 장갑이나, 모자, 목도리 등 보온에 필요한 것을 챙겨주세요.\n따듯한 음료와, 물, 간단한 간식을 챙겨주세요.\n헤드램프, 배터리 충전기, 응급 키트 등의 안전 용품을 챙겨주세요." 
      },
      { 
        type: "text", 
        title: "저체온증 대비", 
        content: "저체온증이 의심되면 '즉시 산행을 중단'하고 따듯한 곳으로 이동하여 '따듯하게'해야합니다. 핫팩, 담요등을 사용해 체온을 유지하고 젖은옷은 제거하세요.\n구조 요청이 가능한 경우 즉시연락하세요." 
      },      { 
        type: "text", 
        title: "길을 잃었을 때 대처", 
        content: "무작정 이동하기 보단 안전한 장소를 찾아 구조를 요청하세요.\n핸드폰의 배터리를 아끼고 위치 정보를 구조대에게 전달하세요.\n바람을 막을 수 있는 곳에 머물러주세요.\n필요 시 주변의 나뭇가지 등을 활용해 임시 쉼터를 만드세요." 
      },
      { 
        type: "text", 
        title: "산행이 끝난 뒤", 
        content: "발이나 손에 동상 증상이 있는지 확인해주세요\n체온이 떨어졌을 경우 따듯한물과 음식을 섭취하며 몸을 회복하세요." 
      },
      { 
        type: "video", 
        title: "겨울 산행 애니메이션", 
        link: "video/snowMaoutain.mp4" ,
        content: "안전 수칙을 무시하고 등산하려던 곰에게 생긴 일",
        videoPage: "educationVideo.html"         
      },
      { 
        type: "quiz", 
        title: "퀴즈", 
        content: "관련 퀴즈를 풀어보아요", 
        link: "quiztest.html?quiz=winterhike" 
      }
    ]
  },
  "블랙아이스": {
    items: [
      { 
        type: "text", 
        title: "블랙아이스란?", 
        content: "검은 색의 얼음을 말하며 도로상에 얼어있는 얇은 얼음막입니다." 
      },{ 
        type: "text", 
        title: "사고 발생 시", 
        content: "차량이 미끄러질 경우, 핸들을 미끄러지는 방향으로 돌려 차체의 회전을 줄여주세요\n\n브레이크를 여러 번 나눠서 밟아 급제동을 피해주세요.\n\n갑작스러운 핸들 조작이나 브레이크는 상황을 악화시킬 수 있으므로 침착하게 해주세요.\n\n일반 도로보다 14배 더 미끄럽고, 눈길보다 6배 더 미끄러워 제어가 어렵기에 주의해야합니다." 
      },
      { 
        type: "text", 
        title: "주로 발생하는 장소", 
        content: "터널 입구와 출구\n고가도로와 교량\n그늘진 곡선도로,\n해안도로\n염화칼슘이 뿌려진 도로" 
      },
      { 
        type: "text", 
        title: "차량 관리", 
        content: "냉각수의 양과 상태를 확인하고 정기적으로 교체해주세요.\n\n배터리 성능 확인 및 장시간 주차 시 불필요한 장비(블랙박스, 내비게이션) 전원을 차단해주세요\n\n타이어 마모 상태 확인하고 겨울용 타이어로 교체해주세요\n\n 유지전조등, 브레이크등 등 차량 등화장치 점검 및 여분 준비브레이크 오일과 패드 상태를 확인해주세요\n\n브레이크 페달이 깊게 밀리는 현상이 있다면 즉시 정비해주세요"
      },
      { 
        type: "text", 
        title: "운전 요령", 
        content: "평소보다 속도를 줄이고 앞 차와의차간거리를 충분히 유지해주세요\n갑작스럽게 브레이크를 밟는 대신 여러 번 나누어 밟아주세요\n블랙아이스가 잘 생기는 구간은 주의해주세요\n빙판길이나 내리막길에서는 기어 변속을 이용해 속도를 줄여주세요." 
      },
      { 
        type: "video", 
        title: "블랙아이스 애니메이션", 
        link: "video/blackIce.mp4",
        content: "신나게 달리던 곰과 블랙아이스의 만남", 
        videoPage: "educationVideo.html"
      },
      { 
        type: "quiz", 
        title: "퀴즈", 
        content: "관련 퀴즈를 풀어보아요", 
        link: "quiztest.html?quiz=heavysnow" 
      }
    ]
  },"빙판길": {
    items: [
      { 
        type: "text", 
        title: "길에 빙판이 생기는 이유", 
        content: "낮은 기온이 물을 얼리면서 빙판이 형성되는데, 특히 밤사이 기온이 내려가면서 내린 눈이나 서리가 얼어붙어서 생깁니다.\n\n눈이 여러 번 밟히거나 차량의 통행으로 인해 압축되면 눈이 얼음처럼 단단해지며 빙판이 형성됨니다.\n\n햇빛이 잘 들지 않는 응당지역은 낮 동안에도 얼음이 녹지않아 빙판이 유지됩니다.\n\n배수시설이 부족하거나 경사로가 있는 도로는 녹은 눈이 다시 얼어 빙판이 되기 쉽습니다." 
      },
      { 
        type: "text", 
        title: "미끄러진 후 대처", 
        content: "넘어졌을때 급히 일어나려 하지 말고, '통증이 있는 부위를 확인'해주세요. 심한 통증이 있으면 주위에 도움을 요청합니다\n\n부기가 있는 부위에 '냉찜질'을 하여 염증을 줄여주세요. 부상 부위를 심장보다 높게 올려 부종을 방지할 수 있습니다.\n\n통증이지속되거나 부상이 의심될 경우, '즉시' 병원을 방문하여 정확한 진단을 받아주세요.\n\n고령자의 경우, 넘어졌을 때 주변의 도움을 받아 안전하게 이동해야합니다. 고관절 부상이 의심될 경우 합병증 예방을 위해 빠르게 치료를 받아야합니다." 
      },
      { 
        type: "text", 
        title: "예방", 
        content: "외출 전 가벼운 '스트레칭'으로 근육을 풀어줍니다.\n바닥에 홈이 파인 신발이나 마찰력이 높은 신발을 착용해야합니다. 등산화나 아이젠(눈길덧신) 사용을 고려합니다.\n평소보다 보폭을 10~20% 줄이고 천천히 걷습니다." 
      },
      { 
        type: "text", 
        title: "주의하기!", 
        content: "보행 중 휴대전화 사용을 자제해주세요\n양 손을 주머니에 넣지 말아주세요. 자유롭게 둡시다.\n응달 지역이나 경사진 도로는 피해주세요." 
      },

      { 
        type: "video", 
        title: "빙판길 애니메이션", 
        link: "video/slideCaution.mp4",
        content: "눈길에서는 곰처럼 달리지 않기로 해요", 
        videoPage: "educationVideo.html"
      },
      { 
        type: "quiz", 
        title: "퀴즈", 
        content: "관련 퀴즈를 풀어보아요", 
        link: "quiztest.html?quiz=snowaccidents" 
      }
    ]
  },"전기 안전사고": {
    items: [
      { 
        type: "text", 
        title: "전선 손상 시 대처", 
        content: "손상된 전선은 절대 무시하지 마시고 즉시 조치하세요.\n절연 테이프를 사용하거나 손상된 제품을 교체하세요.\n물이 묻은 손으로 전선에 접촉하거나 투명한 테이프로 임시 고정하는 것은 위험합니다." 
      },
      { 
        type: "text", 
        title: "전기 안전사고 예방하기", 
        content: "제품의 전원코드가 과열되지 않도록 주의하고 장시간 사용을 피해주세요.\n먼지가 쌓인 곳을 주기적으로 청소하여 화재를 예방하세요.\n소비전력이 높은 전자기기는 하나의 멀티 콘센트에 동시에 연결하지 말아주세요.\n전자제품을 사용하지 않을 때에는 전원을 차단해 사고를 예방합시다." 
      },
      { 
        type: "text", 
        title: "겨울철 전기 사용 수칙", 
        content: "건조한겨울철에 가습기를 사용할 때 콘센트와 멀리 떨어진 곳에 두세요.\n 눈이 녹아 배전 설비로 물이 스며들었는지 정기적으로 확인해주세요.\n전기매트는 장시간 사용을 지양하고 돌돌 말아 보관하여 손상되지 않도록 합시다.\n온열기구는과열을 방지하고 사용하지않을 때는 전원을 거두세요." 
      },
      { 
        type: "text", 
        title: "전기 장판 및 콘센트 사용", 
        content: "전기 장판은 라텍스 매트리스 위에 직접 올려서 사용하면 위헙합니다. 불이 날 가능성이 있어요\n여러 기기를 동시에 사용할 때, 문어발 콘센트를 여러 개 이어서 사용하지 마세요. 과열 및 화재의 원인이 됩니다." 
      },
      { 
        type: "text", 
        title: "해외 전자제품 사용 시 주의", 
        content: "" 
      },
      { 
        type: "video", 
        title: "전기 안전사고 애니메이션", 
        link: "video/electricityCaution.mp4",
        content: "곰처럼 코드를 한 곳에 꽂아두지 맙시다", 
        videoPage: "educationVideo.html"
      },

     { 
        type: "quiz", 
        title: "퀴즈", 
        content: "관련 퀴즈를 풀어보아요", 
        link: "quiztest.html?quiz=heavysnow" 
      }
    ]
  },"가스 안전사고":{
    items: [
      { 
        type: "text", 
        title: "가스 안전사고 예방 수칙", 
        content: "가스 기기를 사용하지 않을 때에는 밸브를 잠가야 합니다.\n정기 점검을 통해 가스 배관이나기기의 이상이 있는지 확인해야합니다.\n꾸준하게 환기하여 가스가 누적되는 것을 방지합니다.\n 가스 냄새가 날 경우 즉시 환기하고 전문가에게 연락합니다\n가스 기기 주벼에는 가연성 물질과 불을 두지 않습니다." 
      },
      { 
        type: "text", 
        title: "가스 누수 확인", 
        content: "가스 누수 탐지기를 사용하거나 냄새로 확인할 수 있습니다.\nLPG는 무거워서 바닥에 가라앉고, LNG는 가벼워서 천장 쪽으로 올라가므로, 각각의 위치를 주의하며 환기해주세요.\n가스 냄새가 날 경우, 라이터나 성냥같은 불꽃으로 확인하는 것은 '절대"
      },

      { 
        type: "text", 
        title: "가스 사고 대처 방안", 
        content: "즉시 문과 창문을 열어 환기해주세요\n물을 켜거나 전기 스위치를 작동하지마세요. 스파크가 나서 사고를 유발할 수도 있습니다.\n가스통은튼튼하지만 망치 등으로 충격을 가하면 위험합니다.\n가스통은 직사광선을피하고 통풍이 잘되는 곳에 보관해주세요." 
      },
      { 
        type: "text", 
        title: "겨울철 가스 사용 수칙", 
        content: "겨울철에도 환기가 필수적입니다. 찬바람으로인해 환기를 미루면 가스 중독 위험이높아집니다.\n가스 보일러도 정기점검이 필요하며, 관리를 소홀히 하면 사고 위헙니 있습니다" 
      },
      {
      type: "video", 
      title: "가스 안전사고 애니메이션", 
      link: "video/gasFireCaution.mp4",
      content: "마지막 점검일자가...?!!", 
      videoPage: "educationVideo.html"
    },
      { 
        type: "quiz", 
        title: "퀴즈", 
        content: "관련 퀴즈를 풀어보아요", 
        link: "quiztest.html?quiz=heavysnow" 
      }
    ]
  },
  "한파": {
    items: [
      { 
        type: "text", 
        title: "한파 발령 기준", 
        content: "한파주의보\n:아침기온이 영하 12도 이하로 내려갈 것이 예상될 때.\n전날보다 10도 이상 급격이 기온히 하강하여 영하 3도이하가 예상될때.\n냉해로 인해 심각한 피해가 우려될 때.\n\n한파경보\n아침 최저기온이 영하 15도 이하로 내려갈 것이 예상될대.\n전날 보다 15도 이상 급격히 기온히 하강하여 영하3도이하가 예상될 때\n냉해로 인한광범위한 피해가 우려될때." 
      },
      { 
        type: "text", 
        title: "한파 대비", 
        content: "외출 시 모자, 목도리, 장갑 등 방한 용품을 착용해주세요.\n수도관 동파를 에방하기위해 수도 계량기 보온재를 사용하고 외풀 시 수도꼭지를 살작 틀어 물을 흘려보내세요.\n보일러는 장시간 꺼두지 말고 약하게 가동하여 동파를 방지하세요." 
      },
      { 
        type: "text", 
        title: "한파 발생 중", 
        content: "신체 노출을 최소화하고 무리한 신체 활동을 피해주세요.\n미끄러운 길에서는 미끄럼 방지 장치가있는 신발을 착용하세요.\n노약자나 어린이는 외출을 자제하고 실내에서몸을 다듯하게 유지하세요." 
      },
      { 
        type: "text", 
        title: "한파 후속 조치", 
        content: "동파가 발생했을 경우, 온수로 천천히 해빙작업을 하세요. 급하게 녹이면 파열의 위험이 있습니다." 
      },
      { 
        type: "text", 
        title: "한파 시 주요 연락처", 
        content: "기상청: 131(기상정보확인)\n지방자치단체: 수도 동파 및 시설물 관련 문의, 소방서: 119(응급상황 발생 시)" 
      },  
      { 
        type: "quiz", 
        title: "관련 퀴즈", 
        content: "관련 퀴즈를 풀어보아요", 
        link: "quiztest.html?quiz=coldwave" 
      }
    ]
  },
  
};





const videos = [
    { title: "겨울 산행", src: "./video/snowMountain.mp4" },
    { title: "가스 안전", src: "./video/gasFireCaution.mp4" },
    { title: "전기 안전", src: "./video/electricityCaution.mp4" },
    { title: "빙판길 주의", src: "./video/slideCaution.mp4" },
    { title: "블랙아이스", src: "./video/blackIce.mp4" },
    { title: "폭설", src: "./video/snowFalls.mp4" }
];

// 동영상 리스트를 HTML에 동적으로 추가하는 함수
function renderVideoList() {
    const videoListContainer = document.getElementById('video-list');
    videoListContainer.innerHTML = ''; // 기존 목록을 비우고 새로 렌더링

    // 동영상 목록을 순회하면서 리스트 항목을 추가
    videos.forEach(video => {
        const videoItem = document.createElement('li');
        videoItem.innerHTML = `
            <a href="#" onclick="playVideo('${video.src}')">${video.title}</a>
        `;
        videoListContainer.appendChild(videoItem);
    });
}

// 동영상 플레이어 업데이트 함수
function playVideo(videoSrc) {
    const player = document.getElementById("videoPlayer");
    player.src = videoSrc; // 동영상 경로를 player에 설정
    player.play(); // 동영상 재생
}

// 검색 기능
function search() {
    const query = document.querySelector('.search-bar input').value;
    window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
}

// 페이지가 로드되면 동영상 목록 렌더링
window.onload = renderVideoList;
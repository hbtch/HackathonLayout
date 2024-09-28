const videoSrc = [
    'src/assets/video/planning.mp4',
    'src/assets/video/permitting.mp4',
    'src/assets/video/foundation.mp4'
];
const tabList = document.querySelector('.tab-list');
const tabItems = document.querySelectorAll('.tab-list_item');
const processVideo = document.querySelector('.process-video');
const playBtn = document.querySelector('.play-btn');
export function processSection() {
    tabList.addEventListener('click', (e) => {
        const target = e.target.closest('.tab-list_item');
        if (target) {
            console.log('tabItems', tabItems);
            tabItems.forEach(tab => tab.classList.remove('tab-list_item-active'));
            target.classList.add('tab-list_item-active');
            playBtn.classList.remove('play-btn-hidden');
            processVideo.src = videoSrc[target.getAttribute('data-id')];
        }
    })

    playBtn.addEventListener('click', (e) => {
        playBtn.classList.toggle('play-btn-hidden');
        processVideo.play()
    })

    processVideo.addEventListener('ended', (e) => playBtn.classList.toggle('play-btn-hidden'))
}

processSection()

const dataStreamRecorder = []
let mediaRecorder;

const btnStart = document.getElementById("start")
const btnPause = document.getElementById("pause")
const btnPlay = document.getElementById("play")
const videoPlayer = document.getElementById("videoElement")

btnPause.addEventListener("click", stopGravation)
btnPlay.addEventListener("click", playGravation)
btnStart.addEventListener("click", startGravation)

async function startGravation() {
    dataStreamRecorder.length = 0
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = handlerDataStream;

    const videoTracks = stream.getVideoTracks();
    const mediaVideoRecorder = new MediaStream(videoTracks);
    videoPlayer.srcObject = mediaVideoRecorder;

    mediaRecorder.start();
}

function handlerDataStream(ev) {
    dataStreamRecorder.push(ev.data)
}

async function stopGravation() {
    mediaRecorder.stop();
}

function playGravation() {
    videoPlayer.srcObject = null;

    // Filtrar apenas os dados de vídeo
    const videoBlobs = dataStreamRecorder.filter(data => {
        return data.type.startsWith('video')
    });

    // Criar um novo Blob apenas com os dados de vídeo
    const videoBlob = new Blob(videoBlobs, { type: 'video/webm' });

    // Criar uma URL para o Blob de vídeo e atribuir ao elemento de vídeo
    const videoUrl = URL.createObjectURL(videoBlob);
    videoPlayer.src = videoUrl;
    videoPlayer.controls = true;
}

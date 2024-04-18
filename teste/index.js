const dataStreamRecorder = []
let mediaRecorder;

const btnStart = document.getElementById("start")
const btnPause = document.getElementById("pause")
const btnPlay = document.getElementById("play")
const videoPlayer = document.getElementById("videoElement")

btnPause.addEventListener("click",stopGravation)
btnPlay.addEventListener("click",playGravation)
btnStart.addEventListener("click",startGravation)

async function startGravation() {
    dataStreamRecorder.length = 0
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio:true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = handlerDataStream;
    videoPlayer.srcObject = stream
    mediaRecorder.start();
}

function handlerDataStream(ev) {
    dataStreamRecorder.push(ev.data)
}

async function stopGravation() {
    mediaRecorder.stop();
}

function playGravation(){
    videoPlayer.srcObject = null
    const videoBlob = new Blob(dataStreamRecorder,{
        type:"video"
    });
    const videoUrl = URL.createObjectURL(videoBlob);
    videoPlayer.src = videoUrl;
    videoPlayer.controls = true
}

import { MessageMidia, MessageAudio, MessageText } from "./messages.js";

const recognition = new SpeechSynthesisUtterance("I AM THE ROCK");
recognition.lang = "en-US"


async function startListening() {
    const data = document.getElementById("file") as HTMLInputElement;
    const file = data.files[0];
    const message = new MessageMidia(file, new Date(), 99553247336);
    const teste = await message.sendMessage();
    const img = document.createElement("img");
    img.src = teste;
    document.getElementsByTagName("body")[0].appendChild(img);
    // img.onload = function () {
    //     URL.revokeObjectURL(teste); // Revoga a URL após a imagem ser carregada
    // };

}

async function sendTextMessage() {
    const data = document.getElementById("text")?.value;
    const message = await new MessageText(data, new Date(), 99662537323).sendMessage();
    console.log(message);
}

document.getElementById("btn-send").addEventListener("click", startListening);
document.getElementById("btn-send-text").addEventListener("click", sendTextMessage);

async function sendAudio() {
    let audioIN = { video: true };
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (mediaStreamObj) {
            let start = document.getElementById('btnStart');
            let stop = document.getElementById('btnStop');
            let mediaRecorder = new MediaRecorder(mediaStreamObj);
            let dataArray = [];


            // Start event
            start.addEventListener('click', function () {
                mediaRecorder.start();
            });

            // Stop event
            stop.addEventListener('click', function () {
                mediaRecorder.stop();
            });

            mediaRecorder.ondataavailable = async function (ev) {
                dataArray.push(ev.data);
            }

            // Convert the audio data into a blob after stopping the recording
            mediaRecorder.onstop = async function () {
                const audio = await new MessageAudio(dataArray, new Date(), 99445223).sendMessage();
                dataArray.length = 0;
                const audioSrc = window.URL.createObjectURL(audio);
                const audioElement = new Audio(audioSrc);
                audioElement.play();
            }
        })
}

sendAudio()


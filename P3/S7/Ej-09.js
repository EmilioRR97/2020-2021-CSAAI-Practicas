console.log("Ejecutando JS...");

const video = document.getElementById("video");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");

play.onclick = () => {
 if (video.paused)
   video.play()
 else {
   video.pause()
 }
}

big.onclick = () => {
 video.width = video.width + 60;
 video.height = video.height + 40;
}

small.onclick = () => {
 video.width = 300;
 video.height = 200;
}

time.onclick = () => {
 video.currentTime = 2;
}
var judul = document.getElementById("judul");
judul.style.color = "black";
let tombol = document.getElementById("tombol");
let bin = document.createElement("audio");
bin.src = "Binary.mp3";
let wiwok = document.createElement("audio");
wiwok.src = "Detok.mp3";
let uih = document.createElement("audio");
uih.src = "Uih.mp3";
let kaget = document.createElement("audio");
kaget.src = "Kaget.mp3";
let omaga = document.createElement("audio");
omaga.src = "Omaga.mp3";
let yntks = document.createElement("audio");
yntks.src = "Yntks.mp3";
let ouch = document.createElement("audio");
ouch.src = "Ouch.mp3";

tombol.addEventListener("click", () => {
  bin.play();
  setTimeout(
    () => {
      judul.innerHTML = "😎Mantap Mennn😎";
      bin.pause();
      bin.currentTime = 0;
      wiwok.play();
    }, 10000
  )
  setTimeout(
    () => {
      uih.play();
    }, 14000
  )
  setTimeout(
    () => {
      kaget.play();
    }, 17000
  )
  setTimeout(
    () => {
      omaga.play();
    }, 18000
  )
  setTimeout(
    () => {
      yntks.play();
    }, 20000
  )
  setTimeout(
    () => {
      ouch.play();
    }, 23000
  )
});

var judul = document.getElementById("judul");
judul.style.color = "black";

setTimeout(() => {
  judul.innerText = "😎Mantap Mennn😎";
  judul.style.color = "black"
}, 10000)

document.getElementById("tombol").addEventListener("click", function() {
  let sound = document.getElementById("sound");
  sound.play();
  setTimeout(
    () => {
      let bin = document.createElement("audio");
      bin.src = "Binary.mp3";
      bin.play();
}, 10000);

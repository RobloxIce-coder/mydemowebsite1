var judul = document.getElementById("judul");
judul.style.color = "maroon";

setTimeout(() => {
  judul.innerText = "Hahahaha";
  judul.style.color = "yellow"
}, 3000)

document.getElementById("tombol").addEventListener("click", function() {
  document.getElementById("sound").play();
});
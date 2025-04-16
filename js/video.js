const video = document.querySelector(".video");
const volume = document.querySelector("#volume");
const slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	video.load();
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to false")
	video.loop = false;
	console.log("Loop is set to false")
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	volume.textContent = `${slider.value}%`;
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.ended === false) {
		video.currentTime += 10;
	} else if (video.ended === true) {
		video.currentTime = 0;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
		console.log("Mute");
	} else if (video.muted === true) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
		console.log("Unmute");
	}
});

slider.addEventListener("change", function() {
	video.volume = slider.value / 100;
	volume.textContent = `${slider.value}%`;
	console.log("The current value is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
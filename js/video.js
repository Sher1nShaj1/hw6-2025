var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('autoplay is set to ' + video.autoplay);
	video.loop=false;
	console.log('loop is set to ' + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	volume.textContent = `${Math.round(video.volume * 100)}%`;
	console.log("Play Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 1.0;
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.0;
	video.playbackRate *= 1.1;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted) {
		video.muted = true;
		this.textContent = "Unmute";
		console.log("Mute");
	} else {
		video.muted = false;
		this.textContent = "Mute";
		console.log("Unmute");
	}
});

slider.addEventListener("input", function() {
	video.volume = slider.value / 100;
	volume.textContent = `${Math.round(video.volume * 100)}%`;
	console.log("The current value is " + video.volume);
});

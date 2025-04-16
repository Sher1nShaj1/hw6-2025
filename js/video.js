var video;
// let video;
// const video = document.querySelector(".video");
// const volume = document.querySelector("#volume");
// const slider = document.querySelector("#slider");

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('autoplay is set to ' + video.autoplay);
	video.loop=false;
	console.log('loop is set to ' + video.loop);
});
// Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	volume.textContent = `${Math.round(video.volume * 100)}%`;
	console.log("Play Video");
});

// Pause the video.
document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the consol
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});
// Increase the current video speed each time the button is clicked and log the new speed to the console.  
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});
// Advance the current video by 10 seconds.
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
});
// Mute/unmute the video and update the text in the button.
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
// Change the volume based on the slider and update the volume information.
slider.addEventListener("input", function() {
	video.volume = slider.value / 100;
	volume.textContent = `${Math.round(video.volume * 100)}%`;
	console.log("The current value is " + video.volume);
});

// Utilize the existing oldSchool class on the video element
// Remove the oldSchool class from the video.
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
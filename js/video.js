var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to false")
	console.log("loop is set to false")
});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").textContent = `${video.volume * 100}%`;

});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener('click', function () {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener('click', function () {
	video.playbackRate *= 1 / 0.9;
	console.log("Speed up video");
	console.log("Speed is ", video.playbackRate);
});

document.querySelector('#skip').addEventListener('click', function () {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("skip ahead")
	console.log("video current time is ", video.currentTime)
});

document.querySelector('#mute').addEventListener('click', function () {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = ('Unmute');
		console.log('Mute');
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = ('Mute');
		console.log('Unmute');
	}
});

document.querySelector('#slider').oninput = function () {
	video.volume = this.value / 100;
	console.log("The current value is ", video.volume)
	document.querySelector("#volume").textContent = `${video.volume * 100}%`;

}

document.querySelector('#vintage').addEventListener('click', function () {
	video.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener('click', function () {
	video.classList.remove('oldSchool');
})
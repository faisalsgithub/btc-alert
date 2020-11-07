let priceBTC = [15000, 15000]; // Whenever BTC dips below 15000 (sad)

window.alert('This app requires autoplay to run!');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		priceBTC.push(JSON.parse(this.responseText).bpi.USD.rate_float);
		console.log(priceBTC);
		priceBTC.shift();
		if (priceBTC[1] < priceBTC[0]) {
			playSong()
		}

	}
};

function getRequest() {
	xhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/USD.json", true);
	xhttp.send();
}

setInterval(getRequest, 2000);

window.AudioContext = window.AudioContext || window.webkitAudioContext;
let context = new AudioContext(); // Init WebAudio context
// get the audio element

let audio = document.getElementById("audio");
function playSong() {
    audio.play();
}
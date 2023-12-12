// import {time, hour, min, sec } from './clock.js'
import { getTime } from "./clock.js";
function setTime() {
	let time = getTime();
	let container = document.getElementById("container");
	let clock = `${time.hour} : ${time.min} : ${time.sec}`;
	container.innerHTML = clock;
}
setInterval(setTime, 1000);


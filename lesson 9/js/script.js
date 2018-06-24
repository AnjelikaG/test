//Timer
//lesson 8

let deadline = '2018-06-22';

function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date()),
	seconds = Math.floor((t/1000) % 60),
	minutes = Math.floor((t/1000/60) % 60),
	hours = Math.floor((t/(1000*60*60)));

	if (hours <= 9) {
		hours = '0' + hours
	};

	if (minutes <= 9) {
		minutes = '0' + minutes
	};

	if (seconds <= 9) {
		seconds = '0' + seconds
	};

    if (Date.parse(endtime) < Date.parse(new Date())) {
    	hours = "00";
    	minutes = "00";
    	seconds = "00";
    }


	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};

 };
 function setClock(id, endtime) {

 	let timer = document.getElementById(id);
 	    hours = timer.querySelector('.hours'),
 	    minutes = timer.querySelector('.minutes'),
 	    seconds = timer.querySelector('.seconds');

 	    function updateClock() {
 	    	let t = getTime(endtime);
 	    	hours.innerHTML = t.hours;
 	    	minutes.innerHTML = t.minutes;
 	    	seconds.innerHTML = t.seconds;

 	    	if (t.total <= 0) {
 	    		clearInterval(timeInterval);
 	    	}
 	    };

 	    updateClock();
 	    let timeInterval = setInterval(updateClock, 1000);

 };

 setClock('timer', deadline);









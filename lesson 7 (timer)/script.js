function clock() {
	let a = new Date;
		hours = a.getHours(),
		minutes = a.getMinutes(),
		seconds = a.getSeconds();

	if (hours <= 9) {
		hours = "0" + hours
	};

	if (minutes <= 9) {
		minutes = "0" + minutes
	};

	if (seconds <= 9) {
		seconds = "0" + seconds
	};

	let dateTime = "Текущее время: " + hours + ":" + minutes + ":" + seconds;

	document.write(dateTime);
	document.close;
	setTimeout("clock", 1000);


}
clock();
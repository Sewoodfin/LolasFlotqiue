var count = 0;
window.onload = setInterval(function () {
	console.log("function called" + count);
	switch (count) {
		case 0:
			count += 1;
			document.getElementById("heroPage").classList.add('heroSlide1');
			document.getElementById("heroPage").classList.remove('heroSlide5');
			console.log("0");
			break;
		case 1:
			count += 1;
			document.getElementById("heroPage").classList.add('heroSlide2');
			document.getElementById("heroPage").classList.remove('heroSlide1');
			console.log("1");
			break;
		case 2:
			count += 1;
			document.getElementById("heroPage").classList.add('heroSlide3');
			document.getElementById("heroPage").classList.remove('heroSlide2');
			console.log("2");
			break;
		case 3:
			count += 1;
			document.getElementById("heroPage").classList.add('heroSlide4');
			document.getElementById("heroPage").classList.remove('heroSlide3');
			console.log("3");
			break;
		case 4:
			count += 1;
			document.getElementById("heroPage").classList.add('heroSlide5');
			document.getElementById("heroPage").classList.remove('heroSlide4');
			console.log("4");
			count = 0;
			break;
	}
}, 5000);
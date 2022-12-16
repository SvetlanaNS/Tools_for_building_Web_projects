var endDate = new Date("Mar 15, 2019 12:00:00").getTime();
var timer = setInterval(function() {
    let now = newDate().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>DAY(S)</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>HR(S)</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>MIN(S)</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'>SEC(S)</span>";
    
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);

//knopki

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

start.addEventListener('click', function() {
	let i = 0;
	
	let timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});

let timerId; // сделаем переменную глобальной

start.addEventListener('click', function() {
	let i = 0;
	
	timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});

//sound
function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'click.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
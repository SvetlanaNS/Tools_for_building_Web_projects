function getTimeRemaining(endtime) {
    // создаем переменную t, чтобы хранить оставшееся время. 
    let t = Date.parse(endtime) - Date.parse(new Date());
    //перевести миллисекунды в дни, часы, минуты и секунды
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    //Выводим данные таймера, как многоразовый объект
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   //Отображаем часы на странице и останавливаем их, когда они достигнут 0
   //функция, которая будет отображать данные внутри нашего div'а:
   //id элемента, который будет содержать наши часы, и конечное время счетчика
   //переменную clock и будем использовать ее, чтобы хранить ссылку на наш блок с часами
  function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      let t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
  
    }
   //setInterval запускает анонимную функцию каждую секунду, 
   //которая будет делать следующее:
   //Высчитывать оставшееся время
  //Выводить оставшееся время в наш div
  //Если оставшееся время = 0, останавливать часы
  
  //запусk часов
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  
  
    //knopki start and stop
  
    document.getElementById("start").addEventListener("click", startInterval);
    document.getElementById("stop").addEventListener("click", stopInterval);
    
     //переменная для хранения ссылки на таймер
    let timerid =timeinterval;
    
   function startInterval() {
      // инициализация переменной
      timerid = setInterval(function() {
    
        console.log("start");
  
      }, 1500);
    }
    //sound
  function soundClick() {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'Gong.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
  }
  
    function stopInterval() {
      // Чтобы отменить интервал, передам timerid в clearInterval()
      clearInterval(timerid) ;
      soundClick();
    }
  
  
  }
  
  let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);
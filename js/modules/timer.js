function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function timer(time) {
    // timer

    const deadline = time;

    function calcTimeRemaining(deadline) {
        let timeRemaining = Date.parse(deadline) - Date.parse(new Date()),
            daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
            hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
            minutesRemaining = Math.floor(timeRemaining / (1000 * 60) % 60),
            secondsRemaining = Math.floor(timeRemaining / 1000 % 60);
        return {
            'totalTimeRemaining': timeRemaining,
            'daysRemaining': daysRemaining,
            'hoursRemaining': hoursRemaining,
            'minutesRemaining': minutesRemaining,
            'secondsRemaining': secondsRemaining
        };
    }

    setClock();
    function setClock() {
        const daysRemaining = document.querySelector('#days'),
            hoursRemaining = document.querySelector('#hours'),
            minutesRemaining = document.querySelector('#minutes'),
            secondsRemaining = document.querySelector('#seconds'),
            timer = setInterval(setClock, 1000);

        daysRemaining.innerHTML = getZero(calcTimeRemaining(deadline).daysRemaining);
        hoursRemaining.innerHTML = getZero(calcTimeRemaining(deadline).hoursRemaining);
        minutesRemaining.innerHTML = getZero(calcTimeRemaining(deadline).minutesRemaining);
        secondsRemaining.innerHTML = getZero(calcTimeRemaining(deadline).secondsRemaining);

        if (calcTimeRemaining(deadline).totalTimeRemaining <= 0) {
            clearInterval(timer);
            daysRemaining.innerHTML = "00";
            hoursRemaining.innerHTML = "00";
            minutesRemaining.innerHTML = "00";
            secondsRemaining.innerHTML = "00";
        }
    }
}

export default timer;
export {getZero};
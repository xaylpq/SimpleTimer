window.addEventListener('DOMContentLoaded', function() { 
    'use strict';

    let deadline = '2020-08-11'; // enter the date of the event
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60)%24),
            days = Math.floor((t / 1000 / 60 / 60)/24);
        return {
            'total':t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);
            function map(i){
                if(i <= 9) {
                    return '0' + i;
                } else return i;
            }
            days.textContent = map(t.days);
            hours.textContent = map(t.hours);
            minutes.textContent = map(t.minutes);
            seconds.textContent = map(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);
});
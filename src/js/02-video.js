import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const localStorage = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(localStorage) || 0);

player.on('timeupdate', throttle(function(data) { 
        if (data && data.seconds) { 
            localStorage.setItem(localStorage, data.seconds); 
        } 
    }
), 1000);
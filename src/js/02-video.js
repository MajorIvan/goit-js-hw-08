import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const LS_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(LS_KEY) || 0);

player.on('timeupdate', throttle(function(data) { 
        if (data && data.seconds) { 
            localStorage.setItem(LS_KEY, data.seconds); 
        } 
    }
), 1000);
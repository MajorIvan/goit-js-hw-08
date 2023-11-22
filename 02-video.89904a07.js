!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e),o="videoplayer-current-time";t.setCurrentTime(localStorage.getItem(o)||0),t.on("timeupdate",(function(e){e&&e.seconds&&localStorage.setItem(o,e.seconds)}))}();
//# sourceMappingURL=02-video.89904a07.js.map

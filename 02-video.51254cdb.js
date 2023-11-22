const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.setCurrentTime(localStorage.getItem("videoplayer-current-time")||0),t.on("timeupdate",(function(e){e&&e.seconds&&localStorage.setItem("videoplayer-current-time",e.seconds)}));
//# sourceMappingURL=02-video.51254cdb.js.map

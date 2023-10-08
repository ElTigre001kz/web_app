let getUrl = document.location.search
     if (getUrl.includes('VMbxNZKU6nyu')) {
        let params = (new URL(document.location)).searchParams; 
	    let video_url = params.get("video");
	      if (video_url) {
		     window.addEventListener('load', function() {
			  let video = document.createElement('iframe');
			  video.id = 'videoiframe';
			  video.src = 'https://' + video_url;
			  video.width = '100%';
			  video.height = '100%';
			  video.setAttribute('allowFullScreen', '');
			  document.querySelector('#play').appendChild(video);
			
	  let name = params.get("name");
      let year = params.get("year");
        if (name) {
          let substr = '';
        if (year) {
          substr = ' (' + year + ')';
        }
          document.title = name + substr + ' - смотреть онлайн';
          document.getElementById('name').appendChild(document.createTextNode(name));
      }
});
		      
		window.addEventListener("message", function (event) {
			if (event.data.event === 'init') {
				// document.getElementById('videoiframe').contentWindow.postMessage({"api": "fullscreen"}, "*");
	
			}
 		});
	}	  
}
else{
console.log('Всем хуй за мой счёт')
	window.addEventListener('load', function() {
			let video = document.createElement('iframe');
			video.id = 'videoiframe';
			video.src = 'https://www.youtube.com/embed/EKnhQ_PiZQQ';
			video.width = '100%';
			video.height = '100%';
		    video.setAttribute('allowFullScreen', '');
			document.querySelector('#play').appendChild(video);
});
}

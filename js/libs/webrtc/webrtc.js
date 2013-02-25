webrtc = {
	
    videoChatLoadDefinitions:function() {
    	
		 // Fallbacks for vendor-specific variables until the spec is finalized.
		window.PeerConnection = window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.webkitPeerConnection;
		window.URL = window.URL || window.webkitURL || window.msURL || window.oURL;
		window.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		
    },
    
    videoChatGetStream:function() {
    	
    	var mediaRequested = {audio:true, video:true};
    	var mediaContainer = $('#videoElement');	//TODO: this should be linked from the view.
    	
		var videoChatStreamCallBack = function(localMediaStream) {
			try {
				
				//if(!mediaContainer.play && mediaContainer[0]) {
				//	mediaContainer = mediaContainer[0]		// Opera returns an array of one element.
				//}

				//mediaContainer.src = window.URL.createObjectURL(localMediaStream);
				var videoSource = function() {
					if(window.URL){
						return URL.createObjectURL(localMediaStream);
					} else {
						return localMediaStream;		// Opera localMediaStream returns a String
					}
				}
				
				if(mediaContainer.attr) {
					mediaContainer.attr('src',videoSource());
				} else {
					mediaContainer = mediaContainer[0];		// TODO : I need to resolve my problems with Opera and jquery.
					mediaContainer.src = videoSource;
				}
				
				mediaContainer.play();
				console.log("Version 2");
				
		      // When video signals that it has loadedmetadata, begin "playing"
		      this.mediaContainer.addEventListener( "loadedmetadata", function() {
		        console.log("on loadmetadata");
		        this.mediaContainer.play();
		        console.log("end on loadmetadata");
		      }.bind(this), false);
		      
		      console.log("Version 3");
		      
		      mediaContainer.addEventListener("timeupdate", function() {
		      	console.log("on timeupdate");
		      	this.draw();
		      	console.log("end on timeupdate");
		      }.bind(this), false);
		      
		      console.log("End videochatgetstream");
				
				
			} catch(e) {
				try {
					mediaContainer.mozSrcObject = localMediaStream;
					mediaContainer.play();
				} catch(e) {
					console.log("Error connecting video to container : ", e);
				}
			}
    	};
    	
    	var videoChatErrorCallBack = function(error) {
    		console.log("Error getting video source : ", error);
    	};
    	
    	if(window.getUserMedia) {
    		window.getUserMedia.call(navigator, mediaRequested, videoChatStreamCallBack, videoChatErrorCallBack);
    	} else {
    		alert('No user media available');
    	}
    }
	
};



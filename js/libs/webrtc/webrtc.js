webrtc = {
	
    videoChatLoadDefinitions:function() {
    	
		 // Fallbacks for vendor-specific variables until the spec is finalized.
		console.log("-------------------------------------------------");
		console.log("Loading definitions ...");
		
		window.PeerConnection = window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.webkitPeerConnection;
		window.URL = window.URL || window.webkitURL || window.msURL || window.oURL;
		window.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		
		console.log("PeerConnection : " + ((window.PeerConnection != null)?"true":"false"));
		console.log("URL : " + ((window.URL != null)?'true':'false'));
		console.log("GetUserMedia : " + ((window.getUserMedia != null)?"true":"false"));
		console.log("-------------------------------------------------");
    },
    
    videoChatGetStream:function() {
    	
    	var mediaRequested = {audio:true, video:true};
    	var mediaContainer = $('#videoElement');	//TODO: this should be linked from the view.
    	
		var videoChatStreamCallBack = function(localMediaStream) {
			console.log("VideoChatGetStream request");
			try {
				
				//if(!mediaContainer.play && mediaContainer[0]) {
				//	mediaContainer = mediaContainer[0]		// Opera returns an array of one element.
				//}

				//mediaContainer.src = window.URL.createObjectURL(localMediaStream);
				var videoSource = function() {
					if(window.URL){
						console.log("VideoSource from URL : " + URL.createObjectURL(localMediaStream));
						return URL.createObjectURL(localMediaStream);
					} else {
						console.log("VideoSource without URL : " + localMediaStream);
						return localMediaStream;		// Opera localMediaStream returns a String
					}
				}
				
				if(!mediaContainer.play) {
					this.mediaContainer = mediaContainer[0];		// TODO : I need to resolve my problems with Opera and jquery.
				}
				
				if(this.mediaContainer.attr) {
					this.mediaContainer.attr('src',videoSource());
				} else {
					this.mediaContainer.src = videoSource();
					console.log("Media container src : " + this.mediaContainer.src);
				}
				
				
				this.mediaContainer.play();
				console.log("Media Container Play");
				
		      // When video signals that it has loadedmetadata, begin "playing"
		      this.mediaContainer.addEventListener( "loadedmetadata", function() {
		        console.log("on loadmetadata");
		        this.mediaContainer.play();
		        console.log("end on loadmetadata");
		      }.bind(this), false);
		      
		      console.log("Version 3");
		      
		      this.mediaContainer.addEventListener("timeupdate", function() {
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
    	}.bind(this);
    	
    	var videoChatErrorCallBack = function(error) {
    		console.log("Error getting video source : ", error);
    	};
    	
    	if(window.getUserMedia) {
    		console.log("GetUserMedia.call");
    		window.getUserMedia.call(navigator, mediaRequested, videoChatStreamCallBack, videoChatErrorCallBack);
    	} else {
    		console.log("No user media available");
    		alert('No user media available');
    	}
    }
	
};


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
				//mediaContainer.src = window.URL.createObjectURL(localMediaStream);
				mediaContainer.attr('src',URL.createObjectURL(localMediaStream));
				mediaContainer.play();
				console.log("Version 2");
				
		      // When video signals that it has loadedmetadata, begin "playing"
		      this.mediaContainer.addEventListener( "loadedmetadata", function() {
		        this.mediaContainer.play();
		      }.bind(this), false);
		      console.log("Version 3");
				
				
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



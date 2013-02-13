webrtc = {
	
    videoChatLoadDefinitions:function() {
    	
		 // Fallbacks for vendor-specific variables until the spec is finalized.
		window.PeerConnection = window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.webkitPeerConnection;
		window.URL = window.URL || window.webkitURL || window.msURL || window.oURL;
		window.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		
    },
    
    videoChatGetStream:function() {
    	
    	var mediaRequested = {audio:true, video:true};
    	var mediaContainer = document.querySelector("videoContainer");	//TODO: this should be linked from the view.
    	
		var videoChatStreamCallBack = function(localMediaStream) {
			try {
				mediaContainer.src = window.URL.createObjectURL(localMediaStream);
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



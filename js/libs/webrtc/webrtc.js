//WEBRTC CLIENT

 // Fallbacks for vendor-specific variables until the spec is finalized.
window.PeerConnection = window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.webkitPeerConnection;
window.URL = window.URL || window.webkitURL || window.msURL || window.oURL;
window.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
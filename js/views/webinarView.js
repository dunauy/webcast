  var webinarView = Backbone.View.extend({
  	el: $('#content'),
  	
    initialize:function () {
        console.log('Initializing Main Webinar View');
        console.log( 'login : ' + this.model.get('user').login + ' room : ' + this.model.get('room') );
    },
    
    render:function () {
     	console.log('Rendering Main Webinar View');

        // Compile the template using underscore
        var template = _.template( tpl.get('webinarView'), {} );
        
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );
        
        
        //TODO: This should be called by handling model events from webrtc stream changes
        // Load Media Streams
        webrtc.videoChatLoadDefinitions();
    	webrtc.videoChatGetStream();

        return this;
    },
    
    
    
  });
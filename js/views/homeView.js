var homeView = Backbone.View.extend( {
  	el: $('#content'),
  	
    initialize:function () {
        console.log('Initializing Home View');
    },
	
	render:function() {
		console.log('Rendering Home View');
		
        // Compile the template using underscore
        var template = _.template( tpl.get('homeView'), {} );
        
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );

        return this;
		
	}, 
	
	events : {
		 "click input[id=createWebinarBtn]": "loadWebinar"  
	},
	
	loadWebinar : function(event){
		alert( 'login : ' + $('#loginField').val() + ' room : ' + $('#roomField').val() );
//		this.navigate('webinar');

	}
	
})

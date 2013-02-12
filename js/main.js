window.Router = Backbone.Router.extend({
	
	routes: {
		"":"loadHome",
		"webinar/:roomName/:userName":"loadWebinar",
		"chat":"loadChat",
		"*other":"loadHome"
	},
	
	initialize: function () {
		
	},
	
	loadWebinar: function(roomName, userName) {
		
		var webinar = new Webinar();
		webinar.set({room: roomName});
		webinar.set({user:{login:userName}});
		
		if(!this.webinarView) {
			this.webinarView = new webinarView({model: webinar});
		}
		this.webinarView.render();
	},
	
	loadChat: function() {
		if(!this.chatView) {
			this.chatView = new chatView();
		}
		this.chatView.render();
	}, 
	
	loadHome: function() {
		if(!this.homeView) {
			this.homeView = new homeView()
		}
		this.homeView.render();
	}
	
});

tpl.loadTemplates(['webinarView', 'chatView', 'homeView'], function() {
	app = new Router();
	Backbone.history.start();
})

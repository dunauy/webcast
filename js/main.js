window.Router = Backbone.Router.extend({
	
	routes: {
		"":"home",
		"webinar":"webinar",
		"chat":"chat",
		"*other":"webinar"
	},
	
	initialize: function () {
		
	},
	
	webinar: function() {
		if(!this.webinarView) {
			this.webinarView = new webinarView();
		}
		this.webinarView.render();
	},
	
	chat: function() {
		if(!this.chatView) {
			this.chatView = new chatView();
		}
		this.chatView.render();
	}, 
	
	home: function() {
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

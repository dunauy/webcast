var Webinar = Backbone.Model.extend({
	defaults: {
		info: {
			title: 'Webinar title',
			description: 'Webinar description',
			url: 'Webinar url',
			company: 'Webinar company owner',
			lecturer: 'Name of the webinar\'s lecturer'
		},
		user: {
			login: 'user\'s login'
		},
		room: 'Webinar\'s room name'
	},
	
	initialize: function() {
		
	},
})

  var webinarView = Backbone.View.extend({
  	el: $('#content'),
    initialize:function () {
        console.log('Initializing Main Webinar View');
    },
    render:function () {
     	console.log('Rendering Main Webinar View');

        // Compile the template using underscore
        var template = _.template( tpl.get('webinarView'), {} );
        
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );

        return this;
    },
  });
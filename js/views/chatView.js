  var chatView = Backbone.View.extend({
  	el: $('#content'),
    initialize:function () {
        console.log('Initializing Chat View');
    },
    render:function () {
     	console.log('Rendering Chat View');

        // Compile the template using underscore
        var template = _.template( tpl.get('chatView'), {} );
        
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );

        return this;
    },
  });
define(
	[
	"marionette",
	"vent",
	'hbars!/templates/ui.components/calendar/routeChooser'
	],
	function(Marionette, Vent, RouteChooserTemplate){
	
	var RouteChooser = Backbone.Marionette.CollectionView.extend({

		template: RouteChooserTemplate,

		render: function() {
	        var templateHtml = this.template(this.model);
	        this.$el.html(templateHtml);
	        return this;
	    },

	    events: {
	      "firstevent": "firstHandler",
	      "secondevent": "secondHandler"
	      // . . . . . . . . . 
	    },

	    firstHandler: function(event) {
	      //Vent.trigger("dropdownlist:first");
	      console.log("DropDownListView firstHandler");
	    },

	    secondHandler: function(event) {
	      Vent.trigger("pager:last");
	    },

	    onShow: function() {
	        console.log("DropDownListView onShow");
	        Vent.trigger("firstevent");
	    }

	    // . . . . . . . . . 
  	});

	return RouteChooser;
});
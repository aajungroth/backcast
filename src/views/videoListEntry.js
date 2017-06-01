var VideoListEntryView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    // your code here
    this.model.select();
  },
  template: templateURL('src/templates/videoListEntry.html')


});

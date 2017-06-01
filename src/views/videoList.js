var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function() {
    //this.$el.empty();
    //this.collection.forEach(this.renderVideo, this);
    // var videoList = new VideoListEntryView({
    //   el: this.$('#videos'),
    //   collection: this.collection
    // });
    // _.each(videoList, VideoListEntryView.prototype.render);
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});

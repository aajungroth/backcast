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
    //
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({ model: video }).render().el;
      })
    );
    return this;
  },

  // renderVideo: function(video) {
  //   //var videoListEntry = new VideoListEntryView({model: video});
  //   //this.$el.append(videoListEntry.render());
  //   return new VideoListEntryView({model: video}).render().el;
  // },

  template: templateURL('src/templates/videoList.html')

});

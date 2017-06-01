var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // var videoList = new VideoListEntryView({
    //   el: this.$('#videos'),
    //   collection: this.collection
    // });
    // _.each(videoList, VideoListEntryView.prototype.render);

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

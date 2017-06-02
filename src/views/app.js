var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(options) {
    this.videos = new Videos();

    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('javascript tutorial');
    /*
    if (options !== undefined) {
      this.videos = new Videos(options.collection);
    } else {
      this.videos = new Videos();
    }
    */
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

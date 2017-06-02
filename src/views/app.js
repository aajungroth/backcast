var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(options) {
    this.videos = new Videos();

    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('reactJs tutorial');
    /*
    if (options !== undefined) {
      this.videos = new Videos(options.collection);
    } else {
      this.videos = new Videos();
    }
    */
    this.render();
  },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('#videos'),
      collection: this.collection
    }).render();
    new VideoPlayerView({
      el: this.$('#videos'),
      collection: this.collection
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

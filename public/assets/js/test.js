//Source tutorial https://www.youtube.com/watch?v=FZSjvWtUxYk

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    options.url = 'http://localhost:8989' + options.url;
});

var UserList = Backbone.View.extend({
    el: '.page',
    render: function(){
        var that = this;
        var users = new Users();
        users.fetch({
            success: function () {
                that.$el.html('Content should show here!');
            }
        });
    }
});

var userList = new UserList();

var Users = Backbone.Collection.extend({
   url: '/users'
});

var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

var router = new Router();
router.on('route:home', function(){
    userList.render();
});

Backbone.history.start();
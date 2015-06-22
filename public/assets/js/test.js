$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    options.url = 'http://localhost:8989' + options.url;
});

var UserList = Backbone.View.extend({
    el: '.page',
    render: function(){
        var users = new Users();
        users.fetch({
            success: function () {
                this.$el.html('Content should show here!');
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
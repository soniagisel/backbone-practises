var UserList = Backbone.View.extend({
    el: '.page',
    render: function(){
        this.$el.html('Content should show here!');
    }
});

var userList = new UserList();


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
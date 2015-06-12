/**
 * Set up router
 */
if(Meteor.isClient) {
    FlowRouter.route('/', {
        action: function(params) {
            React.unmountComponentAtNode(document.getElementById('yield'));
            React.render(<Header />, document.getElementById('header'));
            React.render(<Main />, document.getElementById('yield'));
        },
        name: 'main'
    });

    FlowRouter.route('/profile', {
        action: function(params) {
            React.unmountComponentAtNode(document.getElementById('yield'));
            React.render(<Profile />, document.getElementById('yield'));
        },
        name: 'profile'
    });

    FlowRouter.route('/images', {
        action: function(params) {
            React.unmountComponentAtNode(document.getElementById('yield'));
            React.render(<Images />, document.getElementById('yield'));
        },
        name: 'images'
    });

    FlowRouter.route('/project', {
        subscriptions: function(params, queryParams) {
            this.register('myTodoLists', Meteor.subscribe('loadTodos'));
            Tracker.autorun(function() {
                console.log("Is myTodoLists ready?:", FlowRouter.subsReady("myTodoLists"));
            })
        },
        action: function(params) {
            React.unmountComponentAtNode(document.getElementById('yield'));
            React.render(<Project />, document.getElementById('yield'));
        },
        name: 'project'
    });

    FlowRouter.route('/login', {
        action: function(params) {
            React.unmountComponentAtNode(document.getElementById('header'));
            React.unmountComponentAtNode(document.getElementById('yield'));
            React.render(<Login />, document.getElementById('yield'));
        },
        name: 'login'
    });
}
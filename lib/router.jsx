/**
 * Set up router
 */
FlowRouter.route('/', {
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
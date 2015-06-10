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

    FlowRouter.route('/login', {
        action: function(params) {
            React.unmountComponentAtNode(document.getElementById('header'));
            React.unmountComponentAtNode(document.getElementById('yield'));
            React.render(<Login />, document.getElementById('yield'));
        },
        name: 'login'
    });
}
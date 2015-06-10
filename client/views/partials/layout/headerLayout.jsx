Header = ReactMeteor.createClass({
    templateName: "header",
    componentDidMount: function() {
        $('.mdi-navigation-menu').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        $(".dropdown-button").dropdown();
    },
    slideNav: function() {        
        $('.mdi-navigation-menu').sideNav("show");
    },
    goMainPage: function() {
        FlowRouter.go('main');
    },
    goProfilePage: function() {
        FlowRouter.go('profile');
    },
    render: function() {        
        return (
            <div className="header">
                <ul id="dropdown1" className="dropdown-content">
                    <li><a >one</a></li>
                    <li className="divider"></li>
                    <li><a >two</a></li>
                    <li className="divider"></li>
                    <li><a >Log Out</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper red">
                            <a className="brand-logo" style={{ left: "84px" }} onClick={this.goMainPage}>Logo</a>
                            <ul id="nav-mobile" className="right">
                                <li><a className="dropdown-button" data-activates="dropdown1"><i className="mdi-navigation-more-vert"></i></a></li>
                            </ul>
                        <ul id="slide-out" className="side-nav" style={{left: "-310px"}}>
                            <header className="io-nav-header red accent-2" style={{height: "250px"}}>
                                <div className="io-nav-text">
                                    <div className="io-nav-header-name white-text darken-1">
                                        Joel <strong>Cox</strong>
                                    </div>
                                    <div className="io-nav-header-email">
                                    Ui &amp; UX Designer
                                    </div>
                                    <div className="io-nav-header-email">
                                    JavaScript Engineer
                                    </div>
                                </div>
                            </header>

                            <div className="io-navigation ng-scope" du-scroll-container="container">
                                <a className="io-navigation-item waves-effect active" onClick={this.goProfilePage}>
                                    <i className="mdi-social-person red-text accent-2"></i>
                                    <div className="io-navigation-item-text grey-text darken-1">Profile</div>
                                </a>
                                <a className="io-navigation-item waves-effect">
                                    <i className="mdi-action-history purple-text accent-2"></i>
                                    <div className="io-navigation-item-text grey-text darken-1">Experience</div>
                                </a>
                                <a className="io-navigation-item waves-effect">
                                    <i className="mdi-av-web green-text accent-2"></i>
                                    <div className="io-navigation-item-text grey-text darken-1">Projects</div>
                                </a>
                                <a className="io-navigation-item waves-effect">
                                    <i className="mdi-av-equalizer blue-text accent-2"></i>
                                    <div className="io-navigation-item-text grey-text darken-1">Skills</div>
                                </a>
                                <a className="io-navigation-item waves-effect">
                                    <i className="mdi-social-school amber-text darken-3"></i>
                                    <div className="io-navigation-item-text grey-text darken-1">Education</div>
                                </a>
                                <div className="io-navigation-item waves-effect">
                                    <i className="mdi-communication-call amber-text darken-3"></i>
                                    <div className="io-navigation-item-text grey-text darken-1">Contact</div>
                                </div>
                            </div>
                        </ul>
                        <i data-activates="slide-out" className="mdi-navigation-menu" style={{marginLeft: "15px"}} onClick={this.slideNav}></i>
                    </div>
                </nav>
            </div>
        )
    }
});

Template.header.onRendered(function(){
    $(".dropdown-button").dropdown();
});

Template.header.onDestroyed(function(){
});
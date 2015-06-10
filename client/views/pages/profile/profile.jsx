Profile = ReactMeteor.createClass({
    templateName: "profile",
    render: function() {
        return (
            <div className="profile">                
                <div className="content" style={{textAlign: "center"}}>
                    <h1 style={{color: "#ee6e73"}}>My Name</h1>
                    
                </div>
            </div>
        );
    }
});

Template.profile.onRendered(function(){
    
});

Template.profile.onDestroyed(function(){
});
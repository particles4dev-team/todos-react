Login = ReactMeteor.createClass({
    render: function() {
        return (
            <div className="container" style={{
                height: "100vh", 
                position: "relative", 
                padding: "0",
                backgroundImage: "url('images/beautiful_land01.jpg')",
                width: "100%"
            }}>                
                <div className="row" style={{textAlign: "center", color: "#fff"}}>
                    <div className="col s12">
                        <h2 style={{marginTop: "70px"}}>React Meteor</h2>
                    </div>
                </div>
                <footer className="page-footer" style={{
                    width: "100%", 
                    position: "absolute", 
                    bottom: "40px", 
                    textAlign: "center",
                    backgroundColor: "transparent",
                    padding: "0 20px"
                }}>
                    <a className="waves-effect waves-light btn-large blue darken-4" style={{width: "100%", marginBottom: "20px"}}>
                        FaceBook
                    </a>
                    <a className="waves-effect waves-light btn-large light-blue darken-1" style={{width: "100%",}}>
                        Twitter
                    </a>
                </footer>
            </div>
        );
    }
});
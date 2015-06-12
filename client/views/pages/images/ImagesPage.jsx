Images = ReactMeteor.createClass({
    templateName: "images",
    componentDidMount: function() {
        $(document).ready(function(){
            $('.materialboxed').materialbox();
        });
    },
    render: function() {        
        return (            
            <div className="images">
                <img className="materialboxed" data-caption="Testing zoom out picture" width="50%" src="/images/beautiful_land01.jpg"/>
            </div>
        );
    }
});

Profile = ReactMeteor.createClass({
    render: function() {
        return (
            <div className="profile">                
                <form action="#">
                    <p>
                      <input type="checkbox" id="test5" />
                      <label htmlFor="test5">Red</label>
                    </p>
                    <p>
                      <input type="checkbox" id="test6" checked="checked" />
                      <label htmlFor="test6">Yellow</label>
                    </p>
                    <p>
                      <input type="checkbox" className="filled-in" id="filled-in-box" />
                      <label htmlFor="filled-in-box">Filled in</label>
                    </p>
                    <p>
                      <input type="checkbox" id="test7" checked="checked" disabled="disabled" />
                      <label htmlFor="test7">Green</label>
                    </p>
                    <p>
                        <input type="checkbox" id="test8" disabled="disabled" />
                        <label htmlFor="test8">Brown</label>
                    </p>
                </form>
            </div>
        );
    }
});

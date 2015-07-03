TodoLists = React.createClass({
    componentDidMount: function() {
        $(".dropdown-button").dropdown();
    },
    handleCloseTodo: function(evt) {
        evt.preventDefault();
        Meteor.call('removeTodo', this.props.idTodo, function(err, res){
            console.log(err, res);
            if(err){}
            else {}
        });
    },
    handleUpdateTodo: function(evt) {
        evt.preventDefault();
        var self = this;
        var todo = React.findDOMNode(this.refs.todo).value.trim();
        if(!todo) {
          return;
        }
        Meteor.call('updateTodo', {idTodo: this.props.idTodo, todo: todo}, function(err, res){
            console.log(err, res);
            if(err){}
            else{
                $("#updateTodo" + self.props.idTodo).closeModal({
                    out_duration: 500, // Transition out duration
                });
            }
        });
        return;
    },
    openModalCloseTodo: function() {
        $('#closeTodo' + this.props.idTodo).openModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: 0.5, // Opacity of modal background
            in_duration: 500, // Transition in duration
        });
    },
    openModalUpdateTodo: function() {
        $('#updateTodo' + this.props.idTodo).openModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: 0.5, // Opacity of modal background
            in_duration: 500, // Transition in duration
        });
    },
    handleChange: function(e) {
        Meteor.call('updateTodo2', this.props.idTodo, !this.props.done, function(err, res){
            console.log(err, res);
        });      
    },
    render: function(){
        var color = null;
        if(this.props.isSimulation){
          color = 'red';
        }
        else {
          color = 'green';
        }
        return (
            <div className="row">
                <div className="col s10" style={{
                    position: "relative",
                    paddingLeft: "40px",
                }}>
                    <input type="checkbox" id={this.props.idTodo} checked={this.props.done} onChange={this.handleChange}/>
                    <label htmlFor={this.props.idTodo} style={{display: "inline", fontSize: "1.3rem", position: "absolute", left: "10px"}}></label>
                    <span style={{color: color, wordWrap: "break-word", fontSize: "18px", lineHeight: "18px"}}>{this.props.todo} {this.props.done}</span>
                </div>
                <div className="col s2" style={{
                    lineHeight: "1",
                    fontSize: "24px"
                }}>
                    <a className="dropdown-button right" data-activates={"dropdown"+this.props.idTodo}><i className="mdi-navigation-more-vert" style={{color: "#fff"}}></i></a>
                    <ul id={"dropdown"+this.props.idTodo} className="dropdown-content">
                        <li className="modal-trigger" onClick={this.openModalCloseTodo}><a >Delete</a></li>
                        <li className="divider"></li>
                        <li className="modal-trigger" onClick={this.openModalUpdateTodo}><a >Archive</a></li>
                    </ul>
                </div>
                <div id={"closeTodo"+this.props.idTodo} className="modal">
                    <div className="modal-content" style={{padding: "10px", color:"#26a69a"}}>
                        <h5>Are you sure you want to delete this todo?</h5>
                    </div>
                    <div className="modal-footer">
                        <a className="waves-effect modal-close waves-green btn-flat" style={{color: "green", padding: "0 1rem"}} onClick={this.handleCloseTodo}>
                            <i className="mdi-action-done" style={{fontSize: "25px"}}></i>
                        </a>
                        <a className=" modal-action modal-close waves-effect waves-green btn-flat" style={{color: "red", padding: "0 1rem"}}>
                            <i className="mdi-content-clear" style={{fontSize: "25px"}}></i>
                        </a>
                    </div>
                </div>
                <div id={"updateTodo"+this.props.idTodo} className="modal bottom-sheet">
                    <div className="modal-content" style={{padding: "10px", color:"#26a69a"}}>
                        <form>
                            <div className="input-field">
                                <textarea id="textarea2" className="materialize-textarea" ref="todo" style={{color: "#26a69a"}}>{this.props.todo}</textarea>
                                <label for="textarea2"></label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a className="waves-effect waves-green btn-flat" style={{color: "green", padding: "0 1rem"}} onClick={this.handleUpdateTodo}>
                            <i className="mdi-action-done" style={{fontSize: "25px"}}></i>
                        </a>
                        <a className=" modal-action modal-close waves-effect waves-green btn-flat" style={{color: "red", padding: "0 1rem"}}>
                            <i className="mdi-content-clear" style={{fontSize: "25px"}}></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

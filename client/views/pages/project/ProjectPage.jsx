Project = ReactMeteor.createClass({
    templateName: "project",
    componentDidMount: function() {
        
    },
    getMeteorState: function() {
        return {
            todos: TodoListsCollection.find({}, {sort: {updatedAt: -1}}).fetch()
        }
    },
    renderTodo: function(model) {
        return <TodoLists 
            key={model._id}
            model={model}
            idTodo={model._id} 
            todo={model.todo}/>;
    },
    openModal: function() {
        $('#modal1').openModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 500, // Transition in duration
        });
    },
    createNewTodo: function(evt) {
        evt.preventDefault();
        var self = this;
        var todo = React.findDOMNode(this.refs.todo).value.trim();
        if(!todo) {
                return;
        }
        Meteor.call('insertNewTodo', {todo: todo, timeTodo: new Date()}, function(err, res){
            if(err){
                console.log(err)
            }
            else{
                console.log(res)
                React.findDOMNode(self.refs.todo).value = '';
                $('#modal1').closeModal({
                    out_duration: 500, // Transition out duration
                });
            }
        });
        return;
    },
    render: function() {
        return (
            <div id="container" className="container" style={{padding: "0px", marginBottom: "80px", fontFamily: "Shadows Into Light"}}>
                <div className="header" style={{padding: "25px 0px"}}>
                    <h4 style={{margin: "0"}}>Todo Lists</h4>
                    <p style={{margin: "0px"}}>Add, edit and manage your Todo Lists</p>
                </div>
                <div className="divider"></div>
                <div className="body" style={{minHeight: "490px"}}>
                    <a className="btn-floating btn-large waves-effect waves-light modal-trigger white right" onClick={this.openModal} style={{
                        top: "-30px"
                    }}>
                        <i className="mdi-content-add" style={{color: "#ff9a07"}}></i>
                    </a>
                    <div className="row" style={{height: "40px"}}>
                    </div>
                    {this.state.todos.map(this.renderTodo)}
                </div>
                
                <div id="modal1" className="modal">
                    <div className="modal-content" style={{padding: "10px"}}>
                        <form>
                            <div className="input-field">
                                <textarea id="textarea1" className="materialize-textarea" ref="todo" style={{color: "#26a69a"}}></textarea>
                                <label for="textarea1">What you want to do...</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a className="waves-effect waves-green btn-flat" style={{color: "green", padding: "0 1rem"}} onClick={this.createNewTodo}>
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

var TodoLists = ReactMeteor.createClass({
    templateName: "todoLists",
    componentDidMount: function() {
        $(".dropdown-button").dropdown();
    },
    handleCloseTodo: function(evt) {
        evt.preventDefault();
        Meteor.call('removeTodo', this.props.idTodo, function(err, res){
            if(err){
                console.log(err)
            }
            else {
                console.log(res);
            }
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
            if(err){
                console.log(err)
            }
            else{
                console.log(res);
                $("#updateTodo"+self.props.idTodo).closeModal({
                    out_duration: 500, // Transition out duration
                });
            }
        });
        return;
    },
    openModalCloseTodo: function() {
        $('#closeTodo'+this.props.idTodo).openModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 500, // Transition in duration
        });
    },
    openModalUpdateTodo: function() {
        $('#updateTodo'+this.props.idTodo).openModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 500, // Transition in duration
        });
    },
    render: function(){
        return (
            <div className="row">
                <div className="col s10" style={{
                    position: "relative",
                    paddingLeft: "40px",
                }}>
                    <input type="checkbox" id={this.props.idTodo} />
                    <label htmlFor={this.props.idTodo} style={{display: "inline", fontSize: "1.3rem", position: "absolute", left: "10px"}}></label>
                    <span style={{wordWrap: "break-word", fontSize: "18px", lineHeight: "18px"}}>{this.props.todo}</span>
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
        )
    }
});
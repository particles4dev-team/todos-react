var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

Project = React.createClass({
    componentDidMount: function() {},
    mixins: [ReactMeteorData],
    getMeteorData () {
        return {
            todos: TodoListsCollection.find({}, {sort: {updatedAt: -1}}).fetch()
        };
    },
    renderTodo (model) {
        return <TodoLists
            key={model._id}
            model={model}
            idTodo={model._id}
            todo={model.todo}
            isSimulation={model.isSimulation}/>;
   },
    openModal () {
        $('#modal1').openModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: 0.5, // Opacity of modal background
            in_duration: 500, // Transition in duration
        });
    },
    createNewTodo (evt) {
        evt.preventDefault();
        var self = this;
        var todo = React.findDOMNode(this.refs.todo).value.trim();
        if(!todo) {
            return;
        }
        $('#modal1').closeModal({
            out_duration: 500, // Transition out duration
        });
        Meteor.call('insertNewTodo', {todo: todo, timeTodo: new Date()}, function(err, res){
            console.log(err, res);
            if(err){}
            else {
                React.findDOMNode(self.refs.todo).value = '';
            }
        });
        return;
    },
    render () {
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
                    <ReactCSSTransitionGroup transitionName="example">
                      {this.data.todos.map(this.renderTodo)}
                    </ReactCSSTransitionGroup>
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

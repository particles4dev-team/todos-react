/**
 * TodoLists: danh sach cac viec can lam cua nguoi dung
 *
 *  _id     : ObjectId, unique identifier created by system
 *
 *  ==> MANDATORY
 *  todo 		: String, Noi dung cua viec can lam
 *  status      : String, trang thai cua viec can lam
 *  timeTodo    : Date, thoi gian tao todo
 *  userId      : ObjectId, dai dien cho nguoi tao todo
 *  updatedAt   : Date, set to creation date, updated on changes as needed.
 *  createdAt   : Date, set to creation date.
 *
 * ==> OPTIONAL
 *
 * @type {Meteor.Collection}
 */

TodoListsCollection = new Meteor.Collection(DATABASE_PREFIX + 'todoLists',{
    transform: function(doc) {return new TodoListsDocument(doc);}
});

TodoListsDocument = function(doc){
    var self = this;
    _.extend(self, doc);
};
_.extend(TodoListsDocument.prototype, {
    constructor: TodoListsDocument
});

/**
 * Define the schema
 */

TodoListsCollection.attachSchema(new SimpleSchema ({
    todo: {
        type: String,
        label: "todo"
    },
    status: {
        type: String,
        label: "status"
    },
    timeTodo: {
        type: Date,
        label: "timeTodo"
    },
    userId: {
    	type: String,
    	label: "userId",
    },
    createdAt: {
        type: Date,
        label: "createdAt"
    },
    updatedAt: {
        type: Date,
        label: "updatedAt"
    }
}));

TodoListsCollection.deny({
    insert: function(userId, doc){
        return true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    },
    remove: function(userId, doc){
        return true;
    }
});

/**
 * Methods
 */
Meteor.methods({
	"insertNewTodo": function(doc){
        try {
            var self = this;
            // if (!self.userId)
            //     throw new Error("Please log in first");

            // doc.userId = self.userId;
            return insertNewTodo(doc);
        }
        catch(err){
            if(err.reason)
                throw new Meteor.Error(403, err.reason);
            throw new Meteor.Error(403, err.message);
        }
    },
    "removeTodo": function(idTodo) {
        try {
            var self = this;
            // if (!self.userId)
            //     throw new Error("Please log in first");
            return removeTodo(idTodo);
        }
        catch(err){
            if(err.reason)
                throw new Meteor.Error(403, err.reason);
            throw new Meteor.Error(403, err.message);
        }
    }
});

/**
 * Function or class
 */
var insertNewTodo = function (doc) {
	doc.userId = "admin";
    doc.status = TASK_STATUS.ACTIVE;
	doc.updatedAt = new Date();
    doc.createdAt = new Date();
    return TodoListsCollection.insert(doc);
};
var removeTodo = function(idTodo) {
    var task = TodoListsCollection.findOne(idTodo);
    if(!task)
        throw new Error("Not found task")
    return TodoListsCollection.remove(idTodo);
};
/**
 * export
 */

(function(){
    var self = this;
    self.insertNewTodo = insertNewTodo;
    self.removeTodo = removeTodo
}).apply(APP.namespace('app.collections.TODOLISTS'));
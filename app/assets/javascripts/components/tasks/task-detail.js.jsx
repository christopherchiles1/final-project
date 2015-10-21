(function(root) {
  'use strict';

  root.TaskDetail = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      if (this.props.task) {
        return {
          title: this.props.task.title,
          description: this.props.task.description,
          deadline: this.props.task.deadline
        };
      } else {
        return { title: '', description: '', deadline: '' };
      }
    },

    componentDidMount: function () {
      this.refs.titleInput.getDOMNode().focus();
    },

    createTask: function (e) {
      e.preventDefault();
      var task = {
        title: this.state.title,
        description: this.state.description,
        deadline: this.state.deadline,
        todos_attributes: [] // Add todos here!!
      };

      var callback = function () { this.props.toggleDetail(); }.bind(this);

      TaskActions.createTask(task, callback);
    },

    updateTask: function (e) {
      e.preventDefault();
      var task = {
        id: this.props.task.id,
        title: this.state.title,
        description: this.state.description,
        deadline: this.state.deadline,
        todos_attributes: ['test'] // Add todos here!!
      };

      var callback = function () { this.props.toggleDetail(); }.bind(this);
      TaskActions.updateTask(task, callback);
    },

    deleteTask: function (e) {
      e.preventDefault();
      var task = {
        id: this.props.task.id
      };

      TaskActions.deleteTask(task);
    },

    toggleDetail: function (e) {
      e.preventDefault();
      this.props.toggleDetail();
    },

    render: function () {
      var todoList;
      if (this.props.task) {
        todoList = this.props.task.todos.map(function (todo) {
          return <div key={todo.id}>{todo.body}</div>;
        }.bind(this));
      } else {
        todoList = <div className="todos-list empty"></div>;
      }
      var callback;
      var trash;
      var text;
      if (this.props.task) {
        callback = this.updateTask;
        text = "Update";
        trash = (
          <button className="btn btn-danger pull-right"
            onClick={this.deleteTask}>
            Delete
          </button>
        );
      } else {
        callback = this.createTask;
        text = "New Task";
      }

      return (
        <div className="task-detail">
          <form className="task-detail-form">
            <span className="glyphicon glyphicon-chevron-up option right"
              aria-hidden="true"
              onClick={this.toggleDetail}></span>
            <input className="task-detail-input title"
              ref="titleInput"
              placeholder="Task Title"
              type="text"
              valueLink={this.linkState("title")}
            />
            <div className="breakline"></div>
            <textarea className="task-detail-input description"
              rows="5"
              placeholder="Task Description"
              type="text"
              valueLink={this.linkState("description")}
            />
            <div className="breakline"></div>
            { todoList }
            <button className="btn btn-primary pull-right"
              onClick={callback}>{text}</button>
            { trash }
            <button className="btn btn-link"
              onClick={this.toggleDetail}>Cancel</button>
          </form>
        </div>
      );
    }
  });
}(this));

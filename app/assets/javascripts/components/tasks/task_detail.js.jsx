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

    createTask: function (e) {
      e.preventDefault();
      var task = {
        project_id: this.props.project.id,
        title: this.state.title,
        description: this.state.description,
        deadline: this.state.deadline,
        todos_attributes: [] // Add todos here!!
      };

      var callback = function () { this.props.getPreview(); }.bind(this);

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

      var callback = function () { this.props.getPreview(); }.bind(this);
      TaskActions.updateTask(task, callback);
    },

    deleteTask: function (e) {
      e.preventDefault();
      var task = {
        id: this.props.task.id,
        project_id: this.props.project.id
      };

      TaskActions.deleteTask(task);
    },

    getPreview: function (e) {
      e.preventDefault();
      this.props.getPreview();
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
          <input className="custom-input"
            placeholder="Task Title"
            type="text"
            valueLink={this.linkState("title")}
          />
          <textarea className="custom-input"
            rows="5"
            placeholder="Task Description"
            type="text"
            valueLink={this.linkState("description")}
          />
          <input className="custom-input"
              type="date"
              valueLink={this.linkState("deadline")} />
          { todoList }
          <button className="btn btn-primary pull-right"
            onClick={callback}>{text}</button>
          { trash }
          <button className="btn btn-link"
            onClick={this.getPreview}>Cancel</button>
        </div>
      );
    }
  });
}(this));

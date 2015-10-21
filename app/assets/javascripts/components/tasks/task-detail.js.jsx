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

    render: function () {
      var todoList;
      if (this.props.task) {
        todoList = this.props.task.todos.map(function (todo) {
          return <div key={todo.id}>{todo.body}</div>;
        }.bind(this));
      } else {
        todoList = <div className="todos-list empty"></div>;
      }
      return (
        <div className="task-detail">
          <div className="task-detail-header">
            <span className="glyphicon glyphicon-chevron-up option right"
              aria-hidden="true"
              onClick={this.props.toggleDetail}></span>
            <input className="task-detail-input title"
              ref="titleInput"
              placeholder="Task Title"
              type="text"
              valueLink={this.linkState("title")}
            />
          </div>
          <div className="breakline"></div>
          <textarea className="task-detail-input description"
            rows="5"
            placeholder="Task Description"
            type="text"
            valueLink={this.linkState("description")}
          />
          <div className="breakline"></div>
          { todoList }
          {/* Buttons */}
          <button className="btn btn-primary pull-right">Update Task</button>
          <button className="btn btn-link"
            onClick={this.toggleDetail}>Cancel</button>
        </div>
      );
    }
  });
}(this));

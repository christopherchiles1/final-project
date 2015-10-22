(function(root) {
  'use strict';

  root.TaskDetail = React.createClass({
    getPreview: function (e) {
      e.preventDefault();
      this.props.getPreview();
    },

    getForm: function (e) {
      e.preventDefault();
      this.props.getForm();
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
          <span className="glyphicon glyphicon-chevron-up option right"
            onClick={this.getPreview}></span>
          <span className="glyphicon glyphicon-chevron-pencil option right"
            onClick={this.getForm}></span>
          <div>
            {this.props.task.title}
          </div>
          <div>
            {this.props.task.detail}
          </div>
          <div>
            {this.props.task.deadline}
          </div>
          <div className="breakline"></div>
          { todoList }
        </div>
      );
    }
  });
}(this));

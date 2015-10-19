(function(root) {
  'use strict';

  root.TaskDetail = React.createClass({
    getInitialState: function () {
      return {
        todos: TodoStore.taskTodos(this.props.task)
      };
    },

    componentDidMount: function () {
      TodoStore.addTodoChangeListener(this._onChange);
      TodoActions.fetchTaskTodos(this.props.task);
    },

    componentWillUnmount: function () {
      TodoStore.removeTodoChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({
        tasks: TodoStore.taskTodos(this.props.task)
      });
    },

    render: function () {
      // var todoList;
      // if (this.state.todos) {
      //   todoList = this.state.todos.map(function (todo) {
      //     return <div>{todo.body}</div>;
      //   }.bind(this));
      // } else {
      //   todoList = <div className="todos-list empty"></div>;
      // }
      return (
        <div className="task-detail hover-options">
          {this.props.task.title}
          <span className="glyphicon glyphicon-chevron-up pull-right hover-option"
            aria-hidden="true"
            onClick={this.props.toggleDetail}></span>
        </div>
      );
    }
  });
}(this));

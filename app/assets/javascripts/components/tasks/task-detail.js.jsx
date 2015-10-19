(function(root) {
  'use strict';

  root.TaskDetail = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      var initialState;
      if (this.props.task) {
        initialState = {
          title: this.props.task.title,
          description: this.props.task.description,
          deadline: this.props.task.deadline
        };
      } else {
        initialState = {
          title: '', description: '', deadline: ''
        };
      }

      return $.extend(initialState, {
        todos: TodoStore.taskTodos(this.props.task),
      });
    },

    componentDidMount: function () {
      TodoStore.addTodoChangeListener(this._onChange);
      TodoActions.fetchTaskTodos(this.props.task);
      this.refs.titleInput.getDOMNode().focus();
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
        <div className="task-detail">
          <span className="glyphicon glyphicon-chevron-up pull-right"
            aria-hidden="true"
            onClick={this.props.toggleDetail}></span>
          <form>
            <div>
              <input className="task-detail-input title"
                ref="titleInput"
                placeholder="Task Title"
                type="text"
                valueLink={this.linkState("title")}
              />
            </div>
            <div>
              <input className="task-detail-input description"
                rows="5"
                placeholder="Task Description"
                type="text"
                valueLink={this.linkState("description")}
              />
            </div>
          </form>
        </div>
      );
    }
  });
}(this));

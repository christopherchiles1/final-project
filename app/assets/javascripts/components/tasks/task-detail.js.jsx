(function(root) {
  'use strict';

  root.TaskDetail = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      if (this.props.task) {
        return {
          title: this.props.task.title,
          description: this.props.task.description,
          deadline: this.props.task.deadline,
          todos: this.props.task.todos
        };
      } else {
        return { title: '', description: '', deadline: '', todos: [] };
      }
    },

    componentDidMount: function () {
      this.refs.titleInput.getDOMNode().focus();
    },

    render: function () {
      var todoList;
      if (this.state.todos) {
        todoList = this.state.todos.map(function (todo) {
          return <div key={todo.id}>{todo.body}</div>;
        }.bind(this));
      } else {
        todoList = <div className="todos-list empty"></div>;
      }
      return (
        <div className="task-detail">
          <span className="glyphicon glyphicon-chevron-up option right"
            aria-hidden="true"
            onClick={this.props.toggleDetail}></span>
          <form>
            <div>
              <input className="task-detail-input title"
                ref="titleInput"
                placeholder="Task Title"
                type="text"
                valueLink={this.linkState("title")}cal

              />
            </div>
            <div className="breakline"></div>
            <div>
              <textarea className="task-detail-input description"
                rows="5"
                placeholder="Task Description"
                type="text"
                valueLink={this.linkState("description")}
              />
            </div>
          </form>
          <div className="breakline"></div>
          { todoList }
        </div>
      );
    }
  });
}(this));

(function(root) {
  'use strict';

  root.TodosList = React.createClass({
    render: function () {
      return (
        <div className="todos-list">
          Checklist:
          {
            this.props.todos.map(function (todo) {
              return <div key={todo.id}>{todo.body}</div>;
            })
          }
        </div>
      );
    }
  });
}(this));

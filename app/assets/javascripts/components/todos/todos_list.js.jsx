(function(root) {
  'use strict';

  root.TodosList = React.createClass({
    // gets todos_attributes in props
    render: function () {
      return (
        <div className="todos-list">
          Checklist:
          {
            this.props.todos.map(function (todo) {
              return <TodosListItem todo={todo}/>;
            })
          }
        </div>
      );
    }
  });
}(this));
